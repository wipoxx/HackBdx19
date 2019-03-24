import { map } from "./map";

export class Utilities {
	//Verifie si le move est correct
	static isCorrectMove(arrayPos) {
		let result = true;
		arrayPos.forEach(pos => {
			let x = pos.getX();
			let y = pos.getY();

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
