(this.webpackJsonpuserinterface=this.webpackJsonpuserinterface||[]).push([[0],{111:function(e,t,s){"use strict";var c=s(1),a=s(4),n=s(3),r=s(0),i=(s(146),s(48)),l=s(47),o=s(9),u=s.n(o);t.a=function(e){var t=Object(r.useState)({}),s=Object(n.a)(t,2),o=s[0],j=s[1],d=Object(r.useState)(Object(a.a)(l.a)),m=Object(n.a)(d,1)[0];return Object(r.useEffect)((function(){var e=localStorage.getItem("x-access-token");u.a.get("/api/user",{headers:{"x-access-token":e}}).then((function(e){return j(e.data)}))}),[]),Object(c.jsxs)("div",{className:"navigation",children:[Object(c.jsx)("div",{className:"navigation__columns",children:Object(c.jsx)("i",{onClick:e.backArrow,className:"fas fa-long-arrow-alt-left icons"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"navigation__columns",children:Object(c.jsxs)("div",{className:"navigation__info",children:[Object(c.jsx)("i",{className:"fas fa-user icons"}),Object(c.jsx)("div",{className:"navigation__user-info",children:Object(c.jsxs)("div",{className:"user-name",children:[Object(c.jsx)("h2",{children:"".concat(o.firstName," ").concat(o.lastName)},o.id),Object(c.jsx)("i",{className:"fas fa-star-half-alt icons"}),Object(c.jsx)("i",{className:"fas fa-star icons"}),Object(c.jsx)("i",{className:"far fa-star icons"})]})})]})}),Object(c.jsx)("div",{className:"navigation__columns",children:m.map((function(e,t){return Object(c.jsx)("div",{className:"nav-item",children:Object(c.jsx)(i.a,{icon:e.icon,title:e.title,linkTo:e.linkTo},t)},t)}))})]})]})}},112:function(e,t,s){"use strict";var c=s(1);s(0),s(147);t.a=function(e){return Object(c.jsx)("div",{className:e.display,children:Object(c.jsx)("i",{className:"fa fa-bars","aria-hidden":"true",onClick:e.navMenuClicked})})}},113:function(e,t,s){"use strict";var c=s(1),a=(s(0),s(8));t.a=function(){return Object(c.jsxs)("div",{className:"map__item",children:[Object(c.jsx)("div",{className:"map__first-item--brand",children:Object(c.jsx)("h1",{children:"aJIT"})}),Object(c.jsxs)("div",{className:"map__second-item--links",children:[Object(c.jsx)(a.b,{to:"/login",children:"Login"}),Object(c.jsx)("div",{children:"or"}),Object(c.jsx)(a.b,{to:"/register",children:"Signup"})]})]})}},120:function(e,t,s){},143:function(e,t,s){},144:function(e,t,s){},145:function(e,t,s){},146:function(e,t,s){},147:function(e,t,s){},21:function(e,t,s){"use strict";var c={isLoggedIn:localStorage.getItem("x-access-token"),onAuthenticated:function(){this.isLoggedIn=localStorage.getItem("x-access-token")},getLoggedInStatus:function(){return this.isLoggedIn}};t.a=c},269:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),n=s.n(a),r=s(30),i=s.n(r),l=(s(120),s(2)),o=s.n(l),u=s(6),j=s(3),d=s(5),m=s(29),b=(s(51),s(21)),p=s(9),h=s.n(p),x=s(8);var O=function(){var e=Object(d.f)(),t=Object(m.a)(),s=t.register,a=t.handleSubmit,r=t.errors,i=n.a.useState(""),l=Object(j.a)(i,2),p=l[0],O=l[1],f=n.a.useState(""),g=Object(j.a)(f,2),v=g[0],N=g[1],y=function(){var t=Object(u.a)(o.a.mark((function t(s){var c,a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("/login",s);case 3:c=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",c.data.token),O(""),a={headers:{"x-access-token":localStorage.getItem("x-access-token")}},h.a.get("/api/user",a).then((function(t){N(t.data.role),"customer"===v?e.push("/map"):e.push("/product")})),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),n=Object(j.a)(t.t0.response.data,1),r=n[0],console.log(r.msg),O(r.msg);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("div",{className:"login-input-group",children:Object(c.jsxs)("div",{className:"login-input",children:[Object(c.jsx)("h1",{className:"login__text",children:"Login Here"}),Object(c.jsxs)("form",{onSubmit:a(y),method:"POST",children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),r.email&&"Please enter your email.",p?Object(c.jsx)("div",{children:p}):null]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),r.email&&"Please enter your password."]})]}),Object(c.jsx)("button",{className:"btn btn-success",type:"submit",children:"Login"}),Object(c.jsxs)("small",{className:"text-muted m-4",children:["Not yet registered"," ",Object(c.jsx)(x.b,{to:"/register",children:"Click Here to register"})]})]})]})}),Object(c.jsx)("div",{className:"login__image-group",children:Object(c.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},f=s(4);var g=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("button",{type:"submit",children:[Object(c.jsx)("i",{class:e.icon}),e.children]})})},v=s(47),N=s(48);s(144);var y=function(){var e=n.a.useState(Object(f.a)(v.a)),t=Object(j.a)(e,2),s=t[0];return t[1],Object(c.jsxs)("div",{className:"payment",children:[Object(c.jsxs)("div",{className:"payment__columns",children:[Object(c.jsx)("i",{className:"fas fa-long-arrow-alt-left icons"}),Object(c.jsx)("h3",{children:"Payment"})]}),Object(c.jsxs)("div",{className:"payment__columns",children:[Object(c.jsxs)("div",{className:"payment__column",children:[Object(c.jsx)("h3",{children:"aJIT Cash"}),Object(c.jsxs)("div",{className:"payment__data",children:[Object(c.jsx)("h1",{children:"NGN 5700.00"}),Object(c.jsx)("i",{class:"fas fa-chevron-right card-arrow icons"})]}),Object(c.jsx)("div",{className:"payment-button",children:Object(c.jsx)(g,{icon:"fas fa-plus",children:"Add Funds"})})]}),Object(c.jsx)("div",{className:"payment-text",children:"Payment Methods"})]}),Object(c.jsxs)("div",{className:"payment__columns",children:[s.map((function(e,t){return Object(c.jsx)("div",{className:"nav-item payment-process",children:Object(c.jsx)(N.a,{leftIcon:"fab fa-cc-visa payment-icons payment-left-icon icons",linkTo:"mmmmmmmmmmmmm",icon:"fas fa-chevron-right payment-icons payment-right-icon icons"},t)})})),Object(c.jsx)("div",{className:"nav-item payment-process",children:"Add Payment Method"})]})]})};var k=function(){var e=Object(d.f)(),t=Object(m.a)(),s=t.register,a=t.handleSubmit,r=t.errors,i=n.a.useState([]),l=Object(j.a)(i,2),p=l[0],O=l[1],g=n.a.useState(""),v=Object(j.a)(g,2),N=v[0],y=v[1],k=function(){var t=Object(u.a)(o.a.mark((function t(s){var c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("http://localhost:4001/register",s);case 3:c=t.sent,b.a.onAuthenticated(),localStorage.setItem("x-access-token",c.data.token),O([]),a={headers:{"x-access-token":localStorage.getItem("x-access-token")}},h.a.get("http://localhost:4001/api/user",a).then((function(t){y(t.data.role),"customer"===N&&e.push("/map"),"business"===N?e.push("/product"):e.push("/")})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),O(Object(f.a)(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("div",{className:"login-input-group",children:Object(c.jsxs)("div",{className:"login-input",children:[Object(c.jsx)("h1",{className:"login__text",children:"Register Here"}),p?Object(c.jsx)("ul",{children:p.map((function(e,t){return Object(c.jsx)("li",{children:e.msg},t)}))}):null,Object(c.jsxs)("form",{onSubmit:a(k),method:"POST",children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"FirstName"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",name:"firstName",className:"input form-control",ref:s({required:!0})}),r.firstName&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your firstName."})]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"LastName"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",name:"lastName",className:"input form-control",ref:s({required:!0})}),r.lastName&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your lastname."})]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"email",name:"email",className:"input form-control",ref:s({required:!0})}),r.email&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your email."})]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"password",name:"password",className:"input form-control",ref:s({required:!0})}),r.password&&"Please enter your password."]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"ConfirmPassword"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"password",name:"confirmPassword",className:"input form-control",ref:s({required:!0})}),r.confirmPassword&&"Please enter your password."]})]}),Object(c.jsx)("div",{className:"form-check",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"role",defaultChecked:!0,className:"form-check-input",ref:s(),value:"customer"}),"Are you registering as a customer"]})}),Object(c.jsx)("h1",{children:"OR"}),Object(c.jsx)("div",{className:"form-check",children:Object(c.jsxs)("label",{className:"form-check-label",children:[Object(c.jsx)("input",{type:"radio",name:"role",className:"form-check-input",ref:s(),value:"business"}),"Are you registering as a business"]})}),Object(c.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"}),Object(c.jsxs)("small",{className:"text-muted m-4",children:["Already registered ",Object(c.jsx)(x.b,{to:"/login",children:"Click Here to login"})]})]})]})}),Object(c.jsx)("div",{className:"login__image-group",children:Object(c.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},_=s(271);var S=function(){var e=Object(d.f)(),t=Object(m.a)(),s=t.register,r=t.handleSubmit,i=t.errors,l=n.a.useState([]),b=Object(j.a)(l,2),p=b[0],x=(b[1],n.a.useState("")),O=Object(j.a)(x,2),f=O[0],g=O[1],v=n.a.useState(""),N=Object(j.a)(v,2),y=N[0],k=N[1],S=function(){var e=Object(u.a)(o.a.mark((function e(t){var s,c,a,n,r,i,l,j,d,m,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(_.a)(),c=Object(_.a)(),k(""),a={headers:{"x-access-token":localStorage.getItem("x-access-token")}},n=t.productImage,r=t.price,i=t.description,l=t.lng,j=t.lat,e.next=7,I(n);case 7:return d=e.sent,e.next=10,h.a.post("http://localhost:4001/api/products",{price:r,description:i,imageId:s},a);case 10:return m=e.sent,e.next=13,h.a.post("http://localhost:4001/api/coords",{coords:{lng:l,lat:j,imageId:s,productId:c}},a);case 13:b=e.sent,d.forEach(function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("http://localhost:4001/api/upload",{file:t,imageId:s},a);case 2:c=e.sent,console.log(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Promise.all([m,b]).then((function(e){k("Saved successfully"),console.log(e)})).catch((function(e){return console.log(e.response)}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){return new Promise((function(t,s){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return s(e)}}))},I=function(){var e=Object(u.a)(o.a.mark((function e(t){var s,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],c=0;case 2:if(!(c<t.length)){e.next=10;break}return e.next=5,w(t[c]);case 5:a=e.sent,s.push(a);case 7:c++,e.next=2;break;case 10:return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var t={headers:{"x-access-token":localStorage.getItem("x-access-token")}};h.a.get("http://localhost:4001/api/user",t).then((function(t){g(t.data.role),void 0===f&&"customer"===f&&e.push("/")})).catch((function(t){t&&e.push("/register")}))}),[e,f]),Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("div",{className:"login-input-group",children:Object(c.jsxs)("div",{className:"login-input",children:[Object(c.jsx)("h1",{className:"login__text",children:"Add Product"}),y,p?Object(c.jsx)("ul",{children:p.map((function(e,t){return Object(c.jsx)("li",{children:e.msg},t)}))}):null,Object(c.jsxs)("form",{onSubmit:r(S),method:"POST",children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{className:"mb-3",children:"Product Image"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"file",name:"productImage",className:"form-control-file",ref:s({required:!0}),multiple:!0}),i.productImage&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter product image ."})]})]}),Object(c.jsxs)("div",{className:"input-field mt-3",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("textarea",{className:"form-control",rows:"5",cols:"5",ref:s({required:!0}),name:"description"})]}),i.description&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter description."})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Price"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",name:"price",className:"input form-control",ref:s({required:!0})}),i.price&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your price."})]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Longitude"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",name:"lng",className:"input form-control",ref:s({required:!0})}),i.price&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your Longitude."})]})]}),Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("label",{children:"Latitude"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"text",name:"lat",className:"input form-control",ref:s({required:!0})}),i.price&&Object(c.jsx)("div",{className:"text-danger",children:"Please enter your Latitude."})]})]}),Object(c.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save Product"}),Object(c.jsx)("div",{className:"input-field mt-3",children:Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{className:"btn",onClick:function(){localStorage.removeItem("x-access-token"),e.push("/login")},children:"Logout"})})})]})]})}),Object(c.jsx)("div",{className:"login__image-group",children:Object(c.jsx)("img",{className:"login__image",src:"/images/undraw_online_payments_luau.svg",alt:"login.png"})})]})},w=s(110),I=function(e){return Object(c.jsx)(d.b,{path:e.path,render:function(t){return b.a.getLoggedInStatus()?Object(c.jsx)(e.component,Object(w.a)({},t)):Object(c.jsx)(d.a,{to:{pathname:"/register"}})}})},P=s(71);var L=function(){return Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/login",component:O}),Object(c.jsx)(d.b,{exact:!0,path:"/",component:P.a}),Object(c.jsx)(d.b,{exact:!0,path:"/payment",component:y}),Object(c.jsx)(d.b,{exact:!0,path:"/register",component:k}),Object(c.jsx)(I,{exact:!0,path:"/product",component:S}),Object(c.jsx)(I,{exact:!0,path:"/map",component:P.a})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,272)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),C()},47:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var c=[{icon:"fas fa-plus-circle",title:"Messages",linkTo:""},{icon:"fas fa-plus-circle",title:"Payments",linkTo:"payment"},{icon:"fas fa-plus-circle",title:"Transactions",linkTo:""},{icon:"fas fa-plus-circle",title:"Explore",linkTo:""},{icon:"fas fa-plus-circle",title:"Settings",linkTo:""},{icon:"fas fa-plus-circle",title:"Help",linkTo:""}]},48:function(e,t,s){"use strict";var c=s(1),a=(s(0),s(8));s(143);t.a=function(e){return Object(c.jsxs)("div",{className:"items",children:[e.title?Object(c.jsx)("h3",{children:e.title}):Object(c.jsx)("i",{className:e.leftIcon}),Object(c.jsx)(a.b,{to:"/".concat(e.linkTo),children:Object(c.jsx)("i",{className:e.icon})})]})}},51:function(e,t,s){},71:function(e,t,s){"use strict";(function(e){var c=s(1),a=s(4),n=s(2),r=s.n(n),i=s(6),l=s(3),o=s(0),u=s.n(o),j=s(36),d=s(21),m=s(5),b=(s(145),s(111)),p=s(112),h=s(113),x=s(9),O=s.n(x),f=s(114);s(266).config({path:e+"/../.env"});t.a=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],x=Object(o.useState)(null),g=Object(l.a)(x,2),v=g[0],N=g[1],y=Object(o.useState)(!1),k=Object(l.a)(y,2),_=k[0],S=k[1],w=Object(o.useState)(""),I=Object(l.a)(w,2),P=I[0],L=I[1],C=Object(o.useState)(""),T=Object(l.a)(C,2),A=T[0],q=T[1],E=Object(o.useState)(),H=Object(l.a)(E,2),D=(H[0],H[1]),F=Object(m.f)(),M=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],e.next=3,O.a.get("/api/images");case 3:return t=e.sent,console.log(),D(t.data),e.next=8,O.a.get("/api/coords");case 8:e.sent;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){S(!_),L(""===P?"display":"")};Object(o.useEffect)((function(){var e={headers:{"x-access-token":localStorage.getItem("x-access-token")}};O.a.get("/api/user",e).then((function(e){q(e.data.role),"customer"===A&&F.push("/map"),"business"===A?F.push("/product"):F.push("/")})),M()}),[A,F]);var J=u.a.useCallback((function(e){n((function(t){return[].concat(Object(a.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]);f.Image;var z=Object(j.d)({googleMapsApiKey:"AIzaSyC9OuGq2HGdHTKk69629aDKDBIrk4mc5Rk",libraries:["places"]}),B=z.isLoaded;return z.loadError?"Error loading maps":B?(console.log(A),Object(c.jsxs)("div",{children:[_?Object(c.jsx)(b.a,{backArrow:R}):null,Object(c.jsxs)("div",{className:"map",children:[Object(c.jsx)("div",{className:"map__columns",children:Object(c.jsxs)("div",{className:"map__item",children:[A?Object(c.jsx)(p.a,{display:P,navMenuClicked:R}):null,A?null:Object(c.jsx)(h.a,{})]})}),Object(c.jsx)("div",{className:"map__columns",children:Object(c.jsxs)(j.a,{mapContainerStyle:{height:"100%",width:"100%"},zoom:8,center:{lat:6.6194,lng:3.5105},options:{disableDefaultUI:!0,zoomControl:!0},onClick:J,children:[d.a.getLoggedInStatus()?s.map((function(e){return Object(c.jsx)(j.c,{position:{lat:e.lat,lng:e.lng},onClick:function(){N(e)}},e.time.toISOString())})):null,v?Object(c.jsx)(j.b,{position:{lat:Number(v.lat),lng:Number(v.lng)},onCloseClick:function(){return N(null)},children:Object(c.jsx)("div",{children:"HI"})}):null]})}),localStorage.getItem("x-access-token")?Object(c.jsx)("button",{style:{position:"absolute",top:"0",left:"80%"},onClick:function(){localStorage.removeItem("x-access-token"),F.push("/login")},className:"btn btn-primary",children:"Logout"}):null]})]})):"Loading maps"}}).call(this,"/")}},[[269,1,2]]]);
//# sourceMappingURL=main.26468b24.chunk.js.map