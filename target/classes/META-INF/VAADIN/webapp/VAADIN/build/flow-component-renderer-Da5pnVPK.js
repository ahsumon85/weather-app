import{i as P,g as H,f as j,T as ie,h as Oe,b as Pe,d as ne,e as xe,x as Ae,Z as Ie,y as Le}from"./indexhtml-CFNQGfpv.js";import{h as k,D as De,P as x,b as Me,m as He,E as re,s as ke,C as Se,d as ae,v as le,w as c,x as de,F as Ne,G as Fe,H as he,k as ze,y as Re,I as $e}from"./generated-flow-imports-D0Hlpdoc.js";import{M as $,N as Be,d as Ve,C as ce,i as Ue,O as je,g as We,J as qe,m as Ke,r as Ge,k as Ye}from"./vaadin-vertical-layout-D5yLPdzZ.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=(o,t)=>(o==null?void 0:o._$litType$)!==void 0,Qe=o=>o.strings===void 0;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _e=P`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;H("",_e,{moduleId:"lumo-overlay"});const Ze=P`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;H("vaadin-tooltip-overlay",[_e,Ze],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xe=P`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let D=!1,ue=[],pe=[];function fe(){D=!0,requestAnimationFrame(function(){D=!1,Je(ue),setTimeout(function(){et(pe)})})}function Je(o){for(;o.length;)me(o.shift())}function et(o){for(let t=0,e=o.length;t<e;t++)me(o.shift())}function me(o){const t=o[0],e=o[1],s=o[2];try{e.apply(t,s)}catch(i){setTimeout(()=>{throw i})}}function Xt(o,t,e){D||fe(),ue.push([o,t,e])}function tt(o,t,e){D||fe(),pe.push([o,t,e])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let y=new WeakMap,A=new WeakMap,I={},S=0;const Z=o=>o&&o.nodeType===Node.ELEMENT_NODE,N=(...o)=>{console.error(`Error: ${o.join(" ")}. Skip setting aria-hidden.`)},st=(o,t)=>Z(o)?t.map(e=>{if(!Z(e))return N(e,"is not a valid element"),null;let s=e;for(;s&&s!==o;){if(o.contains(s))return e;s=s.getRootNode().host}return N(e,"is not contained inside",o),null}).filter(e=>!!e):(N(o,"is not a valid element"),[]),ot=(o,t,e,s)=>{const i=st(t,Array.isArray(o)?o:[o]);I[e]||(I[e]=new WeakMap);const n=I[e],r=[],a=new Set,l=new Set(i),h=d=>{if(!d||a.has(d))return;a.add(d);const u=d.assignedSlot;u&&h(u),h(d.parentNode||d.host)};i.forEach(h);const p=d=>{if(!d||l.has(d))return;const u=d.shadowRoot;(u?[...d.children,...u.children]:[...d.children]).forEach(_=>{if(!["template","script","style"].includes(_.localName))if(a.has(_))p(_);else{const K=_.getAttribute(s),G=K!==null&&K!=="false",Y=(y.get(_)||0)+1,Q=(n.get(_)||0)+1;y.set(_,Y),n.set(_,Q),r.push(_),Y===1&&G&&A.set(_,!0),Q===1&&_.setAttribute(e,"true"),G||_.setAttribute(s,"true")}})};return p(t),a.clear(),S+=1,()=>{r.forEach(d=>{const u=y.get(d)-1,m=n.get(d)-1;y.set(d,u),n.set(d,m),u||(A.has(d)?A.delete(d):d.removeAttribute(s)),m||d.removeAttribute(e)}),S-=1,S||(y=new WeakMap,y=new WeakMap,A=new WeakMap,I={})}},it=(o,t=document.body,e="data-aria-hidden")=>{const s=Array.from(Array.isArray(o)?o:[o]);return t&&s.push(...Array.from(t.querySelectorAll("[aria-live]"))),ot(s,t,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nt{constructor(t,e){this.host=t,this.callback=typeof e=="function"?e:()=>t}showModal(){const t=this.callback();this.__showOthers=it(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rt{saveFocus(t){this.focusNode=t||$()}restoreFocus(){const t=this.focusNode;t&&($()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F=[];class at{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Be(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(Ve).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");F.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,F.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(F).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,s=t?-1:1,i=this.__focusedElementIndex,n=(e.length+i+s)%e.length,r=e[n];r.focus(),r.localName==="input"&&r.select()}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lt=o=>class extends ce(o){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new nt(this),this.__focusTrapController=new at(this),this.__focusRestorationController=new rt}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=$();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let s=e;const i=e.ownerDocument;for(;s&&s!==i&&s!==this;)s=s.parentNode||s.host;return s===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L=()=>Array.from(document.body.children).filter(o=>o instanceof HTMLElement&&o._hasOverlayStackMixin&&!o.hasAttribute("closing")).sort((o,t)=>o.__zIndex-t.__zIndex||0),dt=o=>o===L().pop(),ht=o=>class extends o{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return dt(this)}bringToFront(){let e="";const s=L().filter(i=>i!==this).pop();s&&(e=s.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),L().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=L();let s;for(;(s=e.pop())&&!(s!==this&&(s.$.overlay.style.removeProperty("pointer-events"),!s.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ct=o=>class extends lt(ht(o)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Ue&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const s=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),s.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,i=window.innerWidth>e,n=document.documentElement.clientHeight;i&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${n-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,s,i,n){const r=this._oldOwner!==s||this._oldModel!==i;this._oldModel=i,this._oldOwner=s;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const h=this._oldOpened!==n;this._oldOpened=n,a&&l&&(this.innerHTML="",delete this._$litPart$),n&&e&&(a||h||r)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,s){e?(this._saveFocus(),this._animatedOpening(),tt(this,()=>{this._trapFocus();const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):s&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),s=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&s&&s!=="none"}_enqueueAnimation(e,s){const i=`__${e}Handler`,n=r=>{r&&r.target!==this||(s(),this.removeEventListener("animationend",n),delete this[i])};this[i]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const s=`__${e}Handler`;typeof this[s]=="function"&&this[s]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const s=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const s=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z={start:"top",end:"bottom"},R={start:"left",end:"right"},X=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),_t=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=je(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,s){if(this.__removeUpdatePositionEventListeners(),s&&(s.__overlay=null,X.unobserve(s),e&&(this.__addUpdatePositionEventListeners(),s.__overlay=this,X.observe(s))),e){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(i[n],10)})),this.setAttribute("dir",i.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(e);this.style.justifyContent=s?"flex-start":"flex-end";const i=this.__isRTL,n=this.__shouldAlignStartHorizontally(e,i),r=!i&&n||i&&!n;this.style.alignItems=r?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,z,this,s),h=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,R,this,n);Object.assign(this.style,l,h),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,s){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,i,n,this.__margins,r,this.noHorizontalOverlap,R)}__shouldAlignStartVertically(e){const s=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,s,i,this.__margins,n,this.noVerticalOverlap,z)}__shouldAlignStart(e,s,i,n,r,a,l){const h=i-e[a?l.end:l.start]-n[l.end],p=e[a?l.start:l.end]-n[l.start],d=r?h:p,m=d>(r?p:h)||d>s;return r===m}__adjustBottomProperty(e,s,i){let n;if(e===s.end){if(s.end===z.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(i>r&&this.__oldViewportHeight){const a=this.__oldViewportHeight-r;n=i-a}this.__oldViewportHeight=r}if(s.end===R.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(i>r&&this.__oldViewportWidth){const a=this.__oldViewportWidth-r;n=i-a}this.__oldViewportWidth=r}}return n}__calculatePositionInOneDimension(e,s,i,n,r,a){const l=a?n.start:n.end,h=a?n.end:n.start,p=parseFloat(r.style[l]||getComputedStyle(r)[l]),d=this.__adjustBottomProperty(l,n,p),u=s[a?n.start:n.end]-e[i===a?n.end:n.start],m=d?`${d}px`:`${p+u*(a?-1:1)}px`;return{[l]:m,[h]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ut=o=>class extends _t(ct(o)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(s=>{this.style.setProperty(`--vaadin-tooltip-offset-${s}`,e.getPropertyValue(`--vaadin-tooltip-offset-${s}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),s=this.$.overlay.getBoundingClientRect(),i=e.width/2-s.width/2;if(this.style.left){const n=s.left+i;n>0&&(this.style.left=`${n}px`)}if(this.style.right){const n=parseFloat(this.style.right)+i;n>0&&(this.style.right=`${n}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),s=this.$.overlay.getBoundingClientRect(),i=e.height/2-s.height/2;this.style.top=`${s.top+i}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pt=P`
  :host {
    z-index: 1100;
  }

  [part='overlay'] {
    max-width: 40ch;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */H("vaadin-tooltip-overlay",[Xe,pt],{moduleId:"vaadin-tooltip-overlay-styles"});class ft extends ut(De(ie(x))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return k`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}j(ft);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt=o=>class extends o{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,s){if(!s||e===void 0)return;const{classList:i}=s;if(this.__initialClasses||(this.__initialClasses=new Set(i)),Array.isArray(this.__previousClasses)){const r=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));r.length>0&&i.remove(...r)}const n=typeof e=="string"?e.split(" ").filter(Boolean):[];n.length>0&&i.add(...n),this.__previousClasses=n}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v=500;let ye=v,ve=v,ge=v;const g=new Set;let b=!1,C=null,w=null;class yt{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:ye}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:ve}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:ge}get isClosing(){return g.has(this.host)}open(t={immediate:!1}){const{immediate:e,hover:s,focus:i}=t,n=s&&this.hoverDelay>0,r=i&&this.focusDelay>0;!e&&(n||r)&&!this.__closeTimeout?this.__warmupTooltip(r):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),b&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){g.forEach(t=>{t._stateController.close(!0),g.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),b=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(b?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){w&&(clearTimeout(w),w=null)}__abortWarmUp(){C&&(clearTimeout(C),C=null)}__scheduleClose(){this._isOpened()&&(g.add(this.host),this.__closeTimeout=setTimeout(()=>{g.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){w=setTimeout(()=>{w=null,b=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;C=setTimeout(()=>{C=null,b=!0,this.__showTooltip()},e)}}const vt=o=>class extends mt(o){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(e,s)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){ye=e!=null&&e>=0?e:v}static setDefaultHideDelay(e){ge=e!=null&&e>=0?e:v}static setDefaultHoverDelay(e){ve=e!=null&&e>=0?e:v}constructor(){super(),this._uniqueId=`vaadin-tooltip-${We()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(s=>this.__onTargetVisibilityChange(s.isIntersecting))},{threshold:0}),this._stateController=new yt(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new qe(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,s,i,n){return n&&(e?s:i)}__computePosition(e,s){return e||s}__autoOpenedChanged(e,s){e?document.addEventListener("keydown",this.__onKeyDown,!0):s&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=Me.debounce(this.__setTargetByIdDebouncer,He,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const s=this.getRootNode().getElementById(e);s?this.target=s:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,s){s&&(s.removeEventListener("mouseenter",this.__onMouseEnter),s.removeEventListener("mouseleave",this.__onMouseLeave),s.removeEventListener("focusin",this.__onFocusin),s.removeEventListener("focusout",this.__onFocusout),s.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(s)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||Ke()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const s=this.__isTargetHidden;if(this.__isTargetHidden=!e,s&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,s){this._overlayElement&&(e||s)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,s){const i=r=>r&&r.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(i):e)?e:s}__effectiveAriaTargetChanged(e,s){s&&[s].flat().forEach(i=>{Ge(i,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(i=>{Ye(i,"aria-describedby",this._uniqueId)})}__generatorChanged(e,s,i){e&&((s!==this.__oldTextGenerator||i!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=s,this.__oldContext=i)}__updateSrLabelText(e,s){e&&(e.textContent=s)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gt extends vt(Oe(re(ce(x)))){static get is(){return"vaadin-tooltip"}static get template(){return k`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}j(gt);const bt=P`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;H("vaadin-horizontal-layout",bt,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ct extends re(ie(x)){static get template(){return k`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}j(Ct);function wt({currentTarget:o}){o.hasAttribute("disableOnClick")&&(o.disabled=!0)}window.Vaadin.Flow.button={initDisableOnClick:o=>{o.__hasDisableOnClickListener||(o.addEventListener("click",wt),o.__hasDisableOnClickListener=!0)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function rs(o){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(o);return}o.querySelector("template")&&console.warn(`WARNING: <template> inside <${o.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class T{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,O.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),O.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,s){return t instanceof T?t._cancelAsync():t=new T,t.setConfig(e,s),t}}let O=new Set;const Et=function(o){O.add(o)},Tt=function(){const o=!!O.size;return O.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ot=function(){let o,t;do o=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Tt();while(o||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let J=!1;function Pt(){if(ke&&!Se){if(!J){J=!0;const o=document.createElement("style");o.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(o)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function W(o,t,e,s,i){let n;i&&(n=typeof e=="object"&&e!==null,n&&(s=o.__dataTemp[t]));let r=s!==e&&(s===s||e===e);return n&&r&&(o.__dataTemp[t]=e),r}const q=ae(o=>{class t extends o{_shouldPropertyChange(s,i,n){return W(this,s,i,n,!0)}}return t}),as=ae(o=>{class t extends o{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(s,i,n){return W(this,s,i,n,this.mutableData)}}return t});q._mutablePropertyChange=W;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let B=null;function V(){return B}V.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:V,writable:!0}});const be=le(V),xt=q(be);function At(o,t){B=o,Object.setPrototypeOf(o,t.prototype),new t,B=null}const It=le(class{});function Ce(o,t){for(let e=0;e<t.length;e++){let s=t[e];if(!!o!=!!s.__hideTemplateChildren__)if(s.nodeType===Node.TEXT_NODE)o?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if(s.localName==="slot")if(o)s.__polymerReplaced__=document.createComment("hidden-slot"),c(c(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const i=s.__polymerReplaced__;i&&c(c(i).parentNode).replaceChild(s,i)}else s.style&&(o?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=o,s._showHideChildren&&s._showHideChildren(o)}}class f extends It{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let i=this.root.firstChild;i;i=i.nextSibling)e.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(t&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let s in this.__hostProps)this._setPendingProperty(s,this.__dataHost["_host_"+s]);for(let s in t)this._setPendingProperty(s,t[s])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,i=>{i.model=this,s(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,s)}}_showHideChildren(t){Ce(t,this.children)}_setUnmanagedPropertyToNode(t,e,s){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(t,e,s)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}f.prototype.__dataHost;f.prototype.__templatizeOptions;f.prototype._methodHost;f.prototype.__templatizeOwner;f.prototype.__hostProps;const Lt=q(f);function ee(o){let t=o.__dataHost;return t&&t._methodHost||t}function Dt(o,t,e){let s=e.mutableData?Lt:f;U.mixin&&(s=U.mixin(s));let i=class extends s{};return i.prototype.__templatizeOptions=e,i.prototype._bindTemplate(o),kt(i,o,t,e),i}function Mt(o,t,e,s){let i=e.forwardHostProp;if(i&&t.hasHostProps){const n=o.localName=="template";let r=t.templatizeTemplateClass;if(!r){if(n){let l=e.mutableData?xt:be;class h extends l{}r=t.templatizeTemplateClass=h}else{const l=o.constructor;class h extends l{}r=t.templatizeTemplateClass=h}let a=t.hostProps;for(let l in a)r.prototype._addPropertyEffect("_host_"+l,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Ht(l,i)}),r.prototype._createNotifyingProperty("_host_"+l);Ne&&s&&Ft(t,e,s)}if(o.__dataProto&&Object.assign(o.__data,o.__dataProto),n)At(o,r),o.__dataTemp={},o.__dataPending=null,o.__dataOld=null,o._enableProperties();else{Object.setPrototypeOf(o,r.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in o){const h=o[l];delete o[l],o.__data[l]=h}}}}function Ht(o,t){return function(s,i,n){t.call(s.__templatizeOwner,i.substring(6),n[i])}}function kt(o,t,e,s){let i=e.hostProps||{};for(let n in s.instanceProps){delete i[n];let r=s.notifyInstanceProp;r&&o.prototype._addPropertyEffect(n,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:St(n,r)})}if(s.forwardHostProp&&t.__dataHost)for(let n in i)e.hasHostProps||(e.hasHostProps=!0),o.prototype._addPropertyEffect(n,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Nt()})}function St(o,t){return function(s,i,n){t.call(s.__templatizeOwner,s,i,n[i])}}function Nt(){return function(t,e,s){t.__dataHost._setPendingPropertyOrPath("_host_"+e,s[e],!0,!0)}}function U(o,t,e){if(de&&!ee(o))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},o.__templatizeOwner)throw new Error("A <template> can only be templatized once");o.__templatizeOwner=t;let i=(t?t.constructor:f)._parseTemplate(o),n=i.templatizeInstanceClass;n||(n=Dt(o,i,e),i.templatizeInstanceClass=n);const r=ee(o);Mt(o,i,e,r);let a=class extends n{};return a.prototype._methodHost=r,a.prototype.__dataHost=o,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=i.hostProps,a=a,a}function Ft(o,t,e){const s=e.constructor._properties,{propertyEffects:i}=o,{instanceProps:n}=t;for(let r in i)if(!s[r]&&!(n&&n[r])){const a=i[r];for(let l=0;l<a.length;l++){const{part:h}=a[l].info;if(!(h.signature&&h.signature.static)){console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function ds(o,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=o)t=e.__dataHost;else return e;else t=c(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class we extends x{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=T.debounce(this.__renderDebouncer,ze,()=>this.__render()),Et(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=c(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!c(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Pt()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:c(t).querySelector("template");if(!e){let s=new MutationObserver(()=>{if(c(this).querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return s.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=c(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&c(this).previousSibling!==e[e.length-1])for(let i=0,n;i<e.length&&(n=e[i]);i++)c(t).insertBefore(n,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Ot()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Re||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class zt extends we{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(de&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const s=e._bindTemplate(this.__template,!0);s.runEffects=(i,n,r)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(a.changedProps,n)),i(n,r);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:i,changedProps:{}}),r)for(const l in n){const h=he(l);a.changedProps[h]=this.__dataHost[h]}else Object.assign(a.changedProps,n)},this.__instance=e._stampTemplate(this.__template,s),c(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,Ce(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class Rt extends we{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=U(this.__template,this,{mutableData:!0,forwardHostProp:function(e,s){this.__instance&&(this.if?this.__instance.forwardHostProp(e,s):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[he(e)]=!0))}})),this.__instance=new this.__ctor,c(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=c(t[0]).parentNode;if(e){e=c(e);for(let s=0,i;s<t.length&&(i=t[s]);s++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const te=Fe?zt:Rt;customElements.define(te.is,te);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(o,t)=>{var e,s;const i=o._$AN;if(i===void 0)return!1;for(const n of i)(s=(e=n)._$AO)===null||s===void 0||s.call(e,t,!1),E(n,t);return!0},M=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while((e==null?void 0:e.size)===0)},Ee=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),Vt(t)}};function $t(o){this._$AN!==void 0?(M(this),this._$AM=o,Ee(this)):this._$AM=o}function Bt(o,t=!1,e=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let n=e;n<s.length;n++)E(s[n],!1),M(s[n]);else s!=null&&(E(s,!1),M(s));else E(this,o)}const Vt=o=>{var t,e,s,i;o.type==ne.CHILD&&((t=(s=o)._$AP)!==null&&t!==void 0||(s._$AP=Bt),(e=(i=o)._$AQ)!==null&&e!==void 0||(i._$AQ=$t))};class Ut extends Pe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ee(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),e&&(E(this,t),M(this))}setValue(t){if(Qe(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class jt extends Ut{constructor(t){if(super(t),t.type!==ne.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(t,[e,s]){return this.updateContent(t,e,s),Ae}updateContent(t,e,s){const{parentNode:i,startNode:n}=t,r=s!=null,a=r?this.getNewNode(e,s):null,l=this.getOldNode(t);if(clearTimeout(this.__nodeRetryTimeout),r&&!a)this.__nodeRetryTimeout=setTimeout(()=>this.updateContent(t,e,s));else{if(l===a)return;l&&a?i.replaceChild(a,l):l?i.removeChild(l):a&&n.after(a)}}getNewNode(t,e){return window.Vaadin.Flow.clients[t].getByNodeId(e)}getOldNode(t){const{startNode:e,endNode:s}=t;if(e.nextSibling!==s)return e.nextSibling}disconnected(){clearTimeout(this.__nodeRetryTimeout)}}const Te=xe(jt);function Wt(o,t){return Te(o,t)}function qt(o,t,e){Ie(Le`${t.map(s=>Te(o,s))}`,e)}function Kt(o){const t=o.insertBefore;o.insertBefore=function(e,s){return s&&s.parentNode===this?t.call(this,e,s):t.call(this,e,null)}}window.Vaadin||(window.Vaadin={});var oe;(oe=window.Vaadin).FlowComponentHost||(oe.FlowComponentHost={patchVirtualContainer:Kt,getNode:Wt,setChildNodes:qt});class se extends x{static get template(){return k`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(t){this.firstChild&&typeof this.firstChild.click=="function"&&t.target===this&&(t.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=T.debounce(this._debouncer,$e,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const t=this._getRenderedComponent();this.firstChild?t?this.firstChild!==t?(this.replaceChild(t,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():t?(this.appendChild(t),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(t){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(t)}return null}onComponentRendered(){}_defineFocusTarget(){var t=this._getFirstFocusableDescendant(this.firstChild);t!==null&&t.setAttribute("focus-target","true")}_getFirstFocusableDescendant(t){if(this._isFocusable(t))return t;if(t.hasAttribute&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))||!t.children)return null;for(var e=0;e<t.children.length;e++){var s=this._getFirstFocusableDescendant(t.children[e]);if(s!==null)return s}return null}_isFocusable(t){return t.hasAttribute&&typeof t.hasAttribute=="function"&&(t.hasAttribute("disabled")||t.hasAttribute("hidden"))?!1:t.tabIndex===0}_onAnimationEnd(t){t.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(se.is,se);export{nt as A,T as D,at as F,mt as O,_t as P,Xe as a,ct as b,Xt as c,tt as d,as as e,Et as f,Ot as g,Pt as h,lt as i,ds as m,Zt as n,_e as o,rs as p,U as t};
