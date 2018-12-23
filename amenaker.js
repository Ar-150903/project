var LivingCreature = require("./class.js");

module.exports=class  Amenaker extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy=20;
        
        this.directions2 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y - 1]
        ];
    }

    getNewDirections2(){
        this.directions2 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y - 1]
        ];
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
            [this.x + 1, this.y + 1],
        ]
    }

    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }

    chooseCell2(character) {
        this.getNewDirections2();
        var found = [];
        for (var i in this.directions2) {
            var x = this.directions2[i][0];
            var y = this.directions2[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions2[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var arr = this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        if (empty && this.energy>30) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var newAm = new Amenaker(newX, newY);
            amenakerArr.push(newAm);
            amenakerCnvec++;
        }
    }

    move(){
        var arr = this.chooseCell2(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        this.energy-=2;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat(){
        var arr1 = this.chooseCell2(1);
        var food1 = arr1[Math.floor(Math.random()*arr1.length)];
        var arr2 = this.chooseCell2(2);
        var food2 = arr2[Math.floor(Math.random()*arr2.length)];
        var arr3 = this.chooseCell2(3);
        var food3 = arr3[Math.floor(Math.random()*arr3.length)];
        var arr4 = this.chooseCell2(5);
        var food4 = arr4[Math.floor(Math.random()*arr4.length)];
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for(var i in grassArr){
                if(grassArr[i].x==newX && grassArr[i].y==newY){
                    grassArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=2;

        }

        else if (food2) {
            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 4;
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

        else if (food3) {
            var newX = food3[0];
            var newY = food3[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for(var i in gishatichArr){
                if(gishatichArr[i].x==newX && gishatichArr[i].y==newY){
                    gishatichArr.splice(i,1);
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy+=6;
        }

        else if (food4) {
            var newX = food4[0];
            var newY = food4[1];
            matrix[newY][newX] = 4;
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
            for(var i in amenakerArr){
                if(amenakerArr[i].x==this.x && amenakerArr[i].y==this.y){
                    amenakerArr.splice(i,1);
                }
            }
            amenakerMahacav++;
        }
    }
}