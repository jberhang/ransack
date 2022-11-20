"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9953],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5385:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=t(3117),a=(t(7294),t(3905));const o={sidebar_position:3,title:"i18n"},i="i18n and Ransack",c={unversionedId:"going-further/i18n",id:"going-further/i18n",title:"i18n",description:"Ransack translation files are available in",source:"@site/docs/going-further/i18n.md",sourceDirName:"going-further",slug:"/going-further/i18n",permalink:"/ransack/going-further/i18n",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/i18n.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"i18n"},sidebar:"tutorialSidebar",previous:{title:"CSV Export",permalink:"/ransack/going-further/exporting-to-csv"},next:{title:"Form customisation",permalink:"/ransack/going-further/form-customisation"}},l={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"i18n-and-ransack"},"i18n and Ransack"),(0,a.kt)("p",null,"Ransack translation files are available in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/activerecord-hackery/ransack/lib/ransack/locale"},"Ransack::Locale"),". You may also be interested in one of the\nmany translations for Ransack available at\n",(0,a.kt)("a",{parentName:"p",href:"http://www.localeapp.com/projects/2999"},"http://www.localeapp.com/projects/2999"),"."),(0,a.kt)("p",null,"Predicate and attribute translations in forms may be specified as follows (see\nthe translation files in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/activerecord-hackery/ransack/lib/ransack/locale"},"Ransack::Locale")," for more examples):"),(0,a.kt)("p",null,"locales/en.yml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"en:\n  ransack:\n    asc: ascending\n    desc: descending\n    predicates:\n      cont: contains\n      not_cont: not contains\n      start: starts with\n      end: ends with\n      gt: greater than\n      lt: less than\n    models:\n      person: Passenger\n    attributes:\n      person:\n        name: Full Name\n      article:\n        title: Article Title\n        body: Main Content\n")),(0,a.kt)("p",null,"Attribute names may also be changed globally, or under ",(0,a.kt)("inlineCode",{parentName:"p"},"activerecord"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"en:\n  attributes:\n    model_name:\n      model_field1: field name1\n      model_field2: field name2\n  activerecord:\n    attributes:\n      namespace/article:\n        title: AR Namespaced Title\n      namespace_article:\n        title: Old Ransack Namespaced Title\n")))}p.isMDXComponent=!0}}]);