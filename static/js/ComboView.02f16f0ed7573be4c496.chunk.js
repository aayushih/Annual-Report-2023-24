(function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[a]="92f2f478-9a12-4c6a-b2f5-6b90b2c7f82a",c._sentryDebugIdIdentifier="sentry-dbid-92f2f478-9a12-4c6a-b2f5-6b90b2c7f82a")}catch{}})();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},function(){try{var c=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(c._sentryDebugIds=c._sentryDebugIds||{},c._sentryDebugIds[a]="92f2f478-9a12-4c6a-b2f5-6b90b2c7f82a",c._sentryDebugIdIdentifier="sentry-dbid-92f2f478-9a12-4c6a-b2f5-6b90b2c7f82a")}catch{}}();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},(self.webpackChunkvisme_web=self.webpackChunkvisme_web||[]).push([[9828],{287689:(c,a,t)=>{t.r(a),t.d(a,{default:()=>s});var r=t(411855),_=t(603035),d=t(576579),o=t(637563);const s=e=>{let{object:n,isThumb:l}=e;return l?r.createElement(_.A,{object:n}):r.createElement(d.A,{object:n,isThumb:l,Store:o.A})}},576579:(c,a,t)=>{t.d(a,{A:()=>E});var r=t(411855),_=t(55946),d=t(991949),o=t(877495),i=t(114317);const e=(v,u)=>{const f=(0,r.useRef)(null);return(0,r.useCallback)(g=>{if(f.current&&(0,i.destroy)(f.current),!g){f.current=null;return}f.current=v.create(),f.current!==null&&f.current.init({chartModel:u,rootNode:g})},[])},n={rootNodeWrapper:"rootNodeWrapper--WIK3NUM"},l=v=>{let{object:u,Store:f}=v;const{uiStateStore:m}=(0,d.g)(),g=m?.zoom??1,b=e(f,u);return r.createElement("div",{className:n.rootNodeWrapper},r.createElement("div",{ref:b,style:{width:u.width*g,height:u.height*g}},!u.shouldHideOnFirstInitialization&&u.isInitializationInProcess&&r.createElement(o.A,null)))},E=(0,_.PA)(l)},603035:(c,a,t)=>{t.d(a,{A:()=>i});var r=t(411855),_=t(55946),d=t(573590);const i=(0,_.PA)(s=>{let{object:e}=s;if("handleDrawImageError"in e){const n=e;return r.createElement(d.A,{src:n.url,onError:n.handleDrawImageError})}return r.createElement(d.A,{src:e.url,onError:()=>e.setProps({shouldExport:!0,isExported:!1})})})},991949:(c,a,t)=>{t.d(a,{g:()=>o,t:()=>d});var r=t(411855);const _=(0,r.createContext)({appStore:null,commentsStore:null,uiStateStore:null}),d=i=>{let{children:s,stores:e}=i;return r.createElement(_.Provider,{value:e},s)};function o(){return(0,r.useContext)(_)}},573590:(c,a,t)=>{t.d(a,{A:()=>s});var r=t(411855),_=t(104751);const d=(e,n)=>{if(e?.target){const l=e.target;l.onerror=null,n&&location.protocol==="file:"&&n.charAt(0)==="/"&&(n=n.substring(1)),n&&l.src!==n&&(l.src=n)}},o=(e,n)=>{if(!(!e&&!n))return!e&&n?l=>d(l,n):e&&!n?e:l=>{let E;return e&&(E=e(l)),d(l,n),E}},s=(0,r.forwardRef)((e,n)=>{let{onLoad:l,onError:E,onClick:v,defaultSrc:u,alt:f,src:m,...g}=e;const b=r.useMemo(()=>o(E,u),[E,u]),p=m||u,A=r.useMemo(()=>{if((0,_.shouldSendOriginHeader)(m))return"anonymous"},[m]);return r.createElement("img",{ref:n,onLoad:l,onError:b,alt:f,crossOrigin:A,src:p,onClick:v,...g})})},877495:(c,a,t)=>{t.d(a,{A:()=>o});var r=t(411855),_=t(270851);const o=i=>{let{theme:s="light",children:e="",className:n="",wrapperClassName:l="",style:E={}}=i;return r.createElement("div",{"data-test-id":`spinner--${s}`,className:`spinner spinner--${s} ${n}`,style:E},r.createElement("div",{className:(0,_.A)("spinner__wrapper",l)},["light","light-blue"].includes(s)?r.createElement("div",{className:"spinner__circle"}):r.createElement(r.Fragment,null,r.createElement("div",{className:"spinner__circle spinner__circle-1"}),r.createElement("div",{className:"spinner__circle spinner__circle-2"}),r.createElement("div",{className:"spinner__circle spinner__circle-3"}),r.createElement("div",{className:"spinner__circle spinner__circle-4"}))),e)}},270851:(c,a,t)=>{t.d(a,{A:()=>d});function r(o){var i,s,e="";if(typeof o=="string"||typeof o=="number")e+=o;else if(typeof o=="object")if(Array.isArray(o)){var n=o.length;for(i=0;i<n;i++)o[i]&&(s=r(o[i]))&&(e&&(e+=" "),e+=s)}else for(s in o)o[s]&&(e&&(e+=" "),e+=s);return e}function _(){for(var o,i,s=0,e="",n=arguments.length;s<n;s++)(o=arguments[s])&&(i=r(o))&&(e&&(e+=" "),e+=i);return e}const d=_}}]);

//# sourceMappingURL=ComboView.02f16f0ed7573be4c496.chunk.js.map