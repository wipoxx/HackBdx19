import { Robot } from "./Robot";
import { Position } from "./Position";
import { Cards } from "./Cards";
import { map } from "./map";
import { Utilities } from "./Utilities";
export class Game {
	constructor(nbRobot, nbTours) {
		//Definition de constante du jeu
		const PosDefault = [
			new Position(0, 0),
			new Position(10, 0),
			new Position(0, 10),
			new Position(10, 10),
		];
		const OrientDefault = ["SOUTH", "SOUTH", "NORTH", "NORTH"];

		this.nbRobot = nbRobot;
		this.nbTours = nbTours;
		this.robots = [];

		for (var i = 0; i < nbRobot; i++) {
			this.robots.push(new Robot(0, PosDefault[i], [], OrientDefault[i]));
		}
	}

	newBatteryPopUp() {
		var random = Utilities.getRandomInt(5, 10);
		var maxWeight = 0;
		var tmpX;
		var tmpY;
		map.forEach(square => {
			if (square.type !== "grass" || square.content !== null) {
				var x = square.x;
				var y = square.y;
				var weight = 0;
				this.robots.forEach(robot => {
					var dist =
						robot.getPosition().getX() * x - robot.getPosition().getY() * y;
					if (dist >= random) {
						weight = weight + 1;
					}
				});
				if (weight > maxWeight) {
					maxWeight = weight;
					tmpX = x;
					tmpY = y;
				}
			}
		});
		map.forEach(square => {
			if (square.x === tmpX && square.y === tmpY) {
				square.content = "battery";
			}
		});
	}

	//Appelle les fonctions d'action Move, Bonus, Malus
	doAction(robot, card) {
		if (card.cost <= robot.getEnergie()) {
			let isDone = robot[card.action];
			robot.tired(card.cost);
			return isDone;
		} else {
			throw "Plus d'énergie";
		}
		//TODO: update le content de la map  si le robot a bougé
	}

	doStructureControl(robot, card, conditionCard, suiteCard) {
		if (this.checkConditionControl(conditionCard.action, robot)) {
			switch (card) {
				case "While":
					while (
						this.checkConditionControl(conditionCard.action, robot) &&
						robot.get
					) {
						suiteCard.forEach(card => {
							try {
								this.doAction(robot, card);
							} catch (e) {
								if (e === "Plus d'énergie") throw "Plus d'énergie";
								else console.log(e);
							}
						});
					}
					break;
				case "If":
					suiteCard.forEach(card => {
						try {
							this.doAction(robot, card);
						} catch (e) {
							if (e === "Plus d'énergie") throw "Plus d'énergie";
							else console.log(e);
						}
					});
					break;
			}
		}
	}

	checkConditionControl(condition, robot) {
		switch (condition) {
			case "hasWall":
				let pos = robot.inFrontOfYou();
				return map[pos.getX()][pos.getY()].type === "grass";
			default:
				break;
		}
	}

	HandleAlgo(cards) {
		//TODO Recuperer le robot du player
		let defaultTarget = this.robots[0];
		for (var i = 0; i < cards.length; i++) {
			switch (cards[i].type) {
				case "Malus":

				case "Action":
					try {
						this.doAction(defaultTarget, cards[i]);
					} catch (e) {
						if (e === "Plus d'énergie") return defaultTarget.getPosition();
						else console.log(e);
					}
					break;
				case "Structure de controle":
					let condition = cards[i + 1];
					let struct = cards[i];
					let finAction = struct.action === "If" ? "end-If" : "end-While";
					let suiteCard = [];
					for (var j = i + 2; cards[j].action !== finAction; j++) {
						suiteCard.push(cards[j]);
					}
					try {
						this.doStructureControl(
							defaultTarget,
							struct,
							condition,
							suiteCard,
						);
					} catch (e) {
						if (e === "Plus d'énergie") return defaultTarget.getPosition();
						else console.log(e);
					}
					i = j + 1;
					break;
			}
		}
		return defaultTarget.getPosition();
	}

	getDataCard(id) {
		let result;
		Cards.some(card => {
			if (card.id === id) {
				result = card;
				return true;
			}
		});
		return result;
	}

	//TODO: Reset la current energie et addEnergie a la fin du tour
}
