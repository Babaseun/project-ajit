(this.webpackJsonpuserinterface=this.webpackJsonpuserinterface||[]).push([[0],{10:function(e,t,s){"use strict";var a={isLoggedIn:!1,onAuthenticated:function(){this.isLoggedIn=localStorage.getItem("x-access-token")},getLoggedInStatus:function(){return this.isLoggedIn}};t.a=a},22:function(e,t,s){},26:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a=[{icon:"fas fa-plus-circle",title:"Messages",linkTo:""},{icon:"fas fa-plus-circle",title:"Payments",linkTo:"payment"},{icon:"fas fa-plus-circle",title:"Transactions",linkTo:""},{icon:"fas fa-plus-circle",title:"Explore",linkTo:""},{icon:"fas fa-plus-circle",title:"Settings",linkTo:""},{icon:"fas fa-plus-circle",title:"Help",linkTo:""}]},27:function(e,t,s){"use strict";var a=s(0),c=(s(1),s(5));s(77);t.a=function(e){return Object(a.jsxs)("div",{className:"items",children:[e.title?Object(a.jsx)("h3",{children:e.title}):Object(a.jsx)("i",{className:e.leftIcon}),Object(a.jsx)(c.b,{to:"/".concat(e.linkTo),children:Object(a.jsx)("i",{className:e.icon})})]})}},34:function(e,t,s){"use strict";(function(e){var a=s(0),c=s(2),n=s.n(c),i=s(15),r=s(7),l=s(3),o=s(1),d=s(25),j=s(10),u=s(6),m=(s(79),s(45)),b=s(46),p=s(47),x=s(9),O=s.n(x);s(82).config({path:e+"/../.env"});t.a=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1],x=Object(o.useState)(!1),h=Object(l.a)(x,2),g=h[0],f=h[1],v=Object(o.useState)(""),N=Object(l.a)(v,2),_=N[0],y=N[1],w=Object(o.useState)([]),S=Object(l.a)(w,2),k=S[0],P=S[1],I=Object(u.f)(),L=function(){var e=Object(r.a)(n.a.mark((function e(){var t,s,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"x-access-token":localStorage.getItem("x-access-token")}},e.next=3,O.a.get("/api/images");case 3:return s=e.sent,e.next=6,O.a.get("/api/coords");case 6:return a=e.sent,e.next=9,O.a.get("/api/products",t);case 9:c=e.sent,Promise.all([s,a,c]).then((function(e){var t,s=e[0].data,a=e[1].data,c=e[2].data,n=new Map,r=Object(i.a)(s);try{for(r.s();!(t=r.n()).done;){var o=t.value,d=[o.publicIds].toString().slice(4);n.set(d,{imageUrl:o.imageUrls})}}catch(v){r.e(v)}finally{r.f()}for(var j=0;j<c.length;j++){var u=n.get(c[j].image_id);u.description=c[j].description,u.price=c[j].price}for(var m=0;m<a.length;m++){var b=n.get(a[m].image_id);b.lat=a[m].lat,b.lng=a[m].lng}var p,x=[],O=Object(i.a)(n.entries());try{for(O.s();!(p=O.n()).done;){var h=Object(l.a)(p.value,2),g=h[0],f=h[1];x.push({id:g,values:f})}}catch(v){O.e(v)}finally{O.f()}P([].concat(x))}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(k);var T=function(){f(!g),y(""===_?"display":"")};Object(o.useEffect)((function(){L()}),[]);var C=Object(d.d)({googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_MAPS_API_KEY,libraries:["places"]}),A=C.isLoaded;return C.loadError?"Error loading maps":A?Object(a.jsxs)("div",{children:[g?Object(a.jsx)(m.a,{backArrow:T}):null,Object(a.jsxs)("div",{className:"map",children:[Object(a.jsx)("div",{className:"map__columns",children:Object(a.jsxs)("div",{className:"map__item",children:[j.a.getLoggedInStatus()?Object(a.jsx)(b.a,{display:_,navMenuClicked:T}):null,j.a.getLoggedInStatus()?null:Object(a.jsx)(p.a,{})]})}),Object(a.jsx)("div",{className:"map__columns",children:Object(a.jsxs)(d.a,{mapContainerStyle:{height:"100%",width:"100%"},zoom:8,center:{lat:6.6194,lng:3.5105},options:{disableDefaultUI:!0,zoomControl:!0},children:[k&&k.map((function(e){return Object(a.jsx)(d.c,{position:{lat:e.values.lat,lng:e.values.lng},icon:{url:e.values.imageUrl,scaledSize:new window.google.maps.Size(100,100),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){return c(e)}},e.id)})),s?Object(a.jsx)(d.b,{position:{lat:s.values.lat,lng:s.values.lng},onCloseClick:function(){return c(null)},children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[" Description : ",s.values.description]}),Object(a.jsxs)("h1",{children:["Price :",s.values.price]})]})}):null]})}),localStorage.getItem("x-access-token")?Object(a.jsx)("button",{style:{position:"absolute",top:"0",left:"80%"},onClick:function(){localStorage.removeItem("x-access-token"),I.push("/login")},className:"btn btn-primary",children:"Logout"}):null]})]}):"Loading maps"}}).call(this,"/")},45:function(e,t,s){"use strict";var a=s(0),c=s(4),n=s(3),i=s(1),r=(s(80),s(27)),l=s(26),o=s(9),d=s.n(o);t.a=function(e){var t=Object(i.useState)({}),s=Object(n.a)(t,2),o=s[0],j=s[1],u=Object(i.useState)(Object(c.a)(l.a)),m=Object(n.a)(u,1)[0];return Object(i.useEffect)((function(){var e=localStorage.getItem("x-access-token");d.a.get("/api/user",{headers:{"x-access-token":e}}).then((function(e){return j(e.data)}))}),[]),Object(a.jsxs)("div",{className:"navigation",children:[Object(a.jsx)("div",{className:"navigation__columns",children:Object(a.jsx)("i",{onClick:e.backArrow,className:"fas fa-long-arrow-alt-left icons"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"navigation__columns",children:Object(a.jsxs)("div",{className:"navigation__info",children:[Object(a.jsx)("i",{className:"fas fa-user icons"}),Object(a.jsx)("div",{className:"navigation__user-info",children:Object(a.jsxs)("div",{className:"user-name",children:[Object(a.jsx)("h2",{children:"".concat(o.firstName," ").concat(o.lastName)},o.id),Object(a.jsx)("i",{className:"fas fa-star-half-alt icons"}),Object(a.jsx)("i",{className:"fas fa-star icons"}),Object(a.jsx)("i",{className:"far fa-star icons"})]})})]})}),Object(a.jsx)("div",{className:"navigation__columns",children:m.map((function(e,t){return Object(a.jsx)("div",{className:"nav-item",children:Object(a.jsx)(r.a,{icon:e.icon,title:e.title,linkTo:e.linkTo},t)},t)}))})]})]})}},46:function(e,t,s){"use strict";var a=s(0);s(1),s(81);t.a=function(e){return Object(a.jsx)("div",{className:e.display,children:Object(a.jsx)("i",{className:"fa fa-bars","aria-hidden":"true",onClick:e.navMenuClicked})})}},47:function(e,t,s){"use strict";var a=s(0),c=(s(1),s(5));t.a=function(){return Object(a.jsxs)("div",{className:"map__item",children:[Object(a.jsx)("div",{className:"map__first-item--brand",children:Object(a.jsx)("h1",{children:"aJIT"})}),Object(a.jsxs)("div",{className:"map__second-item--links",children:[Object(a.jsx)(c.b,{to:"/login",children:"Login"}),Object(a.jsx)("div",{children:"or"}),Object(a.jsx)(c.b,{to:"/register",children:"Signup"})]})]})}},53:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),i=s(21),r=s.n(i),l=(s(53),s(2)),o=s.n(l),d=s(7),j=s(3),u=s(6),m=s(18),b=(s(22),s(10)),p=s(9),x=s.n(p),O=s(5);var h=function(){var e=Object(u.f)(),t=Object(m.a)(),s=t.register,c=t.handleSubmit,i=t.errors,r=n.a.useState(""),l=Object(j.a)(r,2),p=l[0],h=l[1],g=function(){var t=Object(d.a)(o.a.mark((function t(s){var a,c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.post("/login",s);case 3:a=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",a.data.token),e.push("/map"),h(""),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),c=Object(j.a)(t.t0.response.data,1),n=c[0],console.log(n.msg),h(n.msg);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("div",{className:"login-input-group",children:Object(a.jsxs)("div",{className:"login-input",children:[Object(a.jsx)("h1",{className:"login__text",children:"Login Here"}),Object(a.jsxs)("form",{onSubmit:c(g),method:"POST",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),i.email&&"Please enter your email.",p?Object(a.jsx)("div",{children:p}):null]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),i.email&&"Please enter your password."]})]}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Login"}),Object(a.jsxs)("small",{className:"text-muted m-4",children:["Not yet registered"," ",Object(a.jsx)(O.b,{to:"/register",children:"Click Here to register"})]})]})]})}),Object(a.jsx)("div",{className:"login__image-group",children:Object(a.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},g=s(4);var f=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("button",{type:"submit",children:[Object(a.jsx)("i",{class:e.icon}),e.children]})})},v=s(26),N=s(27);s(78);var _=function(){var e=n.a.useState(Object(g.a)(v.a)),t=Object(j.a)(e,1)[0];return Object(a.jsxs)("div",{className:"payment",children:[Object(a.jsxs)("div",{className:"payment__columns",children:[Object(a.jsx)("i",{className:"fas fa-long-arrow-alt-left icons"}),Object(a.jsx)("h3",{children:"Payment"})]}),Object(a.jsxs)("div",{className:"payment__columns",children:[Object(a.jsxs)("div",{className:"payment__column",children:[Object(a.jsx)("h3",{children:"aJIT Cash"}),Object(a.jsxs)("div",{className:"payment__data",children:[Object(a.jsx)("h1",{children:"NGN 5700.00"}),Object(a.jsx)("i",{class:"fas fa-chevron-right card-arrow icons"})]}),Object(a.jsx)("div",{className:"payment-button",children:Object(a.jsx)(f,{icon:"fas fa-plus",children:"Add Funds"})})]}),Object(a.jsx)("div",{className:"payment-text",children:"Payment Methods"})]}),Object(a.jsxs)("div",{className:"payment__columns",children:[t.map((function(e,t){return Object(a.jsx)("div",{className:"nav-item payment-process",children:Object(a.jsx)(N.a,{leftIcon:"fab fa-cc-visa payment-icons payment-left-icon icons",linkTo:"mmmmmmmmmmmmm",icon:"fas fa-chevron-right payment-icons payment-right-icon icons"},t)})})),Object(a.jsx)("div",{className:"nav-item payment-process",children:"Add Payment Method"})]})]})};var y=function(){var e=Object(u.f)(),t=Object(m.a)(),s=t.register,c=t.handleSubmit,i=t.errors,r=n.a.useState([]),l=Object(j.a)(r,2),p=l[0],h=l[1],f=function(){var t=Object(d.a)(o.a.mark((function t(s){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.post("/register",s);case 3:a=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",a.data.token),e.push("/map"),h([]),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),h(Object(g.a)(t.t0.response.data));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("div",{className:"login-input-group",children:Object(a.jsxs)("div",{className:"login-input",children:[Object(a.jsx)("h1",{className:"login__text",children:"Register Here"}),p?Object(a.jsx)("ul",{children:p.map((function(e,t){return Object(a.jsx)("li",{children:e.msg},t)}))}):null,Object(a.jsxs)("form",{onSubmit:c(f),method:"POST",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"FirstName"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"firstName",className:"input form-control",ref:s({required:!0})}),i.firstName&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your firstName."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"LastName"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"lastName",className:"input form-control",ref:s({required:!0})}),i.lastName&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your lastname."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),i.email&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your email."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),i.password&&"Please enter your password."]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"ConfirmPassword"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"confirmPassword",className:"input form-control",ref:s({required:!0})}),i.confirmPassword&&"Please enter your password."]})]}),Object(a.jsx)("input",{type:"hidden",name:"role",className:"input form-control",value:"customer",ref:s()}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(a.jsxs)("small",{className:"text-muted m-4",children:["Already registered ",Object(a.jsx)(O.b,{to:"/login",children:"Click Here to login"})]})]})]})}),Object(a.jsx)("div",{className:"login__image-group",children:Object(a.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},w=s(87);var S=function(){var e=Object(u.f)(),t=Object(m.a)(),s=t.register,c=t.handleSubmit,i=t.errors,r=n.a.useState([]),l=Object(j.a)(r,1)[0],p=n.a.useState(""),O=Object(j.a)(p,2),h=O[0],g=O[1],f=n.a.useState(Object(w.a)()),v=Object(j.a)(f,2),N=v[0],_=v[1],y=function(){var e=Object(d.a)(o.a.mark((function e(t){var s,a,c,n,i,r,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(""),s={headers:{"x-access-token":localStorage.getItem("x-access-token")}},a=t.productImage,c=t.price,n=t.description,i=t.lng,r=t.lat,e.next=5,S(a[0]);case 5:return e.next=7,x.a.post("/api/products",{price:c,description:n,image_id:N},s);case 7:return l=e.sent,e.next=10,x.a.post("/api/coords",{lng:Number(i),lat:Number(r),image_id:N},s);case 10:d=e.sent,Promise.all([l,d]).then((function(e){g("Saved successfully"),console.log(e)})).catch((function(e){return console.log(e.response)}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){k(t.result)}},k=function(){var e=Object(d.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{"x-access-token":localStorage.getItem("x-access-token")}},e.next=3,x.a.post("/api/upload",{file:t,image_id:N},s);case 3:_(Object(w.a)());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(b.a.getLoggedInStatus()),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("div",{className:"login-input-group",children:Object(a.jsxs)("div",{className:"login-input",children:[Object(a.jsx)("h1",{className:"login__text",children:"Add Product"}),h,l?Object(a.jsx)("ul",{children:l.map((function(e,t){return Object(a.jsx)("li",{children:e.msg},t)}))}):null,Object(a.jsxs)("form",{onSubmit:c(y),method:"POST",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{className:"mb-3",children:"Product Image"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"file",name:"productImage",className:"form-control-file",ref:s({required:!0})}),i.productImage&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter product image ."})]})]}),Object(a.jsxs)("div",{className:"input-field mt-3",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Description"}),Object(a.jsx)("textarea",{className:"form-control",rows:"5",cols:"5",ref:s({required:!0}),name:"description"})]}),i.description&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter description."})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Price"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"price",className:"input form-control",ref:s({required:!0})}),i.price&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your price."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Longitude"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"lng",className:"input form-control",ref:s({required:!0})}),i.price&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your Longitude."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Latitude"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"lat",className:"input form-control",ref:s({required:!0})}),i.price&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your Latitude."})]})]}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save Product"}),Object(a.jsx)("div",{className:"input-field mt-3",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn",onClick:function(){localStorage.removeItem("x-access-token"),e.push("/admin-login")},children:"Logout"})})})]})]})}),Object(a.jsx)("div",{className:"login__image-group",children:Object(a.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},k=s(28),P=function(e){return Object(a.jsx)(u.b,{path:e.path,render:function(t){return b.a.getLoggedInStatus()?Object(a.jsx)(e.component,Object(k.a)({},t)):Object(a.jsx)(u.a,{to:{pathname:"/login"}})}})},I=s(34);var L=function(){var e=Object(u.f)(),t=Object(m.a)(),s=t.register,c=t.handleSubmit,i=t.errors,r=n.a.useState([]),l=Object(j.a)(r,2),p=l[0],h=l[1],f=function(){var t=Object(d.a)(o.a.mark((function t(s){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.post("/register",s);case 3:a=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",a.data.token),e.push("/products"),h([]),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),h(Object(g.a)(t.t0.response.data));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("div",{className:"login-input-group",children:Object(a.jsxs)("div",{className:"login-input",children:[Object(a.jsx)("h1",{className:"login__text",children:"Admin Register"}),p?Object(a.jsx)("ul",{children:p.map((function(e,t){return Object(a.jsx)("li",{children:e.msg},t)}))}):null,Object(a.jsxs)("form",{onSubmit:c(f),method:"POST",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"FirstName"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"firstName",className:"input form-control",ref:s({required:!0})}),i.firstName&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your firstName."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"LastName"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",name:"lastName",className:"input form-control",ref:s({required:!0})}),i.lastName&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your lastname."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),i.email&&Object(a.jsx)("div",{className:"text-danger",children:"Please enter your email."})]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),i.password&&"Please enter your password."]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"ConfirmPassword"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"confirmPassword",className:"input form-control",ref:s({required:!0})}),i.confirmPassword&&"Please enter your password."]})]}),Object(a.jsx)("input",{type:"hidden",name:"role",className:"input form-control",value:"business",ref:s()}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(a.jsxs)("small",{className:"text-muted m-4",children:["Already registered"," ",Object(a.jsx)(O.b,{to:"/admin-login",children:"Click Here to login"})]})]})]})}),Object(a.jsx)("div",{className:"login__image-group",children:Object(a.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})};var T=function(){var e=Object(u.f)(),t=Object(m.a)(),s=t.register,c=t.handleSubmit,i=t.errors,r=n.a.useState(""),l=Object(j.a)(r,2),p=l[0],h=l[1],g=function(){var t=Object(d.a)(o.a.mark((function t(s){var a,c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.post("/login",s);case 3:a=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",a.data.token),e.push("/products"),h(""),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),c=Object(j.a)(t.t0.response.data,1),n=c[0],console.log(n.msg),h(n.msg);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("div",{className:"login-input-group",children:Object(a.jsxs)("div",{className:"login-input",children:[Object(a.jsx)("h1",{className:"login__text",children:"ADMIN LOGIN"}),Object(a.jsxs)("form",{onSubmit:c(g),method:"POST",children:[Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),i.email&&"Please enter your email.",p?Object(a.jsx)("div",{children:p}):null]})]}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),i.email&&"Please enter your password."]})]}),Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Login"}),Object(a.jsxs)("small",{className:"text-muted m-4",children:["Not yet registered"," ",Object(a.jsx)(O.b,{to:"/admin-register",children:"Click Here to register"})]})]})]})}),Object(a.jsx)("div",{className:"login__image-group",children:Object(a.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},C=function(e){return Object(a.jsx)(u.b,{path:e.path,render:function(t){return b.a.getLoggedInStatus()?Object(a.jsx)(e.component,Object(k.a)({},t)):Object(a.jsx)(u.a,{to:{pathname:"/admin-login"}})}})};var A=function(){return Object(a.jsx)("div",{className:"main",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/login",component:h}),Object(a.jsx)(u.b,{exact:!0,path:"/admin-login",component:T}),Object(a.jsx)(u.b,{exact:!0,path:"/",component:I.a}),Object(a.jsx)(u.b,{exact:!0,path:"/payment",component:_}),Object(a.jsx)(u.b,{exact:!0,path:"/register",component:y}),Object(a.jsx)(u.b,{exact:!0,path:"/admin-register",component:L}),Object(a.jsx)(P,{exact:!0,path:"/map",component:I.a}),Object(a.jsx)(C,{exact:!0,path:"/products",component:S})]})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,88)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),E()}},[[85,1,2]]]);
//# sourceMappingURL=main.c096df3a.chunk.js.map