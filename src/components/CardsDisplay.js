//use effect genera cambio de orden display
import { useEffect, useState } from "react";
import "../css/Cards.css";
import image1 from "../images/GRADI3NTS-01.png";
import image2 from "../images/GRADI3NTS-02.png";
import image3 from "../images/GRADI3NTS-03.png";
import image4 from "../images/GRADI3NTS-04.png";
import image5 from "../images/GRADI3NTS-05.png";
import image6 from "../images/GRADI3NTS-06.png";
import image7 from "../images/GRADI3NTS-07.png";
import image8 from "../images/GRADI3NTS-08.png";
import image9 from "../images/GRADI3NTS-09.png";
import image10 from "../images/GRADI3NTS-10.png";
import image11 from "../images/GRADI3NTS-11.png";
import image12 from "../images/GRADI3NTS-12.png";

function CardsDisplay(props) {
	const [cardsArray, setCardsArray] = useState([
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
		image9,
		image10,
		image11,
		image12,
	]);

	useEffect(
		() => {
			setCardsArray(shuffleArray(cardsArray));
			const cards = document.querySelectorAll("img");
			console.log(cards);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props.score]
	);

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const cardsElements = cardsArray.map((card, index) => {
		return (
			<img
				src={card}
				alt="card"
				id={card}
				key={index}
				className="card"
				onClick={props.checkID}
			></img>
		);
	});

	return <div className="cardsContainer">{cardsElements}</div>;
}

export default CardsDisplay;
