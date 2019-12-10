class Result {
    static moneyWinInGame(result, bid) {
      return  result ? 3 * bid :  0;
    }
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true  
        else return false
       }
}

export default Result;
