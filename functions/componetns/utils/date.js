module.exports = {
    getToday: function () {
        let current_datetime = new Date();
        return  current_datetime.getFullYear() + "/"
            + ('0' + (current_datetime.getMonth() + 1)).slice(-2) + "/"
            + ('0' + current_datetime.getDate()).slice(-2)
    }
};