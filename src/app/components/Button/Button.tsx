import React from 'react'


export default function Button({ButtonProps}:{ButtonProps:{title:string}}) {
  return (
   <button>{ButtonProps.title}</button>
  )
}
