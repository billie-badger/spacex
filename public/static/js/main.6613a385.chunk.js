(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t.p+"static/media/SpaceX-Logo.65d0543c.png"},48:function(e,a,t){e.exports=t.p+"static/media/loadingrocket.019be322.gif"},54:function(e,a,t){e.exports=t(80)},59:function(e,a,t){},70:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(41),r=t.n(l),s=(t(59),t(10)),m=t(11),i=t(21),o=t(12),u=t(22),h=t(52),p=t(13),d=t(84),g=t(85),E=(t(70),t(47)),b=t.n(E),f=t(25),_=t(9),y=t.n(_),N=t(48),v=t.n(N),k=t(26),j=t.n(k),O=t(49),w=t.n(O),x=t(83);function L(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:","\xa0",c.a.createElement("span",{className:j()({"text-success":r,"text-danger":!r})},n)),c.a.createElement("p",null,"Date: ",c.a.createElement(w.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(x.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function D(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 ml-1 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 ml-1 bg-danger"})," = Failure"))}function Y(){var e=Object(f.a)(["\n  query LAUNCHES_QUERY {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return Y=function(){return e},e}var R=y()(Y()),q=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3",style:{textAlign:"center"}},"Launches"),c.a.createElement(D,null),c.a.createElement(p.Query,{query:R},function(e){var a=e.loading,t=e.error,l=e.data;return a?c.a.createElement("img",{src:v.a,alt:"loading-rocket",style:{display:"block",margin:"auto"}}):(t&&console.log(t),c.a.createElement(n.Fragment,null,l.launches.map(function(e){return c.a.createElement(L,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function C(){var e=Object(f.a)(["\n  query LAUNCH_QUERY($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return C=function(){return e},e}var F=y()(C()),S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.Query,{query:F,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading...");t&&console.log(t);var l=n.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,i=l.launch_success,o=l.launch_date_local,u=l.rocket,h=u.rocket_id,p=u.rocket_name,d=u.rocket_type;return c.a.createElement("div",null,c.a.createElement(x.a,{to:"/",style:{float:"right"},className:"btn btn-info my-3"},"Back"),c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-light"},"Mission:")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Date / Time: ",o),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:",c.a.createElement("span",{className:j()({"text-success":i,"text-danger":!i})},i?" Yes":" No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",d)),c.a.createElement("hr",null))}))}}]),a}(n.Component),A=new h.a({uri:"/graphql"}),H=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:A},c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:b.a,alt:"SpaceX",style:{display:"block",width:"1000px",margin:"auto",padding:"2em"}}),c.a.createElement(g.a,{exact:!0,path:"/",component:q}),c.a.createElement(g.a,{exact:!0,path:"/launch/:flight_number",component:S}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,2,1]]]);
//# sourceMappingURL=main.6613a385.chunk.js.map