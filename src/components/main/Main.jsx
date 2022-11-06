import React, { useState } from "react"
import QuestionBox from "../questionBox/QuestionBox"

import Subheading from "../subheading/Subheading"


import './Main.scss'

const Main = () => {
  const [isActive, setIsActive] = useState(true)

  const handleShow = () => {
    setTimeout(() => {
      setIsActive(false)
    }, 3500)
  }

  return (
    <>
      <div className="main">
        {handleShow()}
        {isActive ? <Subheading /> : <QuestionBox />}
      </div>
    </>

  )
}

export default Main
