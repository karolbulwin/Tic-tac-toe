(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),u=(n(17),n(1)),c=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Tic-tac-toe"),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.setGame,value:"one-player"},"One Player"),r.a.createElement("button",{onClick:e.setGame,value:"two-players"},"Two Players")))},l=n(2),i=n.n(l),m=n(5),h=n(6),v=n(7),g=n(9),f=n(8),d=n(10),p=function(e,t){var n=function(e){for(var t,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=[],r=0;r<n.length;r++){var o=Object(u.a)(n[r],3),s=o[0],c=o[1],l=o[2];e[s]&&e[s]===e[c]&&null===e[l]&&(t={square:l,sign:e[s]},a.push(t)),e[s]&&e[s]===e[l]&&null===e[c]&&(t={square:c,sign:e[s]},a.push(t)),e[c]&&e[c]===e[l]&&null===e[s]&&(t={square:s,sign:e[c]},a.push(t))}return a}(e).concat(function(e,t){var n,a=[],r=[1,3,5,7].filter(function(e){return!t.includes(e)}),o=r[Math.round(Math.random()*(r.length-1))];return 0!==r.length&&(e[0]&&e[0]===e[8]||e[6]&&e[6]===e[2])&&(n={square:o,sign:"X"},a.push(n)),a}(e,t)),a=n.filter(function(e){return"O"===e.sign});return 0!==a.length?a[0].square:0!==n.length?n[0].square:null},k=function(e){var t=e.squares,n=function(e){for(var t=[],n=0;n<e.length;n++)null!==e[n]&&t.push(n);return t}(t),a=[4,0,2,6,8,1,3,5,7].filter(function(e){return!n.includes(e)}),r=p(t,n);return null!==r?r:a[0]},y=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},b=function(e){return e.squares.map(function(t,n){return r.a.createElement(y,{value:t,key:n,onClick:function(){return e.onClick(n)}})})};function w(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(u.a)(t[n],3),r=a[0],o=a[1],s=a[2];if(e[r]&&e[r]===e[o]&&e[r]===e[s])return e[r]}return null}var E=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message"},null!==e.gameStatus?"The winner is ".concat(e.gameStatus):"Draw"),r.a.createElement("button",{onClick:e.onClick},"Play Again"))},N=function(e){var t=e.current?"Move #".concat(e.current):"Go to start";return r.a.createElement("div",{className:"control-menu"},r.a.createElement("button",{onClick:e.goBack},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{onClick:function(){document.getElementById("dropdown-moves").classList.toggle("show")},className:"dropbtn"},t),r.a.createElement("div",{id:"dropdown-moves",className:"dropdown-content"},r.a.createElement("ul",null,e.moves))),r.a.createElement("button",{onClick:e.goForward},r.a.createElement("i",{className:"fas fa-chevron-right"})))},x=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,goBackMove:0,goForwardMove:0,gameType:e.gameType},n}return Object(d.a)(t,e),Object(v.a)(t,[{key:"jumpTo",value:function(e){"one-player"===this.state.gameType?this.setState({stepNumber:e,xIsNext:e%2===0,goBackMove:e-1>0?e-2:e,goForwardMove:e+1<this.state.history.length-1?e+2:e}):this.setState({stepNumber:e,xIsNext:e%2===0,goBackMove:e>0?e-1:e,goForwardMove:e<this.state.history.length-1?e+1:e})}},{key:"showPast",value:function(e,t){var n=this;return e.map(function(e,a){var o=a?"Go to move #".concat(a):"Go to start";return r.a.createElement("li",{key:"m".concat(a)},"one-player"===t?r.a.createElement("button",{style:{fontWeight:n.state.stepNumber===a?"bold":"normal",cursor:a%2!==0?"not-allowed":"pointer",textDecorationLine:a%2!==0?"line-through":"none"},onClick:function(){return n.jumpTo(a)},disabled:a%2!==0},o):r.a.createElement("button",{style:{fontWeight:n.state.stepNumber===a?"bold":"normal"},onClick:function(){return n.jumpTo(a)}},o))})}},{key:"handleClick",value:function(e){var t=this,n=this.state.history.slice(0,this.state.stepNumber+1),a=n[n.length-1].squares.slice();w(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:n.concat([{squares:a}]),stepNumber:n.length,xIsNext:!this.state.xIsNext,goBackMove:"one-player"===this.state.gameType?n.length-2:n.length-1,goForwardMove:n.length}),setTimeout(Object(m.a)(i.a.mark(function e(){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("one-player"!==t.state.gameType||!1!==t.state.xIsNext){e.next=6;break}return n=t.state.history[t.state.history.length-1],e.next=4,k(n);case 4:a=e.sent,t.handleClick(a);case 6:case"end":return e.stop()}},e)})),150))}},{key:"outOfMoves",value:function(e){return 0===e.squares.filter(function(e){return null===e}).length}},{key:"render",value:function(){var e=this,t=this.state.history,n=t[this.state.stepNumber],a=w(n.squares),o=this.showPast(t,this.state.gameType),s=!(!a&&!this.outOfMoves(n));return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},s?r.a.createElement(E,{onClick:function(){return e.props.startNewGame()},gameStatus:a}):r.a.createElement(b,{squares:n.squares,onClick:function(t){return e.handleClick(t)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement(N,{goBack:function(){return e.jumpTo(e.state.goBackMove)},goForward:function(){return e.jumpTo(e.state.goForwardMove)},moves:o,current:this.state.stepNumber})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(function(){var e=r.a.useState(1),t=Object(u.a)(e,2),n=t[0],a=t[1],o=r.a.useState(),s=Object(u.a)(o,2),l=s[0],i=s[1];return void 0===l?r.a.createElement(c,{setGame:function(e){i(e.target.value)}}):r.a.createElement(x,{key:n,gameType:l,startNewGame:function(){return a(n+1)}})},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.8335b965.chunk.js.map