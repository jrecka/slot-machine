class Wallet {
    constructor(money) {
        let _money = money;

        // get current wallet content
        this.getWalletValue = () => _money;

        // checking if the user has sufficient funds
        this.checkCanPlay = value => {
           return _money >= value;
        }
        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if(type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("invalid operation mode");
                }
            } else {
                console.log(typeof value);
                throw new Error("invalid number")
            }
        }
     }
}

export default Wallet;