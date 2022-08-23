import React, { useState } from "react";
import GridItem from "./GridItem.js";
import styled from "styled-components";

const DevilGrid = ({
	cardArrays,
	setCard,
	setSelectedCard,
	selectedCard,
	setCardTopX,
	setCardTopY,
}) => {
	const cardNodes = cardArrays.map((object, index) => {
		return (
			<GridItem
				setCard={setCard}
				cards={object.cards}
				positionX={object.positionX}
				positionY={object.positionY}
				key={index}
				setSelectedCard={setSelectedCard}
				selectedCard={selectedCard}
				setCardTopX={setCardTopX}
				setCardTopY={setCardTopY}
			/>
		);
	});

	// const topCards = tops.map((topCard, index) => {
	//   return <GridItem setCard={setCard} topCard={topCard} key={index} />
	// })

	return (
		<>
			<Wrapper>{cardNodes}</Wrapper>
		</>
	);
};

const Wrapper = styled("div")`
	border: solid black 5px;
	border-radius: 10px;
	margin: 0 10%;
	padding: 1%;
	background-color: green;
	width: 70%;
	column-gap: 1%;
	row-gap: 8%;

	display: grid;
	place-items: center;
	justify-items: center;

	grid-template-columns: repeat(8, 10%);
	grid-template-rows: repeat(3, 25%);
`;

export default DevilGrid;
