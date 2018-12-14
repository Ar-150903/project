var LivingCreature = require("./class.js");

module.exports=class Gishatich extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 13;
    }

    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }    

    mult() {
        var arr = this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        if (empty && this.energy>14) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newGsh = new Gishatich(newX, newY);
            gishatichArr.push(newGsh);
        }
    }

    move(){
        var arr = this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        this.energy-=2;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat(){
        var arr = this.chooseCell(2);
        var food1 = arr[Math.floor(Math.random()*arr.length)];
        var arr1 = this.chooseCell(5);
        var food2 = arr1[Math.floor(Math.random()*arr1.length)];
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=4;

        }

        if (food2) {
            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for(var i in mardArr){
                if(mardArr[i].x==newX && mardArr[i].y==newY){
                    mardArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=1;

        }
    }

    die(){
        if(this.energy <= 0){
            matrix[this.y][this.x]=0;
            for(var i in gishatichArr){
                if(gishatichArr[i].x==this.x && gishatichArr[i].y==this.y){
                    gishatichArr.splice(i,1);
                }
            }
        }
    }
}