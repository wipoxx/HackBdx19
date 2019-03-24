import {
    Robot
} from './Robot';
import Position from './Position';
import {
    Cards
} from './Cards';
import map from './map';

export class Game {
    constructor(nbRobot, nbTours) {

        //Definition de constante du jeu
        const PosDefault = [new Position(0, 0), new Position(10, 0), new Position(0, 10), new Position(10, 10)]
        const OrientDefault = ["SOUTH", "SOUTH", "NORTH", "NORTH"];

        this.nbRobot = nbRobot;
        this.nbTours = nbTours;
        this.robots = [];

        for (var i = 0; i < nbRobot; i++) {
            this.robots.push(new Robot(0, PosDefault[i], [], OrientDefault[i]));
        }
    }

    newBatteryPopUp() {
        var random = getRandomInt(5, 10);
        var maxWeight = 0;
        var tmpX;
        var tmpY;
        map.forEach(square => {
            if (square.type !== "grass" || square.content !== null) {
                var x = square.x;
                var y = square.y;
                var weight = 0;
                robots.forEach(robot => {
                    var dist = robot.getPosition().getX() * x - robot.getPosition().getY() * y;
                    if (dist >= random) {
                        weight = weight + 1;
                    }
                });
                if (weight > maxWeight) {
                    maxWeight = weight;
                    tmpX = x;
                    tmpY = y
                }
            }
        })
        map.forEach(square => {
            if (square.x === tmpX && square.y === tmpY) {
                square.content = "battery"
            }
        })

    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    doAction(robot, action, cost) {
        if (cost <= robot.getEnergie()) {
            let isDone = robot[action];
            if (isDone) {
                robot.tired(cost);
            }
        }
        //TODO: update le content de la map  si le robot a bougé
    }

    getDataCard(id) {
        Cards.forEach(card => {
            if (card.id == id) {
                return card;
            }
        });
    }

    //TODO: Reset la current energie et addEnergie a la fin du tour

}