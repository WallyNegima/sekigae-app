const util = require('../utils/array');
const db = require('../db');

const exchangeByAI = function() {
    const members = db.getMembers();
    let baseArray = [...Array(30).keys()];
    for (let i = members.length - 1; i >= 0; i--) {
        // 0~iのランダムな数値を取得
        let rand = Math.floor(Math.random() * (i + 1));

        // 配列の数値を入れ替える
        [baseArray[i], baseArray[rand]] = [baseArray[rand], baseArray[i]];
    }
    return util.exchangeMembers(members, baseArray);
};

module.exports = { exchangeByAI };