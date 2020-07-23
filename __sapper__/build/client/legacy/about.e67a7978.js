import{_ as n,a as t,i as e,s as r,b as o,S as c,r as a,l as s,u,d as i,c as f,e as l,t as p,q as h,f as v,g as d,h as m,j as S,k as g,m as k,v as y,w as b,x,y as E,n as T,o as w,p as R,z as j,A as P,B as N,C as O}from"./client.37e2259d.js";function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function D(n){var t,e,r={ctx:n,current:null,token:null,pending:H,then:G,catch:F,value:7,error:8};return u(e=n[1],r),{c:function(){t=a(),r.block.c()},l:function(n){t=a(),r.block.l(n)},m:function(n,e){s(n,t,e),r.block.m(n,r.anchor=e),r.mount=function(){return t.parentNode},r.anchor=t},p:function(t,o){if(n=t,r.ctx=n,2&o&&e!==(e=n[1])&&u(e,r));else{var c=n.slice();c[7]=r.resolved,r.block.p(c,o)}},d:function(n){n&&i(t),r.block.d(n),r.token=null,r=null}}}function F(n){var t,e,r=n[8].message+"";return{c:function(){t=l("p"),e=p(r),this.h()},l:function(n){t=d(n,"P",{style:!0});var o=m(t);e=S(o,r),o.forEach(i),this.h()},h:function(){j(t,"color","red")},m:function(n,r){s(n,t,r),k(t,e)},p:function(n,t){2&t&&r!==(r=n[8].message+"")&&P(e,r)},d:function(n){n&&i(t)}}}function G(n){var t,e,r,o=n[7]+"";return{c:function(){t=l("p"),e=p("Speed: "),r=p(o)},l:function(n){t=d(n,"P",{});var c=m(t);e=S(c,"Speed: "),r=S(c,o),c.forEach(i)},m:function(n,o){s(n,t,o),k(t,e),k(t,r)},p:function(n,t){2&t&&o!==(o=n[7]+"")&&P(r,o)},d:function(n){n&&i(t)}}}function H(n){var t,e;return{c:function(){t=l("p"),e=p("waiting...")},l:function(n){t=d(n,"P",{});var r=m(t);e=S(r,"waiting..."),r.forEach(i)},m:function(n,r){s(n,t,r),k(t,e)},p:T,d:function(n){n&&i(t)}}}function J(n){var t,e,r,o,c,a,u,w,R,j,P,N,O,B,F,G,H,J=n[0]&&D(n);return{c:function(){t=f(),e=l("h1"),r=p("REST Test"),o=f(),c=l("p"),a=p("How to make RESTful calls in Sapper?"),u=f(),w=l("div"),R=l("button"),j=p("Get Speed"),P=f(),N=l("button"),O=p("Post Form"),B=f(),F=l("input"),G=f(),J&&J.c(),this.h()},l:function(n){h('[data-svelte="svelte-1rj2x3p"]',document.head).forEach(i),t=v(n),e=d(n,"H1",{});var s=m(e);r=S(s,"REST Test"),s.forEach(i),o=v(n),c=d(n,"P",{});var f=m(c);a=S(f,"How to make RESTful calls in Sapper?"),f.forEach(i),u=v(n),w=d(n,"DIV",{});var l=m(w);R=d(l,"BUTTON",{});var p=m(R);j=S(p,"Get Speed"),p.forEach(i),P=v(l),N=d(l,"BUTTON",{});var g=m(N);O=S(g,"Post Form"),g.forEach(i),B=v(l),F=d(l,"INPUT",{type:!0,placeholder:!0}),G=v(l),J&&J.l(l),l.forEach(i),this.h()},h:function(){document.title="Get",g(F,"type","text"),g(F,"placeholder","type something")},m:function(i,f,l){s(i,t,f),s(i,e,f),k(e,r),s(i,o,f),s(i,c,f),k(c,a),s(i,u,f),s(i,w,f),k(w,R),k(R,j),k(w,P),k(w,N),k(N,O),k(w,B),k(w,F),y(F,n[2]),k(w,G),J&&J.m(w,null),l&&b(H),H=[x(R,"click",n[4]),x(N,"click",n[3]),x(F,"input",n[6])]},p:function(n,t){var e=E(t,1)[0];4&e&&F.value!==n[2]&&y(F,n[2]),n[0]?J?J.p(n,e):((J=D(n)).c(),J.m(w,null)):J&&(J.d(1),J=null)},i:T,o:T,d:function(n){n&&i(t),n&&i(e),n&&i(o),n&&i(c),n&&i(u),n&&i(w),J&&J.d(),b(H)}}}function U(n,t,e){var r,o,c=!1,a=function(){var n=N(O.mark((function n(){var t,r,o;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(0,c=!0),n.prev=1,n.next=4,fetch("about.json");case 4:return t=n.sent,n.next=7,t.json();case 7:return r=n.sent,o=r.speed,console.log("Server response object:"),console.log(t),console.log("Response JSON parsed:"),console.log(o),n.abrupt("return",o);case 16:return n.prev=16,n.t0=n.catch(1),n.abrupt("return",n.t0);case 19:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=N(O.mark((function n(){var t,e,r;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={clientForm:o},n.next=3,fetch("about.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!(e=n.sent).ok){n.next=12;break}return n.next=7,e.json();case 7:r=n.sent,console.log("Server response object:"),console.log(e),console.log("Response JSON parsed:"),console.log(r);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=N(O.mark((function n(){return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(1,r=a());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return[c,r,o,s,u,a,function(){o=this.value,e(2,o)}]}var C=function(a){n(i,c);var s,u=(s=i,function(){var n,t=w(s);if(B()){var e=w(this).constructor;n=Reflect.construct(t,arguments,e)}else n=t.apply(this,arguments);return R(this,n)});function i(n){var c;return t(this,i),c=u.call(this),e(o(c),n,U,J,r,{}),c}return i}();export default C;
