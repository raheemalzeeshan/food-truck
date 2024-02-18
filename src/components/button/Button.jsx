import React from 'react'

export default function Button(props) {
  return (
    <a href={props.link} className={props.class}>{props.btnName}</a>
  )
}
