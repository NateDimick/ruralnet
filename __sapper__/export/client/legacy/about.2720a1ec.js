import{_ as t,a as e,i as n,s as o,b as r,S as s,c as a,e as c,t as u,q as i,d as f,f as l,g as p,h,j as v,k as d,l as y,m,r as S,u as T,v as g,w as x,n as R,o as b,p as j,x as E,y as k}from"./client.75c2affb.js";function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(t){var e,n,o,r,s,b,j,E,k,w,N,O,P,D,G,H;return{c:function(){e=a(),n=c("h1"),o=u("REST Test"),r=a(),s=c("p"),b=u("How to make RESTful calls in Sapper?"),j=a(),E=c("div"),k=c("button"),w=u("Get"),N=a(),O=c("button"),P=u("Post"),D=a(),G=c("input"),this.h()},l:function(t){i('[data-svelte="svelte-1rj2x3p"]',document.head).forEach(f),e=l(t),n=p(t,"H1",{});var a=h(n);o=v(a,"REST Test"),a.forEach(f),r=l(t),s=p(t,"P",{});var c=h(s);b=v(c,"How to make RESTful calls in Sapper?"),c.forEach(f),j=l(t),E=p(t,"DIV",{});var u=h(E);k=p(u,"BUTTON",{});var d=h(k);w=v(d,"Get"),d.forEach(f),N=l(u),O=p(u,"BUTTON",{});var y=h(O);P=v(y,"Post"),y.forEach(f),D=l(u),G=p(u,"INPUT",{type:!0,placeholder:!0}),u.forEach(f),this.h()},h:function(){document.title="Get",d(G,"type","text"),d(G,"placeholder","type something")},m:function(a,c,u){y(a,e,c),y(a,n,c),m(n,o),y(a,r,c),y(a,s,c),m(s,b),y(a,j,c),y(a,E,c),m(E,k),m(k,w),m(E,N),m(E,O),m(O,P),m(E,D),m(E,G),S(G,t[0]),u&&T(H),H=[g(k,"click",t[1]),g(O,"click",t[2]),g(G,"input",t[3])]},p:function(t,e){1&x(e,1)[0]&&G.value!==t[0]&&S(G,t[0])},i:R,o:R,d:function(t){t&&f(e),t&&f(n),t&&f(r),t&&f(s),t&&f(j),t&&f(E),T(H)}}}function O(t,e,n){var o;return[o,function(){var t=E(k.mark((function t(){var e,n;return k.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("about.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log("Server response object:"),console.log(e),console.log("Response JSON parsed:"),console.log(n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),function(){var t=E(k.mark((function t(){var e,n,r;return k.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={clientForm:o},t.next=3,fetch("about.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:if(!(n=t.sent).ok){t.next=12;break}return t.next=7,n.json();case 7:r=t.sent,console.log("Server response object:"),console.log(n),console.log("Response JSON parsed:"),console.log(r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),function(){o=this.value,n(0,o)}]}var P=function(a){t(i,s);var c,u=(c=i,function(){var t,e=b(c);if(w()){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function i(t){var s;return e(this,i),s=u.call(this),n(r(s),t,O,N,o,{}),s}return i}();export default P;
