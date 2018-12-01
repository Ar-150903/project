class Grass extends LivingCreature{

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
