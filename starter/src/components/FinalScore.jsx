import React, { useState } from 'react';
import * as qbox from './QuestionBox.jsx';


function FinalScore() {

    const finalScore = useState(qbox.score);
    const questionTotal = useState(qbox.qlength);

	const scoreText = useState(["The man from Utopia!", "Wild love", "Tryin’ To Grow A Chin",
			"Cosmik Debris", "Dancing fool", "Shut up and play your guitar", "Dumb all over"]);

    const scoreComment = (finalScore) => {
    if (finalScore === 10) {
        return scoreText[0];
        }
    if (finalScore > 7 && finalScore < 10) {
        return scoreText[1];
        }
    if (finalScore > 5 && finalScore < 8) {
        return scoreText[2];
        }
    if (finalScore > 3 && finalScore < 6) {
        return scoreText[3];
        }
    if (qbox.score > 1 && finalScore < 4) {
        return scoreText[4];
        }
    if (finalScore === 1) {
        return scoreText[5];
        }
    if (finalScore === 0) {
        return  scoreText[6];
        }
    }

    return (
        <div>
            <div className='score-section'>					
                    You scored {finalScore} out of {questionTotal}					
            </div>
            <div className='score-section'>	
                {scoreComment(finalScore)}
            </div>
        </div>
    );
}

export default FinalScore;