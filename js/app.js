import Wallet from "./components/wallet/Wallet";

const wallet = new Wallet(200);

document.body.textContent = wallet.changeWallet(NaN, "+");