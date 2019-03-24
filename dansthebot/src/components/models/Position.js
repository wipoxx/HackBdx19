export class Position{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(diff){
        this.x +=  + diff;
    }

    setY(diff){
        this.y += diff;
    }
}