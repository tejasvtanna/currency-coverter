(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),u=(n(10),n(4)),s=n(1);n(11);var l=function(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChangeCurrency,o=e.onChangeAmount,r=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:r,onChange:o}),c.a.createElement("select",{value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))},i="https://api.exchangeratesapi.io/latest",f=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(),f=Object(s.a)(r,2),h=f[0],m=f[1],b=Object(a.useState)(),g=Object(s.a)(b,2),p=g[0],v=g[1],O=Object(a.useState)(),j=Object(s.a)(O,2),C=j[0],E=j[1],y=Object(a.useState)(),d=Object(s.a)(y,2),w=d[0],k=(d[1],Object(a.useState)()),S=Object(s.a)(k,2),x=S[0],A=S[1];Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];v(e.base),E(t),o([e.base].concat(Object(u.a)(Object.keys(e.rates)))),m(e.rates[t]),console.log(p,C),console.log(e)}))}),[]),Object(a.useEffect)((function(){null!=p&&null!=C&&(console.log("In useEffect2"),console.log(i+"/"+"base=".concat(p)),p===C?m(1):fetch(i+"?"+"base=".concat(p)).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),console.log("Exchnage Rate: ".concat(e.rates[C])),m(e.rates[C])})))}),[p,C]);return c.a.createElement("div",null,c.a.createElement("h1",null,"Convert"),c.a.createElement(l,{currencyOptions:n,selectedCurrency:p,onChangeCurrency:function(e){return v(e.target.value)},onChangeAmount:function(e){e.preventDefault(),A(e.target.value*h)},amount:w}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement("button",{onClick:function(){var e=p;v(C),E(e)}},"Swap"),c.a.createElement(l,{currencyOptions:n,selectedCurrency:C,onChangeCurrency:function(e){return E(e.target.value)},onChangeAmount:function(e){},amount:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(12);r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bc967f52.chunk.js.map