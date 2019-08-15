module.exports = {
    exchangeMembers: function(members, indexes) {
        let exchangedMembers = [];
        indexes.forEach(idx => {
            exchangedMembers.push(members[idx])
        });
        return exchangedMembers
    },
    exchangeStarResponse: function (objectArray) {
        let returnObject = {};
        for (let object of objectArray) {
            returnObject[object.sign] = object;
        }
        return returnObject;
    },
    insertRankToMembers: function (stars, members) {
        for (let member of members) {
            member.rank = stars[member.star].rank;
        }
        return members;
    }
};