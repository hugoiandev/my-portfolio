import React from 'react'

const IntroText = ({ text }) => {
  return (
    <div>
      {text && text.map((item, index) => {
        return (
          <span key={index}>{item}</span>
        )
      })}
    </div>
  )
}

export default IntroText
