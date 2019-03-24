import { map } from "./map";
import { Position } from './Position';

export class Utilities {
	//Verifie si le move est correct
	static isCorrectMove(arrayPos) {
		let result = true;
		arrayPos.forEach(pos  => {
            
			let x = Object.assign(new Position(), pos).getX();
			let y = Object.assign(new Position(), pos).getY();
            
			if (
				map[x * 20 + y].type == "grass" ||
				map[x * 20 + y].content == "robot"
			) {
				result = false;
			}
		});
		return result;
	}

	static getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}
