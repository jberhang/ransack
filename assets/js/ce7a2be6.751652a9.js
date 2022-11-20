"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3699],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),l=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=t,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return r?a.createElement(h,o(o({ref:n},u),{},{components:r})):a.createElement(h,o({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4993:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var a=r(3117),t=(r(7294),r(3905));const s={sidebar_position:7,title:"Saving queries"},o=void 0,i={unversionedId:"going-further/saving-queries",id:"going-further/saving-queries",title:"Saving queries",description:"Ransack Memory Gem",source:"@site/docs/going-further/saving-queries.md",sourceDirName:"going-further",slug:"/going-further/saving-queries",permalink:"/ransack/going-further/saving-queries",draft:!1,editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/saving-queries.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Saving queries"},sidebar:"tutorialSidebar",previous:{title:"Ransackers",permalink:"/ransack/going-further/ransackers"},next:{title:"Other notes",permalink:"/ransack/going-further/other-notes"}},c={},l=[{value:"Ransack Memory Gem",id:"ransack-memory-gem",level:2},{value:"Custom solution",id:"custom-solution",level:2}],u={toc:l};function p(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"ransack-memory-gem"},"Ransack Memory Gem"),(0,t.kt)("p",null,"The ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/richardrails/ransack_memory"},"Ransack Memory")," gem accomplishes this."),(0,t.kt)("h2",{id:"custom-solution"},"Custom solution"),(0,t.kt)("p",null,"If you want a custom solution, you can build it yourself. My ransack AJAX searching doesn\u2019t save your search parameters across transactions. In this post I\u2019ll show you how to easily add this capability in a generic way."),(0,t.kt)("p",null,"In this example I added AJAX search ability to index pages."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ruby"},"def index\n  @search = ComponentDefinition.search(search_params)\n  # make name the default sort column\n  @search.sorts = 'name' if @search.sorts.empty?\n  @component_definitions = @search.result().page(params[:page])\nend\n")),(0,t.kt)("p",null,"I added methods(search_params, clear_search_index) in the ApplicationController to add a level of abstraction from the search gem I was using. Turns out this made things super easy, especially considering I won\u2019t have to update my code generation tools for index pages."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ruby"},"class ApplicationController < ActionController::Base\n  def search_params\n    params[:q]\n  end\n  def clear_search_index\n    if params[:search_cancel]\n      params.delete(:search_cancel)\n      if(!search_params.nil?)\n        search_params.each do |key, param|\n          search_params[key] = nil\n        end\n      end\n    end\n  end\nend\n")),(0,t.kt)("p",null,"I decided to store the ransack search parameters, params","[:q]",", in the session. To make the session parameter unique I used a key creed from the controllers name and \u201c_search\u201d."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ruby"},'class ApplicationController < ActionController::Base\n\n  # CHECK THE SESSION FOR SEARCH PARAMETERS IS THEY AREN\'T IN THE REQUEST\n  def search_params\n    if params[:q] == nil\n        params[:q] = session[search_key]\n    end\n    if params[:q]\n          session[search_key] = params[:q]\n        end\n        params[:q]\n  end\n  # DELETE SEARCH PARAMETERS FROM THE SESSION\n  def clear_search_index\n      if params[:search_cancel]\n        params.delete(:search_cancel)\n        if(!search_params.nil?)\n            search_params.each do |key, param|\n                search_params[key] = nil\n            end\n        end\n        # REMOVE FROM SESSION\n        session.delete(search_key)\n      end\n  end\n\nprotected\n  # GENERATE A GENERIC SESSION KEY BASED ON TEH CONTROLLER NAME\n  def search_key\n    "#{controller_name}_search".to_sym\n  end\nend\n')),(0,t.kt)("p",null,"Based on ",(0,t.kt)("a",{parentName:"p",href:"https://techbrownbags.wordpress.com/2015/02/18/rails-save-ransack-search-queries/"},"Saving queries")))}p.isMDXComponent=!0}}]);