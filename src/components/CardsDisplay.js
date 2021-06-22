//use effect genera cambio de orden display
import { useEffect } from "react";
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

const cardsArray = [
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
];

function CardsDisplay(props) {
	const cardsElements = cardsArray.map((card, index) => {
		return (
			<img
				src={card}
				alt="card"
				id={index}
				key={index}
				className="card"
				onClick={props.checkID}
			></img>
		);
	});

	//	useEffect();

	return <div className="cardsContainer">{cardsElements}</div>;
}

export default CardsDisplay;
