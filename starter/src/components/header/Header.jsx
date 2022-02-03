import React from "react"
import './Header.scss' 

const Header = () => {
    return (
        <div className="header">
            ZappaQuiz
            <div className="subheading">
                <div className="subheading__text">
                    Are you the Man from Utopia or a Dancin' Fool?
                </div>
                <div className="subheading__text">
                    Test your Zappa knowledge
                </div>
            </div>
        </div>
    )
}

export default Header