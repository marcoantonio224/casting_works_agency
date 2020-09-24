(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(66),a(6)),i=a(15),u=a(10),s=a(108),m=function(){var e=Object(u.b)().loginWithRedirect;return r.a.createElement(s.a,{variant:"outline-info",onClick:function(){return e()}},"Log In")},d=function(){var e=Object(u.b)().logout;return r.a.createElement(s.a,{variant:"outline-info",onClick:function(){return e()}},"Log Out")},h=a(31),E=a.n(h),p=a(38),f=a.n(p),g=a(53),v=a.n(g),b=a(54),y=a.n(b),j=(a(73),a(74),a(75),{backgroundImage:"url(".concat(E.a,")"),display:"grid",height:"25em",backgroundSize:"cover",backgroundColor:"#000000ad",backgroundBlendMode:"color",color:"white"});var O=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(u.b)()),l=a.user,c=(a.getAccessTokenSilently,(l||{}).nickname);return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{style:j},l?r.a.createElement("h4",null,c):"",r.a.createElement("div",{id:"intro"},r.a.createElement("h5",null,"Lights, Camera, Action! Welcome to our casting agency. Where ",r.a.createElement("span",{className:"emphasis"},"Legends")," are made. Where ",r.a.createElement("span",{className:"emphasis"},"Dreams")," come true. Where ",r.a.createElement("span",{className:"emphasis"},"Stars")," are born. Our agency provides opportunites for those who got what it takes to be in the movie business. Consult with one of our agents to get you started. Your new life begins now."),r.a.createElement("br",null),r.a.createElement("div",{className:"buttonContainers"},r.a.createElement(s.a,{variant:"outline-info"},"Sign in"),r.a.createElement(m,null),r.a.createElement(d,null)))),r.a.createElement("section",{className:"section1"},r.a.createElement("div",null,r.a.createElement("h3",null,"Actors"),r.a.createElement("p",{className:"text-column"},"Famous actors and actresses of stage and screen light up the world from Hollywood to Broadway and beyond. Stars like Marilyn Monroe, Will Smith, Johnny Depp, Robert Downey Jr., Angelina Jolie and Charlie Chaplin illuminate the human condition by bringing compelling characters to life.",r.a.createElement("br",null),r.a.createElement(i.b,null,r.a.createElement(s.a,{variant:"outline-light"},"Actors")))),r.a.createElement("div",null,r.a.createElement("h3",null,"About Us"),r.a.createElement("p",{className:"text-column"},"Headquartered in the famous, fancy and wealthy Beverly Hills, CastingWorks is a top talent agency known for fostering the careers of independent film stars. If starting your career off in a Sundance-based film sounds enticing, one day Paradigm may be the top talent agency for you.")),r.a.createElement("div",null,r.a.createElement("h3",null,"Movies"),r.a.createElement("p",{className:"text-column"},"Got a movie? Bring us your ideas. Help us create the next Oscar winning film. In our agency, we collaborate with our actors to these prospective block busters. Think you can star in a the next cinema ? Got the next idea for a big hit ? Don't waste any more time and join today.",r.a.createElement("br",null),r.a.createElement(i.b,{to:"/actors"},r.a.createElement(s.a,{variant:"outline-light"},"Movies"))))),r.a.createElement("section",{className:"section2"},r.a.createElement("div",null,r.a.createElement("p",{className:"main-text"},"We are a family casting team providing both Principal and Extras Casting, fulfilling all of your production\u2019s casting needs. With our combined experiences in front of and behind the camera, we create a well-rounded and seasoned approach to bring the casting vision to life."),r.a.createElement("img",{src:y.a,className:"side-image-2"}),r.a.createElement("p",{className:"main-text"},"We are Casting Directors offering casting services in Los Angeles, California and will travel wherever we need to in order to find the best talent for your projects. We use the most advanced casting technology to provide the best outreach and casting presentation available. We have already successfully promoted and cast some of Hollywood's Stars on the big screen.")),r.a.createElement("div",{className:"side-container"},r.a.createElement("img",{src:v.a,className:"side-image"}),r.a.createElement("p",{className:"side-text"},"Get started by with our auditions to figure out your strengths and weaknesses. Not only do we provide agencies, but also have partnerships with other companies that provide private lessons."))))},k=a(8),w=a(7),S=a.n(w),C=a(12),x=a(30),A=a.n(x),N=function(e,t){var a={url:"http://localhost:5000"+t,method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}};return A()(a).then((function(e){return e})).catch((function(e){return console.log(e)}))},L=function(){var e=Object(C.a)(S.a.mark((function e(t,a,n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000",r={url:"http://localhost:5000"+a,method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},data:n},e.next=4,A()(r).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(C.a)(S.a.mark((function e(t,a,n,r){var l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000",l={url:"".concat("http://localhost:5000","/").concat(a,"/").concat(n),method:"PATCH",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},data:r},e.next=4,A()(l).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(C.a)(S.a.mark((function e(t,a,n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000",r={url:"".concat("http://localhost:5000","/").concat(a,"/").concat(n),method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}},e.next=4,A()(r).then((function(e){return e})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),W=a(107),M=a(21);var D=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=(a[0],a[1],Object(n.useState)({})),c=Object(o.a)(l,2),i=(c[0],c[1],Object(M.a)()),u=i.register,m=i.handleSubmit;return e.token,r.a.createElement("div",null,r.a.createElement("h4",null,"Add Actor"),r.a.createElement(W.a,{onSubmit:m(e.onSubmitForm)},r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Name"),r.a.createElement(W.a.Control,{type:"text",name:"name",placeholder:"Enter full name",ref:u,required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Age"),r.a.createElement(W.a.Control,{type:"number",ref:u,name:"age",min:"14",max:"100",placeholder:"Age",required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Select Gender"),r.a.createElement(W.a.Control,{as:"select",ref:u,name:"gender",required:!0},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"),r.a.createElement("option",null,"Other"),r.a.createElement("option",null,"Rather not say"))),r.a.createElement(s.a,{variant:"primary",type:"submit"},"Submit")))};var _=function(e){var t=e.token,a=e.category,l=e.getActors,c=e.handleClose,i=Object(n.useState)(a.name),u=Object(o.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)([]),E=Object(o.a)(h,2),p=(E[0],E[1],Object(n.useState)(a.age)),f=Object(o.a)(p,2),g=f[0],v=f[1],b=Object(n.useState)(a.gender),y=Object(o.a)(b,2),j=y[0],O=y[1],k=Object(M.a)(),w=k.register,S=k.handleSubmit;return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement("h4",null,"Edit Actor"),r.a.createElement(W.a,{onSubmit:S((function(e){var n=a.id;G(t,"actors",n,e).then((function(e){var t=e.data.updated_actor,a=t.name,n=t.age,r=t.gender;d(a),v(n),O(r),l()})).catch((function(e){return console.log(e)}))}))},r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Name"),r.a.createElement(W.a.Control,{type:"text",name:"name",placeholder:"Enter full name",ref:w,value:m,onChange:function(e){return d(e.target.value)},required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Age"),r.a.createElement(W.a.Control,{type:"number",ref:w,name:"age",min:"14",max:"100",placeholder:"Age",value:g,onChange:function(e){return v(e.target.value)},required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Select Gender"),r.a.createElement(W.a.Control,{as:"select",ref:w,name:"gender",value:j,onChange:function(e){return O(e.target.value)},required:!0},r.a.createElement("option",null,"Male"),r.a.createElement("option",null,"Female"),r.a.createElement("option",null,"Other"),r.a.createElement("option",null,"Rather not say"))),r.a.createElement(s.a,{variant:"primary",type:"submit",onClick:function(){return c()}},"Submit")))};var q=function(e){var t=e.token,a=e.category,l=e.getMovies,c=e.handleClose,i=Object(n.useState)(a.title),u=Object(o.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)(a.release_date),E=Object(o.a)(h,2),p=E[0],f=E[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),b=(v[0],v[1],Object(M.a)()),y=b.register,j=b.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h4",null,"Edit Movie"),r.a.createElement(W.a,{onSubmit:j((function(e){var n=a.id;G(t,"movies",n,e).then((function(e){var t=e.data.updated_movie,a=t.title,n=t.release_date;d(a),f(n),l()})).catch((function(e){return console.log(e)}))}))},r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Title"),r.a.createElement(W.a.Control,{type:"text",name:"title",placeholder:"Enter Title of movie",ref:y,value:m,onChange:function(e){return d(e.target.value)},required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Release Date"),r.a.createElement(W.a.Control,{type:"date",ref:y,name:"release_date",min:"14",max:"100",placeholder:"Release Date",value:p,onChange:function(e){return f(e.target.value)},required:!0})),r.a.createElement(s.a,{variant:"primary",type:"submit",onClick:function(){return c()}},"Submit")))},B=a(106);var H=function(e){var t=e.category,a=e.token,l=e.getData,c=e.form,i=Object(n.useState)(!1),u=Object(o.a)(i,2),m=u[0],d=u[1],h=function(){return d(!1)};return console.log(t,"cat"),r.a.createElement("div",null,r.a.createElement(s.a,{variant:"outline-light",onClick:function(){return d(!0)}},"Edit"),r.a.createElement(B.a,{show:m,onHide:h},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,null,"Edit")),r.a.createElement(B.a.Body,null,"actors"===c?r.a.createElement(_,{category:t,token:a,getActors:l,handleClose:h}):r.a.createElement(q,{category:t,token:a,getMovies:l,handleClose:h}))))};a(98);var R=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],d=i[1],h=Object(u.b)(),E=(h.user,h.isAuthenticated),p=h.getAccessTokenSilently,g=function(){var e=Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p({audience:"actions"});case 3:t=e.sent,d(t),console.log(t),t&&N(t,"/actors").then((function(e){e&&l(e.data.actors)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),r.a.createElement("section",{className:"main-content-actors"},r.a.createElement("div",{className:"sub-content"},r.a.createElement("div",null,r.a.createElement("img",{src:f.a,className:"actors"})),r.a.createElement("div",null,r.a.createElement("div",{className:"actor-form"},r.a.createElement(D,{token:m,onSubmitForm:function(e){L(m,"/actors",e).then((function(e){l([].concat(Object(k.a)(a),[e.data.new_actor]))})).catch((function(e){return console.log(e)}))}})))),r.a.createElement("div",null,E?r.a.createElement("div",null,r.a.createElement("h3",null,"CastingWorks Actresses & Actors"),r.a.createElement("div",null,r.a.createElement("h3",null,"Actors"),0===a.length?r.a.createElement("h4",null,"There are no current actors."):r.a.createElement("div",{className:"actors-container"},a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,e.age),r.a.createElement("h6",null,e.gender),r.a.createElement(H,{variant:"outline-light",category:e,token:m,getData:g,form:"actors"}),r.a.createElement(s.a,{variant:"outline-light",onClick:function(){return t=e.id,void T(m,"actors",t).then((function(e){g()}));var t}},"Delete"))}))))):r.a.createElement("div",null,r.a.createElement("h3",null,"Loading"))))};var F=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),l=(a[0],a[1],Object(M.a)()),c=l.register,i=l.handleSubmit;return e.token,r.a.createElement("div",null,r.a.createElement("h4",null,"Add Movie"),r.a.createElement(W.a,{onSubmit:i(e.onSubmitForm)},r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Title"),r.a.createElement(W.a.Control,{type:"text",name:"title",placeholder:"Title of movie",ref:c,required:!0})),r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Release Date"),r.a.createElement(W.a.Control,{type:"date",ref:c,name:"release_date",placeholder:"Release date",required:!0})),r.a.createElement(s.a,{variant:"primary",type:"submit"},"Submit")))},I=a(60),z=a.n(I);a(99);var J=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],d=i[1],h=Object(u.b)(),E=(h.user,h.isAuthenticated),p=h.getAccessTokenSilently,f=function(){var e=Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p({audience:"actions"});case 3:t=e.sent,d(t),t&&N(t,"/movies").then((function(e){e&&l(e.data.movies)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),r.a.createElement("section",{className:"main-content-actors"},r.a.createElement("div",{className:"sub-content"},r.a.createElement("div",null,r.a.createElement("img",{src:z.a,className:"actors"})),r.a.createElement("div",null,r.a.createElement("h3",null,"Movies"),r.a.createElement("div",null,r.a.createElement(F,{token:m,onSubmitForm:function(e){L(m,"/movies",e).then((function(e){l([].concat(Object(k.a)(a),[e.data.new_movie]))})).catch((function(e){return console.log(e)}))}})))),r.a.createElement("div",null,E?r.a.createElement("div",null,r.a.createElement("h3",null,"CastingWorks Movies"),r.a.createElement("div",null,0===a.length?r.a.createElement("h4",null,"There are no current movies."):r.a.createElement("div",{className:"movies-container"},a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.title),r.a.createElement("h5",null,e.release_date),r.a.createElement(H,{variant:"outline-light",category:e,token:m,getData:f,form:"movies"}),r.a.createElement(s.a,{variant:"outline-light",onClick:function(){return t=e.id,void T(m,"movies",t).then((function(e){f()}));var t}},"Delete"))}))))):r.a.createElement("div",null,r.a.createElement("h3",null,"Not Authenticated"))))},P=a(32),U=a.n(P);a(100);var K=function(){var e=Object(u.b)(),t=e.user,a=(e.getAccessTokenSilently,e.loginWithRedirect),n=(t||{}).nickname;return r.a.createElement("header",null,r.a.createElement("div",{className:"sub-header"},r.a.createElement("h2",null,r.a.createElement(i.b,{to:"/",id:"title"},"CastingWorks")),t?r.a.createElement("p",null,"logged in as ",n):""),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/actors"},"Actors"),r.a.createElement(i.b,{to:"/movies"},"Movies")),r.a.createElement("ul",null,r.a.createElement(i.b,{onClick:function(){return a()}},"Login"))))};a(101);var V=function(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("img",{src:U.a,className:"logos-image"})))},X=a(9);a(102),a(103);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(K,null),r.a.createElement(X.c,null,r.a.createElement(X.a,{exact:!0,path:"/",component:O}),r.a.createElement(X.a,{path:"/actors",component:R}),r.a.createElement(X.a,{path:"/movies",component:J})),r.a.createElement(V,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{domain:"castingworksfsnd.us.auth0.com",clientId:"HHXpKfUaB8xr1EVF0ffC6eg4tUaq60dO",audience:"actions",redirectUri:window.location.origin},r.a.createElement(Y,null))),document.getElementById("root"))},31:function(e,t,a){e.exports=a.p+"static/media/casting.eba30cdf.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/casting_logos.d7b0a343.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/new_actors.b80a9217.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/actors_waiting.4f31113d.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/casting-directors.abf2bce1.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/film_shooting.f84c15f0.jpg"},61:function(e,t,a){e.exports=a(104)},66:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/hollywood_map.f4945731.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/movies.f9f8c5ba.jpg"},75:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.dad756e6.chunk.js.map