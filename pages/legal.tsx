import stls from '@/styles/pages/PageLegal.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageLegalProps } from '@/types/index'
import { useContext, useState, useEffect } from 'react'
import cn from 'classnames'
// import papaparse from 'papaparse'
import { Wrapper } from '@/components/layout'
import { phoneNumber, routesFront, email, address } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { ContextCategoriesContext } from '@/context/index'
import { IconFile } from '@/components/icons'

const PageLegal: NextPage<TypePageLegalProps> = ({
  categories,
  documentCategories,
  documentSubcategories
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const [curCategory, setCurCategory] = useState<string | null>(
    documentCategories?.[0]?.title || null
  )
  // const [curCategory, setCurCategory] = useState<string | null>(
  //   'Основные сведения'
  // )

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })

    setIsBrowser(true)
  }, [categories])

  return (
    <section className={stls.container}>
      <Wrapper>
        {/* {console.log(
          isBrowser &&
            papaparse.parse(
              'https://res.cloudinary.com/anpmitu/raw/upload/v1643800247/test_cc5760f2b1.csv',
              {
                download: true,
                complete: result => {
                  console.log(result)
                }
              }
            )
        )}

        {isBrowser &&
          papaparse.parse(
            'https://res.cloudinary.com/anpmitu/raw/upload/v1643800247/test_cc5760f2b1.csv',
            {
              download: true,
              complete: result => <>Test</>
            }
          )} */}

        <h1 className={stls.title}>Сведения об организации</h1>
        <div className={stls.content}>
          <div className={stls.left}>
            <ul className={stls.documentCategories}>
              <li
                className={cn(stls.documentCategoryItem, {
                  [stls.active]: 'Основные сведения' === curCategory
                })}>
                <button
                  onClick={() => setCurCategory('Основные сведения' || null)}
                  className={stls.documentCategoryItemBtn}>
                  <h2 className={stls.h2}>Основные сведения</h2>
                </button>
              </li>
              {documentCategories?.map((category, idx) => (
                <li
                  key={
                    (category.title || 'PageLegal_documentCategories_item') +
                    idx
                  }
                  className={cn(stls.documentCategoryItem, {
                    [stls.active]: category.title === curCategory
                  })}>
                  <button
                    onClick={() => setCurCategory(category.title || null)}
                    className={stls.documentCategoryItemBtn}>
                    <h2 className={stls.h2}>{category.title}</h2>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <ul className={stls.documentSubcategories}>
              {curCategory === 'Основные сведения' &&
                staticItems.map((item, idx) => (
                  <li key={item.key + idx} className={stls.staticItem}>
                    <h3 className={stls.staticItemKey}>{item.key}</h3>
                    <p className={stls.staticItemVal}>{item.val}</p>
                  </li>
                ))}
              {documentSubcategories
                ?.filter(
                  subcategory =>
                    subcategory.document_category?.title === curCategory
                )
                .map((subcategory, idx) => (
                  <li
                    key={
                      (subcategory.title ||
                        'PageLegal_documentSubcategories_item') + idx
                    }
                    className={stls.documentSubcategoriesItem}>
                    <h3 className={stls.h3}>{subcategory.title}</h3>
                    <ul className={stls.documentSubcategoriesDocuments}>
                      {subcategory.documents?.map((document, idx) => (
                        <li
                          key={
                            (document.title ||
                              'PageLegal_documentSubcategories_documents_item') +
                            idx
                          }
                          className={stls.documentSubcategoriesDocumentsItem}>
                          <a
                            href={document.pdf?.url}
                            target='_blank'
                            rel='noreferrer noopener'
                            className={
                              stls.documentSubcategoriesDocumentsItemLink
                            }>
                            <IconFile classNames={[stls.icon]} />
                            {document.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.legal, context })

export default PageLegal
