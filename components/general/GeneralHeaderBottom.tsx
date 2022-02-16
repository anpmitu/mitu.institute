import stls from '@/styles/components/general/GeneralHeaderBottom.module.sass'
import { TypeClassNames, TypeLinks } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconHamburger } from '@/components/icons'

type TypeGeneralHeaderBottomProps = TypeClassNames & TypeLinks

const GeneralHeaderBottom = ({
  classNames,
  links
}: TypeGeneralHeaderBottomProps) => {
  return (
    <nav
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <ul className={stls.links}>
          <li className={stls.linkItem}>
            <Link href={routesFront.programs} scroll={false}>
              <a className={stls.linkPrograms}>
                Программы <IconHamburger classNames={[stls.icon]} />
              </a>
            </Link>
          </li>
          {links?.map((link, idx) => (
            <li key={link.val + idx} className={stls.linkItem}>
              <Link href={link.href} scroll={false} passHref={link.passHref}>
                <a
                  className={cn(stls.link, { [stls.isActive]: link.isActive })}
                  target={link.target}
                  rel={
                    link.target === '_blank' ? 'noreferrer noopener' : undefined
                  }>
                  {link.val}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  )
}

export default GeneralHeaderBottom
