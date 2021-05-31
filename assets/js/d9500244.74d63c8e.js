(self.webpackChunkinstant_hie_docs=self.webpackChunkinstant_hie_docs||[]).push([[712],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return o},Z:function(){return i}});var n=a(2263),r=a(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,p=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(c)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},6155:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(4996),c={id:"package-arch",title:"Packages",sidebar_label:"Packages",keywords:["Instant OpenHIE","Packages","Architecture"],description:"A description of the instant OpenHIE package architecture"},s={unversionedId:"concepts/package-arch",id:"concepts/package-arch",isDocsHomePage:!1,title:"Packages",description:"A description of the instant OpenHIE package architecture",source:"@site/docs/concepts/package-arch.mdx",sourceDirName:"concepts",slug:"/concepts/package-arch",permalink:"/instant/docs/concepts/package-arch",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/concepts/package-arch.mdx",version:"current",sidebar_label:"Packages",frontMatter:{id:"package-arch",title:"Packages",sidebar_label:"Packages",keywords:["Instant OpenHIE","Packages","Architecture"],description:"A description of the instant OpenHIE package architecture"},sidebar:"docs",previous:{title:"Overview",permalink:"/instant/docs/concepts/overview"},next:{title:"How to create an Instant OpenHIE package",permalink:"/instant/docs/how-to/creating-packages"}},p=[],u={toc:p};function l(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),(0,o.kt)("p",null,"The fundamental concept of Instant OpenHIE is that it can be extended to support additional use cases and workflows. This is achieved through packages. A ",(0,o.kt)("a",{parentName:"p",href:"/instant/docs/packages/core"},"core package")," has been produced from which all other packages will be derived. A package will either extend directly from the core package or from another existing package."),(0,o.kt)("p",null,"A package is intended to encompass a set of functionality rather than just setup generic applications. Packages are expected to configure the applications so that they may enact a particular functional role with the HIE. This may include setting up test data and pre-configuring applications."),(0,o.kt)("p",null,"Packages can be one of two different types. An ",(0,o.kt)("strong",{parentName:"p"},"infrastructural package")," and a ",(0,o.kt)("strong",{parentName:"p"},"use case package"),". Infrastructural packages setup and configure particular applications or sets of applications that may be grouped together. By themselves, these packages only start the applications and they aren't configured for a particular use case. On the other hand, use case packages rely on infrastructural packages and configure the applications set up by them and setup additional mediators that allow applications to work together. They do this to enable a particular use case to be enacted. You can think of use case packages as adding features for the end-user whereas infrastructural packages provide the dependencies to the use case packages that enable the feature to work."),(0,o.kt)("p",null,"Each package will contain the following types of technical artefacts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Compose scripts for setting up the applications required for this package\u2019s use cases and workflows"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes scripts for setting up the applications required for this package\u2019s use cases and workflows"),(0,o.kt)("li",{parentName:"ul"},"Configuration scripts to setup required configuration metadata"),(0,o.kt)("li",{parentName:"ul"},"Extensions to the test harness to test the added use cases with test data")),(0,o.kt)("p",null,"The below diagram shows how packages will extend off of each other to add use cases of increasing complexity."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{alt:"Package architecture",src:(0,i.Z)("img/instant-openhie-package-arch.png")})),(0,o.kt)("p",null,"Several essential packages are bundled with Instant OpenHIE. However, it is designed to be extended for implementation-specific needs. See ",(0,o.kt)("a",{parentName:"p",href:"/instant/docs/how-to/creating-packages"},"creating packages")," for more information on how to create your own packages to extend Instant OpenHIE."))}l.isMDXComponent=!0}}]);