(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var i=r("TqRt");t.__esModule=!0,t.default=void 0;var a,n=i(r("PJYZ")),s=i(r("VbXa")),o=i(r("8OQS")),d=i(r("pVnL")),l=i(r("q1tI")),u=i(r("17x9")),c=function(e){var t=(0,d.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),r=p(t);return h[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),l.default.createElement("source",{media:a,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:i})}))}function R(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+o+r+i+t+n+a+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(k,(0,d.default)({ref:t,src:r},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,a(i),o):o})),k=l.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:r,srcSet:i,src:a},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=p(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,R=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:O?1:0,transition:x?"opacity "+v+"ms":"none"},o),_="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},x&&T,{},o,{},f),P={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:S};if(h){var W=h,j=g(h);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),_&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&T)}),j.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:P,imageVariants:W,generateSources:I}),j.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:P,imageVariants:W,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(W),l.default.createElement(k,{alt:r,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:r,title:t,loading:E},j,{imageVariants:W}))}}))}if(m){var q=m,M=g(m),H=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete H.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},_&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},x&&T)}),M.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:P,imageVariants:q,generateSources:I}),M.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:P,imageVariants:q,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(k,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:r,title:t,loading:E},M,{imageVariants:q}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),_=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:C,sizes:_,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([_,u.default.arrayOf(_)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=x;t.default=T},SGlo:function(e,t,r){"use strict";var i=r("rj/q"),a=r("N+BI").getWeak,n=r("1a8y"),s=r("BjK0"),o=r("xa9o"),d=r("yde8"),l=r("Wadk"),u=r("qDzq"),c=r("O1i0"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,r,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var r=a(e);return!0===r?h(c(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!s(e))return!1;var r=a(e);return!0===r?h(c(this,t)).has(e):r&&u(r,this._i)}}),l},def:function(e,t,r){var i=a(n(t),!0);return!0===i?h(e).set(t,r):i[e._i]=r,e},ufstore:h}},eMsz:function(e,t,r){"use strict";var i,a=r("emib"),n=r("Wadk")(0),s=r("IYdN"),o=r("N+BI"),d=r("k5Iv"),l=r("SGlo"),u=r("BjK0"),c=r("O1i0"),f=r("O1i0"),p=!a.ActiveXObject&&"ActiveXObject"in a,g=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=r("94Pd")("WeakMap",b,v,l,!0,!0);f&&p&&(d((i=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,r=t[e];s(t,e,(function(t,a){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,a);return"set"==e?this:n}return r.call(this,t,a)}))})))},"t+fG":function(e,t,r){var i=r("P8UN"),a=r("96qb"),n=r("ap2Z"),s=/"/g,o=function(e,t,r,i){var a=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},zTTH:function(e,t,r){"use strict";var i=r("P8UN"),a=r("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(n)}}]);
//# sourceMappingURL=5ed968f1ad377820f7402badb9a45c21ad3f2c89-8a7add31e275ab6be9c6.js.map