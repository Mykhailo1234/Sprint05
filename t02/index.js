function checkDivision(beginRange = 1, endRange = 60) {
    let str;
    let flag;

    while (beginRange <= endRange) {
        str = beginRange;
        flag = false;

        //поки діапзон endRange більше або дорівнює//
        if ((beginRange % 2) == 0) {
            str += ' is even';
            flag = true;
        }

        if ((beginRange % 3) == 0) {
            str += ' is a multiple of 3';
            flag = true;
        }

        if ((beginRange % 10) == 0) {
            str += ' is a multiple of 10';
            flag = true;
        }
        //========    ========//

        //якщо "false"//
        if (flag == false) str += ' -';

        flag = false;
        console.log(str);
        ++beginRange;
    }
}



module.exports = {checkDivision};