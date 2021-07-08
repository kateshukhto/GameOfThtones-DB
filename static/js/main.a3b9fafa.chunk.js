(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(68)},50:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),o=n(4),s=n(5),i=n(7),u=n(6),m=n(8),d=n(71),f=n(69),h=n(70),p=n(21),g=n(22),v=n(16);function b(){var e=Object(p.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return b=function(){return e},e}function E(){var e=Object(p.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return E=function(){return e},e}function j(){var e=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return j=function(){return e},e}var O=g.a.div(j()),y=g.a.h3(E()),S=g.a.ul(b()),k=function(){return r.a.createElement(O,null,r.a.createElement(y,null,r.a.createElement(v.b,{to:"/"},"Game of Thrones DB")),r.a.createElement(S,null,r.a.createElement("li",null,r.a.createElement(v.b,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/books/"},"Books"))))},w=(n(50),n(9)),I=n.n(w),C=n(14),x=function(){function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(C.a)(I.a.mark(function e(n){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(C.a)(I.a.mark(function e(){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformBook));case 4:case"end":return e.stop()}},e,this)})),this.getBook=function(){var e=Object(C.a)(I.a.mark(function e(n){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformBook(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(C.a)(I.a.mark(function e(){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=15&pageSize=10");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformCharacter));case 4:case"end":return e.stop()}},e,this)})),this.getCharacter=function(){var e=Object(C.a)(I.a.mark(function e(n){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(n));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(C.a)(I.a.mark(function e(){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/");case 2:return n=e.sent,e.abrupt("return",n.map(t._transformHouse));case 4:case"end":return e.stop()}},e,this)})),this.getHouse=function(){var e=Object(C.a)(I.a.mark(function e(n){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(n,"/"));case 2:return a=e.sent,e.abrupt("return",t._transformHouse(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._getId=function(e){return e.match(/\d+/g)},this._transformCharacter=function(e){return{name:t.isSet(e.name),gender:t.isSet(e.gender),born:t.isSet(e.born),died:t.isSet(e.died),culture:t.isSet(e.culture),id:t._getId(e.url)}},this._transformHouse=function(e){return{name:t.isSet(e.name),region:t.isSet(e.region),words:t.isSet(e.words),titles:t.isSet(e.titles),overlord:t.isSet(e.overlord),ancestralWeapons:t.isSet(e.ancestralWeapons),id:t._getId(e.url)}},this._transformBook=function(e){return{name:t.isSet(e.name),numberOfPages:t.isSet(e.numberOfPages),publiser:t.isSet(e.publiser),released:t.isSet(e.released),id:t._getId(e.url)}},this._apiBase="https://www.anapioficeandfire.com/api"}return Object(s.a)(e,[{key:"isSet",value:function(e){return e||"no data"}}]),e}(),N=(n(54),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),D=(n(56),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"/GameOfThtones-DB/img/error.jpg",alt:"error"}),r.a.createElement("span",null,"Something goes wrong"))}),_=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={char:{},loading:!0,error:!1},n.onCharLoader=function(e){n.setState({char:e,loading:!1})},n.onError=function(){n.setState({error:!0,loading:!1})},n.updateChar=function(){var e=Math.floor(140*Math.random()+25);n.gotService.getCharacter(e).then(n.onCharLoader).catch(n.onError)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.timerId=setInterval(this.updateChar,4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,c=a?r.a.createElement(D,null):null,l=n?r.a.createElement(N,null):null,o=n||a?null:r.a.createElement(A,{char:t});return r.a.createElement("div",{className:"random-block rounded"},c,l,o)}}]),t}(a.Component),A=function(e){var t=e.char,n=t.name,a=t.gender,c=t.born,l=t.died,o=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender "),r.a.createElement("span",null,a)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,o))))},B=_,R=(n(58),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={itemList:null,error:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.getData)().then(function(t){e.setState({itemList:t,error:!1})})}},{key:"componentDidCatch",value:function(){this.setState({itemList:null,error:!0})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e){var n=e.id,a=t.props.renderItem(e);return r.a.createElement("li",{key:n,className:"list-group-item",onClick:function(){t.props.onItemSelected(n)}},a)})}},{key:"render",value:function(){var e=this.state,t=e.itemList;e.error;if(!t)return r.a.createElement(N,null);var n=this.renderItems(t);return r.a.createElement("ul",{className:"item-list list-group"},n)}}]),t}(a.Component)),H=(n(60),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={data:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props.getItem;this.props.itemId&&t(this.props.itemId).then(function(t){e.setState({data:t})})}},{key:"componentDidUpdate",value:function(e){!this.props.itemId!==e.itemId&&this.updateItem()}},{key:"render",value:function(){if(!this.state.data)return r.a.createElement("span",{className:"select-error"},"Please select a field");var e=this.state.data,t=e.name;return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(this.props.children,function(t){return r.a.cloneElement(t,{data:e})})))}}]),t}(a.Component)),L=function(e){var t=e.left,n=e.right;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{md:"6"},t),r.a.createElement(h.a,{md:"6"},n)))},P=function(e){var t=e.data,n=e.field,a=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},a),r.a.createElement("span",null,t[n]))},T=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={selectedItem:129,error:!1},n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(D,null);var e=r.a.createElement(R,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:function(e){return"".concat(e.name,"(").concat(e.gender,")")}}),t=r.a.createElement(H,{getItem:this.gotService.getCharacter,itemId:this.state.selectedItem},r.a.createElement(P,{field:"gender",label:"Gender"}),r.a.createElement(P,{field:"born",label:"Born"}),r.a.createElement(P,{field:"died",label:"Died"}),r.a.createElement(P,{field:"culture",label:"Culture"}));return r.a.createElement(L,{left:e,right:t})}}]),t}(a.Component),W=n(1),M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={selectedItem:null,error:!1},n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(D,null):r.a.createElement(R,{onItemSelected:function(t){e.props.history.push("".concat(t))},getData:this.gotService.getAllBooks,renderItem:function(e){return e.name}})}}]),t}(a.Component),z=Object(W.e)(M),G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={selectedItem:null,error:!1},n.onItemSelected=function(e){n.setState({selectedItem:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(D,null);var e=r.a.createElement(R,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:function(e){return e.name}}),t=r.a.createElement(H,{getItem:this.gotService.getHouse,itemId:this.state.selectedItem},r.a.createElement(P,{field:"region",label:"Region"}),r.a.createElement(P,{field:"words",label:"Words"}),r.a.createElement(P,{field:"titles",label:"Titles"}),r.a.createElement(P,{field:"overlord",label:"Overlord"}),r.a.createElement(P,{field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(L,{left:e,right:t})}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(H,{getItem:this.gotService.getBook,itemId:this.props.bookId},r.a.createElement(P,{field:"numberOfPages",label:"Number Of Pages"}),r.a.createElement(P,{field:"publiser",label:"Publiser"}),r.a.createElement(P,{field:"released",label:"Released"}))}}]),t}(a.Component),J=(n(62),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).gotService=new x,n.state={toggle:!1,error:!1},n.onToggleRandomChar=function(){n.setState(function(e){return{toggle:!e.toggle}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this.state,t=e.toggle,n=e.error,a=t?null:r.a.createElement(B,null);return n?r.a.createElement(D,null):r.a.createElement(v.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(d.a,null,r.a.createElement(k,null)),r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{lg:{size:5,offset:0}},a,r.a.createElement("button",{onClick:this.onToggleRandomChar,className:"btn__toggle"},"Toggle Random Character"))),r.a.createElement(W.a,{exact:!0,path:"/characters",component:T}),r.a.createElement(W.a,{exact:!0,path:"/houses",component:G}),r.a.createElement(W.a,{exact:!0,path:"/books",component:z}),r.a.createElement(W.a,{exact:!0,path:"/books/:id",render:function(e){var t=e.match,n=e.history;console.log(n);var a=t.params.id;return r.a.createElement(F,{bookId:a})}}))))}}]),t}(a.Component));n(64),n(66);l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[40,2,1]]]);
//# sourceMappingURL=main.a3b9fafa.chunk.js.map