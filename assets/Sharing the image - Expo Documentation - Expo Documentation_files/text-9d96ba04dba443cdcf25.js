_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[229],{"+Css":function(b,u,t){"use strict";t.d(u,"a",function(){return e});function e(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}},"5BX9":function(b,u,t){"use strict";t.d(u,"a",function(){return r}),t.d(u,"b",function(){return h}),t.d(u,"c",function(){return d});var e=t("q1tI"),i=t.n(e),n=t("AeFk"),r=Object(e.createContext)({version:"latest",hasVersion:!1,setVersion:function(w){throw new Error("PageApiVersionContext not found")}});function h(v){var w=x(v.router.pathname),g=w!==null,T=Object(e.useCallback)(function(C){v.router.push(E(v.router.pathname,C))},[]);return Object(n.c)(r.Provider,{value:{setVersion:T,hasVersion:g,version:w||"latest"}},v.children)}function d(){return Object(e.useContext)(r)}function O(v){return v.startsWith("/versions/")}function x(v){return O(v)?v.split("/",3).pop():null}function E(v,w){var g=x(v);return g?v.replace(g,w):v}},"6FTQ":function(b,u,t){"use strict";t.d(u,"a",function(){return e});function e(i,n){(n==null||n>i.length)&&(n=i.length);for(var r=0,h=new Array(n);r<n;r++)h[r]=i[r];return h}},"7LId":function(b,u,t){"use strict";t.d(u,"a",function(){return i});function e(n,r){return e=Object.setPrototypeOf||function(d,O){return d.__proto__=O,d},e(n,r)}function i(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&e(n,r)}},"7ljp":function(b,u,t){"use strict";t.d(u,"a",function(){return T}),t.d(u,"b",function(){return I});var e=t("q1tI"),i=t.n(e);function n(s,o,a){return o in s?Object.defineProperty(s,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[o]=a,s}function r(){return r=Object.assign||function(s){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(s[c]=a[c])}return s},r.apply(this,arguments)}function h(s,o){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);o&&(c=c.filter(function(y){return Object.getOwnPropertyDescriptor(s,y).enumerable})),a.push.apply(a,c)}return a}function d(s){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?h(Object(a),!0).forEach(function(c){n(s,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach(function(c){Object.defineProperty(s,c,Object.getOwnPropertyDescriptor(a,c))})}return s}function O(s,o){if(s==null)return{};var a={},c=Object.keys(s),y,l;for(l=0;l<c.length;l++)y=c[l],!(o.indexOf(y)>=0)&&(a[y]=s[y]);return a}function x(s,o){if(s==null)return{};var a=O(s,o),c,y;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(y=0;y<l.length;y++)c=l[y],!(o.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,c)||(a[c]=s[c]))}return a}var E=function(o){return typeof o=="function"},v=i.a.createContext({}),w=function(o){return function(a){var c=g(a.components);return i.a.createElement(o,r({},a,{components:c}))}},g=function(o){var a=i.a.useContext(v),c=a;return o&&(c=E(o)?o(a):d(d({},a),o)),c},T=function(o){var a=g(o.components);return i.a.createElement(v.Provider,{value:a},o.children)},C="mdxType",S={inlineCode:"code",wrapper:function(o){var a=o.children;return i.a.createElement(i.a.Fragment,{},a)}},P=i.a.forwardRef(function(s,o){var a=s.components,c=s.mdxType,y=s.originalType,l=s.parentName,p=x(s,["components","mdxType","originalType","parentName"]),f=g(a),m=c,j=f["".concat(l,".").concat(m)]||f[m]||S[m]||y;return a?i.a.createElement(j,d(d({ref:o},p),{},{components:a})):i.a.createElement(j,d({ref:o},p))});P.displayName="MDXCreateElement";function I(s,o){var a=arguments,c=o&&o.mdxType;if(typeof s=="string"||c){var y=a.length,l=new Array(y);l[0]=P;var p={};for(var f in o)hasOwnProperty.call(o,f)&&(p[f]=o[f]);p.originalType=s,p[C]=typeof s=="string"?s:c,l[1]=p;for(var m=2;m<y;m++)l[m]=a[m];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}},"8rE2":function(b,u,t){"use strict";t.d(u,"a",function(){return i});var e=t("6FTQ");function i(n,r){if(!!n){if(typeof n=="string")return Object(e.a)(n,r);var h=Object.prototype.toString.call(n).slice(8,-1);if(h==="Object"&&n.constructor&&(h=n.constructor.name),h==="Map"||h==="Set")return Array.from(n);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return Object(e.a)(n,r)}}},"C+bE":function(b,u){function t(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(b.exports=t=function(n){return typeof n},b.exports.default=b.exports,b.exports.__esModule=!0):(b.exports=t=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b.exports.default=b.exports,b.exports.__esModule=!0),t(e)}b.exports=t,b.exports.default=b.exports,b.exports.__esModule=!0},"H+61":function(b,u,t){"use strict";t.d(u,"a",function(){return e});function e(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}},I0q5:function(b,u,t){"use strict";t.d(u,"a",function(){return o});var e=t("z7pX"),i=t("H+61"),n=t("UlJF"),r=t("+Css"),h=t("7LId"),d=t("VIvw"),O=t("iHvq"),x=t("cpVT"),E=t("q1tI"),v=t("ufKf"),w=t("3zh3"),g=t("AeFk"),T=function(c){var y=c.size,l=y===void 0?24:y,p=c.stroke,f=p===void 0?w.palette.dark.white:p;return Object(g.c)("svg",{"aria-label":"check",width:l,height:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(g.c)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3",stroke:f,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},C=t("5BX9");function S(a){var c=P();return function(){var l=Object(O.a)(a),p;if(c){var f=Object(O.a)(this).constructor;p=Reflect.construct(l,arguments,f)}else p=l.apply(this,arguments);return Object(d.a)(this,p)}}function P(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}var I="android",s="v".concat(t("kiQV").version),o=function(a){Object(h.a)(y,a);var c=S(y);function y(){var l;Object(i.a)(this,y);for(var p=arguments.length,f=new Array(p),m=0;m<p;m++)f[m]=arguments[m];return l=c.call.apply(c,[this].concat(f)),Object(x.a)(Object(r.a)(l),"contentRef",E.createRef()),Object(x.a)(Object(r.a)(l),"state",{ready:!1}),Object(x.a)(Object(r.a)(l),"getSelectedDocsVersion",function(){var j=l.context.version;return j==="latest"?s:j}),Object(x.a)(Object(r.a)(l),"getSnackSdkVersion",function(){var j=l.getSelectedDocsVersion();return j==="unversioned"&&(j=s),j.replace("v","")}),Object(x.a)(Object(r.a)(l),"getExamplesPath",function(){return"".concat(document.location.origin,"/static/examples/").concat(l.getSelectedDocsVersion())}),Object(x.a)(Object(r.a)(l),"getDependencies",function(){return Object(e.a)(l.props.dependencies).join(",")}),Object(x.a)(Object(r.a)(l),"getCode",function(){var j=l.contentRef.current&&l.contentRef.current.textContent||"";return j.replace(/%%placeholder-start%%.*%%placeholder-end%%/g,"")}),l}return Object(n.a)(y,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"render",value:function(){return Object(g.c)("div",null,Object(g.c)("div",{ref:this.contentRef,style:this.props.contentHidden?{display:"none"}:void 0},this.props.children),Object(g.c)("form",{action:v.a,method:"POST",target:"_blank"},Object(g.c)("input",{type:"hidden",name:"platform",value:this.props.defaultPlatform||I}),Object(g.c)("input",{type:"hidden",name:"name",value:this.props.label||"Example"}),Object(g.c)("input",{type:"hidden",name:"dependencies",value:this.getDependencies()}),Object(g.c)("input",{type:"hidden",name:"sdkVersion",value:this.getSnackSdkVersion()}),this.props.platforms&&Object(g.c)("input",{type:"hidden",name:"supportedPlatforms",value:this.props.platforms.join(",")}),this.state.ready&&Object(g.c)("input",{type:"hidden",name:"files",value:JSON.stringify(Object(v.b)({templateId:this.props.templateId,code:this.getCode(),files:this.props.files,baseURL:this.getExamplesPath()}))}),Object(g.c)("button",{className:"snack-inline-example-button",disabled:!this.state.ready},Object(g.c)(T,{size:16})," ",this.props.buttonTitle||"Try this example on Snack")))}}]),y}(E.Component);Object(x.a)(o,"contextType",C.a),Object(x.a)(o,"defaultProps",{dependencies:[]})},UlJF:function(b,u,t){"use strict";t.d(u,"a",function(){return i});function e(n,r){for(var h=0;h<r.length;h++){var d=r[h];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}function i(n,r,h){return r&&e(n.prototype,r),h&&e(n,h),n}},VIvw:function(b,u,t){"use strict";t.d(u,"a",function(){return r});var e=t("C+bE"),i=t.n(e),n=t("+Css");function r(h,d){if(d&&(i()(d)==="object"||typeof d=="function"))return d;if(d!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Object(n.a)(h)}},VJzc:function(b,u,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/text",function(){return t("j4Oh")}])},cpVT:function(b,u,t){"use strict";t.d(u,"a",function(){return e});function e(i,n,r){return n in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}},iHvq:function(b,u,t){"use strict";t.d(u,"a",function(){return e});function e(i){return e=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},e(i)}},j4Oh:function(b,u,t){"use strict";t.r(u),t.d(u,"meta",function(){return o}),t.d(u,"headings",function(){return a}),t.d(u,"default",function(){return l});var e=t("7ljp"),i=t("I0q5"),n=t("AeFk"),r=t("3zh3"),h=t("q1tI"),d=Object(n.b)("text-shadow:",r.theme.highlight.emphasis," 0px 0px 10px,",r.theme.highlight.emphasis," 0px 0px 10px,",r.theme.highlight.emphasis," 0px 0px 10px,",r.theme.highlight.emphasis," 0px 0px 10px;",""),O=function(f){var m=f.children;return Object(n.c)("span",{css:d},m)},x=O,E=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(p,f,m)=>f in p?E(p,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):p[f]=m,P=(p,f)=>{for(var m in f||(f={}))T.call(f,m)&&S(p,m,f[m]);if(g)for(var m of g(f))C.call(f,m)&&S(p,m,f[m]);return p},I=(p,f)=>v(p,w(f)),s=(p,f)=>{var m={};for(var j in p)T.call(p,j)&&f.indexOf(j)<0&&(m[j]=p[j]);if(p!=null&&g)for(var j of g(p))f.indexOf(j)<0&&C.call(p,j)&&(m[j]=p[j]);return m};const o={title:"Styling text"},a=[{depth:2,type:"text",title:"Adding style"}],c={meta:o,headings:a},y="wrapper";function l(p){var f=p,{components:m}=f,j=s(f,["components"]);return Object(e.b)(y,I(P(P({},c),j),{components:m,mdxType:"MDXLayout"}),Object(e.b)("blockquote",null,Object(e.b)("p",{parentName:"blockquote"},'\u{1F476}\u{1F3FB} We believe in "learning by doing" and so this tutorial emphasizes ',Object(e.b)("strong",{parentName:"p"},"doing")," over ",Object(e.b)("em",{parentName:"p"},"explaining"),". If you find yourself typing code that you do not understand, do not worry ","\u2014"," we will link you to appropriate resources to help you get a deeper understanding at the end of the tutorial.")),Object(e.b)("p",null,`Let's change the text that's currently instructing us to "Open up App.js to start working on your app!" to instead instruct our users how to use the app. The app doesn't yet do anything but we can pretend that it does, such is the way of programming.`),Object(e.b)("p",null,"Change your code according to the following example. Throughout the tutorial, any important code or code that has changed between examples will be ",Object(e.b)(x,{mdxType:"Highlight"},"highlighted in yellow"),". You can hover over the highlights (on desktop) or tap them (on mobile) to see more context on the change."),Object(e.b)(i.a,{label:"Updated text",mdxType:"SnackInline"},Object(e.b)("pre",null,Object(e.b)("code",P({parentName:"pre"},{className:"language-js"}),`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      /* @info This used to say "Open up App.js to start working on your app!" and now it is slightly more useful. */
      <Text>To share a photo from your phone with a friend, just press the button below!</Text>
    /* @end */
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`))),Object(e.b)("br",null),Object(e.b)("blockquote",null,Object(e.b)("p",{parentName:"blockquote"},"\u{1F633} ",Object(e.b)("strong",{parentName:"p"},'Wait, what is this "Try this example on Snack" button!?')),Object(e.b)("p",{parentName:"blockquote"},"Snack is a web-based editor that works similar to a managed Expo project. It's a great way to share code snippets with people and try things out without needing to get a project running on your own computer with ",Object(e.b)("inlineCode",{parentName:"p"},"expo-cli"),'. Go ahead, press the button. You will see the above code running in it. Switch between iOS, Android, or web. Open it on your device in the Expo Go app by pressing the "Run" button.')),Object(e.b)("h2",P({},{id:"adding-style"}),"Adding style"),Object(e.b)("p",null,"Our text is black and small. We should change the color because, according to some folks, ",Object(e.b)("a",P({parentName:"p"},{href:"https://uxmovement.com/content/why-you-should-never-use-pure-black-for-text-or-backgrounds/"}),"you should never use pure black for text or backgrounds"),". We'll also increase the font size to make it easier to read."),Object(e.b)(i.a,{label:"Styled text",mdxType:"SnackInline"},Object(e.b)("pre",null,Object(e.b)("code",P({parentName:"pre"},{className:"language-js"}),`import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      /* @info Set the style property with color and fontSize. There are many other styles available! Look at them in the <a href="https://reactnative.dev/docs/text#style" target="_blank">React Native Text API reference</a> sometime after you're done with this tutorial. */<Text style={{color: '#888', fontSize: 18}}> /* @end */

        To share a photo from your phone with a friend, just press the button below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`))),Object(e.b)("br",null),Object(e.b)("blockquote",null,Object(e.b)("p",{parentName:"blockquote"},"\u{1F3A8} ",Object(e.b)("strong",{parentName:"p"},`Help, I'm not familiar with any color by the name "#888"!`)," ",Object(e.b)("inlineCode",{parentName:"p"},"#888")," is equal parts red, green, and blue, which creates a nice readable grey. React Native uses the same color format as the web, so it supports hex triplets (this is what ",Object(e.b)("inlineCode",{parentName:"p"},"#888")," is), ",Object(e.b)("inlineCode",{parentName:"p"},"rgba"),", ",Object(e.b)("inlineCode",{parentName:"p"},"hsl"),", and a set of named colors like ",Object(e.b)("inlineCode",{parentName:"p"},"red"),", ",Object(e.b)("inlineCode",{parentName:"p"},"green"),", ",Object(e.b)("inlineCode",{parentName:"p"},"blue"),", and, uh, ",Object(e.b)("inlineCode",{parentName:"p"},"peru")," and ",Object(e.b)("inlineCode",{parentName:"p"},"papayawhip"),". ",Object(e.b)("a",P({parentName:"p"},{href:"https://reactnative.dev/docs/colors"}),"Read more about colors in React Native here"),".")),Object(e.b)("p",null,"Good, that looks better! If you want to learn more about the other styles available on the Text component, ",Object(e.b)("a",P({parentName:"p"},{href:"https://reactnative.dev/docs/text#style"}),"you can read more here"),"."),Object(e.b)("p",null,"Next we're going to look at adding the logo, ",Object(e.b)("a",P({parentName:"p"},{href:"/tutorial/image/"}),"let's continue on to looking at the Image component for that"),"."))}l.isMDXComponent=!0},kiQV:function(b){b.exports=JSON.parse(`{"name":"expo-docs","version":"45.0.0","private":true,"scripts":{"dev":"rimraf .next/preval && next dev -p 3002","build":"cross-env NODE_OPTIONS=--max-old-space-size=6144 next build","export":"yarn run build && next export && yarn run export-issue-404","export-issue-404":"echo \\"\u{1F6E0}  Patching https://github.com/vercel/next.js/issues/16528\\"; cp out/404/index.html out/404.html","export-server":"http-server out -p 8000","import-react-native-docs":"node ./scripts/import-react-native-docs.js","test-links":"node --async-stack-traces --unhandled-rejections=strict ./scripts/test-links.js","prettier":"prettier --write '**/*.{js,ts,tsx,md}'","lint":"tsc --noEmit && eslint .","lint-case":"case-police 'pages/**/*.md' -p brands,general,products,softwares -d expo-dict.json","lint-links":"remark -u validate-links ./pages","watch":"tsc --noEmit -w","test":"jest","schema-sync":"node --async-stack-traces --unhandled-rejections=strict ./scripts/schema-sync.js","remove-version":"node --unhandled-rejections=strict ./scripts/remove-version.js"},"resolutions":{"webpack":"^5.28.0"},"dependencies":{"@emotion/react":"^11.4.0","@expo/spawn-async":"^1.5.0","@expo/styleguide":"^4.0.4","@mdx-js/loader":"^1.6.22","@mdx-js/mdx":"^1.6.22","@mdx-js/react":"^1.6.22","@mdx-js/runtime":"^1.6.22","@reach/tabs":"^0.15.0","@sentry/browser":"^5.6.1","date-fns":"^2.28.0","docsearch.js":"^2.5.2","emoji-regex":"^9.2.2","front-matter":"^2.3.0","fs-extra":"^6.0.1","github-slugger":"^1.3.0","hotshot":"^1.0.5","lodash":"^4.17.20","next":"^11.1.4","nprogress":"0.2.0","path-browserify":"^1.0.1","prism-react-renderer":"1.0.2","prop-types":"15.7.2","react":"^17.0.2","react-diff-view":"^2.4.7","react-dom":"^17.0.2","react-feather":"^2.0.9","react-grid-system":"^8.1.3","react-markdown":"^6.0.3","react-player":"^1.11.1","react-visibility-sensor":"^5.1.1","remark-gfm":"^1.0.0","tippy.js":"^6.3.1"},"devDependencies":{"@apidevtools/json-schema-ref-parser":"^9.0.9","@babel/core":"^7.13.14","@emotion/babel-preset-css-prop":"^11.2.0","@emotion/jest":"^11.7.1","@testing-library/jest-dom":"^5.16.4","@testing-library/react":"^12.1.5","@testing-library/react-hooks":"^7.0.2","@testing-library/user-event":"^14.1.1","@types/cacache":"^15.0.1","@types/fs-extra":"^9.0.11","@types/github-slugger":"^1.3.0","@types/google.analytics":"^0.0.41","@types/gtag.js":"^0.0.6","@types/lodash":"^4.14.161","@types/long":"^4.0.1","@types/mdx-js__react":"^1.5.3","@types/node":"^14.11.2","@types/nprogress":"^0.2.0","@types/react":"^17.0.11","axios":"^0.21.2","babel-plugin-module-resolver":"3.1.1","babel-plugin-preval":"^3.0.1","case-police":"^0.5.3","cross-env":"^5.2.0","danger":"^9.2.10","esbuild-loader":"^2.13.1","eslint":"^8.6.0","eslint-config-next":"^10.2.3","eslint-config-universe":"^10.0.0","eslint-plugin-lodash":"^7.3.0","eslint-plugin-testing-library":"^5.5.0","http-server":"^0.12.3","jest":"^27.4.7","js-yaml":"^4.1.0","prettier":"^2.3.1","puppeteer":"^10.2.0","react-test-renderer":"^17.0.2","rehype-slug":"^4.0.1","remark-cli":"^9.0.0","remark-frontmatter":"^2.0.0","remark-validate-links":"^10.0.4","rimraf":"^3.0.2","semver":"^7.3.5","sitemap":"^6.3.0","typescript":"^4.5.4","unist-builder":"^2.0.0","unist-util-visit":"^2.0.3"}}`)},ufKf:function(b,u,t){"use strict";t.d(u,"a",function(){return e}),t.d(u,"b",function(){return i});var e="https://snack.expo.dev";function i(n){var r=n.templateId,h=n.code,d=n.files,O=n.baseURL,x={};return d&&Object.keys(d).forEach(function(E){var v=d[E],w=/\.(jsx?|tsx?|json|md)$/i.test(E);w?x[E]={type:"CODE",url:v.match(/^https?:\/\//)?v:"".concat(O,"/").concat(v)}:x[E]={type:"ASSET",contents:v}}),r?x["App.js"]={type:"CODE",url:"".concat(O,"/").concat(r,".js")}:h&&(x["App.js"]={type:"CODE",contents:h}),x}},z7pX:function(b,u,t){"use strict";t.d(u,"a",function(){return d});var e=t("6FTQ");function i(O){if(Array.isArray(O))return Object(e.a)(O)}function n(O){if(typeof Symbol!="undefined"&&O[Symbol.iterator]!=null||O["@@iterator"]!=null)return Array.from(O)}var r=t("8rE2");function h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(O){return i(O)||n(O)||Object(r.a)(O)||h()}}},[["VJzc",1,0,2,3]]]);
