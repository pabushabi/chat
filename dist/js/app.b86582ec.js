(function(e){function t(t){for(var s,a,u=t[0],i=t[1],l=t[2],m=0,f=[];m<u.length;m++)a=u[m],r[a]&&f.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),r=n.n(s);r.a},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("home")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Чат на WebSocket")]),n("div",{attrs:{id:"wrapper"}},[e.logged?e._e():n("div",{attrs:{id:"loginForm"}},[n("label",[e._v("Имя пользователя\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"nameInput",attrs:{type:"text"},domProps:{value:e.username},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.auth(t)},input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("button",{on:{click:e.auth}},[e._v("Присоединиться")])]),e.logged?n("div",[n("div",{ref:"chat",attrs:{id:"chat"}},e._l(e.messages,function(t){return n("message",{attrs:{from:t.from,msg:t.msg,you:t.from===e.username}})}),1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{autofocus:"",maxlength:"50"},domProps:{value:e.msg},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)},input:function(t){t.target.composing||(e.msg=t.target.value)}}}),n("button",{on:{click:e.send}},[e._v("Отправить")])]):e._e()])])},u=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.msgClass},[n("span",{attrs:{id:"from"}},[e._v(e._s(e.from))]),n("br"),n("span",{attrs:{id:"msg"}},[e._v(e._s(e.msg))])])},l=[],c={name:"message",props:{from:"",msg:"",you:!1},data(){return{msgClass:""}},mounted(){this.you&&(this.msgClass+="your "),this.msg.length>20&&this.msg.length<=40&&(this.msgClass+="large"),this.msg.length>40&&(this.msgClass+="largest")}},m=c,f=(n("5fea"),n("2877")),d=Object(f["a"])(m,i,l,!1,null,"5edfb4dd",null),p=d.exports,g=n("8055"),h=n.n(g),v={name:"home",components:{message:p},data(){return{logged:!1,username:"",msg:"",messages:[{from:"bot",msg:"Начните общение!"}],socket:h()("0ed66cd1.ngrok.io")}},methods:{auth(){""!==this.username&&(this.logged=!0,this.socket.emit("new",{user:this.username}))},send(){""!==this.msg&&(this.socket.emit("message",{from:this.username,msg:this.msg}),this.msg="")}},mounted(){this.socket.on("smessage",e=>{this.messages=e,setTimeout(()=>{this.$refs.chat.scrollTop=this.$refs.chat.scrollHeight},50)}),this.$refs.nameInput.focus()}},b=v,y=(n("8b71"),Object(f["a"])(b,a,u,!1,null,null,null)),_=y.exports,k={components:{Home:_}},w=k,x=(n("034f"),Object(f["a"])(w,r,o,!1,null,null,null)),O=x.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(O)}}).$mount("#app")},"5fea":function(e,t,n){"use strict";var s=n("ef1d"),r=n.n(s);r.a},"64a9":function(e,t,n){},"8b71":function(e,t,n){"use strict";var s=n("e3a2"),r=n.n(s);r.a},e3a2:function(e,t,n){},ef1d:function(e,t,n){}});
//# sourceMappingURL=app.b86582ec.js.map