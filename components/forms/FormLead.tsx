import stls from '@/styles/components/forms/FormLead.module.sass'
import {
  TypeClassNames,
  TypeFormAlphaValues,
  TypeIsPopup,
  TypeVariantForm
} from '@/types/index'
import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import { getClassNames, onSubmitForm } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { GeneralPopup } from '@/components/general'
import { PopupLoader, PopupThankyou } from '@/components/popups'
import {
  InputName,
  InputPhone,
  InputEmail,
  InputSubmit
} from '@/components/inputs'

type TypeFormLeadProps = TypeClassNames & TypeIsPopup & TypeVariantForm

const FormLead = ({ classNames, isPopup, variant }: TypeFormLeadProps) => {
  const { asPath } = useRouter()
  const { program } = useContext(ContextProgramContext)

  const [loaderIsOpen, setLoaderIsOpen] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  const id = uuidv4()
  const programTitle = program?.title

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<TypeFormAlphaValues>()

  useEffect(() => {
    isPopup && setFocus('name')
  }, [isPopup, setFocus])

  return (
    <>
      <Popup
        open={loaderIsOpen}
        modal
        lockScroll
        nested
        closeOnDocumentClick
        onClose={() => setLoaderIsOpen(false)}>
        <GeneralPopup close={() => setLoaderIsOpen(false)} slighter>
          <PopupLoader />
        </GeneralPopup>
      </Popup>
      <Popup
        open={thanksIsOpen}
        modal
        lockScroll
        nested
        closeOnDocumentClick
        onClose={() => setThanksIsOpen(false)}>
        <GeneralPopup close={() => setThanksIsOpen(false)} slighter>
          <PopupThankyou close={() => setThanksIsOpen(false)} id={id} />
        </GeneralPopup>
      </Popup>
      <form
        method='POST'
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }
        onSubmit={handleSubmit(formValues => {
          setLoaderIsOpen(true)
          onSubmitForm({
            formValues,
            id,
            asPath,
            programTitle,
            reset,
            setLoaderIsOpen,
            setThanksIsOpen
          })
        })}>
        <div
          className={cn(stls.inputs, {
            [stls.inputsVariantBeta]: variant === 'beta'
          })}>
          <InputName
            register={register}
            error={errors.name}
            classNames={[
              stls.input,
              cn({ [stls.inputVariantBeta]: variant === 'beta' })
            ]}
            variant={variant}
          />
          <InputPhone
            register={register}
            error={errors.phone}
            classNames={[
              stls.input,
              cn({ [stls.inputVariantBeta]: variant === 'beta' })
            ]}
            variant={variant}
          />
          <InputEmail
            register={register}
            error={errors.email}
            classNames={[
              stls.input,
              stls.inputEmail,
              cn({ [stls.inputVariantBeta]: variant === 'beta' })
            ]}
            variant={variant}
          />
          <InputSubmit
            errors={errors}
            classNames={[
              stls.input,
              stls.submit,
              cn({
                [stls.inputVariantBeta]: variant === 'beta',
                [stls.inputSubmitVariantBeta]: variant === 'beta'
              })
            ]}
            variant={variant}
          />
        </div>
        <p
          className={cn(stls.agreement, {
            [stls.agreementVariantBeta]: variant === 'beta'
          })}>
          Отправляя заявку, Вы соглашаетесь с политикой конфиденциальности и
          условиями обработки персональных данных
        </p>
      </form>
    </>
  )
}

export default FormLead
