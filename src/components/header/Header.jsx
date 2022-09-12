import React, { useState } from "react"
import QuestionBox from "../questionBox/QuestionBox"
import './Header.scss'
import Subheading from "./Subheading"




const Header = () => {
  const [isActive, setIsActive] = useState(true)

  const handleShow = () => {
    setTimeout(() => {
      setIsActive(false)
    }, 3500)

  }

  return (
    <>
      <div className="header">
        ZappaQuiz
      </div>
      {handleShow()}
      {isActive ? <Subheading /> : <QuestionBox />}


    </>

  )
}

export default Header