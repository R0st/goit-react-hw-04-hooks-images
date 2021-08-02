(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),c=n.n(o),s=n(11),i=n(4),l=n(5),u=n(7),h=n(6),d=n(0),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),n}(a.Component);n(8);function b(e){var t=e.webformatURL,n=e.onClick,a=e.tags;return Object(d.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:n})}var g=function(e){var t=e.hits,n=e.onOpenModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL;return Object(d.jsx)("li",{children:Object(d.jsx)(b,{webformatURL:a,onClick:function(){return n(r)}},t)},t)}))})},j=function(e){var t=e.onClick;return Object(d.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},p=n(20),f=n.n(p),y=(n(47),function(){return Object(d.jsx)(f.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3})}),O=n(21),v=n.n(O),S=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a;return v.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=21793767-b218360da72fb262d25a858fe&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},w=document.querySelector("#modal-root"),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 Esc, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u0438\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})}),w)}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],searchQuery:"",currentPage:1,isLoading:!1,error:null,showModal:!1,largeImageURL:"",tags:""},e.toogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState({largeImageURL:t}),e.toogleModal()},e.handleSearchSubmit=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchHits=function(){var t=e.state,n={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),S(n).then((function(t){e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:"Sorry! Picture not found. Please try again later!!!"})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits(),2!==this.state.searchQuery&&t.currentPage!==this.state.currentPage&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.hits,n=e.isLoading,a=e.showModal,r=e.largeImageURL,o=e.tags;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{onSubmit:this.handleSearchSubmit}),Object(d.jsx)(g,{hits:t,onOpenModal:this.onOpenModal}),n&&Object(d.jsx)(y,{}),t.length>11&&!n&&Object(d.jsx)(j,{onClick:this.fetchHits}),a&&Object(d.jsx)(k,{onClose:this.onOpenModal,children:Object(d.jsx)("img",{src:r,alt:o})})]})}}]),n}(a.Component);n(66);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.162eab6a.chunk.js.map