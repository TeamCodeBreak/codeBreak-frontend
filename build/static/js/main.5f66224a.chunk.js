(this.webpackJsonpcodebreak=this.webpackJsonpcodebreak||[]).push([[0],{151:function(e,t,n){},246:function(e,t,n){},298:function(e,t){},300:function(e,t){},315:function(e,t){},317:function(e,t){},345:function(e,t){},347:function(e,t){},348:function(e,t){},353:function(e,t){},355:function(e,t){},361:function(e,t){},363:function(e,t){},382:function(e,t){},394:function(e,t){},397:function(e,t){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},422:function(e,t,n){},423:function(e,t,n){},424:function(e,t,n){},425:function(e,t,n){},426:function(e,t,n){},428:function(e,t,n){},430:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),s=n.n(c),i=n(28),o=n(6),d=n(18),u=n.n(d),l=n(117),j=n.n(l),b=n(44),h=n.n(b),p=n(118),x=n.n(p),O=n(1),f=r.a.createContext(),m="secretlol",g="https://code-break-server.herokuapp.com";var v=function(e){var t=e.children,n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1],d=Object(a.useState)({}),l=Object(o.a)(d,2),b=l[0],p=l[1],v=Object(a.useState)(null),w=Object(o.a)(v,2),y=w[0],k=w[1],S={isLoggedIn:c,user:b,isAuthorized:function(e){var t;return null===b||void 0===b||null===(t=b.capabilities)||void 0===t?void 0:t.includes(e)},login:function(e,t){return C.apply(this,arguments)},token:y,logout:function(){c&&D(!1,null,{})},setLogInState:D,register:function(e,t){return I.apply(this,arguments)}};function C(){return(C=Object(i.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==t&&""!==n||alert("please enter username and password"),e.prev=1,e.next=4,h.a.post("".concat(g,"/signin"),{},{auth:{username:t,password:n}});case 4:a=e.sent,P(x.a.sign(a.data.user,m)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("login error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function P(e){try{D(!0,e,x.a.verify(e,m))}catch(t){D(!1,null,{})}}function D(e,t,n){j.a.save("auth",null===n||void 0===n?void 0:n.token),p(n),s(e),k(t)}function I(){return(I=Object(i.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==t&&""!==n||alert("Please enter a username and password"),e.prev=1,e.next=4,h.a.post("".concat(g,"/signup"),{username:t,password:n,role:"admin"});case 4:a=e.sent,P(x.a.sign(a.data.user,m)),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){try{var e=new URLSearchParams(window.location.search),t=j.a.load("auth"),n=e.get("token");j.a.save("auth",n||t||null),P(n)}catch(a){console.log("useEffect Context Auth error",a)}}),[]),Object(O.jsx)(f.Provider,{value:S,children:t})},w=(n(415),n(151),n(256)),y=n(17),k=n(14),S=n(465),C=n(484),P=n(478),D=(n(416),r.a.createContext());var I=function(e){var t=e.children,n=Object(a.useState)("light"),r=Object(o.a)(n,2),c={mode:r[0],setMode:r[1]};return Object(O.jsx)(D.Provider,{value:c,children:t})},N=n(480),B=n(38);n(417);var L=function(e){var t=Object(a.useContext)(f),n=Object(a.useContext)(D);function r(){return(r=Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.logout(),e.setShowSignup(!1);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.jsx)("div",{className:n.mode,id:"logoutButtonCont",children:Object(O.jsx)(B.a,{condition:t.isLoggedIn,children:Object(O.jsx)(N.a,{id:"logoutButton",size:"small",border:"none",variant:"contained",onClick:function(){return r.apply(this,arguments)},children:"Logout"})})})},A=n.p+"static/media/codebrLogoLight.d06941b0.png",E=n.p+"static/media/codebrLogoDark.3d22edb1.png";var F=function(e){var t=Object(a.useContext)(D),n=Object(a.useContext)(f),r={dark:{color:"#99adb0"},light:{color:"#4B575D"},common:{transition:"all 1s ease"}},c=Object(k.a)(Object(k.a)({},"light"===t.mode?r.light:r.dark),r.common);return Object(O.jsx)(S.a,{sx:{flexGrow:1},"data-testid":"header",children:Object(O.jsxs)("div",{style:c,className:"header1",position:"static",id:"navBar",children:["light"===t.mode?Object(O.jsx)("img",{src:E,alt:"logo",id:"title"}):Object(O.jsx)("img",{src:A,alt:"logo",id:"title"}),Object(O.jsxs)("div",{id:"login-switch-container",children:[Object(O.jsx)(B.a,{condition:!n.isLoggedIn,children:Object(O.jsx)(C.a,{className:"loginHome",variant:"h5",component:"div",sx:{flexGrow:1},id:"title",onClick:function(){return e.setEnter(!0)},children:"login"})}),Object(O.jsx)(B.a,{condition:n.isLoggedIn,children:Object(O.jsx)(L,{showSignup:e.showSignup,setShowSignup:e.setShowSignup})}),Object(O.jsx)(P.a,{id:"switch",color:"default",className:"switch-theme",onClick:function(){return t.setMode("light"===t.mode?"dark":"light")}})]})]})})};n(422);var _=function(){return Object(O.jsx)(S.a,{sx:{width:500},id:"footerNav","data-testid":"footer"})},z=n(4),M=n(487),T=n(481),U=n(477),H=n(486),G=n(485),R=n(111),q=n.n(R),W=n(110),J=n.n(W),K=n(109),V=n.n(K),Y=(n(423),n(483));var Q=function(e){var t=Object(a.useContext)(f),n=a.useState({username:"",password:"",showPassword:!1}),r=Object(o.a)(n,2),c=r[0],s=r[1],d=function(e){return function(t){s(Object(k.a)(Object(k.a)({},c),{},Object(z.a)({},e,t.target.value)))}};function l(){return(l=Object(i.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.register(c.username,c.password);case 3:s("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{condition:!t.isLoggedIn&&e.showSignup,children:Object(O.jsxs)(Y.a,{id:"formContainer",children:[Object(O.jsx)("h2",{children:"Signup"}),Object(O.jsxs)(G.a,{onChange:d,children:[Object(O.jsx)(S.a,{sx:{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"space-evenly"},children:Object(O.jsxs)("div",{children:[Object(O.jsx)(S.a,{sx:{display:"flex",alignItems:"flex-end"},children:Object(O.jsxs)(G.a,{sx:{m:1,width:"25ch"},variant:"outlined",children:[Object(O.jsx)(U.a,{htmlFor:"outlined-adornment-username",children:"Username"}),Object(O.jsx)(T.a,{id:"outlinedInputUsername",required:!0,type:c?"text":"username",defaultValue:"",value:c.username,onChange:d("username"),endAdornment:Object(O.jsx)(H.a,{position:"end",children:Object(O.jsx)(V.a,{sx:{color:"action.active",mr:-.5,my:0}})}),label:"Username"})]})}),Object(O.jsxs)(G.a,{sx:{m:1,width:"25ch"},variant:"outlined",children:[Object(O.jsx)(U.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(O.jsx)(T.a,{id:"outlinedInputPassword",type:c.showPassword?"text":"password",value:c.password,onChange:d("password"),endAdornment:Object(O.jsx)(H.a,{position:"end",children:Object(O.jsx)(M.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(k.a)(Object(k.a)({},c),{},{showPassword:!c.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:c.showPassword?Object(O.jsx)(J.a,{}):Object(O.jsx)(q.a,{})})}),label:"Password"})]})]})}),Object(O.jsx)(S.a,{id:"buttonCont",children:Object(O.jsx)(N.a,{id:"loginButton",variant:"contained",onClick:function(e){return l.apply(this,arguments)},children:"Signup"})})]})]})})})},X=n(489);n(424);var Z=function(e){var t=Object(a.useContext)(f),n=Object(a.useContext)(D),r=a.useState({username:"",password:"",showPassword:!1}),c=Object(o.a)(r,2),s=c[0],d=c[1],l=function(e){e.preventDefault(),d((function(t){return Object(k.a)(Object(k.a)({},t),{},Object(z.a)({},e.target.name,e.target.value))}))};function j(){return(j=Object(i.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t.login(s.username,s.password);case 3:d("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{condition:!t.isLoggedIn&&!e.showSignup,children:Object(O.jsx)("div",{className:n.mode,children:Object(O.jsxs)(Y.a,{id:"formContainer",children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsxs)(G.a,{children:[Object(O.jsx)(S.a,{sx:{display:"flex",flexWrap:"nowrap"},children:Object(O.jsxs)("div",{children:[Object(O.jsx)(S.a,{sx:{display:"flex",alignItems:"flex-end"},children:Object(O.jsxs)(G.a,{id:"usernameLogin",sx:{m:1,width:"25ch"},variant:"outlined",children:[Object(O.jsx)(U.a,{htmlFor:"outlined-adornment-username",children:"Username"}),Object(O.jsx)(T.a,{inputProps:{"data-testid":"username-field"},id:"outlined-adornment-username",type:s?"text":"username",value:s.username,name:"username",onChange:l,endAdornment:Object(O.jsx)(H.a,{position:"end",children:Object(O.jsx)(V.a,{sx:{color:"action.active",mr:-.5,my:0}})}),label:"Password"})]})}),Object(O.jsxs)(G.a,{sx:{m:1,width:"25ch"},variant:"outlined",children:[Object(O.jsx)(U.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(O.jsx)(T.a,{inputProps:{"data-testid":"password-field"},id:"outlined-adornment-password",type:s.showPassword?"text":"password",value:s.password,name:"password",onChange:l,endAdornment:Object(O.jsx)(H.a,{position:"end",children:Object(O.jsx)(M.a,{"aria-label":"toggle password visibility",onClick:function(){d(Object(k.a)(Object(k.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:s.showPassword?Object(O.jsx)(J.a,{}):Object(O.jsx)(q.a,{})})}),label:"Password"})]})]})}),Object(O.jsxs)(S.a,{id:"buttonCont",children:[Object(O.jsx)(X.a,{id:"createAccount",onClick:function(){e.setShowSignup(!0)},children:"create an account"}),Object(O.jsx)(N.a,{id:"loginButton","data-testid":"login",variant:"contained",onClick:function(e){return j.apply(this,arguments)},children:"Login"})]})]})]})})})})},$=n(255),ee=n(473),te=n(257),ne=n(253),ae=n(166),re=n.p+"static/media/rubberDucky.506b90a6.png";n(425);var ce=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(ee.a,{trigger:["hover","hover"],placement:"top",id:"overlayTrigger",overlay:Object(O.jsxs)(te.a,{id:"popoverId",children:[Object(O.jsxs)(ne.a,{as:"h3",id:"popoverHeader",children:["Hey Dev!",Object(O.jsx)("br",{}),"Spencer here.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"You can tell me anything!"]}),Object(O.jsxs)(ae.a,{id:"popoverBody",children:[Object(O.jsx)("p",{children:"As your deskmate, I am here to entertain all of your thoughts, ideas and curiosities."}),Object(O.jsx)("p",{children:"My job is to lend you a listening ear as you build, debug, and reconstruct."})]})]}),children:Object(O.jsx)($.a,{src:re,id:"rubberDucky",class:"ducky"})},"overlayTrig")})},se=n(471),ie=n(472),oe=n(482),de=n(476),ue=n(469),le=n.p+"static/media/danceGif.99c70c53.gif",je={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var be=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(de.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:e.open,onClose:e.handleClose,closeAfterTransition:!0,BackdropComponent:oe.a,BackdropProps:{timeout:500},children:Object(O.jsx)(ue.a,{in:e.open,children:Object(O.jsxs)(S.a,{sx:je,children:[Object(O.jsxs)(C.a,{id:"transition-modal-title",variant:"h6",component:"h2",children:["Great job dev!",Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:le,alt:"dancing gif"})]}),Object(O.jsx)(C.a,{id:"transition-modal-description",sx:{mt:2},children:"Time to take a break. Go for it!"})]})})})})};n(426);function he(){var e=Object(a.useContext)(D),t=Object(a.useState)("00"),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)("00"),i=Object(o.a)(s,2),d=i[0],u=i[1],l=Object(a.useState)(!1),j=Object(o.a)(l,2),b=j[0],h=j[1],p=Object(a.useState)(0),x=Object(o.a)(p,2),f=x[0],m=x[1];function g(){h(!1),m(0),c("00"),u("00")}Object(a.useEffect)((function(){var e;return b&&(e=setInterval((function(){var e=f%60,t=Math.floor(f/60),n=1===String(e).length?"0".concat(e):e,a=1===String(t).length?"0".concat(t):t;c(n),u(a),m((function(e){return e<=0&&(S(),g()),e-1}))}),1e3)),function(){return clearInterval(e)}}),[b,f]);var v=a.useState(!1),w=Object(o.a)(v,2),y=w[0],k=w[1],S=function(){return k(!0)};return Object(O.jsx)("div",{className:e.mode,children:Object(O.jsx)("div",{id:"breakReminder","data-testid":"breakReminder",children:Object(O.jsxs)(se.a,{className:"time",children:[Object(O.jsx)("h2",{children:"Let's break in..."}),Object(O.jsxs)(G.a,{id:"formControl",onSubmit:function(e){e.preventDefault()},children:[Object(O.jsx)(U.a,{id:"formInput",children:"Take your next break in..."}),Object(O.jsx)(T.a,{"data-testid":"breakInput",id:"outlinedInput",type:"number",min:"0",placeholder:"Minutes",name:"breaktime",onChange:function(e){var t=60*e.target.value;m(t)}}),Object(O.jsxs)("div",{id:"timerDiv","data-testid":"timerDisplay",children:[Object(O.jsx)("span",{className:"minute",children:d}),Object(O.jsx)("span",{children:":"}),Object(O.jsx)("span",{className:"second",children:r})]}),Object(O.jsxs)(ie.a,{spacing:2,direction:"row",children:[Object(O.jsxs)(B.a,{condition:f>0,children:[" ",Object(O.jsx)(N.a,{variant:"contained","data-testid":"start/pauseButton",id:"startTimer",onClick:function(){return h(!b)},children:b?"Pause":"Start"})]}),Object(O.jsx)(B.a,{condition:f>0,children:Object(O.jsx)(N.a,{"data-testid":"resetButton",variant:"contained",id:"resetTimer",onClick:g,children:"Reset"})})]})]}),Object(O.jsx)(be,{open:y,handleOpen:S,handleClose:function(){return k(!1)}})]})})})}n(246);var pe=n(490);function xe(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(O.jsxs)(pe.a,{elevation:3,className:"note","data-testid":e.note.notes,children:[Object(O.jsxs)("div",{className:"note__text",children:[e.note.notes,Object(O.jsx)("button",{className:"note__delete",onClick:e.handleDelete,id:e.note.id,"data-testid":"delete-button",children:"x"})]}),Object(O.jsx)("input",{placeholder:"update",className:"note_editbox",type:"text",value:r,id:e.note.id,onKeyPress:function(t){"Enter"===t.key&&(e.handleUpdateNote(t),c(""))},onChange:function(e){return c(e.target.value)},"data-testid":"update"})]},e.note.id)}var Oe=n(474),fe="https://code-break-server.herokuapp.com";function me(){var e=Object(a.useContext)(f),t=Object(a.useContext)(D),n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],s=r[1],d=Object(a.useState)(""),l=Object(o.a)(d,2),j=l[0],b=l[1],p=Object(a.useState)(""),x=Object(o.a)(p,2),m=x[0],g=x[1],v=Object(a.useState)(!0),w=Object(o.a)(v,2),y=w[0],k=w[1];function S(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(u.a.mark((function t(){var n,a,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:"Bearer ".concat(e.token)}},t.next=3,h.a.get("".concat(fe,"/notes"),n);case 3:a=t.sent,r=a.data,c=r.sort((function(e,t){return e.id-t.id})),console.log("sort",c),s(r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=Object(i.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==n.key){t.next=8;break}return n.preventDefault(),a={headers:{Authorization:"Bearer ".concat(e.token)}},r={notes:j},t.next=6,h.a.post("".concat(fe,"/notes"),r,a);case 6:k(!y),b("");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(u.a.mark((function t(n){var a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={headers:{Authorization:"Bearer ".concat(e.token)}},r={notes:n.target.value},t.next=5,h.a.put("".concat(fe,"/notes/").concat(n.target.id),r,a);case 5:k(!y),g("");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(e){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{Authorization:"Bearer ".concat(e.token)}},t.next=3,h.a.delete("".concat(fe,"/notes/").concat(n.target.id),a);case 3:k(!y);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){S()}),[e.token]),Object(a.useEffect)((function(){e.token&&S()}),[y]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:t.mode,children:Object(O.jsxs)("div",{id:"notesCont",children:[Object(O.jsxs)("div",{id:"notePadTitle",children:[Object(O.jsx)("h2",{children:"Write it out."}),Object(O.jsx)(Oe.a,{label:"Enter your thoughts!",variant:"outlined",className:"input__notes",type:"text",value:j,onKeyPress:function(e){return P.apply(this,arguments)},onChange:function(e){return b(e.target.value)},"data-testid":"input"})]}),Object(O.jsx)("div",{className:"notes__parent","data-testid":"notes",children:c[0]&&c.map((function(e){return Object(O.jsx)(xe,{"data-testid":e,note:e,handleDelete:B,handleUpdateNote:I,updateValue:m})}))})]})})})}var ge=n(491),ve=n(492),we=n(493),ye="https://code-break-server.herokuapp.com";function ke(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(o.a)(c,2),d=s[0],l=s[1];function j(){return(j=Object(i.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={postalcode:n},e.next=4,h.a.post("".concat(ye,"/food"),a);case 4:r=e.sent,c=r.data.data.filter((function(e){return!e.ad_position})),l(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(O.jsxs)("div",{"data-testid":"data",children:[Object(O.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(O.jsx)(Oe.a,{onChange:function(e){return r(e.target.value)},name:"zipcode",required:!0,id:"outlined-required",label:"zipcode"}),Object(O.jsx)(N.a,{variant:"contained",style:{width:"auto",height:"3.4rem",backgroundColor:"lightBlue"},type:"submit",children:"Find"})]}),d&&d.map((function(e,t){return Object(O.jsx)("div",{style:{margin:"3rem",position:"relative",zIndex:"100"},children:Object(O.jsx)(ge.a,{style:{width:350,background:"lightBlue",color:"white"},children:Object(O.jsx)(ve.a,{children:Object(O.jsxs)(we.a,{children:[Object(O.jsx)(C.a,{gutterBottom:!0,variant:"h5","data-testid":e.name,component:"div",children:e.name}),Object(O.jsx)(C.a,{variant:"body2","data-testid":e.address,color:"text.secondary",children:e.address})]})})})},t)}))]})})}var Se=n.p+"static/media/bannerDark.3acfecd2.png";n(428);var Ce=function(e){var t=Object(a.useContext)(D),n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1];return Object(O.jsx)("div",{className:t.mode,children:Object(O.jsxs)("div",{id:"homeCont",children:[Object(O.jsx)("img",{id:"banner",src:Se,alt:"banner"}),Object(O.jsxs)("div",{className:"home",children:[c?Object(O.jsx)(ke,{}):Object(O.jsx)(N.a,{id:"hungryButton",variant:"contained",onClick:function(){return s(!0)},children:"Hungry?"}),Object(O.jsx)(he,{})]}),Object(O.jsx)("div",{id:"notesCont",children:Object(O.jsx)(me,{})}),Object(O.jsx)(ce,{})]})})},Pe=n(488);function De(){return Object(O.jsxs)(ie.a,{sx:{color:"grey.500"},spacing:2,direction:"row",children:[Object(O.jsx)(Pe.a,{color:"secondary"}),Object(O.jsx)(Pe.a,{color:"success"}),Object(O.jsx)(Pe.a,{color:"inherit"})]})}n(429);var Ie=n.p+"static/media/codebrLogoLightHome.a55f33c5.png",Ne=n.p+"static/media/codebrLogoDarkHome.1f3b2050.png";var Be=function(){var e=Object(a.useContext)(f),t=Object(a.useContext)(D),n=r.a.useState(!1),c=Object(o.a)(n,2),s=c[0],i=c[1],d=r.a.useState(!1),u=Object(o.a)(d,2),l=u[0],j=u[1];return Object(O.jsx)("div",{className:t.mode,children:Object(O.jsxs)(w.a,{children:[Object(O.jsx)(F,{showSignup:s,setShowSignup:i,setEnter:j}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{exact:!0,path:"/",element:e.isLoggedIn?Object(O.jsx)(Ce,{id:"home",showSignup:s,setShowSignup:i}):l?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Z,{showSignup:s,setShowSignup:i}),Object(O.jsx)(Q,{showSignup:s})]}):Object(O.jsxs)(Y.a,{id:"loginPage",children:["light"===t.mode?Object(O.jsx)("img",{src:Ne,alt:"logo"}):Object(O.jsx)("img",{src:Ie,alt:"logo"}),Object(O.jsx)(N.a,{variant:"contained",id:"homeButton",onClick:function(){return j(!0)},"data-testid":"enter",children:"enter"})]})}),Object(O.jsx)(y.a,{path:"/aboutus",element:Object(O.jsx)(De,{})})]}),Object(O.jsx)(_,{})]})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{children:Object(O.jsx)(I,{children:Object(O.jsx)(Be,{})})})}),document.getElementById("root"))}},[[430,1,2]]]);
//# sourceMappingURL=main.5f66224a.chunk.js.map