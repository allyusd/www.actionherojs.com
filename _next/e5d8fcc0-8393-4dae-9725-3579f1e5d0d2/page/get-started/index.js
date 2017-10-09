
          window.__NEXT_REGISTER_PAGE('/get-started', function() {
            var comp = module.exports=webpackJsonp([7],{164:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(63),r=i(a),o=n(9),l=i(o),s=n(1),c=i(s),u=n(8),m=i(u),d=n(2),f=i(d),h=n(3),_=i(h),N=n(0),b=i(N),p=n(95),g=i(p),E=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,m.default)(t,[{key:"waypointEnter",value:function(e,t){var n=t.previousPosition;t.currentPosition;this.state.currentlyVisableSections||(this.state.currentlyVisableSections=[]),this.state.currentlyVisableSections.indexOf(e)<0&&("below"!==n&&n||this.state.currentlyVisableSections.push(e),"above"===n&&(this.state.currentlyVisableSections=[e].concat(this.state.currentlyVisableSections))),this.highlightSection()}},{key:"waypointExit",value:function(e,t){t.previousPosition,t.currentPosition;this.state.currentlyVisableSections.indexOf(e>=0)&&this.state.currentlyVisableSections.splice(this.state.currentlyVisableSections.indexOf(e),1),this.highlightSection()}},{key:"highlightSection",value:function(){for(var e=(0,r.default)(this.state.sections),t=0,n=void 0;t<e.length;){if(n=e[t],this.state.currentlyVisableSections.indexOf(n)>=0)return this.setState({currentSection:n});t++}}},{key:"section",value:function(e,t){var n=this.state.sections[e];return b.default.createElement(g.default,{waypointEnter:this.waypointEnter,waypointExit:this.waypointExit,currentSection:this.state.currentSection,id:e,parent:this,title:n,__source:{fileName:"/home/ubuntu/www.actionherojs.com/pageClasses/docsPageWithSideNav.js",lineNumber:46}},t)}}]),t}(b.default.Component);t.default=E},675:function(e,t,n){e.exports=n(676)},676:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),r=i(a),o=n(1),l=i(o),s=n(8),c=i(s),u=n(2),m=i(u),d=n(3),f=i(d),h="/home/ubuntu/www.actionherojs.com/pages/get-started.js?entry",_=n(0),N=i(_),b=n(164),p=i(b),g=n(17),E=n(92),w=i(E),y=n(163),v=i(y),k=function(e){function t(e){(0,l.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={titleSection:{title:"Let's get Started",icon:"/static/images/get-started.svg"},sections:{who:"Who is the ActionHero?","getting-started":"Getting Started",quickstart:"Install and Quickstart",structure:"Application Structure",tutorial:"Tutorial",contributing:"Contributing",notes:"Documentation Notes"},links:[{link:"https://docs.actionherojs.com",title:"» ActionHero Documentation"}]},n}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return N.default.createElement(w.default,{sideNav:this.state.sections,titleSection:this.state.titleSection,links:this.state.links,currentSection:this.state.currentSection,showSolutions:!0,__source:{fileName:h,lineNumber:124}},N.default.createElement(g.Row,{__source:{fileName:h,lineNumber:125}},N.default.createElement(g.Col,{md:12,__source:{fileName:h,lineNumber:126}},this.section("who",N.default.createElement("div",{__source:{fileName:h,lineNumber:128}},N.default.createElement("p",{__source:{fileName:h,lineNumber:129}},"ActionHero is a ",N.default.createElement("a",{href:"http://nodejs.org",__source:{fileName:h,lineNumber:129}},"node.js")," ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"API framework")," for both ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"tcp sockets"),", ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"web sockets"),", and ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"http clients"),".  The goal of ActionHero is to create an easy-to-use toolkit for making ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"reusable")," & ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"scalable")," APIs.  Clients connected to an ActionHero server can ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"consume the API"),", ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"consume static content"),", and ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:129}},"communicate with each other"),"."),N.default.createElement("p",{__source:{fileName:h,lineNumber:130}},"ActionHero servers can process both requests and tasks (delayed actions like `send e-mail` or other background jobs).  ActionHero servers can also run in a cluster (on the same or multiple machines) to work in concert to handle your load."),N.default.createElement("p",{__source:{fileName:h,lineNumber:131}},"The ActionHero API defines a single access point and accepts GET, POST, PUT and DELETE input along with persistent connection via TCP or web sockets. You define ",N.default.createElement("strong",{__source:{fileName:h,lineNumber:131}},"Actions")," which handle input and response, such as `userAdd` or `geoLocate`. HTTP, HTTPS, and TCP clients can all use these actions.  The ActionHero API is not inherently 'RESTful' (which is meaningless for persistent socket connections) but can be extended to be so if you wish."),N.default.createElement("p",{__source:{fileName:h,lineNumber:132}},"ActionHero will also serve static files for you, but ActionHero is not a 'rendering' server (like express or rails)."),N.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:134}},"> npm start\n\n> actionhero@12.2.2 start /app/actionhero\n> node ./bin/actionhero\n\ninfo: actionhero >> start\n2015-11-14 16:01:27 - notice: *** starting actionhero ***\n2015-11-14 16:01:27 - info: actionhero member 10.0.1.15 has joined the cluster\n2015-11-14 16:01:27 - notice: pid: 36087\n2015-11-14 16:01:27 - notice: server ID: 10.0.1.15\n2015-11-14 16:01:27 - info: ensuring the existence of the chatRoom: defaultRoom\n2015-11-14 16:01:27 - info: ensuring the existence of the chatRoom: anotherRoom\n2015-11-14 16:01:27 - notice: starting server: web\n2015-11-14 16:01:27 - notice: starting server: websocket\n2015-11-14 16:01:28 - notice: environment: development\n2015-11-14 16:01:28 - notice: *** Server Started @ 2015-11-14 16:01:28 ***\n"))),this.section("getting-started",N.default.createElement("div",{__source:{fileName:h,lineNumber:139}},N.default.createElement("h3",{id:"requirements",__source:{fileName:h,lineNumber:140}},"Requirements"),N.default.createElement("ul",{__source:{fileName:h,lineNumber:142}},N.default.createElement("li",{__source:{fileName:h,lineNumber:143}},"node.js ( >= v4.0.0)"),N.default.createElement("li",{__source:{fileName:h,lineNumber:144}},"npm"),N.default.createElement("li",{__source:{fileName:h,lineNumber:145}},"redis (for cluster support, cache, stats, and tasks); but not required.")),N.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:148}},"# On OSX With Homebrew:\n\nbrew install node\nbrew install redis\n\n# On Ubuntu:\n\n(sudo) apt-get install node\n(sudo) apt-get install redis-server\n\n# On Windows:\n\n[download nodeJS](https://nodejs.org/en/download)\n[download redis](https://github.com/MSOpenTech/redis)\n"))),this.section("quickstart",N.default.createElement("div",{__source:{fileName:h,lineNumber:153}},N.default.createElement("p",{__source:{fileName:h,lineNumber:154}},"Get started now:"),N.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:155}},"mkdir ~/project && cd ~/project\nnpm install actionhero\nnpx actionhero generate\nnpm install\nnpm start"),N.default.createElement("ul",{__source:{fileName:h,lineNumber:157}},N.default.createElement("li",{__source:{fileName:h,lineNumber:158}},"Create a new directory ",N.default.createElement("code",{__source:{fileName:h,lineNumber:158}},"mkdir ~/project && cd ~/project")),N.default.createElement("li",{__source:{fileName:h,lineNumber:159}},"Checkout the ActionHero source ",N.default.createElement("code",{__source:{fileName:h,lineNumber:159}},"npm install actionhero")),N.default.createElement("li",{__source:{fileName:h,lineNumber:160}},"Use the generator to create a template project ",N.default.createElement("code",{__source:{fileName:h,lineNumber:160}},"npx actionhero generate")),N.default.createElement("li",{__source:{fileName:h,lineNumber:161}},N.default.createElement("code",{__source:{fileName:h,lineNumber:161}},"npm install")," to install dependencies"),N.default.createElement("li",{__source:{fileName:h,lineNumber:162}},"You can now start up the server: ",N.default.createElement("code",{__source:{fileName:h,lineNumber:162}},"npm start"))),N.default.createElement("p",{__source:{fileName:h,lineNumber:165}},"Visit ",N.default.createElement("code",{__source:{fileName:h,lineNumber:165}},"http://127.0.0.1:8080")," in your browser to see the ActionHero in action!"),N.default.createElement("p",{__source:{fileName:h,lineNumber:166}},"You can also opt to install ActionHero globally ",N.default.createElement("code",{__source:{fileName:h,lineNumber:166}},"npm install actionhero -g")," and then you can just call ",N.default.createElement("code",{__source:{fileName:h,lineNumber:166}},"actionhero start"),"."))),this.section("structure",N.default.createElement("div",{__source:{fileName:h,lineNumber:171}},N.default.createElement(v.default,{language:"bash",__source:{fileName:h,lineNumber:172}},"# ActionHero Project Layout\n\n|- config\n| -- api.js\n| -- errors.js\n| -- i18n.js\n| -- logger.js\n| -- redis.js\n| -- routes.js\n| -- tasks.js\n| -- servers\n| ---- web.js\n| ---- websocket.js\n| ---- socket.js\n|-- (project settings)\n|\n|- actions\n|-- (your actions)\n|\n|- initializers\n|-- (any additional initializers you want)\n|\n|- log\n|-- (default location for logs)\n|\n|- node_modules\n|-- (your modules, ActionHero should be npm installed in here)\n|\n|- pids\n|-- (pidfiles for your running servers)\n|\n|- public\n|-- (your static assets to be served by /file)\n|\n|- servers\n|-- (custom servers you may make)\n|\n|- tasks\n|-- (your tasks)\n|\n|- locales\n|-- (translation files)\n|\n|- tests\n|-- (tests for your API)\n|\nreadme.md\npackage.json (be sure to include 'actionhero':'x')"),N.default.createElement("p",{__source:{fileName:h,lineNumber:173}},"The map to the right describes ActionHero's default project layout."),N.default.createElement("p",{__source:{fileName:h,lineNumber:174}},"Actions in ",N.default.createElement("code",{__source:{fileName:h,lineNumber:174}},"/actions")," will be loaded in automatically, along ",N.default.createElement("code",{__source:{fileName:h,lineNumber:174}},"/initializers")," and ",N.default.createElement("code",{__source:{fileName:h,lineNumber:174}},"/tasks"),"."),N.default.createElement("p",{__source:{fileName:h,lineNumber:175}},N.default.createElement("code",{__source:{fileName:h,lineNumber:175}},"/public")," will become your application's default static asset location."),N.default.createElement("p",{__source:{fileName:h,lineNumber:176}},"If you wish to customize your project's paths, you can do so within ",N.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"config/api.js")," in the ",N.default.createElement("code",{__source:{fileName:h,lineNumber:176}},"api.config.general.paths")," section."))),this.section("tutorial",N.default.createElement("div",{__source:{fileName:h,lineNumber:181}},N.default.createElement("p",{__source:{fileName:h,lineNumber:182}},"Want to see an example application using ActionHero?  You can check out the code and follow the detailed guide ",N.default.createElement("a",{href:"https://github.com/actionhero/actionhero-tutorial",__source:{fileName:h,lineNumber:182}},"here (https://github.com/actionhero/actionhero-tutorial)"),".  This project demonstrates many of the core features of ActionHero in a simple project."))),this.section("contributing",N.default.createElement("div",{__source:{fileName:h,lineNumber:187}},N.default.createElement("p",{__source:{fileName:h,lineNumber:188}},"The www.actionherojs.com website and documentation is hosted on Heroku, and built from ",N.default.createElement("a",{href:"https://github.com/actionhero/www.actionherojs.com",__source:{fileName:h,lineNumber:188}},"this codebase"),".  You can submit pull requests to the master branch with any updates or changes."))),this.section("notes",N.default.createElement("div",{__source:{fileName:h,lineNumber:193}},N.default.createElement("p",{__source:{fileName:h,lineNumber:194}},"This documentation will always reflect the master branch of ActionHero, and therefore may be slightly ahead of the latest release on NPM."))))))}}]),t}(p.default);t.default=k}},[675]);
            return { page: comp.default }
          })
        