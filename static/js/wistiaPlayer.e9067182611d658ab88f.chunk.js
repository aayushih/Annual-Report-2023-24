(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="3a9a46d7-9c38-492c-ba7f-090106258f7f",s._sentryDebugIdIdentifier="sentry-dbid-3a9a46d7-9c38-492c-ba7f-090106258f7f")}catch{}})();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="3a9a46d7-9c38-492c-ba7f-090106258f7f",s._sentryDebugIdIdentifier="sentry-dbid-3a9a46d7-9c38-492c-ba7f-090106258f7f")}catch{}}();var _global=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};_global.SENTRY_RELEASE={id:"4.30.24@fa26bea77ff"},(self.webpackChunkvisme_web=self.webpackChunkvisme_web||[]).push([[6215],{116986:(s,n,i)=>{i.d(n,{u:()=>d});const d=function(h){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"https:";return!h.startsWith("//")||window.location.protocol!=="file:"?h:`${u}${h}`}},397042:(s,n,i)=>{i.d(n,{A:()=>o});var d=i(715390);const h=333,u=1;class l{videoId;el;endSeconds;startSeconds;thumbnail;additionalOptions;autoplay;looped;isPlayOnSetLoopedEnabled;muted;onEnd;onPause;onPlaying;onReady;onSeek;onMuteToggle;withControls;videoPlayer=null;isReady=!1;isFinished=!1;isFirstStart=!1;_playingTimer=null;_willPlayOnReady=!1;constructor({el:e,videoId:t,muted:r=!1,looped:a=!1,isPlayOnSetLoopedEnabled:c=!0,autoplay:_=!1,withControls:f=!1,startSeconds:p=0,thumbnail:m=null,additionalOptions:g={},endSeconds:P=null,onEnd:v=()=>null,onReady:E=()=>null,onPlaying:b=()=>null,onSeek:w=()=>null,onPause:T=()=>null,onMuteToggle:S=()=>null}){this.el=e,this.videoId=t,this.muted=r,this.looped=a,this.isPlayOnSetLoopedEnabled=c,this.autoplay=_,this.withControls=f,this.startSeconds=p,this.endSeconds=P,this.onEnd=v,this.onReady=E,this.onPlaying=b,this.onPause=T,this.onMuteToggle=S,this.onSeek=w,this.thumbnail=m,this.additionalOptions=g,this.init().catch(this.handleError)}init(){return this.createPlayer()}async createPlayer(){await this._createPlayer(),this.isReady=!0,d.A.addToList(this),(this.autoplay||this._willPlayOnReady)&&this.play(),this.onReady(),this.isFirstStart=!0}async handleStartTime(){await this.getCurrentTime()<this.startSeconds&&this.seekTo(this.startSeconds)}async handleEndTime(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const t=await this.getCurrentTime();!this.endSeconds||t<this.endSeconds||(this.isFinished=!0,this.looped||e?(this.seekTo(this.startSeconds),this.play()):(this.pause(),this.handleEnd()))}setStartSeconds(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.startSeconds!==e&&(this.startSeconds=e,this.handleStartTime().catch(this.handleError))}setEndSeconds(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;this.endSeconds!==e&&(this.endSeconds=e,this.handleEndTime().catch(this.handleError))}async _createPlayer(){}async getDuration(){return 0}play(){this.isReady?this._play():this._willPlayOnReady=!0}_play(){}pause(){}stop(){this.pause()}async isPlaying(){return this.isReady?this._isPlaying():!1}async _isPlaying(){return!1}async togglePlaying(){await this.isPlaying()?this.pause():this.play()}setLooped(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.looped!==e&&(this.looped=e,this.looped&&this.isPlayOnSetLoopedEnabled&&this.play(),this._setLooped(e))}_setLooped(e){}mute(){}unMute(){}async isMuted(){return!1}_handleMute(e){this.onMuteToggle(e)}forceAbortBuffering(){}destroy(){d.A.removeFromList(this),this._playingTimer!==null&&clearInterval(this._playingTimer),this._destroy()}_destroy(){}seekTo(e){}async getCurrentTime(){return 0}_handleSeek(e){this.onSeek(e)}_handlePlaying(){this.onPlaying(),this.handleStartTime().catch(this.handleError),this.handleEndTime(!0).catch(this.handleError),this.checkIsFinished(),this._playingTimer||(this._playingTimer=setInterval(()=>{this.handleEndTime(!1).catch(this.handleError),this.checkIsFinished()},h))}_handlePause(){this.onPause(),this._playingTimer!==null&&(clearInterval(this._playingTimer),this._playingTimer=null)}handleEnd(){this.isFinished=!0,this.looped?this.play():this.onEnd&&this.onEnd()}async checkIsFinished(){const e=await this.getDuration(),t=await this.getCurrentTime();e-t<u&&(this.isFinished=!0)}playbackRate(){return this._playbackRate()}_playbackRate(){return 1}handleError(e){console.error(e)}}const o=l},715390:(s,n,i)=>{i.d(n,{A:()=>u});var d=i(114317);const u=d.types.model({}).volatile(()=>({players:new Set})).actions(l=>({addToList(o){l.players.add(o)},removeFromList(o){l.players.delete(o)},pauseAllPlayersExcept(o){l.players.forEach(async y=>{y!==o&&y.pause()})}})).actions(l=>({pauseAllPlayers(){l.pauseAllPlayersExcept(null)}})).create()},951045:(s,n,i)=>{i.d(n,{default:()=>y});var d=i(116986),h=i(216960),u=i(397042);const l=(0,d.u)("//fast.wistia.com/assets/external/E-v1.js");window._wq=window._wq||[];class o extends u.A{previousTime=0;init(){return(0,h.k)(l).then(()=>this.createPlayer()).catch(this.handleError)}_createPlayer(){return new Promise(t=>{const r=Wistia.api(this.videoId);if(r){this._handleReady(r,t);return}window._wq.push({id:this.videoId,onReady:a=>this._handleReady(a,t),options:{autoPlay:this.autoplay,muted:this.muted,playbar:this.withControls,volumeControl:this.withControls,playButton:this.withControls}})})}_handleReady(t,r){var a;this.videoPlayer=t,this.muted&&this.videoPlayer.mute(),this.videoPlayer.bind("play",this._handlePlaying.bind(this)),this.videoPlayer.bind("pause",this._handlePause.bind(this)),this.videoPlayer.bind("end",this.handleEnd.bind(this)),this.videoPlayer.bind("timechange",this._handleTimeChange.bind(this)),this.videoPlayer.bind("volumechange",this._handleVolumeChange.bind(this)),(a=this.el)===null||a===void 0||a.addEventListener("click",this._stopPropagation),r()}_handleVolumeChange=(t,r)=>{this._handleMute(r)};_handleTimeChange=t=>{const a=t-this.previousTime,c=Math.abs(a);let _=!1;c>0&&(a<0&&c>.1||c>.45*this.playbackRate())&&(_=!0),this.previousTime=t,_&&this._handleSeek(t)};async getDuration(){return this.videoPlayer.duration()}_play(){this.videoPlayer.play()}pause(){this.videoPlayer.pause()}async _isPlaying(){return this.videoPlayer.state()==="playing"}mute(){this.videoPlayer.mute()}unMute(){this.videoPlayer.unmute(),this.videoPlayer.volume(100)}async isMuted(){return this.videoPlayer.isMuted()}seekTo(t){this.videoPlayer.time(t)}async getCurrentTime(){return this.videoPlayer.time()}_destroy(){this.videoPlayer&&this.el&&(this.el.removeEventListener("click",this._stopPropagation),this.videoPlayer.remove())}_stopPropagation(t){t.stopPropagation()}}const y=o}}]);

//# sourceMappingURL=wistiaPlayer.e9067182611d658ab88f.chunk.js.map