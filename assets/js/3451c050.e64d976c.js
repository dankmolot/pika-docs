(self.webpackChunkpika_soft=self.webpackChunkpika_soft||[]).push([[896],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4377:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),i=["components"],o={title:"Delete"},p={unversionedId:"industrial_wars/sqlite/db-table/delete",id:"industrial_wars/sqlite/db-table/delete",isDocsHomePage:!1,title:"Delete",description:"`jsx",source:"@site/docs/industrial_wars/02-sqlite/03-db-table/07-delete.md",sourceDirName:"industrial_wars/02-sqlite/03-db-table",slug:"/industrial_wars/sqlite/db-table/delete",permalink:"/industrial_wars/sqlite/db-table/delete",editUrl:"https://github.com/pika-software/pika-docs/edit/main/docs/industrial_wars/02-sqlite/03-db-table/07-delete.md",version:"current",lastUpdatedBy:"Retro",lastUpdatedAt:1623250535,formattedLastUpdatedAt:"6/9/2021",sidebarPosition:7,frontMatter:{title:"Delete"},sidebar:"industrial_wars",previous:{title:"Update",permalink:"/industrial_wars/sqlite/db-table/update"},next:{title:"\u041e\u0431\u0437\u043e\u0440 Retro Framework",permalink:"/industrial_wars/rf/intro"}},u=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:[]},{value:"\u0410\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b",children:[]},{value:"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442",id:"\u0432\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},":Delete([where])\n")),(0,l.kt)("h3",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("h3",{id:"\u0430\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b"},"\u0410\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"where")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string / table")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0424\u0438\u043b\u044c\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0447\u0442\u043e \u043d\u0430\u0434\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c. \u0415\u0441\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u0442\u043e \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"key = value"),". ",(0,l.kt)("a",{parentName:"td",href:"https://www.sqlitetutorial.net/sqlite-where/"},"\u0422\u044b\u043a \u0441\u044e\u0434\u0430")," \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u044f\u0442\u044c.")))),(0,l.kt)("h3",{id:"\u0432\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442"},"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"nil / false")," - \u0415\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),", \u0437\u043d\u0430\u0447\u0438\u0442 \u0435\u0441\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0430.")),(0,l.kt)("h3",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u043c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. ",(0,l.kt)("em",{parentName:"p"},"\u0445\u0435 \u0445\u0435")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"t:Delete()\n")),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0433\u0440\u043e\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"player1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"t:Delete({ id64 = 'player1' })\n-- \u0418\u043b\u0438\nt:Delete(\"id64 = 'player1'\")\n")),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u0441\u0435\u0445 \u0443 \u043a\u043e\u0433\u043e \u0434\u0435\u043d\u0435\u0433 \u043c\u0435\u043d\u044c\u0448\u0435 1000"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"t:Delete('money < 1000')\n")))}d.isMDXComponent=!0}}]);