(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,a,t){e.exports=t(80)},65:function(e,a,t){},68:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),s=(t(65),t(11)),o=t(7),i=t(13),m=t(12),d=t(14),u=t(41),p=t(46),h=t.n(p),E=(t(68),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description),t=(this.props.data.address.city,this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Foodin'")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"FAQs")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null,a,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelvdatae columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2019 dexterUs"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=t(34),b=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,c=this.props.data.address.state,s=this.props.data.address.zip,o=this.props.data.phone,i=this.props.data.email,m=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"dexterUs",style:{height:"300%",width:"300%"}})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Us"),l.a.createElement(g.a,{variant:"h5",align:"left",color:"textSecondary",paragraph:!0},t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement(g.a,{variant:"h5",align:"left",color:"textSecondary",paragraph:!0},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r," ",c,", ",s),l.a.createElement("br",null),l.a.createElement("span",null,o),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:m,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Brochure")))))))}}]),a}(n.Component),v=t(118),N=t(126),w=t(120),y=t(119),j=t(115),k=t(117),O=t(82),x=t(116),C=Object(O.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});function D(){var e=C();return l.a.createElement("section",{id:"resume"},l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,null),l.a.createElement("main",null,l.a.createElement("div",{className:e.heroContent},l.a.createElement(x.a,{maxWidth:"sm"},l.a.createElement(g.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Foodin'"),l.a.createElement(g.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"A specialized cooking system which can sustain all the benefits of conventionally cooked home food with less effort, time and hassles."),l.a.createElement("div",{className:e.heroButtons},l.a.createElement(k.a,{container:!0,spacing:2,justify:"center"},l.a.createElement(k.a,{item:!0},l.a.createElement(v.a,{variant:"contained",color:"primary"},"Main call to action")),l.a.createElement(k.a,{item:!0},l.a.createElement(v.a,{variant:"outlined",color:"primary"},"Secondary action")))))),l.a.createElement(x.a,{className:e.cardGrid},l.a.createElement(k.a,{container:!0,spacing:1},l.a.createElement(k.a,{container:!0,item:!0,xs:12,spacing:3},l.a.createElement(k.a,{item:!0,xs:4},l.a.createElement(N.a,{className:e.card},l.a.createElement(y.a,{className:e.cardMedia,image:"images/chooseRecipe.jpg",title:"Choose Recipe"}),l.a.createElement(w.a,{className:e.cardContent},l.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Choose Recipe"),l.a.createElement(g.a,null,"Use our app to choose which recipe you would like to follow.")))),l.a.createElement(k.a,{item:!0,xs:4},l.a.createElement(N.a,{className:e.card},l.a.createElement(y.a,{className:e.cardMedia,image:"images/ingredients.jpg",title:"Load Ingredients"}),l.a.createElement(w.a,{className:e.cardContent},l.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Load Ingredients"),l.a.createElement(g.a,null,"Load ingredients shown on the app into their respective containers.")))),l.a.createElement(k.a,{item:!0,xs:4},l.a.createElement(N.a,{className:e.card},l.a.createElement(y.a,{className:e.cardMedia,image:"images/startButton.jpg",title:"Press Start"}),l.a.createElement(w.a,{className:e.cardContent},l.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Press Start"),l.a.createElement(g.a,null,"Foodin' will start preparing your dish as soon as you press the start button!"))))))))))}var S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,c=this.props.data.phone,s=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},s))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange}),"/>"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange}),"/>"),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement(g.a,{variant:"h5",align:"left",color:"white",paragraph:!0},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t,", ",n," ",r,l.a.createElement("br",null),l.a.createElement("span",null,c))))))}}]),a}(n.Component),B=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))});return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),F=t(122),M=t(121),A=t(123),T=t(124),z=t(125),L=t(127),R=t(54),I=t.n(R),P=t(55),U=t.n(P),W=t(39),q=t.n(W),G=t(38),H=t.n(G),V=t(40),J=t.n(V),Q=Object(O.a)(function(e){return{root:{width:"100%",maxWidth:1e3,backgroundColor:e.palette.background.default},nested:{paddingLeft:e.spacing(4)}}});function Y(){var e=Q(),a={inbox:!0,drafts:!0};return l.a.createElement("section",{id:"portfolio"},l.a.createElement(M.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:l.a.createElement(F.a,{component:"div",id:"nested-list-subheader"},"Nested List Items"),className:e.root},l.a.createElement(A.a,{button:!0,onClick:function(){a.inbox=!a.inbox}},l.a.createElement(T.a,null,l.a.createElement(I.a,null)),l.a.createElement(z.a,{primary:"Inbox"}),a.inbox?l.a.createElement(H.a,null):l.a.createElement(q.a,null)),l.a.createElement(L.a,{in:a.inbox,timeout:"auto",unmountOnExit:!0},l.a.createElement(M.a,{component:"div",disablePadding:!0},l.a.createElement(A.a,{button:!0,className:e.nested},l.a.createElement(T.a,null,l.a.createElement(J.a,null)),l.a.createElement(z.a,{primary:"Starred"})))),l.a.createElement(A.a,{button:!0,onClick:function(){a.drafts=!a.drafts}},l.a.createElement(T.a,null,l.a.createElement(U.a,null)),l.a.createElement(z.a,{primary:"Drafts"}),a.drafts?l.a.createElement(H.a,null):l.a.createElement(q.a,null)),l.a.createElement(L.a,{in:a.drafts,timeout:"auto",unmountOnExit:!0},l.a.createElement(M.a,{component:"div",disablePadding:!0},l.a.createElement(A.a,{button:!0,className:e.nested},l.a.createElement(T.a,null,l.a.createElement(J.a,null)),l.a.createElement(z.a,{primary:"Starred"}))))))}var $=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(D,{data:this.state.resumeData.resume}),l.a.createElement(Y,{data:this.state.resumeData.portfolio}),l.a.createElement(B,{data:this.state.resumeData.testimonials}),l.a.createElement(S,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement($,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/homepage",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/homepage","/service-worker.js");_?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):K(e)})}}()}},[[60,1,2]]]);
//# sourceMappingURL=main.27e8bedb.chunk.js.map