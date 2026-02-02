
module.exports = {
    getMaxID: function (data) {
        let ids = data.map(e => Number(e.id) || 0);
        return Math.max(...ids, 0);
    }
}