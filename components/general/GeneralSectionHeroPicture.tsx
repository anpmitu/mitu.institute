import stls from '@/styles/components/general/GeneralSectionHeroPicture.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ImgHeroLady } from '@/components/imgs'
import {
  IconChat,
  IconLightBulb,
  IconVideoOnStand,
  IconGraduationHat,
  IconMagnifyingGlass
} from '@/components/icons'

type TypeGeneralSectionHeroPictureProps = TypeClassNames

const GeneralSectionHeroPicture = ({
  classNames
}: TypeGeneralSectionHeroPictureProps) => {
  const [isTurnedOn, setIsTurnedOn] = useState(false)
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <IconChat classNames={[stls.icon, stls.chat]} />
      <IconLightBulb
        classNames={[
          stls.icon,
          stls.lightBulb,
          cn({ [stls.isTurnedOn]: isTurnedOn })
        ]}
        onMouseEnter={() => setIsTurnedOn(!isTurnedOn)}
      />
      <IconMagnifyingGlass classNames={[stls.icon, stls.magnifyingGlass]} />
      <IconVideoOnStand classNames={[stls.icon, stls.videoOnStand]} />
      <IconGraduationHat classNames={[stls.icon, stls.graduationHat]} />
      <ImgHeroLady />
    </div>
  )
}

export default GeneralSectionHeroPicture
