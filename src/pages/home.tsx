import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { MyForm } from '../MyForm'
import Button from '@mui/material/Button'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const HomePage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const { t } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <h2>{t('title')}</h2>
      <Button onClick={() => changeLanguage('en')}>en</Button>
      <Button onClick={() => changeLanguage('pl')}>pl</Button>
      <MyForm
        onSubmit={({ firstName }) => {
          console.log({ firstName })
        }}
      />
    </div>
  )
}

export default HomePage
