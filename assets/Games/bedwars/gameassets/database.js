// database.js
export const database = {
    getUserRank(userId) {
        const data = JSON.parse(localStorage.getItem("userRanks")) || {};
        return data[userId] ?? 0;
    },

    setUserRank(userId, rank) {
        const data = JSON.parse(localStorage.getItem("userRanks")) || {};
        data[userId] = rank;
        localStorage.setItem("userRanks", JSON.stringify(data));
    },

    addStar(userId) {
        const currentRank = this.getUserRank(userId);
        const newRank = currentRank + 1;

        this.setUserRank(userId, newRank);
        return newRank;
    }
};
