class Draw  {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let colors = [];
        for(let key in this.options) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors
    }
}

export default Draw;