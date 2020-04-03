(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"816G":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var o=n("1OyB"),i=n("vuIU"),r=n("md7G"),s=n("foSv"),c=n("Ji7U"),a=n("q1tI"),l=n.n(a),u=n("Ff+t"),h=n("JSsD"),d=n("uuth"),p=l.a.createElement;function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){Object(c.a)(a,t);var e,n=(e=a,function(){var t,n=Object(s.a)(e);if(f()){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(r.a)(this,t)});function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.waypointEnter,o=t.waypointExit,i=t.id,r=t.title,s=t.parent,c=function(t){};n&&(c=function(t){n.call(s,i,t)});var a=function(t){};return o&&(a=function(t){o.call(s,i,t)}),p(d.a,{onEnter:c,onLeave:a},p("div",null,p("br",null),p("h2",{id:i,style:h.a.typography.h2},p("span",{style:{fontWeight:300,fontSize:36}},r)),p(u.a,null),p("div",{style:{fontFamily:h.a.fonts.docs}},e)))}}]),a}(a.Component)},KPqj:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var o=n("1OyB"),i=n("vuIU"),r=n("md7G"),s=n("foSv"),c=n("Ji7U"),a=n("q1tI"),l=n.n(a),u=n("lDfE"),h=n("3Z9Z"),d=n("JI6e"),p=n("4Wno"),f=n("m4NA"),g=l.a.createElement;function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(c.a)(a,t);var e,n=(e=a,function(){var t,n=Object(s.a)(e);if(b()){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(r.a)(this,t)});function a(t){var e;return Object(o.a)(this,a),(e=n.call(this,t)).state={titleSection:{title:"Let's get Started",icon:"/static/images/get-started.svg"},sections:{who:"Who is the Actionhero?","getting-started":"Getting Started",quickstart:"Install and Quickstart",structure:"Application Structure",tutorial:"Tutorial",contributing:"Contributing",notes:"Documentation Notes"},links:[{link:"https://docs.actionherojs.com",title:"\xbb Actionhero Documentation"}]},e}return Object(i.a)(a,[{key:"render",value:function(){return g(p.a,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,showSolutions:!0},g(h.a,null,g(d.a,{md:12},this.section("who",g("div",null,g("p",null,"Actionhero is a ",g("a",{href:"http://nodejs.org"},"node.js")," ",g("strong",null,"API framework")," for both"," ",g("strong",null,"tcp sockets"),", ",g("strong",null,"web sockets"),", and ",g("strong",null,"http clients"),". The goal of Actionhero is to create an easy-to-use toolkit for making"," ",g("strong",null,"reusable")," & ",g("strong",null,"scalable")," APIs. Clients connected to an Actionhero server can"," ",g("strong",null,"consume the API"),","," ",g("strong",null,"consume static content"),", and"," ",g("strong",null,"communicate with each other"),"."),g("p",null,"Actionhero servers can process both requests and tasks (delayed actions like `send e-mail` or other background jobs). Actionhero servers can also run in a cluster (on the same or multiple machines) to work in concert to handle your load."),g("p",null,"The Actionhero API defines a single access point and accepts GET, POST, PUT and DELETE input along with persistent connection via TCP or web sockets. You define"," ",g("strong",null,"Actions")," which handle input and response, such as `userAdd` or `geoLocate`. HTTP, HTTPS, and TCP clients can all use these actions. The Actionhero API is not inherently 'RESTful' (which is meaningless for persistent socket connections) but can be extended to be so if you wish."),g("p",null,"Actionhero will also serve static files for you, but Actionhero is not a 'rendering' server (like express or rails)."),g(f.a,{language:"bash"},"\u276f npm run dev\n\n> actionhero@21.0.6 dev /Users/evan/workspace/actionhero/actionhero\n> ts-node-dev --transpile-only src/server.ts\n\nUsing ts-node version 8.5.2, typescript version 3.7.2\n\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\u208b\nACTIONHERO COMMAND >> start\n\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\u207b\n192.168.7.33 @ 2019-11-27T23:29:24.255Z - notice: pid: 70962\n192.168.7.33 @ 2019-11-27T23:29:24.256Z - notice: environment: development\n192.168.7.33 @ 2019-11-27T23:29:24.256Z - info: *** Starting ActionHero ***\n192.168.7.33 @ 2019-11-27T23:29:24.258Z - info: actionhero member 192.168.7.33 has joined the cluster\n192.168.7.33 @ 2019-11-27T23:29:24.261Z - notice: Starting server: 'web' @ 0.0.0.0:8080\n192.168.7.33 @ 2019-11-27T23:29:24.262Z - notice: Starting server: 'websocket'\n192.168.7.33 @ 2019-11-27T23:29:24.776Z - notice: server ID: 192.168.7.33\n192.168.7.33 @ 2019-11-27T23:29:24.776Z - notice: *** ActionHero Started ***"))),this.section("getting-started",g("div",null,g("h3",{id:"requirements"},"Requirements"),g("ul",null,g("li",null,"node.js ( >= v8.0.0)"),g("li",null,"npm"),g("li",null,"redis (for cluster support, cache, chat, and tasks); but not required.")),g(f.a,{language:"bash"},"# On OSX With Homebrew:\n\nbrew install node\nbrew install redis\nbrew services start redis # this will keep redis running in the background forever\n\n# On Ubuntu:\n\n(sudo) apt-get install node\n(sudo) apt-get install redis-server\nredis-server --daemonize yes # this will keep redis running in the background for this session\n\n# On Windows:\n\n[download nodeJS](https://nodejs.org/en/download)\n[download redis](https://github.com/MSOpenTech/redis)\nrun redis.exe in a background window\n"))),this.section("quickstart",g("div",null,g("p",null,"Get started now:"),g(f.a,{language:"bash"},"mkdir ~/project && cd ~/project\nnpx actionhero generate\nnpm install\n# ensure redis is running; see above\nnpm dev"),g("ul",null,g("li",null,"Create a new directory"," ",g("code",null,"mkdir ~/project && cd ~/project")),g("li",null,"Checkout the Actionhero source"," ",g("code",null,"npm install actionhero")),g("li",null,"Use the generator to create a template project"," ",g("code",null,"npx actionhero generate")),g("li",null,g("code",null,"npm install")," to install dependencies"),g("li",null,"You can now start up the server: ",g("code",null,"npm dev"))),g("p",null,"Visit ",g("code",null,"http://127.0.0.1:8080")," in your browser to see the Actionhero in action!"),g("p",null,"Do not install Actionhero globally with"," ",g("code",null,"npm install -g"),". Actionhero does not support running from a global (system) location, and expects to be installed locally per-project. You can learn more about why"," ",g("a",{href:"https://github.com/Actionhero/Actionhero/issues/1141"},"here")),g("p",null,"You can disable the features of Actionhero which require redis (cache, chat, tasks, etc) from ",g("code",null,"./config/redis.js")," ","and set ",g("code",null,"enabled = false")))),this.section("structure",g("div",null,g(f.a,{language:"bash"},"|\n|- src\n|  - config\n|    - (project settings)\n|\n|  - actions\n|    -- (your actions)\n|\n|  - initializers\n|    -- (any additional initializers you want)\n|\n|  - servers\n|    -- (custom servers you may make)\n|\n|  - tasks\n|    -- (your tasks)\n|\n|  - bin\n|    -- (your custom CLI commands)\n|\n|- locales\n|-- (translation files)\n|\n|- __tests__\n|-- (tests for your API)\n|\n| - log\n|-- (default location for logs)\n|\n|- node_modules\n|-- (your modules, actionhero should be npm installed in here)\n|\n|- pids\n|-- (pidfiles for your running servers)\n|\n|- public\n|-- (your static assets to be served by /file)\n|\nreadme.md\npackage.json\n\n"),g("p",null,"The map to the right describes Actionhero's default project layout."),g("p",null,"Actions in ",g("code",null,"/actions")," will be loaded in automatically, along ",g("code",null,"/initializers")," and"," ",g("code",null,"/tasks"),"."),g("p",null,g("code",null,"/public")," will become your application's default static asset location."),g("p",null,"If you wish to customize your project's paths, you can do so within ",g("code",null,"config/api.js")," in the"," ",g("code",null,"config.general.paths")," section."))),this.section("tutorial",g("div",null,g("p",null,"Want to see an example application using Actionhero? You can check out the code and follow the detailed guide"," ",g("a",{href:"https://github.com/Actionhero/Actionhero-tutorial"},"here (https://github.com/Actionhero/Actionhero-tutorial)"),". This project demonstrates many of the core features of Actionhero in a simple project."))),this.section("contributing",g("div",null,g("p",null,"The www.actionherojs.com website and documentation is hosted on Heroku, and built from"," ",g("a",{href:"https://github.com/Actionhero/www.actionherojs.com"},"this codebase"),". You can submit pull requests to the master branch with any updates or changes."))),this.section("notes",g("div",null,g("p",null,"This documentation will always reflect the master branch of Actionhero, and therefore may be slightly ahead of the latest release on NPM."))))))}}]),a}(u.a)},ez8W:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started",function(){return n("KPqj")}])},lDfE:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var o=n("1OyB"),i=n("vuIU"),r=n("md7G"),s=n("foSv"),c=n("Ji7U"),a=n("q1tI"),l=n.n(a),u=n("816G"),h=l.a.createElement;function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var p=function(t){Object(c.a)(a,t);var e,n=(e=a,function(){var t,n=Object(s.a)(e);if(d()){var o=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(r.a)(this,t)});function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"waypointEnter",value:function(t,e){var n=e.previousPosition;e.currentPosition;this.state.currentlyVisableSections||this.setState({currentlyVisableSections:{}}),"below"!==n&&n||(this.state.currentlyVisableSections[t]=!0),"above"===n&&(this.state.currentlyVisableSections[t]=!0),this.highlightSection()}},{key:"waypointExit",value:function(t,e){e.previousPosition,e.currentPosition;delete this.state.currentlyVisableSections[t],this.highlightSection()}},{key:"highlightSection",value:function(){for(var t,e=Object.keys(this.state.sections),n=0;n<e.length;){if(t=e[n],this.state.currentlyVisableSections[t])return this.setState({currentSection:t});n++}}},{key:"section",value:function(t,e){var n=this,o=this.state.sections[t];return h(u.a,{waypointEnter:function(t,e){return n.waypointEnter(t,e)},waypointExit:function(t,e){return n.waypointExit(t,e)},id:t,parent:this,title:o},e)}}]),a}(a.Component)}},[["ez8W",0,2,1,3,4,5]]]);