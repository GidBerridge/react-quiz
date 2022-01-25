import React, { useState } from 'react'

function DisplayScore(props) {
  const scoreText = useState([
    'The man from Utopia!',
    'Wild love',
    "Tryin' To Grow A Chin",
    'Cosmik Debris',
    'Dancing fool',
    'Shut up and play your guitar',
    'Dumb all over',
  ])

  const scoreComment = () => {
    // console.log(props.finalScore)
    // console.log(props.qAmount)
    if (props.finalScore === 10) {
      return scoreText[0]
    }
    if (props.finalScore > 7 && props.finalScore < 10) {
      return scoreText[1]
    }
    if (props.finalScore > 5 && props.finalScore < 8) {
      return scoreText[2]
    }
    if (props.finalScore > 3 && props.finalScore < 6) {
      return scoreText[3]
    }
    if (props.finalScore > 1 && props.finalScore < 4) {
      return scoreText[4]
    }
    if (props.finalScore === 1) {
      return scoreText[5]
    }
    if (props.finalScore === 0) {
      return scoreText[6]
    }
  }

  return (
    <div>
      <div className="score-section">
        You scored {props.finalScore} out of {props.qAmount}
      </div>
      <div className="score-section">{scoreComment(props.finalScore)}</div>
    </div>
  )
}

export default DisplayScore
