import React, { useState } from 'react'

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

  return (
    <div>
      <div className="score-section">
        You scored {props.totalScore()} out of {props.qAmount}
      </div>
      <div className="score-section">{scoreComment()}</div>
    </div>
  )
}

export default DisplayScore
