const walletContainer = document.getElementById("walletContainer"),
    btn = document.getElementById("btn_submit");
console.log(walletContainer);
let cryptWallet = {
    userName,
    Bitcoin: {
        cryptoName: "Bitcoin",
        cryptoLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        cryptoBalance: Math.floor(Math.random()*5+1),
        cryptoCurrency: 955194
    },
    Ethereum: {
        cryptoName: "Ethereum",
        cryptoLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        cryptoBalance: Math.floor(Math.random()*10+1),
        cryptoCurrency: 60326
    },
    Stellar: {
        cryptoName: "Stellar",
        cryptoLogo: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
        cryptoBalance: Math.floor(Math.random()*100+1),
        cryptoCurrency: 4.84
    },
    addWallet: function() {
        event.preventDefault(); //зупиняє оновлення сторінки, взяла з гуглу
        const userName = document.getElementById("userName").value,
            cryptoName = document.getElementById("cryptoName").value;
    
        if (userName==="" || cryptoName==="") {
            return alert("Заповніть всі поля!");
        }else if (cryptoName==="Bitcoin" || cryptoName==="bitcoin") {
            cryptWallet.userName = userName;
            walletContainer.innerHTML = `
                <div id="yourWallet">
                    <div class="greetings">
                        Добрий день, ${cryptWallet.userName}!
                    </div>
                    <div class="info">
                        На Вашому балансі <strong>${cryptWallet.Bitcoin.cryptoName}</strong> залишилось
                        <div class="balance">
                            <span>${cryptWallet.Bitcoin.cryptoBalance}</span> <img class="logo" src="${cryptWallet.Bitcoin.cryptoLogo}" alt="Bitcoin logo">
                        </div>
                    </div>
                    <div class="sale">
                        Якщо Ви сьогодні продасте їх, то отримаєте <span><strong>${cryptWallet.Bitcoin.cryptoBalance*cryptWallet.Bitcoin.cryptoCurrency}</strong> грн</span>.
                    </div>
                </div>
            `;
        }else if (cryptoName==="Ethereum" || cryptoName==="ethereum") {
            cryptWallet.userName = userName;
            walletContainer.innerHTML = `
                <div id="yourWallet">
                    <div class="greetings">
                        Добрий день, ${cryptWallet.userName}!
                    </div>
                    <div class="info">
                        На Вашому балансі <strong>${cryptWallet.Ethereum.cryptoName}</strong> залишилось
                        <div class="balance">
                            <span>${cryptWallet.Ethereum.cryptoBalance}</span> <img class="logo" src="${cryptWallet.Ethereum.cryptoLogo}" alt="Bitcoin logo">
                        </div>
                    </div>
                    <div class="sale">
                        Якщо Ви сьогодні продасте їх, то отримаєте <span><strong>${cryptWallet.Ethereum.cryptoBalance*cryptWallet.Ethereum.cryptoCurrency}</strong> грн</span>.
                    </div>
                </div>
            `;
        }else if (cryptoName==="Stellar" || cryptoName==="stellar") {
            cryptWallet.userName = userName;
            walletContainer.innerHTML = `
                <div id="yourWallet">
                    <div class="greetings">
                        Добрий день, ${cryptWallet.userName}!
                    </div>
                    <div class="info">
                        На Вашому балансі <strong>${cryptWallet.Stellar.cryptoName}</strong> залишилось
                        <div class="balance">
                            <span>${cryptWallet.Stellar.cryptoBalance}</span> <img class="logo" src="${cryptWallet.Stellar.cryptoLogo}" alt="Bitcoin logo">
                        </div>
                    </div>
                    <div class="sale">
                        Якщо Ви сьогодні продасте їх, то отримаєте <span><strong>${cryptWallet.Stellar.cryptoBalance*cryptWallet.Stellar.cryptoCurrency.toFixed(2)}</strong> грн</span>.
                    </div>
                </div>
            `;
        }else {
            return alert("Ви ввели неправильну назву криптовалюти!");
        }

        
    }
};

btn.onclick = cryptWallet.addWallet;