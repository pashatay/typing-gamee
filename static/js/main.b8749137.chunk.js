(this["webpackJsonptyping-game"]=this["webpackJsonptyping-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(9),n(10),n(1));var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(e),u=Object(c.a)(i,2),l=u[0],s=u[1],m=Object(a.useState)(!1),h=Object(c.a)(m,2),d=h[0],f=h[1],g=Object(a.useRef)(null);return Object(a.useEffect)((function(){d&&l>0?setTimeout((function(){s((function(e){return e-1}))}),1e3):0===l&&f(!1)}),[l,d]),{start:d,handleChange:function(e){var t=e.target.value;o(t)},text:r,timeRemaining:l,startGame:function(){f(!0),s(e),o(""),g.current.disabled=!1,g.current.focus()},wordsCount:function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length},textBoxRef:g}};var l=function(){var e=u(60),t=e.start,n=e.handleChange,a=e.text,o=e.timeRemaining,i=e.startGame,c=e.wordsCount,l=e.textBoxRef;return r.a.createElement("div",null,r.a.createElement("h1",null,"How fast do you type?"),r.a.createElement("p",null,"To get the most accurate score, we recommend opening any random book or article and re-type the text from there. Press start and start typing right away. When the time is over, you will get your score."),r.a.createElement("textarea",{ref:l,disabled:!t,onChange:n,value:a,placeholder:"type here"}),r.a.createElement("h4",null,"Time remaining: ",o," "),r.a.createElement("button",{disabled:t,onClick:i},"start"),r.a.createElement("h4",null,"Result:",0===o?"".concat(c(a)," words per minute"):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b8749137.chunk.js.map