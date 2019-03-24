import {Position} from './Position'
import {Utilities} from './Utilities'

export class Robot {
    constructor(nbBatterie, position, etat, orientation, energie){
        this.nbBatterie = nbBatterie;
        this.position = position;
        this.orientation = orientation;
        this.energie = energie;
        this.currentEnergie = this.energie;
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
    getEnergie() {
        //TODO Prendre en compte les etats
        return this.energie;
    }

    //Setter
    addEnergie() {
        this.energie++;
    }

    tired(cost) {
        this.currentEnergie = this.currentEnergie - cost;
    }


    //Deplacements
    MoveUp1(){
        return this.Move(1);
    }
    MoveUp3(){
        return this.Move(3);
    }
    MoveBack1(){
        return this.Move(-1);
    }
    Jump1(){
        return this.Move(2);
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
                    return true;
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
                    return true;
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
                    return true;
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
                    return true;
                }
            break;
        }
        return false;
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
        return true;
    }

    RotateHoraire(){
        return this.Rotate("HORAIRE");
    }

    AntiRotate(){
        return this.Rotate("ANTIHORAIRE");
    }

    //Affiche la position de la case en face de lui
    inFrontOfYou(){
        switch(this.orientation) {
            case 'NORTH':
                return new Position(this.getPosition().getX(), this.getPosition().getY()+1);
            case 'SOUTH':
                return new Position(this.getPosition().getX(), this.getPosition().getY()-1);
            case 'WEST':
                return new Position(this.getPosition().getX()-1, this.getPosition().getY());
            case 'EAST':
                return new Position(this.getPosition().getX()+1, this.getPosition().getY());
        }
    }

    //TODO Implémenter les bonus, Malus et gerer les etats
}