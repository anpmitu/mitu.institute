import stls from '@/styles/components/sections/SectionFrequentlyAskedQuestions.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralCollapse } from '@/components/general'
import { FormLead } from '@/components/forms'

type TypeContentFrequentlyAskedQuestions = {
    title: string
    text: string
}

const ContentFrequentlyAskedQuestions: Array<TypeContentFrequentlyAskedQuestions> = [
    {
        title: 'Как у вас дела?',
        text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
        title: 'Как у вас дела?',
        text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
        title: 'Как у вас дела?',
        text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
        title: 'Как у вас дела?',
        text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
        title: 'Как у вас дела?',
        text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
]



type TypeSectionFrequentlyAskedQuestionsProps = TypeClassNames

const SectionFrequentlyAskedQuestions = ({ classNames = [] }: TypeSectionFrequentlyAskedQuestionsProps) => {

    return (
        <section
            className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <h1 className={stls.title}>Нас часто спрашивают</h1>
                <div className={stls.content}>
                    <div className={stls.questions}>
                        {
                            ContentFrequentlyAskedQuestions.length && ContentFrequentlyAskedQuestions.map((item, idx) => {
                                return (
                                    <GeneralCollapse key={idx} classNames={[stls.collapse]} title={item.title}>
                                        <p className={stls.text}>
                                            {item.text}
                                        </p>
                                    </GeneralCollapse>
                                )
                            })
                        }
                    </div>
                    <FormLead classNames={[stls.form]} />
                </div>
            </Wrapper>
        </section>
    )
}

export default SectionFrequentlyAskedQuestions



