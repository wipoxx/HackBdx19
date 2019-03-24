import Map from 'map.js';

class Utilities {
    //Verifie si le move est correct 
    static isCorrectMove(arrayPos) {        
        arrayPos.forEach(pos => {
            let x = pos.getX();
            let y = pos.getY();
            if(Map[x][y].type == "grass" || Map[x][y].content == "robot") {
                return false;
            }
        });
        return true;
    }
}