var LivingCreature = require("./class.js");

module.exports = class Grass extends LivingCreature {

    mult() {
        this.multiply++;
        var arr = this.chooseCell(0);
        var empty = arr[Math.floor(Math.random()*arr.length)];
        if (empty && this.multiply > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY, 1);
            grassArr.push(newGr);
        }
    }
}
