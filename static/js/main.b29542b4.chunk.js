(this["webpackJsonpfront-end-assignment"]=this["webpackJsonpfront-end-assignment"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(1),r=n.n(s),c=n(33),i=n.n(c),o=(n(41),n(15)),l=n(16),u=n(18),d=n(17),h=(n(42),n(43),n(14)),b=n(5),j=n(13),m=n.n(j),p=n(26),g=n(19),f=n(23);n(63),n(46);f.a.initializeApp({apiKey:"AIzaSyA98gmnn7pfTKXLph44xlrAbqVwipCnvaU",authDomain:"front-end-assignment.firebaseapp.com",projectId:"front-end-assignment",storageBucket:"front-end-assignment.appspot.com",messagingSenderId:"270786003076",appId:"1:270786003076:web:53f49b4bf412bfd4b502d1",measurementId:"G-BCGTV7175T"});var O=function(){var e=Object(g.a)(m.a.mark((function e(t,n){var a,s,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=v.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return t.displayName,s=t.email,r=new Date,e.prev=9,e.next=12,a.set(Object(p.a)({email:s,createdAt:r},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),x=f.a.auth(),v=f.a.firestore(),N=new f.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});f.a;var C=Object(b.f)((function(e){var t=e.history;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("span",{className:"header__brand",children:Object(a.jsx)(h.b,{to:"/assignmnet/",children:Object(a.jsx)("h2",{children:"ASSIGNMENT"})})}),Object(a.jsx)("span",{children:x.currentUser?Object(a.jsx)("span",{className:"link-button header__login-button",onClick:function(){x.signOut().then((function(){t.push("/")})).catch((function(e){console.log("An error occured",e.message)}))},children:"Logout"}):Object(a.jsx)(h.b,{to:"/signin",className:"link-button header__login-button",children:"Login"})})]})})),y=(n(52),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={firstName:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.onAuthStateChanged(function(){var t=Object(g.a)(m.a.mark((function t(n){var a,s,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}return a=v.doc("users/".concat(n.uid)),t.next=4,a.get();case 4:return s=t.sent,t.next=7,s.data();case 7:r=t.sent,e.setState({firstName:r.firstName}),console.log(s.data());case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:x.currentUser?Object(a.jsx)("div",{children:"Welcome ".concat(this.state.firstName)}):Object(a.jsx)("div",{children:"Please sign in to continue"})})}}]),n}(r.a.Component)),w=n(22),k=(n(53),n(35)),S=(n(54),function(e){var t=e.label,n=e.handleChange,s=Object(k.a)(e,["label","handleChange"]);return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",Object(p.a)({className:"form-input",onChange:n},s)),t?Object(a.jsx)("label",{className:"".concat(s.value.length?"shrink":""," form-input-label"),children:t}):null]})}),A=n(27),_=n.n(A),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,s=t.password;a.setState({loading:!0}),x.signInWithEmailAndPassword(n,s).then((function(e){e&&a.props.history.push("/"),a.setState({loading:!1})})).catch((function(e){console.log("An error occured",e.message),a.setState({loading:!1})}))},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(w.a)({},n,s))},a.state={email:"",password:"",loading:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"signin__container",children:[Object(a.jsx)("h3",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(S,{label:"Email",type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(a.jsx)(S,{label:"Password",type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(a.jsx)("button",{type:"submit",className:"login-button",children:"Login"})]}),Object(a.jsxs)("p",{className:"account-exist",children:["Don't have an account? ",Object(a.jsx)(h.b,{to:"/register",className:"login-sign-link",children:"Register"})]}),Object(a.jsx)(_.a,{className:"loader",color:"#2d2d2d",loading:this.state.loading,css:" display: inline-block; position: absolute; top: 30%; left: 50%; transform: translateX(-80px);",size:100})]})}}]),n}(r.a.Component),L=Object(b.f)(I),P=(n(60),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){var t=a.state,n=t.firstName,s=t.lastName,r=t.email,c=t.password;e.preventDefault(),a.setState({loading:!0}),x.createUserWithEmailAndPassword(r,c).then(function(){var e=Object(g.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("First Info:",t),e.next=3,O(t.user,{firstName:n,lastName:s});case 3:e.sent&&(a.props.history.push("/"),a.setState({loading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),a.setState({loading:!1})}))},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(w.a)({},n,s))},a.state={firstName:"",lastName:"",email:"",password:"",loading:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"signup__container",children:[Object(a.jsx)("h3",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)(S,{label:"First Name",name:"firstName",type:"text",value:this.state.firstName,handleChange:this.handleChange,required:!0}),Object(a.jsx)(S,{label:"Last Name",name:"lastName",type:"text",value:this.state.lastName,handleChange:this.handleChange,required:!0}),Object(a.jsx)(S,{label:"Email",type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(a.jsx)(S,{label:"Password",type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(a.jsx)("button",{type:"submit",className:"register-button",children:"Register"})]}),Object(a.jsxs)("p",{className:"account-exist",children:["Already have an account? ",Object(a.jsx)(h.b,{to:"/signin",className:"login-sign-link",children:"Login"})]}),Object(a.jsx)(_.a,{className:"loader",color:"#2d2d2d",loading:this.state.loading,css:" display: inline-block; position: absolute; top: 30%; left: 50%; transform: translateX(-80px);",size:150})]})}}]),n}(r.a.Component)),q=Object(b.f)(P),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(C,{user:x.currentUser}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:y}),Object(a.jsx)(b.a,{exact:!0,path:"/signin",component:L}),Object(a.jsx)(b.a,{exact:!0,path:"/register",component:q})]})]})}}]),n}(r.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h.a,{children:Object(a.jsx)(D,{})})}),document.getElementById("root")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.b29542b4.chunk.js.map