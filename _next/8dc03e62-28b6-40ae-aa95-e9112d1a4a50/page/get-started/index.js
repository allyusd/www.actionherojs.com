
          window.__NEXT_REGISTER_PAGE('/get-started', function() {
            var comp = module.exports=webpackJsonp([7],{199:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(75),r=i(a),o=n(10),l=i(o),s=n(8),c=i(s),u=n(9),m=i(u),d=n(11),f=i(d),h=n(12),_=i(h),b=n(0),N=i(b),p=n(115),g=i(p),E=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,m.default)(t,[{key:"waypointEnter",value:function(e,t){var n=t.previousPosition;t.currentPosition;this.state.currentlyVisableSections||(this.state.currentlyVisableSections=[]),this.state.currentlyVisableSections.indexOf(e)<0&&("below"!==n&&n||this.state.currentlyVisableSections.push(e),"above"===n&&(this.state.currentlyVisableSections=[e].concat(this.state.currentlyVisableSections))),this.highlightSection()}},{key:"waypointExit",value:function(e,t){t.previousPosition,t.currentPosition;this.state.currentlyVisableSections.indexOf(e>=0)&&this.state.currentlyVisableSections.splice(this.state.currentlyVisableSections.indexOf(e),1),this.highlightSection()}},{key:"highlightSection",value:function(){for(var e=(0,r.default)(this.state.sections),t=0,n=void 0;t<e.length;){if(n=e[t],this.state.currentlyVisableSections.indexOf(n)>=0)return this.setState({currentSection:n});t++}}},{key:"section",value:function(e,t){var n=this.state.sections[e];return N.default.createElement(g.default,{waypointEnter:this.waypointEnter,waypointExit:this.waypointExit,currentSection:this.state.currentSection,id:e,parent:this,title:n,__source:{fileName:"/home/ubuntu/www.actionherojs.com/pageClasses/docsPageWithSideNav.js",lineNumber:46}},t)}}]),t}(N.default.Component);t.default=E},766:function(e,t,n){e.exports=n(767)},767:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),r=i(a),o=n(8),l=i(o),s=n(9),c=i(s),u=n(11),m=i(u),d=n(12),f=i(d),h="/home/ubuntu/www.actionherojs.com/pages/get-started.js?entry",_=n(0),b=i(_),N=n(199),p=i(N),g=n(20),E=n(112),w=i(E),y=n(198),v=i(y),k=function(e){function t(e){(0,l.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={titleSection:{title:"Let's get Started",icon:"/static/images/get-started.svg"},sections:{who:"Who is the ActionHero?","getting-started":"Getting Started",quickstart:"Install and Quickstart",structure:"Application Structure",tutorial:"Tutorial",contributing:"Contributing",notes:"Documentation Notes"},links:[{link:"https://docs.actionherojs.com",title:"» ActionHero Documentation"}]},n}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return b.default.createElement(w.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,showSolutions:!0,__source:{fileName:h,lineNumber:124}},b.default.createElement(g.Row,{__source:{fileName:h,lineNumber:125}},b.default.createElement(g.Col,{md:12,__source:{fileName:h,lineNumber:126}},this.section("who",b.default.createElement("div",{__source:{fileName:h,lineNumber:128}},b.default.createElement("p",{__source:{fileName:h,lineNumber:129}},"ActionHero is a ",b.default.createElement("a",{href:"http://nodejs.org",__source:{fileName:h,lineNumber:129}},"node.js")," ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"API framework")," for both ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"tcp sockets"),", ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"web sockets"),", and ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"http clients"),".  The goal of ActionHero is to create an easy-to-use toolkit for making ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"reusable")," & ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"scalable")," APIs.  Clients connected to an ActionHero server can ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"consume the API"),", ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"consume static content"),", and ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"communicate with each other"),"."),b.default.createElement("p",{__source:{fileName:h,lineNumber:130}},"ActionHero servers can process both requests and tasks (delayed actions like `send e-mail` or other background jobs).  ActionHero servers can also run in a cluster (on the same or multiple machines) to work in concert to handle your load."),b.default.createElement("p",{__source:{fileName:h,lineNumber:131}},"The ActionHero API defines a single access point and accepts GET, POST, PUT and DELETE input along with persistent connection via TCP or web sockets. You define ",b.default.createElement("strong",{__source:{fileName:h,lineNumber:131}},"Actions")," which handle input and response, such as `userAdd` or `geoLocate`. HTTP, HTTPS, and TCP clients can all use these actions.  The ActionHero API is not inherently 'RESTful' (which is meaningless for persistent socket connections) but can be extended to be so if you wish."),b.default.createElement("p",{__source:{fileName:h,lineNumber:132}},"ActionHero will also serve static files for you, but ActionHero is not a 'rendering' server (like express or rails)."),b.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:134}},"> npm start\n\n> actionhero@12.2.2 start /app/actionhero\n> node ./bin/actionhero\n\ninfo: actionhero >> start\n2015-11-14 16:01:27 - notice: *** starting actionhero ***\n2015-11-14 16:01:27 - info: actionhero member 10.0.1.15 has joined the cluster\n2015-11-14 16:01:27 - notice: pid: 36087\n2015-11-14 16:01:27 - notice: server ID: 10.0.1.15\n2015-11-14 16:01:27 - info: ensuring the existence of the chatRoom: defaultRoom\n2015-11-14 16:01:27 - info: ensuring the existence of the chatRoom: anotherRoom\n2015-11-14 16:01:27 - notice: starting server: web\n2015-11-14 16:01:27 - notice: starting server: websocket\n2015-11-14 16:01:28 - notice: environment: development\n2015-11-14 16:01:28 - notice: *** Server Started @ 2015-11-14 16:01:28 ***\n"))),this.section("getting-started",b.default.createElement("div",{__source:{fileName:h,lineNumber:139}},b.default.createElement("h3",{id:"requirements",__source:{fileName:h,lineNumber:140}},"Requirements"),b.default.createElement("ul",{__source:{fileName:h,lineNumber:142}},b.default.createElement("li",{__source:{fileName:h,lineNumber:143}},"node.js ( >= v4.0.0)"),b.default.createElement("li",{__source:{fileName:h,lineNumber:144}},"npm"),b.default.createElement("li",{__source:{fileName:h,lineNumber:145}},"redis (for cluster support, cache, chat, and tasks); but not required.")),b.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:148}},"# On OSX With Homebrew:\n\nbrew install node\nbrew install redis\n\n# On Ubuntu:\n\n(sudo) apt-get install node\n(sudo) apt-get install redis-server\n\n# On Windows:\n\n[download nodeJS](https://nodejs.org/en/download)\n[download redis](https://github.com/MSOpenTech/redis)\n"))),this.section("quickstart",b.default.createElement("div",{__source:{fileName:h,lineNumber:153}},b.default.createElement("p",{__source:{fileName:h,lineNumber:154}},"Get started now:"),b.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:155}},"mkdir ~/project && cd ~/project\nnpm install actionhero\nnpx actionhero generate\nnpm install\nnpm start"),b.default.createElement("ul",{__source:{fileName:h,lineNumber:157}},b.default.createElement("li",{__source:{fileName:h,lineNumber:158}},"Create a new directory ",b.default.createElement("code",{__source:{fileName:h,lineNumber:158}},"mkdir ~/project && cd ~/project")),b.default.createElement("li",{__source:{fileName:h,lineNumber:159}},"Checkout the ActionHero source ",b.default.createElement("code",{__source:{fileName:h,lineNumber:159}},"npm install actionhero")),b.default.createElement("li",{__source:{fileName:h,lineNumber:160}},"Use the generator to create a template project ",b.default.createElement("code",{__source:{fileName:h,lineNumber:160}},"npx actionhero generate")),b.default.createElement("li",{__source:{fileName:h,lineNumber:161}},b.default.createElement("code",{__source:{fileName:h,lineNumber:161}},"npm install")," to install dependencies"),b.default.createElement("li",{__source:{fileName:h,lineNumber:162}},"You can now start up the server: ",b.default.createElement("code",{__source:{fileName:h,lineNumber:162}},"npm start"))),b.default.createElement("p",{__source:{fileName:h,lineNumber:165}},"Visit ",b.default.createElement("code",{__source:{fileName:h,lineNumber:165}},"http://127.0.0.1:8080")," in your browser to see the ActionHero in action!"),b.default.createElement("p",{__source:{fileName:h,lineNumber:166}},"Do not install ActionHero globally with `npm install -g`"),b.default.createElement("p",{__source:{fileName:h,lineNumber:167}},"You can disable the features of ActionHero which require redis (cache, chat, tasks, etc) from `./config/redis.js` and set `enabled = false`"))),this.section("structure",b.default.createElement("div",{__source:{fileName:h,lineNumber:172}},b.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:173}},"# ActionHero Project Layout\n\n|- config\n| -- api.js\n| -- errors.js\n| -- i18n.js\n| -- logger.js\n| -- redis.js\n| -- routes.js\n| -- tasks.js\n| -- servers\n| ---- web.js\n| ---- websocket.js\n| ---- socket.js\n|-- (project settings)\n|\n|- actions\n|-- (your actions)\n|\n|- initializers\n|-- (any additional initializers you want)\n|\n|- log\n|-- (default location for logs)\n|\n|- node_modules\n|-- (your modules, ActionHero should be npm installed in here)\n|\n|- pids\n|-- (pidfiles for your running servers)\n|\n|- public\n|-- (your static assets to be served by /file)\n|\n|- servers\n|-- (custom servers you may make)\n|\n|- tasks\n|-- (your tasks)\n|\n|- locales\n|-- (translation files)\n|\n|- tests\n|-- (tests for your API)\n|\nreadme.md\npackage.json (be sure to include 'actionhero':'x')"),b.default.createElement("p",{__source:{fileName:h,lineNumber:174}},"The map to the right describes ActionHero's default project layout."),b.default.createElement("p",{__source:{fileName:h,lineNumber:175}},"Actions in ",b.default.createElement("code",{__source:{fileName:h,lineNumber:175}},"/actions")," will be loaded in automatically, along ",b.default.createElement("code",{__source:{fileName:h,lineNumber:175}},"/initializers")," and ",b.default.createElement("code",{__source:{fileName:h,lineNumber:175}},"/tasks"),"."),b.default.createElement("p",{__source:{fileName:h,lineNumber:176}},b.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"/public")," will become your application's default static asset location."),b.default.createElement("p",{__source:{fileName:h,lineNumber:177}},"If you wish to customize your project's paths, you can do so within ",b.default.createElement("code",{__source:{fileName:h,lineNumber:177}},"config/api.js")," in the ",b.default.createElement("code",{__source:{fileName:h,lineNumber:177}},"api.config.general.paths")," section."))),this.section("tutorial",b.default.createElement("div",{__source:{fileName:h,lineNumber:182}},b.default.createElement("p",{__source:{fileName:h,lineNumber:183}},"Want to see an example application using ActionHero?  You can check out the code and follow the detailed guide ",b.default.createElement("a",{href:"https://github.com/actionhero/actionhero-tutorial",__source:{fileName:h,lineNumber:183}},"here (https://github.com/actionhero/actionhero-tutorial)"),".  This project demonstrates many of the core features of ActionHero in a simple project."))),this.section("contributing",b.default.createElement("div",{__source:{fileName:h,lineNumber:188}},b.default.createElement("p",{__source:{fileName:h,lineNumber:189}},"The www.actionherojs.com website and documentation is hosted on Heroku, and built from ",b.default.createElement("a",{href:"https://github.com/actionhero/www.actionherojs.com",__source:{fileName:h,lineNumber:189}},"this codebase"),".  You can submit pull requests to the master branch with any updates or changes."))),this.section("notes",b.default.createElement("div",{__source:{fileName:h,lineNumber:194}},b.default.createElement("p",{__source:{fileName:h,lineNumber:195}},"This documentation will always reflect the master branch of ActionHero, and therefore may be slightly ahead of the latest release on NPM."))))))}}]),t}(p.default);t.default=k}},[766]);
            return { page: comp.default }
          })
        