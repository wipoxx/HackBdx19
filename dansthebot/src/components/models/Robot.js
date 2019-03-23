import Position from './Position'
export class Robot {
    constructor(nbBatterie, position, etat, orientation){
        this.nbBatterie = nbBatterie;
        this.position = position;
        this.orientation = orientation;
        // C'est un tableau de Malus ??
        this.etat = etat; 
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
        switch(this.orientation){
            case 'NORTH':
                //TODO: Tester que le mouvement soit possible
                this.position.setY(this.position.getY()-nbCase);
            break;
            case 'SOUTH':
                //TODO: Tester que le mouvement soit possible
                this.position.setY(this.position.getY()+nbCase);
            break;
            case 'WEST':
                //TODO: Tester que le mouvement soit possible
                this.position.setX(this.position.getX()-nbCase);
            break;
            case 'EAST':
                //TODO: Tester que le mouvement soit possible
                this.position.setX(this.position.getX()+nbCase);
            break;
        }
    }

}