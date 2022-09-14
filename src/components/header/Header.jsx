import React from 'react'
import './Header.scss'

const Header = () => {
<<<<<<< HEAD
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
=======

    return (
        <>

          <div className="header">
              ZappaQuiz
          </div>

        </>
    )
>>>>>>> b467a1b4dfc10818bbe6988f7f8577a38ffc4c5a
}

export default Header