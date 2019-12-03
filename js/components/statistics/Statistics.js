class Statistics {
    constructor() {
        this.gameResults = [{win: true, bid: 2}, {win: false, bid: -22}];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let winsNumbers = this.gameResults.filter(result => result.win).length;
        let losersNumbers = this.gameResults.filter(result => !result.win).length
        console.log(games,winsNumbers, losersNumbers);
         return games, winsNumbers, losersNumbers
    }
}

export default Statistics;