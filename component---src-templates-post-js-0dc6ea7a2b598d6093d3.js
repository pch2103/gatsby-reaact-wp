(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qSS":function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",(function(){return s}));a("q8oJ"),a("8npG"),a("nWfQ"),a("3nLz");var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("9eSz"),l=a.n(o),u=a("Bl7J");var c=function(e){var t,a;a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=o;function o(){return e.apply(this,arguments)||this}return o.prototype.render=function(){var e=this.props.data.wordpressPost,t=e.featured_media&&e.featured_media.localFile.childImageSharp.fixed,a={};return e.acf&&e.acf.facebook&&(a.facebook="<h5>Facebook: <i>"+e.acf.facebook+"</i></h5>",a.twitter="<h5>Twitter: <i>"+e.acf.twitter+"</i></h5>"),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(i.Link,{to:"/posts"},"Back to Posts list"),r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),t&&r.a.createElement(l.a,{fixed:t}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.facebook}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.twitter}}),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage")))},o}(n.Component);t.default=c;var s="1055345118"},Bl7J:function(e,t,a){"use strict";var n=a("Nzjw"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.defaultProps={siteTitle:""};var u=l,c=(a("XjQp"),function(e){var t=e.menu.edges[0].node.items;return i.a.createElement("div",null,i.a.createElement("h4",null,"Local Menu"),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.object_id},i.a.createElement(o.Link,{to:e.url},e.title))}))))});t.a=function(e){var t=e.children,a=n.data,r=a.site,o=a.allWordpressWpApiMenusMenusItems;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:r.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement(c,{menu:o}),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},Nzjw:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"CHE testing Gatsby"}},"allWordpressWpApiMenusMenusItems":{"edges":[{"node":{"id":"c7fcd6a3-a087-5a9e-a75e-29331bf736e8","name":"Main menu","items":[{"title":"Posts Pagenation","object_slug":"posts-pagenation","url":"/posts","object_id":64},{"title":"Пример страницы","object_slug":"%d0%bf%d1%80%d0%b8%d0%bc%d0%b5%d1%80-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d1%8b","url":"/sample-page","object_id":61},{"title":"Et voluptatum quis pariatur iure","object_slug":"et-voluptatum-quis-pariatur-iure","url":"/post/et-voluptatum-quis-pariatur-iure","object_id":62},{"title":"aque exercitationem minus exercitationem quo aut","object_slug":"aque-exercitationem-minus-exercitationem-quo-aut","url":"/post/eaque-exercitationem-minus-exercitationem-quo-aut","object_id":63}]}}]}}}')},XjQp:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-js-0dc6ea7a2b598d6093d3.js.map