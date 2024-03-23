class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://api.exchangeratesapi.io/v1/latest?access_key=29560e75d703a8a7367b9d518e0933a4";
        this.amount = null;
    }
    exchange(){
        // base euro aliyor hep. firstcurrency degisse de temelde euro kaliyor
        // 29560e75d703a8a7367b9d518e0933a4
        return new Promise((resolve,reject) =>{
            fetch(this.url)
            .then(response => response.json())
            .then(data => {
                const birinci = data.rates[this.firstCurrency];
                const ikinci = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount);
                let total = ikinci/birinci*amount2;
                resolve(total);
            })
            .catch(err => reject(err));
        })
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}