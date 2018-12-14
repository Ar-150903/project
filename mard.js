class Mard extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 21;

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
        var bazm1 = random(this.chooseCell(5));
            if (bazm1 && this.energy>17) {
                var empty = random(this.chooseCell(0));
                if(empty){
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 5;
                var newMr = new Mard(newX, newY);
                mardArr.push(newMr);
            }
        }

        var empty = random(this.chooseCell(0));
            if (empty && this.energy>17) {
                var newX = empty[0];
                var newY = empty[1];
                matrix[newY][newX] = 6;
                var newSh = new Shun(newX, newY);
                shunArr.push(newSh);
            }
     }

    move(){
        var paxnel = random(this.chooseCell2(4));
        this.energy-=2;
        if(paxnel){
            var empty = random(this.chooseCell(0));
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
        var food1 = random(this.chooseCell(2));
        var food2 = random(this.chooseCell(3));
        if (food1) {
            var newX = food1[0];
            var newY = food1[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            for(var i in xotakerArr){
                if(xotakerArr[i].x==newX && xotakerArr[i].y==newY){
                    xotakerArr.splice(i,1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=2;

        }

        if (food2) {
            var newX = food2[0];
            var newY = food2[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            for(var i in gishatichArr){
                if(gishatichArr[i].x==newX && gishatichArr[i].y==newY){
                    gishatichArr.splice(i,1);
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
            for(var i in mardArr){
                if(mardArr[i].x==this.x && mardArr[i].y==this.y){
                    mardArr.splice(i,1);
                }
            }
        }
    }
}
