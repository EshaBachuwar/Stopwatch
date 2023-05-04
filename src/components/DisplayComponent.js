import React from 'react'

export const DisplayComponent = (props) => {
  return (
    <div className='DisplayComponent'>
        <span>{(props.time.h >=10)?props.time.h :"0"+props.time.h }</span>:&nbsp;
        <span>{(props.time.m >=10)?props.time.m :"0"+props.time.m}</span>:&nbsp;
        <span>{(props.time.s >=10)?props.time.s :"0"+props.time.s}</span>:&nbsp;
        <span>{(props.time.ms >=10)?props.time.ms :"0"+props.time.ms}</span>
    </div>
  )
}
