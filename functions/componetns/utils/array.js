module.exports = {
    exchangeMembers: function(members, indexes) {
        let exchangedMembers = [];
        indexes.forEach(idx => {
            exchangedMembers.push(members[idx])
        });
        return exchangedMembers
    }
}