import Statistics from "../statistics/Statistics";
import Wallet from "../wallet/Wallet";
import Draw from "../draw/Draw";
import Result from "../result/Result";

class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result'); 
        this.spanNumber = document.querySelector('.score span.number'); 
        this.spanWins = document.querySelector('.score span.win'); 
        this.spanLosers = document.querySelector('.score span.loss'); 
        this.render()
    }

    render(colors = ["gray", "gray", "gray"], 
        money = this.wallet.getWalletValue(), 
        result = 0, stats = [0,0,0],
        bid = 0, 
        wonMoney = 0) {
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]
        })
        
        this.spanWallet.textContent = money;
        if(result) {
            result = `You won ${wonMoney}$.`
        } else if (!result && result !== "") {
            result = `You lost ${bid}$.`
        }
        this.spanResult.textContent = result;
        this.spanNumber.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosers.textContent = stats[2];

        this.inputBid.value = "";
    }

    startGame() {
        if(this.inputBid.value < 1) return alert('Kwota ktora chcesz grać jest za mała')
        const bid = Math.floor(this.inputBid.value);
        if(!this.wallet.checkCanPlay(bid)){
            return alert("masz za mało środków lub podana została nieprawidłowa wartość");
        }
        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);

    }
}

export default Game;