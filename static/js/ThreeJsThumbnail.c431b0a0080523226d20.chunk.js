(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="8f69858b-65a5-4fdd-9378-0f0ed7ac09ff",s._sentryDebugIdIdentifier="sentry-dbid-8f69858b-65a5-4fdd-9378-0f0ed7ac09ff")}catch{}})();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="8f69858b-65a5-4fdd-9378-0f0ed7ac09ff",s._sentryDebugIdIdentifier="sentry-dbid-8f69858b-65a5-4fdd-9378-0f0ed7ac09ff")}catch{}}();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},(self.webpackChunkvisme_web=self.webpackChunkvisme_web||[]).push([[5292],{59770:(s,a,o)=>{var n=o(997201),l=o(383758);function c(m,d,i){var v=m==null?0:m.length;return v?(d=i||d===void 0?1:l(d),n(m,d<0?0:d,v)):[]}s.exports=c},367303:(s,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>p});var n=o(411855),l=o(55946),c=o(991949),m=o(877495),d=o(629140),i=o(322258),v=o(347770);const S=u=>{let{object:r,child:e,thumbBase64:f}=u;const{appStore:b}=(0,c.g)(),g=(0,n.useRef)(null);return(0,v.A)(g,r.flipX,!1,b.settings.mode),n.createElement("img",{ref:g,alt:e.name,src:e.previewStaticURL||f||e.pose.previewUrl,height:r.height})},I=(0,l.PA)(S),O=u=>{let{object:r,child:e}=u;var f,b,g;const{appStore:h}=(0,c.g)(),y=h==null||(f=h.vismeObjectsStore)===null||f===void 0?void 0:f.characterEditorStore,[D,j]=(0,n.useState)(""),[C,T]=(0,n.useState)(!1),R=(b=h.settings)===null||b===void 0?void 0:b.isEditorMode,L=(g=h.settings)===null||g===void 0?void 0:g.isDocumentView,P=e.type===i.u.CHARACTER,t=e.isCharacterEdited&&r.isSelected&&y?y?.character:e.threeJsCharacter;return(0,n.useEffect)(()=>{if(!(!R&&!L||!e?.isAssetsLoaded&&P||!e?.cachedAssets&&P))if(P&&t){let A=!1;const J={backgroundTransparent:!0,camera:{position:[0,.83,2.5],rotation:[0,0,0]}};return d.f.generateVismeObjectImage({vismeObject:t,vismeObjectPoseUrl:e.modelUrl,sceneConfig:J,cachedAssets:e.cachedAssets}).then(U=>{A||j(U)}).finally(()=>{A||T(!0)}),()=>{A=!0}}else T(!0)},[e?.poseUrl,e?.isAssetsLoaded,t?.style,t?.gender,t?.skinTone,t?.eyeColor,JSON.stringify(t?.characterAssetsColors),JSON.stringify(t?.assets)]),n.createElement(n.Fragment,null,C?n.createElement(I,{object:r,child:e,thumbBase64:D}):n.createElement(m.A,null))},w=(0,l.PA)(O),E=u=>{let{object:r}=u;return n.createElement(n.Fragment,null,r.allChildren.map(e=>n.createElement(w,{key:e.id,child:e,object:r})))},p=(0,l.PA)(E)},629140:(s,a,o)=>{"use strict";o.d(a,{f:()=>d});var n=o(59770),l=o.n(n),c=o(114317);const d=c.types.model("VismeObjectImageGeneratorStore").volatile(()=>({counter:0,generationQueue:[]})).views(()=>({get isDebug(){return window.location.hash==="#debugAvatar"}})).actions(i=>({shiftQueue(){i.generationQueue=l()(i.generationQueue)}})).actions(i=>({generateVismeObjectImage:(0,c.flow)(function*(v){let{vismeObject:S,vismeObjectPoseUrl:I,sceneConfig:O,cachedAssets:w}=v,E=null,p=null;const u=new Promise((e,f)=>{E=e,p=f}),r={vismeObject:S,vismeObjectPoseUrl:I,sceneConfig:O,cachedAssets:w,resolvePromise:E,rejectPromise:p,queueOrder:i.counter};return i.counter++,i.generationQueue=[...i.generationQueue,r],u.finally(()=>{i.isDebug||i.shiftQueue()})})})).create()}}]);

//# sourceMappingURL=ThreeJsThumbnail.c431b0a0080523226d20.chunk.js.map