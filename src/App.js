import { useEffect, useState } from "react";
import CardsDisplay from "./components/CardsDisplay";

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCardsID, setClickedCardsID] = useState([]);

	function checkID(e) {
		const newCardID = e.target.id;
		if (clickedCardsID.includes(newCardID)) {
			checkBestScore();
			resetGame();
		} else {
			addPoint();
			addID(newCardID);
		}
	}

	function addPoint() {
		setScore((score) => score + 1);
	}

	function addID(newCardID) {
		setClickedCardsID((setClickedCardsID) => [
			...setClickedCardsID,
			newCardID,
		]);
	}

	function checkBestScore() {
		if (score > bestScore) {
			setBestScore(score);
		}
	}

	function resetGame() {
		setScore(0);
		setClickedCardsID([]);
	}

	return (
		<div>
			<h1>Memory Game</h1>
			<p>
				Get points by clicking on an image but don't click on any more
				than once!
			</p>
			<div>
				<h2>Score: {score}</h2>
				<h2>Best Score: {bestScore}</h2>
			</div>
			<CardsDisplay checkID={checkID} score={score}></CardsDisplay>
		</div>
	);
}

export default App;
