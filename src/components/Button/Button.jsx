import React from 'react'
import './button.scss'

export const Button = (props) => {
  return (
    <button
      className={
        props?.variant === 'light'
          ? 'light__btn button__com'
          : props?.variant === 'dark'
            ? 'dark__btn button__com'
            : 'button__com'}
    >
      {props.buttonText}
    </button>
  )
}
