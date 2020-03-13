(this["webpackJsonpeasy-tic-tac-toe"]=this["webpackJsonpeasy-tic-tac-toe"]||[]).push([[0],{16:function(t,n,e){t.exports=e(26)},21:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(0),o=e.n(a),c=e(6),i=e.n(c),l=e(2),u=(e(21),e(7)),s=e(8),d=e(13),h=e(9),m=e(14);e(22);function f(){var t=Object(r.a)(["\n\tfont-size: 25px;\n\tcolor: var(--color-decorative);\n\tfont-size: 40px;\n\tmargin: 0 10px;\n"]);return f=function(){return t},t}function p(){var t=Object(r.a)(["\n\tposition: absolute;\n\tbottom: 30px;\n\ttext-align: center;\n"]);return p=function(){return t},t}function v(){var t=Object(r.a)(["\n\t\t\t\t\tcontent: 'x';\n\t\t\t\t"]);return v=function(){return t},t}function b(){var t=Object(r.a)(["\n\t\t\t\t\tcontent: 'o';\n\t\t\t\t"]);return b=function(){return t},t}function g(){var t=Object(r.a)(["\n\tdisplay: none;\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 60px;\n\topacity: 0;\n\ttransition: opacity 0.2s ease;\n\t/* animation: "," 0.3s ease; */\n\t/* :hover {\n\t\topacity: 0.9;\n\t\t::after {\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\t","\n\t\t\t","\n\t\t}\n\t} */\n"]);return g=function(){return t},t}function y(){var t=Object(r.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: scale(0.9)\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: scale(1)\n\t}\n"]);return y=function(){return t},t}function w(){var t=Object(r.a)(["\n\twidth: 90vmin;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 30vmin);\n\tcursor: pointer;\n\t@media (min-width: 700px) {\n\t\twidth: 60vmin;\n\t\tgrid-template-rows: repeat(3, 20vmin);\n\t}\n\t-webkit-tap-highlight-color: transparent;\n"]);return w=function(){return t},t}function x(){var t=Object(r.a)(["\n\tposition: absolute;\n\tborder-radius: 20px;\n\t:nth-child(1),\n\t:nth-child(2) {\n\t\ttop: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 5vmin;\n\t\tmax-width: 20px;\n\t\tbackground-color: var(--color-main);\n\t\theight: 90vmin;\n\t}\n\t:nth-child(3),\n\t:nth-child(4) {\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 90vmin;\n\t\tbackground-color: var(--color-main);\n\t\theight: 5vmin;\n\t\tmax-height: 20px;\n\t}\n\t:nth-child(1) {\n\t\tleft: calc(50% - 15vmin);\n\t}\n\t:nth-child(2) {\n\t\tleft: calc(50% + 15vmin);\n\t}\n\t:nth-child(3) {\n\t\ttop: calc(50% - 15vmin);\n\t}\n\t:nth-child(4) {\n\t\ttop: calc(50% + 15vmin);\n\t}\n\t@media (min-width: 700px) {\n\t\t:nth-child(1),\n\t\t:nth-child(2) {\n\t\t\theight: 60vmin;\n\t\t}\n\t\t:nth-child(3),\n\t\t:nth-child(4) {\n\t\t\twidth: 60vmin;\n\t\t}\n\t\t:nth-child(1) {\n\t\t\tleft: calc(50% - 10vmin);\n\t\t}\n\t\t:nth-child(2) {\n\t\t\tleft: calc(50% + 10vmin);\n\t\t}\n\t\t:nth-child(3) {\n\t\t\ttop: calc(50% - 10vmin);\n\t\t}\n\t\t:nth-child(4) {\n\t\t\ttop: calc(50% + 10vmin);\n\t\t}\n\t}\n"]);return x=function(){return t},t}function E(){var t=Object(r.a)([""]);return E=function(){return t},t}function O(){var t=Object(r.a)(["\n\tfont-size: 25px;\n\tcolor: var(--color-decorative);\n"]);return O=function(){return t},t}function j(){var t=Object(r.a)(["\n\tposition: absolute;\n\ttop: 30px;\n\tright: 30px;\n"]);return j=function(){return t},t}function k(){var t=Object(r.a)(["\n\tposition: absolute;\n\ttop: 30px;\n\tleft: 30px;\n"]);return k=function(){return t},t}function z(){var t=Object(r.a)(["\n\t@import url('https://fonts.googleapis.com/css?family=Sniglet:400,800&display=swap&subset=latin-ext');\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'Sniglet', sans-serif;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 20px;\n"]);return z=function(){return t},t}var S=l.c.div(z()),M=l.c.div(k()),W=l.c.div(j()),B=l.c.span(O()),H=l.c.div(E()),L=l.c.div(x()),R=l.c.div(w()),T=Object(l.d)(y()),A=l.c.div(g(),T,(function(t){return t.circle&&Object(l.b)(b())}),(function(t){return t.cross&&Object(l.b)(v())})),C=l.c.div(p()),I=l.c.div(f()),J=function(t){function n(){var t,e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(d.a)(this,(t=Object(h.a)(n)).call.apply(t,[this].concat(a)))).state={round:1,board:[["","",""],["","",""],["","",""]],winner:null},e.pick=function(t){if(console.log("winner: ",e.state.winner),e.state.winner)document.querySelectorAll(".box").forEach((function(t){return t.style.cursor="default"}));else{var n=e.state.round%2!==0?"player1":"player2";console.log(n);var r=document.getElementById(t.target.id);if(!r.innerHTML){var a=t.target.dataset,o=a.row,c=a.column;console.log(o,c),e.state.round<9?e.setState({round:e.state.round+1}):e.setState({winner:"lost"}),e.state.board[o][c]=n,e.forceUpdate(),console.log(e.state.board),e.check(),e.state.round%2===0?r.innerHTML="o":r.innerHTML="x",r.style.animation="show 0.3s ease",r.style.opacity=1,r.style.cursor="default"}}},e.check=function(){var t=e.state.board.reduce((function(t,n){return t.concat(n)})),n={player1:[],player2:[]};t.forEach((function(t,e){return n[t]?n[t].push(e):null})),[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(t){t.every((function(t){return n.player1.indexOf(t)>-1}))?e.setState({winner:"player1"}):t.every((function(t){return n.player2.indexOf(t)>-1}))&&e.setState({winner:"player2"})}))},e}return Object(m.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){var t=this,n=this.state.board;return o.a.createElement(S,null,o.a.createElement(M,null,"Runda: ",this.state.winner?o.a.createElement(B,null,"-"):o.a.createElement(B,null,this.state.round)),o.a.createElement(W,null,"Ruch: ",this.state.winner?o.a.createElement(B,null,"-"):this.state.round%2===0?o.a.createElement(B,null,"o"):o.a.createElement(B,null,"x")),o.a.createElement(H,null,o.a.createElement(L,null),o.a.createElement(L,null),o.a.createElement(L,null),o.a.createElement(L,null)),o.a.createElement(R,null,n.map((function(n,e){return n.map((function(n,r){return o.a.createElement(A,{id:"r".concat(e,"c").concat(r),circle:t.state.round%2===0,cross:t.state.round%2!==0,className:"box",onClick:t.pick,"data-row":e,"data-column":r})}))}))),"player1"===this.state.winner?o.a.createElement(C,null,"Wygrywa:",o.a.createElement(I,null,"x")):"player2"===this.state.winner?o.a.createElement(C,null,"Wygrywa:",o.a.createElement(I,null,"o")):"lost"===this.state.winner?o.a.createElement(C,null,"Remis!",o.a.createElement(I,null,"o x")):"")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(){var t=Object(r.a)(["\n\t* {\n\t\t/* --color-main: #ff4d4d; */\n\t\t--color-main: MediumOrchid;\n\t\t--color-decorative: gold;\n\t\t--color-primary: lightgray;\n\t\t--color-secondary: gray;\n\t\t--color-bg: #202020;\n\t\t--color-light: white;\n\t\t--color-dark: black;\n\t\tbox-sizing: border-box;\n\t\t::after,\n\t\t::before {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\tbody {\n\t\tbackground-color: var(--color-bg);\n\t\tcolor: var(--color-primary);\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tmargin: 0\n\t}\n"]);return q=function(){return t},t}var F=Object(l.a)(q());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null),o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9e292509.chunk.js.map