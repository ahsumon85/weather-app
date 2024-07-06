function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./vaadin-big-decimal-field-e51def24-D-mIqBmX.js","./vaadin-text-field-0b3db014-BjKLPH9n.js","./vaadin-button-2511ad84-B5SSvIPp.js","./vaadin-checkbox-group-a7c65bf2-B8gCyUhO.js","./vaadin-checkbox-4e68df64-BIjYVE_B.js","./vaadin-combo-box-96451ddd-D13xNzDN.js","./vaadin-confirm-dialog-4d718829-DnDV6jGh.js","./vaadin-custom-field-42c85b9e-BtIf7nrh.js","./vaadin-date-picker-f2001167-TrsEFief.js","./vaadin-date-time-picker-c8c047a7-DXsQubxP.js","./vaadin-email-field-d7a35f04-BMY1daVg.js","./vaadin-grid-pro-ff415555-BMjGkIiE.js","./vaadin-grid-0a4791c2-Cx79osEb.js","./vaadin-integer-field-85078932-BK4m9sY8.js","./vaadin-login-form-638996c6-Bkpe1UR-.js","./vaadin-login-overlay-f8a5db8a-c5KY3GWq.js","./vaadin-message-input-996ac37c-Df3m9M7S.js","./vaadin-multi-select-combo-box-a3373557-BLknN9dM.js","./vaadin-number-field-cb3ee8b2-BVaHIQo-.js","./vaadin-password-field-d289cb18-DDtkL7Xh.js","./vaadin-radio-group-88b5afd8-DEeB-hAV.js","./vaadin-select-df6e9947-CW2SHkx-.js","./vaadin-text-area-83627ebc-DWwME7Gy.js","./vaadin-time-picker-715ec415-Mn4V5cNU.js","./vaadin-upload-d3c162ed-CDFsWhuT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.reactRouter=!1;const ar="modulepreload",lr=function(o,e){return new URL(o,e).href},mi={},g=function(e,t,i){let n=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link");n=Promise.all(t.map(s=>{if(s=lr(s,i),s in mi)return;mi[s]=!0;const l=s.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!i)for(let h=r.length-1;h>=0;h--){const u=r[h];if(u.href===s&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":ar,l||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),l)return new Promise((h,u)=>{c.addEventListener("load",h),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})}))}return n.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};function Ct(o){return o=o||[],Array.isArray(o)?o:[o]}function ee(o){return`[Vaadin.Router] ${o}`}function dr(o){if(typeof o!="object")return String(o);const e=Object.prototype.toString.call(o).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(o)}`:e}const Tt="module",$t="nomodule",$o=[Tt,$t];function vi(o){if(!o.match(/.+\.[m]?js$/))throw new Error(ee(`Unsupported type for bundle "${o}": .js or .mjs expected.`))}function _n(o){if(!o||!Q(o.path))throw new Error(ee('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=o.bundle,t=["component","redirect","bundle"];if(!ke(o.action)&&!Array.isArray(o.children)&&!ke(o.children)&&!Pt(e)&&!t.some(i=>Q(o[i])))throw new Error(ee(`Expected route config "${o.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(Q(e))vi(e);else if($o.some(i=>i in e))$o.forEach(i=>i in e&&vi(e[i]));else throw new Error(ee('Expected route bundle to include either "'+$t+'" or "'+Tt+'" keys, or both'));o.redirect&&["bundle","component"].forEach(i=>{i in o&&console.warn(ee(`Route config "${o.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function fi(o){Ct(o).forEach(e=>_n(e))}function gi(o,e){let t=document.head.querySelector('script[src="'+o+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",o),e===Tt?t.setAttribute("type",Tt):e===$t&&t.setAttribute($t,""),t.async=!0),new Promise((i,n)=>{t.onreadystatechange=t.onload=r=>{t.__dynamicImportLoaded=!0,i(r)},t.onerror=r=>{t.parentNode&&t.parentNode.removeChild(t),n(r)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function cr(o){return Q(o)?gi(o):Promise.race($o.filter(e=>e in o).map(e=>gi(o[e],e)))}function Je(o,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${o}`,{cancelable:o==="go",detail:e}))}function Pt(o){return typeof o=="object"&&!!o}function ke(o){return typeof o=="function"}function Q(o){return typeof o=="string"}function wn(o){const e=new Error(ee(`Page not found (${o.pathname})`));return e.context=o,e.code=404,e}const Le=new class{};function ur(o){const e=o.port,t=o.protocol,r=t==="http:"&&e==="80"||t==="https:"&&e==="443"?o.hostname:o.host;return`${t}//${r}`}function bi(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let e=o.target;const t=o.composedPath?o.composedPath():o.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ur(e))!==window.location.origin)return;const{pathname:n,search:r,hash:s}=e;Je("go",{pathname:n,search:r,hash:s})&&(o.preventDefault(),o&&o.type==="click"&&window.scrollTo(0,0))}const pr={activate(){window.document.addEventListener("click",bi)},inactivate(){window.document.removeEventListener("click",bi)}},hr=/Trident/.test(navigator.userAgent);hr&&!ke(window.PopStateEvent)&&(window.PopStateEvent=function(o,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(o,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function yi(o){if(o.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;Je("go",{pathname:e,search:t,hash:i})}const mr={activate(){window.addEventListener("popstate",yi)},inactivate(){window.removeEventListener("popstate",yi)}};var He=$n,vr=jo,fr=xr,gr=kn,br=Tn,En="/",Sn="./",yr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function jo(o,e){for(var t=[],i=0,n=0,r="",s=e&&e.delimiter||En,l=e&&e.delimiters||Sn,a=!1,d;(d=yr.exec(o))!==null;){var c=d[0],h=d[1],u=d.index;if(r+=o.slice(n,u),n=u+c.length,h){r+=h[1],a=!0;continue}var b="",pe=o[n],he=d[2],se=d[3],Kt=d[4],H=d[5];if(!a&&r.length){var oe=r.length-1;l.indexOf(r[oe])>-1&&(b=r[oe],r=r.slice(0,oe))}r&&(t.push(r),r="",a=!1);var $e=b!==""&&pe!==void 0&&pe!==b,Pe=H==="+"||H==="*",Jt=H==="?"||H==="*",ae=b||s,lt=se||Kt;t.push({name:he||i++,prefix:b,delimiter:ae,optional:Jt,repeat:Pe,partial:$e,pattern:lt?_r(lt):"[^"+me(ae)+"]+?"})}return(r||n<o.length)&&t.push(r+o.substr(n)),t}function xr(o,e){return kn(jo(o,e))}function kn(o){for(var e=new Array(o.length),t=0;t<o.length;t++)typeof o[t]=="object"&&(e[t]=new RegExp("^(?:"+o[t].pattern+")$"));return function(i,n){for(var r="",s=n&&n.encode||encodeURIComponent,l=0;l<o.length;l++){var a=o[l];if(typeof a=="string"){r+=a;continue}var d=i?i[a.name]:void 0,c;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(d.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(c=s(d[h],a),!e[l].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');r+=(h===0?a.prefix:a.delimiter)+c}continue}if(typeof d=="string"||typeof d=="number"||typeof d=="boolean"){if(c=s(String(d),a),!e[l].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');r+=a.prefix+c;continue}if(a.optional){a.partial&&(r+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return r}}function me(o){return o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _r(o){return o.replace(/([=!:$/()])/g,"\\$1")}function Cn(o){return o&&o.sensitive?"":"i"}function wr(o,e){if(!e)return o;var t=o.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return o}function Er(o,e,t){for(var i=[],n=0;n<o.length;n++)i.push($n(o[n],e,t).source);return new RegExp("(?:"+i.join("|")+")",Cn(t))}function Sr(o,e,t){return Tn(jo(o,t),e,t)}function Tn(o,e,t){t=t||{};for(var i=t.strict,n=t.start!==!1,r=t.end!==!1,s=me(t.delimiter||En),l=t.delimiters||Sn,a=[].concat(t.endsWith||[]).map(me).concat("$").join("|"),d=n?"^":"",c=o.length===0,h=0;h<o.length;h++){var u=o[h];if(typeof u=="string")d+=me(u),c=h===o.length-1&&l.indexOf(u[u.length-1])>-1;else{var b=u.repeat?"(?:"+u.pattern+")(?:"+me(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?d+=me(u.prefix)+"("+b+")?":d+="(?:"+me(u.prefix)+"("+b+"))?":d+=me(u.prefix)+"("+b+")"}}return r?(i||(d+="(?:"+s+")?"),d+=a==="$"?"$":"(?="+a+")"):(i||(d+="(?:"+s+"(?="+a+"))?"),c||(d+="(?="+s+"|"+a+")")),new RegExp(d,Cn(t))}function $n(o,e,t){return o instanceof RegExp?wr(o,e):Array.isArray(o)?Er(o,e,t):Sr(o,e,t)}He.parse=vr;He.compile=fr;He.tokensToFunction=gr;He.tokensToRegExp=br;const{hasOwnProperty:kr}=Object.prototype,Po=new Map;Po.set("|false",{keys:[],pattern:/(?:)/});function xi(o){try{return decodeURIComponent(o)}catch{return o}}function Cr(o,e,t,i,n){t=!!t;const r=`${o}|${t}`;let s=Po.get(r);if(!s){const d=[];s={keys:d,pattern:He(o,d,{end:t,strict:o===""})},Po.set(r,s)}const l=s.pattern.exec(e);if(!l)return null;const a=Object.assign({},n);for(let d=1;d<l.length;d++){const c=s.keys[d-1],h=c.name,u=l[d];(u!==void 0||!kr.call(a,h))&&(c.repeat?a[h]=u?u.split(c.delimiter).map(xi):[]:a[h]=u&&xi(u))}return{path:l[0],keys:(i||[]).concat(s.keys),params:a}}function Pn(o,e,t,i,n){let r,s,l=0,a=o.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(d){if(o===d)return{done:!0};const c=o.__children=o.__children||o.children;if(!r&&(r=Cr(a,e,!c,i,n),r))return{done:!1,value:{route:o,keys:r.keys,params:r.params,path:r.path}};if(r&&c)for(;l<c.length;){if(!s){const u=c[l];u.parent=o;let b=r.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),s=Pn(u,e.substr(b),t,r.keys,r.params)}const h=s.next(d);if(!h.done)return{done:!1,value:h.value};s=null,l++}return{done:!0}}}}function Tr(o){if(ke(o.route.action))return o.route.action(o)}function $r(o,e){let t=e;for(;t;)if(t=t.parent,t===o)return!0;return!1}function Pr(o){let e=`Path '${o.pathname}' is not properly resolved due to an error.`;const t=(o.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Ar(o,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const n={path:i,route:t};if(!o.chain)o.chain=[];else if(t.parent){let r=o.chain.length;for(;r--&&o.chain[r].route&&o.chain[r].route!==t.parent;)o.chain.pop()}o.chain.push(n)}}class Xe{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Tr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){fi(e);const t=[...Ct(e)];this.root.__children=t}addRoutes(e){return fi(e),this.root.__children.push(...Ct(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,Q(e)?{pathname:e}:e),i=Pn(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let r=null,s=null,l=t;function a(d,c=r.value.route,h){const u=h===null&&r.value.route;return r=s||i.next(u),s=null,!d&&(r.done||!$r(c,r.value.route))?(s=r,Promise.resolve(Le)):r.done?Promise.reject(wn(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,r.value),Ar(l,r.value),Promise.resolve(n(l)).then(b=>b!=null&&b!==Le?(l.result=b.result||b,l):a(d,c,b)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(d=>{const c=Pr(l);if(d?console.warn(c):d=new Error(c),d.context=d.context||l,d instanceof DOMException||(d.code=d.code||500),this.errorHandler)return l.result=this.errorHandler(d),l;throw d})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}Xe.pathToRegexp=He;const{pathToRegexp:_i}=Xe,wi=new Map;function An(o,e,t){const i=e.name||e.component;if(i&&(o.has(i)?o.get(i).push(e):o.set(i,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const r=t[n];r.parent=e,An(o,r,r.__children||r.children)}}function Ei(o,e){const t=o.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Si(o){let e=o.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Rr(o,e={}){if(!(o instanceof Xe))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,n)=>{let r=Ei(t,i);if(!r&&(t.clear(),An(t,o.root,o.root.__children),r=Ei(t,i),!r))throw new Error(`Route "${i}" not found`);let s=wi.get(r.fullPath);if(!s){let a=Si(r),d=r.parent;for(;d;){const b=Si(d);b&&(a=b.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),d=d.parent}const c=_i.parse(a),h=_i.tokensToFunction(c),u=Object.create(null);for(let b=0;b<c.length;b++)Q(c[b])||(u[c[b].name]=!0);s={toPath:h,keys:u},wi.set(a,s),r.fullPath=a}let l=s.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},d=Object.keys(n);for(let h=0;h<d.length;h++){const u=d[h];s.keys[u]||(a[u]=n[u])}const c=e.stringifyQueryParams(a);c&&(l+=c.charAt(0)==="?"?c:`?${c}`)}return l}}let ki=[];function Nr(o){ki.forEach(e=>e.inactivate()),o.forEach(e=>e.activate()),ki=o}const Ir=o=>{const e=getComputedStyle(o).getPropertyValue("animation-name");return e&&e!=="none"},Or=(o,e)=>{const t=()=>{o.removeEventListener("animationend",t),e()};o.addEventListener("animationend",t)};function Ci(o,e){return o.classList.add(e),new Promise(t=>{if(Ir(o)){const i=o.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;o.setAttribute("style",`position: absolute; ${n}`),Or(o,()=>{o.classList.remove(e),o.removeAttribute("style"),t()})}else o.classList.remove(e),t()})}const Lr=256;function Zt(o){return o!=null}function zr(o){const e=Object.assign({},o);return delete e.next,e}function K({pathname:o="",search:e="",hash:t="",chain:i=[],params:n={},redirectFrom:r,resolver:s},l){const a=i.map(d=>d.route);return{baseUrl:s&&s.baseUrl||"",pathname:o,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:n,redirectFrom:r,getUrl:(d={})=>yt(ve.pathToRegexp.compile(Rn(a))(Object.assign({},n,d)),s)}}function Ti(o,e){const t=Object.assign({},o.params);return{redirect:{pathname:e,from:o.pathname,params:t}}}function Mr(o,e){e.location=K(o);const t=o.chain.map(i=>i.route).indexOf(o.route);return o.chain[t].element=e,e}function bt(o,e,t){if(ke(o))return o.apply(t,e)}function $i(o,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return bt(t[o],e,t)}}function Vr(o,e){if(!Array.isArray(o)&&!Pt(o))throw new Error(ee(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${o}`));e.__children=[];const t=Ct(o);for(let i=0;i<t.length;i++)_n(t[i]),e.__children.push(t[i])}function ht(o){if(o&&o.length){const e=o[0].parentNode;for(let t=0;t<o.length;t++)e.removeChild(o[t])}}function yt(o,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(o.replace(/^\//,""),t).pathname:o}function Rn(o){return o.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class ve extends Xe{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&Xe.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const r=ve.NavigationTrigger;ve.setTriggers.apply(ve,Object.keys(r).map(s=>r[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=K({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();ke(t.children)&&(i=i.then(()=>t.children(zr(e))).then(r=>{!Zt(r)&&!ke(t.children)&&(r=t.children),Vr(r,t)}));const n={redirect:r=>Ti(e,r),component:r=>{const s=document.createElement(r);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(e))return bt(t.action,[e,n],t)}).then(r=>{if(Zt(r)&&(r instanceof HTMLElement||r.redirect||r===Le))return r;if(Q(t.redirect))return n.redirect(t.redirect);if(t.bundle)return cr(t.bundle).then(()=>{},()=>{throw new Error(ee(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(r=>{if(Zt(r))return r;if(Q(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},Q(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(r=>this.__fullyResolveChain(r)).then(r=>{if(this.__isLatestRender(r)){const s=this.__previousContext;if(r===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=K(r),t&&this.__updateBrowserHistory(r,i===1),Je("location-changed",{router:this,location:this.location}),r.__skipAttach)return this.__copyUnchangedElements(r,s),this.__previousContext=r,this.location;this.__addAppearingContent(r,s);const l=this.__animateIfNeeded(r);return this.__runOnAfterEnterCallbacks(r),this.__runOnAfterLeaveCallbacks(r,s),l.then(()=>{if(this.__isLatestRender(r))return this.__removeDisappearingContent(),this.__previousContext=r,this.location})}}).catch(r=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ht(this.__outlet&&this.__outlet.children),this.location=K(Object.assign(n,{resolver:this})),Je("error",Object.assign({router:this,error:r},n)),r}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const r=i!==t?i:e,l=yt(Rn(i.chain),i.resolver)===i.pathname,a=(d,c=d.route,h)=>d.next(void 0,c,h).then(u=>u===null||u===Le?l?d:c.parent!==null?a(d,c.parent,u):u:u);return a(i).then(d=>{if(d===null||d===Le)throw wn(r);return d&&d!==Le&&d!==i?this.__fullyResolveChain(r,d):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Mr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(ee(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${dr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let r=Promise.resolve();const s=()=>({cancel:!0}),l=a=>Ti(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},i[a]);for(let a=0;a<n.length;a++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:l},n[a]),i[a].element.location=K(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:s},i[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=K(e,i[a].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:s,redirect:l},n[a]),n[a].element&&(n[a].element.location=K(e,n[a].route)));return r.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const r=K(t);return e.then(s=>{if(this.__isLatestRender(t))return $i("onBeforeLeave",[r,i,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,i,n){const r=K(t,n.route);return e.then(s=>{if(this.__isLatestRender(t))return $i("onBeforeEnter",[r,i,this],n.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>Lr)throw new Error(ee(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(ee(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const r=n?"replaceState":"pushState";window.history[r](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const r=t&&t.chain[n].element;if(r)if(r.parentNode===i)e.chain[n].element=r,i=r;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(r=>this.__addedByRouter.get(r)&&r!==e.result);let n=i;for(let r=e.__divergedChainIndex;r<e.chain.length;r++){const s=e.chain[r].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===i&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&ht(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ht(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const r=K(e);bt(n.onAfterLeave,[r,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ht(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=K(e,e.chain[t].route);bt(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],r=e.chain;let s;for(let l=r.length;l>0;l--)if(r[l-1].route.animate){s=r[l-1].route.animate;break}if(t&&i&&s){const l=Pt(s)&&s.leave||"leaving",a=Pt(s)&&s.enter||"entering";n.push(Ci(t,l)),n.push(Ci(i,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;Q(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){Nr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Rr(this)),yt(this.__urlForName(e,t),this)}urlForPath(e,t){return yt(ve.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=Q(e)?this.__createUrl(e,"http://a"):e;return Je("go",{pathname:t,search:i,hash:n})}}const Dr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,xt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ur(){function o(){return!0}return Nn(o)}function jr(){try{return Fr()?!0:Br()?xt?!Wr():!Ur():!1}catch{return!1}}function Fr(){return localStorage.getItem("vaadin.developmentmode.force")}function Br(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Wr(){return!!(xt&&Object.keys(xt).map(e=>xt[e]).filter(e=>e.productionMode).length>0)}function Nn(o,e){if(typeof o!="function")return;const t=Dr.exec(o.toString());if(t)try{o=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return o(e)}window.Vaadin=window.Vaadin||{};const Pi=function(o,e){if(window.Vaadin.developmentMode)return Nn(o,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=jr());function Hr(){}const qr=function(){if(typeof Pi=="function")return Pi(Hr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});qr();ve.NavigationTrigger={POPSTATE:mr,CLICK:pr};var eo,A;(function(o){o.CONNECTED="connected",o.LOADING="loading",o.RECONNECTING="reconnecting",o.CONNECTION_LOST="connection-lost"})(A||(A={}));class Gr{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(t=>{var i;(i=t.active)===null||i===void 0||i.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=A.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(A.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(A.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const t=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const i of this.stateChangeListeners)i(t,this.connectionState)}}get online(){return this.connectionState===A.CONNECTED||this.connectionState===A.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=A.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const Kr=o=>!!(o==="localhost"||o==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(o)),mt=window;if(!(!((eo=mt.Vaadin)===null||eo===void 0)&&eo.connectionState)){let o;Kr(window.location.hostname)?o=!0:o=navigator.onLine,mt.Vaadin||(mt.Vaadin={}),mt.Vaadin.connectionState=new Gr(o?A.CONNECTED:A.CONNECTION_LOST)}function W(o,e,t,i){var n=arguments.length,r=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=!1,_t=globalThis,Fo=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),Ai=new WeakMap;let Yr=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==In)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(Fo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ai.get(t)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ai.set(t,e))}return e}toString(){return this.cssText}};const Xr=o=>new Yr(typeof o=="string"?o:String(o),void 0,In),Qr=(o,e)=>{if(Fo)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=_t.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}},Zr=o=>{let e="";for(const t of o.cssRules)e+=t.cssText;return Xr(e)},Ri=Fo||Jr?o=>o:o=>o instanceof CSSStyleSheet?Zr(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:es,defineProperty:ts,getOwnPropertyDescriptor:Ni,getOwnPropertyNames:os,getOwnPropertySymbols:is,getPrototypeOf:Ii}=Object,U=globalThis;let X;const Oi=U.trustedTypes,ns=Oi?Oi.emptyScript:"",wt=U.reactiveElementPolyfillSupportDevMode;var xn;{const o=U.litIssuedWarnings??(U.litIssuedWarnings=new Set);X=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,o.has(t)||(console.warn(t),o.add(t))},X("dev-mode","Lit is in dev mode. Not recommended for production!"),(xn=U.ShadyDOM)!=null&&xn.inUse&&wt===void 0&&X("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const to=o=>{U.emitLitDebugLogEvents&&U.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},ze=(o,e)=>o,At={toAttribute(o,e){switch(e){case Boolean:o=o?ns:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}break}return t}},Bo=(o,e)=>!es(o,e),Li={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Bo};Symbol.metadata??(Symbol.metadata=Symbol("metadata"));U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);let be=class extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??(this._initializers=[])).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=Li){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol.for(`${String(e)} (@property() cache)`),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&ts(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Ni(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};if(n==null){if("value"in(Ni(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);X("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return n==null?void 0:n.call(this)},set(s){const l=n==null?void 0:n.call(this);r.call(this,s),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Li}static __prepare(){if(this.hasOwnProperty(ze("elementProperties")))return;const e=Ii(this);e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(ze("properties"))){const t=this.properties,i=[...os(t),...is(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this.__attributeToPropertyMap=new Map;for(const[t,i]of this.elementProperties){const n=this.__attributeNameForProperty(t,i);n!==void 0&&this.__attributeToPropertyMap.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&X("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&X("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Ri(n))}else e!==void 0&&t.push(Ri(e));return t}static __attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise(t=>this.enableUpdating=t),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)==null||e.forEach(t=>t(this))}addController(e){var t;(this.__controllers??(this.__controllers=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this.__controllers)==null||t.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t){var s;const n=this.constructor.elementProperties.get(e),r=this.constructor.__attributeNameForProperty(e,n);if(r!==void 0&&n.reflect===!0){const a=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:At).toAttribute(t,n.type);this.constructor.enabledWarnings.includes("migration")&&a===void 0&&X("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var r;const i=this.constructor,n=i.__attributeToPropertyMap.get(e);if(n!==void 0&&this.__reflectingProperty!==n){const s=i.getPropertyOptions(n),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:At;this.__reflectingProperty=n,this[n]=l.fromAttribute(t,s.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){if(e!==void 0){e instanceof Event&&X("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),i??(i=this.constructor.getPropertyOptions(e));const n=i.hasChanged??Bo,r=this[e];if(n(r,t))this._$changeProperty(e,t,i);else return}this.isUpdatePending===!1&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,i){this._$changedProperties.has(e)||this._$changedProperties.set(e,t),i.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties??(this.__reflectingProperties=new Set)).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&typeof(e==null?void 0:e.then)=="function"&&X("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var i;if(!this.isUpdatePending)return;if(to==null||to({kind:"update"}),!this.hasUpdated){this.renderRoot??(this.renderRoot=this.createRenderRoot());{const s=[...this.constructor.elementProperties.keys()].filter(l=>this.hasOwnProperty(l)&&l in Ii(this));if(s.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${s.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[r,s]of this.__instanceProperties)this[r]=s;this.__instanceProperties=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,s]of n)s.wrapped===!0&&!this._$changedProperties.has(r)&&this[r]!==void 0&&this._$changeProperty(r,this[r],s)}let e=!1;const t=this._$changedProperties;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this.__controllers)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(t)):this.__markUpdated()}catch(n){throw e=!1,this.__markUpdated(),n}e&&this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){var t;(t=this.__controllers)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&X("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach(t=>this.__propertyToAttribute(t,this[t]))),this.__markUpdated()}updated(e){}firstUpdated(e){}};be.elementStyles=[];be.shadowRootOptions={mode:"open"};be[ze("elementProperties")]=new Map;be[ze("finalized")]=new Map;wt==null||wt({ReactiveElement:be});{be.enabledWarnings=["change-in-update","async-perform-update"];const o=function(e){e.hasOwnProperty(ze("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};be.enableWarning=function(e){o(this),this.enabledWarnings.includes(e)||this.enabledWarnings.push(e)},be.disableWarning=function(e){o(this);const t=this.enabledWarnings.indexOf(e);t>=0&&this.enabledWarnings.splice(t,1)}}(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.0.4");U.reactiveElementVersions.length>1&&X("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oo,io,no,ro;const B=window,x=o=>{B.emitLitDebugLogEvents&&B.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))};let rs=0,Rt;(oo=B.litIssuedWarnings)!==null&&oo!==void 0||(B.litIssuedWarnings=new Set),Rt=(o,e)=>{e+=o?` See https://lit.dev/msg/${o} for more information.`:"",B.litIssuedWarnings.has(e)||(console.warn(e),B.litIssuedWarnings.add(e))},Rt("dev-mode","Lit is in dev mode. Not recommended for production!");const q=!((io=B.ShadyDOM)===null||io===void 0)&&io.inUse&&((no=B.ShadyDOM)===null||no===void 0?void 0:no.noPatch)===!0?B.ShadyDOM.wrap:o=>o,De=B.trustedTypes,zi=De?De.createPolicy("lit-html",{createHTML:o=>o}):void 0,ss=o=>o,Ht=(o,e,t)=>ss,as=o=>{if(Te!==Ht)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Te=o},ls=()=>{Te=Ht},Ao=(o,e,t)=>Te(o,e,t),Ro="$lit$",le=`lit$${String(Math.random()).slice(9)}$`,On="?"+le,ds=`<${On}>`,Qe=document,Ze=(o="")=>Qe.createComment(o),et=o=>o===null||typeof o!="object"&&typeof o!="function",Ln=Array.isArray,cs=o=>Ln(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",so=`[ 	
\f\r]`,us=`[^ 	
\f\r"'\`<>=]`,ps=`[^\\s"'>=/]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mi=1,ao=2,hs=3,Vi=/-->/g,Di=/>/g,_e=new RegExp(`>|${so}(?:(${ps}+)(${so}*=${so}*(?:${us}|("|')|))|$)`,"g"),ms=0,Ui=1,vs=2,ji=3,lo=/'/g,co=/"/g,zn=/^(?:script|style|textarea|title)$/i,fs=1,Nt=2,Wo=1,It=2,gs=3,bs=4,ys=5,Ho=6,xs=7,Mn=o=>(e,...t)=>(e.some(i=>i===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),{_$litType$:o,strings:e,values:t}),y=Mn(fs),Oe=Mn(Nt),Ce=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Fi=new WeakMap,Me=Qe.createTreeWalker(Qe,129,null,!1);let Te=Ht;const _s=(o,e)=>{const t=o.length-1,i=[];let n=e===Nt?"<svg>":"",r,s=qe;for(let a=0;a<t;a++){const d=o[a];let c=-1,h,u=0,b;for(;u<d.length&&(s.lastIndex=u,b=s.exec(d),b!==null);)if(u=s.lastIndex,s===qe){if(b[Mi]==="!--")s=Vi;else if(b[Mi]!==void 0)s=Di;else if(b[ao]!==void 0)zn.test(b[ao])&&(r=new RegExp(`</${b[ao]}`,"g")),s=_e;else if(b[hs]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else s===_e?b[ms]===">"?(s=r??qe,c=-1):b[Ui]===void 0?c=-2:(c=s.lastIndex-b[vs].length,h=b[Ui],s=b[ji]===void 0?_e:b[ji]==='"'?co:lo):s===co||s===lo?s=_e:s===Vi||s===Di?s=qe:(s=_e,r=void 0);console.assert(c===-1||s===_e||s===lo||s===co,"unexpected parse state B");const pe=s===_e&&o[a+1].startsWith("/>")?" ":"";n+=s===qe?d+ds:c>=0?(i.push(h),d.slice(0,c)+Ro+d.slice(c)+le+pe):d+le+(c===-2?(i.push(void 0),a):pe)}const l=n+(o[t]||"<?>")+(e===Nt?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw")){let a="invalid template strings array";throw a=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(a)}return[zi!==void 0?zi.createHTML(l):l,i]};class tt{constructor({strings:e,["_$litType$"]:t},i){this.parts=[];let n,r=0,s=0;const l=e.length-1,a=this.parts,[d,c]=_s(e,t);if(this.el=tt.createElement(d,i),Me.currentNode=this.el.content,t===Nt){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=Me.nextNode())!==null&&a.length<l;){if(n.nodeType===1){{const h=n.localName;if(/^(?:textarea|template)$/i.test(h)&&n.innerHTML.includes(le)){const u=`Expressions are not supported inside \`${h}\` elements. See https://lit.dev/msg/expression-in-${h} for more information.`;if(h==="template")throw new Error(u);Rt("",u)}}if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ro)||u.startsWith(le)){const b=c[s++];if(h.push(u),b!==void 0){const he=n.getAttribute(b.toLowerCase()+Ro).split(le),se=/([.?@])?(.*)/.exec(b);a.push({type:Wo,index:r,name:se[2],strings:he,ctor:se[1]==="."?Es:se[1]==="?"?ks:se[1]==="@"?Cs:qt})}else a.push({type:Ho,index:r})}for(const u of h)n.removeAttribute(u)}if(zn.test(n.tagName)){const h=n.textContent.split(le),u=h.length-1;if(u>0){n.textContent=De?De.emptyScript:"";for(let b=0;b<u;b++)n.append(h[b],Ze()),Me.nextNode(),a.push({type:It,index:++r});n.append(h[u],Ze())}}}else if(n.nodeType===8)if(n.data===On)a.push({type:It,index:r});else{let u=-1;for(;(u=n.data.indexOf(le,u+1))!==-1;)a.push({type:xs,index:r}),u+=le.length-1}r++}x==null||x({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const i=Qe.createElement("template");return i.innerHTML=e,i}}function Ue(o,e,t=o,i){var n,r,s,l;if(e===Ce)return e;let a=i!==void 0?(n=t.__directives)===null||n===void 0?void 0:n[i]:t.__directive;const d=et(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((r=a==null?void 0:a._$notifyDirectiveConnectionChanged)===null||r===void 0||r.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$initialize(o,t,i)),i!==void 0?((s=(l=t).__directives)!==null&&s!==void 0?s:l.__directives=[])[i]=a:t.__directive=a),a!==void 0&&(e=Ue(o,a._$resolve(o,e.values),a,i)),e}class ws{constructor(e,t){this._parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){var t;const{el:{content:i},parts:n}=this._$template,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Qe).importNode(i,!0);Me.currentNode=r;let s=Me.nextNode(),l=0,a=0,d=n[0];for(;d!==void 0;){if(l===d.index){let c;d.type===It?c=new st(s,s.nextSibling,this,e):d.type===Wo?c=new d.ctor(s,d.name,d.strings,this,e):d.type===Ho&&(c=new Ts(s,this,e)),this._parts.push(c),d=n[++a]}l!==(d==null?void 0:d.index)&&(s=Me.nextNode(),l++)}return r}_update(e){let t=0;for(const i of this._parts)i!==void 0&&(x==null||x({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),i.strings!==void 0?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}}class st{constructor(e,t,i,n){var r;this.type=It,this._$committedValue=$,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=n,this.__isConnected=(r=n==null?void 0:n.isConnected)!==null&&r!==void 0?r:!0,this._textSanitizer=void 0}get _$isConnected(){var e,t;return(t=(e=this._$parent)===null||e===void 0?void 0:e._$isConnected)!==null&&t!==void 0?t:this.__isConnected}get parentNode(){let e=q(this._$startNode).parentNode;const t=this._$parent;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){var i;if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=Ue(this,e,t),et(e))e===$||e==null||e===""?(this._$committedValue!==$&&(x==null||x({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=$):e!==this._$committedValue&&e!==Ce&&this._commitText(e);else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(((i=this.options)===null||i===void 0?void 0:i.host)===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else cs(e)?this._commitIterable(e):this._commitText(e)}_insert(e,t=this._$endNode){return q(q(this._$startNode).parentNode).insertBefore(e,t)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),Te!==Ht){const i=(t=this._$startNode.parentNode)===null||t===void 0?void 0:t.nodeName;if(i==="STYLE"||i==="SCRIPT"){let n="Forbidden";throw i==="STYLE"?n="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":n="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(n)}}x==null||x({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==$&&et(this._$committedValue)){const t=q(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=Ao(t,"data","property")),e=this._textSanitizer(e),x==null||x({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=document.createTextNode("");this._commitNode(t),this._textSanitizer===void 0&&(this._textSanitizer=Ao(t,"data","property")),e=this._textSanitizer(e),x==null||x({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var t;const{values:i,["_$litType$"]:n}=e,r=typeof n=="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=tt.createElement(n.h,this.options)),n);if(((t=this._$committedValue)===null||t===void 0?void 0:t._$template)===r)x==null||x({kind:"template updating",template:r,instance:this._$committedValue,parts:this._$committedValue._parts,options:this.options,values:i}),this._$committedValue._update(i);else{const s=new ws(r,this),l=s._clone(this.options);x==null||x({kind:"template instantiated",template:r,instance:s,parts:s._parts,options:this.options,fragment:l,values:i}),s._update(i),x==null||x({kind:"template instantiated and updated",template:r,instance:s,parts:s._parts,options:this.options,fragment:l,values:i}),this._commitNode(l),this._$committedValue=s}}_$getTemplate(e){let t=Fi.get(e.strings);return t===void 0&&Fi.set(e.strings,t=new tt(e)),t}_commitIterable(e){Ln(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i=0,n;for(const r of e)i===t.length?t.push(n=new st(this._insert(Ze()),this._insert(Ze()),this,this.options)):n=t[i],n._$setValue(r),i++;i<t.length&&(this._$clear(n&&q(n._$endNode).nextSibling,i),t.length=i)}_$clear(e=q(this._$startNode).nextSibling,t){var i;for((i=this._$notifyConnectionChanged)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$endNode;){const n=q(e).nextSibling;q(e).remove(),e=n}}setConnected(e){var t;if(this._$parent===void 0)this.__isConnected=e,(t=this._$notifyConnectionChanged)===null||t===void 0||t.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}}class qt{constructor(e,t,i,n,r){this.type=Wo,this._$committedValue=$,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=$,this._sanitizer=void 0}get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e,t=this,i,n){const r=this.strings;let s=!1;if(r===void 0)e=Ue(this,e,t,0),s=!et(e)||e!==this._$committedValue&&e!==Ce,s&&(this._$committedValue=e);else{const l=e;e=r[0];let a,d;for(a=0;a<r.length-1;a++)d=Ue(this,l[i+a],t,a),d===Ce&&(d=this._$committedValue[a]),s||(s=!et(d)||d!==this._$committedValue[a]),d===$?e=$:e!==$&&(e+=(d??"")+r[a+1]),this._$committedValue[a]=d}s&&!n&&this._commitValue(e)}_commitValue(e){e===$?q(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=Te(this.element,this.name,"attribute")),e=this._sanitizer(e??""),x==null||x({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),q(this.element).setAttribute(this.name,e??""))}}class Es extends qt{constructor(){super(...arguments),this.type=gs}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=Te(this.element,this.name,"property")),e=this._sanitizer(e),x==null||x({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===$?void 0:e}}const Ss=De?De.emptyScript:"";class ks extends qt{constructor(){super(...arguments),this.type=bs}_commitValue(e){x==null||x({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==$),options:this.options}),e&&e!==$?q(this.element).setAttribute(this.name,Ss):q(this.element).removeAttribute(this.name)}}class Cs extends qt{constructor(e,t,i,n,r){if(super(e,t,i,n,r),this.type=ys,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){var i;if(e=(i=Ue(this,e,t,0))!==null&&i!==void 0?i:$,e===Ce)return;const n=this._$committedValue,r=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==$&&(n===$||r);x==null||x({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:r,addListener:s,oldListener:n}),r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t,i;typeof this._$committedValue=="function"?this._$committedValue.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$committedValue.handleEvent(e)}}class Ts{constructor(e,t,i){this.element=e,this.type=Ho,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){x==null||x({kind:"commit to element binding",element:this.element,value:e,options:this.options}),Ue(this,e)}}const uo=B.litHtmlPolyfillSupportDevMode;uo==null||uo(tt,st);((ro=B.litHtmlVersions)!==null&&ro!==void 0?ro:B.litHtmlVersions=[]).push("2.4.0");B.litHtmlVersions.length>1&&Rt("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const Se=(o,e,t)=>{var i,n;if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const r=rs++,s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let l=s._$litPart$;if(x==null||x({kind:"begin render",id:r,value:o,container:e,options:t,part:l}),l===void 0){const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=l=new st(e.insertBefore(Ze(),a),a,void 0,t??{})}return l._$setValue(o),x==null||x({kind:"end render",id:r,value:o,container:e,options:t,part:l}),l};Se.setSanitizer=as,Se.createSanitizer=Ao,Se._testOnlyClearSanitizerFactoryDoNotCallOrElse=ls;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=!1,Et=window,qo=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Go=Symbol(),Bi=new WeakMap;class Ko{constructor(e,t,i){if(this._$cssResult$=!0,i!==Go)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(qo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Bi.get(t)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Bi.set(t,e))}return e}toString(){return this.cssText}}const Ps=o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${o}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Vn=o=>new Ko(typeof o=="string"?o:String(o),void 0,Go),_=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,n,r)=>i+Ps(n)+o[r+1],o[0]);return new Ko(t,o,Go)},As=(o,e)=>{qo?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=Et.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)})},Rs=o=>{let e="";for(const t of o.cssRules)e+=t.cssText;return Vn(e)},Wi=qo||$s?o=>o:o=>o instanceof CSSStyleSheet?Rs(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var po,ho,mo,Dn;const ne=window;let Un,fe;const Hi=ne.trustedTypes,Ns=Hi?Hi.emptyScript:"",St=ne.reactiveElementPolyfillSupportDevMode;{const o=(po=ne.litIssuedWarnings)!==null&&po!==void 0?po:ne.litIssuedWarnings=new Set;fe=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,o.has(t)||(console.warn(t),o.add(t))},fe("dev-mode","Lit is in dev mode. Not recommended for production!"),!((ho=ne.ShadyDOM)===null||ho===void 0)&&ho.inUse&&St===void 0&&fe("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."),Un=e=>({then:(t,i)=>{fe("request-update-promise",`The \`requestUpdate\` method should no longer return a Promise but does so on \`${e}\`. Use \`updateComplete\` instead.`),t!==void 0&&t(!1)}})}const vo=o=>{ne.emitLitDebugLogEvents&&ne.dispatchEvent(new CustomEvent("lit-debug",{detail:o}))},jn=(o,e)=>o,No={toAttribute(o,e){switch(e){case Boolean:o=o?Ns:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o);break}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}break}return t}},Fn=(o,e)=>e!==o&&(e===e||o===o),fo={attribute:!0,type:String,converter:No,reflect:!1,hasChanged:Fn},Io="finalized";class re extends HTMLElement{constructor(){super(),this.__instanceProperties=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}static addInitializer(e){var t;this.finalize(),((t=this._initializers)!==null&&t!==void 0?t:this._initializers=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this.__attributeNameForProperty(i,t);n!==void 0&&(this.__attributeToPropertyMap.set(n,i),e.push(n))}),e}static createProperty(e,t=fo){var i;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&(Object.defineProperty(this.prototype,e,r),this.hasOwnProperty("__reactivePropertyKeys")||(this.__reactivePropertyKeys=new Set((i=this.__reactivePropertyKeys)!==null&&i!==void 0?i:[])),this.__reactivePropertyKeys.add(e))}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||fo}static finalize(){if(this.hasOwnProperty(Io))return!1;this[Io]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties),this.__attributeToPropertyMap=new Map,this.hasOwnProperty(jn("properties"))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}this.elementStyles=this.finalizeStyles(this.styles);{const t=(i,n=!1)=>{this.prototype.hasOwnProperty(i)&&fe(n?"renamed-api":"removed-api",`\`${i}\` is implemented on class ${this.name}. It has been ${n?"renamed":"removed"} in this version of LitElement.`)};t("initialize"),t("requestUpdateInternal"),t("_getUpdateComplete",!0)}return!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Wi(n))}else e!==void 0&&t.push(Wi(e));return t}static __attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}__initialize(){var e;this.__updatePromise=new Promise(t=>this.enableUpdating=t),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this.__controllers)!==null&&t!==void 0?t:this.__controllers=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this.__controllers)===null||t===void 0||t.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.__instanceProperties.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return As(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t,i=fo){var n;const r=this.constructor.__attributeNameForProperty(e,i);if(r!==void 0&&i.reflect===!0){const l=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:No).toAttribute(t,i.type);this.constructor.enabledWarnings.indexOf("migration")>=0&&l===void 0&&fe("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var i;const n=this.constructor,r=n.__attributeToPropertyMap.get(e);if(r!==void 0&&this.__reflectingProperty!==r){const s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:No;this.__reflectingProperty=r,this[r]=l.fromAttribute(t,s.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){let n=!0;return e!==void 0&&(i=i||this.constructor.getPropertyOptions(e),(i.hasChanged||Fn)(this[e],t)?(this._$changedProperties.has(e)||this._$changedProperties.set(e,t),i.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties===void 0&&(this.__reflectingProperties=new Map),this.__reflectingProperties.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this.__updatePromise=this.__enqueueUpdate()),Un(this.localName)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,t;if(!this.isUpdatePending)return;if(vo==null||vo({kind:"update"}),!this.hasUpdated){const r=[];if((e=this.constructor.__reactivePropertyKeys)===null||e===void 0||e.forEach(s=>{var l;this.hasOwnProperty(s)&&!(!((l=this.__instanceProperties)===null||l===void 0)&&l.has(s))&&r.push(s)}),r.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${r.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}this.__instanceProperties&&(this.__instanceProperties.forEach((r,s)=>this[s]=r),this.__instanceProperties=void 0);let i=!1;const n=this._$changedProperties;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this.__controllers)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this.__markUpdated()}catch(r){throw i=!1,this.__markUpdated(),r}i&&this._$didUpdate(n)}willUpdate(e){}_$didUpdate(e){var t;(t=this.__controllers)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.indexOf("change-in-update")>=0&&fe("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties!==void 0&&(this.__reflectingProperties.forEach((t,i)=>this.__propertyToAttribute(i,this[i],t)),this.__reflectingProperties=void 0),this.__markUpdated()}updated(e){}firstUpdated(e){}}Dn=Io;re[Dn]=!0;re.elementProperties=new Map;re.elementStyles=[];re.shadowRootOptions={mode:"open"};St==null||St({ReactiveElement:re});{re.enabledWarnings=["change-in-update"];const o=function(e){e.hasOwnProperty(jn("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};re.enableWarning=function(e){o(this),this.enabledWarnings.indexOf(e)<0&&this.enabledWarnings.push(e)},re.disableWarning=function(e){o(this);const t=this.enabledWarnings.indexOf(e);t>=0&&this.enabledWarnings.splice(t,1)}}((mo=ne.reactiveElementVersions)!==null&&mo!==void 0?mo:ne.reactiveElementVersions=[]).push("1.6.3");ne.reactiveElementVersions.length>1&&fe("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var go,bo,yo;let Jo;{const o=(go=globalThis.litIssuedWarnings)!==null&&go!==void 0?go:globalThis.litIssuedWarnings=new Set;Jo=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,o.has(t)||(console.warn(t),o.add(t))}}class P extends re{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!1)}render(){return Ce}}P.finalized=!0;P._$litElement$=!0;(bo=globalThis.litElementHydrateSupport)===null||bo===void 0||bo.call(globalThis,{LitElement:P});const xo=globalThis.litElementPolyfillSupportDevMode;xo==null||xo({LitElement:P});P.finalize=function(){if(!re.finalize.call(this))return!1;const e=(t,i,n=!1)=>{if(t.hasOwnProperty(i)){const r=(typeof t=="function"?t:t.constructor).name;Jo(n?"renamed-api":"removed-api",`\`${i}\` is implemented on class ${r}. It has been ${n?"renamed":"removed"} in this version of LitElement.`)}};return e(this,"render"),e(this,"getStyles",!0),e(this.prototype,"adoptStyles"),!0};((yo=globalThis.litElementVersions)!==null&&yo!==void 0?yo:globalThis.litElementVersions=[]).push("3.3.3");globalThis.litElementVersions.length>1&&Jo("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bn;{const o=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);Bn=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,o.has(t)||(console.warn(t),o.add(t))}}const Is=(o,e,t)=>{const i=e.hasOwnProperty(t);return e.constructor.createProperty(t,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(e,t):void 0},Os={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Bo},Ls=(o=Os,e,t)=>{const{kind:i,metadata:n}=t;n==null&&Bn("missing-class-metadata",`The class ${e} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(t.name,o),i==="accessor"){const{name:s}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,o)},init(l){return l!==void 0&&this._$changeProperty(s,void 0,o),l}}}else if(i==="setter"){const{name:s}=t;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,o)}}throw new Error(`Unsupported decorator location: ${i}`)};function w(o){return(e,t)=>typeof t=="object"?Ls(o,e,t):Is(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(o){return w({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Wn;{const o=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);Wn=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",o.has(t)||(console.warn(t),o.add(t))}}function at(o,e){return(t,i,n)=>{const r=s=>{var a;const l=((a=s.renderRoot)==null?void 0:a.querySelector(o))??null;if(l===null&&e&&!s.hasUpdated){const d=typeof i=="object"?i.name:i;Wn("",`@query'd field ${JSON.stringify(String(d))} with the 'cache' flag set for selector '${o}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return l};return zs(t,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vs=o=>(...e)=>({_$litDirective$:o,values:e});class Ds{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,i){this.__part=e,this._$parent=t,this.__attributeIndex=i}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us extends Ds{constructor(e){var t;if(super(e),e.type!==Ms.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,n;if(this._previousClasses===void 0){this._previousClasses=new Set,e.strings!==void 0&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!(!((i=this._staticClasses)===null||i===void 0)&&i.has(s))&&this._previousClasses.add(s);return this.render(t)}const r=e.element.classList;this._previousClasses.forEach(s=>{s in t||(r.remove(s),this._previousClasses.delete(s))});for(const s in t){const l=!!t[s];l!==this._previousClasses.has(s)&&!(!((n=this._staticClasses)===null||n===void 0)&&n.has(s))&&(l?(r.add(s),this._previousClasses.add(s)):(r.remove(s),this._previousClasses.delete(s)))}return Ce}}const Yo=Vs(Us),_o="css-loading-indicator";var J;(function(o){o.IDLE="",o.FIRST="first",o.SECOND="second",o.THIRD="third"})(J||(J={}));class O extends P{static create(){var e,t;const i=window;return!((e=i.Vaadin)===null||e===void 0)&&e.connectionIndicator||(i.Vaadin||(i.Vaadin={}),i.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(i.Vaadin.connectionIndicator)),(t=i.Vaadin)===null||t===void 0?void 0:t.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=J.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=A.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return y`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Yo({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const t=window;!((e=t.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=t.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const t=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=t===A.CONNECTION_LOST,this.reconnecting=t===A.RECONNECTING,this.updateLoading(t===A.LOADING),this.loading?!1:t!==this.lastMessageState?(this.lastMessageState=t,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=J.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=J.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=J.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=J.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(_o)){const e=document.createElement("style");e.id=_o,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(_o);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case J.IDLE:return"display: none";case J.FIRST:case J.SECOND:case J.THIRD:return"display: block";default:return""}}timeoutFor(e,t,i,n){return e!==0&&window.clearTimeout(e),t?window.setTimeout(i,n):0}static get instance(){return O.create()}}W([w({type:Number})],O.prototype,"firstDelay",void 0);W([w({type:Number})],O.prototype,"secondDelay",void 0);W([w({type:Number})],O.prototype,"thirdDelay",void 0);W([w({type:Number})],O.prototype,"expandedDuration",void 0);W([w({type:String})],O.prototype,"onlineText",void 0);W([w({type:String})],O.prototype,"offlineText",void 0);W([w({type:String})],O.prototype,"reconnectingText",void 0);W([w({type:Boolean,reflect:!0})],O.prototype,"offline",void 0);W([w({type:Boolean,reflect:!0})],O.prototype,"reconnecting",void 0);W([w({type:Boolean,reflect:!0})],O.prototype,"expanded",void 0);W([w({type:Boolean,reflect:!0})],O.prototype,"loading",void 0);W([w({type:String})],O.prototype,"loadingBarState",void 0);W([w({type:Boolean})],O.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",O);O.instance;var qi;const Ot=window;Ot.Vaadin||(Ot.Vaadin={});(qi=Ot.Vaadin).registrations||(qi.registrations=[]);Ot.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Gi extends Error{}const Ge=window.document.body,C=window;class js{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Ge.$=Ge.$||[],this.config=e||{},C.Vaadin=C.Vaadin||{},C.Vaadin.Flow=C.Vaadin.Flow||{},C.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const t=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||t&&t.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,C.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,C.Vaadin.connectionState.loadingFinished(),!C.Vaadin.listener&&(C.Vaadin.listener={},document.addEventListener("click",e=>{e.target&&(e.target.hasAttribute("router-link")?this.navigation="link":e.composedPath().some(t=>t.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async e=>{if(this.pathname=e.pathname,C.Vaadin.connectionState.online)try{await this.flowInit()}catch(t){if(t instanceof Gi)return C.Vaadin.connectionState.state=A.CONNECTION_LOST,this.offlineStubAction();throw t}else return this.offlineStubAction();return this.container.onBeforeEnter=(t,i)=>this.flowNavigate(t,i),this.container.onBeforeLeave=(t,i)=>this.flowLeave(t,i),this.container}}async flowLeave(e,t){const{connectionState:i}=C.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||i.offline?Promise.resolve({}):new Promise(n=>{this.loadingStarted(),this.container.serverConnected=r=>{n(t&&r?t.prevent():{}),this.loadingFinished()},Ge.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,t){return this.response?new Promise(i=>{this.loadingStarted(),this.container.serverConnected=(n,r)=>{t&&n?i(t.prevent()):t&&t.redirect&&r?i(t.redirect(r.pathname)):(this.container.style.display="",i(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Ge.$server.connectClient(this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:e,appConfig:t}=this.response;typeof e=="string"&&await this.loadScript(e);const{appId:i}=t;await(await g(()=>import("./FlowBootstrap-CHUuW4WK.js"),__vite__mapDeps([]),import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(i),await this.config.imports());const r=`flow-container-${i.toLowerCase()}`,s=document.querySelector(r);s?this.container=s:(this.container=document.createElement(r),this.container.id=i),Ge.$[i]=this.container;const l=await g(()=>import("./FlowClient-BZ2ixoyw.js"),__vite__mapDeps([]),import.meta.url);await this.flowInitClient(l),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((t,i)=>{const n=document.createElement("script");n.onload=()=>t(),n.onerror=i,n.src=e,document.body.appendChild(n)})}injectAppIdScript(e){const t=e.substring(0,e.lastIndexOf("-")),i=document.createElement("script");i.type="module",i.setAttribute("data-app-id",t),document.body.append(i)}async flowInitClient(e){return e.init(),new Promise(t=>{const i=setInterval(()=>{Object.keys(C.Vaadin.Flow.clients).filter(r=>r!=="TypeScript").reduce((r,s)=>r||C.Vaadin.Flow.clients[s].isActive(),!1)||(clearInterval(i),t())},5)})}async flowInitUi(){const e=C.Vaadin&&C.Vaadin.TypeScript&&C.Vaadin.TypeScript.initial;return e?(C.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((t,i)=>{const r=new XMLHttpRequest,s=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;r.open("GET",s),r.onerror=()=>i(new Gi(`Invalid server response when initializing Flow UI.
        ${r.status}
        ${r.responseText}`)),r.onload=()=>{const l=r.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?t(JSON.parse(r.responseText)):r.onerror()},r.send()})}addConnectionIndicator(){O.create(),C.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){C.Vaadin.connectionState.state=A.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{C.Vaadin.connectionState.state=A.CONNECTED},e.onerror=()=>{C.Vaadin.connectionState.state=A.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),C.addEventListener("offline",()=>{this.isFlowClientLoaded()||(C.Vaadin.connectionState.state=A.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe");e.setAttribute("src","./offline-stub.html"),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let i;const n=()=>{i!==void 0&&(C.Vaadin.connectionState.removeStateChangeListener(i),i=void 0)};return e.onBeforeEnter=(r,s,l)=>{i=()=>{C.Vaadin.connectionState.online&&(n(),l.render(r,!1))},C.Vaadin.connectionState.addStateChangeListener(i)},e.onBeforeLeave=(r,s,l)=>{n()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:Fs}=new js({imports:()=>g(()=>import("./generated-flow-imports-B9cdr1NK.js"),__vite__mapDeps([]),import.meta.url)}),Bs=[...Fs],Ws=new ve(document.querySelector("#outlet"));Ws.setRoutes(Bs);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var o="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),t=new WeakMap,i=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,r=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(p){var m=p.replace(s,"");return m!==p&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),m.trim()}function a(p){return"isConnected"in p?p.isConnected:document.contains(p)}function d(p){return p.filter(function(m,E){return p.indexOf(m)===E})}function c(p,m){return p.filter(function(E){return m.indexOf(E)===-1})}function h(p){p.parentNode.removeChild(p)}function u(p){return p.shadowRoot||t.get(p)}var b=["addRule","deleteRule","insertRule","removeRule"],pe=CSSStyleSheet,he=pe.prototype;he.replace=function(){return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."))},he.replaceSync=function(){throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function se(p){return typeof p=="object"?Ae.isPrototypeOf(p)||he.isPrototypeOf(p):!1}function Kt(p){return typeof p=="object"?he.isPrototypeOf(p):!1}var H=new WeakMap,oe=new WeakMap,$e=new WeakMap,Pe=new WeakMap;function Jt(p,m){var E=document.createElement("style");return $e.get(p).set(m,E),oe.get(p).push(m),E}function ae(p,m){return $e.get(p).get(m)}function lt(p,m){$e.get(p).delete(m),oe.set(p,oe.get(p).filter(function(E){return E!==m}))}function ai(p,m){requestAnimationFrame(function(){m.textContent=H.get(p).textContent,Pe.get(p).forEach(function(E){return m.sheet[E.method].apply(m.sheet,E.args)})})}function dt(p){if(!H.has(p))throw new TypeError("Illegal invocation")}function Yt(){var p=this,m=document.createElement("style");e.body.appendChild(m),H.set(p,m),oe.set(p,[]),$e.set(p,new WeakMap),Pe.set(p,[])}var Ae=Yt.prototype;Ae.replace=function(m){try{return this.replaceSync(m),Promise.resolve(this)}catch(E){return Promise.reject(E)}},Ae.replaceSync=function(m){if(dt(this),typeof m=="string"){var E=this;H.get(E).textContent=l(m),Pe.set(E,[]),oe.get(E).forEach(function(D){D.isConnected()&&ai(E,ae(E,D))})}},n(Ae,"cssRules",{configurable:!0,enumerable:!0,get:function(){return dt(this),H.get(this).sheet.cssRules}}),n(Ae,"media",{configurable:!0,enumerable:!0,get:function(){return dt(this),H.get(this).sheet.media}}),b.forEach(function(p){Ae[p]=function(){var m=this;dt(m);var E=arguments;Pe.get(m).push({method:p,args:E}),oe.get(m).forEach(function(F){if(F.isConnected()){var L=ae(m,F).sheet;L[p].apply(L,E)}});var D=H.get(m).sheet;return D[p].apply(D,E)}}),n(Yt,Symbol.hasInstance,{configurable:!0,value:se});var li={childList:!0,subtree:!0},di=new WeakMap;function Re(p){var m=di.get(p);return m||(m=new pi(p),di.set(p,m)),m}function ci(p){n(p.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return Re(this).sheets},set:function(m){Re(this).update(m)}})}function Xt(p,m){for(var E=document.createNodeIterator(p,NodeFilter.SHOW_ELEMENT,function(F){return u(F)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),D=void 0;D=E.nextNode();)m(u(D))}var ct=new WeakMap,Ne=new WeakMap,ut=new WeakMap;function rr(p,m){return m instanceof HTMLStyleElement&&Ne.get(p).some(function(E){return ae(E,p)})}function ui(p){var m=ct.get(p);return m instanceof Document?m.body:m}function Qt(p){var m=document.createDocumentFragment(),E=Ne.get(p),D=ut.get(p),F=ui(p);D.disconnect(),E.forEach(function(L){m.appendChild(ae(L,p)||Jt(L,p))}),F.insertBefore(m,null),D.observe(F,li),E.forEach(function(L){ai(L,ae(L,p))})}function pi(p){var m=this;m.sheets=[],ct.set(m,p),Ne.set(m,[]),ut.set(m,new MutationObserver(function(E,D){if(!document){D.disconnect();return}E.forEach(function(F){o||r.call(F.addedNodes,function(L){L instanceof Element&&Xt(L,function(Ie){Re(Ie).connect()})}),r.call(F.removedNodes,function(L){L instanceof Element&&(rr(m,L)&&Qt(m),o||Xt(L,function(Ie){Re(Ie).disconnect()}))})})}))}if(pi.prototype={isConnected:function(){var p=ct.get(this);return p instanceof Document?p.readyState!=="loading":a(p.host)},connect:function(){var p=ui(this);ut.get(this).observe(p,li),Ne.get(this).length>0&&Qt(this),Xt(p,function(m){Re(m).connect()})},disconnect:function(){ut.get(this).disconnect()},update:function(p){var m=this,E=ct.get(m)===document?"Document":"ShadowRoot";if(!Array.isArray(p))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+E+": Iterator getter is not callable.");if(!p.every(se))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+E+": Failed to convert value to 'CSSStyleSheet'");if(p.some(Kt))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+E+": Can't adopt non-constructed stylesheets");m.sheets=p;var D=Ne.get(m),F=d(p),L=c(D,F);L.forEach(function(Ie){h(ae(Ie,m)),lt(Ie,m)}),Ne.set(m,F),m.isConnected()&&F.length>0&&Qt(m)}},window.CSSStyleSheet=Yt,ci(Document),"ShadowRoot"in window){ci(ShadowRoot);var hi=Element.prototype,sr=hi.attachShadow;hi.attachShadow=function(m){var E=sr.call(this,m);return m.mode==="closed"&&t.set(this,E),E}}var pt=Re(document);pt.isConnected()?pt.connect():document.addEventListener("DOMContentLoaded",pt.connect.bind(pt))})();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn=Symbol.for(""),Hs=o=>{if((o==null?void 0:o.r)===Hn)return o==null?void 0:o._$litStatic$},qs=o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},vt=(o,...e)=>({_$litStatic$:e.reduce((t,i,n)=>t+qs(i)+o[n+1],o[0]),r:Hn}),Ki=new Map,Gs=o=>(e,...t)=>{const i=t.length;let n,r;const s=[],l=[];let a=0,d=!1,c;for(;a<i;){for(c=e[a];a<i&&(r=t[a],(n=Hs(r))!==void 0);)c+=n+e[++a],d=!0;l.push(r),s.push(c),a++}if(a===i&&s.push(e[i]),d){const h=s.join("$$lit$$");e=Ki.get(h),e===void 0&&(s.raw=s,Ki.set(h,e=s)),t=l}return o(e,...t)},Ks=Gs(y),Js="modulepreload",Ys=function(o){return"/"+o},Ji={},f=function(o,e,t){return!e||e.length===0?o():(document.getElementsByTagName("link"),Promise.all(e.map(i=>{if(i=Ys(i),i in Ji)return;Ji[i]=!0;const n=i.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":Js,n||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),n)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>o()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i}))};function v(o,e,t,i){var n=arguments.length,r=n<3?e:i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,i);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(r=(n<3?s(r):n>3?s(e,t,r):s(e,t))||r);return n>3&&r&&Object.defineProperty(e,t,r),r}const Xo=1e3,Qo=(o,e)=>{const t=Array.from(o.querySelectorAll(e.join(", "))),i=Array.from(o.querySelectorAll("*")).filter(n=>n.shadowRoot).flatMap(n=>Qo(n.shadowRoot,e));return[...t,...i]};let Yi=!1;const ot=(o,e)=>{Yi||(window.addEventListener("message",n=>{n.data==="validate-license"&&window.location.reload()},!1),Yi=!0);const t=o._overlayElement;if(t){if(t.shadowRoot){const n=t.shadowRoot.querySelector("slot:not([name])");if(n&&n.assignedElements().length>0){ot(n.assignedElements()[0],e);return}}ot(t,e);return}const i=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");o.isConnected&&(o.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${i}</div></no-license>`)},Ye={},Xi={},je={},qn={},ie=o=>`${o.name}_${o.version}`,Qi=o=>{const{cvdlName:e,version:t}=o.constructor,i={name:e,version:t},n=o.tagName.toLowerCase();Ye[e]=Ye[e]??[],Ye[e].push(n);const r=je[ie(i)];r&&setTimeout(()=>ot(o,r),Xo),je[ie(i)]||qn[ie(i)]||Xi[ie(i)]||(Xi[ie(i)]=!0,window.Vaadin.devTools.checkLicense(i))},Xs=o=>{qn[ie(o)]=!0,console.debug("License check ok for",o)},Gn=o=>{const e=o.product.name;je[ie(o.product)]=o,console.error("License check failed for",e);const t=Ye[e];(t==null?void 0:t.length)>0&&Qo(document,t).forEach(i=>{setTimeout(()=>ot(i,je[ie(o.product)]),Xo)})},Qs=o=>{const e=o.message,t=o.product.name;o.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,je[ie(o.product)]=o,console.error("No license found when checking",t);const i=Ye[t];(i==null?void 0:i.length)>0&&Qo(document,i).forEach(n=>{setTimeout(()=>ot(n,je[ie(o.product)]),Xo)})},Zs=o=>o.command==="license-check-ok"?(Xs(o.data),!0):o.command==="license-check-failed"?(Gn(o.data),!0):o.command==="license-check-nokey"?(Qs(o.data),!0):!1,ea=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(o=>{Qi(o)}),window.Vaadin.devTools.createdCvdlElements={push:o=>{Qi(o)}}};function ta(o){var e;const t=[];for(;o&&o.parentNode;){const i=Oo(o);if(i.nodeId!==-1){if((e=i.element)!=null&&e.tagName.startsWith("FLOW-CONTAINER-"))break;t.push(i)}o=o.parentElement?o.parentElement:o.parentNode.host}return t.reverse()}function Oo(o){const e=window.Vaadin;if(e&&e.Flow){const{clients:t}=e.Flow,i=Object.keys(t);for(const n of i){const r=t[n];if(r.getNodeId){const s=r.getNodeId(o);if(s>=0)return{nodeId:s,uiId:r.getUIId(),element:o}}}}return{nodeId:-1,uiId:-1,element:void 0}}function oa(o,e){if(o.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==o;)t=t.parentNode||(t instanceof ShadowRoot?t.host:null);return t===o}var S;(function(o){o.ACTIVE="active",o.INACTIVE="inactive",o.UNAVAILABLE="unavailable",o.ERROR="error"})(S||(S={}));class Lt{constructor(){this.status=S.UNAVAILABLE}onHandshake(){}onConnectionError(e){}onStatusChange(e){}setActive(e){!e&&this.status===S.ACTIVE?this.setStatus(S.INACTIVE):e&&this.status===S.INACTIVE&&this.setStatus(S.ACTIVE)}setStatus(e){this.status!==e&&(this.status=e,this.onStatusChange(e))}}Lt.HEARTBEAT_INTERVAL=18e4;class ia extends Lt{constructor(e){super(),this.webSocket=new WebSocket(e),this.webSocket.onmessage=t=>this.handleMessage(t),this.webSocket.onerror=t=>this.handleError(t),this.webSocket.onclose=t=>{this.status!==S.ERROR&&this.setStatus(S.UNAVAILABLE),this.webSocket=void 0},setInterval(()=>{this.webSocket&&self.status!==S.ERROR&&this.status!==S.UNAVAILABLE&&this.webSocket.send("")},Lt.HEARTBEAT_INTERVAL)}onReload(){}handleMessage(e){let t;try{t=JSON.parse(e.data)}catch(i){this.handleError(`[${i.name}: ${i.message}`);return}t.command==="hello"?(this.setStatus(S.ACTIVE),this.onHandshake()):t.command==="reload"?this.status===S.ACTIVE&&this.onReload():this.handleError(`Unknown message from the livereload server: ${e}`)}handleError(e){console.error(e),this.setStatus(S.ERROR),e instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(e)}}const Kn=_`
  .popup {
    width: auto;
    position: fixed;
    background-color: var(--dev-tools-background-color-active-blurred);
    color: var(--dev-tools-text-color-primary);
    padding: 0.1875rem 0.75rem 0.1875rem 1rem;
    background-clip: padding-box;
    border-radius: var(--dev-tools-border-radius);
    overflow: hidden;
    margin: 0.5rem;
    width: 30rem;
    max-width: calc(100% - 1rem);
    max-height: calc(100vh - 1rem);
    flex-shrink: 1;
    background-color: var(--dev-tools-background-color-active);
    color: var(--dev-tools-text-color);
    transition: var(--dev-tools-transition-duration);
    transform-origin: bottom right;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dev-tools-box-shadow);
    outline: none;
  }
`,na=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var R;(function(o){o.text="text",o.checkbox="checkbox",o.range="range",o.color="color"})(R||(R={}));const te={lumoSize:["--lumo-size-xs","--lumo-size-s","--lumo-size-m","--lumo-size-l","--lumo-size-xl"],lumoSpace:["--lumo-space-xs","--lumo-space-s","--lumo-space-m","--lumo-space-l","--lumo-space-xl"],lumoBorderRadius:["0","--lumo-border-radius-m","--lumo-border-radius-l"],lumoFontSize:["--lumo-font-size-xxs","--lumo-font-size-xs","--lumo-font-size-s","--lumo-font-size-m","--lumo-font-size-l","--lumo-font-size-xl","--lumo-font-size-xxl","--lumo-font-size-xxxl"],lumoTextColor:["--lumo-header-text-color","--lumo-body-text-color","--lumo-secondary-text-color","--lumo-tertiary-text-color","--lumo-disabled-text-color","--lumo-primary-text-color","--lumo-error-text-color","--lumo-success-text-color"],basicBorderSize:["0px","1px","2px","3px"]},ra=Object.freeze(Object.defineProperty({__proto__:null,presets:te},Symbol.toStringTag,{value:"Module"})),de={textColor:{propertyName:"color",displayName:"Text color",editorType:R.color,presets:te.lumoTextColor},fontSize:{propertyName:"font-size",displayName:"Font size",editorType:R.range,presets:te.lumoFontSize,icon:"font"},fontWeight:{propertyName:"font-weight",displayName:"Bold",editorType:R.checkbox,checkedValue:"bold"},fontStyle:{propertyName:"font-style",displayName:"Italic",editorType:R.checkbox,checkedValue:"italic"}},Z={backgroundColor:{propertyName:"background-color",displayName:"Background color",editorType:R.color},borderColor:{propertyName:"border-color",displayName:"Border color",editorType:R.color},borderWidth:{propertyName:"border-width",displayName:"Border width",editorType:R.range,presets:te.basicBorderSize,icon:"square"},borderRadius:{propertyName:"border-radius",displayName:"Border radius",editorType:R.range,presets:te.lumoBorderRadius,icon:"square"},padding:{propertyName:"padding",displayName:"Padding",editorType:R.range,presets:te.lumoSpace,icon:"square"},gap:{propertyName:"gap",displayName:"Spacing",editorType:R.range,presets:te.lumoSpace,icon:"square"}},sa={height:{propertyName:"height",displayName:"Size",editorType:R.range,presets:te.lumoSize,icon:"square"},paddingInline:{propertyName:"padding-inline",displayName:"Padding",editorType:R.range,presets:te.lumoSpace,icon:"square"}},Lo={iconColor:{propertyName:"color",displayName:"Icon color",editorType:R.color,presets:te.lumoTextColor},iconSize:{propertyName:"font-size",displayName:"Icon size",editorType:R.range,presets:te.lumoFontSize,icon:"font"}},aa=[Z.backgroundColor,Z.borderColor,Z.borderWidth,Z.borderRadius,Z.padding],la=[de.textColor,de.fontSize,de.fontWeight,de.fontStyle],da=[Lo.iconColor,Lo.iconSize],ca=Object.freeze(Object.defineProperty({__proto__:null,fieldProperties:sa,iconProperties:Lo,shapeProperties:Z,standardIconProperties:da,standardShapeProperties:aa,standardTextProperties:la,textProperties:de},Symbol.toStringTag,{value:"Module"}));function Jn(o){const e=o.charAt(0).toUpperCase()+o.slice(1);return{tagName:o,displayName:e,elements:[{selector:o,displayName:"Element",properties:[Z.backgroundColor,Z.borderColor,Z.borderWidth,Z.borderRadius,Z.padding,de.textColor,de.fontSize,de.fontWeight,de.fontStyle]}]}}const ua=Object.freeze(Object.defineProperty({__proto__:null,createGenericMetadata:Jn},Symbol.toStringTag,{value:"Module"})),pa=o=>na(Object.assign({"./components/defaults.ts":()=>f(()=>Promise.resolve().then(()=>ca),void 0),"./components/generic.ts":()=>f(()=>Promise.resolve().then(()=>ua),void 0),"./components/presets.ts":()=>f(()=>Promise.resolve().then(()=>ra),void 0),"./components/vaadin-accordion-heading.ts":()=>f(()=>g(()=>import("./vaadin-accordion-heading-c0acdd6d-ZfQVUQPf.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-accordion-panel.ts":()=>f(()=>g(()=>import("./vaadin-accordion-panel-616e55d6-1Wu_CqXg.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-accordion.ts":()=>f(()=>g(()=>import("./vaadin-accordion-eed3b794-ogXpXUc6.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-app-layout.ts":()=>f(()=>g(()=>import("./vaadin-app-layout-e56de2e9-DHSVI38g.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-avatar.ts":()=>f(()=>g(()=>import("./vaadin-avatar-7599297d-C0BNuFKx.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-big-decimal-field.ts":()=>f(()=>g(()=>import("./vaadin-big-decimal-field-e51def24-D-mIqBmX.js"),__vite__mapDeps([0,1,2]),import.meta.url),["assets/vaadin-big-decimal-field-e51def24.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-board-row.ts":()=>f(()=>g(()=>import("./vaadin-board-row-c70d0c55-B_hbGspS.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-board.ts":()=>f(()=>g(()=>import("./vaadin-board-828ebdea-CyvV3prs.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-button.ts":()=>f(()=>g(()=>import("./vaadin-button-2511ad84-B5SSvIPp.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-chart.ts":()=>f(()=>g(()=>import("./vaadin-chart-5192dc15-DjymWYk_.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-checkbox-group.ts":()=>f(()=>g(()=>import("./vaadin-checkbox-group-a7c65bf2-B8gCyUhO.js"),__vite__mapDeps([3,1,4]),import.meta.url),["assets/vaadin-checkbox-group-a7c65bf2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-checkbox.ts":()=>f(()=>g(()=>import("./vaadin-checkbox-4e68df64-BIjYVE_B.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-combo-box.ts":()=>f(()=>g(()=>import("./vaadin-combo-box-96451ddd-D13xNzDN.js"),__vite__mapDeps([5,1]),import.meta.url),["assets/vaadin-combo-box-96451ddd.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-confirm-dialog.ts":()=>f(()=>g(()=>import("./vaadin-confirm-dialog-4d718829-DnDV6jGh.js"),__vite__mapDeps([6,2]),import.meta.url),["assets/vaadin-confirm-dialog-4d718829.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-cookie-consent.ts":()=>f(()=>g(()=>import("./vaadin-cookie-consent-46c09f8b-D06bZk9Z.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-crud.ts":()=>f(()=>g(()=>import("./vaadin-crud-8d161a22-B_zXBTOp.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-custom-field.ts":()=>f(()=>g(()=>import("./vaadin-custom-field-42c85b9e-BtIf7nrh.js"),__vite__mapDeps([7,1]),import.meta.url),["assets/vaadin-custom-field-42c85b9e.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-picker.ts":()=>f(()=>g(()=>import("./vaadin-date-picker-f2001167-TrsEFief.js"),__vite__mapDeps([8,1]),import.meta.url),["assets/vaadin-date-picker-f2001167.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-time-picker.ts":()=>f(()=>g(()=>import("./vaadin-date-time-picker-c8c047a7-DXsQubxP.js"),__vite__mapDeps([9,1]),import.meta.url),["assets/vaadin-date-time-picker-c8c047a7.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-details-summary.ts":()=>f(()=>g(()=>import("./vaadin-details-summary-351a1448-D7ioX-Ll.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-details.ts":()=>f(()=>g(()=>import("./vaadin-details-bf336660-Du6hy1fn.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-dialog.ts":()=>f(()=>g(()=>import("./vaadin-dialog-53253a08-BhTc9iZY.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-email-field.ts":()=>f(()=>g(()=>import("./vaadin-email-field-d7a35f04-BMY1daVg.js"),__vite__mapDeps([10,1,2]),import.meta.url),["assets/vaadin-email-field-d7a35f04.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-form-layout.ts":()=>f(()=>g(()=>import("./vaadin-form-layout-47744b1d-C8_Qr4sh.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-grid-pro.ts":()=>f(()=>g(()=>import("./vaadin-grid-pro-ff415555-BMjGkIiE.js"),__vite__mapDeps([11,4,12,1]),import.meta.url),["assets/vaadin-grid-pro-ff415555.js","assets/vaadin-checkbox-4e68df64.js","assets/vaadin-grid-0a4791c2.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-grid.ts":()=>f(()=>g(()=>import("./vaadin-grid-0a4791c2-Cx79osEb.js"),__vite__mapDeps([12,4]),import.meta.url),["assets/vaadin-grid-0a4791c2.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-horizontal-layout.ts":()=>f(()=>g(()=>import("./vaadin-horizontal-layout-3193943f-p6mfy6Yk.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-icon.ts":()=>f(()=>g(()=>import("./vaadin-icon-601f36ed-BJIAHtWE.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-integer-field.ts":()=>f(()=>g(()=>import("./vaadin-integer-field-85078932-BK4m9sY8.js"),__vite__mapDeps([13,1,2]),import.meta.url),["assets/vaadin-integer-field-85078932.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-list-box.ts":()=>f(()=>g(()=>import("./vaadin-list-box-d7a8433b-DzU7dYb7.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-login-form.ts":()=>f(()=>g(()=>import("./vaadin-login-form-638996c6-Bkpe1UR-.js"),__vite__mapDeps([14,1,2]),import.meta.url),["assets/vaadin-login-form-638996c6.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-login-overlay.ts":()=>f(()=>g(()=>import("./vaadin-login-overlay-f8a5db8a-c5KY3GWq.js"),__vite__mapDeps([15,1,2]),import.meta.url),["assets/vaadin-login-overlay-f8a5db8a.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-map.ts":()=>f(()=>g(()=>import("./vaadin-map-d40a0116-Cf5l9hyi.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-menu-bar.ts":()=>f(()=>g(()=>import("./vaadin-menu-bar-3f5ab096-BF6zMTHt.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-message-input.ts":()=>f(()=>g(()=>import("./vaadin-message-input-996ac37c-Df3m9M7S.js"),__vite__mapDeps([16,1]),import.meta.url),["assets/vaadin-message-input-996ac37c.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-message-list.ts":()=>f(()=>g(()=>import("./vaadin-message-list-70a435ba-C0W_lwRA.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-multi-select-combo-box.ts":()=>f(()=>g(()=>import("./vaadin-multi-select-combo-box-a3373557-BLknN9dM.js"),__vite__mapDeps([17,1]),import.meta.url),["assets/vaadin-multi-select-combo-box-a3373557.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-notification.ts":()=>f(()=>g(()=>import("./vaadin-notification-bd6eb776-BL6pYj5J.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-number-field.ts":()=>f(()=>g(()=>import("./vaadin-number-field-cb3ee8b2-BVaHIQo-.js"),__vite__mapDeps([18,1,2]),import.meta.url),["assets/vaadin-number-field-cb3ee8b2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-password-field.ts":()=>f(()=>g(()=>import("./vaadin-password-field-d289cb18-DDtkL7Xh.js"),__vite__mapDeps([19,1,2]),import.meta.url),["assets/vaadin-password-field-d289cb18.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-progress-bar.ts":()=>f(()=>g(()=>import("./vaadin-progress-bar-309ecf1f-DJorUBT7.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-radio-group.ts":()=>f(()=>g(()=>import("./vaadin-radio-group-88b5afd8-DEeB-hAV.js"),__vite__mapDeps([20,1]),import.meta.url),["assets/vaadin-radio-group-88b5afd8.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-rich-text-editor.ts":()=>f(()=>g(()=>import("./vaadin-rich-text-editor-8cd892f2-DN9hevF-.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-scroller.ts":()=>f(()=>g(()=>import("./vaadin-scroller-35e68818-DtlB9ayJ.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-select.ts":()=>f(()=>g(()=>import("./vaadin-select-df6e9947-CW2SHkx-.js"),__vite__mapDeps([21,1]),import.meta.url),["assets/vaadin-select-df6e9947.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-side-nav-item.ts":()=>f(()=>g(()=>import("./vaadin-side-nav-item-34918f92-Ce4w4joc.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-side-nav.ts":()=>f(()=>g(()=>import("./vaadin-side-nav-ba80d91d-CHPjjrCf.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-split-layout.ts":()=>f(()=>g(()=>import("./vaadin-split-layout-80c92131-D9g6nmBd.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-spreadsheet.ts":()=>f(()=>g(()=>import("./vaadin-spreadsheet-59d8c5ef-DtqvbMDV.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tab.ts":()=>f(()=>g(()=>import("./vaadin-tab-aaf32809-2ZrkwP0X.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tabs.ts":()=>f(()=>g(()=>import("./vaadin-tabs-d9a5e24e-C_mdRJqy.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tabsheet.ts":()=>f(()=>g(()=>import("./vaadin-tabsheet-dd99ed9a-DJUWWFzl.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-text-area.ts":()=>f(()=>g(()=>import("./vaadin-text-area-83627ebc-DWwME7Gy.js"),__vite__mapDeps([22,1,2]),import.meta.url),["assets/vaadin-text-area-83627ebc.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-text-field.ts":()=>f(()=>g(()=>import("./vaadin-text-field-0b3db014-BjKLPH9n.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-time-picker.ts":()=>f(()=>g(()=>import("./vaadin-time-picker-715ec415-Mn4V5cNU.js"),__vite__mapDeps([23,1]),import.meta.url),["assets/vaadin-time-picker-715ec415.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-upload.ts":()=>f(()=>g(()=>import("./vaadin-upload-d3c162ed-CDFsWhuT.js"),__vite__mapDeps([24,2]),import.meta.url),["assets/vaadin-upload-d3c162ed.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-vertical-layout.ts":()=>f(()=>g(()=>import("./vaadin-vertical-layout-ad4174c4-DaD2XUaz.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-virtual-list.ts":()=>f(()=>g(()=>import("./vaadin-virtual-list-96896203-DvW8s-wC.js"),__vite__mapDeps([]),import.meta.url),[])}),`./components/${o}.ts`);class ha{constructor(e=pa){this.loader=e,this.metadata={}}async getMetadata(e){var t;const i=(t=e.element)==null?void 0:t.localName;if(!i)return null;if(!i.startsWith("vaadin-"))return Jn(i);let n=this.metadata[i];if(n)return n;try{n=(await this.loader(i)).default,this.metadata[i]=n}catch{console.warn(`Failed to load metadata for component: ${i}`)}return n||null}}const ma=new ha,kt={crosshair:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:Oe`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};var Fe;(function(o){o.disabled="disabled",o.enabled="enabled",o.missing_theme="missing_theme"})(Fe||(Fe={}));var I;(function(o){o.local="local",o.global="global"})(I||(I={}));function wo(o,e){return`${o}|${e}`}class ge{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,t){return this._properties[wo(e,t)]||null}updatePropertyValue(e,t,i,n){if(!i){delete this._properties[wo(e,t)];return}let r=this.getPropertyValue(e,t);r?(r.value=i,r.modified=n||!1):(r={elementSelector:e,propertyName:t,value:i,modified:n||!1},this._properties[wo(e,t)]=r)}addPropertyValues(e){e.forEach(t=>{this.updatePropertyValue(t.elementSelector,t.propertyName,t.value,t.modified)})}getPropertyValuesForElement(e){return this.properties.filter(t=>t.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const t=new ge(e[0].metadata);return e.forEach(i=>t.addPropertyValues(i.properties)),t}static fromServerRules(e,t,i){const n=new ge(e);return e.elements.forEach(r=>{const s=Be(r,t),l=i.find(a=>a.selector===s.replace(/ > /g,">"));l&&r.properties.forEach(a=>{const d=l.properties[a.propertyName];d&&n.updatePropertyValue(r.selector,a.propertyName,d,!0)})}),n}}function Be(o,e){const t=o.selector;if(e.themeScope===I.global)return t;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const i=t.match(/^[\w\d-_]+/),n=i&&i[0];if(!n)throw new Error(`Selector does not start with a tag name: ${t}`);return`${n}.${e.localClassName}${t.substring(n.length,t.length)}`}function va(o,e,t,i){const n=Be(o,e),r={[t]:i};return t==="border-width"&&(parseInt(i)>0?r["border-style"]="solid":r["border-style"]=""),{selector:n,properties:r}}function fa(o){const e=Object.entries(o.properties).map(([t,i])=>`${t}: ${i};`).join(" ");return`${o.selector} { ${e} }`}let ft,Zi="";function Zo(o){ft||(ft=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,ft]),Zi+=o.cssText,ft.replaceSync(Zi)}const Yn=_`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,en="__vaadin-theme-editor-measure-element",tn=/((::before)|(::after))$/,on=/::part\(([\w\d_-]+)\)$/;Zo(_`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function ga(o){const e=new ge(o),t=document.createElement(o.tagName);t.classList.add(en),document.body.append(t),o.setupElement&&await o.setupElement(t);const i={themeScope:I.local,localClassName:en};try{o.elements.forEach(n=>{nn(t,n,i,!0);let r=Be(n,i);const s=r.match(tn);r=r.replace(tn,"");const l=r.match(on),a=r.replace(on,"");let d=document.querySelector(a);if(d&&l){const u=`[part~="${l[1]}"]`;d=d.shadowRoot.querySelector(u)}if(!d)return;d.style.transition="none";const c=s?s[1]:null,h=getComputedStyle(d,c);n.properties.forEach(u=>{const b=h.getPropertyValue(u.propertyName)||u.defaultValue||"";e.updatePropertyValue(n.selector,u.propertyName,b)}),nn(t,n,i,!1)})}finally{try{o.cleanupElement&&await o.cleanupElement(t)}finally{t.remove()}}return e}function nn(o,e,t,i){if(e.stateAttribute){if(e.stateElementSelector){const n=Be({...e,selector:e.stateElementSelector},t);o=document.querySelector(n)}o&&(i?o.setAttribute(e.stateAttribute,""):o.removeAttribute(e.stateAttribute))}}function rn(o){return o.trim()}function ba(o){const e=o.element;if(!e)return null;const t=e.querySelector("label");if(t&&t.textContent)return rn(t.textContent);const i=e.textContent;return i?rn(i):null}class ya{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,t){if(!e)return;const i=this._localClassNameMap.get(e);i&&(e.classList.remove(i),e.overlayClass=null),t?(e.classList.add(t),e.overlayClass=t,this._localClassNameMap.set(e,t)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const we=new ya;var Y;(function(o){o.response="themeEditorResponse",o.loadComponentMetadata="themeEditorComponentMetadata",o.setLocalClassName="themeEditorLocalClassName",o.setCssRules="themeEditorRules",o.loadRules="themeEditorLoadRules",o.history="themeEditorHistory",o.openCss="themeEditorOpenCss",o.markAsUsed="themeEditorMarkAsUsed"})(Y||(Y={}));var zo;(function(o){o.ok="ok",o.error="error"})(zo||(zo={}));class xa{constructor(e){this.pendingRequests={},this.requestCounter=0,this.wrappedConnection=e;const t=this.wrappedConnection.onMessage;this.wrappedConnection.onMessage=i=>{i.command===Y.response?this.handleResponse(i.data):t.call(this.wrappedConnection,i)}}sendRequest(e,t){const i=(this.requestCounter++).toString(),n=t.uiId??this.getGlobalUiId();return new Promise((r,s)=>{this.wrappedConnection.send(e,{...t,requestId:i,uiId:n}),this.pendingRequests[i]={resolve:r,reject:s}})}handleResponse(e){const t=this.pendingRequests[e.requestId];if(!t){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code===zo.ok?t.resolve(e):t.reject(e)}loadComponentMetadata(e){return this.sendRequest(Y.loadComponentMetadata,{nodeId:e.nodeId})}setLocalClassName(e,t){return this.sendRequest(Y.setLocalClassName,{nodeId:e.nodeId,className:t})}setCssRules(e){return this.sendRequest(Y.setCssRules,{rules:e})}loadRules(e){return this.sendRequest(Y.loadRules,{selectors:e})}markAsUsed(){return this.sendRequest(Y.markAsUsed,{})}undo(e){return this.sendRequest(Y.history,{undo:e})}redo(e){return this.sendRequest(Y.history,{redo:e})}openCss(e){return this.sendRequest(Y.openCss,{selector:e})}getGlobalUiId(){if(this.globalUiId===void 0){const e=window.Vaadin;if(e&&e.Flow){const{clients:t}=e.Flow,i=Object.keys(t);for(const n of i){const r=t[n];if(r.getNodeId){this.globalUiId=r.getUIId();break}}}}return this.globalUiId??-1}}const z={index:-1,entries:[]};class _a{constructor(e){this.api=e}get allowUndo(){return z.index>=0}get allowRedo(){return z.index<z.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,t,i){const n={requestId:e,execute:t,rollback:i};if(z.index++,z.entries=z.entries.slice(0,z.index),z.entries.push(n),t)try{t()}catch(r){console.error("Execute history entry failed",r)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=z.entries[z.index];z.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(t){console.error("Undo failed",t)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;z.index++;const e=z.entries[z.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(t){console.error("Redo failed",t)}return this.allowedActions}static clear(){z.entries=[],z.index=-1}}class wa extends CustomEvent{constructor(e,t,i){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:t,value:i}})}}class G extends P{constructor(){super(...arguments),this.value=""}static get styles(){return[Yn,_`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return y`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?y`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new wa(this.elementMetadata,this.propertyMetadata,e))}}v([w({})],G.prototype,"elementMetadata",void 0);v([w({})],G.prototype,"propertyMetadata",void 0);v([w({})],G.prototype,"theme",void 0);v([N()],G.prototype,"propertyValue",void 0);v([N()],G.prototype,"value",void 0);class zt{get values(){return this._values}get rawValues(){return this._rawValues}constructor(e){if(this._values=[],this._rawValues={},e){const t=e.propertyName,i=e.presets??[];this._values=(i||[]).map(r=>r.startsWith("--")?`var(${r})`:r);const n=document.createElement("div");n.style.borderStyle="solid",n.style.visibility="hidden",document.body.append(n);try{this._values.forEach(r=>{n.style.setProperty(t,r);const s=getComputedStyle(n);this._rawValues[r]=s.getPropertyValue(t).trim()})}finally{n.remove()}}}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const t=e&&e.trim();return this.values.find(i=>this._rawValues[i]===t)}}class sn extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let Mt=class extends P{constructor(){super(...arguments),this.value="",this.showClearButton=!1}static get styles(){return _`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(o){super.update(o),o.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return y`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${kt.cross}</button>
    `}handleInputChange(o){const e=o.target;this.dispatchEvent(new sn(e.value))}handleClearClick(){this.dispatchEvent(new sn(""))}};v([w({})],Mt.prototype,"value",void 0);v([w({})],Mt.prototype,"showClearButton",void 0);Mt=v([V("vaadin-dev-tools-theme-text-input")],Mt);class Ea extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let it=class extends P{constructor(){super(...arguments),this.editedClassName="",this.invalid=!1}static get styles(){return[Yn,_`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(o){super.update(o),o.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return y` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <vaadin-dev-tools-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}
        ></vaadin-dev-tools-theme-text-input>
        ${this.invalid?y`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(o){this.editedClassName=o.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new Ea(this.editedClassName))}};v([w({})],it.prototype,"className",void 0);v([N()],it.prototype,"editedClassName",void 0);v([N()],it.prototype,"invalid",void 0);it=v([V("vaadin-dev-tools-theme-class-name-editor")],it);class Sa extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}Zo(_`
  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let nt=class extends P{constructor(){super(...arguments),this.value=I.local}static get styles(){return _`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(o){var e;super.update(o),o.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return y` <vaadin-select
      theme="small vaadin-dev-tools-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}
    ></vaadin-select>`}selectRenderer(o){var e;const t=((e=this.metadata)==null?void 0:e.displayName)||"Component",i=`${t}s`;Se(y`
        <vaadin-list-box>
          <vaadin-item value=${I.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${t}</span>
          </vaadin-item>
          <vaadin-item value=${I.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${i}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,o)}handleValueChange(o){const e=o.detail.value;e!==this.value&&this.dispatchEvent(new Sa(e))}};v([w({})],nt.prototype,"value",void 0);v([w({})],nt.prototype,"metadata",void 0);v([at("vaadin-select")],nt.prototype,"select",void 0);nt=v([V("vaadin-dev-tools-theme-scope-selector")],nt);let an=class extends G{static get styles(){return[G.styles,_`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(o){const e=o.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const o=this.value===this.propertyMetadata.checkedValue;return y` <input type="checkbox" .checked=${o} @change=${this.handleInputChange} /> `}};an=v([V("vaadin-dev-tools-theme-checkbox-property-editor")],an);let ln=class extends G{handleInputChange(o){this.dispatchChange(o.detail.value)}renderEditor(){var o;return y`
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}};ln=v([V("vaadin-dev-tools-theme-text-property-editor")],ln);let Vt=class extends G{constructor(){super(...arguments),this.selectedPresetIndex=-1,this.presets=new zt}static get styles(){return[G.styles,_`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(o){o.has("propertyMetadata")&&(this.presets=new zt(this.propertyMetadata)),super.update(o)}renderEditor(){var o;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},t=this.presets.values.length;return y`
      <div class=${Yo(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${t}"
          step="1"
          min="0"
          .max=${(t-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        ${null}
      </div>
      <vaadin-dev-tools-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleValueChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleSliderInput(o){const e=o.target,t=parseInt(e.value),i=this.presets.values[t];this.selectedPresetIndex=t,this.value=this.presets.rawValues[i]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(o){this.value=o.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(o){const e=this.presets.tryMapToPreset(o);super.dispatchChange(e)}updateValueFromTheme(){var o;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((o=this.propertyValue)==null?void 0:o.value)||""),this.updateSliderValue()}updateSliderValue(){const o=this.presets.findPreset(this.value);this.selectedPresetIndex=o?this.presets.values.indexOf(o):-1}};v([N()],Vt.prototype,"selectedPresetIndex",void 0);v([N()],Vt.prototype,"presets",void 0);Vt=v([V("vaadin-dev-tools-theme-range-property-editor")],Vt);const We=(o,e=0,t=1)=>o>t?t:o<e?e:o,j=(o,e=0,t=Math.pow(10,e))=>Math.round(t*o)/t,Xn=({h:o,s:e,v:t,a:i})=>{const n=(200-e)*t/100;return{h:j(o),s:j(n>0&&n<200?e*t/100/(n<=100?n:200-n)*100:0),l:j(n/2),a:j(i,2)}},Mo=o=>{const{h:e,s:t,l:i}=Xn(o);return`hsl(${e}, ${t}%, ${i}%)`},Eo=o=>{const{h:e,s:t,l:i,a:n}=Xn(o);return`hsla(${e}, ${t}%, ${i}%, ${n})`},ka=({h:o,s:e,v:t,a:i})=>{o=o/360*6,e=e/100,t=t/100;const n=Math.floor(o),r=t*(1-e),s=t*(1-(o-n)*e),l=t*(1-(1-o+n)*e),a=n%6;return{r:j([t,s,r,r,l,t][a]*255),g:j([l,t,t,s,r,r][a]*255),b:j([r,r,l,t,t,s][a]*255),a:j(i,2)}},Ca=o=>{const{r:e,g:t,b:i,a:n}=ka(o);return`rgba(${e}, ${t}, ${i}, ${n})`},Ta=o=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(o);return e?$a({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},$a=({r:o,g:e,b:t,a:i})=>{const n=Math.max(o,e,t),r=n-Math.min(o,e,t),s=r?n===o?(e-t)/r:n===e?2+(t-o)/r:4+(o-e)/r:0;return{h:j(60*(s<0?s+6:s)),s:j(n?r/n*100:0),v:j(n/255*100),a:i}},Pa=(o,e)=>{if(o===e)return!0;for(const t in o)if(o[t]!==e[t])return!1;return!0},Aa=(o,e)=>o.replace(/\s/g,"")===e.replace(/\s/g,""),dn={},Qn=o=>{let e=dn[o];return e||(e=document.createElement("template"),e.innerHTML=o,dn[o]=e),e},ei=(o,e,t)=>{o.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t}))};let Ve=!1;const Vo=o=>"touches"in o,Ra=o=>Ve&&!Vo(o)?!1:(Ve||(Ve=Vo(o)),!0),cn=(o,e)=>{const t=Vo(e)?e.touches[0]:e,i=o.el.getBoundingClientRect();ei(o.el,"move",o.getMove({x:We((t.pageX-(i.left+window.pageXOffset))/i.width),y:We((t.pageY-(i.top+window.pageYOffset))/i.height)}))},Na=(o,e)=>{const t=e.keyCode;t>40||o.xy&&t<37||t<33||(e.preventDefault(),ei(o.el,"move",o.getMove({x:t===39?.01:t===37?-.01:t===34?.05:t===33?-.05:t===35?1:t===36?-1:0,y:t===40?.01:t===38?-.01:0},!0)))};class ti{constructor(e,t,i,n){const r=Qn(`<div role="slider" tabindex="0" part="${t}" ${i}><div part="${t}-pointer"></div></div>`);e.appendChild(r.content.cloneNode(!0));const s=e.querySelector(`[part=${t}]`);s.addEventListener("mousedown",this),s.addEventListener("touchstart",this),s.addEventListener("keydown",this),this.el=s,this.xy=n,this.nodes=[s.firstChild,s]}set dragging(e){const t=e?document.addEventListener:document.removeEventListener;t(Ve?"touchmove":"mousemove",this),t(Ve?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!Ra(e)||!Ve&&e.button!=0)return;this.el.focus(),cn(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),cn(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":Na(this,e);break}}style(e){e.forEach((t,i)=>{for(const n in t)this.nodes[i].style.setProperty(n,t[n])})}}class Ia extends ti{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:Mo({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${j(e)}`)}getMove(e,t){return{h:t?We(this.h+e.x*360,0,360):360*e.x}}}class Oa extends ti{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:Mo(e)},{"background-color":Mo({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${j(e.s)}%, Brightness ${j(e.v)}%`)}getMove(e,t){return{s:t?We(this.hsva.s+e.x*100,0,100):e.x*100,v:t?We(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const La=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',za="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",Ma="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",gt=Symbol("same"),So=Symbol("color"),un=Symbol("hsva"),ko=Symbol("update"),pn=Symbol("parts"),Dt=Symbol("css"),Ut=Symbol("sliders");let Va=class extends HTMLElement{static get observedAttributes(){return["color"]}get[Dt](){return[La,za,Ma]}get[Ut](){return[Oa,Ia]}get color(){return this[So]}set color(o){if(!this[gt](o)){const e=this.colorModel.toHsva(o);this[ko](e),this[So]=o}}constructor(){super();const o=Qn(`<style>${this[Dt].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(o.content.cloneNode(!0)),e.addEventListener("move",this),this[pn]=this[Ut].map(t=>new t(e))}connectedCallback(){if(this.hasOwnProperty("color")){const o=this.color;delete this.color,this.color=o}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(o,e,t){const i=this.colorModel.fromAttr(t);this[gt](i)||(this.color=i)}handleEvent(o){const e=this[un],t={...e,...o.detail};this[ko](t);let i;!Pa(t,e)&&!this[gt](i=this.colorModel.fromHsva(t))&&(this[So]=i,ei(this,"color-changed",{value:i}))}[gt](o){return this.color&&this.colorModel.equal(o,this.color)}[ko](o){this[un]=o,this[pn].forEach(e=>e.update(o))}};class Da extends ti{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const t=Eo({...e,a:0}),i=Eo({...e,a:1}),n=e.a*100;this.style([{left:`${n}%`,color:Eo(e)},{"--gradient":`linear-gradient(90deg, ${t}, ${i}`}]);const r=j(n);this.el.setAttribute("aria-valuenow",`${r}`),this.el.setAttribute("aria-valuetext",`${r}%`)}getMove(e,t){return{a:t?We(this.hsva.a+e.x):e.x}}}const Ua=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class ja extends Va{get[Dt](){return[...super[Dt],Ua]}get[Ut](){return[...super[Ut],Da]}}const Fa={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Ta,fromHsva:Ca,equal:Aa,fromAttr:o=>o};class Ba extends ja{get colorModel(){return Fa}}/**
* @license
* Copyright (c) 2017 - 2023 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/function Wa(o){const e=[];for(;o;){if(o.nodeType===Node.DOCUMENT_NODE){e.push(o);break}if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(o),o=o.host;continue}if(o.assignedSlot){o=o.assignedSlot;continue}o=o.parentNode}return e}const Co={start:"top",end:"bottom"},To={start:"left",end:"right"},hn=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),Ha=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Wa(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,hn.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,hn.observe(t))),e){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(i[n],10)})),this.setAttribute("dir",i.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const i=this.__isRTL,n=this.__shouldAlignStartHorizontally(e,i),r=!i&&n||i&&!n;this.style.alignItems=r?"flex-start":"flex-end";const s=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,s,this.noVerticalOverlap,Co,this,t),a=this.__calculatePositionInOneDimension(e,s,this.noHorizontalOverlap,To,this,n);Object.assign(this.style,l,a),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,t){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,i,n,this.__margins,r,this.noHorizontalOverlap,To)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,i,this.__margins,n,this.noVerticalOverlap,Co)}__shouldAlignStart(e,t,i,n,r,s,l){const a=i-e[s?l.end:l.start]-n[l.end],d=e[s?l.start:l.end]-n[l.start],c=r?a:d,h=c>(r?d:a)||c>t;return r===h}__adjustBottomProperty(e,t,i){let n;if(e===t.end){if(t.end===Co.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(i>r&&this.__oldViewportHeight){const s=this.__oldViewportHeight-r;n=i-s}this.__oldViewportHeight=r}if(t.end===To.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(i>r&&this.__oldViewportWidth){const s=this.__oldViewportWidth-r;n=i-s}this.__oldViewportWidth=r}}return n}__calculatePositionInOneDimension(e,t,i,n,r,s){const l=s?n.start:n.end,a=s?n.end:n.start,d=parseFloat(r.style[l]||getComputedStyle(r)[l]),c=this.__adjustBottomProperty(l,n,d),h=t[s?n.start:n.end]-e[i===s?n.end:n.start],u=c?`${c}px`:`${d+h*(s?-1:1)}px`;return{[l]:u,[a]:""}}};class qa extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const Zn=_`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let rt=class extends P{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[Zn,_`
        #toggle {
          display: block;
        }
      `]}update(o){super.update(o),o.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("vaadin-dev-tools-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const o=this.value||"rgba(0, 0, 0, 0)";return y` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${o}"
      @click=${this.open}
    ></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const o=this.overlay.shadowRoot.querySelector('[part="overlay"]');o.style.background="#333"}renderOverlayContent(o){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");Se(y` <div>
        <vaadin-dev-tools-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}
        ></vaadin-dev-tools-color-picker-overlay-content>
      </div>`,o)}handleColorChange(o){this.commitValue=!0,this.dispatchEvent(new qa(o.detail.value)),o.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const o=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(o))}};v([w({})],rt.prototype,"value",void 0);v([w({})],rt.prototype,"presets",void 0);v([at("#toggle")],rt.prototype,"toggle",void 0);rt=v([V("vaadin-dev-tools-color-picker")],rt);let jt=class extends P{static get styles(){return[Zn,_`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return y` <div>
      <vaadin-dev-tools-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}
      ></vaadin-dev-tools-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const o=this.presets.map(e=>y` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}
      ></button>`);return y` <div class="swatches">${o}</div>`}handlePickerChange(o){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:o.detail.value}}))}selectPreset(o){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:o,close:!0}}))}};v([w({})],jt.prototype,"value",void 0);v([w({})],jt.prototype,"presets",void 0);jt=v([V("vaadin-dev-tools-color-picker-overlay-content")],jt);customElements.whenDefined("vaadin-overlay").then(()=>{const o=customElements.get("vaadin-overlay");class e extends Ha(o){}customElements.define("vaadin-dev-tools-color-picker-overlay",e)});customElements.define("vaadin-dev-tools-rgba-string-color-picker",Ba);let mn=class extends G{constructor(){super(...arguments),this.presets=new zt}static get styles(){return[G.styles,_`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(o){o.has("propertyMetadata")&&(this.presets=new zt(this.propertyMetadata)),super.update(o)}renderEditor(){var o;return y`
      <vaadin-dev-tools-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}
      ></vaadin-dev-tools-color-picker>
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((o=this.propertyValue)==null?void 0:o.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleInputChange(o){this.value=o.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(o){this.value=o.detail.value}handleColorPickerCommit(){this.dispatchChange(this.value)}handleColorPickerCancel(){this.updateValueFromTheme()}dispatchChange(o){const e=this.presets.tryMapToPreset(o);super.dispatchChange(e)}updateValueFromTheme(){var o;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((o=this.propertyValue)==null?void 0:o.value)||"")}};mn=v([V("vaadin-dev-tools-theme-color-property-editor")],mn);class Ga extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let Ft=class extends P{static get styles(){return _`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const o=this.metadata.elements.map(e=>this.renderSection(e));return y` <div>${o}</div> `}renderSection(o){const e=o.properties.map(t=>this.renderPropertyEditor(o,t));return y`
      <div class="section" data-testid=${o==null?void 0:o.displayName}>
        <div class="header">
          <span> ${o.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(o)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(o){this.dispatchEvent(new Ga(o))}renderPropertyEditor(o,e){let t;switch(e.editorType){case R.checkbox:t=vt`vaadin-dev-tools-theme-checkbox-property-editor`;break;case R.range:t=vt`vaadin-dev-tools-theme-range-property-editor`;break;case R.color:t=vt`vaadin-dev-tools-theme-color-property-editor`;break;default:t=vt`vaadin-dev-tools-theme-text-property-editor`}return Ks` <${t}
          class="property-editor"
          .elementMetadata=${o}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${t}>`}};v([w({})],Ft.prototype,"metadata",void 0);v([w({})],Ft.prototype,"theme",void 0);Ft=v([V("vaadin-dev-tools-theme-property-list")],Ft);let Bt=class extends P{render(){return y`<div
      tabindex="-1"
      @mousemove=${this.onMouseMove}
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    ></div>`}onClick(o){const e=this.getTargetElement(o);this.dispatchEvent(new CustomEvent("shim-click",{detail:{target:e}}))}onMouseMove(o){const e=this.getTargetElement(o);this.dispatchEvent(new CustomEvent("shim-mousemove",{detail:{target:e}}))}onKeyDown(o){this.dispatchEvent(new CustomEvent("shim-keydown",{detail:{originalEvent:o}}))}getTargetElement(o){this.style.display="none";const e=document.elementFromPoint(o.clientX,o.clientY);return this.style.display="",e}};Bt.shadowRootOptions={...P.shadowRootOptions,delegatesFocus:!0};Bt.styles=[_`
      div {
        pointer-events: auto;
        background: rgba(255, 255, 255, 0);
        position: fixed;
        inset: 0px;
        z-index: 1000000;
      }
    `];Bt=v([V("vaadin-dev-tools-shim")],Bt);const Ka={resolve:o=>ue(e=>e.classList.contains("cc-banner"),o)?document.querySelector("vaadin-cookie-consent"):void 0},Ja={resolve:o=>{const e=ue(t=>t.localName==="vaadin-login-overlay-wrapper",o);return e?e.__dataHost:void 0}},Ya={resolve:o=>o.localName==="vaadin-dialog-overlay"?o.__dataHost:void 0},Xa={resolve:o=>{const e=ue(t=>t.localName==="vaadin-confirm-dialog-overlay",o);return e?e.__dataHost:void 0}},Qa={resolve:o=>{const e=ue(t=>t.localName==="vaadin-notification-card",o);return e?e.__dataHost:void 0}},Za={resolve:o=>o.localName!=="vaadin-menu-bar-item"?void 0:ue(e=>e.localName==="vaadin-menu-bar",o)},vn=[Ka,Ja,Ya,Xa,Qa,Za],el={resolve:o=>ue(e=>e.classList.contains("cc-banner"),o)},tl={resolve:o=>{var e;const t=ue(i=>{var n;return((n=i.shadowRoot)==null?void 0:n.querySelector("[part=overlay]"))!=null},o);return(e=t==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("[part=overlay]")}},ol={resolve:o=>{var e;const t=ue(i=>i.localName==="vaadin-login-overlay-wrapper",o);return(e=t==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("[part=card]")}},fn=[ol,el,tl],ue=function(o,e){return o(e)?e:e.parentNode&&e.parentNode instanceof HTMLElement?ue(o,e.parentNode):void 0};class il{resolveElement(e){for(const t in vn){let i=e;if((i=vn[t].resolve(e))!==void 0)return i}return e}}class nl{resolveElement(e){for(const t in fn){let i=e;if((i=fn[t].resolve(e))!==void 0)return i}return e}}const rl=new il,sl=new nl;let ye=class extends P{constructor(){super(),this.active=!1,this.components=[],this.selected=0,this.mouseMoveEvent=this.mouseMoveEvent.bind(this)}connectedCallback(){super.connectedCallback();const o=new CSSStyleSheet;o.replaceSync(`
    .vaadin-dev-tools-highlight-overlay {
      pointer-events: none;
      position: absolute;
      z-index: 10000;
      background: rgba(158,44,198,0.25);
    }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o],this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("vaadin-dev-tools-highlight-overlay"),this.addEventListener("mousemove",this.mouseMoveEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousemove",this.mouseMoveEvent)}render(){var o;return this.active?(this.style.display="block",y`
      <vaadin-dev-tools-shim
        @shim-click=${this.shimClick}
        @shim-mousemove=${this.shimMove}
        @shim-keydown=${this.shimKeydown}
      ></vaadin-dev-tools-shim>
      <div class="window popup component-picker-info">${(o=this.options)==null?void 0:o.infoTemplate}</div>
      <div class="window popup component-picker-components-info">
        <div>
          ${this.components.map((e,t)=>y`<div class=${t===this.selected?"selected":""}>
                ${e.element.tagName.toLowerCase()}
              </div>`)}
        </div>
      </div>
    `):(this.style.display="none",null)}open(o){this.options=o,this.active=!0,this.dispatchEvent(new CustomEvent("component-picker-opened",{}))}close(){this.active=!1,this.dispatchEvent(new CustomEvent("component-picker-closed",{}))}update(o){if(super.update(o),(o.has("selected")||o.has("components"))&&this.highlight(this.components[this.selected]),o.has("active")){const e=o.get("active"),t=this.active;!e&&t?requestAnimationFrame(()=>this.shim.focus()):e&&!t&&this.highlight(void 0)}}mouseMoveEvent(o){var e;if(!this.active){this.style.display="none";return}const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".component-picker-info");if(t){const i=t.getBoundingClientRect();o.x>i.x&&o.x<i.x+i.width&&o.y>i.y&&o.y<=i.y+i.height?t.style.opacity="0.05":t.style.opacity="1.0"}}shimKeydown(o){const e=o.detail.originalEvent;if(e.key==="Escape")this.close(),o.stopPropagation(),o.preventDefault();else if(e.key==="ArrowUp"){let t=this.selected-1;t<0&&(t=this.components.length-1),this.selected=t}else e.key==="ArrowDown"?this.selected=(this.selected+1)%this.components.length:e.key==="Enter"&&(this.pickSelectedComponent(),o.stopPropagation(),o.preventDefault())}shimMove(o){const e=rl.resolveElement(o.detail.target);this.components=ta(e),this.selected=this.components.length-1,this.components[this.selected].highlightElement=sl.resolveElement(o.detail.target)}shimClick(o){this.pickSelectedComponent()}pickSelectedComponent(){const o=this.components[this.selected];if(o&&this.options)try{this.options.pickCallback(o)}catch(e){console.error("Pick callback failed",e)}this.close()}highlight(o){let e=(o==null?void 0:o.highlightElement)??(o==null?void 0:o.element);if(this.highlighted!==e)if(e){const t=e.getBoundingClientRect(),i=getComputedStyle(e);this.overlayElement.style.top=`${t.top}px`,this.overlayElement.style.left=`${t.left}px`,this.overlayElement.style.width=`${t.width}px`,this.overlayElement.style.height=`${t.height}px`,this.overlayElement.style.borderRadius=i.borderRadius,document.body.append(this.overlayElement)}else this.overlayElement.remove();this.highlighted=e}};ye.styles=[Kn,_`
      .component-picker-info {
        left: 1em;
        bottom: 1em;
      }

      .component-picker-components-info {
        right: 3em;
        bottom: 1em;
      }

      .component-picker-components-info .selected {
        font-weight: bold;
      }
    `];v([N()],ye.prototype,"active",void 0);v([N()],ye.prototype,"components",void 0);v([N()],ye.prototype,"selected",void 0);v([at("vaadin-dev-tools-shim")],ye.prototype,"shim",void 0);ye=v([V("vaadin-dev-tools-component-picker")],ye);const al=Object.freeze(Object.defineProperty({__proto__:null,get ComponentPicker(){return ye}},Symbol.toStringTag,{value:"Module"}));class ll{constructor(){this.currentActiveComponent=null,this.currentActiveComponentMetaData=null,this.componentPicked=async(e,t)=>{await this.hideOverlay(),this.currentActiveComponent=e,this.currentActiveComponentMetaData=t},this.showOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.openOverlay&&this.currentActiveComponentMetaData.openOverlay(this.currentActiveComponent)},this.hideOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.hideOverlay&&this.currentActiveComponentMetaData.hideOverlay(this.currentActiveComponent)},this.reset=()=>{this.currentActiveComponent=null,this.currentActiveComponentMetaData=null}}}const Ee=new ll,id=o=>{const e=o.element.$.comboBox,t=e.$.overlay;dl(o.element,e,t)},nd=o=>{const e=o.element,t=e.$.comboBox,i=t.$.overlay;cl(e,t,i)},dl=(o,e,t)=>{o.opened=!0,t._storedModeless=t.modeless,t.modeless=!0,document._themeEditorDocClickListener=ul(o,e),document.addEventListener("click",document._themeEditorDocClickListener),e.removeEventListener("focusout",e._boundOnFocusout)},cl=(o,e,t)=>{o.opened=!1,!(!e||!t)&&(t.modeless=t._storedModeless,delete t._storedModeless,e.addEventListener("focusout",e._boundOnFocusout),document.removeEventListener("click",document._themeEditorDocClickListener),delete document._themeEditorDocClickListener)},ul=(o,e)=>t=>{const i=t.target;i!=null&&(e.opened=!pl(i,o))};function pl(o,e){if(!o||!o.tagName)return!0;if(o.tagName.startsWith("VAADIN-DEV"))return!1;let t=o,i={nodeId:-1,uiId:-1,element:void 0};for(;t&&t.parentNode&&(i=Oo(t),i.nodeId===-1);)t=t.parentElement?t.parentElement:t.parentNode.host;const n=Oo(e);return!(i.nodeId!==-1&&n.nodeId===i.nodeId)}Zo(_`
  .vaadin-theme-editor-highlight {
    outline: solid 2px #9e2cc6;
    outline-offset: 3px;
  }
`);let ce=class extends P{constructor(){super(...arguments),this.expanded=!1,this.themeEditorState=Fe.enabled,this.context=null,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null,this.markedAsUsed=!1}static get styles(){return _`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .hint vaadin-icon {
        color: var(--dev-tools-green-color);
        font-size: var(--lumo-icon-size-m);
      }

      .hint {
        display: flex;
        align-items: center;
        gap: var(--theme-editor-section-horizontal-padding);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}firstUpdated(){this.api=new xa(this.connection),this.history=new _a(this.api),this.historyActions=this.history.allowedActions,this.undoRedoListener=o=>{var e,t;const i=o.key==="Z"||o.key==="z";i&&(o.ctrlKey||o.metaKey)&&o.shiftKey?(e=this.historyActions)!=null&&e.allowRedo&&this.handleRedo():i&&(o.ctrlKey||o.metaKey)&&(t=this.historyActions)!=null&&t.allowUndo&&this.handleUndo()},document.addEventListener("vaadin-theme-updated",()=>{we.clear(),this.refreshTheme()}),document.addEventListener("keydown",this.undoRedoListener)}activate(){this.dispatchEvent(new CustomEvent("before-open"))}deactivate(){this.dispatchEvent(new CustomEvent("after-close"))}update(o){var e,t;super.update(o),o.has("expanded")&&(this.expanded?(this.highlightElement((e=this.context)==null?void 0:e.component.element),Ee.showOverlay()):(Ee.hideOverlay(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element)))}disconnectedCallback(){var o;super.disconnectedCallback(),this.removeElementHighlight((o=this.context)==null?void 0:o.component.element),Ee.hideOverlay(),Ee.reset(),document.removeEventListener("keydown",this.undoRedoListener)}render(){var o,e,t;return this.themeEditorState===Fe.missing_theme?this.renderMissingThemeNotice():y`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(o=this.context)!=null&&o.metadata?y` <vaadin-dev-tools-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.metadata}
                  @scope-change=${this.handleScopeChange}
                ></vaadin-dev-tools-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((e=this.historyActions)!=null&&e.allowUndo)}
              @click=${this.handleUndo}
            >
              ${kt.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((t=this.historyActions)!=null&&t.allowRedo)}
              @click=${this.handleRedo}
            >
              ${kt.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return y`
      <div class="notice">
        It looks like you have not set up an application theme yet. Theme editor requires an existing theme to work
        with. Please check our
        <a href="https://vaadin.com/docs/latest/styling/application-theme" target="_blank">documentation</a>
        on how to set up an application theme.
      </div>
    `}renderPropertyList(){if(!this.context)return null;if(!this.context.metadata){const o=this.context.component.element.localName;return y`
        <div class="notice">Styling <code>&lt;${o}&gt;</code> components is not supported at the moment.</div>
      `}if(this.context.scope===I.local&&!this.context.accessible){const o=this.context.metadata.displayName;return y`
        ${this.context.metadata.notAccessibleDescription&&this.context.scope===I.local?y`<div class="notice hint" style="padding-bottom: 0;">
              <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
              <div>${this.context.metadata.notAccessibleDescription}</div>
            </div>`:""}
        <div class="notice">
          The selected ${o} cannot be styled locally. Currently, Theme Editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${o}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return y` ${this.context.metadata.description&&this.context.scope===I.local?y`<div class="notice hint">
            <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
            <div>${this.context.metadata.description}</div>
          </div>`:""}
      <vaadin-dev-tools-theme-property-list
        class="property-list"
        .metadata=${this.context.metadata}
        .theme=${this.effectiveTheme}
        @theme-property-value-change=${this.handlePropertyChange}
        @open-css=${this.handleOpenCss}
      ></vaadin-dev-tools-theme-property-list>`}handleShowComponent(){if(!this.context)return;const o=this.context.component,e={nodeId:o.nodeId,uiId:o.uiId};this.connection.sendShowComponentCreateLocation(e)}async handleOpenCss(o){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},t=Be(o.detail.element,e);await this.api.openCss(t)}renderPicker(){var o;let e;if((o=this.context)!=null&&o.metadata){const t=this.context.scope===I.local?this.context.metadata.displayName:`All ${this.context.metadata.displayName}s`,i=y`<span class="component-type">${t}</span>`,n=this.context.scope===I.local?ba(this.context.component):null,r=n?y` <span class="instance-name-quote">"</span><span class="instance-name">${n}</span
            ><span class="instance-name-quote">"</span>`:null;e=y`${i} ${r}`}else e=y`<span class="no-selection">Pick an element to get started</span>`;return y`
      <div class="picker">
        <button @click=${this.pickComponent}>${kt.crosshair} ${e}</button>
      </div>
    `}renderLocalClassNameEditor(){var o;const e=((o=this.context)==null?void 0:o.scope)===I.local&&this.context.accessible;if(!this.context||!e)return null;const t=this.context.localClassName||this.context.suggestedClassName;return y` <vaadin-dev-tools-theme-class-name-editor
      .className=${t}
      @class-name-change=${this.handleClassNameChange}
    >
    </vaadin-dev-tools-theme-class-name-editor>`}async handleClassNameChange(o){if(!this.context)return;const e=this.context.localClassName,t=o.detail.value;if(e){const i=this.context.component.element;this.context.localClassName=t;const n=await this.api.setLocalClassName(this.context.component,t);this.historyActions=this.history.push(n.requestId,()=>we.previewLocalClassName(i,t),()=>we.previewLocalClassName(i,e))}else this.context={...this.context,suggestedClassName:t}}async pickComponent(){var o;Ee.hideOverlay(),this.removeElementHighlight((o=this.context)==null?void 0:o.component.element),this.pickerProvider().open({infoTemplate:y`
        <div>
          <h3>Locate the component to style</h3>
          <p>Use the mouse cursor to highlight components in the UI.</p>
          <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
          <p>Click the primary mouse button to select the component.</p>
        </div>
      `,pickCallback:async e=>{var t;const i=await ma.getMetadata(e);if(!i){this.context={component:e,scope:((t=this.context)==null?void 0:t.scope)||I.local},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}await Ee.componentPicked(e,i),this.highlightElement(e.element),this.refreshComponentAndTheme(e,i),Ee.showOverlay()}})}handleScopeChange(o){this.context&&this.refreshTheme({...this.context,scope:o.detail.value})}async handlePropertyChange(o){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:t,value:i}=o.detail;this.editedTheme.updatePropertyValue(e.selector,t.propertyName,i,!0),this.effectiveTheme=ge.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const n={themeScope:this.context.scope,localClassName:this.context.localClassName},r=va(e,n,t.propertyName,i);try{const s=await this.api.setCssRules([r]);this.historyActions=this.history.push(s.requestId);const l=fa(r);we.add(l)}catch(s){console.error("Failed to update property value",s)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===I.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const o=this.context.component.element,e=this.context.suggestedClassName;this.context.localClassName=e;const t=await this.api.setLocalClassName(this.context.component,e);this.historyActions=this.history.push(t.requestId,()=>we.previewLocalClassName(o,e),()=>we.previewLocalClassName(o))}async refreshComponentAndTheme(o,e){var t,i,n;if(o=o||((t=this.context)==null?void 0:t.component),e=e||((i=this.context)==null?void 0:i.metadata),!o||!e)return;const r=await this.api.loadComponentMetadata(o);this.markedAsUsed||this.api.markAsUsed().then(()=>{this.markedAsUsed=!0}),we.previewLocalClassName(o.element,r.className),await this.refreshTheme({scope:((n=this.context)==null?void 0:n.scope)||I.local,metadata:e,component:o,localClassName:r.className,suggestedClassName:r.suggestedClassName,accessible:r.accessible})}async refreshTheme(o){const e=o||this.context;if(!e||!e.metadata)return;if(e.scope===I.local&&!e.accessible){this.context=e,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let t=new ge(e.metadata);if(!(e.scope===I.local&&!e.localClassName)){const n={themeScope:e.scope,localClassName:e.localClassName},r=e.metadata.elements.map(l=>Be(l,n)),s=await this.api.loadRules(r);t=ge.fromServerRules(e.metadata,n,s.rules)}const i=await ga(e.metadata);this.context=e,this.baseTheme=i,this.editedTheme=t,this.effectiveTheme=ge.combine(i,this.editedTheme)}highlightElement(o){o&&o.classList.add("vaadin-theme-editor-highlight")}removeElementHighlight(o){o&&o.classList.remove("vaadin-theme-editor-highlight")}};v([w({})],ce.prototype,"expanded",void 0);v([w({})],ce.prototype,"themeEditorState",void 0);v([w({})],ce.prototype,"pickerProvider",void 0);v([w({})],ce.prototype,"connection",void 0);v([N()],ce.prototype,"historyActions",void 0);v([N()],ce.prototype,"context",void 0);v([N()],ce.prototype,"effectiveTheme",void 0);ce=v([V("vaadin-dev-tools-theme-editor")],ce);var hl=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var e=document.activeElement,t=[],i=0;i<o.rangeCount;i++)t.push(o.getRangeAt(i));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return o.removeAllRanges(),function(){o.type==="Caret"&&o.removeAllRanges(),o.rangeCount||t.forEach(function(n){o.addRange(n)}),e&&e.focus()}},gn={"text/plain":"Text","text/html":"Url",default:"Text"},ml="Copy to clipboard: #{key}, Enter";function vl(o){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,e)}function fl(o,e){var t,i,n,r,s,l,a=!1;e||(e={}),t=e.debug||!1;try{n=hl(),r=document.createRange(),s=document.getSelection(),l=document.createElement("span"),l.textContent=o,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(c){if(c.stopPropagation(),e.format)if(c.preventDefault(),typeof c.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var h=gn[e.format]||gn.default;window.clipboardData.setData(h,o)}else c.clipboardData.clearData(),c.clipboardData.setData(e.format,o);e.onCopy&&(c.preventDefault(),e.onCopy(c.clipboardData))}),document.body.appendChild(l),r.selectNodeContents(l),s.addRange(r);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");a=!0}catch(c){t&&console.error("unable to copy using execCommand: ",c),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",o),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(h){t&&console.error("unable to copy using clipboardData: ",h),t&&console.error("falling back to prompt"),i=vl("message"in e?e.message:ml),window.prompt(i,o)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(r):s.removeAllRanges()),l&&document.body.removeChild(l),n()}return a}let Wt=class extends P{constructor(){super(...arguments),this.serverInfo={versions:[]}}createRenderRoot(){return this}render(){return y` <div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        ${this.serverInfo.versions.map(o=>y`
            <dt>${o.name}</dt>
            <dd>${o.version}</dd>
          `)}
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${!this._devTools.conf.enable||(this._devTools.frontendStatus===S.UNAVAILABLE||this._devTools.frontendStatus===S.ERROR)&&(this._devTools.javaStatus===S.UNAVAILABLE||this._devTools.javaStatus===S.ERROR)}
              ?checked="${this._devTools.frontendStatus===S.ACTIVE||this._devTools.javaStatus===S.ACTIVE}"
              @change=${o=>this._devTools.setActive(o.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.conf.backend===k.HOTSWAP_AGENT||this._devTools.conf.backend===k.JREBEL?this._devTools.frontendStatus:this._devTools.javaStatus)}"
        >
          Java ${this._devTools.conf.backend===k.HOTSWAP_AGENT||this._devTools.conf.backend===k.JREBEL?this._devTools.frontendStatus:this._devTools.javaStatus}
          ${this._devTools.conf.backend?`(${k.BACKEND_DISPLAY_NAME[this._devTools.conf.backend]})`:""}
        </dd>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.frontendStatus)}"
        >
          Front end ${this._devTools.frontendStatus}
        </dd>
      </dl>
    </div>`}handleMessage(o){return(o==null?void 0:o.command)==="serverInfo"?(this.serverInfo=o.data,!0):!1}copyInfoToClipboard(){const o=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),e=Array.from(o).map(t=>(t.localName==="dd"?": ":`
`)+t.textContent.trim()).join("").replace(/^\n/,"");fl(e),this._devTools.showNotification(M.INFORMATION,"Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}};v([w({type:Object})],Wt.prototype,"_devTools",void 0);v([N()],Wt.prototype,"serverInfo",void 0);Wt=v([V("vaadin-dev-tools-info")],Wt);let Do=class extends P{createRenderRoot(){return this}activate(){this._devTools.unreadErrors=!1,this.updateComplete.then(()=>{const o=this.renderRoot.querySelector(".message-tray .message:last-child");o&&o.scrollIntoView()})}render(){return y`<div class="message-tray">
      ${this._devTools.messages.map(o=>this._devTools.renderMessage(o))}
    </div>`}};v([w({type:Object})],Do.prototype,"_devTools",void 0);Do=v([V("vaadin-dev-tools-log")],Do);const bn=16384;class er extends Lt{constructor(e){if(super(),!e)return;const t={transport:"websocket",fallbackTransport:"websocket",url:e,contentType:"application/json; charset=UTF-8",reconnectInterval:5e3,timeout:-1,maxReconnectOnClose:1e7,trackMessageLength:!0,enableProtocol:!0,handleOnlineOffline:!1,executeCallbackBeforeReconnect:!0,messageDelimiter:"|",onMessage:i=>{const n={data:i.responseBody};this.handleMessage(n)},onError:i=>{this.handleError(i)}};gl().then(i=>{this.socket=i.subscribe(t)})}onReload(){}onUpdate(e,t){}onMessage(e){}handleMessage(e){let t;try{t=JSON.parse(e.data)}catch(i){this.handleError(`[${i.name}: ${i.message}`);return}t.command==="hello"?(this.setStatus(S.ACTIVE),this.onHandshake()):t.command==="reload"?this.status===S.ACTIVE&&this.onReload():t.command==="update"?this.status===S.ACTIVE&&this.onUpdate(t.path,t.content):this.onMessage(t)}handleError(e){console.error(e),this.setStatus(S.ERROR),this.onConnectionError(e)}send(e,t){if(!this.socket){oi(()=>this.socket,r=>this.send(e,t));return}const i=JSON.stringify({command:e,data:t});let n=i.length+"|"+i;for(;n.length;)this.socket.push(n.substring(0,bn)),n=n.substring(bn)}}er.HEARTBEAT_INTERVAL=18e4;function oi(o,e){const t=o();t?e(t):setTimeout(()=>oi(o,e),50)}function gl(){return new Promise((o,e)=>{oi(()=>{var t;return(t=window==null?void 0:window.vaadinPush)==null?void 0:t.atmosphere},o)})}var T,M;(function(o){o.LOG="log",o.INFORMATION="information",o.WARNING="warning",o.ERROR="error"})(M||(M={}));let k=T=class extends P{static get styles(){return[_`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          color-scheme: dark;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .dev-tools-icon {
          flex: none;
          pointer-events: none;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          fill: #fff;
          transition: var(--dev-tools-transition-duration);
          margin: 0;
        }

        .dev-tools.active .dev-tools-icon {
          opacity: 0;
          position: absolute;
          transform: scale(0.5);
        }

        .dev-tools .status-blip {
          flex: none;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          z-index: 20001;
          background: var(--dev-tools-grey-color);
          position: absolute;
          top: -1px;
          right: -1px;
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .switch {
          display: inline-flex;
          align-items: center;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .switch .slider {
          display: block;
          flex: none;
          width: 28px;
          height: 18px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: var(--dev-tools-transition-duration);
          margin-right: 0.5rem;
        }

        .switch:focus-within .slider,
        .switch .slider:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transition: none;
        }

        .switch input:focus-visible ~ .slider {
          box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
        }

        .switch .slider::before {
          content: '';
          display: block;
          margin: 2px;
          width: 14px;
          height: 14px;
          background-color: #fff;
          transition: var(--dev-tools-transition-duration);
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: var(--dev-tools-green-color);
        }

        .switch input:checked + .slider::before {
          transform: translateX(10px);
        }

        .switch input:disabled + .slider::before {
          background-color: var(--dev-tools-grey-color);
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: auto;
          margin: 0.5rem;
          min-width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .tab {
          color: var(--dev-tools-text-color-secondary);
          font: inherit;
          font-size: var(--dev-tools-font-size-small);
          font-weight: 500;
          line-height: 1;
          padding: 0.25rem 0.375rem;
          background: none;
          border: none;
          margin: 0;
          border-radius: 0.25rem;
          transition: var(--dev-tools-transition-duration);
        }

        .tab:hover,
        .tab.active {
          color: var(--dev-tools-text-color-active);
        }

        .tab.active {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .tab.unreadErrors::after {
          content: '•';
          color: hsl(var(--dev-tools-red-hsl));
          font-size: 1.5rem;
          position: absolute;
          transform: translate(0, -50%);
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .minimize-button {
          flex: none;
          width: 1rem;
          height: 1rem;
          color: inherit;
          background-color: transparent;
          border: 0;
          padding: 0;
          margin: 0 0 0 auto;
          opacity: 0.8;
        }

        .minimize-button:hover {
          opacity: 1;
        }

        .minimize-button svg {
          max-width: 100%;
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        .info-tray {
          padding: 0.75rem;
          position: relative;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .info-tray dl {
          margin: 0;
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: 0.75rem;
          position: relative;
        }

        .info-tray dt {
          grid-column: 1;
          color: var(--dev-tools-text-color-emphasis);
        }

        .info-tray dt:not(:first-child)::before {
          content: '';
          width: 100%;
          position: absolute;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: -0.375rem;
        }

        .info-tray dd {
          grid-column: 2;
          margin: 0;
        }

        .info-tray :is(dt, dd):not(:last-child) {
          margin-bottom: 0.75rem;
        }

        .info-tray dd + dd {
          margin-top: -0.5rem;
        }

        .info-tray .live-reload-status::before {
          content: '•';
          color: var(--status-color);
          width: 0.75rem;
          display: inline-block;
          font-size: 1rem;
          line-height: 0.5rem;
        }

        .info-tray .copy {
          position: fixed;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
        }

        .info-tray .switch {
          vertical-align: -4px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `,Kn]}static get isActive(){const o=window.sessionStorage.getItem(T.ACTIVE_KEY_IN_SESSION_STORAGE);return o===null||o!=="false"}static notificationDismissed(o){const e=window.localStorage.getItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return e!==null&&e.includes(o)}elementTelemetry(){let o={};try{const e=localStorage.getItem("vaadin.statistics.basket");if(!e)return;o=JSON.parse(e)}catch{return}this.frontendConnection&&this.frontendConnection.send("reportTelemetry",{browserData:o})}openWebSocketConnection(){if(this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE,!this.conf.token){console.error("Dev tools functionality denied for this host."),this.log(M.LOG,"See Vaadin documentation on how to configure devmode.hostsAllowed property.",void 0,"https://vaadin.com/docs/latest/configuration/properties#properties",void 0);return}const o=n=>this.log(M.ERROR,n),e=()=>{this.showSplashMessage("Reloading…");const n=window.sessionStorage.getItem(T.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),r=n?parseInt(n,10)+1:1;window.sessionStorage.setItem(T.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,r.toString()),window.sessionStorage.setItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},t=(n,r)=>{let s=document.head.querySelector(`style[data-file-path='${n}']`);s?(this.log(M.INFORMATION,"Hot update of "+n),s.textContent=r,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):e()},i=new er(this.getDedicatedWebSocketUrl());i.onHandshake=()=>{this.log(M.LOG,"Vaadin development mode initialized"),T.isActive||i.setActive(!1),this.elementTelemetry()},i.onConnectionError=o,i.onReload=e,i.onUpdate=t,i.onStatusChange=n=>{this.frontendStatus=n},i.onMessage=n=>this.handleFrontendMessage(n),this.frontendConnection=i,this.conf.backend===T.SPRING_BOOT_DEVTOOLS?(this.javaConnection=new ia(this.getSpringBootWebSocketUrl(window.location)),this.javaConnection.onHandshake=()=>{T.isActive||this.javaConnection.setActive(!1)},this.javaConnection.onReload=e,this.javaConnection.onConnectionError=o,this.javaConnection.onStatusChange=n=>{this.javaStatus=n},this.javaConnection.onHandshake=()=>{this.conf.backend&&this.log(M.INFORMATION,`Java live reload available: ${T.BACKEND_DISPLAY_NAME[this.conf.backend]}`)}):(this.conf.backend===T.HOTSWAP_AGENT||this.conf.backend===T.JREBEL)&&(this.frontendConnection.onHandshake=()=>{this.conf.backend&&this.log(M.INFORMATION,`Java live reload available: ${T.BACKEND_DISPLAY_NAME[this.conf.backend]}`)}),this.conf.backend||this.showNotification(M.WARNING,"Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}tabHandleMessage(o,e){const t=o;return t.handleMessage&&t.handleMessage.call(o,e)}handleFrontendMessage(o){for(const e of this.tabs)if(e.element&&this.tabHandleMessage(e.element,o))return;if(o.command==="featureFlags")this.features=o.data.features;else if(o.command==="themeEditorState"){const e=!!window.Vaadin.Flow;this.themeEditorState=o.data,e&&this.themeEditorState!==Fe.disabled&&(this.tabs.push({id:"theme-editor",title:"Theme Editor (Preview)",render:()=>this.renderThemeEditor()}),this.requestUpdate())}else Zs(o)||this.unhandledMessages.push(o)}getDedicatedWebSocketUrl(){function o(t){const i=document.createElement("div");return i.innerHTML=`<a href="${t}"/>`,i.firstChild.href}if(this.conf.url===void 0)return;const e=o(this.conf.url);if(!e.startsWith("http://")&&!e.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${e}?v-r=push&debug_window&token=${this.conf.token}`}getSpringBootWebSocketUrl(o){const{hostname:e}=o,t=o.protocol==="https:"?"wss":"ws";if(e.endsWith("gitpod.io")){const i=e.replace(/.*?-/,"");return`${t}://${this.conf.liveReloadPort}-${i}`}else return`${t}://${e}:${this.conf.liveReloadPort}`}constructor(){super(),this.unhandledMessages=[],this.conf={enable:!1,url:"",liveReloadPort:-1},this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE,this.tabs=[{id:"log",title:"Log",render:"vaadin-dev-tools-log"},{id:"info",title:"Info",render:"vaadin-dev-tools-info"},{id:"features",title:"Feature Flags",render:()=>this.renderFeatures()}],this.activeTab="log",this.features=[],this.unreadErrors=!1,this.componentPickActive=!1,this.themeEditorState=Fe.disabled,this.nextMessageId=1,this.transitionDuration=0,window.Vaadin.Flow&&this.tabs.push({id:"code",title:"Code",render:()=>this.renderCode()})}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.conf=window.Vaadin.devToolsConf||this.conf,this.disableEventListener=t=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),window.sessionStorage.getItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE)){const t=new Date,i=`${`0${t.getHours()}`.slice(-2)}:${`0${t.getMinutes()}`.slice(-2)}:${`0${t.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${i}`),window.sessionStorage.removeItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const o=window;o.Vaadin=o.Vaadin||{},o.Vaadin.devTools=Object.assign(this,o.Vaadin.devTools),document.documentElement.addEventListener("vaadin-overlay-outside-click",t=>{const i=t,n=i.target.owner;n&&oa(this,n)||i.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()});const e=window.Vaadin;e.devToolsPlugins&&(Array.from(e.devToolsPlugins).forEach(t=>this.initPlugin(t)),e.devToolsPlugins={push:t=>this.initPlugin(t)}),this.openWebSocketConnection(),ea()}async initPlugin(o){const e=this;o.init({addTab:(t,i)=>{e.tabs.push({id:t,title:t,render:i})},send:function(t,i){e.frontendConnection.send(t,i)}})}format(o){return o.toString()}catchErrors(){const o=window.Vaadin.ConsoleErrors;o&&o.forEach(e=>{this.log(M.ERROR,e.map(t=>this.format(t)).join(" "))}),window.Vaadin.ConsoleErrors={push:e=>{this.log(M.ERROR,e.map(t=>this.format(t)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(o=>this.dismissNotification(o.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(o){this.splashMessage=o,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},T.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log(M.LOG,this.splashMessage),this.showSplashMessage(void 0)}checkLicense(o){this.frontendConnection?this.frontendConnection.send("checkLicense",o):Gn({message:"Internal error: no connection",product:o})}log(o,e,t,i,n){const r=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:r,type:o,message:e,details:t,link:i,dontShowAgain:!1,dontShowAgainMessage:n,deleted:!1});this.messages.length>T.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const s=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&s?(setTimeout(()=>s.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):o===M.ERROR&&(this.unreadErrors=!0)})}showNotification(o,e,t,i,n,r){if(n===void 0||!T.notificationDismissed(n)){if(this.notifications.filter(l=>l.persistentId===n).filter(l=>!l.deleted).length>0)return;const s=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:s,type:o,message:e,details:t,link:i,persistentId:n,dontShowAgain:!1,dontShowAgainMessage:r,deleted:!1}),i===void 0&&setTimeout(()=>{this.dismissNotification(s)},T.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(o,e,t,i)}dismissNotification(o){const e=this.findNotificationIndex(o);if(e!==-1&&!this.notifications[e].deleted){const t=this.notifications[e];if(t.dontShowAgain&&t.persistentId&&!T.notificationDismissed(t.persistentId)){let i=window.localStorage.getItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);i=i===null?t.persistentId:`${i},${t.persistentId}`,window.localStorage.setItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,i)}t.deleted=!0,this.log(t.type,t.message,t.details,t.link),setTimeout(()=>{const i=this.findNotificationIndex(o);i!==-1&&(this.notifications.splice(i,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(o){let e=-1;return this.notifications.some((t,i)=>t.id===o?(e=i,!0):!1),e}toggleDontShowAgain(o){const e=this.findNotificationIndex(o);if(e!==-1&&!this.notifications[e].deleted){const t=this.notifications[e];t.dontShowAgain=!t.dontShowAgain,this.requestUpdate()}}setActive(o){var e,t;(e=this.frontendConnection)==null||e.setActive(o),(t=this.javaConnection)==null||t.setActive(o),window.sessionStorage.setItem(T.ACTIVE_KEY_IN_SESSION_STORAGE,o?"true":"false")}getStatusColor(o){return o===S.ACTIVE?"var(--dev-tools-green-color)":o===S.INACTIVE?"var(--dev-tools-grey-color)":o===S.UNAVAILABLE?"var(--dev-tools-yellow-color)":o===S.ERROR?"var(--dev-tools-red-color)":"none"}renderMessage(o){return y`
      <div
        class="message ${o.type} ${o.deleted?"animate-out":""} ${o.details||o.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${o.message}</div>
          <div class="message-details" ?hidden="${!o.details&&!o.link}">
            ${o.details?y`<p>${o.details}</p>`:""}
            ${o.link?y`<a class="ahreflike" href="${o.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${o.persistentId?y`<div
                class="persist ${o.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(o.id)}
              >
                ${o.dontShowAgainMessage||"Don’t show again"}
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(o.id)}>Dismiss</div>
      </div>
    `}render(){return y` <div
        class="window ${this.expanded&&!this.componentPickActive?"visible":"hidden"}"
        tabindex="0"
        @keydown=${o=>o.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(o=>y`<button
                class=${Yo({tab:!0,active:this.activeTab===o.id,unreadErrors:o.id==="log"&&this.unreadErrors})}
                id="${o.id}"
                @click=${()=>{const e=this.tabs.find(n=>n.id===this.activeTab);if(e&&e.element){const n=typeof e.render=="function"?e.element.firstElementChild:e.element,r=n==null?void 0:n.deactivate;r&&r.call(n)}this.activeTab=o.id;const t=typeof o.render=="function"?o.element.firstElementChild:o.element,i=t.activate;i&&i.call(t)}}
              >
                ${o.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div id="tabContainer"></div>
      </div>

      <div class="notification-tray">${this.notifications.map(o=>this.renderMessage(o))}</div>
      <vaadin-dev-tools-component-picker
        .active=${this.componentPickActive}
        @component-picker-opened=${()=>{this.componentPickActive=!0}}
        @component-picker-closed=${()=>{this.componentPickActive=!1}}
      ></vaadin-dev-tools-component-picker>
      <div
        style="display: var(--dev-tools-button-display, 'block')"
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?y`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:y`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.conf.backend===T.HOTSWAP_AGENT||this.conf.backend===T.JREBEL?this.frontendStatus:this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?y`<span class="status-description">${this.splashMessage}</span></div>`:$}
      </div>`}updated(o){var e;super.updated(o);const t=this.renderRoot.querySelector("#tabContainer"),i=[];if(this.tabs.forEach(r=>{r.element||(typeof r.render=="function"?r.element=document.createElement("div"):(r.element=document.createElement(r.render),r.element._devTools=this),i.push(r.element))}),(t==null?void 0:t.childElementCount)!==this.tabs.length){for(let r=0;r<this.tabs.length;r++){const s=this.tabs[r];t.childElementCount>r&&t.children[r]===s.element||t.insertBefore(s.element,t.children[r])}for(;(t==null?void 0:t.childElementCount)>this.tabs.length;)(e=t.lastElementChild)==null||e.remove()}for(const r of this.tabs){typeof r.render=="function"?Se(r.render(),r.element):r.element.requestUpdate&&r.element.requestUpdate();const s=r.id===this.activeTab;r.element.hidden=!s}for(const r of i)for(var n=0;n<this.unhandledMessages.length;n++)this.tabHandleMessage(r,this.unhandledMessages[n])&&(this.unhandledMessages.splice(n,1),n--)}renderCode(){return y`<div class="info-tray">
      <div>
        <select id="locationType">
          <option value="create" selected>Create</option>
          <option value="attach">Attach</option>
        </select>
        <button
          class="button pick"
          @click=${async()=>{await f(()=>Promise.resolve().then(()=>al),void 0),this.componentPicker.open({infoTemplate:y`
                <div>
                  <h3>Locate a component in source code</h3>
                  <p>Use the mouse cursor to highlight components in the UI.</p>
                  <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
                  <p>
                    Click the primary mouse button to open the corresponding source code line of the highlighted
                    component in your IDE.
                  </p>
                </div>
              `,pickCallback:o=>{const e={nodeId:o.nodeId,uiId:o.uiId};this.renderRoot.querySelector("#locationType").value==="create"?this.frontendConnection.send("showComponentCreateLocation",e):this.frontendConnection.send("showComponentAttachLocation",e)}})}}
        >
          Find component in code
        </button>
      </div>
      </div>
    </div>`}renderFeatures(){return y`<div class="features-tray">
      ${this.features.map(o=>y`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${o.id}"
              type="checkbox"
              ?checked=${o.enabled}
              @change=${e=>this.toggleFeatureFlag(e,o)}
            />
            <span class="slider"></span>
            ${o.title}
          </label>
          <a class="ahreflike" href="${o.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}setJavaLiveReloadActive(o){var e;this.javaConnection?this.javaConnection.setActive(o):(e=this.frontendConnection)==null||e.setActive(o)}renderThemeEditor(){return y` <vaadin-dev-tools-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .pickerProvider=${()=>this.componentPicker}
      .connection=${this.frontendConnection}
      @before-open=${()=>this.setJavaLiveReloadActive(!1)}
      @after-close=${()=>this.setJavaLiveReloadActive(!0)}
    ></vaadin-dev-tools-theme-editor>`}toggleFeatureFlag(o,e){const t=o.target.checked;this.frontendConnection?(this.frontendConnection.send("setFeature",{featureId:e.id,enabled:t}),this.showNotification(M.INFORMATION,`“${e.title}” ${t?"enabled":"disabled"}`,e.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${e.id}${t?"Enabled":"Disabled"}`)):this.log(M.ERROR,`Unable to toggle feature ${e.title}: No server connection available`)}};k.MAX_LOG_ROWS=1e3;k.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";k.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";k.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";k.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";k.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;k.HOTSWAP_AGENT="HOTSWAP_AGENT";k.JREBEL="JREBEL";k.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";k.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};v([w({type:Boolean,attribute:!1})],k.prototype,"expanded",void 0);v([w({type:Array,attribute:!1})],k.prototype,"messages",void 0);v([w({type:String,attribute:!1})],k.prototype,"splashMessage",void 0);v([w({type:Array,attribute:!1})],k.prototype,"notifications",void 0);v([w({type:String,attribute:!1})],k.prototype,"frontendStatus",void 0);v([w({type:String,attribute:!1})],k.prototype,"javaStatus",void 0);v([N()],k.prototype,"tabs",void 0);v([N()],k.prototype,"activeTab",void 0);v([N()],k.prototype,"features",void 0);v([N()],k.prototype,"unreadErrors",void 0);v([at(".window")],k.prototype,"root",void 0);v([at("vaadin-dev-tools-component-picker")],k.prototype,"componentPicker",void 0);v([N()],k.prototype,"componentPickActive",void 0);v([N()],k.prototype,"themeEditorState",void 0);k=T=v([V("vaadin-dev-tools")],k);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bl=o=>class extends o{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(t,i,n){super.attributeChangedCallback(t,i,n),t==="theme"&&this._set_theme(n)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tr=[];function or(o){return o&&Object.prototype.hasOwnProperty.call(o,"__themes")}function yl(o){return or(customElements.get(o))}function xl(o=[]){return[o].flat(1/0).filter(e=>e instanceof Ko?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Gt(o,e,t={}){o&&yl(o)&&console.warn(`The custom element definition for "${o}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=xl(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(o,e,t):tr.push({themeFor:o,styles:e,include:t.include,moduleId:t.moduleId})}function Uo(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():tr}function _l(o,e){return(o||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`,"u").test(e))}function wl(o=""){let e=0;return o.startsWith("lumo-")||o.startsWith("material-")?e=1:o.startsWith("vaadin-")&&(e=2),e}function ir(o){const e=[];return o.include&&[].concat(o.include).forEach(t=>{const i=Uo().find(n=>n.moduleId===t);i?e.push(...ir(i),...i.styles):console.warn(`Included moduleId ${t} not found in style registry`)},o.styles),e}function El(o,e){const t=document.createElement("style");t.innerHTML=o.map(i=>i.cssText).join(`
`),e.content.appendChild(t)}function Sl(o){const e=`${o}-default-theme`,t=Uo().filter(i=>i.moduleId!==e&&_l(i.themeFor,o)).map(i=>({...i,styles:[...ir(i),...i.styles],includePriority:wl(i.moduleId)})).sort((i,n)=>n.includePriority-i.includePriority);return t.length>0?t:Uo().filter(i=>i.moduleId===e)}const sd=o=>class extends bl(o){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||or(this)||El(this.getStylesForThis(),t)}static finalizeStyles(t){const i=this.getStylesForThis();return t?[...super.finalizeStyles(t),...i]:i}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),i=(t?t.constructor.__themes:[])||[];this.__themes=[...i,...Sl(this.is)];const n=this.__themes.flatMap(r=>r.styles);return n.filter((r,s)=>s===n.lastIndexOf(r))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kl=(o,...e)=>{const t=document.createElement("style");t.id=o,t.textContent=e.map(i=>i.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",t)},xe=(o,...e)=>{kl(`lumo-${o}`,e)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Cl(o){const e=customElements.get(o.is);if(!e)Object.defineProperty(o,"version",{get(){return"24.3.13"}}),customElements.define(o.is,o);else{const t=e.version;t&&o.version&&t===o.version?console.warn(`The component ${o.is} has been loaded twice`):console.error(`Tried to define ${o.is} version ${o.version} when version ${e.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tl extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Cl(Tl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $l=_`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,ii=_`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Gt("",ii,{moduleId:"lumo-typography"});xe("typography-props",$l);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pl=_`
  ${Vn(ii.cssText.replace(/,\s*:host/su,""))}
`;xe("typography",Pl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Al=_`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;xe("color-props",Al);const ni=_`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Gt("",ni,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */xe("color",ni);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rl=_`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;_`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;xe("style-props",Rl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ri=_`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Gt("",ri,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */xe("badge",ri);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nl=_`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Il=_`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint {
    background-color: var(--lumo-tint);
  }

  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade {
    background-color: var(--lumo-shade);
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ol=_`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }

  /* === Border color === */
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ll=_`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zl=_`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ml=_`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vl=_`
  /* === Box shadow === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dl=_`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ul=_`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jl=_`
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-none {
    transition: none;
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fl=_`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const si=_`
${Nl}
${Il}
${Ol}
${Ll}
${zl}
${Ml}
${Vl}
${Dl}
${Ul}
${jl}
${Fl}
`;Gt("",si,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */xe("utility",si);const{toString:Bl}=Object.prototype;function Wl(o){return Bl.call(o)==="[object RegExp]"}function Hl(o,{preserve:e=!0,whitespace:t=!0,all:i}={}){if(i)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let n=e,r;typeof e=="function"?(n=!1,r=e):Wl(e)&&(n=!1,r=c=>e.test(c));let s=!1,l="",a="",d="";for(let c=0;c<o.length;c++){if(l=o[c],o[c-1]!=="\\"&&(l==='"'||l==="'")&&(s===l?s=!1:s||(s=l)),!s&&l==="/"&&o[c+1]==="*"){const h=o[c+2]==="!";let u=c+2;for(;u<o.length;u++){if(o[u]==="*"&&o[u+1]==="/"){n&&h||r&&r(a)?d+=`/*${a}*/`:t||(o[u+2]===`
`?u++:o[u+2]+o[u+3]===`\r
`&&(u+=2)),a="";break}a+=o[u]}c=u+1;continue}d+=l}return d}const ql=CSSStyleSheet.toString().includes("document.createElement"),Gl=(o,e)=>{const t=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(o)!=null&&(o=Hl(o));for(var i,n=o;(i=t.exec(o))!==null;){n=n.replace(i[0],"");const r=document.createElement("link");r.rel="stylesheet",r.href=i[2]||i[4];const s=i[1]||i[5];s&&(r.media=s),e===document?document.head.appendChild(r):e.appendChild(r)}return n},Kl=(o,e,t)=>(e.adoptedStyleSheets=[o,...e.adoptedStyleSheets],()=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(i=>i!==o)}),Jl=(o,e,t)=>{const i=new CSSStyleSheet;return i.replaceSync(o),ql?Kl(i,e):(e.adoptedStyleSheets.splice(0,0,i),()=>{e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(i),1)})},Yl=(o,e)=>{const t=document.createElement("style");return t.type="text/css",t.textContent=o,document.head.insertBefore(t,void 0),()=>{t.remove()}},Ke=(o,e,t,i)=>{if(t===document){const r=Xl(o);if(window.Vaadin.theme.injectedGlobalCss.indexOf(r)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(r)}const n=Gl(o,t);return t===document?Yl(n):Jl(n,t)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function yn(o){let e,t,i=2166136261;for(e=0,t=o.length;e<t;e++)i^=o.charCodeAt(e),i+=(i<<1)+(i<<4)+(i<<7)+(i<<8)+(i<<24);return("0000000"+(i>>>0).toString(16)).substr(-8)}function Xl(o){let e=yn(o);return e+yn(e+o)}document._vaadintheme_flowcrmtutorial_componentCss||(document._vaadintheme_flowcrmtutorial_componentCss=!0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=_`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;xe("spacing-props",nr);const Ql=o=>{const e=[];o!==document&&(e.push(Ke(ii.cssText,"",o)),e.push(Ke(ni.cssText,"",o)),e.push(Ke(nr.cssText,"",o)),e.push(Ke(ri.cssText,"",o)),e.push(Ke(si.cssText,"",o)))},Zl=Ql;Zl(document);export{da as A,sa as C,Ds as D,Z as I,P as L,te as N,de as O,Ms as P,dl as R,aa as S,sd as T,Lo as _,xe as a,Vs as b,_ as c,Cl as d,Se as e,bl as f,$ as g,y as h,ni as i,ii as j,R as k,cl as l,la as m,Ce as n,ul as o,id as p,nd as q,Gt as r,Oe as s,tr as t,Vn as u};
