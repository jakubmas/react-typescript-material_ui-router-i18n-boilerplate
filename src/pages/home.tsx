import React, { useEffect } from 'react'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { MyForm } from '../MyForm'

const HomePage: React.FC<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <MyForm
      onSubmit={({ firstName }) => {
        console.log({ firstName })
      }}
    />
  )
}

export default HomePage
