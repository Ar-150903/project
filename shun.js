var LivingCreature = require("./class.js");

module.exports=class Shun extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 12;
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
            matrix[newY][newX] = 6;
            var newSh = new Shun(newX, newY);
            shunArr.push(newSh);
            shunCnvec++;
        }
    }

    move(){
        var arr = this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        this.energy-=2;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat(){
        var arr1 = this.chooseCell(1);
        var food1 = arr1[Math.floor(Math.random()*arr1.length)];
        var arr2 = this.chooseCell(4);
        var food2 = arr2[Math.floor(Math.random()*arr2.length)];
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            for(var i in grassArr){
                if(grassArr[i].x==newX && grassArr[i].y==newY){
                    grassArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=2;
            xotKeran++;
        }

        if (food2) {
            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

            for(var i in amenakerArr){
                if(amenakerArr[i].x==newX && amenakerArr[i].y==newY){
                    amenakerArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=4;
            amenakerKeran++;
        }
    }

    die(){
        if(this.energy <= 0){
            matrix[this.y][this.x]=0;
            for(var i in shunArr){
                if(shunArr[i].x==this.x && shunArr[i].y==this.y){
                    shunArr.splice(i,1);
                }
            }
            shunMahacav++;
        }
    }
}