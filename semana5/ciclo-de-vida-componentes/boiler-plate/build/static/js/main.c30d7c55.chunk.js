(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(25)},19:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),o=a(10),l=a(1),c=a(2);a(19);function u(){const t=Object(l.a)(["\n  margin-left: 100px;\n"]);return u=function(){return t},t}function p(){const t=Object(l.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n"]);return p=function(){return t},t}function f(){const t=Object(l.a)(["\n  text-align: left;\n  text-decoration: ",";\n"]);return f=function(){return t},t}function m(){const t=Object(l.a)(["\n  padding: 0;\n  width: 200px;\n"]);return m=function(){return t},t}const h=c.a.ul(m()),d=c.a.li(f(),({completa:t})=>t?"line-through":"none"),g=c.a.div(p());c.a.button(u());var E=class extends r.a.Component{constructor(...t){super(...t),this.state={tarefas:[],inputValue:"",filter:""},this.onChangeInput=(t=>{this.setState({inputValue:t.target.value})}),this.criaTarefa=(()=>{const t={id:Date.now(),texto:this.state.inputValue,completa:!1},e=[...this.state.tarefas,t];this.setState({tarefas:e})}),this.apagaTarefa=(()=>{this.setState({tarefas:[]})}),this.selectTarefa=(t=>{const e=this.state.tarefas.map(e=>t===e.id?Object(o.a)({},e,{completa:!e.completa}):e);this.setState({tarefas:e})}),this.removeTarefa=(t=>{const e=this.state.tarefas.filter(e=>t!==e.id);this.setState({tarefas:e})}),this.onChangeFilter=(t=>{this.setState({filter:t.target.value})})}componentDidUpdate(){const t=this.state;localStorage.getItem("tarefas",JSON.stringify(t))}componentDidMount(){const t=localStorage.getItem("tarefa");JSON.parse(t)}render(){const t=this.state.tarefas.filter(t=>{switch(this.state.filter){case"pendentes":return!t.completa;case"completas":return t.completa;default:return!0}});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Lista de tarefas"),r.a.createElement(g,null,r.a.createElement("input",{value:this.state.inputValue,onChange:this.onChangeInput}),r.a.createElement("button",{onClick:this.criaTarefa},"Adicionar"),r.a.createElement("button",{onClick:this.apagaTarefa},"Apagar Tarefas")),r.a.createElement("br",null),r.a.createElement(g,null,r.a.createElement("label",null,"Filtro"),r.a.createElement("select",{value:this.state.filter,onChange:this.onChangeFilter},r.a.createElement("option",{value:""},"Nenhum"),r.a.createElement("option",{value:"pendentes"},"Pendentes"),r.a.createElement("option",{value:"completas"},"Completas"))),r.a.createElement(h,null,t.map(t=>r.a.createElement(d,{completa:t.completa,onClick:()=>this.selectTarefa(t.id),onDoubleClick:()=>this.removeTarefa(t.id)},t.texto))))}};const b=document.getElementById("root");i.a.render(r.a.createElement(E,null),b)}},[[13,1,2]]]);
//# sourceMappingURL=main.c30d7c55.chunk.js.map