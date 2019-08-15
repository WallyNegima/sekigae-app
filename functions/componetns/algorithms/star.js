const axios = require('axios');
const _ = require('lodash');

const dateUtil = require('../utils/date');
const arrayUtil = require('../utils/array');
const db = require('../db');

module.exports = {
    getMemberByStar: function () {
        return axios.get('http://api.jugemkey.jp/api/horoscope/free/' + dateUtil.getToday())
            .then(res => {
                return parseStarJson(res.data);
            })
            .catch(err => {
                console.error(err);
                throw err
            })
    }
};

const parseStarJson = (starObject) => {
    const startArray = starObject.horoscope[dateUtil.getToday()];
    const exchangedStar = arrayUtil.exchangeStarResponse(startArray);
    const members = db.getMembers();
    arrayUtil.insertRankToMembers(exchangedStar, members);
    return {
        'star': _.sortBy(startArray, ['rank']),
        'members': _.sortBy(members, ['rank'])
    };
};