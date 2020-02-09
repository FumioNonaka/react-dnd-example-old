import React from 'react';
import { canMoveKnight, moveKnight } from '../Game'
import Square from './Square'
import Knight from './Knight'

const boardStyle = {
	width: 500,
	height: 500,
	border: '1px solid gray',
	display: 'flex',
	flexWrap: 'wrap'
};
const squareStyle = { width: '12.5%', height: '12.5%'};
function renderSquare(i, [knightX, knightY]) {
	const x = i % 8;
	const y = Math.floor(i / 8);
	const black = (x + y) % 2 === 1;
	const isKnightHere = knightX === x && knightY === y;
	const piece = isKnightHere ? <Knight /> : null;
	return (
		<div
			key={i}
			style={squareStyle}
			onClick={() => handleSquareClick(x, y)}
		>
			<Square black={black}>{piece}</Square>
		</div>
	);
}
function handleSquareClick(toX, toY) {
	if (canMoveKnight(toX, toY)) {
		moveKnight(toX, toY);
	}
}
function Board({ knightPosition }) {
	const squares = []
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition))
	}
	return (
		<div style={boardStyle}>
			{squares}
		</div>
	);
}

export default Board;
