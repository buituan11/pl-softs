(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(20),c=a.n(i),r=(a(28),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),d=(a(29),a(30),a(1)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showMenu2=function(e,t,a){return l.a.createElement("div",{className:"menu2 container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"menu2-title col-md-3"},l.a.createElement("h1",null," ",e," "),l.a.createElement("button",{style:{bottom:"55px"},className:"align-self-end"}," ",t," ",l.a.createElement("i",{className:"fas fa-globe"})),l.a.createElement("button",{style:{bottom:"10px"}}," LI\xcaN H\u1ec6 ",l.a.createElement("i",{className:"far fa-comment-alt"})," ")),l.a.createElement("div",{className:"menu2-detail col-md-9"},a.routes.map(function(e,t){return l.a.createElement(d.b,{key:t,to:"".concat(e.path,"/").concat(e.subroute[0].id)}," ",e.title," ")}))))},a.showNavBar=function(){var e=document.getElementById("vertical-nav");""!==e.style.display&&"none"!==e.style.display||(e.style.display="block")},a.closeNavBar=function(){var e=document.getElementById("vertical-nav");""!==e.style.display&&"block"!==e.style.display||(e.style.display="none")},a.showSubMenu=function(e){var t=document.getElementById("submenu-"+e.toString());"none"===t.style.display?t.style.display="block":t.style.display="none"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"head-1 container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"icon col-md-2"},l.a.createElement(d.b,{to:"/"}," ",l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563977440/Pl-Soft/logo.png",alt:"icon"}))),l.a.createElement("div",{className:"navBar col-md-10"},l.a.createElement("div",{className:"contact container-fluid"},l.a.createElement("i",{className:"fas fa-user-circle"}),l.a.createElement("div",{className:"btn-contact"},l.a.createElement("button",null," Xem Brochure "),l.a.createElement("button",null," Li\xean h\u1ec7 ")),l.a.createElement("a",{href:"#"}," ",l.a.createElement("i",{className:"fas fa-headphones-alt"})," 000-0000-0000 ")),l.a.createElement("nav",{className:"menu container-fluid"},this.props.mainRoute.map(function(t,a){return l.a.createElement("div",{key:a,className:"menu1"},l.a.createElement(d.b,{to:"".concat(t.routes[0].path,"/").concat(t.routes[0].subroute[0].id)}," ",t.title," "),e.showMenu2(t.title,"T\xcdNH N\u0102NG",t))}))))),l.a.createElement("div",{className:"head-2 container-fluid"},l.a.createElement("div",{className:"contact-mobile row"},l.a.createElement("a",{href:"#",style:{color:"red",fontWeight:"bold"},className:"col-2"},"000-0000-0000"),l.a.createElement("a",{href:"#",className:"col-4"},"Xem Brochure"),l.a.createElement("a",{href:"#",className:"col-3"},"B\u1ea3n Demo"),l.a.createElement("a",{href:"#",className:"col-2"},l.a.createElement("i",{className:"fas fa-user-circle"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(d.b,{to:"/"}," ",l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563977440/Pl-Soft/logo.png",alt:""})," ")),l.a.createElement("div",{className:"menu-mobile col-8 container-fluid"},l.a.createElement("i",{onClick:function(){return e.showNavBar()},className:"fas fa-bars"}),l.a.createElement("div",{id:"vertical-nav",className:"vertical-menu scale-in-right"},l.a.createElement("button",{onClick:function(){return e.closeNavBar()}}," X "),this.props.mainRoute.map(function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"nav"},l.a.createElement(d.b,{to:"".concat(t.routes[0].path,"/").concat(t.routes[0].subroute[0].id)}," ",t.title),"\xa0\xa0 ",l.a.createElement("i",{onClick:function(){return e.showSubMenu(a)},className:"fas fa-chevron-down"})),l.a.createElement("ul",{id:"submenu-"+a.toString(),style:{display:"none"}},t.routes.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(d.b,{to:"".concat(e.path,"/").concat(e.subroute[0].id)}," ",e.title," "))})))}))))))}}]),t}(n.Component),h=(a(35),n.Component,function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"main container-fluid"},l.a.createElement("div",{className:"visual container-fluid"},l.a.createElement("div",{className:"visual-title container-fluid"},l.a.createElement("p",null,"PL-Softs!"),l.a.createElement("p",null,"Ph\u1ea7n m\u1ec1m k\u1ebf to\xe1n qu\u1ea3n tr\u1ecb chuy\xean s\xe2u.")),l.a.createElement("div",{className:"visual-detail"},l.a.createElement("div",{className:"visual-detail-left col-md-6"},l.a.createElement("p",null,"V\u1ec0 S\u1ea2N PH\u1ea8M"),l.a.createElement("div",{className:"visual-detail-figure"},l.a.createElement("p",null,"287%"),l.a.createElement("p",null,"Hi\u1ec7u qu\u1ea3 t\xe0i ch\xednh doanh nghi\u1ec7p v\u01b0\u1ee3t b\u1eadc")),l.a.createElement("button",{className:"btn-black"},l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[0].routes[0].path,"/").concat(this.props.mainRoute[0].routes[0].subroute[0].id)},"T\xecm hi\u1ec3u th\xeam"))))),l.a.createElement("div",{className:"feature"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"feature-content col-md-6"},l.a.createElement("div",{className:"diamond-top"},l.a.createElement("div",{className:"diamond"})),l.a.createElement("div",{className:"diamond-bottom"},l.a.createElement("div",{className:"diamond"})),l.a.createElement("h1",null,"N\u1ed8I DUNG")," ",l.a.createElement("h1",null,"GI\xc1"),l.a.createElement("p",null,"T\u01b0 v\u1ea5n gi\u1ea3i ph\xe1p doanh nghi\u1ebfp")," ",l.a.createElement("p",null,"FREE"),l.a.createElement("p",null,"T\xe0i ch\xednh, k\u1ebf to\xe1n \u01b0u vi\u1ec7t")," ",l.a.createElement("p",null,"$3/ng\xe0y"),l.a.createElement("p",null,"Qu\u1ea3n tr\u1ecb ngu\u1ed3n l\u1ef1c(ERP)")," ",l.a.createElement("p",null,"Theo d\u1ef1 \xe1n")),l.a.createElement("div",{className:"feature-detail col-md-6"},l.a.createElement("h1",null,"T\xcdNH N\u0102NG"),l.a.createElement("p",null,"14 n\u0103m kinh nghi\u1ec7m t\u01b0 v\u1ea5n gi\u1ea3i ph\xe1p doanh nghi\u1ec7p."),l.a.createElement("p",null,"T\xednh n\u0103ng t\xe0i ch\xednh, k\u1ebf to\xe1n \u01b0u vi\u1ec7t."),l.a.createElement("p",null,"N\xe2ng c\u1ea5p doanh nghi\u1ec7p c\u1ee7a b\u1ea1n l\xean m\u1ee9c t\u1ef1 \u0111\u1ed9ng v\u1eadn h\xe0nh."),l.a.createElement("button",{className:"btn-black"},l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[1].routes[0].path,"/").concat(this.props.mainRoute[1].routes[0].subroute[0].id)},"T\xecm hi\u1ec3u th\xeam"))))),l.a.createElement("div",{className:"contact-us"},l.a.createElement("p",null,"\u0110\u1ec3 l\u1ea1i l\u1eddi nh\u1eafn"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleName"},"T\xean"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleName",placeholder:"H\u1ecd v\xe0 t\xean"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail","aria-describedby":"emailContact",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleText"},"N\u1ed9i dung"),l.a.createElement("textarea",{class:"form-control"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"X\xe1c nh\u1eadn"))))}}]),t}(n.Component)),E=(a(36),function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"location col-md-4"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-map-marker-alt"})," LI\xcaN H\u1ec6:",l.a.createElement("br",null),"453KA/35A L\xea V\u0103n S\u1ef9 P.12 Q.3 TP.HCM",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-phone"})," 0903.8.29137",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-envelope"})," pl.softs.2019@gmail.vn",l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("div",{className:"menu-footer col-md-5"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-bars"})," MENU"),l.a.createElement("ul",null,this.props.mainRoute.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("a",{href:"#"},e.title))})),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-globe-asia"})," GLOBAL SITES")),l.a.createElement("div",{className:"iso col-md-3"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-bookmark"})," CH\u1ee8NG CH\u1ec8 B\u1ea2O M\u1eacT"))))}}]),t}(n.Component)),f=a(11),v=(a(37),a(38),function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content col-md-9"},l.a.createElement("h1",null,this.props.title),l.a.createElement("div",{className:"item"},l.a.createElement("h2",null,"AAAAAAAAAAAA"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg",alt:"abc"})),l.a.createElement("div",{className:"item"},l.a.createElement("h2",null,"AAAAAAAAAAAA"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg",alt:""})),l.a.createElement("h2",null,this.props.item.title),l.a.createElement("div",{className:"content-list"},l.a.createElement("ul",null,this.props.item.subroute.map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(d.b,{to:"".concat(e.props.item.path,"/").concat(t.id)},t.title))}))))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showSideBar=function(e){return e.routes.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(d.b,{to:"".concat(e.path,"/").concat(e.subroute[0].id),className:"route"},"   ",e.title," ",l.a.createElement("i",{className:"fas fa-chevron-down"})),e.subroute.map(function(t,a){return l.a.createElement(d.b,{key:a,to:"".concat(e.path,"/").concat(t.id),activeClassName:"active-sub-route",className:"sub-route"},t.title)}))})},a.showItem=function(e,t){return l.a.createElement(v,{title:e,item:t})},a.state={re:1,arrow:[l.a.createElement("i",{className:"fas fa-chevron-up"}),l.a.createElement("i",{className:"fas fa-chevron-down"})]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"content-page container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"side-bar col-md-3 hidden-side-bar"},l.a.createElement("h1",null,this.props.sidebar.title),l.a.createElement("ul",null,this.showSideBar(this.props.sidebar))),this.props.sidebar.routes.map(function(t){return t.subroute.map(function(a,n){return l.a.createElement(f.a,{key:n,path:"".concat(t.path,"/").concat(a.id),component:function(){return e.showItem(a.title,t)}})})}))))}}]),t}(n.Component),N=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{paddingTop:"100px"}},l.a.createElement("h1",{style:{fontSize:"200px"}},"PAGE NOT FOUND"))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).RenderContent=function(e,t){var a=t.match;return l.a.createElement(b,{sidebar:e,match:a})},a.RenderMain=function(){return l.a.createElement(h,{mainRoute:a.state.mainRoute})},a.state={mainRoute:[{title:"S\u1ea2N PH\u1ea8M",routes:[{title:"N\u1ec0N T\u1ea2NG WEB",path:"/san-pham/nen-tang-web",subroute:[{id:1,title:"T\xednh n\u0103ng 1"},{id:2,title:"T\xednh n\u0103ng 2"},{id:3,title:"T\xednh n\u0103ng 3"},{id:4,title:"T\xednh n\u0103ng 4"},{id:5,title:"T\xednh n\u0103ng 5"},{id:6,title:"T\xednh n\u0103ng 6"},{id:7,title:"T\xednh n\u0103ng 7"},{id:8,title:"T\xednh n\u0103ng 8"},{id:9,title:"T\xednh n\u0103ng 9"},{id:0,title:"T\xednh n\u0103ng 10"},{id:11,title:"T\xednh n\u0103ng 11"},{id:12,title:"T\xednh n\u0103ng 12"},{id:13,title:"T\xednh n\u0103ng 13"},{id:14,title:"T\xednh n\u0103ng 14"},{id:15,title:"T\xednh n\u0103ng 15"},{id:16,title:"T\xednh n\u0103ng 16"},{id:17,title:"T\xednh n\u0103ng 17"}]},{title:"QU\u1ea2N L\xdd KHO",path:"/san-pham/quan-ly-kho",subroute:[{id:1,title:"Qu\u1ea3n l\xfd 1"},{id:2,title:"Qu\u1ea3n l\xfd 2"}]}]},{title:"T\xcdNH N\u0102NG",routes:[{title:"GI\u1ea2I PH\xc1P H\u1ee2P L\xdd",path:"/tinh-nang/giai-phap",subroute:[{id:1,title:"Gi\u1ea3i ph\xe1p 1"},{id:2,title:"Gi\u1ea3i ph\xe1p 2"}]},{title:"V\xcc SAO CH\u1eccN PL-Softs",path:"/tinh-nang/vi-sao-chon-PL-Softs",subroute:[{id:1,title:"V\xec sao 1"},{id:2,title:"V\xec sao 2"}]}]},{title:"D\u1ecaCH V\u1ee4",routes:[{title:"H\u1ed6 TR\u1ee2 \u0110\xc0O T\u1ea0O",path:"/dich-vu/ho-tro",subroute:[{id:1,title:"H\u1ed7 tr\u1ee3 1"},{id:2,title:"H\u1ed7 tr\u1ee3 2"}]},{title:"C\u1eacP NH\u1eacT H\u1ec6 TH\u1ed0NG",path:"/dich-vu/cap-nhat",subroute:[{id:1,title:"C\u1eadp nh\u1eadt 1"},{id:2,title:"C\u1eadp nh\u1eadt 2"}]}]},{title:"GI\u1edaI THI\u1ec6U",routes:[{title:"GI\u1edaI THI\u1ec6U",path:"/gioi-thieu/gioi-thieu-chung",subroute:[{id:1,title:"Gi\u1edbi thi\u1ec7u 1"},{id:2,title:"Gi\u1edbi thi\u1ec7u 2"}]},{title:"V\u1ec0 \u0110\u1ed8I NG\u0168 CH\xdaNG T\xd4I",path:"/gioi-thieu/about-us",subroute:[{id:1,title:"V\u1ec0 CH\xdaNG T\xd4I 1"},{id:2,title:"V\u1ec0 CH\xdaNG T\xd4I 2"}]}]}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App container-fluid"},l.a.createElement(p,{mainRoute:this.state.mainRoute}),l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/pl-softs/",component:function(){return e.RenderMain()}}),l.a.createElement(f.a,{exact:!0,path:"/",component:function(){return e.RenderMain()}}),this.state.mainRoute.map(function(t){return t.routes.map(function(a,n){return l.a.createElement(f.a,{key:n,path:"".concat(a.path,"/:id"),component:function(a){var n=a.match;return e.RenderContent(t,{match:n})}})})}),l.a.createElement(f.a,{component:N})),l.a.createElement(E,{mainRoute:this.state.mainRoute})))}}]),t}(n.Component),y=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(e){console.log(this.props.location),this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),w=(Object(f.f)(y),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pl-softs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pl-softs","/service-worker.js");w?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.d8bdab68.chunk.js.map