(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),i=a(5),b=a(7),l=a(6),o=a(1),r=a.n(o),d=(a(12),a(13),a(0)),u=function(t){var e=t.tabs,a=t.selectedTab,n=t.onTabSelected;return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("ul",{className:"tabs-list",children:e.map((function(t){return Object(d.jsx)("li",{className:"tabs-list__item",children:Object(d.jsx)("button",{value:t.id,type:"button",className:"tabs-list__button",onClick:function(){return n(t)},children:t.title})},t.id)}))}),Object(d.jsx)("div",{className:"tabs-content",children:a.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:j[0]},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Selected tab is ".concat(this.state.selectedTab.title)}),Object(d.jsx)(u,{tabs:j,onTabSelected:this.onTabSelected,selectedTab:this.state.selectedTab})]})}}]),a}(r.a.Component),m=h;c.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.62044446.chunk.js.map