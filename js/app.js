import Wallet from "./components/wallet/Wallet";
import Statistics from "./components/statistics/Statistics";
import Draw from "./components/draw/Draw";
const wallet = new Wallet(200);


// document.body.textContent = wallet.changeWallet(NaN, "+");
const stats = new Statistics();
stats.addGameToStatistics(true, 5);
console.log(stats.gameResults);
stats.showGameStatistics();
const drooo = new Draw();
drooo.getDrawResult();