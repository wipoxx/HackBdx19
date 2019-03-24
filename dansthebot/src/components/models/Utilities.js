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

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}