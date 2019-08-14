const axios = require('axios');

const util = require('../utils/array');
const db = require('../db');

module.exports = {
    getMemberByStar: function () {
        return  axios.get('http://api.jugemkey.jp/api/horoscope/free/2019/08/14')
            .then(res => {
                return res
            })
            .catch(err => {
                console.error(err);
                throw err
            })
    }
};