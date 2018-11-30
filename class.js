class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        this.multiply++;
        var empty = random(this.chooseCell(0));
        if (empty && this.multiply > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY, 1);
            grassArr.push(newGr);
        }
    }
}

class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 4;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy>7) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var newXt = new Xotaker(newX, newY);
            xotakerArr.push(newXt);
        }
    }

    move(){
        var empty = random(this.chooseCell(0));
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat(){
        var food = random(this.chooseCell(1));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
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
    }

    die(){
        if(this.energy <= 0){
            matrix[this.y][this.x]=0;
            for(var i in xotakerArr){
                if(xotakerArr[i].x==this.x && xotakerArr[i].y==this.y){
                    xotakerArr.splice(i,1);
                }
            }
        }
    }
}



class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 12;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy>14) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newGsh = new Gishatich(newX, newY);
            gishatichArr.push(newGsh);
        }
    }

    move(){
        var empty = random(this.chooseCell(0));
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
        var food1 = random(this.chooseCell(2));
        var food2 = random(this.chooseCell(5));
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

class  Amenaker{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]    

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

    getNewDirections1(){
        this.directions1 = [
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

    chooseCell1(character) {
        this.getNewDirections1();
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
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
        var empty = random(this.chooseCell1(0));
        if (empty && this.energy>30) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var newAm = new Amenaker(newX, newY);
            amenakerArr.push(newAm);
        }
    }

    move(){
        var empty = random(this.chooseCell2(0));
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
        var food1 = random(this.chooseCell2(1));
        var food2 = random(this.chooseCell2(2));
        var food3 = random(this.chooseCell2(3));
        var food4 = random(this.chooseCell2(5));
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
        }
    }
}

class Mard {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]    

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

    getNewDirections1(){
        this.directions1 = [
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

    chooseCell1(character) {
        this.getNewDirections1();
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
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
        var bazm1 = random(this.chooseCell1(5));
        var empty = random(this.chooseCell1(0));
            if (bazm1 && this.energy>17) {
                var empty = random(this.chooseCell1(0));
                if(empty){
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 5;
                var newMr = new Mard(newX, newY);
                mardArr.push(newMr);
            }
        }
    }

    move(){
        var paxnel1 = random(this.chooseCell2(3));
        var paxnel2 = random(this.chooseCell2(4));
        this.energy-=2;
        if(paxnel1 || paxnel2){
            var empty = random(this.chooseCell1(0));
            if(empty){
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 5;
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
            }
        }
    }

    eat(){
        var food = random(this.chooseCell1(2));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
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
    }

    die(){
        if(this.energy <= 0){
            matrix[this.y][this.x]=0;
            for(var i in mardArr){
                if(mardArr[i].x==this.x && mardArr[i].y==this.y){
                    mardArr.splice(i,1);
                }
            }
        }
    }
}