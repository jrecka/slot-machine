!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var s=class{constructor(){this.gameResults=[]}addGameToStatistics(t,e){let n={win:t,bid:e};console.log(n),this.gameResults.push(n)}showGameStatistics(){return[this.gameResults.length,this.gameResults.filter(t=>t.win).length,this.gameResults.filter(t=>!t.win).length]}};var r=class{constructor(t){let e=t;this.getWalletValue=()=>e,this.checkCanPlay=t=>e>=t,this.changeWallet=(t,n="+")=>{if("number"!=typeof t||isNaN(t))throw console.log(typeof t),new Error("invalid number");if("+"===n)return e+=t;if("-"===n)return e-=t;throw new Error("invalid operation mode")}}};var a=class{constructor(){this.options=["red","green","blue"];let t=this.drawResult();this.getDrawResult=()=>t}drawResult(){let t=[];for(let e in this.options){const e=Math.floor(Math.random()*this.options.length),n=this.options[e];t.push(n)}return t}};var o=class{static moneyWinInGame(t,e){return t?3*e:0}static checkWinner(t){return t[0]===t[1]&&t[1]===t[2]||t[0]!==t[1]&&t[1]!==t[2]&&t[0]!==t[2]}};new class{constructor(t){this.stats=new s,this.wallet=new r(t),document.getElementById("start").addEventListener("click",this.startGame.bind(this)),this.spanWallet=document.querySelector(".panel span.wallet"),this.boards=document.querySelectorAll("div.color"),this.inputBid=document.getElementById("bid"),this.spanResult=document.querySelector(".score span.result"),this.spanNumber=document.querySelector(".score span.number"),this.spanWins=document.querySelector(".score span.win"),this.spanLosers=document.querySelector(".score span.loss"),this.render()}render(t=["gray","gray","gray"],e=this.wallet.getWalletValue(),n=0,s=[0,0,0],r=0,a=0){this.boards.forEach((e,n)=>{e.style.backgroundColor=t[n]}),this.spanWallet.textContent=e,n?n=`You won ${a}$.`:n||""===n||(n=`You lost ${r}$.`),this.spanResult.textContent=n,this.spanNumber.textContent=s[0],this.spanWins.textContent=s[1],this.spanLosers.textContent=s[2]}startGame(){if(this.inputBid.value<1)return alert("Kwota ktora chcesz grać jest za mała");const t=Math.floor(this.inputBid.value);if(!this.wallet.checkCanPlay(t))return alert("masz za mało środków lub podana została nieprawidłowa wartość");this.wallet.changeWallet(t,"-"),this.draw=new a;const e=this.draw.getDrawResult(),n=o.checkWinner(e),s=o.moneyWinInGame(n,t);this.wallet.changeWallet(s),this.stats.addGameToStatistics(n,t),this.render(e,this.wallet.getWalletValue(),n,this.stats.showGameStatistics(),t,s)}}(100)}]);