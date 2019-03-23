import Position from './Position'
import Utilities from './Utilities'

export class Robot {
    constructor(nbBatterie, position, etat, orientation){
        this.nbBatterie = nbBatterie;
        this.position = position;
        this.orientation = orientation;
        // C'est un tableau de Malus ??
        this.etat = etat; 
    }

    //Gettters
    getPosition() {
        return this.position;
    }

    getOrientation() {
        return this.orientation;
    }

    getNbBatterie() {
        return this.nbBatterie;
    }

    getEtat() {
        return this.etat;
    }

    //Deplacements
    MoveUp1(){
        Move(1);
    }
    MoveUp3(){
        Move(3);
    }
    MoveBack1(){
        Move(-1);
    }
    Jump1(){
        Move(2);
    }
    Move(nbCase){
        let arrayPos = [];
        switch(this.orientation){
            case 'NORTH':
                if(nbCase == 3) {
                    arrayPos.push(this.position.getY()-1);
                    arrayPos.push(this.position.getY()-2);
                }
                arrayPos.push(this.position.getY()-nbCase);

                if(Utilities.isCorrectMove(arrayPos)) {
                    this.position.setY(this.position.getY()-nbCase);
                }
            break;
            case 'SOUTH':
                if(nbCase == 3) {
                    arrayPos.push(this.position.getY()+1);
                    arrayPos.push(this.position.getY()+2);
                }
                arrayPos.push(this.position.getY()+nbCase);

                if(Utilities.isCorrectMove(arrayPos)) {
                    this.position.setY(this.position.getY()+nbCase);
                }
            break;
            case 'WEST':
                if(nbCase == 3) {
                    arrayPos.push(this.position.getX()-1);
                    arrayPos.push(this.position.getX()-2);
                }
                arrayPos.push(this.position.getX()-nbCase);

                if(Utilities.isCorrectMove(arrayPos)) {
                    this.position.setX(this.position.getX()-nbCase);
                }
            break;
            case 'EAST':
                if(nbCase == 3) {
                    arrayPos.push(this.position.getX()+1);
                    arrayPos.push(this.position.getX()+2);
                } 
                arrayPos.push(this.position.getX()+nbCase);

                if(Utilities.isCorrectMove(arrayPos)) {
                    this.position.setX(this.position.getX()+nbCase);
                }
            break;
        }
    }

    //Fonctions de Rotation 
    Rotate(direction){
        if(direction == "HORAIRE"){
            switch(this.orientation){
                case 'NORTH':
                    this.orientation = 'EAST';
                break;
                case 'SOUTH':
                    this.orientation = 'WEST';
                break;
                case 'WEST':
                    this.orientation = 'NORTH';
                break;
                case 'EAST':
                    this.orientation = 'SOUTH';
                break;
            }

        } else {
            switch(this.orientation){
                case 'NORTH':
                    this.orientation = 'WEST';
                break;
                case 'SOUTH':
                    this.orientation = 'EAST';
                break;
                case 'WEST':
                    this.orientation = 'SOUTH';
                break;
                case 'EAST':
                    this.orientation = 'NORTH';
                break;
            }
        }
    }

    RotateHoraire(){
        Rotate("HORAIRE");
    }

    AntiRotate(){
        Rotate("ANTIHORAIRE");
    }
}