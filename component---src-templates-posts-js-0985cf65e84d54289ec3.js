(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bl7J:function(e,t,a){"use strict";var n=a("Nzjw"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),u=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.defaultProps={siteTitle:""};var o=u,s=(a("XjQp"),function(e){var t=e.menu.edges[0].node.items;return l.a.createElement("div",null,l.a.createElement("ul",null,t.map((function(e){return l.a.createElement("li",{key:e.object_id},l.a.createElement(i.Link,{to:e.url},e.title))}))))});t.a=function(e){var t=e.children,a=n.data,r=a.site,i=a.allWordpressWpApiMenusMenusItems;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:r.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},l.a.createElement(s,{menu:i}),l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},Nzjw:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"CHE testing Gatsby"}},"allWordpressWpApiMenusMenusItems":{"edges":[{"node":{"id":"c7fcd6a3-a087-5a9e-a75e-29331bf736e8","name":"Main menu","items":[{"title":"Posts Pagenation","object_slug":"posts-pagenation","url":"/posts","object_id":64},{"title":"Пример страницы","object_slug":"%d0%bf%d1%80%d0%b8%d0%bc%d0%b5%d1%80-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d1%8b","url":"/sample-page","object_id":61},{"title":"Et voluptatum quis pariatur iure","object_slug":"et-voluptatum-quis-pariatur-iure","url":"/post/et-voluptatum-quis-pariatur-iure","object_id":62},{"title":"aque exercitationem minus exercitationem quo aut","object_slug":"aque-exercitationem-minus-exercitationem-quo-aut","url":"/post/eaque-exercitationem-minus-exercitationem-quo-aut","object_id":63}]}}]}}}')},XjQp:function(e,t,a){},zOlY:function(e,t,a){"use strict";a.r(t);a("3nLz");var n=a("q1tI"),r=a.n(n),l=a("+ZDr"),i=a.n(l),u=a("9eSz"),o=a.n(u),s=a("Bl7J"),m=function(e){return e.test?r.a.createElement("span",null,e.text):r.a.createElement(i.a,{to:e.url},e.text)};t.default=function(e){var t=e.pageContext,a=t.group,n=t.index,l=t.first,u=t.last,c=t.pageCount,d=n-1==1?"/posts":"/posts/"+(n-1),p="/posts/"+(n+1);return r.a.createElement(s.a,null,r.a.createElement("h4",null,c," Pages"),a.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.a,{to:"/post/"+t.slug},r.a.createElement("h3",null,t.title),t.featured_media&&r.a.createElement("div",null,r.a.createElement(o.a,{fixed:t.featured_media.localFile.childImageSharp.fixed}))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.excerpt}}),r.a.createElement("div",{style:{marginBottom:24}},r.a.createElement("strong",null,t.date)))})),r.a.createElement("div",{className:"previousLink"},r.a.createElement(m,{test:l,url:d,text:"Go to Previous Page"})),r.a.createElement("div",{className:"nextLink"},r.a.createElement(m,{test:u,url:p,text:"Go to Next Page"})))}}}]);
//# sourceMappingURL=component---src-templates-posts-js-0985cf65e84d54289ec3.js.map