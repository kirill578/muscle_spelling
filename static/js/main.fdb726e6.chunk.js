(this.webpackJsonpmuscle_spelling=this.webpackJsonpmuscle_spelling||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/success.a8e58690.mp3"},49:function(e,t,a){e.exports=a.p+"static/media/fail.23730a41.mp3"},62:function(e,t,a){e.exports=a(74)},67:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(26),i=a.n(l),o=(a(67),a(14)),u=(a(36),a(97)),s=a(106),d=a(95),f=a(100),p=a(104),m=a(102),h=a(103),b=a(98),g=a(105),y=a(33),v=a(23),E=a(101),w=a(99),x=a(50),j=a.n(x),S=a(93);!function(e){e[e.Faded=0]="Faded",e[e.Correct=1]="Correct",e[e.Highlight=2]="Highlight"}(n||(n={}));var O,k,C=function(e){switch(e){case n.Faded:return"#eee";case n.Correct:return"green";case n.Highlight:return"brown";default:return"#eee"}},A=function(e){var t=e.word;return c.a.createElement(u.a,{display:"flex",flexDirection:"row"},t.map((function(e,t){return c.a.createElement(u.a,{key:t,paddingRight:"20px"},c.a.createElement(S.a,{elevation:3},c.a.createElement(u.a,{width:"70px",height:"90px",textAlign:"center",fontSize:"70px",color:C(e?e.type:void 0)},e?e.char:"_")))})))},D="abcdefghijklmnopqrstuvwxyz0123456789".split(""),F=function(e){var t=e.rate,a=e.blind,r=e.targetWord,l=e.sayWord,i=e.commonErrorWord,s=e.onSuccess,d=e.onFail,f=c.a.useRef(),p=c.a.useState(""),m=Object(o.a)(p,2),h=m[0],b=m[1],g=h.length;c.a.useEffect((function(){var e=new SpeechSynthesisUtterance(l||r);return t&&(e.rate=t),e.lang="en-UK",window.speechSynthesis.speak(e),function(){return window.speechSynthesis.cancel()}}),[t,l,r]),c.a.useEffect((function(){var e=r.split("")[g];f.current&&(D.filter((function(t){return t!==e})).forEach((function(e){return f.current.physicalKeyboard.handleHighlightKeyUp({key:e,code:"key"})})),f.current.physicalKeyboard.handleHighlightKeyDown({key:e,code:"key"}))}),[g,r,l,t]),c.a.useEffect((function(){var e=function(e){var t=e.key;D.includes(t)&&(r.split("")[g]===t?g===r.length-1?s():b((function(e){return e+t})):d(h+t))};return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}}),[d,s,g,r,b,h]);var y=i?r.split("").findIndex((function(e,t){return i.split("")[t]!==e})):void 0;return c.a.createElement(u.a,{position:"absolute",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},c.a.createElement(u.a,{display:"flex",flexDirection:"row",margin:"10px"},c.a.createElement(A,{word:r.split("").map((function(e,t){return!a&&void 0!==y&&t===y&&t>=g?{char:e,type:n.Highlight}:!a||t<g?{char:e,type:t<g?n.Correct:n.Faded}:void 0}))})),!a&&c.a.createElement(u.a,{paddingTop:"80px",paddingX:"80px",alignSelf:"stretch"},c.a.createElement(j.a,{keyboardRef:function(e){f.current=e},onChange:function(){},onKeyPress:function(){}})))},L=a(30),P=a(48),W=a(49);!function(e){e.Success="SUCCESS",e.Fail="FAIL",e.Play="PLAY",e.Blind="BLIND"}(k||(k={}));var I=Object(E.a)({id:"success",initial:k.Blind,context:{},states:(O={},Object(v.a)(O,k.Play,{on:{success:k.Blind,fail:k.Fail}}),Object(v.a)(O,k.Blind,{on:{success:k.Success,fail:k.Fail}}),Object(v.a)(O,k.Fail,{after:{200:{target:k.Play,actions:[]}}}),Object(v.a)(O,k.Success,{after:{1e3:k.Blind}}),O)});var N,B,T=function(e){var t=e.words,a=e.multiply,n=e.onResult,r=c.a.useState((function(){for(var e=[],n=0;n<a;n++)e.push.apply(e,Object(y.a)(t));return function(e){for(var t=e,a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}return t}(e)})),l=Object(o.a)(r,1)[0],i=c.a.useState((function(){return t.reduce((function(e,t){return console.log("re-reduce"),e[t]={failedAttempts:0},e}),{})})),s=Object(o.a)(i,2),d=s[0],f=s[1],p=Object(L.a)(P),m=Object(o.a)(p,1)[0],h=Object(L.a)(W),b=Object(o.a)(h,1)[0],g=Object(w.a)(I),v=Object(o.a)(g,2),E=v[0].value,x=v[1],j=c.a.useState(0),S=Object(o.a)(j,2),O=S[0],C=S[1],A=c.a.useState(void 0),D=Object(o.a)(A,2),N=D[0],B=D[1],T=l[O%l.length];return c.a.useEffect((function(){O===l.length&&n(d)}),[d,O,n,l]),E===k.Play?c.a.createElement(F,{key:"play",blind:!1,targetWord:T,commonErrorWord:N,onSuccess:function(){x({type:"success"}),m()},onFail:function(e){f((function(e){return e[T].failedAttempts++,e})),B(e),x({type:"fail"}),b()}}):E===k.Blind?c.a.createElement(F,{key:"blind",blind:!0,targetWord:T,onSuccess:function(){x({type:"success"}),m(),C((function(e){return e+1}))},onFail:function(e){f((function(e){return e[T].failedAttempts++,e})),B(e),x({type:"fail"}),b()}}):E===k.Success?c.a.createElement(u.a,{position:"fixed",width:"100%",height:"100%",style:{backgroundColor:"green"}}):c.a.createElement(u.a,{position:"fixed",width:"100%",height:"100%",style:{backgroundColor:"red"}})},R=a(55),z=new(a.n(R).a),H=a(48),K=a(49);!function(e){e.Success="SUCCESS",e.Fail="FAIL",e.Play="PLAY"}(B||(B={}));var M,U=Object(E.a)({id:"success",initial:B.Play,context:{},states:(N={},Object(v.a)(N,B.Play,{on:{success:B.Play,fail:B.Fail}}),Object(v.a)(N,B.Fail,{after:{200:{target:B.Play,actions:[]}}}),Object(v.a)(N,B.Success,{after:{1e3:B.Play}}),N)});!function(e){e.Letters="abcdefghijklmnopqrstuvwxyz",e.Numbers="0123456789",e.NumbersDoubleAndTriple="0123456789DT",e.AlphaNumeric="abcdefghijklmnopqrstuvwxyz0123456789",e.Word="word"}(M||(M={}));var $=function(e,t,a){return Object(y.a)(new Array(a)).map((function(a){return e===M.Word?z.createWord(t).split("").join(". "):function(e,t){return Object(y.a)(new Array(t)).map((function(t){return Math.floor(Math.random()*e.length)})).map((function(t){var a=e[t];if(e===M.NumbersDoubleAndTriple&&("D"===a||"T"===a)){var n=M.Numbers[Math.floor(Math.random()*M.Numbers.length)];return"".concat("D"===a?"double":"triple"," ").concat(n)}return a})).join(". ")}(e,t)}))},q=function(e){var t=e.length,a=e.rate,n=e.type,r=c.a.useState($(n,t,100)),l=Object(o.a)(r,1)[0],i=c.a.useState(0),s=Object(o.a)(i,2),d=s[0],f=s[1],p=l[d%l.length],m=p.replace(/double (\d)/g,"$1$1").replace(/triple (\d)/g,"$1$1$1").replace(/\s/g,"").replace(/\./g,"").replace(/,/g,""),h=p,b=Object(L.a)(H),g=Object(o.a)(b,1)[0],y=Object(L.a)(K),v=Object(o.a)(y,1)[0],E=Object(w.a)(U),x=Object(o.a)(E,2),j=x[0].value,S=x[1];return j===B.Play?c.a.createElement(F,{key:d,blind:!0,rate:a,targetWord:m,sayWord:"It is ".concat(h),onSuccess:function(){S({type:"success"}),g(),f((function(e){return e+1}))},onFail:function(e){e.length>1&&console.log("".concat(p,"\n").concat(e," <-- error")),S({type:"fail"}),v(),f((function(e){return e+1}))}}):j===B.Success?c.a.createElement(u.a,{position:"fixed",width:"100%",height:"100%",style:{backgroundColor:"green"}}):c.a.createElement(u.a,{position:"fixed",width:"100%",height:"100%",style:{backgroundColor:"red"}})},_=["beautiful","didactic","esteem","Unfortunately","curiosity","believe","Interesting","quickly","processor","Rabbit","cancelled","inspiration","Possibly","especially","improvement","existing","happening","allowed","behavior","crucial","Existing","stretch","shuffle"].map((function(e){return e.toLocaleLowerCase()})),J={letters:M.Letters,numbers:M.Numbers,numbersDT:M.NumbersDoubleAndTriple,"alpha-numeric":M.AlphaNumeric,word:M.Word};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement((function(){var e=c.a.useState("letters"),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),l=Object(o.a)(r,2),i=l[0],y=l[1],v=c.a.useState(1),E=Object(o.a)(v,2),w=E[0],x=E[1],j=c.a.useState(6),S=Object(o.a)(j,2),O=S[0],k=S[1],C=c.a.useState(!1),A=Object(o.a)(C,2),D=A[0],F=A[1],L=c.a.useState(_),P=Object(o.a)(L,2),W=P[0],I=P[1],N=c.a.useState(void 0),B=Object(o.a)(N,2),R=B[0],z=B[1];return D?c.a.createElement(q,{length:O,rate:w,type:J[a]}):i?c.a.createElement(T,{onResult:function(e){console.log(e);var t=Object.entries(e).sort((function(e,t){return t[1].failedAttempts-e[1].failedAttempts})).map((function(e){return{word:e[0],failedAttempts:e[1].failedAttempts}}));z(t);var a=t.map((function(e){return e.word}));I(a),y(!1)},multiply:3,words:W.filter((function(e){return e.length>0})).map((function(e){return e.toLocaleLowerCase()})).map((function(e){return e.trim()}))}):c.a.createElement(u.a,{position:"absolute",top:"10px",bottom:"10px",left:"10px",right:"10px",display:"flex",flexDirection:"row",justifyContent:"space-around"},c.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"top"},c.a.createElement(u.a,{m:"10px",fontSize:"25px"},"Practice spelling:"),R&&R.map((function(e,t){return c.a.createElement(u.a,{key:t},e.failedAttempts," - ",e.word)})),c.a.createElement(s.a,{value:W.join("\n"),onChange:function(e){if(e.target&&e.target.value){var t=e.target.value;I(t.toLocaleString().split("\n")),console.log(t)}}}),c.a.createElement(d.a,{onClick:function(){return y(!0)}},"Start")),c.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"center"},c.a.createElement(u.a,{m:"10px",fontSize:"25px"},"Practice writing down when dictated:"),c.a.createElement(u.a,{width:"200px"},"Speech Rate: ",w,c.a.createElement(g.a,{value:w,onChange:function(e,t){return x(t)},defaultValue:1,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:.1,min:.3,max:2})),c.a.createElement(u.a,{width:"200px"},"Length: ",O,c.a.createElement(g.a,{value:O,onChange:function(e,t){return k(t)},defaultValue:6,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:3,max:15})),c.a.createElement(f.a,{component:"fieldset"},c.a.createElement(p.a,{component:"legend"},"Type"),c.a.createElement(m.a,{"aria-label":"gender",name:"gender1",value:a,onChange:function(e,t){return n((function(){return t}))}},c.a.createElement(h.a,{value:"letters",control:c.a.createElement(b.a,null),label:"letters"}),c.a.createElement(h.a,{value:"numbers",control:c.a.createElement(b.a,null),label:"numbers"}),c.a.createElement(h.a,{value:"numbersDT",control:c.a.createElement(b.a,null),label:"numbers + double + triple"}),c.a.createElement(h.a,{value:"alpha-numeric",control:c.a.createElement(b.a,null),label:"alpha-numeric"}),c.a.createElement(h.a,{value:"word",control:c.a.createElement(b.a,null),label:"word (lorem ipsum)"}))),c.a.createElement(d.a,{onClick:function(){return F(!0)}},"Start")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.fdb726e6.chunk.js.map