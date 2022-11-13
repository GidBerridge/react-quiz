import React from 'react'
import './DisplayScore.scss'
import FadeIn from 'react-fade-in';

function DisplayScore(props) {
  const scoreText = [
    'Dumb all over',
    "Jesus Thinks You're A Jerk",
    "Dancin' fool",
    'Cosmik Debris',
    "Shut up 'n play your guitar",
    'The Meek Shall Inherit Nothing',
    "Tryin' To Grow A Chin",
    'Rudy Wants To Buy Yez A Drink',
    'Wowie Zowie',
    'Wild love',
    'The man from Utopia!',
  ]

  const scoreComment = () => {
    return scoreText[props.totalScore()]
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <FadeIn>
      <div className='card-container card-container__score'>
        <div className="card card__score">
          <p className="m-0">You scored</p>
          <div className="number color-change">
            {props.totalScore()}
          </div>
          <p className="m-0">out of {props.qAmount}</p>
        </div>
        <div className="card card__score--comment text_shadows my-3">{scoreComment()}</div>
        <div className="card card__try-again glow p-1 p-md-3" onClick={refreshPage}>Try again?</div>
      </div>
    </FadeIn>
  )
}



export default DisplayScore
