(this.webpackJsonpsampletodo=this.webpackJsonpsampletodo||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(12),l=a.n(i),s=(a(20),a(2)),d=a(3),c=a(5),r=a(4),h=a(1),u=a(6),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={newTitle:""},a.handleUserInput=a.handleUserInput.bind(Object(h.a)(a)),a.writeTodo=a.writeTodo.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleUserInput",value:function(e){this.setState({newTitle:e.target.value})}},{key:"writeTodo",value:function(e){var t=e.keyCode||e.which,a=this.state.newTitle;13===t&&0!==a.replace(/\s*/,"").length&&(this.props.addTodo(this.state.newTitle),this.setState({newTitle:""}))}},{key:"render",value:function(){return o.createElement("header",{className:"header"},o.createElement("h1",null,"Todos"),o.createElement("input",{className:"new-todo",placeholder:"What needs to be done? ",value:this.state.newTitle,onChange:this.handleUserInput,onKeyPress:this.writeTodo}))}}]),t}(o.Component),m=a(13),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={editing:!1,updatedTitle:""},a.handleToggleTodo=a.handleToggleTodo.bind(Object(h.a)(a)),a.handleStartEditing=a.handleStartEditing.bind(Object(h.a)(a)),a.handleRemoveTodo=a.handleRemoveTodo.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleToggleTodo",value:function(e){this.props.toggleTodo(e)}},{key:"handleRemoveTodo",value:function(e){this.props.removeTodo(e)}},{key:"handleStartEditing",value:function(e){this.setState({editing:!0,updatedTitle:this.props.task.title})}},{key:"handleSubmit",value:function(){this.props.updateTodo(this.props.task,this.state.updatedTitle),this.setState({editing:!1})}},{key:"handleKeyDown",value:function(e){"Escape"===e.key?this.setState({editing:!1}):"Enter"===e.key&&this.handleSubmit()}},{key:"handleInput",value:function(e){this.setState({updatedTitle:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.editing,o=t.updatedTitle;return n.a.createElement("li",{className:m({completed:this.props.task.isCompleted,editing:a})},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",onChange:function(){return e.handleToggleTodo(e.props.task)},checked:this.props.task.isCompleted}),n.a.createElement("label",{onDoubleClick:this.handleStartEditing},this.props.task.title),n.a.createElement("button",{className:"destroy",onClick:function(){return e.handleRemoveTodo(e.props.task.id)}})),n.a.createElement("input",{className:"edit",value:o,onBlur:this.handleSubmit,onKeyDown:this.handleKeyDown,onChange:this.handleInput,type:"text"}))}}]),t}(o.Component),g=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(r.a)(t).call(this,e))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.createElement("footer",{className:"footer"},this.props.activeCount>0&&o.createElement("span",{className:"todo-count"},o.createElement("strong",null,this.props.activeCount)," item",this.props.activeCount>1&&"s"," left"),o.createElement("ul",{className:"filters"},o.createElement("li",null,o.createElement("a",{href:"#/",onClick:this.props.updateShow.bind(this,"all")},"All")),o.createElement("li",null,o.createElement("a",{href:"#/active",onClick:this.props.updateShow.bind(this,"active")},"Active")),o.createElement("li",null,o.createElement("a",{href:"#/completed",onClick:this.props.updateShow.bind(this,"completed")},"Completed"))),this.props.completedCount>0&&o.createElement("button",{className:"clear-completed",onClick:this.props.clearCompleted},"Clear completed"))}}]),t}(o.Component),v={apiKey:"AIzaSyBtDsx3WlNGf6dNwyLO3OeO94L-x5Nuyvs",authDomain:"todofirebasee.firebaseapp.com",databaseURL:"https://todofirebasee.firebaseio.com",projectId:"todofirebasee",storageBucket:"todofirebasee.appspot.com",messagingSenderId:"713167394611",appId:"1:713167394611:web:fc7d1689c8be397cc25046",measurementId:"G-6T3FMEC827"},f=a(14),T=a.n(f),k=(a(22),a(25),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).addTodo=a.addTodo.bind(Object(h.a)(a)),a.updateFilter=a.updateFilter.bind(Object(h.a)(a)),a.removeTodo=a.removeTodo.bind(Object(h.a)(a)),a.toggleAll=a.toggleAll.bind(Object(h.a)(a)),a.toggleTodo=a.toggleTodo.bind(Object(h.a)(a)),a.updateTodo=a.updateTodo.bind(Object(h.a)(a)),a.clearCompleted=a.clearCompleted.bind(Object(h.a)(a)),a.updateShow=a.updateShow.bind(Object(h.a)(a)),a.app=T.a.initializeApp(v),a.database=a.app.database().ref().child("todos"),a.state={todos:[],toggle:!1,filter:"all"},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=[];this.database.on("value",(function(a){a.forEach((function(e){var a={id:e.key,title:e.val().title,isCompleted:e.val().isCompleted};t.push(a)})),e.setState({todos:t}),t=[]}))}},{key:"addTodo",value:function(e){var t={title:e,isCompleted:!1};this.database.push(t)}},{key:"removeTodo",value:function(e){this.database.child(e).remove()}},{key:"toggleAll",value:function(){var e=this;this.state.todos.map((function(t){if(t.isCompleted===e.state.toggle){var a={id:t.id,title:t.title,isCompleted:!e.state.toggle};e.database.child(t.id).update(a)}e.setState({toggle:!e.state.toggle})}))}},{key:"toggleTodo",value:function(e){var t={id:e.id,title:e.title,isCompleted:!e.isCompleted};this.database.child(e.id).update(t)}},{key:"updateTodo",value:function(e,t){var a={id:e.id,title:t,isCompleted:e.isCompleted};this.database.child(e.id).update(a)}},{key:"clearCompleted",value:function(){var e=this;this.state.todos.map((function(t){t.isCompleted&&e.database.child(t.id).remove()}))}},{key:"updateShow",value:function(e){this.setState({filter:e})}},{key:"updateFilter",value:function(){var e=[];return"all"===this.state.filter?this.state.todos:"active"===this.state.filter?(this.state.todos.map((function(t){t.isCompleted||e.push(t)})),e):"completed"===this.state.filter?(this.state.todos.map((function(t){t.isCompleted&&e.push(t)})),e):void 0}},{key:"render",value:function(){var e=this,t=this.state.todos,a=0;this.state.todos.forEach((function(e){e.isCompleted&&a++}));var o=this.state.todos.length-a,i=this.state.todos.length;return n.a.createElement("section",{className:"todoform"},n.a.createElement(p,{addTodo:this.addTodo}),n.a.createElement("section",{className:"main"},t.length>0&&n.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:0===o,onChange:this.toggleAll}),n.a.createElement("label",{htmlFor:"toggle-all"}),n.a.createElement("ul",{className:"todo"},this.updateFilter().map((function(t){return n.a.createElement(b,{key:t.id,task:t,removeTodo:e.removeTodo,toggleTodo:e.toggleTodo,updateTodo:e.updateTodo})})))),i>0&&n.a.createElement(g,{activeCount:o,updateShow:this.updateShow,completedCount:a,clearCompleted:this.clearCompleted}))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f7308bf8.chunk.js.map