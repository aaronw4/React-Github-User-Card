(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(13),a(1)),s=a(2),i=a(4),u=a(3),h=a(5),m=function(e){var t="http://ghchart.rshah.org/".concat(e.data.login);return o.a.createElement("div",{className:"calendar"},o.a.createElement("img",{src:t,alt:e.login}))},f=function(e){var t="https://github.com/".concat(e.data.login,"?tab=repositories");return o.a.createElement("div",null,o.a.createElement("div",{className:"profile"},o.a.createElement("h2",null,e.data.name),o.a.createElement("h4",null,e.data.location),o.a.createElement("img",{src:e.data.avatar_url,alt:e.data.name}),o.a.createElement("p",null,e.data.bio),o.a.createElement("p",null,o.a.createElement("span",null,"Followers: ",e.data.followers)," ",o.a.createElement("span",null,"Following: ",e.data.following)),o.a.createElement("p",null,"Number of public repositories: ",e.data.public_repos),o.a.createElement("a",{href:t},"Link to repositories")),o.a.createElement(m,{data:e.data}))},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(e){console.log(e.target.value),a.props.changeUser(e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"followersList"},o.a.createElement("h2",null,"Followers"),this.props.followers.map((function(t){return console.log(t.login),o.a.createElement("div",{key:t.login,className:"followers"},o.a.createElement("img",{src:t.avatar_url,alt:t.name,className:"followerImg"}),o.a.createElement("p",{className:"followerLogin"},t.login),o.a.createElement("button",{className:"viewProfile",onClick:e.handleClick,value:t.login},"View Profile"))})))}}]),t}(o.a.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChanges=function(e){a.setState({searchText:e.target.value}),""===a.state.searchText&&a.setState({search:[]})},a.handleSubmit=function(e){e.preventDefault(),a.setState({user:a.state.searchText})},a.handleClick=function(e){a.props.changeUser(e.target.value),a.setState({searchText:"",search:[]})},a.state={search:[],searchText:"",user:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.user!==t.user&&fetch("https://api.github.com/search/users?q=".concat(this.state.user)).then((function(e){return e.json()})).then((function(e){console.log(e.items),a.setState({search:e.items})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{onChange:this.handleChanges,type:"text",name:"search",value:this.state.searchText,className:"search",placeholder:"Search Users"}),o.a.createElement("button",{onClick:this.handleSubmit},"Submit")),""!==this.state.searchText?this.state.search.map((function(t){return o.a.createElement("div",{key:t.login},o.a.createElement("button",{className:"user",onClick:e.handleClick,value:t.login},t.login))})):null)}}]),t}(o.a.Component),d=(a(14),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:{},followers:[],user:"aaronw4"},a.changeUser=function(e){a.setState({user:e})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/".concat(this.state.user)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"componentWillMount",value:function(){var e=this;fetch("https://api.github.com/users/".concat(this.state.user,"/followers")).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({followers:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.user!==t.user&&(fetch("https://api.github.com/users/".concat(this.state.user)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e})})).catch((function(e){return console.log(e)})),fetch("https://api.github.com/users/".concat(this.state.user,"/followers")).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({followers:e})})).catch((function(e){return console.log(e)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{data:this.state.data}),o.a.createElement(p,{followers:this.state.followers,changeUser:this.changeUser}),o.a.createElement(g,{changeUser:this.changeUser}))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.24193b69.chunk.js.map