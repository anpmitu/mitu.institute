import stls from '@/styles/components/icons/IconLoader.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconLoaderProps = TypeClassNames

const IconLoader = ({ classNames }: TypeIconLoaderProps) => {
  // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
  const at = useAt()

  const translations = {
    title: at.uz ? 'Yuklab olish…' : 'Загрузка...'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg
        viewBox='0 0 120 30'
        xmlns='http://www.w3.org/2000/svg'
        fill={colors.upsilon}>
        <title>{translations.title}</title>
        <circle cx='15' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
          <animate
            attributeName='r'
            from='9'
            to='9'
            begin='0s'
            dur='0.8s'
            values='9;15;9'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='0.5'
            to='0.5'
            begin='0s'
            dur='0.8s'
            values='.5;1;.5'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='105' cy='15' r='15'>
          <animate
            attributeName='r'
            from='15'
            to='15'
            begin='0s'
            dur='0.8s'
            values='15;9;15'
            calcMode='linear'
            repeatCount='indefinite'
          />
          <animate
            attributeName='fillOpacity'
            from='1'
            to='1'
            begin='0s'
            dur='0.8s'
            values='1;.5;1'
            calcMode='linear'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
    </div>
  )
}

export default IconLoader
