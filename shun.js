class Shun {
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
            matrix[newY][newX] = 6;
            var newSh = new Shun(newX, newY);
            shunArr.push(newSh);
        }
    }

    move(){
        var empty = random(this.chooseCell(0));
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
        var food1 = random(this.chooseCell(1));
        var food2 = random(this.chooseCell(4));
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
        }
    }
}