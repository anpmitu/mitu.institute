import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeImgTemplateProps = TypeClassNames &
  TypeImg & {
    readonly src: StaticImageData | string
    readonly alt: string
    readonly title?: string
    readonly faded?: boolean
    readonly filter?: boolean
    readonly filterAlt?: boolean
    readonly priority?: boolean
    readonly unoptimized?: boolean
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  faded,
  filter,
  filterAlt,
  priority,
  unoptimized
}: TypeImgTemplateProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.containerFaded]: faded },
          { [stls.containerFilter]: filter },
          { [stls.containerFilterAlt]: filterAlt },
          getClassNames({ classNames })
        ) || undefined
      }
      title={title}>
      <div
        className={cn({
          [stls.faded]: faded,
          [stls.filter]: filter,
          [stls.filterAlt]: filterAlt,
          [stls.isHidden]: !faded && !filter && !filterAlt
        })}></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={stls.img}
        placeholder='blur'
        blurDataURL={base64pixel}
        priority={priority}
        unoptimized={unoptimized}
      />
    </div>
  )
}

export default ImgTemplate
