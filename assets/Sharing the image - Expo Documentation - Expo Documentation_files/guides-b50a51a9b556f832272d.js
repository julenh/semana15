_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[137],{"7ljp":function(h,u,p){"use strict";p.d(u,"a",function(){return P}),p.d(u,"b",function(){return o});var e=p("q1tI"),s=p.n(e);function x(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function j(){return j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},j.apply(this,arguments)}function d(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,r)}return i}function b(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?d(Object(i),!0).forEach(function(r){x(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}function N(t,n){if(t==null)return{};var i={},r=Object.keys(t),l,c;for(c=0;c<r.length;c++)l=r[c],!(n.indexOf(l)>=0)&&(i[l]=t[l]);return i}function y(t,n){if(t==null)return{};var i=N(t,n),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)r=c[l],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(i[r]=t[r]))}return i}var a=function(n){return typeof n=="function"},w=s.a.createContext({}),T=function(n){return function(i){var r=O(i.components);return s.a.createElement(n,j({},i,{components:r}))}},O=function(n){var i=s.a.useContext(w),r=i;return n&&(r=a(n)?n(i):b(b({},i),n)),r},P=function(n){var i=O(n.components);return s.a.createElement(w.Provider,{value:i},n.children)},E="mdxType",D={inlineCode:"code",wrapper:function(n){var i=n.children;return s.a.createElement(s.a.Fragment,{},i)}},v=s.a.forwardRef(function(t,n){var i=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,f=y(t,["components","mdxType","originalType","parentName"]),g=O(i),m=r,S=g["".concat(c,".").concat(m)]||g[m]||D[m]||l;return i?s.a.createElement(S,b(b({ref:n},f),{},{components:i})):s.a.createElement(S,b({ref:n},f))});v.displayName="MDXCreateElement";function o(t,n){var i=arguments,r=n&&n.mdxType;if(typeof t=="string"||r){var l=i.length,c=new Array(l);c[0]=v;var f={};for(var g in n)hasOwnProperty.call(n,g)&&(f[g]=n[g]);f.originalType=t,f[E]=typeof t=="string"?t:r,c[1]=f;for(var m=2;m<l;m++)c[m]=i[m];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,i)}},"Q+Wy":function(h,u,p){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides",function(){return p("d+v9")}])},Qetd:function(h,u,p){"use strict";var e=Object.assign.bind(Object);h.exports=e,h.exports.default=h.exports},"d+v9":function(h,u,p){"use strict";p.r(u),p.d(u,"meta",function(){return O}),p.d(u,"headings",function(){return P}),p.d(u,"default",function(){return v});var e=p("7ljp"),s=Object.defineProperty,x=Object.defineProperties,j=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,y=(o,t,n)=>t in o?s(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,a=(o,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(o,n,t[n]);if(d)for(var n of d(t))N.call(t,n)&&y(o,n,t[n]);return o},w=(o,t)=>x(o,j(t)),T=(o,t)=>{var n={};for(var i in o)b.call(o,i)&&t.indexOf(i)<0&&(n[i]=o[i]);if(o!=null&&d)for(var i of d(o))t.indexOf(i)<0&&N.call(o,i)&&(n[i]=o[i]);return n};const O={title:"Guides to get things done",hideTOC:!0},P=[{depth:3,type:"text",title:"Fundamentals"},{depth:3,type:"text",title:"Distributing Your App"},{depth:3,type:"text",title:"Development Builds"},{depth:3,type:"text",title:"Expo Accounts"},{depth:3,type:"text",title:"Bare Workflow"},{depth:3,type:"text",title:"Push Notifications"},{depth:3,type:"text",title:"UI Programming"},{depth:3,type:"text",title:"Assorted Guides"},{depth:3,type:"text",title:"Regulatory Compliance"},{depth:3,type:"text",title:"Technical Specs"},{depth:2,type:"text",title:"Looking for something else?"}],E={meta:O,headings:P},D="wrapper";function v(o){var t=o,{components:n}=t,i=T(t,["components"]);return Object(e.b)(D,w(a(a({},E),i),{components:n,mdxType:"MDXLayout"}),Object(e.b)("p",null,"In the ",Object(e.b)("a",a({parentName:"p"},{href:"/../../../../../../.."}),"'Get Started'")," section we walk through how you can ",Object(e.b)("a",a({parentName:"p"},{href:"/get-started/installation/"}),"install Expo tools"),", ",Object(e.b)("a",a({parentName:"p"},{href:"/get-started/create-a-new-app/"}),"create your first app"),", ",Object(e.b)("a",a({parentName:"p"},{href:"/tutorial/planning/"}),"guide you through a tutorial"),", and give you a ",Object(e.b)("a",a({parentName:"p"},{href:"/introduction/managed-vs-bare/"}),"conceptual overview")," of what working with Expo tools looks like, the limitations, and common questions folks have."),Object(e.b)("p",null,"The guides section of the documentation is oriented towards getting things done: we explain how to use certain tools and how to perform tasks that you may encounter while building your app. The guides are split up into a few sections:"),Object(e.b)("h3",a({},{id:"fundamentals"}),"Fundamentals"),Object(e.b)("p",null,"In this section we cover the fundamentals of developing with Expo's tools. Some popular topics are:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/workflow/expo-cli/"}),"Expo CLI")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/workflow/debugging/"}),"Debugging")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/workflow/ios-simulator/"}),"iOS Simulator")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/workflow/android-studio-emulator/"}),"Android Emulator")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/guides/app-icons/"}),"App Icons")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/guides/splash-screens/"}),"Splash Screens"))),Object(e.b)("h3",a({},{id:"distributing-your-app"}),"Distributing Your App"),Object(e.b)("p",null,"In this section we cover topics related to building, shipping, and updating your app with Expo's tools and services like ",Object(e.b)("a",a({parentName:"p"},{href:"/../../../../../../../build/introduction/"}),"EAS Build")," and ",Object(e.b)("a",a({parentName:"p"},{href:"/../../../../../../../submit/introduction/"}),"EAS Submit"),". Some popular topics are:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/distribution/introduction/"}),"Distributing your App on the App Store and Play Store")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/app-signing/app-credentials/"}),"App Signing")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/distribution/release-channels/"}),"Release Channels"))),Object(e.b)("h3",a({},{id:"development-builds"}),"Development Builds"),Object(e.b)("p",null,"This section covers creating Development Builds with customizations beyond what is possible within the Expo Go app."),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/development/introduction/"}),"Introduction to Development Builds")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/development/getting-started/"}),"Getting Started with Development Builds"))),Object(e.b)("h3",a({},{id:"expo-accounts"}),"Expo Accounts"),Object(e.b)("p",null,"This section is all about how to best use your Expo account. We cover topics like:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/accounts/account-types/"}),"Personal Accounts vs Organizations")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/accounts/programmatic-access/"}),"Setting up programmatic access")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/accounts/working-together/"}),"Adding members to your organization"))),Object(e.b)("h3",a({},{id:"bare-workflow"}),"Bare Workflow"),Object(e.b)("p",null,"In this section, we cover topics specific to the bare workflow:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/bare/unimodules-full-list/"}),"See a walkthrough of the bare workflow")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/bare/existing-apps/"}),"Integrating the Expo SDK into an existing React Native app")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/bare/unimodules-full-list/"}),"Learn which APIs from the Expo SDK are available in bare React Native apps")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/bare/using-web/"}),"Using Expo for web"))),Object(e.b)("h3",a({},{id:"push-notifications"}),"Push Notifications"),Object(e.b)("p",null,"This section covers all things related to push notifications, including a full walkthrough on setting up your app to use Expo's push notification service, as well as:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/push-notifications/faq/"}),"An FAQ and troubleshooting guide")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/push-notifications/sending-notifications-custom/"}),"A guide to sending notifications directly through APNs and FCM"))),Object(e.b)("h3",a({},{id:"ui-programming"}),"UI Programming"),Object(e.b)("p",null,"This section covers user interface topics such as:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/ui-programming/image-background/"}),"Setting a component's background image")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/ui-programming/implementing-a-checkbox/"}),"Implementing a checkbox")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/ui-programming/react-native-toast/"}),"How to display a popup toast"))),Object(e.b)("h3",a({},{id:"assorted-guides"}),"Assorted Guides"),Object(e.b)("p",null,"This section contains guides on various topics, like:"),Object(e.b)("ul",null,Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/guides/configuring-updates/"}),"Configuring Updates")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/guides/routing-and-navigation/"}),"Setting up Routing and Navigation")),Object(e.b)("li",{parentName:"ul"},Object(e.b)("a",a({parentName:"li"},{href:"/guides/permissions/"}),"App Permissions"))),Object(e.b)("h3",a({},{id:"regulatory-compliance"}),"Regulatory Compliance"),Object(e.b)("p",null,"This section contains information on things like ",Object(e.b)("a",a({parentName:"p"},{href:"/regulatory-compliance/data-and-privacy-protection/"}),"Data and Privacy protection"),", ",Object(e.b)("a",a({parentName:"p"},{href:"/regulatory-compliance/gdpr/"}),"GDPR"),", and ",Object(e.b)("a",a({parentName:"p"},{href:"/regulatory-compliance/hipaa/"}),"HIPPA"),"."),Object(e.b)("h3",a({},{id:"technical-specs"}),"Technical Specs"),Object(e.b)("p",null,"This section contains technical specifications, such as the ",Object(e.b)("a",a({parentName:"p"},{href:"/technical-specs/expo-updates-0/"}),"spec for Expo Updates"),"."),Object(e.b)("h2",a({},{id:"looking-for-something-else"}),"Looking for something else?"),Object(e.b)("p",null,"The ",Object(e.b)("a",a({parentName:"p"},{href:"/versions/latest/"}),"API Reference")," includes comprehensive documentation around the built-in APIs in the Expo SDK and how to use them."))}v.isMDXComponent=!0}},[["Q+Wy",1,0]]]);
