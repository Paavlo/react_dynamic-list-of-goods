(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"getAll",(function(){return f})),n.d(a,"get5First",(function(){return b})),n.d(a,"getRedGoods",(function(){return m}));var r=n(0),o=n.n(r),c=n(7),l=n.n(c),u=n(1),i=n(2),s=n(4),d=n(3);n(13);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){return f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},m=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=n(5),p=n.n(h),v=(n(14),function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={index:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.index,n=this.props,a=n.tabSelected,r=n.API;return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"tabs"},o.a.createElement("button",{"data-index":"1",className:p()("tabs__button",{" tabs__button-selected":1===e}),type:"button",onClick:function(e){t.setState({index:1}),a(r.getAll)}},"Show All"),o.a.createElement("button",{className:p()("tabs__button",{" tabs__button-selected":2===e}),type:"button",onClick:function(e){t.setState({index:2}),a(r.get5First)}},"Show All"),o.a.createElement("button",{className:p()("tabs__button",{" tabs__button-selected":3===e}),type:"button",onClick:function(e){t.setState({index:3}),a(r.getRedGoods)}},"Show All")))}}]),n}(o.a.Component));function y(t){var e=t.data;return o.a.createElement("div",{className:"tab"},o.a.createElement("ul",null,e.map((function(t){return o.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)}))))}var g=function(t){Object(s.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={data:[]},t.tabSelected=function(e){e().then((function(e){return t.setState({data:e})}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.data;return o.a.createElement("div",null,o.a.createElement("h1",null,"Dynamic list of Goods"),o.a.createElement(v,{tabSelected:this.tabSelected,API:a}),o.a.createElement(y,{data:t}))}}]),n}(o.a.Component);l.a.render(o.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e68e7334.chunk.js.map