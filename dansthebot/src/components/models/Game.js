import { Robot } from './Robot';
import Position from './Position'

export class Game{
    constructor(nbRobot, nbTours){

        //Definition de constante du jeu
        const PosDefault = [new Position(0,0), new Position(10,0), new Position(0,10), new Position(10,10)]
        const OrientDefault = ["SOUTH", "SOUTH", "NORTH", "NORTH"];

        this.nbRobot = nbRobot;
        this.nbTours = nbTours;
        this.robots = [];
        
        for(var i = 0; i < nbRobot; i++) {
            this.robots.push(new Robot(0, PosDefault[i], [], OrientDefault[i])); 
        }
    }

    
    doAction(robot, action){
        robot[action];
    }
}