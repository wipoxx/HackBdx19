import { Robot } from './Robot';
import Position from './Position';
import Cards from './Cards';

export class Game{
    constructor(nbRobot, nbTours){

        //Definition de constante du jeu
        const PosDefault = [new Position(0,0), new Position(19,0), new Position(0,19), new Position(19,19)]
        const OrientDefault = ["SOUTH", "SOUTH", "NORTH", "NORTH"];

        this.nbRobot = nbRobot;
        this.nbTours = nbTours;
        this.robots = [];
        
        for(var i = 0; i < nbRobot; i++) {
            this.robots.push(new Robot(0, PosDefault[i], [], OrientDefault[i])); 
        }
    }

    newBatteryPopUp(){
        var random = getRandomInt(5, 10);
        //TODO boucle map
        var x;
        var y;
        robots.forEach(robot => {
            var dist = robot.getPosition().getX() * x - robot.getPosition().getY() * y;
            if(dist >= random){
                //TODO changé content
            }
        });
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

      doAction(robot, action, cost){
        if(cost <= robot.getEnergie()){
            let isDone = robot[action];
            if(isDone) {
                robot.tired(cost);
            }
        }
        //TODO: update le content de la map  si le robot a bougé
    }

    getDataCard(id){
        Cards.forEach(card => {
            if(card.id == id) {
                return card;
            }
        });
    }

    //TODO: Reset la current energie et addEnergie a la fin du tour

}