(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1e8b66a715a28bcd56f8":function(e,n,a){"use strict";a.r(n);var t,r=a("8af190b70a6bc55c6f1b"),o=a.n(r),c=(a("8a2d1b95e05b6a321e74"),a("0a81c721557e72a0975d")),i=a("103be25b8913a0141218"),s=a("a28fc3c963a1d4d1a2e5"),d=a("1f7eb4558e149d7a2535"),u=a("6542cd13fd5dd1bcffd4"),l=a("95304742f100121de3ed"),f=a("a11eacdcf2a3861858dc"),p=a("b5b7bafeb7add2b1fc09"),g=a("d7f9c90bb9eec3ae4c76"),b=a("fc43733ec9d3f066c334"),m=a("ab039aecd4a1d4fedc0e"),v="app.components.LoginForm",w=Object(m.defineMessages)({header:{id:"".concat(v,".header"),defaultMessage:"This is the LoginForm component!"},username:{id:"".concat(v,".username"),defaultMessage:"Username"},password:{id:"".concat(v,".password"),defaultMessage:"Password"},signin:{id:"".concat(v,".signin"),defaultMessage:"SIGN IN"}});function y(e,n,a,r){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,c=arguments.length-3;if(n||0===c||(n={children:void 0}),n&&o)for(var i in o)void 0===n[i]&&(n[i]=o[i]);else n||(n=o||{});if(1===c)n.children=r;else if(c>1){for(var s=new Array(c),d=0;d<c;d++)s[d]=arguments[d+3];n.children=s}return{$$typeof:t,type:e,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}var h=Object(b.a)(function(e){return{button:{width:"100%",marginTop:24,marginBottom:16},container:{paddingTop:64},form:{width:"100%",margin:e.spacing(5)},paper:{display:"flex",flexWrap:"wrap",minWidth:"300px",maxWidth:"50%",right:0,left:0,top:0,bottom:0,margin:"auto"},textField:{width:"100%"}}}),O=y(l.a,{});var j=function(e){var n=e.onLogin,a=e.showLoader,t=void 0!==a&&a,r=h(),c={username:null,password:null};return y("div",{className:r.container},void 0,y(p.a,{className:r.paper},void 0,y("form",{className:r.form,onSubmit:function(e){void 0!==e&&e.preventDefault&&e.preventDefault(),n(c)},noValidate:!0},void 0,y(g.a,{id:"username-input",label:o.a.createElement(m.FormattedMessage,w.username),className:r.textField,margin:"normal",name:"username",onChange:function(e){return c.username=e.target.value},type:"text",variant:"outlined"}),y(g.a,{id:"password-input",label:o.a.createElement(m.FormattedMessage,w.password),className:r.textField,margin:"normal",name:"password",onChange:function(e){return c.password=e.target.value},type:"password",variant:"outlined"}),y(f.a,{id:"signin-button",className:r.button,color:"primary",name:"signin",type:"submit",variant:"contained",disabled:t},void 0,t?O:o.a.createElement(m.FormattedMessage,w.signin)))))},L=a("d95b0cf107403b178365"),x=a("adc20f99e57c573c589c"),S="app/LoginPage/LOGIN_REQUEST",k="app/LoginPage/LOGIN_FAILED",P="app/LoginPage/SESSION_REQUEST";function E(e){return{type:k,payload:e}}var N,F=a("7edf83707012a871cdfb"),I={isLoggingIn:!1,username:null,password:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;return Object(F.a)(e,function(e){switch(n.type){case S:e.isLoggingIn=!0,e.username=n.payload.username,e.password=n.payload.password;break;case k:e.isLoggingIn=!1,e.username=null,e.password=null,e.error=n.payload}})},R=function(e){return e.loginPage||I},T=function(){return Object(s.a)(R,function(e){return e})},_=a("124b48bac274890c1fae"),$=a("2cb3248ea08cdbff4a37"),A=a("a72b40110d9c31c9b5c5"),D=a("f363639bc5c3c97af546"),G=regeneratorRuntime.mark(C),U=regeneratorRuntime.mark(J),W=regeneratorRuntime.mark(Q);function C(e){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,t.prev=1,n.email=e.payload.username,delete n.username,t.next=6,Object(_.b)(D.b,"".concat($.a,"/session"),n,!0);case 6:return a=t.sent,t.next=9,Object(_.c)(Object(A.a)(a));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(1),t.next=15,Object(_.c)(E(t.t0));case 15:case"end":return t.stop()}},G,null,[[1,11]])}function J(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(_.b)(D.a,"".concat($.a,"/session"));case 3:return e=n.sent,n.next=6,Object(_.c)(Object(A.a)(e));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(_.c)(E(n.t0));case 12:case"end":return n.stop()}},U,null,[[0,8]])}function Q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Object(_.g)(S,C),Object(_.g)(P,J)]);case 2:case"end":return e.stop()}},W)}function B(e,n,a,t){N||(N="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),n&&r)for(var c in r)void 0===n[c]&&(n[c]=r[c]);else n||(n=r||{});if(1===o)n.children=t;else if(o>1){for(var i=new Array(o),s=0;s<o;s++)i[s]=arguments[s+3];n.children=i}return{$$typeof:N,type:e,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}a.d(n,"LoginPage",function(){return q});var V=B(i.a,{to:"/"});function q(e){var n=e.isLogin,a=e.loginPage,t=e.getSession,c=e.onLogin;return Object(L.a)({key:"loginPage",reducer:M}),Object(x.a)({key:"loginPage",saga:Q}),Object(r.useEffect)(function(){t()},[]),n?V:o.a.createElement(o.a.Fragment,null,B(j,{onLogin:c,showLoader:a.isLoggingIn}))}var z=Object(s.b)({isLogin:Object(u.a)(),loginPage:T()});var H=Object(c.c)(z,function(e){return{onLogin:function(n){e({type:S,payload:n})},getSession:function(){e({type:P})}}});n.default=Object(d.d)(H)(q)}}]);