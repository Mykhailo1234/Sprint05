let Printable = {
    print(){
        return console.log([
            `${this.row1}`,
            `${this.row2}`,
            `${this.row3}`,
            `${this.row4}`,
            `${this.row5}`,
            `${this.row6}`
        ].join('\n'));
    }
}

module.exports = Printable;

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