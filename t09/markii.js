class MarkII{
    constructor() {
        this.row1 = '2 x Repulsors';
        this.row2 = 'Mi34 7.62mm Minigun';
        this.row3 = '2 x FN F2000 Tacticales';
        this.row4 = 'Sidewinder "Ex-Wife" Self-Guided Missiles';
        this.row5 = 'M24 Shotgun';
        this.row6 = 'Milkor MCL 40mm Grenade Launcher';
    }
}

module.exports = MarkII;

/*
    Task09 (test.js)
    Task name: Mixins
 */

const MarkII = require('./markii');
const Printable = require('./printable');
class WarMachine extends MarkII {}
Object.assign(WarMachine.prototype, Printable);
const wm = new WarMachine;
wm.print();