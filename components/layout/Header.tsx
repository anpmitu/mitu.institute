import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralNavLaptopDesktop,
  GeneralNavTablet
} from '@/components/general'
import { PopupUIFormAlpha } from '@/components/popups'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const links = [
    {
      href: routesFront.home,
      val: 'Бакалавриат'
    },
    {
      href: routesFront.home,
      val: 'Магистратура'
    },
    {
      href: routesFront.home,
      val: 'Дополнительное образование'
    }
  ]

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <BtnSkipNav />
          <GeneralLogo classNames={[stls.logo]} />
          <div className={stls.contactNav}>
            <div className={stls.phoneAddress}>
              <GeneralPhoneNumber withIcon withLabel />
              <GeneralAddress
                classNames={[stls.address, stls.laptopDesktop]}
                withIcon
              />
            </div>
            <GeneralNavLaptopDesktop links={links} />
          </div>

          <Popup
            trigger={() => (
              <BtnAlpha
                variant='delta-reverse'
                classNames={[stls.btn, stls.btnAlpha]}>
                <span className={stls.btnTextAlt}>Связаться</span>
                <span className={stls.btnText}>Заказать звонок</span>
              </BtnAlpha>
            )}
            closeOnDocumentClick
            modal
            nested>
            {(close: MouseEventHandler) => (
              <PopupUIFormAlpha close={close} isPopup />
            )}
          </Popup>
        </div>
        <GeneralNavTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default Header
