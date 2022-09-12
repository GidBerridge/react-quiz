import React, { useState } from "react"
import QuestionBox from "../questionBox/QuestionBox"
import './Main.scss' 
import Subheading from "../subheading/Subheading"

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
            {isActive ? <Subheading /> : <QuestionBox/>}
          </div>
            
        </>
        
    )
}

export default Main
