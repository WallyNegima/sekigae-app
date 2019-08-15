const axios = require('axios');

const dateUtil = require('../utils/date');
const db = require('../db');

module.exports = {
    getMemberByStar: function () {
        return {
            "star": db.getStar(),
            "members": db.getStarMember(),
        };
        // return axios.get('http://api.jugemkey.jp/api/horoscope/free/' + dateUtil.getToday())
        //     .then(res => {
        //         return parseStarJson(res.data);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //         throw err
        //     })
    }
};

const parseStarJson = (starObject) => {
    const startArray = starObject.horoscope[dateUtil.getToday()];
    const returnObject = {
        'star': startArray,
        'members': db.getMembers()  // todo: 占い結果で並び替え
    };
    return returnObject;
};