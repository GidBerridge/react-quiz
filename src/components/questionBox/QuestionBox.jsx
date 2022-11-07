import React, { useState } from 'react';
import DisplayScore from '../displayScore/DisplayScore.jsx';
import './QuestionBox.scss'


function QuestionBox(props) {
	const questions = [
		{
			questionText: 'Which of these does Frank Zappa have named after him?',
			answerOptions: [
				{ answerText: 'A comet - Zappa 421a', isCorrect: false },
				{ answerText: 'A dinosaur - Zappasaurus', isCorrect: false },
				{ answerText: 'A type of bacteria that causes acne - P. Acnes type Zappae', isCorrect: true },
				{ answerText: 'An element of the periodic table - Zapponium (Za)', isCorrect: false },
			],
		},
		{
			questionText: 'Which famous guest bass player played on the title track of Apostrophe?',
			answerOptions: [
				{ answerText: 'Greg Lake', isCorrect: false },
				{ answerText: 'Jack Bruce', isCorrect: true },
				{ answerText: 'Lemmy', isCorrect: false },
				{ answerText: 'Bill Wyman', isCorrect: false },
			],
		},
		{
			questionText: 'In January 1990, which country appointed Zappa as "Special Ambassador to the West on Trade, Culture and Tourism”?',
			answerOptions: [
				{ answerText: 'Czech Republic', isCorrect: true },
				{ answerText: 'Poland', isCorrect: false },
				{ answerText: 'Belarus', isCorrect: false },
				{ answerText: 'Hungary', isCorrect: false },
			],
		},
		{
			questionText: 'What was Franks middle name?',
			answerOptions: [
				{ answerText: 'Harold', isCorrect: false },
				{ answerText: 'Bob', isCorrect: false },
				{ answerText: 'David', isCorrect: false },
				{ answerText: 'Vincent', isCorrect: true },
			],
		},
		{
			questionText: 'In 1991, Zappa considered running for President. Who did he want as his vice president?',
			answerOptions: [
				{ answerText: 'Bill Clinton', isCorrect: false },
				{ answerText: 'Jello Biafra (from the Dead Kennedys)', isCorrect: false },
				{ answerText: 'Captain Beefheart', isCorrect: false },
				{ answerText: 'Texas billionaire Ross Perot', isCorrect: true },
			],
		},
		{
			questionText: 'Where was Frank born?',
			answerOptions: [
				{ answerText: 'Los Angeles, California', isCorrect: false },
				{ answerText: 'Baltimore, Maryland', isCorrect: true },
				{ answerText: 'Cleveland, Ohio', isCorrect: false },
				{ answerText: 'Lancaster, California', isCorrect: false },
			],
		},
		{
			questionText: "Who was 'The Indian of the band'?",
			answerOptions: [
				{ answerText: 'Ian Underwood', isCorrect: false },
				{ answerText: 'Scott Thunes', isCorrect: false },
				{ answerText: 'Jimmy Carl Black', isCorrect: true },
				{ answerText: 'Captain Beefheart', isCorrect: false },
			],
		},
		{
			questionText: "Which Zappa album features an excerpt from 'Run Home Slow', a theme tune Frank recorded for a Cowboy film in the 1960s?",
			answerOptions: [
				{ answerText: 'Lumpy Gravy', isCorrect: true },
				{ answerText: "We're only in it for the money", isCorrect: false },
				{ answerText: 'One size fits all', isCorrect: false },
				{ answerText: 'Broadway the Hardway', isCorrect: false },
			],
		},
		{
			questionText: "Which composer did Frank often say was his biggest influence as a teenager?",
			answerOptions: [
				{ answerText: 'Vivaldi', isCorrect: false },
				{ answerText: "Pierre Boulez", isCorrect: false },
				{ answerText: 'Edgard Varesse', isCorrect: true },
				{ answerText: 'Igor Stravinsky', isCorrect: false },
			],
		},
		{
			questionText: "What instrument did Frank play in his first band 'The Blackouts'?",
			answerOptions: [
				{ answerText: 'Guitar', isCorrect: false },
				{ answerText: "Drums", isCorrect: true },
				{ answerText: 'Double Bass', isCorrect: false },
				{ answerText: 'Alto Sax', isCorrect: false },
			],
		},
	];

	const questions2 = () => {
		console.log('test')
		fetch('https://api.airtable.com/v0/apppqTCPQGmQOEoi7/zappaQuiz?api_key=4EHjHf99psrakN')
			.then(res => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch(error => console.log(error))

	}

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);



	const handleScore = () => {
		return score
	}

	const handleAnswerOptionClick = (isCorrect) => {

		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};




	return (

		<div className='card-container'>
			{questions2()}
			{showScore ?
				<DisplayScore
					qAmount={questions.length}
					totalScore={handleScore}
				/>
				: (
					<>
						<div className='card p-3 p-md-4 card__question fadeIn col-12 col-md-8 col-xl-6'>
							<div className='row'>
								<div className='question-section col-12 col-lg-6'>
									<div className='question-count'>
										<span>Question {currentQuestion + 1}</span>/{questions.length}
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-section col-12 col-lg-6'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button className='mb-2' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</div>
						</div>
					</>
				)
			}
		</div >
	);
}

export default QuestionBox;
