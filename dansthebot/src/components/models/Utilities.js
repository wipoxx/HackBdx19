import {map} from './map';

export class Utilities {
    //Verifie si le move est correct 
    static isCorrectMove(arrayPos) {        
        arrayPos.forEach(pos => {
            let x = pos.getX();
            let y = pos.getY();
            if(map[x][y].type == "grass" || map[x][y].content == "robot") {
                return false;
            }
        });
        return true;
    }
}