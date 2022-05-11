import React from 'react'
import style from '../styles/modules/title.modules.scss';

function PageTitle({children, ...rest }) {
  return (
      <p className={style.title} {...rest}>
      {children}
      </p>
  )
}

export default PageTitle