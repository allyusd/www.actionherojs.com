(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+i7v":function(e,t,o){"use strict";var n=o("TqRt");t.__esModule=!0,t.default=function(e,t){var o=(0,a.default)(e);if(void 0===t)return o?"pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft:e.scrollLeft;o?o.scrollTo(t,"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop):e.scrollLeft=t};var a=n(o("8Y+z"));e.exports=t.default},"/EDR":function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("23aj")}])},"23aj":function(e,t,o){"use strict";o.r(t);var n=o("0iUn"),a=o("sLSF"),s=o("MI3g"),r=o("a7VT"),i=o("Tit0"),l=o("q1tI"),c=o.n(l),u=o("XnDN"),d=o("b7Uv"),p=o("0px3"),h=o("wojb"),f=o("JSsD"),m=o("NMC4"),g=o("GZxt"),y=o("kOwS"),v=o("hi2O"),b=o("c7wz"),w=o("TSYQ"),O=o.n(w),T=o("17x9"),A=o.n(T),x=o("BO/t"),k=o.n(x),E=o("uwnE"),j={id:k()(A.a.oneOfType([A.a.string,A.a.number])),placement:A.a.oneOf(["top","right","bottom","left"]),positionTop:A.a.oneOfType([A.a.number,A.a.string]),positionLeft:A.a.oneOfType([A.a.number,A.a.string]),arrowOffsetTop:A.a.oneOfType([A.a.number,A.a.string]),arrowOffsetLeft:A.a.oneOfType([A.a.number,A.a.string]),title:A.a.node},_=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,a=t.positionLeft,s=t.arrowOffsetTop,r=t.arrowOffsetLeft,i=t.title,l=t.className,u=t.style,d=t.children,p=Object(v.a)(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"]),h=Object(E.f)(p),f=h[0],m=h[1],g=Object(y.a)({},Object(E.d)(f),((e={})[o]=!0,e)),b=Object(y.a)({display:"block",top:n,left:a},u),w={top:s,left:r};return c.a.createElement("div",Object(y.a)({},m,{role:"tooltip",className:O()(l,g),style:b}),c.a.createElement("div",{className:"arrow",style:w}),i&&c.a.createElement("h3",{className:Object(E.e)(f,"title")},i),c.a.createElement("div",{className:Object(E.e)(f,"content")},d))},t}(c.a.Component);_.propTypes=j,_.defaultProps={placement:"right"};var C=Object(E.a)("popover",_),P=o("AT/M"),S=o("p0XB"),R=o.n(S),M=o("61Rg"),L=o.n(M),N=o("i8i4"),D=o.n(N),H=(o("6DQo"),o("F6LW")),I=o.n(H),U=o("BGzO"),B=o.n(U),F=o("CLtb"),W=Object(y.a)({},I.a.propTypes,{show:A.a.bool,rootClose:A.a.bool,onHide:A.a.func,animation:A.a.oneOfType([A.a.bool,B.a]),onEnter:A.a.func,onEntering:A.a.func,onEntered:A.a.func,onExit:A.a.func,onExiting:A.a.func,onExited:A.a.func,placement:A.a.oneOf(["top","right","bottom","left"])}),q={animation:F.a,rootClose:!1,show:!1,placement:"right"},z=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){var e,t=this.props,o=t.animation,n=t.children,a=Object(v.a)(t,["animation","children"]),s=!0===o?F.a:o||null;return e=s?n:Object(l.cloneElement)(n,{className:O()(n.props.className,"in")}),c.a.createElement(I.a,Object(y.a)({},a,{transition:s}),e)},t}(c.a.Component);z.propTypes=W,z.defaultProps=q;var Y=z,G=o("Y7Jt");function K(e,t){return R()(t)?t.indexOf(e)>=0:e===t}var X=A.a.oneOf(["click","hover","focus"]),V=Object(y.a)({},Y.propTypes,{trigger:A.a.oneOfType([X,A.a.arrayOf(X)]),delay:A.a.number,delayShow:A.a.number,delayHide:A.a.number,defaultOverlayShown:A.a.bool,overlay:A.a.node.isRequired,onBlur:A.a.func,onClick:A.a.func,onFocus:A.a.func,onMouseOut:A.a.func,onMouseOver:A.a.func,target:A.a.oneOf([null]),onHide:A.a.oneOf([null]),show:A.a.oneOf([null])}),J=function(e){function t(t,o){var n;return(n=e.call(this,t,o)||this).handleToggle=n.handleToggle.bind(Object(P.a)(Object(P.a)(n))),n.handleDelayedShow=n.handleDelayedShow.bind(Object(P.a)(Object(P.a)(n))),n.handleDelayedHide=n.handleDelayedHide.bind(Object(P.a)(Object(P.a)(n))),n.handleHide=n.handleHide.bind(Object(P.a)(Object(P.a)(n))),n.handleMouseOver=function(e){return n.handleMouseOverOut(n.handleDelayedShow,e,"fromElement")},n.handleMouseOut=function(e){return n.handleMouseOverOut(n.handleDelayedHide,e,"toElement")},n._mountNode=null,n.state={show:t.defaultOverlayShown},n}Object(b.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},o.componentDidUpdate=function(){this.renderOverlay()},o.componentWillUnmount=function(){D.a.unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},o.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},o.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},o.handleHide=function(){this.hide()},o.handleMouseOverOut=function(e,t,o){var n=t.currentTarget,a=t.relatedTarget||t.nativeEvent[o];a&&a===n||L()(n,a)||e(t)},o.handleToggle=function(){this.state.show?this.hide():this.show()},o.hide=function(){this.setState({show:!1})},o.makeOverlay=function(e,t){return c.a.createElement(Y,Object(y.a)({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},o.show=function(){this.setState({show:!0})},o.renderOverlay=function(){D.a.unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},o.render=function(){var e=this.props,t=e.trigger,o=e.overlay,n=e.children,a=e.onBlur,s=e.onClick,r=e.onFocus,i=e.onMouseOut,u=e.onMouseOver,d=Object(v.a)(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete d.delay,delete d.delayShow,delete d.delayHide,delete d.defaultOverlayShown;var p=c.a.Children.only(n),h=p.props,f={};return this.state.show&&(f["aria-describedby"]=o.props.id),f.onClick=Object(G.a)(h.onClick,s),K("click",t)&&(f.onClick=Object(G.a)(f.onClick,this.handleToggle)),K("hover",t)&&(f.onMouseOver=Object(G.a)(h.onMouseOver,u,this.handleMouseOver),f.onMouseOut=Object(G.a)(h.onMouseOut,i,this.handleMouseOut)),K("focus",t)&&(f.onFocus=Object(G.a)(h.onFocus,r,this.handleDelayedShow),f.onBlur=Object(G.a)(h.onBlur,a,this.handleDelayedHide)),this._overlay=this.makeOverlay(o,d),Object(l.cloneElement)(p,f)},t}(c.a.Component);J.propTypes=V,J.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};var Q=J,Z=o("m4NA"),$=c.a.createElement,ee=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.code,o=e.title,n=$(C,{id:"popover-".concat(o),style:{maxWidth:600}},$("div",{style:{paddingTop:15,paddingLeft:10,paddingRight:10,paddingBottom:6}},$(Z.a,{language:"javascript"},t)));return $(Q,{trigger:["hover","focus","click"],placement:"top",overlay:n},$("p",null,$("strong",null,"View Sample")))}}]),t}(l.Component),te=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.code,o=e.title,n=e.colSpan;return $(p.a,{md:n||4,style:{textAlign:"center"}},$("div",{style:{paddingLeft:20,paddingRight:20,paddingBottom:30}},$("img",{style:{padding:30},src:this.props.image}),$("h2",{style:f.a.typography.h2Alt},this.props.title),$("p",{style:{lineHeight:2}},this.props.body),$("br",null),this.props.code?$(ee,{code:t,title:o}):null))}}]),t}(l.Component),oe=o("ln6h"),ne=o.n(oe),ae=o("AmLT"),se=o.n(ae),re=c.a.createElement,ie=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={latestRelease:e.latestRelease||"~",github:new se.a,org:e.org||"Actionhero",repo:e.repo||"Actionhero",error:null},o}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.awrap(this.setState({repository:this.state.github.getRepo(this.state.org,this.state.repo)}));case 2:"~"===this.state.latestRelease&&this.loadReleases();case 3:case"end":return e.stop()}}),null,this)}},{key:"loadReleases",value:function(){var e,t,o,n;return ne.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne.a.awrap(this.state.repository.listReleases());case 3:o=a.sent,n=o.data,e=n[0].tag_name,a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t=a.t0.message?"Cannot load recent releases: ".concat(a.t0.message):a.t0.toString();case 11:this.setState({error:t,latestRelease:e});case 12:case"end":return a.stop()}}),null,this,[[0,8]])}},{key:"render",value:function(){return this.state.error&&console.error("Error fetching versions: ".concat(this.state.error)),re("span",{className:"githubLatestVersion"},this.state.latestRelease)}}]),t}(l.Component);o.d(t,"default",(function(){return ye}));var le=c.a.createElement,ce="# Generate a new Project\nnpx actionhero generate\nnpm install\nnpm run build # <--- new! I compile the TS to JS\nnpm run dev # <--- new! I use `ts-node` to let you develop on your ts files without compiling\n\n# Use the actionhero CLI\n(npx) actionhero generate action --name my_action\n(npx) actionhero generate task --name my_task --queue default --frequency 0\n\n# Test\nnpm test\n# I'll run `prettier` and `build` for you first\n# I handle .ts files now!\n\n# To deploy your app\nnpm run build # <--- new! I compile the TS to JS\nnpm run start",ue="import { Action } from 'Actionhero'\n\nexport class RandomNumber extends Action {\n  constructor () {\n    super()\n    this.name = 'randomNumber'\n    this.description = 'I am an API method which will generate a random number'\n    this.outputExample = { randomNumber: 0.123 }\n  }\n\n  async run ({ response }) {\n    response.randomNumber = Math.random()\n  }\n}",de="\nimport { task, Task} from 'actionhero'\n\n  await task.enqueue(\n    \"sendWelcomeEmail\",\n    {to: 'evan@evantahler.com'},\n    'default');\n\nexport class RunAction extends Task {\n  constructor () {\n    super()\n    this.name = 'sendWelcomeEmail'\n    this.description = 'I send an email'\n    this.frequency = 0\n    this.queue = 'default'\n  }\n\n  async run (params) {\n    await api.sendEmail(params)\n  }\n}",pe="docker run -t -i --rm --publish 8080:8080 actionhero/actionhero",he="let number = Math.random()\nlet response = connection.localize(['Your random number is {{number}}', {number: number}])\nresponse.stringRandomNumber = response",fe="{\n  get: [\n    { path: '/users', action: 'usersList' },\n    { path: '/search/:term/limit/:limit/offset/:offset', action: 'search' },\n  ],\n\n  post: [\n    { path: '/login/:userID(^\\d{3}$)', action: 'login' }\n  ],\n\n  all: [\n    { path: '/user/:userID', action: 'user', matchTrailingPathParts: true }\n  ]\n}",me="//server\nawait chatRoom.broadcast(null, 'myRoom', 'Hello!')\n\n//client\nclient.on('message', (message) => alert(message))\n",ge={padding:30},ye=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return le(h.a,null,le("div",{style:{backgroundColor:f.a.colors.blue,color:f.a.colors.white}},le(u.a,{style:{paddingTop:50}},le(d.a,null,le(p.a,{md:2}),le(p.a,{md:8,style:{textAlign:"center"}},le("a",{href:"https://github.com/Actionhero/Actionhero"}," ",le("img",{src:"/static/images/logo-and-wordmark.svg"})," "),le("p",{id:"latestRelease",style:{paddingTop:20}}," ",le(ie,null)),le("h2",{style:{fontFamily:"Roboto",fontWeight:200,paddingTop:5,paddingBottom:40}}," ","The reusable, scalable, and quick node.js API server for stateless and stateful applications"," ")),le(p.a,{md:2})),le(d.a,null,le(p.a,{md:1}),le(p.a,{md:1},le("img",{src:"/static/images/cloud.svg",className:"animated-clouds-left"})),le(p.a,{md:2}),le(p.a,{md:2},le(m.a,{href:"/downloads",backgroundColor:f.a.colors.red,textColor:f.a.colors.white}," ","Download"," ")),le(p.a,{md:2},le(m.a,{href:"/get-started",backgroundColor:f.a.colors.blueGray,textColor:f.a.colors.white}," ","Get Started"," ")),le(p.a,{md:1}),le(p.a,{md:1},le("img",{style:{marginTop:30},src:"/static/images/cloud.svg",className:"animated-clouds-right"})),le(p.a,{md:1},le("img",{style:{marginTop:-30},src:"/static/images/cloud.svg"})),le(p.a,{md:1})))),le("div",{style:{height:183,background:'url("/static/images/clouds.svg") no-repeat center '.concat(f.a.colors.blue)}}),le("div",{style:{backgroundColor:f.a.colors.yellow,color:f.a.colors.blue}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:1}),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{src:"/static/images/jetpack-lady.svg",className:"animated-hover-jetpack"})),le(p.a,{md:1}),le(p.a,{md:6,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1}," To the Rescue "),le("h2",{style:f.a.typography.h2},"No matter what you are building, ",le("br",null)," Actionhero is here to save the day.")),le(p.a,{md:3})),le(d.a,null,le(te,{colSpan:3,title:"APIs",image:"/static/images/documentation.svg",body:"The actionhero framework is one of the fastest ways to get started with a REST API - Routes, Versions, Testing and Translation tool are all included."}),le(te,{colSpan:3,title:"Internet of Things",image:"/static/images/internet-of-things.svg",body:"Actionhero's small footprint and stateful server options make it ideal for IOT applications where as much logic as possible is offloaded to the server."}),le(te,{colSpan:3,title:"Real Time Chat",image:"/static/images/real-time-chat.svg",body:"Actionhero includes all the modern tools you need for a highly-available realtime applications.  Actionhero can work in a cluster to handle all the clients you can throw at it."}),le(te,{colSpan:3,title:"Games & Apps",image:"/static/images/video-game-servers.svg",body:"Actionhero was built to serve the same APIs across multiple protocols.  Do your games speak both HTTP and Websockets?  Actionhero has got you covered."})),le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("h2",{style:{fontFamily:"Roboto, sans-serif",fontWeight:400,fontSize:20,lineHeight:"1.5em",color:"#3B5D72"}},"...and a whole lot more!"))))),le("div",{style:{backgroundColor:f.a.colors.blueGray,color:"white"}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1},"Get started in seconds"),le("div",{style:{textAlign:"left"}},le(Z.a,{language:"bash"},ce)))))),le("div",{style:{backgroundColor:f.a.colors.white,color:f.a.colors.blue}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1}," Plays Well With Others "),le("h2",{style:f.a.typography.h2},"Use Actionhero around ",le("em",null," your ")," workflow and preferred tools."))),le(d.a,{className:"hidden-xs hidden-sm"},le(p.a,{md:12,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/electron.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/angular.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/swift.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/elasticsearch.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/redis.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/npm.svg"}),le("img",{style:ge,src:"/static/images/plays-well-with-others/ember.svg"}))),le(d.a,{className:"hidden-md hidden-lg hidden-xl"},le(p.a,{md:2}),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/electron.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/angular.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/swift.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/elasticsearch.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/redis.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/npm.svg"})),le(p.a,{md:2,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/plays-well-with-others/ember.svg"})),le(p.a,{md:2})),le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/flying-man.svg"}))))),le("div",{style:{backgroundColor:f.a.colors.yellow,color:f.a.colors.blue}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:3}),le(p.a,{md:6,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1}," You've Got the Power"),le("h2",{style:f.a.typography.h2},"Actionhero was built from the ground up to include all the features you expect from a modern API framework. Written in Typescript, Actionhero makes it easy to build a modern API server with ES6 features like Async/Await... and it also knows when to get out of the way so you can customize your stack to fit your needs.")),le(p.a,{md:3})),le(d.a,null,le(te,{title:"Easy-to-Use Actions",image:"/static/images/easy-to-use-actions.svg",body:"With Actionhero, you create Actions which can respond to any type of connection. They process incoming parameters and offer a response to the client. Actionhero takes care of routing and responding to each connection type for you.",code:ue}),le(te,{title:"Built-in Tasks",image:"/static/images/built-in-tasks.svg",body:"Background tasks are first-class in Actionhero. You can enqueue a task from anywhere in the application. Tasks can be recurring or single-run. The Actionhero task system is powered by Resque, so it is compatible with a number of other applications and frameworks.",code:de}),le(te,{title:"Cluster-Ready",image:"/static/images/cluster-ready.svg",body:"Actionhero uses Redis to store and share data. With first-class cache functions, decentralized communications, and distributed workers, you can be sure that your application is able to scale from 1 worker on one server, to as big of a cluster as you need.",code:pe})),le(d.a,null,le(te,{title:"Localization",image:"/static/images/localization.svg",body:"The Actionhero API makes is simple to create a traditional HTTP(S) API, but it also lets you easily extend your API to TCP and websocket clients (all included). Actionhero also easily lets you write your own servers to handle custom transports.",code:he}),le(te,{title:"Routing",image:"/static/images/routing.svg",body:"Actionhero ships with a robust router to make mapping HTTP requests to your actions a breeze.",code:fe}),le(te,{title:"API-First Development",image:"/static/images/api-first-development.svg",body:"Actionhero makes API-First development easy by enforcing a strict separation of views and application logic and removing barriers to API creation. Versioning your actions is simple and integrates well with Agile or XP team workflows."})),le(d.a,null,le(te,{title:"Chat",image:"/static/images/chat.svg",body:"The Actionhero API makes it simple to create a Actionhero (optionally) facilitates real-time communication not only from server-to-client, but also client-to-client! Actionhero's chat sub-system allows for streaming of both public and private messages between clients. Complete with middleware and extensions, you can create chat services, multi-player games, and more!",code:me}),le(te,{title:"Operations Tools",image:"/static/images/ops-tools.svg",body:"It is simple to deploy Actionhero with our included CLI tools. You can launch your server as a single instance or as part of a larger deployment cluster. Tools for 0-downtime deployments and robust monitoring and logging hooks make Actionhero a dream platform for your operations team."}),le(te,{title:"File Server",image:"/static/images/file-server.svg",body:"Every server needs to serve files to its clients (even those that don't speak HTTP), and Actionhero is no exception. Configured to asynchronously stream file contents, Actionhero provides an robust file server which can live in parallel with your API, allowing for a fully featured server."})))),le("div",{style:{backgroundColor:f.a.colors.white,color:f.a.colors.blue}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1}," ","Trusted by Top Companies and Organizations"," "),le("br",null))),le(d.a,{className:"hidden-xs hidden-sm"},le(p.a,{md:12,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/riot-games.svg"}),le("img",{style:ge,src:"/static/images/companies/samsung.svg"}),le("img",{style:ge,src:"/static/images/companies/va.svg"}),le("img",{style:ge,src:"/static/images/companies/madglory.svg"}),le("img",{style:ge,src:"/static/images/companies/taskrabbit.svg"}))),le(d.a,{className:"hidden-md hidden-lg hidden-xl"},le(p.a,{md:1}),le(p.a,{md:2,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/riot-games.svg"})),le(p.a,{md:2,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/samsung.svg"})),le(p.a,{md:1,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/va.svg"})),le(p.a,{md:2,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/madglory.svg"})),le(p.a,{md:3,style:{textAlign:"center"}},le("img",{style:ge,src:"/static/images/companies/taskrabbit.svg"})),le(p.a,{md:1})))),le(g.a,null),le("div",{style:{backgroundColor:f.a.colors.yellow,color:f.a.colors.blue,backgroundImage:'url("/static/images/starburst.png")',backgroundSize:"100% 100%"}},le(u.a,{style:f.a.padding.section},le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le("h1",{style:f.a.typography.h1}," ","Ready to become the hero your project needs?"," "))),le(d.a,null,le(p.a,{md:12,style:{textAlign:"center"}},le(m.a,{href:"/get-started",backgroundColor:f.a.colors.red,textColor:f.a.colors.white}," ","Get Started"," "))))))}}]),t}(l.Component)},"4uH0":function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t,o,s,r){var i="BODY"===s.tagName?(0,n.default)(o):(0,a.default)(o,s),c=(0,n.default)(t),u=c.height,d=c.width,p=void 0,h=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){h=i.top+(i.height-u)/2,p="left"===e?i.left-d:i.left+i.width;var g=function(e,t,o,n){var a=l(o),s=a.scroll,r=a.height,i=e-n-s,c=e+n-s+t;return i<0?-i:c>r?r-c:0}(h,u,s,r);h+=g,m=50*(1-2*g/u)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');p=i.left+(i.width-d)/2,h="top"===e?i.top-u:i.top+i.height;var y=function(e,t,o,n){var a=l(o).width,s=e-n,r=e+n+t;if(s<0)return-s;if(r>a)return a-r;return 0}(p,d,s,r);p+=y,f=50*(1-2*y/d)+"%",m=void 0}return{positionLeft:p,positionTop:h,arrowOffsetLeft:f,arrowOffsetTop:m}};var n=i(o("A63a")),a=i(o("fpU1")),s=i(o("ZfQF")),r=i(o("z9HI"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,o=void 0,a=void 0;if("BODY"===e.tagName)t=window.innerWidth,o=window.innerHeight,a=(0,s.default)((0,r.default)(e).documentElement)||(0,s.default)(e);else{var i=(0,n.default)(e);t=i.width,o=i.height,a=(0,s.default)(e)}return{width:t,height:o,scroll:a}}e.exports=t.default},"5UKA":function(e,t,o){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=h(o("TSYQ")),s=h(o("17x9")),r=h(o("neHb")),i=o("q1tI"),l=h(i),c=h(o("i8i4")),u=h(o("4uH0")),d=h(o("eF//")),p=h(o("z9HI"));function h(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}var m=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,o,n));return a.getTarget=function(){var e=a.props.target,t="function"===typeof e?e():e;return t&&c.default.findDOMNode(t)||null},a.maybeUpdatePosition=function(e){var t=a.getTarget();(a.props.shouldUpdatePosition||t!==a._lastTarget||e)&&a.updatePosition(t)},a.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},a._needsFlush=!1,a._lastTarget=null,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.UNSAFE_componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,o=e.className,s=f(e,["children","className"]),r=this.state,c=r.positionLeft,u=r.positionTop,d=f(r,["positionLeft","positionTop"]);delete s.target,delete s.container,delete s.containerPadding,delete s.shouldUpdatePosition;var p=l.default.Children.only(t);return(0,i.cloneElement)(p,n({},s,d,{positionLeft:c,positionTop:u,className:(0,a.default)(o,p.props.className),style:n({},p.props.style,{left:c,top:u})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),o=(0,d.default)(this.props.container,(0,p.default)(this).body);this.setState((0,u.default)(this.props.placement,t,e,o,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:s.default.oneOfType([r.default,s.default.func]),container:s.default.oneOfType([r.default,s.default.func]),containerPadding:s.default.number,placement:s.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:s.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},A63a:function(e,t,o){"use strict";var n=o("TqRt");t.__esModule=!0,t.default=function(e){var t=(0,r.default)(e),o=(0,s.default)(t),n=t&&t.documentElement,i={top:0,left:0,height:0,width:0};if(!t)return;if(!(0,a.default)(n,e))return i;void 0!==e.getBoundingClientRect&&(i=e.getBoundingClientRect());return i={top:i.top+(o.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(o.pageXOffset||n.scrollLeft)-(n.clientLeft||0),width:(null==i.width?e.offsetWidth:i.width)||0,height:(null==i.height?e.offsetHeight:i.height)||0}};var a=n(o("61Rg")),s=n(o("8Y+z")),r=n(o("o43f"));e.exports=t.default},AXck:function(e,t,o){"use strict";var n=o("TqRt");t.__esModule=!0,t.default=function(e){var t=(0,a.default)(e),o=e&&e.offsetParent;for(;o&&"html"!==r(e)&&"static"===(0,s.default)(o,"position");)o=o.offsetParent;return o||t.documentElement};var a=n(o("o43f")),s=n(o("sKrG"));function r(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},"BO/t":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o,n,a,s){var r=n||"<<anonymous>>",i=s||o;if(null==t[o])return new Error("The "+a+" `"+i+"` is required to make `"+r+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),u=5;u<l;u++)c[u-5]=arguments[u];return e.apply(void 0,[t,o,n,a,s].concat(c))}},e.exports=t.default},F6LW:function(e,t,o){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=u(o("17x9")),s=u(o("BGzO")),r=u(o("q1tI")),i=u(o("I/DW")),l=u(o("5UKA")),c=u(o("wewx"));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,o,n));return a.handleHidden=function(){var e;(a.setState({exited:!0}),a.props.onExited)&&(e=a.props).onExited.apply(e,arguments)},a.state={exited:!o.show},a.onHiddenListener=a.handleHidden.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,o=e.containerPadding,n=e.target,a=e.placement,s=e.shouldUpdatePosition,u=e.rootClose,d=e.children,p=e.transition,h=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(h.show||p&&!this.state.exited))return null;var f=d;if(f=r.default.createElement(l.default,{container:t,containerPadding:o,target:n,placement:a,shouldUpdatePosition:s},f),p){var m=h.onExit,g=h.onExiting,y=h.onEnter,v=h.onEntering,b=h.onEntered;f=r.default.createElement(p,{in:h.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:y,onEntering:v,onEntered:b},f)}return u&&(f=r.default.createElement(c.default,{onRootClose:h.onHide,event:h.rootCloseEvent},f)),r.default.createElement(i.default,{container:t},f)},t}(r.default.Component);d.propTypes=n({},i.default.propTypes,l.default.propTypes,{show:a.default.bool,rootClose:a.default.bool,rootCloseEvent:c.default.propTypes.event,onHide:function(e){var t=a.default.func;e.rootClose&&(t=t.isRequired);for(var o=arguments.length,n=Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];return t.apply(void 0,[e].concat(n))},transition:s.default,onEnter:a.default.func,onEntering:a.default.func,onEntered:a.default.func,onExit:a.default.func,onExiting:a.default.func,onExited:a.default.func}),t.default=d,e.exports=t.default},ZfQF:function(e,t,o){"use strict";var n=o("TqRt");t.__esModule=!0,t.default=function(e,t){var o=(0,a.default)(e);if(void 0===t)return o?"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop:e.scrollTop;o?o.scrollTo("pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft,t):e.scrollTop=t};var a=n(o("8Y+z"));e.exports=t.default},fpU1:function(e,t,o){"use strict";var n=o("TqRt");t.__esModule=!0,t.default=function(e,t){var o,n={top:0,left:0};"fixed"===(0,c.default)(e,"position")?o=e.getBoundingClientRect():(t=t||(0,r.default)(e),o=(0,s.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(n=(0,s.default)(t)),n.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,i.default)(t)||0,n.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0);return(0,a.default)({},o,{top:o.top-n.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:o.left-n.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var a=n(o("pVnL")),s=n(o("A63a")),r=n(o("AXck")),i=n(o("ZfQF")),l=n(o("+i7v")),c=n(o("sKrG"));e.exports=t.default},p0XB:function(e,t,o){e.exports=o("9BDd")},wewx:function(e,t,o){"use strict";t.__esModule=!0;var n=c(o("61Rg")),a=c(o("17x9")),s=c(o("q1tI")),r=c(o("i8i4")),i=c(o("T9VG")),l=c(o("z9HI"));function c(e){return e&&e.__esModule?e:{default:e}}var u=27;var d=function(e){function t(o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,o,a));return s.addEventListeners=function(){var e=s.props.event,t=(0,l.default)(s);s.documentMouseCaptureListener=(0,i.default)(t,e,s.handleMouseCapture,!0),s.documentMouseListener=(0,i.default)(t,e,s.handleMouse),s.documentKeyupListener=(0,i.default)(t,"keyup",s.handleKeyUp)},s.removeEventListeners=function(){s.documentMouseCaptureListener&&s.documentMouseCaptureListener.remove(),s.documentMouseListener&&s.documentMouseListener.remove(),s.documentKeyupListener&&s.documentKeyupListener.remove()},s.handleMouseCapture=function(e){var t;s.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,n.default)(r.default.findDOMNode(s),e.target)},s.handleMouse=function(e){!s.preventMouseRootClose&&s.props.onRootClose&&s.props.onRootClose(e)},s.handleKeyUp=function(e){e.keyCode===u&&s.props.onRootClose&&s.props.onRootClose(e)},s.preventMouseRootClose=!1,s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(s.default.Component);d.displayName="RootCloseWrapper",d.propTypes={onRootClose:a.default.func,children:a.default.element,disabled:a.default.bool,event:a.default.oneOf(["click","mousedown"])},d.defaultProps={event:"click"},t.default=d,e.exports=t.default}},[["/EDR",1,2,0,3,5,6]]]);