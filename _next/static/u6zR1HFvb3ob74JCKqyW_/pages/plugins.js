(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"816G":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("1OyB"),o=n("vuIU"),r=n("md7G"),s=n("foSv"),a=n("Ji7U"),u=n("q1tI"),c=n.n(u),l=n("Ff+t"),h=n("JSsD"),p=n("uuth"),f=c.a.createElement;function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){Object(a.a)(u,t);var e,n=(e=u,function(){var t,n=Object(s.a)(e);if(d()){var i=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(r.a)(this,t)});function u(){return Object(i.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.waypointEnter,i=t.waypointExit,o=t.id,r=t.title,s=t.parent,a=function(t){};n&&(a=function(t){n.call(s,o,t)});var u=function(t){};return i&&(u=function(t){i.call(s,o,t)}),f(p.a,{onEnter:a,onLeave:u},f("div",null,f("br",null),f("h2",{id:o,style:h.a.typography.h2},f("span",{style:{fontWeight:300,fontSize:36}},r)),f(l.a,null),f("div",{style:{fontFamily:h.a.fonts.docs}},e)))}}]),u}(u.Component)},JK95:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugins",function(){return n("iviy")}])},MBJH:function(t,e,n){"use strict";var i=n("wx14"),o=n("zLVn"),r=n("TSYQ"),s=n.n(r),a=n("q1tI"),u=n.n(a),c=n("vUet"),l=u.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.className,a=t.striped,l=t.bordered,h=t.borderless,p=t.hover,f=t.size,d=t.variant,g=t.responsive,m=Object(o.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),b=Object(c.b)(n,"table"),v=s()(r,b,d&&b+"-"+d,f&&b+"-"+f,a&&b+"-striped",l&&b+"-bordered",h&&b+"-borderless",p&&b+"-hover"),y=u.a.createElement("table",Object(i.a)({},m,{className:v,ref:e}));if(g){var w=b+"-responsive";return"string"===typeof g&&(w=w+"-"+g),u.a.createElement("div",{className:w},y)}return y}));e.a=l},iviy:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var i=n("1OyB"),o=n("vuIU"),r=n("md7G"),s=n("foSv"),a=n("Ji7U"),u=n("q1tI"),c=n.n(u),l=n("MBJH"),h=n("3Z9Z"),p=n("JI6e"),f=n("lDfE"),d=n("4Wno"),g=n("m4NA"),m=c.a.createElement;function b(t){return function(){var e,n=Object(s.a)(t);if(v()){var i=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return Object(r.a)(this,e)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y={databases:[{name:"ah-sequelize-plugin",url:"https://github.com/Actionhero/ah-sequelize-plugin",description:"Sequelize.js plugin for Actionhero",versions:"14-19"},{name:"ah-elasticsearch-orm",url:"https://github.com/messagebot/ah-elasticsearch-orm",description:"An Elasticsearch ORM for Actionhero Projects. Provides CRUD instance methods, finders, updates, and collection abstractions",versions:"14-16"},{name:"ah-mongodb-plugin",url:"https://github.com/eduardogch/ah-mongodb-plugin",description:"Actionhero plugin to support MongoDB",versions:"14-16"},{name:"ah-rethinkdb-plugin",url:"https://github.com/eduardogch/ah-rethinkdb-plugin",description:"Actionhero plugin to support RethinkDB",versions:"14"}],tasks:[{name:"ah-resque-ui",url:"https://github.com/Actionhero/ah-resque-ui",description:"Visualization and Managment tools for Actionhero Tasks & Resque Jobs.",versions:"17+"}],apis:[{name:"ah-swagger-plugin",url:"https://github.com/walbertoibarra/ah-swagger-plugin",description:"Generate Swagger-UI documentation from Actionhero ",versions:"14-19"},{name:"ah-ratelimit-plugin",url:"https://github.com/innerdvations/ah-ratelimit-plugin",description:"Allows limits to be set on the number of time actions can be called in a time period, based on some identifier. Has been tested to work with both Actionhero 8 and Actionhero 9.",versions:"8-9"}],auth:[{name:"ah-jwtauth-plugin",url:"https://github.com/ifavo/ah-jwtauth-plugin",description:"Uses auth0 node-jsonwebtoken to allow token authentication of actions",versions:"14-17"},{name:"ah-passport-plugin",url:"https://github.com/neilstuartcraig/ah-passport-plugin",description:"An Actionhero plugin for the passport authentication middleware",versions:"14-16"}],integrations:[{name:"ah-newrelic-plugin",url:"https://github.com/Actionhero/ah-newrelic-plugin",description:"Actionhero plugin for New Relic",versions:"14-19"},{name:"ah-airbrake-plugin",url:"https://github.com/Actionhero/ah-airbrake-plugin",description:"Actionhero plugin for airbrake",versions:"14-17"},{name:"ah-nodemailer-plugin",url:"https://github.com/panjiesw/ah-nodemailer-plugin",description:"Actionhero plugin for Node Mailer",versions:"14-16"}]},w=function(t){Object(a.a)(n,t);var e=b(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return m(l.a,{bordered:!0,hover:!0,size:"sm"},m("thead",null,m("tr",null,m("th",null,"Name"),m("th",null,"Description"),m("th",null,"AH Versions"))),m("tbody",null,this.props.plugins.map((function(t){return m(j,{key:t.name,plugin:t})}))))}}]),n}(u.Component),j=function(t){Object(a.a)(n,t);var e=b(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return m("tr",null,m("td",{style:{minWidth:200}},m("a",{href:this.props.plugin.url,target:"_new"},m("strong",null,this.props.plugin.name))),m("td",null,this.props.plugin.description),m("td",null,this.props.plugin.versions))}}]),n}(u.Component),O=function(t){Object(a.a)(n,t);var e=b(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={titleSection:{title:"Plugins",icon:"/static/images/ops-tools.svg"},sections:{intro:"Introduction",databases:"Databases",tasks:"Tasks",apis:"API tools",auth:"Authentication and Auth",integrations:"Integrations"},links:[{link:"https://docs.actionherojs.com",title:"\xbb Actionhero Documentation"}]},o}return Object(o.a)(n,[{key:"render",value:function(){return m(d.a,{showSolutions:!0,sideNav:this.state.sections,titleSection:this.state.titleSection,currentSection:this.state.currentSection},m(h.a,null,m(p.a,{md:12},this.section("intro",m("div",null,m("p",null,"There is a robust ecosystem of Actionhero plugins which you can use to leverage the community's expertise in your applications."),m("p",null,"To use an Actionhero plugin you usually"," ",m("code",null,"npm install name-of-plugin")," and then reference is in your ",m("code",null,"./config/plugins.js")," file to load it into your application."),m(g.a,{language:"javascript"},"// If you want to use plugins in your application, include them here:\nreturn {\n  'myPlugin': { path: __dirname + '/../node_modules/myPlugin' }\n}\n\n// You can also toggle on or off sections of a plugin to include (default true for all sections):\nreturn {\n  'myPlugin': {\n    path: __dirname + '/../node_modules/myPlugin',\n    actions: true,\n    tasks: true,\n    initializers: true,\n    servers: true,\n    cli: true,\n    public: true\n  }\n}\n"),m("p",null,"You can learn more about plugins in the"," ",m("a",{href:"https://docs.actionherojs.com/tutorial-plugins.html"},"Actionhero documentation"),"."))))),m(h.a,null,m(p.a,{md:12},this.section("databases",m(w,{plugins:y.databases})))),m(h.a,null,m(p.a,{md:12},this.section("tasks",m(w,{plugins:y.tasks})))),m(h.a,null,m(p.a,{md:12},this.section("apis",m(w,{plugins:y.apis})))),m(h.a,null,m(p.a,{md:12},this.section("auth",m(w,{plugins:y.auth})))),m(h.a,null,m(p.a,{md:12},this.section("integrations",m(w,{plugins:y.integrations})))))}}]),n}(f.a)},lDfE:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("1OyB"),o=n("vuIU"),r=n("md7G"),s=n("foSv"),a=n("Ji7U"),u=n("q1tI"),c=n.n(u),l=n("816G"),h=c.a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=function(t){Object(a.a)(u,t);var e,n=(e=u,function(){var t,n=Object(s.a)(e);if(p()){var i=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(r.a)(this,t)});function u(){return Object(i.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"waypointEnter",value:function(t,e){var n=e.previousPosition;e.currentPosition;this.state.currentlyVisableSections||this.setState({currentlyVisableSections:{}}),"below"!==n&&n||(this.state.currentlyVisableSections[t]=!0),"above"===n&&(this.state.currentlyVisableSections[t]=!0),this.highlightSection()}},{key:"waypointExit",value:function(t,e){e.previousPosition,e.currentPosition;delete this.state.currentlyVisableSections[t],this.highlightSection()}},{key:"highlightSection",value:function(){for(var t,e=Object.keys(this.state.sections),n=0;n<e.length;){if(t=e[n],this.state.currentlyVisableSections[t])return this.setState({currentSection:t});n++}}},{key:"section",value:function(t,e){var n=this,i=this.state.sections[t];return h(l.a,{waypointEnter:function(t,e){return n.waypointEnter(t,e)},waypointExit:function(t,e){return n.waypointExit(t,e)},id:t,parent:this,title:i},e)}}]),u}(u.Component)}},[["JK95",0,2,1,3,4,5]]]);