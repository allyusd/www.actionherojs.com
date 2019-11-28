(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2MN9":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials",function(){return n("XK98")}])},XK98:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return w});var a=n("0iUn"),i=n("sLSF"),o=n("MI3g"),s=n("a7VT"),l=n("Tit0"),r=n("q1tI"),c=n.n(r),u=n("lDfE"),h=n("b7Uv"),d=n("0px3"),m=n("YFqc"),g=n.n(m),p=n("4Wno"),y=n("JSsD"),f=c.a.createElement,b={maxWidth:150,maxHeight:150,padding:10},w=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(s.a)(e).call(this,t))).state={titleSection:{title:"Tutorials",icon:"/static/images/jetpack-lady.svg"},sections:{intro:"Introduction",core:"Actionhero Core",servers:"Actionhero Servers",configuration:"Configuration and Development",advanced:"Advanced Topics"}},n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return f(p.a,{showSolutions:!1,sideNav:this.state.sections,titleSection:this.state.titleSection,currentSection:this.state.currentSection},f(h.a,null,f(d.a,{md:12},this.section("intro",f("div",null,f("p",null,"Welcome to Actionhero! These tutorials are here to provide a more story-driven guide to how things work. These tutorials are meant to parter with the"," ",f("a",{href:"https://docs.actionherojs.com"},"Actionhero Documentation")," ","to provide a full guide un using the framework."))),this.section("core",f("div",null,f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.actions)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/actions"},f("a",null,"Actions"))),f("p",null,"Actions are the core of Actionhero, and the main way you respond to your user's requets."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.tasks)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/tasks"},f("a",null,"Tasks"))),f("p",null,"Tasks are how your excecute background jobs, like sending emails or contacting a third-party API. In Actionhero, you can trigger tasks manually or run them on a schedule."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.initializers)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/initializers"},f("a",null,"Initializers"))),f("p",null,"Initializers are for connecting to databases, loading data, and generally preparing your API to process requests. Initializers are the place to define any common methods you plan to use in your Actions and Tasks."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.localization)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/localization"},f("a",null,"Localization"))),f("p",null,"Actionhero includes a built-in localization tool based on i18n which allows you to custominze your API's responses to a specific languange or country. You can customize how that languag is determined."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.middleware)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/middleware"},f("a",null,"Middleware"))),f("p",null,"Actionhero's Middleware system makes it easy to add authatnication, logging, and other custom behavior to your Actions and Tasks"))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.testing)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/testing"},f("a",null,"Testing"))),f("p",null,"Actionhero includes a robust testing framework that works with Jest for testing JS and TS projects. You can easily test your Actions and Tasks with either real connections or mocks."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.cache)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/cache"},f("a",null,"Cache"))),f("p",null,"Actionhero includes a powerful cache system based on Redis. It can be used to store and retrive data, but also to create more complext data structures based on queues and epiring object."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.chat)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/chat"},f("a",null,"Chat"))),f("p",null,"Actionhero's chat system is for more than just peer-to-peer communciations. It is a robust way to share data between clients and your servers. Game coordination, messaging, and sharing state are all possible via Actionhero's chat system."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.cli)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/cli"},f("a",null,"CLI"))),f("p",null,"Actionhero incldues tools to build CLI scripts that integrate with your application. Need to migrate a database or seed data in a repeatable way? Check out Actionhero's CLI tooling."))))),this.section("servers",f("div",null,f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.servers)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/servers"},f("a",null,"Servers"))),f("p",null,"Actionhero is unique in that it allows you to build or add many types of servers into one application. Not only can you support HTTP and Web Socket, but you can add custom proticols like Quick and Protobuf to your application and easily reuse your Actions!"))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["web-server"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/web-server"},f("a",null,"Web Server"))),f("p",null,"Actionhero ships with a robust web server to handle RESTful APIs. Routing, versioning, and more are included."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["websocket-server"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/websocket-server"},f("a",null,"Websocket Server"))),f("p",null,"Building on the included web server, Actionhero's Web Socket Server includes everything you need for a realtime application on the web or in your mobile applications."))))),this.section("configuration",f("div",null,f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["running-Actionhero"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/running-Actionhero"},f("a",null,"Running Actionhero"))),f("p",null,"Actionhero is ready for your production deployments - with support for hot reloading, clustered process managment, and multiple ways of logging."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.config)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/config"},f("a",null,"Configuration"))),f("p",null,"Actionhero is built following the ideals of the"," ",f("a",{href:"https://www.12factor.net"},"12-factor application"),". That means you can easily configure and deploy your app to a nubmer of environments."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.repl)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/repl"},f("a",null,"Debugging and REPL"))),f("p",null,"Actionhero includes a REPL so you can interactibvly explore your application can work with your data."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["file-server"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/file-server"},f("a",null,"File Server"))),f("p",null,"Actionhero comes with a file server which makes it easy for you to integrate assets with your API responses, and serve up API playgrounds and documentation."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.logging)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/logging"},f("a",null,"Logging"))),f("p",null,"Actionhero uses Winston to create multi faceted logs for your applicaiton."))))),this.section("advanced",f("div",null,f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.plugins)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/plugins"},f("a",null,"Plugins"))),f("p",null,"Actionhero is built to enable a robust ecosystem of plugins to share functionality. You can add community plugins or make your own to share functionality within your company."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.cluster)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/cluster"},f("a",null,"Cluster"))),f("p",null,"Actionhero can be run either as a solitary server or as part of a cluster. The goal of these cluster helpers is to allow you to create a group of servers which will share state and each be able to handle requests and run tasks. You can add or remove nodes from the cluster without fear of data loss or task duplication."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["production-notes"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/production-notes"},f("a",null,"Production Notes"))),f("p",null,"Actionhero has been used by many compines in both large and small deployments. Let us share some best practices with you to design your Actionhero deployment in the best possible way."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons["upgrade-path"])})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/upgrade-path"},f("a",null,"Upgrade Path"))),f("p",null,"Upgrading big Actionhero projects to a new major might require some effort. Every Actionhero version has it's own specific project files which you generate using `Actionhero generate` command... but this guide helps you move from one version to the next."))),f(h.a,null,f(d.a,{md:3,style:{textAlign:"center"}},f("img",{style:b,src:"/static/images/".concat(y.a.icons.typescript)})),f(d.a,{md:9},f("h3",null,f(g.a,{href:"/tutorials/typescript"},f("a",null,"Typescript"))),f("p",null,"Actionhero has moved from being a Javscript project to a Typescript project in version 21. This guide explains how more your existing Javascript project to Typescript, and how to enjoy all the enchancements of this new version."))))))))}}]),e}(u.a)},lDfE:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var a=n("pLtp"),i=n.n(a),o=n("0iUn"),s=n("sLSF"),l=n("MI3g"),r=n("a7VT"),c=n("Tit0"),u=n("q1tI"),h=n.n(u),d=n("816G"),m=h.a.createElement,g=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(s.a)(e,[{key:"waypointEnter",value:function(t,e){var n=e.previousPosition;e.currentPosition;this.state.currentlyVisableSections||this.setState({currentlyVisableSections:[]}),this.state.currentlyVisableSections.indexOf(t)<0&&("below"!==n&&n||this.state.currentlyVisableSections.push(t),"above"===n&&this.setState({currentlyVisableSections:[t].concat(this.state.currentlyVisableSections)})),this.highlightSection()}},{key:"waypointExit",value:function(t,e){e.previousPosition,e.currentPosition;this.state.currentlyVisableSections.indexOf(t)&&this.state.currentlyVisableSections.splice(this.state.currentlyVisableSections.indexOf(t),1),this.highlightSection()}},{key:"highlightSection",value:function(){for(var t,e=i()(this.state.sections),n=0;n<e.length;){if(t=e[n],this.state.currentlyVisableSections.indexOf(t)>=0)return this.setState({currentSection:t});n++}}},{key:"section",value:function(t,e){var n=this.state.sections[t];return m(d.a,{waypointEnter:this.waypointEnter,waypointExit:this.waypointExit,id:t,parent:this,title:n},e)}}]),e}(u.Component)}},[["2MN9",0,1]]]);