// game.js
import { database } from "./database.js";

function onGameWin(userId) {
    const newRank = database.addStar(userId);
    console.log(`⭐ User ${userId} now has ${newRank} Stars!`);
}
