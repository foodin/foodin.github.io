(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),c=(t(76),t(14)),o=t(7),i=t(16),m=t(15),u=t(17),d=t(34),h=t(54),p=t.n(h),E=(t(79),function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description),t=(this.props.data.address.city,this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Foodin'")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"FAQs")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null,a,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),g=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelvdatae columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2019 dexterUs"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f=t(136),b=t(108),v=t(137),N=t(139),y=t(138),w=t(140),j=Object(b.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),x=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=j(),a=l.a.createElement("span",{className:e.bullet},"\u2022");if(this.props.data)var t=this.props.data.name,n="images/"+this.props.data.image,r=this.props.data.bio,s=this.props.data.address.street,c=this.props.data.address.city,o=this.props.data.address.state,i=this.props.data.address.zip,m=this.props.data.phone,u=this.props.data.email,d=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:n,alt:"dexterUs",style:{height:"300%",width:"300%"}})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Us"),l.a.createElement(f.a,{variant:"h5",align:"left",color:"textSecondary",paragraph:!0},r),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement(v.a,{className:e.card},l.a.createElement(y.a,null,l.a.createElement(f.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Word of the Day"),l.a.createElement(f.a,{variant:"h5",component:"h2"},"be",a,"nev",a,"o",a,"lent"),l.a.createElement(f.a,{className:e.pos,color:"textSecondary"},"adjective"),l.a.createElement(f.a,{variant:"body2",component:"p"},"well meaning and kindly.",l.a.createElement("br",null),'"a benevolent smile"')),l.a.createElement(N.a,null,l.a.createElement(w.a,{size:"small"},"Learn More"))),l.a.createElement(f.a,{variant:"h5",align:"left",color:"textSecondary",paragraph:!0},l.a.createElement("span",null,t),l.a.createElement("br",null),l.a.createElement("span",null,s,l.a.createElement("br",null),c," ",o,", ",i),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"276, Phase 1, Surendra Nagar",l.a.createElement("br",null),"Jansath road, Muzaffarnagar- 251001"),l.a.createElement("br",null),l.a.createElement("span",null,m),l.a.createElement("br",null),l.a.createElement("span",null,u))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:d,className:"button",download:"Foodin"},l.a.createElement("i",{className:"fa fa-download"}),"Download Brochure")))))))}}]),a}(n.Component),k=t(144),O=t(141),S=t(143),C=t(142),F=Object(b.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});function D(){var e=F();return l.a.createElement("section",{id:"resume"},l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null),l.a.createElement("main",null,l.a.createElement("div",{className:e.heroContent},l.a.createElement(C.a,{maxWidth:"sm"},l.a.createElement(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Foodin'"),l.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"A specialized cooking system which can sustain all the benefits of conventionally cooked home food with less effort, time and hassles."),l.a.createElement("div",{className:e.heroButtons},l.a.createElement(S.a,{container:!0,spacing:2,justify:"center"},l.a.createElement(S.a,{item:!0},l.a.createElement(w.a,{variant:"contained",color:"primary"},l.a.createElement("a",{href:"infographicFoodin.pdf",download:"Foodin"},"Download Brochure"))),l.a.createElement(S.a,{item:!0},l.a.createElement(w.a,{variant:"outlined",color:"primary"},l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"FAQs"))))))),l.a.createElement(C.a,{className:e.cardGrid},l.a.createElement(S.a,{container:!0,spacing:1},l.a.createElement(S.a,{container:!0,item:!0,xs:12,spacing:3},l.a.createElement(S.a,{item:!0,xs:4},l.a.createElement(v.a,{className:e.card},l.a.createElement(k.a,{className:e.cardMedia,image:"images/chooseRecipe.jpg",title:"Choose Recipe"}),l.a.createElement(y.a,{className:e.cardContent},l.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Choose Recipe"),l.a.createElement(f.a,null,"Use our app to choose which recipe you would like to follow.")))),l.a.createElement(S.a,{item:!0,xs:4},l.a.createElement(v.a,{className:e.card},l.a.createElement(k.a,{className:e.cardMedia,image:"images/ingredients.jpg",title:"Load Ingredients"}),l.a.createElement(y.a,{className:e.cardContent},l.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Load Ingredients"),l.a.createElement(f.a,null,"Load ingredients shown on the app into their respective containers.")))),l.a.createElement(S.a,{item:!0,xs:4},l.a.createElement(v.a,{className:e.card},l.a.createElement(k.a,{className:e.cardMedia,image:"images/startButton.jpg",title:"Press Start"}),l.a.createElement(y.a,{className:e.cardContent},l.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Press Start"),l.a.createElement(f.a,null,"Foodin' will start preparing your dish as soon as you press the start button!"))))))))))}var B=t(62),M=t(63),R=t.n(M),A="entry.839337160",I="entry.979315351",T="https://cors-anywhere.herokuapp.com/",z="https://docs.google.com/forms/u/5/d/e/1FAIpQLSd30RQDISVmDA5pzooQ26HzX6wfyylhXKLZrkJtR2u06EkAlA/formResponse",P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(B.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.setState({sendingMessage:!0}),t.sendMessage()},t.handleFormToggle=function(){t.setState(function(e){return{showForm:!e.showForm}})},t.handleReturnButton=function(){t.setState({showForm:!1,messageSent:!1,messageError:!1})},t.sendMessage=function(){var e=new FormData;e.append(A,t.state.message),e.append(I,t.state.email),R.a.post(T+z,e).then(function(){t.setState({messageSent:!0,sendingMessage:!1,message:"",email:""})}).catch(function(){t.setState({messageError:!0,sendingMessage:!1})})},t.returnButton=function(){return l.a.createElement("button",{id:"return-button",style:{margin:"auto",display:"block"},className:"btn btn-default btn-xs",onClick:t.handleReturnButton},"Return")},t.state={message:"",email:"",showForm:!1,sendingMessage:!1,messageSent:!1,messageError:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.state.sendingMessage?l.a.createElement("div",null,l.a.createElement("h4",{align:"center"},"Sending...")):this.state.messageSent?l.a.createElement("section",{id:"contact"},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"success-message"},l.a.createElement("h4",{align:"center"},"Sent! We will respond asap")),this.returnButton())):this.state.messageError?l.a.createElement("section",{id:"contact"},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"error-message"},l.a.createElement("h4",{align:"center"},"Sorry, your message was not sent. Contact us at: foodin.dexterUs@gmail.com")),this.returnButton())):!1===this.state.showForm?l.a.createElement("section",{id:"contact"},l.a.createElement("button",{id:"contact-button",className:"btn btn-sm",style:{margin:"auto",display:"block"},onClick:this.handleFormToggle},"Contact")):l.a.createElement("section",{id:"contact"},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label"},"Email:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control",value:this.state.email,onChange:this.handleChange,required:!0}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"message",className:"col-sm-2 col-form-label"},"Message:"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("textarea",{id:"message",name:"message",className:"form-control",required:!0,value:this.state.message,onChange:this.handleChange,rows:"6"}))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",id:"cancel-button",className:"btn btn-default btn-sm btn-action",style:{margin:"auto",display:"block"},onClick:this.handleFormToggle},"Cancel"),l.a.createElement("button",{type:"submit",style:{margin:"auto",display:"block"},className:"btn btn-sm btn-default btn-action"},"Submit"))))))}}]),a}(n.Component),W=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))});return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),L=t(146),Q=t(147),U=t(145),H=t(25),J=t.n(H),q=Object(b.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},expandedPanel:{backgroundColor:e.palette.primary.main}}});function G(){var e=q();return l.a.createElement("section",{id:"portfolio"},l.a.createElement(f.a,{component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0},"FAQs"),l.a.createElement("div",{className:e.root},l.a.createElement(L.a,null,l.a.createElement(Q.a,{expandIcon:l.a.createElement(J.a,null),"aria-controls":"panel1a-content",id:"panel1a-header",classes:{expanded:e.expandedPanel}},l.a.createElement(f.a,{variant:"h4"},"What all dishes can the product cook?")),l.a.createElement(U.a,null,l.a.createElement(f.a,{variant:"h5"},"Foodin' can cook almost all types of curries."))),l.a.createElement(L.a,null,l.a.createElement(Q.a,{expandIcon:l.a.createElement(J.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},l.a.createElement(f.a,{variant:"h4"},"Is the product food safe?")),l.a.createElement(U.a,null,l.a.createElement(f.a,{variant:"h5"},"All the materials used in foodin' are food safe."))),l.a.createElement(L.a,null,l.a.createElement(Q.a,{expandIcon:l.a.createElement(J.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},l.a.createElement(f.a,{variant:"h4"},"Where can I buy the product?")),l.a.createElement(U.a,null,l.a.createElement(f.a,{variant:"h5"},"You can book the product on our website or via email. You can also reach out to us at our office or call us."))),l.a.createElement(L.a,null,l.a.createElement(Q.a,{expandIcon:l.a.createElement(J.a,null),"aria-controls":"panel2a-content",id:"panel2a-header",classes:{expanded:e.expandedPanel}},l.a.createElement(f.a,{variant:"h4"},"How big is foodin'?")),l.a.createElement(U.a,null,l.a.createElement(f.a,{variant:"h5"},"It is the size of your microwave and can easily fit on the kitchen counter.")))))}var X=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(x,{data:this.state.resumeData.main}),l.a.createElement(D,{data:this.state.resumeData.resume}),l.a.createElement(G,{data:this.state.resumeData.portfolio}),l.a.createElement(W,{data:this.state.resumeData.testimonials}),l.a.createElement(P,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.main}))}}]),a}(n.Component);s.a.render(l.a.createElement(X,null),document.getElementById("root"))},71:function(e,a,t){e.exports=t(106)},76:function(e,a,t){},79:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.b47c5e3c.chunk.js.map