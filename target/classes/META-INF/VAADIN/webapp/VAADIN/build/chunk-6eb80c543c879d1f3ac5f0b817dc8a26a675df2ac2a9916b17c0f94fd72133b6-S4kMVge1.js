var jh=Object.defineProperty;var Gh=(a,i,e)=>i in a?jh(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var Kh=(a,i)=>()=>(i||a((i={exports:{}}).exports,i),i.exports);var et=(a,i,e)=>(Gh(a,typeof i!="symbol"?i+"":i,e),e);import{o as Kr,P as Os,a as Zn,b as Jn,O as Rs,p as Ui,D as Xt,A as Xh,F as Zh,c as Jh,d as Qh,e as Fs,h as zs,t as ec,f as tc,g as ic,m as rc,i as nc}from"./flow-component-renderer-Da5pnVPK.js";import{h as Me,D as Vt,P as Le,m as ti,i as oc,a as Nt,f as rr,b as We,e as sc,t as zt,E as wi,c as Jt,d as Si,g as $o,j as Ls,k as Bi,w as Ce,p as ac,l as lc,n as Qn,o as dc,q as Ir,r as hc,s as zn,u as cc,v as uc,x as fc,y as Yo,z as pc,A as mc,B as _c}from"./generated-flow-imports-D0Hlpdoc.js";import{i as Ie,g as Ae,f as Ne,T as Ze,s as gc,y as Ln,h as vc,Z as bc}from"./indexhtml-CFNQGfpv.js";import{a as Ns,b as Bs,g as Vs,I as yc,C as cr,V as xc,F as Hs,K as Ws,c as $s,D as Ys,d as Us,e as Hi,f as qs,h as js,j as eo,L as to,T as Xr,i as Fr,k as io,r as ro,l as ur,m as Cc,n as xi,S as wc,o as Sc,p as Ic,q as Ac,s as Uo,t as Gs,u as kc,v as Ec,w as Mc,x as Tc,A as Ks,y as Dc,z as qo,B as zr,E as Xs,G as Pc,H as Oc,J as Rc}from"./vaadin-vertical-layout-D5yLPdzZ.js";var Hp=Kh((_o,xt)=>{const Zr=Ie`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;Ae("vaadin-item",Zr,{moduleId:"lumo-item"});const Zs=Ie`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focused]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }
`;Ae("vaadin-combo-box-item",[Zr,Zs],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Js=Ie`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=Ie`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;Ae("",Jr,{moduleId:"lumo-menu-overlay-core"});const Fc=Ie`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Qs=[Kr,Jr,Fc];Ae("",Qs,{moduleId:"lumo-menu-overlay"});const ea=Ie`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,ta=Ie`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;Ae("vaadin-combo-box-overlay",[Kr,Jr,ea,Js,ta,Ie`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});const zc=Ie`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;Ae("vaadin-combo-box",[Ns,zc],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ia=a=>class extends a{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,n){e==="hidden"&&n!==null?this.index=void 0:super.attributeChangedCallback(e,t,n)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,n){n===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lc extends ia(Ze(Vt(Le))){static get template(){return Me`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}Ne(Lc);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=a=>class extends Os(a){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const t=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);t===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,t)}_setOverlayWidth(e,t){e&&t&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nc=Ie`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;Ae("vaadin-combo-box-overlay",[Zn,Nc],{moduleId:"vaadin-combo-box-overlay-styles"});class Bc extends ra(Jn(Vt(Ze(Le)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return Me`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}Ne(Bc);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ci(a,i){return a.split(".").reduce((e,t)=>e?e[t]:void 0,i)}/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const jo=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Vc=jo&&jo[1]>=8,Go=3,Hc={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const a=this._virtualCount;return Math.max(0,a-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(a){a=this._clamp(a,0,this._maxVirtualStart),this._virtualStartVal=a},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(a){a%=this._physicalCount,a<0&&(a=this._physicalCount+a),this._physicalStartVal=a},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(a){this._physicalCountVal=a},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let a=this._firstVisibleIndexVal;if(a==null){let i=this._physicalTop+this._scrollOffset;a=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=a}return a},get lastVisibleIndex(){let a=this._lastVisibleIndexVal;if(a==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(a=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=a}return a},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const a=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=a-this._scrollPosition;const e=i>=0;if(this._scrollPosition=a,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),ti)}},_getReusables(a){let i,e,t;const n=[],o=this._hiddenContentSize*this._ratio,h=this._virtualStart,s=this._virtualEnd,d=this._physicalCount;let m=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,l=this._scrollPosition,u=this._scrollBottom;for(a?(i=this._physicalStart,e=l-m):(i=this._physicalEnd,e=c-u);t=this._getPhysicalSizeIncrement(i),e-=t,!(n.length>=d||e<=o);)if(a){if(s+n.length+1>=this._virtualCount||m+t>=l-this._scrollOffset)break;n.push(i),m+=t,i=(i+1)%d}else{if(h-n.length<=0||m+this._physicalSize-t<=u)break;n.push(i),m-=t,i=i===0?d-1:i-1}return{indexes:n,physicalTop:m-this._scrollOffset}},_update(a,i){if(!(a&&a.length===0||this._physicalCount===0)){if(this._assignModels(a),this._updateMetrics(a),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(a){const e=this._clamp(this._physicalCount+a,Go,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const n=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-n)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),oc):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),ti))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const a=this._getReusables(!0);this._physicalTop=a.physicalTop,this._virtualStart+=a.indexes.length,this._physicalStart+=a.indexes.length,this._update(a.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Go))},_itemsChanged(a){a.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Nt))},_iterateItems(a,i){let e,t,n,o;if(arguments.length===2&&i){for(o=0;o<i.length;o++)if(e=i[o],t=this._computeVidx(e),(n=a.call(this,e,t))!=null)return n}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((n=a.call(this,e,t))!=null)return n;for(e=0;e<this._physicalStart;e++,t++)if((n=a.call(this,e,t))!=null)return n}},_computeVidx(a){return a>=this._physicalStart?this._virtualStart+(a-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+a},_positionItems(){this._adjustScrollPosition();let a=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${a}px`,0,this._physicalItems[i]),a+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(a){return this._physicalSizes[a]},_adjustScrollPosition(){const a=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(a!==0){this._physicalTop-=a;const i=this._scrollPosition;!Vc&&i>0&&this._resetScrollPosition(i-a)}},_resetScrollPosition(a){this.scrollTarget&&a>=0&&(this._scrollTop=a,this._scrollPosition=this._scrollTop)},_updateScrollerSize(a){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(a||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(a){if(typeof a!="number"||a<0||a>this.items.length-1||(rr(),this._physicalCount===0))return;a=this._clamp(a,0,this._virtualCount-1),(!this._isIndexRendered(a)||a>=this._maxVirtualStart)&&(this._virtualStart=a-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const n=this._hiddenContentSize;for(;e<a&&t<=n;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Nt)},_isIndexRendered(a){return a>=this._virtualStart&&a<=this._virtualEnd},_getPhysicalIndex(a){return(this._physicalStart+(a-this._virtualStart))%this._physicalCount},_clamp(a,i,e){return Math.min(e,Math.max(i,a))},_debounce(a,i,e){this._debouncers||(this._debouncers={}),this._debouncers[a]=We.debounce(this._debouncers[a],e,i.bind(this)),sc(this._debouncers[a])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wc=1e5,Mn=1e3;class na{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:n,elementsContainer:o,reorderElements:h}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=n,this.elementsContainer=o||n,this.reorderElements=h,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",s=>this.__onWheel(s)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<Mn?(t=i,this._vidxOffset=0):(t=Mn,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){const i=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),rr(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==i&&this.flush())}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(n=>{n.__virtualIndex>=i&&n.__virtualIndex<=e&&(this.__updateElement(n,n.__virtualIndex,!0),t.push(n))}),this.__afterElementsUpdated(t)}_updateMetrics(i){rr();let e=0,t=0;const n=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((h,s)=>{t+=this._physicalSizes[h],this._physicalSizes[h]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[h])),e+=this._physicalSizes[h],this._physicalAverageCount+=this._physicalSizes[h]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((o*n+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const n=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,h=parseFloat(e.borderBottomWidth)||0,s=parseFloat(e.borderTopWidth)||0;return t+n+o+h+s}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=We.debounce(this.__placeholderClearDebouncer,Nt,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const n=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(n.reduce((o,h)=>o+h,0)/n.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),rr(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const n=this.__getIndexScrollOffset(e);t!==void 0&&n!==void 0&&(this._scrollTop+=t-n)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),rr()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,Wc)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(n=>{n.style.position="absolute",t.appendChild(n),this.__resizeObserver.observe(n)}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,n)=>{const o=this._physicalItems[t];o.hidden=n>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=n+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,n){n.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=i>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=We.debounce(this.__fixInvalidItemPositioningDebouncer,zt.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=We.debounce(this.__scrollReorderDebouncer,zt.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,n=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!n){const o=e,h=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=h}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let e=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,i.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=We.debounce(this.__debouncerWheelAnimationFrame,Nt,()=>{this._wheelAnimationFrame=!1});const t=Math.abs(i.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,i.deltaX,e)?(i.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=We.debounce(this._debouncerIgnoreNewWheel,zt.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&t<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():t>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=t}_hasScrolledAncestor(i,e,t){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,e,t)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,e,t)}_canScroll(i,e,t){return t>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||t<0&&i.scrollTop>0||e>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||e<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),n=e.find(s=>s.contains(this.elementsContainer.getRootNode().activeElement)||s.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!n)return;const o=n.__virtualIndex-i,h=e.indexOf(n)-o;if(h>0)for(let s=0;s<h;s++)this.elementsContainer.appendChild(e[s]);else if(h<0)for(let s=e.length+h;s<e.length;s++)this.elementsContainer.insertBefore(e[s],e[0]);if(Bs){const{transform:s}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=s})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,n=Mn,o=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<n&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-n&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(na.prototype,Hc);class oa{constructor(i){this.__adapter=new na(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bt=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sa=a=>class extends a{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,n)=>t+n)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${Vs()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling()}requestContentUpdate(){this.opened&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let n=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),n=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(n=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,n));const o=[...this.children].find(m=>!m.hidden&&m.index===this.__virtualizer.lastVisibleIndex);if(!o||e!==o.index)return;const h=o.getBoundingClientRect(),s=this.getBoundingClientRect(),d=h.bottom-s.bottom+this._viewportTotalPaddingBottom;d>0&&(this.scrollTop+=d)}_isItemSelected(e,t,n){return e instanceof Bt?!1:n&&e!==void 0&&t!==void 0?Ci(n,e)===Ci(n,t):e===t}__initVirtualizer(){this.__virtualizer=new oa({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}__itemsChanged(e){e&&this.__virtualizer&&(this.__setVirtualizerItems(e),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&(this.__virtualizer||(this.__initVirtualizer(),this.items&&this.__setVirtualizerItems(this.items)),this.requestContentUpdate())}__setVirtualizerItems(e){this.__virtualizer.size=e.length,this.__virtualizer.flush()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}_updateElement(e,t){const n=this.items[t],o=this.focusedIndex,h=this._isItemSelected(n,this.selectedItem,this.itemIdPath);e.setProperties({item:n,index:t,label:this.getItemLabel(n),selected:h,renderer:this.renderer,focused:!this.loading&&o===t}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",t!==void 0?"option":!1),e.setAttribute("aria-selected",h.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),n instanceof Bt&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,n=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||n&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $c extends sa(Le){static get is(){return"vaadin-combo-box-scroller"}static get template(){return Me`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}Ne($c);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yc=a=>class extends yc(a){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aa=a=>class extends a{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Bt},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const t=e.detail.index,n=e.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(t,o,n)&&t!==void 0){const h=this._getPageForIndex(t);this._shouldLoadPage(h)&&this._loadPage(h)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,n){return n!==0&&e>=n-t&&e<=n+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return t!==void 0?t instanceof Bt:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const t={page:e,pageSize:this.pageSize,filter:this.filter},n=(o,h)=>{if(this._pendingRequests[e]!==n)return;const s=this.filteredItems?[...this.filteredItems]:[];s.splice(t.page*t.pageSize,o.length,...o),this.filteredItems=s,!this.opened&&!this._isInputFocused()&&this._commitValue(),h!==void 0&&(this.size=h),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=n,this.loading=!0,this.dataProvider(t,n)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let n=0;n<e;n++)t[n]=t[n]!==void 0?t[n]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&t!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const n=this.__getItemIndexByValue(this.filteredItems,t);(n<0||!this._getItemLabel(this.filteredItems[n]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([n,o])=>{parseInt(n)>=t&&o([],e)})}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Uc{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ko(a){return a!=null}function Xo(a,i){return a.findIndex(e=>e instanceof Bt?!1:i(e))}const la=a=>class extends Rs(cr(xc(Hs(Ws($s(Ys(a))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Ui(this),this.addController(new Uc(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,n){super._propertiesChanged(e,t,n),t.filter!==void 0&&this._filterChanged(t.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("opened-changed",t=>{this._overlayOpened=t.detail.value}),this._overlayElement=e}_initScroller(e){const t=`${this._tagNamePrefix}-scroller`,n=this._overlayElement;n.renderer=h=>{h.firstChild||h.appendChild(document.createElement(t))},n.requestContentUpdate();const o=n.querySelector(t);o.owner=e||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(e,t,n,o,h,s,d,m,c){e&&(n&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:n?t:[],opened:n,loading:o,selectedItem:h,itemIdPath:s,focusedIndex:d,renderer:m,theme:c}))}_openedOrItemsChanged(e,t,n){this._overlayOpened=!!(e&&(n||t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){t!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&Us(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const n=this._getItemElements().find(o=>o.index===e);n?t.setAttribute("aria-activedescendant",n.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(t===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!Hi&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const n=this._nativeInput;n&&(n.setAttribute("aria-expanded",!!e),e?n.setAttribute("aria-controls",this._scroller.id):n.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?Ci(this.itemLabelPath,e):void 0;return t==null&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?Ci(this.itemValuePath,e):void 0;return t===void 0&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this._hasValidInputValue()){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_hasValidInputValue(){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;return this.allowCustomValue||!e}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("click",()=>{Hi&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const n=this._inputElementValue;this._lastCustomValue=n;const o=new CustomEvent("custom-value-set",{detail:n,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=n)}else!this.allowCustomValue&&!this.opened&&t?this.value=this._getItemValue(t):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const t=this._inputElementValue,n={};this.filter===t?this._filterChanged(this.filter):n.filter=t,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(n.opened=!0),this.setProperties(n)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){e===""&&t===void 0||(Ko(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e,t){this._setDropdownItems(e);const n=t?t[this._focusedIndex]:null,o=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=e[o]);const h=this.__getItemIndexByValue(e,this._getItemValue(n));h>-1?this._focusedIndex=h:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,t){return e&&e.filter(o=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),n=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&n===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){this._dropdownItems=e}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return!e||!Ko(t)?-1:Xo(e,n=>this._getItemValue(n)===t)}__getItemIndexByLabel(e,t){return!e||!t?-1:Xo(e,n=>this._getItemLabel(n).toString().toLowerCase()===t.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Bt)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-combo-box",qs,{moduleId:"vaadin-combo-box-styles"});class qc extends aa(la(Yc(js(Ze(wi(Le)))))){static get is(){return"vaadin-combo-box"}static get template(){return Me`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new eo(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new to(this.inputElement,this._labelController)),this._tooltipController=new Xr(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(i){i.stopPropagation(),super._onClearButtonClick(i)}_onHostClick(i){const e=i.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(i)}}Ne(qc);(function(){const a=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:i=>a(function(e){if(e.$connector)return;e.$connector={};const t={};let n={},o="";const h=new window.Vaadin.ComboBoxPlaceholder,s=(()=>{let l="",u=!1;return{needsDataCommunicatorReset:()=>u=!0,getLastFilterSentToServer:()=>l,requestData:(C,x,w)=>{const A=x-C,I=w.filter;e.$server.setRequestedRange(C,A,I),l=I,u&&(e.$server.resetDataCommunicator(),u=!1)}}})(),d=(l=Object.keys(t))=>{l.forEach(u=>{t[u]([],e.size),delete t[u];const p=parseInt(u)*e.pageSize,_=p+e.pageSize,y=Math.min(_,e.filteredItems.length);for(let C=p;C<y;C++)e.filteredItems[C]=h})};e.dataProvider=function(l,u){if(l.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(n[0]){c(n[0],l.filter,u);return}else l.filter="";if(l.filter!==o){n={},o=l.filter,this._filterDebouncer=Xt.debounce(this._filterDebouncer,Jt.after(500),()=>{if(s.getLastFilterSentToServer()===l.filter&&s.needsDataCommunicatorReset(),l.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+l.filter+"'");this._filterDebouncer=void 0,d(),e.dataProvider(l,u)});return}if(this._filterDebouncer){t[l.page]=u;return}if(n[l.page])m(l.page,u);else{t[l.page]=u;const _=Math.max(l.pageSize*2,500),y=Object.keys(t).map(w=>parseInt(w)),C=Math.min(...y),x=Math.max(...y);if(y.length*l.pageSize>_)l.page===C?d([String(x)]):d([String(C)]),e.dataProvider(l,u);else if(x-C+1!==y.length)d();else{const w=l.pageSize*C,A=l.pageSize*(x+1);s.requestData(w,A,l)}}},e.$connector.clear=a((l,u)=>{const p=Math.floor(l/e.pageSize),_=Math.ceil(u/e.pageSize);for(let y=p;y<p+_;y++)delete n[y]}),e.$connector.filter=a(function(l,u){return u=u?u.toString().toLowerCase():"",e._getItemLabel(l,e.itemLabelPath).toString().toLowerCase().indexOf(u)>-1}),e.$connector.set=a(function(l,u,p){if(p!=s.getLastFilterSentToServer())return;if(l%e.pageSize!=0)throw"Got new data to index "+l+" which is not aligned with the page size of "+e.pageSize;if(l===0&&u.length===0&&t[0]){n[0]=[];return}const _=l/e.pageSize,y=Math.ceil(u.length/e.pageSize);for(let C=0;C<y;C++){let x=_+C,w=u.slice(C*e.pageSize,(C+1)*e.pageSize);n[x]=w}}),e.$connector.updateData=a(function(l){const u=new Map(l.map(p=>[p.key,p]));e.filteredItems=e.filteredItems.map(p=>u.get(p.key)||p)}),e.$connector.updateSize=a(function(l){e._clientSideFilter||(e.size=l)}),e.$connector.reset=a(function(){d(),n={},e.clearCache()}),e.$connector.confirm=a(function(l,u){if(u!=s.getLastFilterSentToServer())return;let p=Object.getOwnPropertyNames(t);for(let _=0;_<p.length;_++){let y=p[_];n[y]&&m(y,t[y])}e.$server.confirmUpdate(l)});const m=a(function(l,u){let p=n[l];e._clientSideFilter?c(p,e.filter,u):(delete n[l],u(p,e.size))}),c=a(function(l,u,p){let _=l;u&&(_=l.filter(y=>e.$connector.filter(y,u))),p(_,_.length)});e.addEventListener("custom-value-set",a(l=>l.preventDefault()))})(i)}})();window.Vaadin.ComboBoxPlaceholder=Bt;Ae("vaadin-app-layout",Ie`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function da(){if(Fr){const a=window.innerHeight,e=window.innerWidth>a,t=document.documentElement.clientHeight;e&&t>a?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${t-a}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}da();window.addEventListener("resize",da);const ha=document.createElement("template");ha.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(ha.content);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jc extends wi(Ze(cr(Le))){static get template(){return Me`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 16em);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: var(--_vaadin-app-layout-drawer-width);
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
            --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 20em);
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" on-slotchange="_updateDrawerSize"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new Xh(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new Zh(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),Jh(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(i){["navbar","drawer"].includes(i)||this.set("primarySection","navbar")}__drawerOpenedChanged(i,e){this.overlay&&(i?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(i){i.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const i=this.querySelector("vaadin-drawer-toggle");i&&i.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const i=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;i===0?(e.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(e.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width")),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),n=this.$.navbarBottom.getBoundingClientRect(),h=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${n.height}px`),this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${h.width}px`)}_updateOverlayMode(){const i=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&i&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(i),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const i=this.$.drawer;this.overlay?(i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label",this.i18n.drawer)):(i.removeAttribute("role"),i.removeAttribute("aria-modal"),i.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(i=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){i();return}this.$.drawer.addEventListener("transitionend",i,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const i=this.querySelector("vaadin-drawer-toggle");i&&(i.focus(),i.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(i){i.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(i,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),i&&window.addEventListener(i,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(i){i.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(i){return(getComputedStyle(this).getPropertyValue(i)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const i=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),i&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Qh(this,()=>{this.removeAttribute("no-anim")})}}Ne(jc);Ae("vaadin-form-layout",Ie`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ar=new ResizeObserver(a=>{setTimeout(()=>{a.forEach(i=>{i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect)})})}),no=Si(a=>class extends a{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Ar.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,Ar.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),Ar.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&Ar.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gc extends no(wi(Ze(Le))){static get template(){return Me`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const i={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(t=>{t.type==="attributes"&&(t.attributeName==="colspan"||t.attributeName==="hidden")&&this._updateLayout()})}),[...this.children].forEach(e=>{this.__mutationObserver.observe(e,i)}),this.__childObserver=new MutationObserver(e=>{const t=[],n=[];e.forEach(o=>{t.push(...this._getObservableNodes(o.addedNodes)),n.push(...this._getObservableNodes(o.removedNodes))}),t.forEach(o=>{this.__mutationObserver.observe(o,i)}),(t.length>0||n.length>0)&&this._updateLayout()}),this.__childObserver.observe(this,{childList:!0})}_getObservableNodes(i){const e=["template","style","dom-repeat","dom-if"];return Array.from(i).filter(t=>t.nodeType===Node.ELEMENT_NODE&&e.indexOf(t.localName.toLowerCase())===-1)}_naturalNumberOrOne(i){return typeof i=="number"&&i>=1&&i<1/0?Math.floor(i):1}_isValidCSSLength(i){return i==="inherit"||i==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${i}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(i,e){try{if(!Array.isArray(i))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(i.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');i.forEach(t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(t.minWidth!==void 0&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(t.labelsPosition!==void 0&&["aside","top"].indexOf(t.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(t){e&&e!==i?(console.warn(`${t.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${t.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(i){i.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let i;const e="background-position";this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty(e,t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(i=t)}),this.$.layout.style.removeProperty(e),i&&(this._columnCount=i.columns,this._labelsOnTop=i.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){const i=getComputedStyle(this),e=i.getPropertyValue("--vaadin-form-layout-column-spacing"),t=i.direction,n=`margin-${t==="ltr"?"left":"right"}`,o=`margin-${t==="ltr"?"right":"left"}`,h=this.offsetWidth;let s=0;Array.from(this.children).filter(d=>d.localName==="br"||getComputedStyle(d).display!=="none").forEach((d,m,c)=>{if(d.localName==="br"){s=0;return}let l;l=this._naturalNumberOrOne(parseFloat(d.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const u=l/this._columnCount;d.style.width=`calc(${u*99.9}% - ${1-u} * ${e})`,s+l>this._columnCount&&(s=0),s===0?d.style.setProperty(n,"0px"):d.style.removeProperty(n);const p=m+1,_=p<c.length&&c[p].localName==="br";if(s+l===this._columnCount)d.style.setProperty(o,"0px");else if(_){const y=(this._columnCount-s-l)/this._columnCount;d.style.setProperty(o,`calc(${y*h}px + ${y} * ${e})`)}else d.style.removeProperty(o);s=(s+l)%this._columnCount,d.localName==="vaadin-form-item"&&(this._labelsOnTop?d.getAttribute("label-position")!=="top"&&(d.__useLayoutLabelPosition=!0,d.setAttribute("label-position","top")):d.__useLayoutLabelPosition&&(delete d.__useLayoutLabelPosition,d.removeAttribute("label-position")))})}_onResize(){this._selectResponsiveStep()}}Ne(Gc);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Wi(a){return a.__cells||Array.from(a.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function lt(a,i){[...a.children].forEach(i)}function $i(a,i){Wi(a).forEach(i),a.__detailsCell&&i(a.__detailsCell)}function ca(a,i,e){let t=1;a.forEach(n=>{t%10===0&&(t+=1),n._order=e+t*i,t+=1})}function Qr(a,i,e){switch(typeof e){case"boolean":a.toggleAttribute(i,e);break;case"string":a.setAttribute(i,e);break;default:a.removeAttribute(i);break}}function ii(a,i,e){i||i===""?io(a,"part",e):ro(a,"part",e)}function Zt(a,i,e){a.forEach(t=>{ii(t,e,i)})}function sr(a,i){const e=Wi(a);Object.entries(i).forEach(([t,n])=>{Qr(a,t,n);const o=`${t}-row`;ii(a,n,o),Zt(e,`${o}-cell`,n)})}function Zo(a,i){const e=Wi(a);Object.entries(i).forEach(([t,n])=>{const o=a.getAttribute(t);if(Qr(a,t,n),o){const h=`${t}-${o}-row`;ii(a,!1,h),Zt(e,`${h}-cell`,!1)}if(n){const h=`${t}-${n}-row`;ii(a,n,h),Zt(e,`${h}-cell`,n)}})}function gi(a,i,e,t,n){Qr(a,i,e),n&&ii(a,!1,n),ii(a,e,t||`${i}-cell`)}class Qt{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=We.debounce(this.__initialCallDebouncer,ti,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const e=Qt.getColumns(this.__host),t=e.filter(s=>!this.__currentColumns.includes(s)),n=this.__currentColumns.filter(s=>!e.includes(s)),o=this.__currentColumns.some((s,d)=>s!==e[d]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(s=>s instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||n.length||o)&&this.__callback(t,n)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||Qt.__isColumnElement;return[...i.children].forEach(n=>{t(n)?e.push(n):n instanceof HTMLSlotElement&&[...n.assignedElements({flatten:!0})].filter(o=>t(o)).forEach(o=>e.push(o))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ua=a=>class extends a{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Ui(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{gi(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||gi(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{gi(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||gi(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(n=>{n.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,n=t?`reorder-${t}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(h=>{gi(h,"reorder-status",e,o,n)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(n=>{if(n){const o=n.querySelector('[part~="resize-handle"]');if(o&&n.removeChild(o),e){const h=document.createElement("div");h.setAttribute("part","resize-handle"),n.appendChild(h)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(n=>{n._content.style.textAlign=e,getComputedStyle(n._content).textAlign!==e&&(n._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=We.debounce(this._grid._debouncerHiddenChanged,Nt,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,n){const o=n&&n.item&&!t.parentElement.hidden;if(!(o||e===this._headerRenderer||e===this._footerRenderer))return;const s=[t._content,this];o&&s.push(n),e.apply(this,s)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(n=>{if(!n.parentElement)return;const o=this._grid.__getRowModel(n.parentElement);e&&(n._renderer!==e&&this._clearCellContent(n),n._renderer=e,this._runRenderer(e,n,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...n){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,n,o){[{cell:e,partName:n},{cell:t,partName:o}].forEach(({cell:h,partName:s})=>{if(h){const d=h.__customParts||[];h.part.remove(...d),h.__customParts=s?s.trim().split(" "):[],h.part.add(...h.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...n){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:n}){this.path&&this.__setTextContent(e,Ci(this.path,n))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},Kc=a=>class extends ua(Vt(a)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xc=a=>class extends ua(a){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(i,e){i==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(i)&&this._updateFlexAndWidth(),i==="frozen"&&!this.frozen&&(this.frozen=e),i==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),i==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),i==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(i,e){if(e){const t=e.slice(0);if(!i){t.forEach(s=>{s._order=0});return}const n=/(0+)$/u.exec(i).pop().length,o=~~(Math.log(e.length)/Math.LN10)+1,h=10**(n-o);t[0]&&t[0]._order&&t.sort((s,d)=>s._order-d._order),ca(t,h,i)}}_groupReorderStatusChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t._reorderStatus=i})}_groupResizableChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t.resizable=i})}_updateVisibleChildColumns(i){this._visibleChildColumns=Array.prototype.filter.call(i,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const i=this._visibleChildColumns.reduce((e,t)=>(e+=` + ${(t.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${i})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(i,e)=>i+e.flexGrow,0))}}__scheduleAutoFreezeWarning(i,e){if(this._grid){const t=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),n=i[0][e]||i[0].hasAttribute(t);i.every(h=>(h[e]||h.hasAttribute(t))===n)||(this._grid.__autoFreezeWarningDebouncer=We.debounce(this._grid.__autoFreezeWarningDebouncer,Nt,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(t=>{t.frozen=i}))}_groupFrozenToEndChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(t=>{t.frozenToEnd=i}))}_groupHiddenChanged(i){(i||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const i=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(i||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(i=>{i.hidden=this.hidden})}_colSpanChanged(i,e,t){e&&(e.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(e,i)),t&&(t.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(t,i))}_getChildColumns(i){return Qt.getColumns(i)}_addNodeObserver(){this._observer=new Qt(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zc extends Xc(Le){static get is(){return"vaadin-grid-column-group"}}Ne(Zc);Ae("vaadin-checkbox",Ie`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});Ae("vaadin-grid",Ie`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fa extends Kc(Le){static get is(){return"vaadin-grid-column"}}Ne(fa);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jc=a=>class extends a{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(n=>n.headerRenderer||n.path||n.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(n=>n.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const n=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",n&&n.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){lt(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){lt(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),$i(e,n=>{n.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){$i(e,n=>{n!==t&&n.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pa=a=>{if(!a.parentNode)return!1;const e=Array.from(a.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(t=>{const n=t.getAttribute("part");return!(n&&n.includes("body-cell"))}).includes(a);return!a.disabled&&e&&a.offsetParent&&getComputedStyle(a).visibility!=="hidden"},Qc=a=>class extends a{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,n=t?t.item:null;n&&(this.activeItem=this._itemsEqual(this.activeItem,n)?null:n)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),n=t[t.indexOf(this.$.table)-3];if(!n||n.getAttribute("part").indexOf("details-cell")>-1)return;const o=n._content,h=this.getRootNode().activeElement;!o.contains(h)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(n.parentElement)}}))}_isFocusable(e){return pa(e)}};function Li(a,i){return a.split(".").reduce((e,t)=>e[t],i)}function Jo(a,i,e){if(e.length===0)return!1;let t=!0;return a.forEach(({path:n})=>{if(!n||n.indexOf(".")===-1)return;const o=n.replace(/\.[^.]*$/u,"");Li(o,e[0])===void 0&&(console.warn(`Path "${n}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function Lr(a){return[void 0,null].indexOf(a)>=0?"":isNaN(a)?a.toString():a}function Qo(a,i){return a=Lr(a),i=Lr(i),a<i?-1:a>i?1:0}function eu(a,i){return a.sort((e,t)=>i.map(n=>n.direction==="asc"?Qo(Li(n.path,e),Li(n.path,t)):n.direction==="desc"?Qo(Li(n.path,t),Li(n.path,e)):0).reduce((n,o)=>n!==0?n:o,0))}function tu(a,i){return a.filter(e=>i.every(t=>{const n=Lr(Li(t.path,e)),o=Lr(t.value).toString().toLowerCase();return n.toString().toLowerCase().includes(o)}))}const iu=a=>(i,e)=>{let t=a?[...a]:[];i.filters&&Jo(i.filters,"filtering",t)&&(t=tu(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&Jo(i.sortOrders,"sorting",t)&&(t=eu(t,i.sortOrders));const n=Math.min(t.length,i.pageSize),o=i.page*n,h=o+n,s=t.slice(o,h);e(s,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ru=a=>class extends a{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const t=iu(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}__dataProviderOrItemsChanged(e,t,n){n&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nu=a=>class extends a{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),ur(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Hi||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),n=t[t.indexOf(this.$.header)-2];if(!n||!n._content||n._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const n=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!n||!n.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=n._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(n),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const n=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,n)&&this._isSwappableByPosition(n,e.detail.x)){const o=this._columnTree.findIndex(c=>c.includes(n)),h=this._getColumnsInOrder(o),s=h.indexOf(this._draggedColumn),d=h.indexOf(n),m=s<d?1:-1;for(let c=s;c!==d;c+=m)this._swapColumnOrders(this._draggedColumn,h[c+m])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,n)=>t._order-n._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const n=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(n)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const n=this._reorderGhost.getBoundingClientRect(),o=e-n.width/2,h=t-n.height/2,s=parseInt(this._reorderGhost._left||0),d=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=s-(n.left-o),this._reorderGhost._top=d-(n.top-h),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const n=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{t.style[o]=n[o]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),ca(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){lt(e.parentNode,n=>{/column/u.test(n.localName)&&this._isSwapAllowed(n,e)&&(n._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const n=e!==t,o=e.parentElement===t.parentElement,h=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return n&&o&&h}}_isSwappableByPosition(e,t){const n=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(s=>e.contains(s._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),h=n.getBoundingClientRect();return h.left>o.left?t>h.right-o.width:t<h.left+o.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let n=e._column;for(;n.parentElement!==t.parentElement&&n!==this;)n=n.parentElement;return n.parentElement===t.parentElement?n:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ou=a=>class extends a{ready(){super.ready();const e=this.$.scroller;ur(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let o=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((l,u)=>l._order-u._order).filter(l=>!l.hidden).pop();const h=this.__isRTL,s=e.detail.x,d=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),m=d.find(l=>l._column===o);if(m.offsetWidth){const l=getComputedStyle(m._content),u=10+parseInt(l.paddingLeft)+parseInt(l.paddingRight)+parseInt(l.borderLeftWidth)+parseInt(l.borderRightWidth)+parseInt(l.marginLeft)+parseInt(l.marginRight);let p;const _=m.offsetWidth,y=m.getBoundingClientRect();m.hasAttribute("frozen-to-end")?p=_+(h?s-y.right:y.left-s):p=_+(h?y.left-s:s-y.right),o.width=`${Math.max(u,p)}px`,o.flexGrow=0}d.sort((l,u)=>l._column._order-u._column._order).forEach((l,u,p)=>{u<p.indexOf(m)&&(l._column.width=`${l.offsetWidth}px`,l._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const l=c.getBoundingClientRect(),u=s-(h?l.right:l.left);(h&&u<=0||!h&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Nr(a,i,e=0){let t=i;for(const n of a.subCaches){const o=n.parentCacheIndex;if(t<=o)break;if(t<=o+n.flatSize)return Nr(n,t-o-1,e+1);t-=n.flatSize}return{cache:a,item:a.items[t],index:t,page:Math.floor(t/a.pageSize),level:e}}function ma({getItemId:a},i,e,t=0,n=0){for(let o=0;o<i.items.length;o++){const h=i.items[o];if(h&&a(h)===a(e))return{cache:i,level:t,item:h,index:o,page:Math.floor(o/i.pageSize),subCache:i.getSubCache(o),flatIndex:n+i.getFlatIndex(o)}}for(const o of i.subCaches){const h=n+i.getFlatIndex(o.parentCacheIndex),s=ma({getItemId:a},o,e,t+1,h+1);if(s)return s}}function _a(a,[i,...e],t=0){i===1/0&&(i=a.size-1);const n=a.getFlatIndex(i),o=a.getSubCache(i);return o&&o.flatSize>0&&e.length?_a(o,e,t+n+1):t+n}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oo{constructor(i,e,t,n,o){et(this,"context");et(this,"size",0);et(this,"pageSize");et(this,"items",[]);et(this,"pendingRequests",{});et(this,"__subCacheByIndex",{});et(this,"__flatSize",0);this.context=i,this.pageSize=e,this.size=t||0,this.parentCache=n,this.parentCacheIndex=o,this.__flatSize=t||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0}setPage(i,e){const t=i*this.pageSize;e.forEach((n,o)=>{this.items[t+o]=n})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const e=new oo(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,n)=>{const o=n.parentCacheIndex;return e>o?t+n.flatSize:t},e)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=Nr(this,i);return e}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:t}=Nr(this,i);return{cache:e,scaledIndex:t}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const e=this.createSubCache(i);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class su extends EventTarget{constructor(e,{size:t,pageSize:n,isExpanded:o,getItemId:h,dataProvider:s,dataProviderParams:d}){super();et(this,"host");et(this,"dataProvider");et(this,"dataProviderParams");et(this,"size");et(this,"pageSize");et(this,"isExpanded");et(this,"getItemId");et(this,"rootCache");this.host=e,this.pageSize=n,this.getItemId=h,this.isExpanded=o,this.dataProvider=s,this.dataProviderParams=d,this.rootCache=this.__createRootCache(t)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return Nr(this.rootCache,e)}getItemContext(e){return ma({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return _a(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:t,page:n,item:o}=this.getFlatIndexContext(e);o||this.__loadCachePage(t,n)}ensureFlatIndexHierarchy(e){const{cache:t,item:n,index:o}=this.getFlatIndexContext(e);if(n&&this.isExpanded(n)&&!t.getSubCache(o)){const h=t.createSubCache(o);this.__loadCachePage(h,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new oo(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,t){if(!this.dataProvider||e.pendingRequests[t])return;let n={page:t,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(n={...n,...this.dataProviderParams()});const o=(h,s)=>{s!==void 0?e.size=s:n.parentItem&&(e.size=h.length),e.setPage(t,h),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[t],this.dispatchEvent(new CustomEvent("page-loaded"))};e.pendingRequests[t]=o,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(n,o)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const au=a=>class extends a{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new su(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){if(e>=this._flatSize)return;t.index=e;const{item:n}=this._dataProviderController.getFlatIndexContext(e);n?(this.__updateLoading(t,!1),this._updateItem(t,n),this._isExpanded(n)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const n=Wi(e);Qr(e,"loading",t),Zt(n,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?Ci(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const n=t||[],o=new Set;return n.forEach(h=>{o.add(this.getItemId(h))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e=0){const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=We.debounce(this._debouncerApplyCachedData,zt.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(e=>{const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);t&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=We.debounce(this.__clearCacheDebouncer,ti,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=We.debounce(this._debouncerCheckSize,zt.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let n=-1;return t.forEach((o,h)=>{this._itemsEqual(o,e)&&(n=h)}),n}scrollToIndex(...e){let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const er={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Kt={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},lu=!("draggable"in document.createElement("div")),du=a=>class extends a{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const s=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(s)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=s})}const n=t.getBoundingClientRect();lu?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-n.left,e.clientY-n.top);let o=[t];this._isSelected(t._item)&&(o=this.__getViewportRows().filter(s=>this._isSelected(s._item)).filter(s=>!this.dragFilter||this.dragFilter(this.__getRowModel(s)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),sr(t,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-n.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-n.top+10}px`),requestAnimationFrame(()=>{sr(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const h=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(s=>s._item),setDragData:(s,d)=>e.dataTransfer.setData(s,d),setDraggedItemsCount:s=>t.setAttribute("dragstart",s)}});h.originalEvent=e,this.dispatchEvent(h)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(n=>n.localName==="tr");if(!this._flatSize||this.dropMode===er.ON_GRID)this._dropLocation=Kt.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===er.BETWEEN||this.dropMode===er.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(n=>!n.hidden).pop(),this._dropLocation=Kt.BELOW;else return}else{const n=t.getBoundingClientRect();if(this._dropLocation=Kt.ON_TOP,this.dropMode===er.BETWEEN){const o=e.clientY-n.top<n.bottom-e.clientY;this._dropLocation=o?Kt.ABOVE:Kt.BELOW}else this.dropMode===er.ON_TOP_OR_BETWEEN&&(e.clientY-n.top<n.height/3?this._dropLocation=Kt.ABOVE:e.clientY-n.top>n.height/3*2&&(this._dropLocation=Kt.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===Kt.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&Zo(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,n=this.$.footer.getBoundingClientRect().top,o=t-e+this.__dndAutoScrollThreshold,h=e-n+this.__dndAutoScrollThreshold;let s=0;if(h>0?s=h*2:o>0&&(s=-o*2),s){const d=this.$.table.scrollTop;if(this.$.table.scrollTop+=s,d!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(n=>{const o=n.getBoundingClientRect();return o.bottom>e&&o.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),lt(this.$.items,e=>{Zo(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const n=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});n.originalEvent=e,this.dispatchEvent(n)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(n=>!n.hidden&&n.getAttribute("part").indexOf("details-cell")===-1).sort((n,o)=>n._column._order>o._column._order?1:-1).map(n=>n._content.textContent.trim()).filter(n=>n).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){lt(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const n=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||n||this.dragFilter&&!this.dragFilter(t),h=!this.dropMode||n||this.dropFilter&&!this.dropFilter(t);$i(e,s=>{o?s._content.removeAttribute("draggable"):s._content.setAttribute("draggable",!0)}),sr(e,{"drag-disabled":!!o,"drop-disabled":!!h})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ga(a,i){if(!a||!i||a.length!==i.length)return!1;for(let e=0,t=a.length;e<t;e++)if(a[e]instanceof Array&&i[e]instanceof Array){if(!ga(a[e],i[e]))return!1}else if(a[e]!==i[e])return!1;return!0}const hu=a=>class extends a{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return Qt.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,n)=>t.concat(n),[])}_getColumnTree(){const e=Qt.getColumns(this),t=[e];let n=e;for(;this._hasColumnGroups(n);)n=this._flattenColumnGroups(n),t.push(n);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=We.debounce(this.__updateColumnTreeDebouncer,ti,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();ga(e,this._columnTree)||(e.forEach(t=>{t.forEach(n=>{n.performUpdate&&n.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new Qt(this,(e,t)=>{const n=t.flatMap(h=>h._allCells),o=h=>n.filter(s=>s&&s._content.contains(h)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=We.debounce(this._debouncerCheckImports,zt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,n)=>t._column._order-n._column._order).forEach((t,n,o)=>{gi(t,"first-column",n===0),gi(t,"last-column",n===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cu=a=>class extends a{getEventContext(e){const t={},n=e.__composedPath||e.composedPath(),o=n[n.indexOf(this.$.table)-3];return o&&(t.section=["body","header","footer","details"].find(h=>o.getAttribute("part").indexOf(h)>-1),o._column&&(t.column=o._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(o.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uu=a=>class extends a{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fu=a=>class extends a{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const n=this[t];if(e){const o=n&&n.parentElement;this.__isCell(n)?this[t]=o:this.__isCell(o)&&(this[t]=o.parentElement)}else if(!e&&this.__isRow(n)){const o=n.firstElementChild;this[t]=o._focusButton||o}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&ro(t,"part","focused-cell"),e&&io(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let n=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(n){this.__isCell(n)&&(o=n,n=n.parentElement);const h=[...n.children].indexOf(o);this._itemsFocusable=this.__getFocusable(t,t.children[h])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let n;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":n="Navigation";break;case"Enter":case"Escape":case"F2":n="Interaction";break;case"Tab":n="Tab";break;case" ":n="Space";break}this._detectInteracting(e),this.interacting&&n!=="Interaction"&&(n=void 0),n&&this[`_on${n}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find(n=>n.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!!(t&&Ci(this.itemHasChildrenPath,t)&&!this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const n=this.__isRTL,o=e.composedPath().find(l=>this.__isRow(l)),h=e.composedPath().find(l=>this.__isCell(l));let s=0,d=0;switch(t){case"ArrowRight":s=n?-1:1;break;case"ArrowLeft":s=n?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?d=-1/0:s=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?d=1/0:s=1/0;break;case"ArrowDown":d=1;break;case"ArrowUp":d=-1;break;case"PageDown":if(this.$.items.contains(o)){const l=this.__getIndexInGroup(o,this._focusedItemIndex);this._scrollToFlatIndex(l)}d=this._visibleItemsCount;break;case"PageUp":d=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!h)return;const m=n?"ArrowLeft":"ArrowRight",c=n?"ArrowRight":"ArrowLeft";if(t===m){if(this.__rowFocusMode){if(this.__isRowExpandable(o)){this.expandItem(o._item);return}this.__rowFocusMode=!1,this._onCellNavigation(o.firstElementChild,0,0);return}}else if(t===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(o)){this.collapseItem(o._item);return}}else{const l=[...o.children].sort((u,p)=>u._order-p._order);if(h===l[0]||this.__isDetailsCell(h)){this.__rowFocusMode=!0,this._onRowNavigation(o,0);return}}this.__rowFocusMode?this._onRowNavigation(o,d):this._onCellNavigation(h,s,d)}_onRowNavigation(e,t){const{dstRow:n}=this.__navigateRows(t,e);n&&n.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?t!==void 0?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,n){const o=this.__getIndexInGroup(t,this._focusedItemIndex),h=t.parentNode,s=(h===this.$.items?this._flatSize:h.children.length)-1;let d=Math.max(0,Math.min(o+e,s));if(h!==this.$.items){if(d>o)for(;d<s&&h.children[d].hidden;)d+=1;else if(d<o)for(;d>0&&h.children[d].hidden;)d-=1;return this.toggleAttribute("navigating",!0),{dstRow:h.children[d]}}let m=!1;if(n){const c=this.__isDetailsCell(n);if(h===this.$.items){const l=t._item,{item:u}=this._dataProviderController.getFlatIndexContext(d);c?m=e===0:m=e===1&&this._isDetailsOpened(l)||e===-1&&d!==o&&this._isDetailsOpened(u),m!==c&&(e===1&&m||e===-1&&!m)&&(d=o)}}return this._ensureScrolledToIndex(d),this._focusedItemIndex=d,this.toggleAttribute("navigating",!0),{dstRow:[...h.children].find(c=>!c.hidden&&c.index===d),dstIsRowDetails:m}}_onCellNavigation(e,t,n){const o=e.parentNode,{dstRow:h,dstIsRowDetails:s}=this.__navigateRows(n,o,e);if(!h)return;let d=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(d=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const m=this.__isDetailsCell(e),c=o.parentNode,l=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(m?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,l).filter(u=>!u.hidden)[d]._order),s)[...h.children].find(p=>this.__isDetailsCell(p)).focus();else{const u=this.__getIndexInGroup(h,this._focusedItemIndex),p=this._getColumns(c,u).filter(D=>!D.hidden),_=p.map(D=>D._order).sort((D,z)=>D-z),y=_.length-1,C=_.indexOf(_.slice(0).sort((D,z)=>Math.abs(D-this._focusedColumnOrder)-Math.abs(z-this._focusedColumnOrder))[0]),x=n===0&&m?C:Math.max(0,Math.min(C+t,y));x!==C&&(this._focusedColumnOrder=void 0);const A=p.reduce((D,z,V)=>(D[z._order]=V,D),{})[_[x]];let I;if(this.$.items.contains(e)){const D=this.$.sizer.children[A];this._lazyColumns&&(this.__isColumnInViewport(D._column)||D.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),I=[...h.children].find(z=>z._column===D._column),this._scrollHorizontallyToCell(I)}else I=h.children[A],this._scrollHorizontallyToCell(I);I.focus()}}_onInteractionKeyDown(e,t){const n=e.composedPath()[0],o=n.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(n.type);let h;switch(t){case"Enter":h=this.interacting?!o:!0;break;case"Escape":h=!1;break;case"F2":h=!this.interacting;break}const{cell:s}=this._getGridEventLocation(e);if(this.interacting!==h&&s!==null)if(h){const d=s._content.querySelector("[focus-target]")||[...s._content.querySelectorAll("*")].find(m=>this._isFocusable(m));d&&(e.preventDefault(),d.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,s.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const n=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=n.indexOf(e);for(o+=t;o>=0&&o<=n.length-1;){let s=n[o];if(s&&!this.__rowFocusMode&&(s=n[o].parentNode),!s||s.hidden)o+=t;else break}let h=n[o];if(h&&!this.__isHorizontallyInViewport(h)){const s=this._getColumnsInOrder().find(d=>this.__isColumnInViewport(d));if(s)if(h===this._headerFocusable)h=s._headerCell;else if(h===this._itemsFocusable){const d=h._column._cells.indexOf(h);h=s._cells[d]}else h===this._footerFocusable&&(h=s._footerCell)}return h}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let n=t;const o=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(t)){const h=Array.from(o.children).indexOf(this._itemsFocusable),s=Array.from(this.$.items.children).find(d=>!d.hidden&&d.index===this._focusedItemIndex);s&&(n=s.children[h])}e.preventDefault(),n.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],n=this.__isRow(t);(n||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(n?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(n?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const n=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",n)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:n,row:o}=this._getGridEventLocation(e);if(!(!n&&!this.__rowFocusMode)){if(this._detectInteracting(e),t&&(n||o))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(o,n):this.$.items===t?this._itemsFocusable=this.__getFocusable(o,n):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(o,n)),n){const h=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&h.section==="body",this.__pendingBodyCellFocus||n.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:h}})),this._focusedCell=n._focusButton||n,Cc()&&e.target===n&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(n=>n.localName==="vaadin-grid-cell-content");this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:n}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=n.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),n=this.interacting&&t===this._activeRowGroup;e.tabIndex=n?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let n=this._columnTree.length-1;return e===this.$.header?n=t:e===this.$.footer&&(n=this._columnTree.length-1-t),this._columnTree[n]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(o=>o.offsetHeight),n=t?[...t.children].find(o=>!o.hidden):null;t&&n&&(this[`_${e}Focusable`]=this.__getFocusable(t,n))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(n=>!n.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),n=e.parentNode,o=Array.from(n.children).indexOf(e),h=this.$.table.getBoundingClientRect();let s=h.left,d=h.right;for(let m=o-1;m>=0;m--){const c=n.children[m];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){s=c.getBoundingClientRect().right;break}}for(let m=o+1;m<n.children.length;m++){const c=n.children[m];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){d=c.getBoundingClientRect().left;break}}t.left<s&&(this.$.table.scrollLeft+=Math.round(t.left-s)),t.right>d&&(this.$.table.scrollLeft+=Math.round(t.right-d))}_getGridEventLocation(e){const t=e.composedPath(),n=t.indexOf(this.$.table),o=n>=1?t[n-1]:null,h=n>=2?t[n-2]:null,s=n>=3?t[n-3]:null;return{section:o,row:h,cell:s}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pu=a=>class extends a{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&lt(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const n=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,n)}})}_detailsOpenedItemsChanged(e,t){lt(this.$.items,n=>{if(n.hasAttribute("details-opened")){this._updateItem(n,n._item);return}t&&this._isDetailsOpened(n._item)&&this._updateItem(n,n._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const n=e.querySelector('[part~="details-cell"]');n&&(n.hidden=!t,!n.hidden&&this.rowDetailsRenderer&&(n._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){lt(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yt=document.createElement("div");yt.style.position="fixed";yt.style.clip="rect(0px, 0px, 0px, 0px)";yt.setAttribute("aria-live","polite");document.body.appendChild(yt);let kr;function Tn(a,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(yt.removeAttribute("aria-live"),yt.removeAttribute("role"),kr=We.debounce(kr,Nt,()=>{yt.setAttribute("role","alert")})):(kr&&kr.cancel(),yt.removeAttribute("role"),yt.setAttribute("aria-live",e)),yt.textContent="",setTimeout(()=>{yt.textContent=a},t)}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mu=a=>class extends Ws(a){get focused(){return(this._getItems()||[]).find(Us)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,n=>!xi(n));t>=0&&this._focus(t)}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,n=this._getItems()||[],o=n.indexOf(this.focused);let h,s;const m=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(t)?(s=-m,h=o-m):this.__isNextKey(t)?(s=m,h=o+m):t==="Home"?(s=1,h=0):t==="End"&&(s=-1,h=n.length-1),h=this._getAvailableIndex(n,h,s,c=>!xi(c)),h>=0&&(e.preventDefault(),this._focus(h,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,t=!1){const n=this._getItems();this._focusItem(n[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,n,o){const h=e.length;let s=t;for(let d=0;typeof s=="number"&&d<h;d+=1,s+=n||1){s<0?s=h-1:s>=h&&(s=0);const m=e[s];if(!m.hasAttribute("disabled")&&this.__isMatchingItem(m,o))return s}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Nn(a,i){const{scrollLeft:e}=a;return i!=="rtl"?e:a.scrollWidth-a.clientWidth+e}function _u(a,i,e){i!=="rtl"?a.scrollLeft=e:a.scrollLeft=a.clientWidth-a.scrollWidth+e}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gu=a=>class extends mu(a){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],t=this._getAvailableIndex(e,0,null,n=>n.tabIndex===0&&!xi(n));t>=0?this._focus(t):super.focus()}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new wc(e,()=>{this._setItems(this._filterItems(Sc(this)))})}_getItems(){return this.items}_enhanceItems(e,t,n,o){if(!o&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(s=>{t?s.setAttribute("orientation",t):s.removeAttribute("orientation")}),this._setFocusable(n||0);const h=e[n];e.forEach(s=>{s.selected=s===h}),h&&!h.disabled&&this._scrollToItem(n)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let n;t&&!t.disabled&&(n=this.items.indexOf(t))>=0&&(this.selected=n)}_searchKey(e,t){this._searchReset=We.debounce(this._searchReset,zt.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(o=>this.__isMatchingKey(o))||(this._searchBuf=t.toLowerCase());const n=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,n,1,o=>this.__isMatchingKey(o)&&getComputedStyle(o).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,n=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const o=this._searchKey(n,t);o>=0&&this._focus(o);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(n=>{n.tabIndex=n===t?0:-1})}_focus(e){this.items.forEach((t,n)=>{t.focused=n===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const t=this.items[e];if(!t)return;const n=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),h=(this.items[e+1]||t).getBoundingClientRect(),s=(this.items[e-1]||t).getBoundingClientRect();let d=0;!this._isRTL&&h[n[1]]>=o[n[1]]||this._isRTL&&h[n[1]]<=o[n[1]]?d=h[n[1]]-o[n[1]]:(!this._isRTL&&s[n[0]]<=o[n[0]]||this._isRTL&&s[n[0]]>=o[n[0]])&&(d=s[n[0]]-o[n[0]]),this._scroll(d)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",n=Nn(this._scrollerElement,t)+e;_u(this._scrollerElement,t,n)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const es={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},vu=a=>class extends no(a){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!xi(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(n=>n.index===e);if(t){const n=t.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,h=this.$.header.getBoundingClientRect().bottom;n.bottom>o?this.$.table.scrollTop+=n.bottom-o:n.top<h&&(this.$.table.scrollTop-=h-n.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=We.debounce(this._debounceScrolling,zt.after(es.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=We.debounce(this._debounceColumnContentVisibility,zt.after(es.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!xi(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(n=>{const o=this._lazyColumns&&!this.__isColumnInViewport(n);n._bodyContentHidden!==o&&(t=!0,n._cells.forEach(h=>{if(h!==n._sizerCell){if(o)h.remove();else if(h.__parentRow){const s=[...h.__parentRow.children].find(d=>e.indexOf(d._column)>e.indexOf(n));h.__parentRow.insertBefore(h,s)}}})),n._bodyContentHidden=o}),t&&this._frozenCellsChanged(),this._lazyColumns){const n=[...e].reverse().find(s=>s.frozen),o=this.__getColumnEnd(n),h=e.find(s=>!s.frozen&&!s._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(h)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=We.debounce(this._debounceOverflow,Nt,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const n=Nn(t,this.getAttribute("dir"));n>0&&(e+=" start"),n<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,h=>h==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=We.debounce(this._debouncerCacheElements,ti,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=We.debounce(this.__debounceUpdateFrozenColumn,ti,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,h)=>o._order-h._order);let t,n;for(let o=0;o<e.length;o++){const h=e[o];h._lastFrozen=!1,h._firstFrozenToEnd=!1,n===void 0&&h.frozenToEnd&&!h.hidden&&(n=o),h.frozen&&!h.hidden&&(t=o)}t!==void 0&&(e[t]._lastFrozen=!0),n!==void 0&&(e[n]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,n=Math.max(0,this.$.table.scrollLeft),o=Nn(this.$.table,this.getAttribute("dir")),h=`translate(${-n}px, 0)`;this.$.header.style.transform=h,this.$.footer.style.transform=h,this.$.items.style.transform=h;const s=this.__isRTL?o+t-e:n,d=`translate(${s}px, 0)`;this._frozenCells.forEach(u=>{u.style.transform=d});const m=this.__isRTL?o:n+t-e,c=`translate(${m}px, 0)`;let l=c;if(this._lazyColumns&&this._areSizerCellsAssigned()){const u=this._getColumnsInOrder(),p=[...u].reverse().find(w=>!w.frozenToEnd&&!w._bodyContentHidden),_=this.__getColumnEnd(p),y=u.find(w=>w.frozenToEnd),C=this.__getColumnStart(y);l=`translate(${m+(C-_)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(u=>{this.$.items.contains(u)?u.style.transform=l:u.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-s}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bu=a=>class extends a{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const n=t||[],o=new Set;return n.forEach(h=>{o.add(this.getItemId(h))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ts="prepend";const yu=a=>class extends a{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>ts},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){ts=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>{e._order=this._sorters.length>1?t:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,n){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!n)||this.multiSortOnShiftClick&&t)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(h=>h!==e);this._sorters=e.direction?[e]:[],o.forEach(h=>{h._order=null,h.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xu=a=>class extends a{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){lt(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){lt(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){$i(e,n=>{if(n.__generatedClasses&&n.__generatedClasses.forEach(o=>n.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(n._column,t);n.__generatedClasses=o&&o.split(" ").filter(h=>h.length>0),n.__generatedClasses&&n.__generatedClasses.forEach(h=>n.classList.add(h))}})}_generateCellPartNames(e,t){$i(e,n=>{if(n.__generatedParts&&n.__generatedParts.forEach(o=>{ii(n,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(n._column,t);n.__generatedParts=o&&o.split(" ").filter(h=>h.length>0),n.__generatedParts&&n.__generatedParts.forEach(h=>{ii(n,!0,h)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cu=a=>class extends ru(au(hu(Qc(vu(bu(yu(pu(fu(Jc(uu(nu(ou(cu(du(xu(Ic(a))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Bs},_ios:{type:Boolean,value:Fr},_firefox:{type:Boolean,value:Ac},_android:{type:Boolean,value:Uo},_touchDevice:{type:Boolean,value:Hi},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),n=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+n&&t.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=Gs("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new oa({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Ui(this),this._tooltipController=new Xr(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(o=>o._item===i),n=t&&[...t.children].find(o=>o._column===e);n&&n.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,n){if(e&&t&&n){const o=this.shadowRoot.activeElement,h=this.__getBodyCellCoordinates(o),s=e.size||0;e.size=i,e.update(s-1,s-1),i<s&&e.update(i-1,i-1),h&&o.parentElement.hidden&&this.__focusBodyCell(h),this._resetKeyboardNavigation()}}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth((i.assignedSlot||i).parentElement,i));if(!e)return t;const n=i,o=t,h=n._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,l)=>c+l,0),s=Math.max(0,o-h),m=this.__getIntrinsicWidth(e)/h*s;return this.__getIntrinsicWidth(e)+m}_recalculateColumnWidths(i){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(n=>{n.__debounceUpdateHeaderFooterRowVisibility&&n.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(n=>n.index>=e&&n.index<=t),this.__calculateAndCacheIntrinsicWidths(i),i.forEach(n=>{n.width=`${this.__getDistributedWidth(n)}px`})}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")})}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(xi(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const i=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(i)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||xi(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(t=>t.index===void 0))return;[...this.$.items.children].some(t=>t.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const n=document.createElement("tr");n.setAttribute("part","row body-row"),n.setAttribute("role","row"),n.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(n,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(n)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=We.debounce(this.__afterCreateScrollerRowsDebouncer,Nt,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(i,e){const n=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",n);const h=document.createElement(i);h.id=n.replace("-content-","-"),h.setAttribute("role",i==="td"?"gridcell":"columnheader"),!Uo&&!Fr&&(h.addEventListener("mouseenter",d=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(d)}),h.addEventListener("mouseleave",()=>{this._hideTooltip()}),h.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const s=document.createElement("slot");if(s.setAttribute("name",n),e&&e._focusButtonMode){const d=document.createElement("div");d.setAttribute("role","button"),d.setAttribute("tabindex","-1"),h.appendChild(d),h._focusButton=d,h.focus=function(){h._focusButton.focus()},d.appendChild(s)}else h.setAttribute("tabindex","-1"),h.appendChild(s);return h._content=o,o.addEventListener("mousedown",()=>{if(kc){const d=m=>{const c=o.contains(this.getRootNode().activeElement),l=m.composedPath().includes(o);!c&&l&&h.focus(),document.removeEventListener("mouseup",d,!0)};document.addEventListener("mouseup",d,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||h.focus()})}),h}_updateRow(i,e,t="body",n=!1,o=!1){const h=document.createDocumentFragment();$i(i,s=>{s._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(s=>!s.hidden).forEach((s,d,m)=>{let c;if(t==="body"){s._cells||(s._cells=[]),c=s._cells.find(u=>u._vacant),c||(c=this._createCell("td",s),s._onCellKeyDown&&c.addEventListener("keydown",s._onCellKeyDown.bind(s)),s._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=i,i.__cells.push(c);const l=i===this.$.sizer;if((!s._bodyContentHidden||l)&&i.appendChild(c),l&&(s._sizerCell=c),d===m.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const u=this._detailsCells.find(p=>p._vacant)||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||h.appendChild(u._content),this._configureDetailsCell(u),i.appendChild(u),i.__detailsCell=u,this._a11ySetRowDetailsCell(i,u),u._vacant=!1}o||(s._cells=[...s._cells])}else{const l=t==="header"?"th":"td";n||s.localName==="vaadin-grid-column-group"?(c=s[`_${t}Cell`],c||(c=this._createCell(l),s._onCellKeyDown&&c.addEventListener("keydown",s._onCellKeyDown.bind(s))),c._column=s,i.appendChild(c),s[`_${t}Cell`]=c):(s._emptyCells||(s._emptyCells=[]),c=s._emptyCells.find(u=>u._vacant)||this._createCell(l),c._column=s,i.appendChild(c),s._emptyCells.indexOf(c)===-1&&s._emptyCells.push(c)),c.part.add("cell",`${t}-cell`)}c._content.parentElement||h.appendChild(c._content),c._vacant=!1,c._column=s}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(h),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=We.debounce(i.__debounceUpdateHeaderFooterRowVisibility,ti,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const n=t._column;if(n._emptyCells&&n._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(n.headerRenderer)return!0;if(n.header===null)return!1;if(n.path||n.header!==void 0)return!0}else if(n.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(this._updateRowOrderParts(i,e),this._a11yUpdateRowRowindex(i,e),this._getItem(e,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,e=i.index){sr(i,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(i,{expanded:e,selected:t,detailsOpened:n}){sr(i,{expanded:e,collapsed:this.__isRowExpandable(i),selected:t,"details-opened":n})}_renderColumnTree(i){for(lt(this.$.items,e=>{this._updateRow(e,i[i.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);lt(this.$.header,(e,t,n)=>{this._updateRow(e,i[t],"header",t===i.length-1);const o=Wi(e);Zt(o,"first-header-row-cell",t===0),Zt(o,"last-header-row-cell",t===n.length-1)}),lt(this.$.footer,(e,t,n)=>{this._updateRow(e,i[i.length-1-t],"footer",t===0);const o=Wi(e);Zt(o,"first-footer-row-cell",t===0),Zt(o,"last-footer-row-cell",t===n.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,e){i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this._a11yUpdateRowLevel(i,t.level),this._a11yUpdateRowSelected(i,t.selected),this._updateRowStateParts(i,t),this._generateCellClassNames(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),lt(i,n=>{if(!(n._column&&!n._column.isConnected)&&n._renderer){const o=n._column||this;n._renderer.call(o,n._content,o,t)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(i.target),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"}))}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wu=Ie`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-grid",wu,{moduleId:"vaadin-grid-styles"});class nr extends Cu(wi(Ze(cr(Le)))){static get template(){return Me`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Ne(nr);Ae("vaadin-grid-sorter",Ie`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const va=document.createElement("template");va.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(va.content);Ae("vaadin-grid-sorter",Ie`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const Su=a=>class extends a{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){t!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Iu extends Su(Ze(Vt(Le))){static get template(){return Me`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}Ne(Iu);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Au=Si(a=>class extends Ec(Ys($s(a))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ku=a=>class extends Mc(Au(Tc(Ks(a)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new eo(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new to(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eu=Ie`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-checkbox",Eu,{moduleId:"vaadin-checkbox-styles"});class Mu extends ku(wi(Ze(Le))){static get is(){return"vaadin-checkbox"}static get template(){return Me`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Xr(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Ne(Mu);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=a=>class extends a{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select All"),n.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(n),n.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const o=this.__isChecked(this.selectAll,this._indeterminate);n.__rendererChecked=o,n.checked=o,n.hidden=this._selectAllHidden,n.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:n,selected:o}){let h=e.firstElementChild;h||(h=document.createElement("vaadin-checkbox"),h.setAttribute("aria-label","Select Row"),e.appendChild(h),h.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),ur(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),h.__item=n,h.__rendererChecked=o,h.checked=o}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const n=this._grid._getRenderedRows().find(o=>o.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(n._item),this.__dragStartIndex=n.index,this.__dragStartItem=n._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){const t=e.composedPath()[0];if(e.keyCode===32&&(t===this._headerCell||this._cells.includes(t)&&!this.autoSelect)){const n=t._content.firstElementChild;n.checked=!n.checked}}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),t=e.find(d=>{const m=d.getBoundingClientRect();return this.__dragCurrentY>=m.top&&this.__dragCurrentY<=m.bottom});let n=t?t.index:void 0;const o=this.__getScrollableArea();this.__dragCurrentY<o.top?n=this._grid._firstVisibleIndex:this.__dragCurrentY>o.bottom&&(n=this._grid._lastVisibleIndex),n!==void 0&&e.forEach(d=>{(n>this.__dragStartIndex&&d.index>=this.__dragStartIndex&&d.index<=n||n<this.__dragStartIndex&&d.index<=this.__dragStartIndex&&d.index>=n)&&(this.__selectOnDrag?this._selectItem(d._item):this._deselectItem(d._item),this.__dragStartItem=void 0)});const h=o.height*.15,s=10;if(this.__dragDy<0&&this.__dragCurrentY<o.top+h){const d=o.top+h-this.__dragCurrentY,m=Math.min(1,d/h);this._grid.$.table.scrollTop-=m*s}if(this.__dragDy>0&&this.__dragCurrentY>o.bottom-h){const d=this.__dragCurrentY-(o.bottom-h),m=Math.min(1,d/h);this._grid.$.table.scrollTop+=m*s}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),n=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-n.height,left:e.left,right:e.right,height:e.height-t.height-n.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}};class Bn extends Tu(fa){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(i,e){super._defaultHeaderRenderer(i,e);const t=i.firstElementChild;t&&(t.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(i){this._grid.$connector.doSelection([i],!0)}_deselectItem(i){this._grid.$connector.doDeselection([i],!0),this.selectAll=!1}}customElements.define(Bn.is,Bn);(function(){const a=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Grid")};window.Vaadin.Flow.gridConnector={initLazy:i=>a(function(e){if(e.$connector)return;const t=e._dataProviderController;t.ensureFlatIndexHierarchyOriginal=t.ensureFlatIndexHierarchy,t.ensureFlatIndexHierarchy=a(function(O){const{item:N}=this.getFlatIndexContext(O);if(!N||!this.isExpanded(N))return;e.$connector.hasCacheForParentKey(e.getItemId(N))?this.ensureFlatIndexHierarchyOriginal(O):e.$connector.beforeEnsureFlatIndexHierarchy(O,N)}),t.isLoadingOriginal=t.isLoading,t.isLoading=a(function(){return e.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()});const n={},o={},h={},s=50,d=20;let m=[],c,l=[],u;const p=150;let _,y={};const C="null";y[C]=[0,0];let x=null,w=null;const A=["SINGLE","NONE","MULTI"];let I={},D="SINGLE",z=!1;e.size=0,e.itemIdPath="key";function V(O){return{[e.itemIdPath]:O}}e.$connector={},e.$connector.hasCacheForParentKey=a(O=>{var N;return((N=h[O])==null?void 0:N.size)!==void 0}),e.$connector.hasEnsureSubCacheQueue=a(()=>l.length>0),e.$connector.hasParentRequestQueue=a(()=>m.length>0),e.$connector.hasRootRequestQueue=a(()=>Object.keys(n).length>0||!!(_!=null&&_.isActive())),e.$connector.beforeEnsureFlatIndexHierarchy=a(function(O,N){l.push({flatIndex:O,itemkey:e.getItemId(N)}),u=Xt.debounce(u,$o,()=>{for(;l.length;)e.$connector.flushEnsureSubCache()})}),e.$connector.doSelection=a(function(O,N){D==="NONE"||!O.length||N&&e.hasAttribute("disabled")||(D==="SINGLE"&&(I={}),O.forEach(B=>{B&&(I[B.key]=B,B.selected=!0,N&&e.$server.select(B.key));const j=!e.activeItem||!B||B.key!=e.activeItem.key;!N&&D==="SINGLE"&&j&&(e.activeItem=B)}),e.selectedItems=Object.values(I))}),e.$connector.doDeselection=a(function(O,N){if(D==="NONE"||!O.length||N&&e.hasAttribute("disabled"))return;const B=e.selectedItems.slice();for(;O.length;){const j=O.shift();for(let K=0;K<B.length;K++){const te=B[K];if((j==null?void 0:j.key)===te.key){B.splice(K,1);break}}j&&(delete I[j.key],delete j.selected,N&&e.$server.deselect(j.key))}e.selectedItems=B}),e.__activeItemChanged=a(function(O,N){D=="SINGLE"&&(O?I[O.key]||e.$connector.doSelection([O],!0):N&&I[N.key]&&(e.__deselectDisallowed?e.activeItem=N:e.$connector.doDeselection([N],!0)))}),e._createPropertyObserver("activeItem","__activeItemChanged",!0),e.__activeItemChangedDetails=a(function(O,N){e.__disallowDetailsOnClick||O==null&&N===void 0||(O&&!O.detailsOpened?e.$server.setDetailsVisible(O.key):e.$server.setDetailsVisible(null))}),e._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),e.$connector._getSameLevelPage=a(function(O,N,B){if((N.parentItem?e.getItemId(N.parentItem):C)===O)return Math.floor(B/e.pageSize);const{parentCache:K,parentCacheIndex:te}=N;return K?this._getSameLevelPage(O,K,te):null}),e.$connector.flushEnsureSubCache=a(function(){const O=l.shift();return O?(t.ensureFlatIndexHierarchyOriginal(O.flatIndex),!0):!1}),e.$connector.debounceRootRequest=a(function(O){const N=e._hasData?p:0;_=Xt.debounce(_,Jt.after(N),()=>{e.$connector.fetchPage((B,j)=>e.$server.setRequestedRange(B,j),O,C)})}),e.$connector.flushParentRequests=a(function(){const O=[];m.splice(0,d).forEach(({parentKey:N,page:B})=>{e.$connector.fetchPage((j,K)=>O.push({parentKey:N,firstIndex:j,size:K}),B,N)}),O.length&&e.$server.setParentRequestedRanges(O)}),e.$connector.debounceParentRequest=a(function(O,N){m=m.filter(B=>B.parentKey!==O),m.push({parentKey:O,page:N}),c=Xt.debounce(c,Jt.after(s),()=>{for(;m.length;)e.$connector.flushParentRequests()})}),e.$connector.fetchPage=a(function(O,N,B){B===C&&(N=Math.min(N,Math.floor((e.size-1)/e.pageSize)));const j=e._getRenderedRows();let K=j.length>0?j[0].index:0,te=j.length>0?j[j.length-1].index:0,ie=te-K,ae=Math.max(0,K-ie),Z=Math.min(te+ie,e._flatSize),re=[null,null];for(let ue=ae;ue<=Z;ue++){const{cache:fe,index:De}=t.getFlatIndexContext(ue),ce=e.$connector._getSameLevelPage(B,fe,De);ce!==null&&(re[0]=Math.min(re[0]??ce,ce),re[1]=Math.max(re[1]??ce,ce))}(re.some(ue=>ue===null)||N<re[0]||N>re[1])&&(re=[N,N]);let me=y[B]||[-1,-1];if(me[0]!=re[0]||me[1]!=re[1]){y[B]=re;let ue=re[1]-re[0]+1;O(re[0]*e.pageSize,ue*e.pageSize)}}),e.dataProvider=a(function(O,N){var j,K;if(O.pageSize!=e.pageSize)throw"Invalid pageSize";let B=O.page;if(O.parentItem){let te=e.getItemId(O.parentItem);o[te]||(o[te]={});const ie=t.getItemContext(O.parentItem);(j=h[te])!=null&&j[B]&&ie.subCache?(B=Math.min(B,Math.floor(h[te].size/e.pageSize)),l=[],N(h[te][B],h[te].size)):(o[te][B]=N,e.$connector.debounceParentRequest(te,B))}else{if(B=Math.min(B,Math.floor(e.size/e.pageSize)),e.size===0){N([],0);return}(K=h[C])!=null&&K[B]?N(h[C][B]):(n[B]=N,e.$connector.debounceRootRequest(B))}}),e.$connector.setSorterDirections=a(function(O){z=!0,setTimeout(a(()=>{try{const N=Array.from(e.querySelectorAll("vaadin-grid-sorter"));e._sorters.forEach(B=>{N.includes(B)||N.push(B)}),N.forEach(B=>{B.direction=null}),e.multiSortPriority!=="append"&&(O=O.reverse()),O.forEach(({column:B,direction:j})=>{N.forEach(K=>{K.getAttribute("path")===B&&(K.direction=j)})})}finally{z=!1}}))}),e._updateItem=a(function(O,N){nr.prototype._updateItem.call(e,O,N),O.hidden||Array.from(O.children).forEach(B=>{var j,K;Array.from(((K=(j=B==null?void 0:B._content)==null?void 0:j.__templateInstance)==null?void 0:K.children)||[]).forEach(te=>{te._attachRenderedComponentIfAble&&te._attachRenderedComponentIfAble(),Array.from((te==null?void 0:te.children)||[]).forEach(ie=>{ie._attachRenderedComponentIfAble&&ie._attachRenderedComponentIfAble()})})}),D===A[1]&&(O.removeAttribute("aria-selected"),Array.from(O.children).forEach(B=>B.removeAttribute("aria-selected")))});const T=a(function(O,N){if(O==null||e.$server.updateExpandedState==null)return;let B=e.getItemId(O);e.$server.updateExpandedState(B,N)});e.expandItem=a(function(O){T(O,!0),nr.prototype.expandItem.call(e,O)}),e.collapseItem=a(function(O){T(O,!1),nr.prototype.collapseItem.call(e,O)});const M=function(O){if(!O||!Array.isArray(O))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(O);let N=Array.from(e.detailsOpenedItems),B=!1;for(let j=0;j<O.length;++j){const K=O[j];K&&(K.detailsOpened?e._getItemIndexInArray(K,N)<0&&N.push(K):e._getItemIndexInArray(K,N)>=0&&N.splice(e._getItemIndexInArray(K,N),1),I[K.key]&&(I[K.key]=K,K.selected=!0,B=!0))}e.detailsOpenedItems=N,B&&e.selectedItems.splice(0,e.selectedItems.length,...Object.values(I))},F=function(O,N){let B;if((N||C)!==C){B=h[N][O];const j=V(N),K=t.getItemContext(j);if(K&&K.subCache){const te=o[N],ie=te&&te[O];L(O,B,ie,K.subCache)}}else B=h[C][O],L(O,B,n[O],t.rootCache);return B},L=function(O,N,B,j){if(!B){let K=O*e.pageSize,te=K+e.pageSize;if(N){if(j&&j.items)for(let ie=K;ie<te;ie++)j.items[ie]&&(j.items[ie]=N[ie-K])}else if(j&&j.items)for(let ie=K;ie<te;ie++)delete j.items[ie]}},W=function(){U(),e.__updateVisibleRows()},U=function(){t.recalculateFlatSize(),e._flatSize=t.flatSize},$=function(O){if(!O||!e.$||e.$.items.childElementCount===0)return;const N=O.map(j=>j.key),B=e._getRenderedRows().filter(j=>j._item&&N.includes(j._item.key)).map(j=>j.index);B.length>0&&e.__updateVisibleRows(B[0],B[B.length-1])};e.$connector.set=a(function(O,N,B){if(O%e.pageSize!=0)throw"Got new data to index "+O+" which is not aligned with the page size of "+e.pageSize;let j=B||C;const K=O/e.pageSize,te=Math.ceil(N.length/e.pageSize);j===C&&(w=[K,K+te-1]);for(let ie=0;ie<te;ie++){let ae=K+ie,Z=N.slice(ie*e.pageSize,(ie+1)*e.pageSize);h[j]||(h[j]={}),h[j][ae]=Z,e.$connector.doSelection(Z.filter(me=>me.selected)),e.$connector.doDeselection(Z.filter(me=>!me.selected&&I[me.key]));const re=F(ae,j);re&&(M(re),$(re))}});const Y=function(O){let N=O.parentUniqueKey||C;if(h[N]){for(let B in h[N])for(let j in h[N][B])if(e.getItemId(h[N][B][j])===e.getItemId(O))return{page:B,index:j,parentKey:N}}return null};e.$connector.updateHierarchicalData=a(function(O){let N=[];for(let j=0;j<O.length;j++){let K=Y(O[j]);if(K){h[K.parentKey][K.page][K.index]=O[j];let te=K.parentKey+":"+K.page;N[te]||(N[te]={parentKey:K.parentKey,page:K.page})}}let B=Object.keys(N);for(let j=0;j<B.length;j++){let K=N[B[j]];const te=F(K.page,K.parentKey);te&&(M(te),$(te))}}),e.$connector.updateFlatData=a(function(O){for(let N=0;N<O.length;N++){let B=Y(O[N]);if(B){h[B.parentKey][B.page][B.index]=O[N];const j=parseInt(B.page)*e.pageSize+parseInt(B.index),{rootCache:K}=t;K.items[j]&&(K.items[j]=O[N])}}M(O),$(O)}),e.$connector.clearExpanded=a(function(){e.expandedItems=[],l=[],m=[]});const G=function(){const O=y[C];if(!O||!x)return;const N=x[1]-x[0]+1,B=Array.from({length:N},(j,K)=>x[0]+K);if(w){const[j,K]=w;for(let te=j;te<=K;te++){const ie=B.indexOf(te);ie>=0&&B.splice(ie,1)}}B.some(j=>j>=O[0]&&j<=O[1])&&(O[0]=-1,O[1]=-1)};e.$connector.clear=a(function(O,N,B){let j=B||C;if(!h[j]||Object.keys(h[j]).length===0)return;if(O%e.pageSize!=0)throw"Got cleared data for index "+O+" which is not aligned with the page size of "+e.pageSize;let K=Math.floor(O/e.pageSize),te=Math.ceil(N/e.pageSize);j===C&&(x=[K,K+te-1]);for(let Z=0;Z<te;Z++){let re=K+Z,me=h[j][re];e.$connector.doDeselection(me.filter(fe=>I[fe.key])),me.forEach(fe=>e.closeItemDetails(fe)),delete h[j][re];const ue=F(re,B);ue&&M(ue),$(me)}let ie=t.rootCache;if(B){const Z=V(j);ie=t.getItemContext(Z).subCache}const ae=O+te*e.pageSize;for(let Z=O;Z<ae;Z++)delete ie.items[Z],ie.removeSubCache(Z);U()}),e.$connector.reset=a(function(){e.size=0,J(h),J(t.rootCache.items),J(y),u&&u.cancel(),c&&c.cancel(),_&&_.cancel(),u=void 0,c=void 0,l=[],m=[],W()});const J=O=>Object.keys(O).forEach(N=>delete O[N]);e.$connector.updateSize=O=>e.size=O,e.$connector.updateUniqueItemIdPath=O=>e.itemIdPath=O,e.$connector.expandItems=a(function(O){let N=Array.from(e.expandedItems);O.filter(B=>!e._isExpanded(B)).forEach(B=>N.push(B)),e.expandedItems=N}),e.$connector.collapseItems=a(function(O){let N=Array.from(e.expandedItems);O.forEach(B=>{let j=e._getItemIndexInArray(B,N);j>=0&&N.splice(j,1)}),e.expandedItems=N,O.forEach(B=>e.$connector.removeFromQueue(B))}),e.$connector.removeFromQueue=a(function(O){let N=e.getItemId(O);Object.values(o[N]||{}).forEach(B=>B([])),delete o[N],l=l.filter(B=>B.itemkey!==N),m=m.filter(B=>B.parentKey!==N)}),e.$connector.confirmParent=a(function(O,N,B){h[N]||(h[N]={});const j=h[N].size!==B;h[N].size=B,B===0&&(h[N][0]=[]);let K=Object.getOwnPropertyNames(o[N]||{});for(let te=0;te<K.length;te++){let ie=K[te],ae=y[N]||[0,0];const Z=o[N][ie];if(h[N]&&h[N][ie]||ie<ae[0]||ie>ae[1]){delete o[N][ie];let re=h[N][ie]||new Array(B);Z(re,B)}else Z&&B===0&&(delete o[N][ie],Z([],B))}if(j&&K.length===0){const te=V(N),ie=t.getItemContext(te);ie&&ie.subCache&&(ie.subCache.size=B),U()}e.$server.confirmParentUpdate(O,N),e.loading||(e.__confirmParentUpdateDebouncer=Xt.debounce(e.__confirmParentUpdateDebouncer,$o,()=>e.__updateVisibleRows()))}),e.$connector.confirm=a(function(O){var B;let N=Object.getOwnPropertyNames(n);for(let j=0;j<N.length;j++){let K=N[j],te=y[C]||[0,0];const ie=e.size?Math.ceil(e.size/e.pageSize)-1:0,ae=Math.min(te[1],ie),Z=n[K];(B=h[C])!=null&&B[K]||K<te[0]||+K>ae?(delete n[K],h[C][K]?Z(h[C][K]):(Z(new Array(e.pageSize)),e.requestContentUpdate())):Z&&e.size===0&&(delete n[K],Z([]))}G(),w=null,x=null,e.$server.confirmUpdate(O)}),e.$connector.ensureHierarchy=a(function(){for(let O in h)O!==C&&delete h[O];J(y),t.rootCache.removeSubCaches(),W()}),e.$connector.setSelectionMode=a(function(O){if((typeof O=="string"||O instanceof String)&&A.indexOf(O)>=0)D=O,I={},e.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),e.$connector.updateMultiSelectable=a(function(){e.$&&(D===A[0]?e.$.table.setAttribute("aria-multiselectable",!1):D===A[1]?e.$.table.removeAttribute("aria-multiselectable"):e.$.table.setAttribute("aria-multiselectable",!0))}),e._createPropertyObserver("isAttached",()=>e.$connector.updateMultiSelectable());const Q=O=>N=>{O&&(O(N),O=null)};e.$connector.setHeaderRenderer=a(function(O,N){const{content:B,showSorter:j,sorterPath:K}=N;if(B===null){O.headerRenderer=null;return}O.headerRenderer=Q(te=>{te.innerHTML="";let ie=te;if(j){const ae=document.createElement("vaadin-grid-sorter");ae.setAttribute("path",K);const Z=B instanceof Node?B.textContent:B;Z&&ae.setAttribute("aria-label",`Sort by ${Z}`),te.appendChild(ae),ie=ae}B instanceof Node?ie.appendChild(B):ie.textContent=B})}),e.__applySorters=()=>{const O=e._mapSorters(),N=JSON.stringify(e._previousSorters)!==JSON.stringify(O);e._previousSorters=O,nr.prototype.__applySorters.call(e),N&&!z&&e.$server.sortersChanged(O)},e.$connector.setFooterRenderer=a(function(O,N){const{content:B}=N;if(B===null){O.footerRenderer=null;return}O.footerRenderer=Q(j=>{j.innerHTML="",B instanceof Node?j.appendChild(B):j.textContent=B})}),e.addEventListener("vaadin-context-menu-before-open",a(function(O){const{key:N,columnId:B}=O.detail;e.$server.updateContextMenuTargetItem(N,B)})),e.getContextMenuBeforeOpenDetail=a(function(O){var te,ie;const N=O.detail.sourceEvent||O,B=e.getEventContext(N),j=((te=B.item)==null?void 0:te.key)||"",K=((ie=B.column)==null?void 0:ie.id)||"";return{key:j,columnId:K}}),e.preventContextMenu=a(function(O){const N=O.type==="click",{column:B}=e.getEventContext(O);return N&&B instanceof Bn}),e.addEventListener("click",a(O=>oe(O,"item-click"))),e.addEventListener("dblclick",a(O=>oe(O,"item-double-click"))),e.addEventListener("column-resize",a(O=>{e._getColumnsInOrder().filter(B=>!B.hidden).forEach(B=>{B.dispatchEvent(new CustomEvent("column-drag-resize"))}),e.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:O.detail.resizedColumn._flowId}}))})),e.addEventListener("column-reorder",a(O=>{const N=e._columnTree.slice(0).pop().filter(B=>B._flowId).sort((B,j)=>B._order-j._order).map(B=>B._flowId);e.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:N}}))})),e.addEventListener("cell-focus",a(O=>{const N=e.getEventContext(O);["header","body","footer"].indexOf(N.section)!==-1&&e.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:N.item?N.item.key:null,internalColumnId:N.column?N.column._flowId:null,section:N.section}}))}));function oe(O,N){if(O.defaultPrevented)return;const B=O.target;if(pa(B)||B instanceof HTMLLabelElement)return;const j=e.getEventContext(O),K=j.section;j.item&&K!=="details"&&(O.itemKey=j.item.key,j.column&&(O.internalColumnId=j.column._flowId),e.dispatchEvent(new CustomEvent(N,{detail:O})))}e.cellClassNameGenerator=a(function(O,N){const B=N.item.style;if(B)return(B.row||"")+" "+(O&&B[O._flowId]||"")}),e.cellPartNameGenerator=a(function(O,N){const B=N.item.part;if(B)return(B.row||"")+" "+(O&&B[O._flowId]||"")}),e.dropFilter=a(O=>O.item&&!O.item.dropDisabled),e.dragFilter=a(O=>O.item&&!O.item.dragDisabled),e.addEventListener("grid-dragstart",a(O=>{e._isSelected(O.detail.draggedItems[0])?(e.__selectionDragData?Object.keys(e.__selectionDragData).forEach(N=>{O.detail.setDragData(N,e.__selectionDragData[N])}):(e.__dragDataTypes||[]).forEach(N=>{O.detail.setDragData(N,O.detail.draggedItems.map(B=>B.dragData[N]).join(`
`))}),e.__selectionDraggedItemsCount>1&&O.detail.setDraggedItemsCount(e.__selectionDraggedItemsCount)):(e.__dragDataTypes||[]).forEach(N=>{O.detail.setDragData(N,O.detail.draggedItems[0].dragData[N])})}))})(i)}})();/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const en=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Br;function is(a){a&&a.shimcssproperties?Br=!1:Br=en||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let hr;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(hr=window.ShadyCSS.cssBuild);const ba=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Br=window.ShadyCSS.nativeCss:window.ShadyCSS?(is(window.ShadyCSS),window.ShadyCSS=void 0):is(window.WebComponents&&window.WebComponents.flags);const so=Br;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class rs{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ya(a){return a=Du(a),xa(Pu(a),a)}function Du(a){return a.replace(Lt.comments,"").replace(Lt.port,"")}function Pu(a){let i=new rs;i.start=0,i.end=a.length;let e=i;for(let t=0,n=a.length;t<n;t++)if(a[t]===wa){e.rules||(e.rules=[]);let o=e,h=o.rules[o.rules.length-1]||null;e=new rs,e.start=t+1,e.parent=o,e.previous=h,o.rules.push(e)}else a[t]===Sa&&(e.end=t+1,e=e.parent||i);return i}function xa(a,i){let e=i.substring(a.start,a.end-1);if(a.parsedCssText=a.cssText=e.trim(),a.parent){let n=a.previous?a.previous.end:a.parent.start;e=i.substring(n,a.start-1),e=Ou(e),e=e.replace(Lt.multipleSpaces," "),e=e.substring(e.lastIndexOf(";")+1);let o=a.parsedSelector=a.selector=e.trim();a.atRule=o.indexOf(Bu)===0,a.atRule?o.indexOf(Nu)===0?a.type=Ni.MEDIA_RULE:o.match(Lt.keyframesRule)&&(a.type=Ni.KEYFRAMES_RULE,a.keyframesName=a.selector.split(Lt.multipleSpaces).pop()):o.indexOf(Ia)===0?a.type=Ni.MIXIN_RULE:a.type=Ni.STYLE_RULE}let t=a.rules;if(t)for(let n=0,o=t.length,h;n<o&&(h=t[n]);n++)xa(h,i);return a}function Ou(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let i=arguments[1],e=6-i.length;for(;e--;)i="0"+i;return"\\"+i})}function Ca(a,i,e=""){let t="";if(a.cssText||a.rules){let n=a.rules;if(n&&!Ru(n))for(let o=0,h=n.length,s;o<h&&(s=n[o]);o++)t=Ca(s,i,t);else t=i?a.cssText:Fu(a.cssText),t=t.trim(),t&&(t="  "+t+`
`)}return t&&(a.selector&&(e+=a.selector+" "+wa+`
`),e+=t,a.selector&&(e+=Sa+`

`)),e}function Ru(a){let i=a[0];return!!i&&!!i.selector&&i.selector.indexOf(Ia)===0}function Fu(a){return a=zu(a),Lu(a)}function zu(a){return a.replace(Lt.customProp,"").replace(Lt.mixinProp,"")}function Lu(a){return a.replace(Lt.mixinApply,"").replace(Lt.varApply,"")}const Ni={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},wa="{",Sa="}",Lt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ia="--",Nu="@media",Bu="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vn=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Vr=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ns=new Set,Vu="shady-unscoped";function Hu(a){const i=a.textContent;if(!ns.has(i)){ns.add(i);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=i,document.head.appendChild(e)}}function Wu(a){return a.hasAttribute(Vu)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(a,i){return a?(typeof a=="string"&&(a=ya(a)),Ca(a,so)):""}function os(a){return!a.__cssRules&&a.textContent&&(a.__cssRules=ya(a.textContent)),a.__cssRules||null}function Pr(a,i,e,t){if(!a)return;let n=!1,o=a.type;o===Ni.STYLE_RULE?i(a):o===Ni.MIXIN_RULE&&(n=!0);let h=a.rules;if(h&&!n)for(let s=0,d=h.length,m;s<d&&(m=h[s]);s++)Pr(m,i)}function $u(a,i){let e=0;for(let t=i,n=a.length;t<n;t++)if(a[t]==="(")e++;else if(a[t]===")"&&--e===0)return t;return-1}function Aa(a,i){let e=a.indexOf("var(");if(e===-1)return i(a,"","","");let t=$u(a,e+3),n=a.substring(e+4,t),o=a.substring(0,e),h=Aa(a.substring(t+1),i),s=n.indexOf(",");if(s===-1)return i(o,n.trim(),"",h);let d=n.substring(0,s).trim(),m=n.substring(s+1).trim();return i(o,d,m,h)}window.ShadyDOM&&window.ShadyDOM.wrap;function Yu(a){let i=a.localName,e="",t="";return i?i.indexOf("-")>-1?e=i:(t=i,e=a.getAttribute&&a.getAttribute("is")||""):(e=a.is,t=a.extends),{is:e,typeExtension:t}}function Uu(a){const i=[],e=a.querySelectorAll("style");for(let t=0;t<e.length;t++){const n=e[t];Wu(n)?en||(Hu(n),n.parentNode.removeChild(n)):(i.push(n.textContent),n.parentNode.removeChild(n))}return i.join("").trim()}const ka="css-build";function qu(a){if(hr!==void 0)return hr;if(a.__cssBuild===void 0){const i=a.getAttribute(ka);if(i)a.__cssBuild=i;else{const e=ju(a);e!==""&&Gu(a),a.__cssBuild=e}}return a.__cssBuild||""}function ss(a){return qu(a)!==""}function ju(a){const i=a.localName==="template"?a.content.firstChild:a.firstChild;if(i instanceof Comment){const e=i.textContent.trim().split(":");if(e[0]===ka)return e[1]}return""}function Gu(a){const i=a.localName==="template"?a.content.firstChild:a.firstChild;i.parentNode.removeChild(i)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Wn(a,i){for(let e in i)e===null?a.style.removeProperty(e):a.style.setProperty(e,i[e])}function Ea(a,i){const e=window.getComputedStyle(a).getPropertyValue(i);return e?e.trim():""}function Ku(a){const i=Vr.test(a)||Vn.test(a);return Vr.lastIndex=0,Vn.lastIndex=0,i}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xu=/;\s*/m,Zu=/^\s*(initial)|(inherit)\s*$/,as=/\s*!important/,$n="_-_";class Ju{constructor(){this._map={}}set(i,e){i=i.trim(),this._map[i]={properties:e,dependants:{}}}get(i){return i=i.trim(),this._map[i]||null}}let Hr=null;class st{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ju}detectMixin(i){return Ku(i)}gatherStyles(i){const e=Uu(i.content);if(e){const t=document.createElement("style");return t.textContent=e,i.content.insertBefore(t,i.content.firstChild),t}return null}transformTemplate(i,e){i._gatheredStyle===void 0&&(i._gatheredStyle=this.gatherStyles(i));const t=i._gatheredStyle;return t?this.transformStyle(t,e):null}transformStyle(i,e=""){let t=os(i);return this.transformRules(t,e),i.textContent=Hn(t),t}transformCustomStyle(i){let e=os(i);return Pr(e,t=>{t.selector===":root"&&(t.selector="html"),this.transformRule(t)}),i.textContent=Hn(e),e}transformRules(i,e){this._currentElement=e,Pr(i,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(i){i.cssText=this.transformCssText(i.parsedCssText,i),i.selector===":root"&&(i.selector=":host > *")}transformCssText(i,e){return i=i.replace(Vn,(t,n,o,h)=>this._produceCssProperties(t,n,o,h,e)),this._consumeCssProperties(i,e)}_getInitialValueForProperty(i){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(i)}_fallbacksFromPreviousRules(i){let e=i;for(;e.parent;)e=e.parent;const t={};let n=!1;return Pr(e,o=>{n=n||o===i,!n&&o.selector===i.selector&&Object.assign(t,this._cssTextToMap(o.parsedCssText))}),t}_consumeCssProperties(i,e){let t=null;for(;t=Vr.exec(i);){let n=t[0],o=t[1],h=t.index,s=h+n.indexOf("@apply"),d=h+n.length,m=i.slice(0,s),c=i.slice(d),l=e?this._fallbacksFromPreviousRules(e):{};Object.assign(l,this._cssTextToMap(m));let u=this._atApplyToCssProperties(o,l);i=`${m}${u}${c}`,Vr.lastIndex=h+u.length}return i}_atApplyToCssProperties(i,e){i=i.replace(Xu,"");let t=[],n=this._map.get(i);if(n||(this._map.set(i,{}),n=this._map.get(i)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let o,h,s;const d=n.properties;for(o in d)s=e&&e[o],h=[o,": var(",i,$n,o],s&&h.push(",",s.replace(as,"")),h.push(")"),as.test(d[o])&&h.push(" !important"),t.push(h.join(""))}return t.join("; ")}_replaceInitialOrInherit(i,e){let t=Zu.exec(e);return t&&(t[1]?e=this._getInitialValueForProperty(i):e="apply-shim-inherit"),e}_cssTextToMap(i,e=!1){let t=i.split(";"),n,o,h={};for(let s=0,d,m;s<t.length;s++)d=t[s],d&&(m=d.split(":"),m.length>1&&(n=m[0].trim(),o=m.slice(1).join(":"),e&&(o=this._replaceInitialOrInherit(n,o)),h[n]=o));return h}_invalidateMixinEntry(i){if(Hr)for(let e in i.dependants)e!==this._currentElement&&Hr(e)}_produceCssProperties(i,e,t,n,o){if(t&&Aa(t,(C,x)=>{x&&this._map.get(x)&&(n=`@apply ${x};`)}),!n)return i;let h=this._consumeCssProperties(""+n,o),s=i.slice(0,i.indexOf("--")),d=this._cssTextToMap(h,!0),m=d,c=this._map.get(e),l=c&&c.properties;l?m=Object.assign(Object.create(l),d):this._map.set(e,m);let u=[],p,_,y=!1;for(p in m)_=d[p],_===void 0&&(_="initial"),l&&!(p in l)&&(y=!0),u.push(`${e}${$n}${p}: ${_}`);return y&&this._invalidateMixinEntry(c),c&&(c.properties=m),t&&(s=`${i};${s}`),`${s}${u.join("; ")};`}}st.prototype.detectMixin=st.prototype.detectMixin;st.prototype.transformStyle=st.prototype.transformStyle;st.prototype.transformCustomStyle=st.prototype.transformCustomStyle;st.prototype.transformRules=st.prototype.transformRules;st.prototype.transformRule=st.prototype.transformRule;st.prototype.transformTemplate=st.prototype.transformTemplate;st.prototype._separator=$n;Object.defineProperty(st.prototype,"invalidCallback",{get(){return Hr},set(a){Hr=a}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yn={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wr="_applyShimCurrentVersion",Yi="_applyShimNextVersion",$r="_applyShimValidatingVersion",Qu=Promise.resolve();function ef(a){let i=Yn[a];i&&tf(i)}function tf(a){a[Wr]=a[Wr]||0,a[$r]=a[$r]||0,a[Yi]=(a[Yi]||0)+1}function Ma(a){return a[Wr]===a[Yi]}function rf(a){return!Ma(a)&&a[$r]===a[Yi]}function nf(a){a[$r]=a[Yi],a._validating||(a._validating=!0,Qu.then(function(){a[Wr]=a[Yi],a._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Dn=null,ls=window.HTMLImports&&window.HTMLImports.whenReady||null,Pn;function ds(a){requestAnimationFrame(function(){ls?ls(a):(Dn||(Dn=new Promise(i=>{Pn=i}),document.readyState==="complete"?Pn():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Pn()})),Dn.then(function(){a&&a()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const hs="__seenByShadyCSS",Er="__shadyCSSCachedStyle";let Yr=null,ar=null,ri=class{constructor(){this.customStyles=[],this.enqueued=!1,ds(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!ar||(this.enqueued=!0,ds(ar))}addCustomStyle(i){i[hs]||(i[hs]=!0,this.customStyles.push(i),this.enqueueDocumentValidation())}getStyleForCustomStyle(i){if(i[Er])return i[Er];let e;return i.getStyle?e=i.getStyle():e=i,e}processStyles(){const i=this.customStyles;for(let e=0;e<i.length;e++){const t=i[e];if(t[Er])continue;const n=this.getStyleForCustomStyle(t);if(n){const o=n.__appliedElement||n;Yr&&Yr(o),t[Er]=o}}return i}};ri.prototype.addCustomStyle=ri.prototype.addCustomStyle;ri.prototype.getStyleForCustomStyle=ri.prototype.getStyleForCustomStyle;ri.prototype.processStyles=ri.prototype.processStyles;Object.defineProperties(ri.prototype,{transformCallback:{get(){return Yr},set(a){Yr=a}},validateCallback:{get(){return ar},set(a){let i=!1;ar||(i=!0),ar=a,i&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const or=new st;class of{constructor(){this.customStyleInterface=null,or.invalidCallback=ef}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=i=>{or.transformCustomStyle(i)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(i,e){if(this.ensure(),ss(i))return;Yn[e]=i;let t=or.transformTemplate(i,e);i._styleAst=t}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let i=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<i.length;e++){let t=i[e],n=this.customStyleInterface.getStyleForCustomStyle(t);n&&or.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(i,e){if(this.ensure(),e&&Wn(i,e),i.shadowRoot){this.styleElement(i);let t=i.shadowRoot.children||i.shadowRoot.childNodes;for(let n=0;n<t.length;n++)this.styleSubtree(t[n])}else{let t=i.children||i.childNodes;for(let n=0;n<t.length;n++)this.styleSubtree(t[n])}}styleElement(i){this.ensure();let{is:e}=Yu(i),t=Yn[e];if(!(t&&ss(t))&&t&&!Ma(t)){rf(t)||(this.prepareTemplate(t,e),nf(t));let n=i.shadowRoot;if(n){let o=n.querySelector("style");o&&(o.__cssRules=t._styleAst,o.textContent=Hn(t._styleAst))}}}styleDocument(i){this.ensure(),this.styleSubtree(document.body,i)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const a=new of;let i=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,t,n){a.flushCustomStyles(),a.prepareTemplate(e,t)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(e,t){a.flushCustomStyles(),a.styleSubtree(e,t)},styleElement(e){a.flushCustomStyles(),a.styleElement(e)},styleDocument(e){a.flushCustomStyles(),a.styleDocument(e)},getComputedStyleValue(e,t){return Ea(e,t)},flushCustomStyles(){a.flushCustomStyles()},nativeCss:so,nativeShadow:en,cssBuild:hr,disableRuntime:ba},i&&(window.ShadyCSS.CustomStyleInterface=i)}window.ShadyCSS.ApplyShim=or;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ao=typeof document.head.style.touchAction=="string",Ur="__polymerGestures",Or="__polymerGesturesHandled",Un="__polymerGesturesTouchAction",cs=25,us=5,sf=2,af=2500,Ta=["mousedown","mousemove","mouseup","click"],lf=[0,1,4,2],df=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function lo(a){return Ta.indexOf(a)>-1}let ho=!1;(function(){try{let a=Object.defineProperty({},"passive",{get(){ho=!0}});window.addEventListener("test",null,a),window.removeEventListener("test",null,a)}catch{}})();function Da(a){if(!(lo(a)||a==="touchend")&&ao&&ho&&ac)return{passive:!0}}let Pa=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const qn=[],hf={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},cf={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function uf(a){return hf[a.localName]||!1}function ff(a){let i=Array.prototype.slice.call(a.labels||[]);if(!i.length){i=[];try{let e=a.getRootNode();if(a.id){let t=e.querySelectorAll(`label[for = '${a.id}']`);for(let n=0;n<t.length;n++)i.push(t[n])}}catch{}}return i}let fs=function(a){let i=a.sourceCapabilities;if(!(i&&!i.firesTouchEvents)&&(a[Or]={skip:!0},a.type==="click")){let e=!1,t=tn(a);for(let n=0;n<t.length;n++){if(t[n].nodeType===Node.ELEMENT_NODE){if(t[n].localName==="label")qn.push(t[n]);else if(uf(t[n])){let o=ff(t[n]);for(let h=0;h<o.length;h++)e=e||qn.indexOf(o[h])>-1}}if(t[n]===tt.mouse.target)return}if(e)return;a.preventDefault(),a.stopPropagation()}};function ps(a){let i=Pa?["click"]:Ta;for(let e=0,t;e<i.length;e++)t=i[e],a?(qn.length=0,document.addEventListener(t,fs,!0)):document.removeEventListener(t,fs,!0)}function pf(a){if(!Ls)return;tt.mouse.mouseIgnoreJob||ps(!0);let i=function(){ps(),tt.mouse.target=null,tt.mouse.mouseIgnoreJob=null};tt.mouse.target=tn(a)[0],tt.mouse.mouseIgnoreJob=Xt.debounce(tt.mouse.mouseIgnoreJob,Jt.after(af),i)}function yi(a){let i=a.type;if(!lo(i))return!1;if(i==="mousemove"){let e=a.buttons===void 0?1:a.buttons;return a instanceof window.MouseEvent&&!df&&(e=lf[a.which]||0),!!(e&1)}else return(a.button===void 0?0:a.button)===0}function mf(a){if(a.type==="click"){if(a.detail===0)return!0;let i=ei(a);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;let e=i.getBoundingClientRect(),t=a.pageX,n=a.pageY;return!(t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom)}return!1}let tt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _f(a){let i="auto",e=tn(a);for(let t=0,n;t<e.length;t++)if(n=e[t],n[Un]){i=n[Un];break}return i}function Oa(a,i,e){a.movefn=i,a.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function Vi(a){document.removeEventListener("mousemove",a.movefn),document.removeEventListener("mouseup",a.upfn),a.movefn=null,a.upfn=null}Ls&&document.addEventListener("touchend",pf,ho?{passive:!0}:!1);const tn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:a=>a.composedPath&&a.composedPath()||[],fr={},bi=[];function gf(a,i){let e=document.elementFromPoint(a,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){let n=t;if(t=t.shadowRoot.elementFromPoint(a,i),n===t)break;t&&(e=t)}return e}function ei(a){const i=tn(a);return i.length>0?i[0]:a.target}function Ra(a){let i,e=a.type,n=a.currentTarget[Ur];if(!n)return;let o=n[e];if(o){if(!a[Or]&&(a[Or]={},e.slice(0,5)==="touch")){a=a;let h=a.changedTouches[0];if(e==="touchstart"&&a.touches.length===1&&(tt.touch.id=h.identifier),tt.touch.id!==h.identifier)return;ao||(e==="touchstart"||e==="touchmove")&&vf(a)}if(i=a[Or],!i.skip){for(let h=0,s;h<bi.length;h++)s=bi[h],o[s.name]&&!i[s.name]&&s.flow&&s.flow.start.indexOf(a.type)>-1&&s.reset&&s.reset();for(let h=0,s;h<bi.length;h++)s=bi[h],o[s.name]&&!i[s.name]&&(i[s.name]=!0,s[e](a))}}}function vf(a){let i=a.changedTouches[0],e=a.type;if(e==="touchstart")tt.touch.x=i.clientX,tt.touch.y=i.clientY,tt.touch.scrollDecided=!1;else if(e==="touchmove"){if(tt.touch.scrollDecided)return;tt.touch.scrollDecided=!0;let t=_f(a),n=!1,o=Math.abs(tt.touch.x-i.clientX),h=Math.abs(tt.touch.y-i.clientY);a.cancelable&&(t==="none"?n=!0:t==="pan-x"?n=h>o:t==="pan-y"&&(n=o>h)),n?a.preventDefault():qr("track")}}function bf(a,i,e){return fr[i]?(xf(a,i,e),!0):!1}function yf(a,i,e){return fr[i]?(Cf(a,i,e),!0):!1}function xf(a,i,e){let t=fr[i],n=t.deps,o=t.name,h=a[Ur];h||(a[Ur]=h={});for(let s=0,d,m;s<n.length;s++)d=n[s],!(Pa&&lo(d)&&d!=="click")&&(m=h[d],m||(h[d]=m={_count:0}),m._count===0&&a.addEventListener(d,Ra,Da(d)),m[o]=(m[o]||0)+1,m._count=(m._count||0)+1);a.addEventListener(i,e),t.touchAction&&Fa(a,t.touchAction)}function Cf(a,i,e){let t=fr[i],n=t.deps,o=t.name,h=a[Ur];if(h)for(let s=0,d,m;s<n.length;s++)d=n[s],m=h[d],m&&m[o]&&(m[o]=(m[o]||1)-1,m._count=(m._count||1)-1,m._count===0&&a.removeEventListener(d,Ra,Da(d)));a.removeEventListener(i,e)}function co(a){bi.push(a);for(let i=0;i<a.emits.length;i++)fr[a.emits[i]]=a}function wf(a){for(let i=0,e;i<bi.length;i++){e=bi[i];for(let t=0,n;t<e.emits.length;t++)if(n=e.emits[t],n===a)return e}return null}function Fa(a,i){ao&&a instanceof HTMLElement&&Bi.run(()=>{a.style.touchAction=i}),a[Un]=i}function uo(a,i,e){let t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,Ce(a).dispatchEvent(t),t.defaultPrevented){let n=e.preventer||e.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function qr(a){let i=wf(a);i.info&&(i.info.prevent=!0)}co({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vi(this.info)},mousedown:function(a){if(!yi(a))return;let i=ei(a),e=this,t=function(h){yi(h)||(tr("up",i,h),Vi(e.info))},n=function(h){yi(h)&&tr("up",i,h),Vi(e.info)};Oa(this.info,t,n),tr("down",i,a)},touchstart:function(a){tr("down",ei(a),a.changedTouches[0],a)},touchend:function(a){tr("up",ei(a),a.changedTouches[0],a)}});function tr(a,i,e,t){i&&uo(i,a,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent:function(n){return qr(n)}})}co({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(a){this.moves.length>sf&&this.moves.shift(),this.moves.push(a)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vi(this.info)},mousedown:function(a){if(!yi(a))return;let i=ei(a),e=this,t=function(h){let s=h.clientX,d=h.clientY;ms(e.info,s,d)&&(e.info.state=e.info.started?h.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&qr("tap"),e.info.addMove({x:s,y:d}),yi(h)||(e.info.state="end",Vi(e.info)),i&&On(e.info,i,h),e.info.started=!0)},n=function(h){e.info.started&&t(h),Vi(e.info)};Oa(this.info,t,n),this.info.x=a.clientX,this.info.y=a.clientY},touchstart:function(a){let i=a.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove:function(a){let i=ei(a),e=a.changedTouches[0],t=e.clientX,n=e.clientY;ms(this.info,t,n)&&(this.info.state==="start"&&qr("tap"),this.info.addMove({x:t,y:n}),On(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend:function(a){let i=ei(a),e=a.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),On(this.info,i,e))}});function ms(a,i,e){if(a.prevent)return!1;if(a.started)return!0;let t=Math.abs(a.x-i),n=Math.abs(a.y-e);return t>=us||n>=us}function On(a,i,e){if(!i)return;let t=a.moves[a.moves.length-2],n=a.moves[a.moves.length-1],o=n.x-a.x,h=n.y-a.y,s,d=0;t&&(s=n.x-t.x,d=n.y-t.y),uo(i,"track",{state:a.state,x:e.clientX,y:e.clientY,dx:o,dy:h,ddx:s,ddy:d,sourceEvent:e,hover:function(){return gf(e.clientX,e.clientY)}})}co({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(a){yi(a)&&(this.info.x=a.clientX,this.info.y=a.clientY)},click:function(a){yi(a)&&_s(this.info,a)},touchstart:function(a){const i=a.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend:function(a){_s(this.info,a.changedTouches[0],a)}});function _s(a,i,e){let t=Math.abs(i.clientX-a.x),n=Math.abs(i.clientY-a.y),o=ei(e||i);!o||cf[o.localName]&&o.hasAttribute("disabled")||(isNaN(t)||isNaN(n)||t<=cs&&n<=cs||mf(i))&&(a.prevent||uo(o,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const za=Si(a=>{class i extends a{_addEventListenerToNode(t,n,o){bf(t,n,o)||super._addEventListenerToNode(t,n,o)}_removeEventListenerFromNode(t,n,o){yf(t,n,o)||super._removeEventListenerFromNode(t,n,o)}}return i});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Sf=/:host\(:dir\((ltr|rtl)\)\)/g,If=':host([dir="$1"])',Af=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,kf=':host([dir="$2"]) $1',Ef=/:dir\((?:ltr|rtl)\)/,gs=!!(window.ShadyDOM&&window.ShadyDOM.inUse),lr=[];let dr=null,fo="";function La(){fo=document.documentElement.getAttribute("dir")}function Na(a){a.__autoDirOptOut||a.setAttribute("dir",fo)}function Ba(){La(),fo=document.documentElement.getAttribute("dir");for(let a=0;a<lr.length;a++)Na(lr[a])}function Mf(){dr&&dr.takeRecords().length&&Ba()}const Tf=Si(a=>{gs||dr||(La(),dr=new MutationObserver(Ba),dr.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const i=lc(a);class e extends i{static _processStyleText(n,o){return n=i._processStyleText.call(this,n,o),!gs&&Ef.test(n)&&(n=this._replaceDirInCssText(n),this.__activateDir=!0),n}static _replaceDirInCssText(n){let o=n;return o=o.replace(Sf,If),o=o.replace(Af,kf),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){i.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Mf(),lr.push(this),Na(this))}disconnectedCallback(){if(i.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const n=lr.indexOf(this);n>-1&&lr.splice(n,1)}}}return e.__activateDir=!1,e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function vs(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?vs():window.addEventListener("DOMContentLoaded",vs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ir(a,i,e){return{index:a,removed:i,addedCount:e}}const Va=0,Ha=1,jn=2,Gn=3;function Df(a,i,e,t,n,o){let h=o-n+1,s=e-i+1,d=new Array(h);for(let m=0;m<h;m++)d[m]=new Array(s),d[m][0]=m;for(let m=0;m<s;m++)d[0][m]=m;for(let m=1;m<h;m++)for(let c=1;c<s;c++)if(po(a[i+c-1],t[n+m-1]))d[m][c]=d[m-1][c-1];else{let l=d[m-1][c]+1,u=d[m][c-1]+1;d[m][c]=l<u?l:u}return d}function Pf(a){let i=a.length-1,e=a[0].length-1,t=a[i][e],n=[];for(;i>0||e>0;){if(i==0){n.push(jn),e--;continue}if(e==0){n.push(Gn),i--;continue}let o=a[i-1][e-1],h=a[i-1][e],s=a[i][e-1],d;h<s?d=h<o?h:o:d=s<o?s:o,d==o?(o==t?n.push(Va):(n.push(Ha),t=o),i--,e--):d==h?(n.push(Gn),i--,t=h):(n.push(jn),e--,t=s)}return n.reverse(),n}function Of(a,i,e,t,n,o){let h=0,s=0,d,m=Math.min(e-i,o-n);if(i==0&&n==0&&(h=Rf(a,t,m)),e==a.length&&o==t.length&&(s=Ff(a,t,m-h)),i+=h,n+=h,e-=s,o-=s,e-i==0&&o-n==0)return[];if(i==e){for(d=ir(i,[],0);n<o;)d.removed.push(t[n++]);return[d]}else if(n==o)return[ir(i,[],e-i)];let c=Pf(Df(a,i,e,t,n,o));d=void 0;let l=[],u=i,p=n;for(let _=0;_<c.length;_++)switch(c[_]){case Va:d&&(l.push(d),d=void 0),u++,p++;break;case Ha:d||(d=ir(u,[],0)),d.addedCount++,u++,d.removed.push(t[p]),p++;break;case jn:d||(d=ir(u,[],0)),d.addedCount++,u++;break;case Gn:d||(d=ir(u,[],0)),d.removed.push(t[p]),p++;break}return d&&l.push(d),l}function Rf(a,i,e){for(let t=0;t<e;t++)if(!po(a[t],i[t]))return t;return e}function Ff(a,i,e){let t=a.length,n=i.length,o=0;for(;o<e&&po(a[--t],i[--n]);)o++;return o}function Wa(a,i){return Of(a,0,a.length,i,0,i.length)}function po(a,i){return a===i}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fi(a){return a.localName==="slot"}let bs=class{static getFlattenedNodes(a){const i=Ce(a);return Fi(a)?(a=a,i.assignedNodes({flatten:!0})):Array.from(i.childNodes).map(e=>Fi(e)?(e=e,Ce(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(a,i){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=a,this.callback=i,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Fi(this._target)?this._listenSlots([this._target]):Ce(this._target).children&&(this._listenSlots(Ce(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,a=>{this._processMutations(a)}):(this._nativeChildrenObserver=new MutationObserver(a=>{this._processMutations(a)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Fi(this._target)?this._unlistenSlots([this._target]):Ce(this._target).children&&(this._unlistenSlots(Ce(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Bi.run(()=>this.flush()))}_processMutations(a){this._processSlotMutations(a),this.flush()}_processSlotMutations(a){if(a)for(let i=0;i<a.length;i++){let e=a[i];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let a={target:this._target,addedNodes:[],removedNodes:[]},i=this.constructor.getFlattenedNodes(this._target),e=Wa(i,this._effectiveNodes);for(let n=0,o;n<e.length&&(o=e[n]);n++)for(let h=0,s;h<o.removed.length&&(s=o.removed[h]);h++)a.removedNodes.push(s);for(let n=0,o;n<e.length&&(o=e[n]);n++)for(let h=o.index;h<o.index+o.addedCount;h++)a.addedNodes.push(i[h]);this._effectiveNodes=i;let t=!1;return(a.addedNodes.length||a.removedNodes.length)&&(t=!0,this.callback.call(this._target,a)),t}_listenSlots(a){for(let i=0;i<a.length;i++){let e=a[i];Fi(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(a){for(let i=0;i<a.length;i++){let e=a[i];Fi(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zi=Element.prototype,zf=zi.matches||zi.matchesSelector||zi.mozMatchesSelector||zi.msMatchesSelector||zi.oMatchesSelector||zi.webkitMatchesSelector,$a=function(a,i){return zf.call(a,i)};class Ee{constructor(i){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(i),this.node=i}observeNodes(i){return new bs(this.node,i)}unobserveNodes(i){i.disconnect()}notifyObserver(){}deepContains(i){if(Ce(this.node).contains(i))return!0;let e=i,t=i.ownerDocument;for(;e&&e!==t&&e!==this.node;)e=Ce(e).parentNode||Ce(e).host;return e===this.node}getOwnerRoot(){return Ce(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?Ce(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let i=[],e=Ce(this.node).assignedSlot;for(;e;)i.push(e),e=Ce(e).assignedSlot;return i}importNode(i,e){let t=this.node instanceof Document?this.node:this.node.ownerDocument;return Ce(t).importNode(i,e)}getEffectiveChildNodes(){return bs.getFlattenedNodes(this.node)}queryDistributedElements(i){let e=this.getEffectiveChildNodes(),t=[];for(let n=0,o=e.length,h;n<o&&(h=e[n]);n++)h.nodeType===Node.ELEMENT_NODE&&$a(h,i)&&t.push(h);return t}get activeElement(){let i=this.node;return i._activeElement!==void 0?i._activeElement:i.activeElement}}function Lf(a,i){for(let e=0;e<i.length;e++){let t=i[e];a[t]=function(){return this.node[t].apply(this.node,arguments)}}}function ys(a,i){for(let e=0;e<i.length;e++){let t=i[e];Object.defineProperty(a,t,{get:function(){return this.node[t]},configurable:!0})}}function Nf(a,i){for(let e=0;e<i.length;e++){let t=i[e];Object.defineProperty(a,t,{get:function(){return this.node[t]},set:function(n){this.node[t]=n},configurable:!0})}}class Kn{constructor(i){this.event=i}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Ee.prototype.cloneNode;Ee.prototype.appendChild;Ee.prototype.insertBefore;Ee.prototype.removeChild;Ee.prototype.replaceChild;Ee.prototype.setAttribute;Ee.prototype.removeAttribute;Ee.prototype.querySelector;Ee.prototype.querySelectorAll;Ee.prototype.parentNode;Ee.prototype.firstChild;Ee.prototype.lastChild;Ee.prototype.nextSibling;Ee.prototype.previousSibling;Ee.prototype.firstElementChild;Ee.prototype.lastElementChild;Ee.prototype.nextElementSibling;Ee.prototype.previousElementSibling;Ee.prototype.childNodes;Ee.prototype.children;Ee.prototype.classList;Ee.prototype.textContent;Ee.prototype.innerHTML;let Xn=Ee;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class a extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Ee.prototype).forEach(i=>{i!="activeElement"&&(a.prototype[i]=Ee.prototype[i])}),ys(a.prototype,["classList"]),Xn=a,Object.defineProperties(Kn.prototype,{localTarget:{get(){const i=this.event.currentTarget,e=i&&$e(i).getOwnerRoot(),t=this.path;for(let n=0;n<t.length;n++){const o=t[n];if($e(o).getOwnerRoot()===e)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Lf(Ee.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),ys(Ee.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Nf(Ee.prototype,["textContent","innerHTML","className"]);const $e=function(a){if(a=a||document,a instanceof Xn||a instanceof Kn)return a;let i=a.__domApi;return i||(a instanceof Event?i=new Kn(a):i=new Xn(a),a.__domApi=i),i};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rn=window.ShadyDOM,xs=window.ShadyCSS;function Cs(a,i){return Ce(a).getRootNode()===i}function Bf(a,i=!1){if(!Rn||!xs||!Rn.handlesDynamicScoping)return null;const e=xs.ScopingShim;if(!e)return null;const t=e.scopeForNode(a),n=Ce(a).getRootNode(),o=h=>{if(!Cs(h,n))return;const s=Array.from(Rn.nativeMethods.querySelectorAll.call(h,"*"));s.push(h);for(let d=0;d<s.length;d++){const m=s[d];if(!Cs(m,n))continue;const c=e.currentScopeForNode(m);c!==t&&(c!==""&&e.unscopeNode(m,c),e.scopeNode(m,t))}};if(o(a),i){const h=new MutationObserver(s=>{for(let d=0;d<s.length;d++){const m=s[d];for(let c=0;c<m.addedNodes.length;c++){const l=m.addedNodes[c];l.nodeType===Node.ELEMENT_NODE&&o(l)}}});return h.observe(a,{childList:!0,subtree:!0}),h}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Fn="disable-upgrade",Ya=a=>{for(;a;){const i=Object.getOwnPropertyDescriptor(a,"observedAttributes");if(i)return i.get;a=Object.getPrototypeOf(a.prototype).constructor}return()=>[]};Si(a=>{const i=Qn(a);let e=Ya(i);class t extends i{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return e.call(this).concat(Fn)}_initializeProperties(){this.hasAttribute(Fn)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}attributeChangedCallback(o,h,s,d){o==Fn?this.__isUpgradeDisabled&&s==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Ce(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(o,h,s,d)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mr="disable-upgrade";let Vf=window.ShadyCSS;const Ua=Si(a=>{const i=za(Qn(a)),e=dc?i:Tf(i),t=Ya(e),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(s,d,m){(this.__dataAttributes&&this.__dataAttributes[s]||s===Mr)&&this.attributeChangedCallback(s,d,m,null)}setAttribute(s,d){if(Ir&&!this._legacyForceObservedAttributes){const m=this.getAttribute(s);super.setAttribute(s,d),this.__attributeReaction(s,m,String(d))}else super.setAttribute(s,d)}removeAttribute(s){if(Ir&&!this._legacyForceObservedAttributes){const d=this.getAttribute(s);super.removeAttribute(s),this.__attributeReaction(s,d,null)}else super.removeAttribute(s)}static get observedAttributes(){return Ir&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],hc(this.prototype)),this.__observedAttributes):t.call(this).concat(Mr)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(s,d,m,c){d!==m&&(s==Mr?this.__isUpgradeDisabled&&m==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Ce(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(s,d,m,c),this.attributeChanged(s,d,m)))}attributeChanged(s,d,m){}_initializeProperties(){if(zn&&this.hasAttribute(Mr))this.__isUpgradeDisabled=!0;else{let s=Object.getPrototypeOf(this);s.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",s))||(this._registered(),s.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),Ir&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const s=this.attributes;for(let d=0,m=s.length;d<m;d++){const c=s[d];this.__attributeReaction(c.name,null,c.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(s){return this._serializeValue(s)}deserialize(s,d){return this._deserializeValue(s,d)}reflectPropertyToAttribute(s,d,m){this._propertyToAttribute(s,d,m)}serializeValueToAttribute(s,d,m){this._valueToNodeAttribute(m||this,s,d)}extend(s,d){if(!(s&&d))return s||d;let m=Object.getOwnPropertyNames(d);for(let c=0,l;c<m.length&&(l=m[c]);c++){let u=Object.getOwnPropertyDescriptor(d,l);u&&Object.defineProperty(s,l,u)}return s}mixin(s,d){for(let m in d)s[m]=d[m];return s}chainObject(s,d){return s&&d&&s!==d&&(s.__proto__=d),s}instanceTemplate(s){let d=this.constructor._contentForTemplate(s);return document.importNode(d,!0)}fire(s,d,m){m=m||{},d=d??{};let c=new Event(s,{bubbles:m.bubbles===void 0?!0:m.bubbles,cancelable:!!m.cancelable,composed:m.composed===void 0?!0:m.composed});c.detail=d;let l=m.node||this;return Ce(l).dispatchEvent(c),c}listen(s,d,m){s=s||this;let c=this.__boundListeners||(this.__boundListeners=new WeakMap),l=c.get(s);l||(l={},c.set(s,l));let u=d+m;l[u]||(l[u]=this._addMethodEventListenerToNode(s,d,m,this))}unlisten(s,d,m){s=s||this;let c=this.__boundListeners&&this.__boundListeners.get(s),l=d+m,u=c&&c[l];u&&(this._removeEventListenerFromNode(s,d,u),c[l]=null)}setScrollDirection(s,d){Fa(d||this,n[s]||"auto")}$$(s){return this.root.querySelector(s)}get domHost(){let s=Ce(this).getRootNode();return s instanceof DocumentFragment?s.host:s}distributeContent(){const d=$e(this);window.ShadyDOM&&d.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return $e(this).getEffectiveChildNodes()}queryDistributedElements(s){return $e(this).queryDistributedElements(s)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(d){return d.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let s=this.getEffectiveChildNodes(),d=[];for(let m=0,c;c=s[m];m++)c.nodeType!==Node.COMMENT_NODE&&d.push(c.textContent);return d.join("")}queryEffectiveChildren(s){let d=this.queryDistributedElements(s);return d&&d[0]}queryAllEffectiveChildren(s){return this.queryDistributedElements(s)}getContentChildNodes(s){let d=this.root.querySelector(s||"slot");return d?$e(d).getDistributedNodes():[]}getContentChildren(s){return this.getContentChildNodes(s).filter(function(m){return m.nodeType===Node.ELEMENT_NODE})}isLightDescendant(s){const d=this;return d!==s&&Ce(d).contains(s)&&Ce(d).getRootNode()===Ce(s).getRootNode()}isLocalDescendant(s){return this.root===Ce(s).getRootNode()}scopeSubtree(s,d=!1){return Bf(s,d)}getComputedStyleValue(s){return Vf.getComputedStyleValue(this,s)}debounce(s,d,m){return this._debouncers=this._debouncers||{},this._debouncers[s]=Xt.debounce(this._debouncers[s],m>0?Jt.after(m):Bi,d.bind(this))}isDebouncerActive(s){this._debouncers=this._debouncers||{};let d=this._debouncers[s];return!!(d&&d.isActive())}flushDebouncer(s){this._debouncers=this._debouncers||{};let d=this._debouncers[s];d&&d.flush()}cancelDebouncer(s){this._debouncers=this._debouncers||{};let d=this._debouncers[s];d&&d.cancel()}async(s,d){return d>0?Jt.run(s.bind(this),d):~Bi.run(s.bind(this))}cancelAsync(s){s<0?Bi.cancel(~s):Jt.cancel(s)}create(s,d){let m=document.createElement(s);if(d)if(m.setProperties)m.setProperties(d);else for(let c in d)m[c]=d[c];return m}elementMatches(s,d){return $a(d||this,s)}toggleAttribute(s,d){let m=this;return arguments.length===3&&(m=arguments[2]),arguments.length==1&&(d=!m.hasAttribute(s)),d?(Ce(m).setAttribute(s,""),!0):(Ce(m).removeAttribute(s),!1)}toggleClass(s,d,m){m=m||this,arguments.length==1&&(d=!m.classList.contains(s)),d?m.classList.add(s):m.classList.remove(s)}transform(s,d){d=d||this,d.style.webkitTransform=s,d.style.transform=s}translate3d(s,d,m,c){c=c||this,this.transform("translate3d("+s+","+d+","+m+")",c)}arrayDelete(s,d){let m;if(Array.isArray(s)){if(m=s.indexOf(d),m>=0)return s.splice(m,1)}else if(m=cc(this,s).indexOf(d),m>=0)return this.splice(s,m,1);return null}_logger(s,d){switch(Array.isArray(d)&&d.length===1&&Array.isArray(d[0])&&(d=d[0]),s){case"log":case"warn":case"error":console[s](...d)}}_log(...s){this._logger("log",s)}_warn(...s){this._logger("warn",s)}_error(...s){this._logger("error",s)}_logf(s,...d){return["[%s::%s]",this.is,s,...d]}}return o.prototype.is="",o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Hf={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},qa={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Wf=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},qa);function $f(a,i,e){const t=a._noAccessors,n=Object.getOwnPropertyNames(a);for(let o=0;o<n.length;o++){let h=n[o];if(!(h in e))if(t)i[h]=a[h];else{let s=Object.getOwnPropertyDescriptor(a,h);s&&(s.configurable=!0,Object.defineProperty(i,h,s))}}}function Yf(a,i,e){for(let t=0;t<i.length;t++)ja(a,i[t],e,Wf)}function ja(a,i,e,t){$f(i,a,t);for(let n in Hf)i[n]&&(e[n]=e[n]||[],e[n].push(i[n]))}function Ga(a,i,e){i=i||[];for(let t=a.length-1;t>=0;t--){let n=a[t];n?Array.isArray(n)?Ga(n,i):i.indexOf(n)<0&&(!e||e.indexOf(n)<0)&&i.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return i}function ws(a,i){for(const e in i){const t=a[e],n=i[e];!("value"in n)&&t&&"value"in t?a[e]=Object.assign({value:t.value},n):a[e]=n}}const Ss=Ua(HTMLElement);function Uf(a,i,e){let t;const n={};class o extends i{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))i._finalizeClass.call(this);else{if(t)for(let d=0,m;d<t.length;d++)m=t[d],m.properties&&this.createProperties(m.properties),m.observers&&this.createObservers(m.observers,m.properties);a.properties&&this.createProperties(a.properties),a.observers&&this.createObservers(a.observers,a.properties),this._prepareTemplate()}}static get properties(){const d={};if(t)for(let m=0;m<t.length;m++)ws(d,t[m].properties);return ws(d,a.properties),d}static get observers(){let d=[];if(t)for(let m=0,c;m<t.length;m++)c=t[m],c.observers&&(d=d.concat(c.observers));return a.observers&&(d=d.concat(a.observers)),d}created(){super.created();const d=n.created;if(d)for(let m=0;m<d.length;m++)d[m].call(this)}_registered(){const d=o.prototype;if(!d.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",d))){d.__hasRegisterFinished=!0,super._registered(),zn&&h(d);const m=Object.getPrototypeOf(this);let c=n.beforeRegister;if(c)for(let l=0;l<c.length;l++)c[l].call(m);if(c=n.registered,c)for(let l=0;l<c.length;l++)c[l].call(m)}}_applyListeners(){super._applyListeners();const d=n.listeners;if(d)for(let m=0;m<d.length;m++){const c=d[m];if(c)for(let l in c)this._addMethodEventListenerToNode(this,l,c[l])}}_ensureAttributes(){const d=n.hostAttributes;if(d)for(let m=d.length-1;m>=0;m--){const c=d[m];for(let l in c)this._ensureAttribute(l,c[l])}super._ensureAttributes()}ready(){super.ready();let d=n.ready;if(d)for(let m=0;m<d.length;m++)d[m].call(this)}attached(){super.attached();let d=n.attached;if(d)for(let m=0;m<d.length;m++)d[m].call(this)}detached(){super.detached();let d=n.detached;if(d)for(let m=0;m<d.length;m++)d[m].call(this)}attributeChanged(d,m,c){super.attributeChanged();let l=n.attributeChanged;if(l)for(let u=0;u<l.length;u++)l[u].call(this,d,m,c)}}if(e){Array.isArray(e)||(e=[e]);let s=i.prototype.behaviors;t=Ga(e,null,s),o.prototype.behaviors=s?s.concat(e):t}const h=s=>{t&&Yf(s,t,n),ja(s,a,n,qa)};return zn||h(o.prototype),o.generatedFrom=a,o}const qf=function(a,i){a||console.warn("Polymer.Class requires `info` argument");let e=i?i(Ss):Ss;return e=Uf(a,e,a.behaviors),e.is=e.prototype.is=a.is,e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ni=function(a){let i;return typeof a=="function"?i=a:i=ni.Class(a),a._legacyForceObservedAttributes&&(i.prototype._legacyForceObservedAttributes=a._legacyForceObservedAttributes),customElements.define(i.is,i),i};ni.Class=qf;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jf=za(Fs(uc(HTMLElement)));class Gf extends jf{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),fc)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(i,e,t,n){this.mutableData=!0}connectedCallback(){zs()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Ce(Ce(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let i=0;i<this.__children.length;i++)this.root.appendChild(this.__children[i])}render(){let i;if(!this.__children){if(i=i||this.querySelector("template"),!i){let e=new MutationObserver(()=>{if(i=this.querySelector("template"),i)e.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});e.observe(this,{childList:!0});return}this.root=this._stampTemplate(i),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",Gf);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Kf=Fs(Le);class Is extends Kf{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Yo,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++)this.__detachInstance(i);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),zs()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let i=Ce(Ce(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,i);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const i=this;let e=this.template=i._templateInfo?i:this.querySelector("template");if(!e){let n=new MutationObserver(()=>{if(this.querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return n.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=ec(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(n,o){let h=this.__instances;for(let s=0,d;s<h.length&&(d=h[s]);s++)d.forwardHostProp(n,o)},notifyInstanceProp:function(n,o,h){if(pc(this.as,o)){let s=n[this.itemsIndexAs];o==this.as&&(this.items[s]=h);let d=mc(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,o);this.notifyPath(d,h)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(i){if(typeof i=="string"){let e=i,t=this.__getMethodHost();return function(){return t[e].apply(t,arguments)}}return i}__sortChanged(i){this.__sortFn=this.__functionFromPropertyValue(i),this.items&&this.__debounceRender(this.__render)}__filterChanged(i){this.__filterFn=this.__functionFromPropertyValue(i),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(i){return Math.ceil(1e3/i)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(i){if(this.__sortFn||this.__filterFn){if(!i)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let t=0;t<e.length;t++)i.indexOf(e[t])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(i){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(i.path,i.value)||(i.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(i,e=0){this.__renderDebouncer=Xt.debounce(this.__renderDebouncer,e>0?Jt.after(e):Bi,i.bind(this)),tc(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ic()}__render(){if(!this.__ensureTemplatized())return;let i=this.items||[];const e=this.__sortAndFilterItems(i),t=this.__calculateLimit(e.length);this.__updateInstances(i,t,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Yo||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(i){let e=new Array(i.length);for(let t=0;t<i.length;t++)e[t]=t;return this.__filterFn&&(e=e.filter((t,n,o)=>this.__filterFn(i[t],n,o))),this.__sortFn&&e.sort((t,n)=>this.__sortFn(i[t],i[n])),e}__calculateLimit(i){let e=i;const t=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(i,this.initialCount),n=Math.max(e-t,0),this.__chunkCount=n||1):(n=Math.min(Math.max(i-t,0),this.__chunkCount),e=Math.min(t+n,i)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<i,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const i=performance.now()-this.__renderStartTime,e=this._targetFrameTime/i;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(i,e,t){const n=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let h=this.__instances[o],s=t[o],d=i[s];n[s]=o,h?(h._setPendingProperty(this.as,d),h._setPendingProperty(this.indexAs,o),h._setPendingProperty(this.itemsIndexAs,s),h._flushProperties()):this.__insertInstance(d,o,s)}for(let h=this.__instances.length-1;h>=o;h--)this.__detachAndRemoveInstance(h)}__detachInstance(i){let e=this.__instances[i];const t=Ce(e.root);for(let n=0;n<e.children.length;n++){let o=e.children[n];t.appendChild(o)}return e}__attachInstance(i,e){let t=this.__instances[i];e.insertBefore(t.root,this)}__detachAndRemoveInstance(i){this.__detachInstance(i),this.__instances.splice(i,1)}__stampInstance(i,e,t){let n={};return n[this.as]=i,n[this.indexAs]=e,n[this.itemsIndexAs]=t,new this.__ctor(n)}__insertInstance(i,e,t){const n=this.__stampInstance(i,e,t);let o=this.__instances[e+1],h=o?o.children[0]:this;return Ce(Ce(this).parentNode).insertBefore(n.root,h),this.__instances[e]=n,n}_showHideChildren(i){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(i)}__handleItemPath(i,e){let t=i.slice(6),n=t.indexOf("."),o=n<0?t:t.substring(0,n);if(o==parseInt(o,10)){let h=n<0?"":t.substring(n+1);this.__handleObservedPaths(h);let s=this.__itemsIdxToInstIdx[o],d=this.__instances[s];if(d){let m=this.as+(h?"."+h:"");d._setPendingPropertyOrPath(m,e,!1,!0),d._flushProperties()}return!0}}itemForElement(i){let e=this.modelForElement(i);return e&&e[this.as]}indexForElement(i){let e=this.modelForElement(i);return e&&e[this.indexAs]}modelForElement(i){return rc(this.template,i)}}customElements.define(Is.is,Is);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xf=Si(a=>{let i=Qn(a);class e extends i{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,o){let h=o.path;if(h==JSCompiler_renameProperty("items",this)){let s=o.base||[],d=this.__lastItems,m=this.__lastMulti;if(n!==m&&this.clearSelection(),d){let c=Wa(s,d);this.__applySplices(c)}this.__lastItems=s,this.__lastMulti=n}else if(o.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(o.value.indexSplices);else{let s=h.slice(`${JSCompiler_renameProperty("items",this)}.`.length),d=parseInt(s,10);s.indexOf(".")<0&&s==d&&this.__deselectChangedIdx(d)}}__applySplices(n){let o=this.__selectedMap;for(let s=0;s<n.length;s++){let d=n[s];o.forEach((m,c)=>{m<d.index||(m>=d.index+d.removed.length?o.set(c,m+d.addedCount-d.removed.length):o.set(c,-1))});for(let m=0;m<d.addedCount;m++){let c=d.index+m;o.has(this.items[c])&&o.set(this.items[c],c)}}this.__updateLinks();let h=0;o.forEach((s,d)=>{s<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),h,1):this.selected=this.selectedItem=null,o.delete(d)):h++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(o=>{o>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${o}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let o=this.__selectedIndexForItemIndex(n);if(o>=0){let h=0;this.__selectedMap.forEach((s,d)=>{o==h++&&this.deselect(d)})}}__selectedIndexForItemIndex(n){let o=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(o)return parseInt(o.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let o=this.__selectedMap.get(n);if(o>=0){this.__selectedMap.delete(n);let h;this.multi&&(h=this.__selectedIndexForItemIndex(o)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),h,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let o=this.items[n];this.isSelected(o)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(o,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),o):this.selected=this.selectedItem=o)}}return e}),Zf=Xf(Le);class As extends Zf{static get is(){return"array-selector"}static get template(){return null}}customElements.define(As.is,As);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rr=new ri;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(a,i,e){},prepareTemplateDom(a,i){},prepareTemplateStyles(a,i,e){},styleSubtree(a,i){Rr.processStyles(),Wn(a,i)},styleElement(a){Rr.processStyles()},styleDocument(a){Rr.processStyles(),Wn(document.body,a)},getComputedStyleValue(a,i){return Ea(a,i)},flushCustomStyles(){},nativeCss:so,nativeShadow:en,cssBuild:hr,disableRuntime:ba});window.ShadyCSS.CustomStyleInterface=Rr;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ks="include",Jf=window.ShadyCSS.CustomStyleInterface;class Qf extends HTMLElement{constructor(){super(),this._style=null,Jf.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const i=this.querySelector("style");if(!i)return null;this._style=i;const e=i.getAttribute(ks);return e&&(i.removeAttribute(ks),i.textContent=_c(e)+i.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Qf);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ep=Ua(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ka=Me`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Ka.setAttribute("style","display: none;");document.head.appendChild(Ka.content);var Xa=document.createElement("style");Xa.textContent="[hidden] { display: none !important; }";document.head.appendChild(Xa);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Za=Me`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Za.setAttribute("style","display: none;");document.head.appendChild(Za.content);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ja=Me`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;Ja.setAttribute("style","display: none;");document.head.appendChild(Ja.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Qa={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(a){this._setFocused(a.type==="focus")},_disabledChanged:function(a,i){this.setAttribute("aria-disabled",a?"true":"false"),this.style.pointerEvents=a?"none":"",a?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Es={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},tp={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Ms={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},ip=/[a-z0-9*]/,rp=/U\+/,np=/^arrow/,op=/^space(bar)?/,sp=/^escape$/;function Ts(a,i){var e="";if(a){var t=a.toLowerCase();t===" "||op.test(t)?e="space":sp.test(t)?e="esc":t.length==1?(!i||ip.test(t))&&(e=t):np.test(t)?e=t.replace("arrow",""):t=="multiply"?e="*":e=t}return e}function ap(a){var i="";return a&&(a in Es?i=Es[a]:rp.test(a)?(a=parseInt(a.replace("U+","0x"),16),i=String.fromCharCode(a).toLowerCase()):i=a.toLowerCase()),i}function lp(a){var i="";return Number(a)&&(a>=65&&a<=90?i=String.fromCharCode(32+a):a>=112&&a<=123?i="f"+(a-112+1):a>=48&&a<=57?i=String(a-48):a>=96&&a<=105?i=String(a-96):i=tp[a]),i}function dp(a,i){return a.key?Ts(a.key,i):a.detail&&a.detail.key?Ts(a.detail.key,i):ap(a.keyIdentifier)||lp(a.keyCode)||""}function Ds(a,i){var e=dp(i,a.hasModifiers);return e===a.key&&(!a.hasModifiers||!!i.shiftKey==!!a.shiftKey&&!!i.ctrlKey==!!a.ctrlKey&&!!i.altKey==!!a.altKey&&!!i.metaKey==!!a.metaKey)}function hp(a){return a.length===1?{combo:a,key:a,event:"keydown"}:a.split("+").reduce(function(i,e){var t=e.split(":"),n=t[0],o=t[1];return n in Ms?(i[Ms[n]]=!0,i.hasModifiers=!0):(i.key=n,i.event=o||"keydown"),i},{combo:a.split(":").shift()})}function Ps(a){return a.trim().split(" ").map(function(i){return hp(i)})}const el={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(a,i){this._imperativeKeyBindings[a]=i,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(a,i){for(var e=Ps(i),t=0;t<e.length;++t)if(Ds(e[t],a))return!0;return!1},_collectKeyBindings:function(){var a=this.behaviors.map(function(i){return i.keyBindings});return a.indexOf(this.keyBindings)===-1&&a.push(this.keyBindings),a},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this);for(var a in this._imperativeKeyBindings)this._addKeyBinding(a,this._imperativeKeyBindings[a]);for(var i in this._keyBindings)this._keyBindings[i].sort(function(e,t){var n=e[0].hasModifiers,o=t[0].hasModifiers;return n===o?0:n?-1:1})},_addKeyBinding:function(a,i){Ps(a).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,i])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(a){var i=this._keyBindings[a],e=this._onKeyBindingEvent.bind(this,i);this._boundKeyHandlers.push([this.keyEventTarget,a,e]),this.keyEventTarget.addEventListener(a,e)},this)},_unlistenKeyEventListeners:function(){for(var a,i,e,t;this._boundKeyHandlers.length;)a=this._boundKeyHandlers.pop(),i=a[0],e=a[1],t=a[2],i.removeEventListener(e,t)},_onKeyBindingEvent:function(a,i){if(this.stopKeyboardEventPropagation&&i.stopPropagation(),!i.defaultPrevented)for(var e=0;e<a.length;e++){var t=a[e][0],n=a[e][1];if(Ds(t,i)&&(this._triggerKeyHandler(t,n,i),i.defaultPrevented))return}},_triggerKeyHandler:function(a,i,e){var t=Object.create(a);t.keyboardEvent=e;var n=new CustomEvent(a.event,{detail:t,cancelable:!0});this[i].call(this,n),n.defaultPrevented&&e.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const jr={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(a){this._detectKeyboardFocus(a),a||this._setPressed(!1)},_detectKeyboardFocus:function(a){this._setReceivedFocusFromKeyboard(!this.pointerDown&&a)},_userActivate:function(a){this.active!==a&&(this.active=a,this.fire("change"))},_downHandler:function(a){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(a){var i=a.detail.keyboardEvent,e=$e(i).localTarget;this.isLightDescendant(e)||(i.preventDefault(),i.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(a){var i=a.detail.keyboardEvent,e=$e(i).localTarget;this.isLightDescendant(e)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(a){this._changedButtonState()},_ariaActiveAttributeChanged:function(a,i){i&&i!=a&&this.hasAttribute(i)&&this.removeAttribute(i)},_activeChanged:function(a,i){this.toggles?this.setAttribute(this.ariaActiveAttribute,a?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},tl=[el,jr];/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Tt={distance:function(a,i,e,t){var n=a-e,o=i-t;return Math.sqrt(n*n+o*o)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function il(a){this.element=a,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}il.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(a,i){var e=Tt.distance(a,i,0,0),t=Tt.distance(a,i,this.width,0),n=Tt.distance(a,i,0,this.height),o=Tt.distance(a,i,this.width,this.height);return Math.max(e,t,n,o)}};function vi(a){this.element=a,this.color=window.getComputedStyle(a).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),$e(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}vi.MAX_RADIUS=300;vi.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var a;return this.mouseDownStart?(a=Tt.now()-this.mouseDownStart,this.mouseUpStart&&(a-=this.mouseUpElapsed),a):0},get mouseUpElapsed(){return this.mouseUpStart?Tt.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var a=this.containerMetrics.width*this.containerMetrics.width,i=this.containerMetrics.height*this.containerMetrics.height,e=Math.min(Math.sqrt(a+i),vi.MAX_RADIUS)*1.1+5,t=1.1-.2*(e/vi.MAX_RADIUS),n=this.mouseInteractionSeconds/t,o=e*(1-Math.pow(80,-n));return Math.abs(o)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var a=this.mouseUpElapsedSeconds*.3,i=this.opacity;return Math.max(0,Math.min(a,i))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,vi.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,vi.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new il(this.element)},draw:function(){var a,i,e;this.wave.style.opacity=this.opacity,a=this.radius/(this.containerMetrics.size/2),i=this.xNow-this.containerMetrics.width/2,e=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+i+"px, "+e+"px)",this.waveContainer.style.transform="translate3d("+i+"px, "+e+"px, 0)",this.wave.style.webkitTransform="scale("+a+","+a+")",this.wave.style.transform="scale3d("+a+","+a+",1)"},downAction:function(a){var i=this.containerMetrics.width/2,e=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Tt.now(),this.center?(this.xStart=i,this.yStart=e,this.slideDistance=Tt.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=a?a.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=a?a.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=i,this.yEnd=e,this.slideDistance=Tt.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(a){this.isMouseDown&&(this.mouseUpStart=Tt.now())},remove:function(){$e($e(this.waveContainer).parentNode).removeChild(this.waveContainer)}};ni({_template:Me`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[el],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){$e(this).parentNode.nodeType==11?this.keyEventTarget=$e(this).getOwnerRoot().host:this.keyEventTarget=$e(this).parentNode;var a=this.keyEventTarget;this.listen(a,"up","uiUpAction"),this.listen(a,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var a=0;a<this.ripples.length;++a)if(!this.ripples[a].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(a){this.noink||this.downAction(a)},downAction:function(a){if(!(this.holdDown&&this.ripples.length>0)){var i=this.addRipple();i.downAction(a),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(a){this.noink||this.upAction(a)},upAction:function(a){this.holdDown||(this.ripples.forEach(function(i){i.upAction(a)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var a=new vi(this);return $e(this.$.waves).appendChild(a.waveContainer),this.$.background.style.backgroundColor=a.color,this.ripples.push(a),this._setAnimating(!0),a},removeRipple:function(a){var i=this.ripples.indexOf(a);i<0||(this.ripples.splice(i,1),a.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var a,i;for(a=0;a<this.ripples.length;++a)i=this.ripples[a],i.draw(),this.$.background.style.opacity=i.outerOpacity,i.isOpacityFullyDecayed&&!i.isRestingAtMaxRadius&&this.removeRipple(i);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(a,i){i!==void 0&&(a?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mo={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(a){jr._downHandler.call(this,a),this.pressed&&this.ensureRipple(a)},ensureRipple:function(a){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var i=this._rippleContainer||this.root;if(i&&$e(i).appendChild(this._ripple),a){var e=$e(this._rippleContainer||this),t=$e(a).rootTarget;e.deepContains(t)&&this._ripple.uiDownAction(a)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var a=document.createElement("paper-ripple");return a},_noinkChanged:function(a){this.hasRipple()&&(this._ripple.noink=a)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const rl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var a=1;this.disabled?a=0:this.active||this.pressed?a=4:this.receivedFocusFromKeyboard&&(a=3),this._setElevation(a)},_computeKeyboardClass:function(a){this.toggleClass("keyboard-focus",a)},_spaceKeyDownHandler:function(a){jr._spaceKeyDownHandler.call(this,a),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(a){jr._spaceKeyUpHandler.call(this,a),this.hasRipple()&&this._ripple.uiUpAction()}},cp=[tl,Qa,mo,rl];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const nl=Me`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;nl.setAttribute("strip-whitespace","");ni({_template:nl,is:"paper-button",behaviors:[cp],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?rl._calculateElevation.apply(this):this._setElevation(0)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class ct{constructor(i){ct[" "](i),this.type=i&&i.type||"default",this.key=i&&i.key,i&&"value"in i&&(this.value=i.value)}get value(){var i=this.type,e=this.key;if(i&&e)return ct.types[i]&&ct.types[i][e]}set value(i){var e=this.type,t=this.key;e&&t&&(e=ct.types[e]=ct.types[e]||{},i==null?delete e[t]:e[t]=i)}get list(){var i=this.type;if(i){var e=ct.types[this.type];return e?Object.keys(e).map(function(t){return up[this.type][t]},this):[]}}byKey(i){return this.key=i,this.value}}ct[" "]=function(){};ct.types={};var up=ct.types;ni({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(a,i,e){var t=new ct({type:a,key:i});return e!==void 0&&e!==t.value?t.value=e:this.value!==t.value&&(this.value=t.value),t},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(a){a&&(this.value=this)},byKey:function(a){return new ct({type:this.type,key:a}).value}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ni({_template:Me`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:ep.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(a){var i=(a||"").split(":");this._iconName=i.pop(),this._iconsetName=i.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(a){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&$e(this.root).removeChild(this._img),this._iconName===""?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,$e(this.root).appendChild(this._img))}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ol=Me`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;ol.setAttribute("style","display: none;");document.head.appendChild(ol.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const sl=Me`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;sl.setAttribute("style","display: none;");document.head.appendChild(sl.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const fp={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(a){a&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=a)},_createRipple:function(){var a=mo._createRipple();return a.id="ink",a.setAttribute("center",""),a.classList.add("circle"),a}},pp=[tl,Qa,mo,fp];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ni({is:"paper-icon-button",_template:Me`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[pp],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(a,i){var e=this.getAttribute("aria-label");(!e||i==e)&&this.setAttribute("aria-label",a)}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/ni({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ct({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(a){return this.name+":"+a},this)},applyIcon:function(a,i){this.removeIcon(a);var e=this._cloneIcon(i,this.rtlMirroring&&this._targetIsRTL(a));if(e){var t=$e(a.root||a);return t.insertBefore(e,t.childNodes[0]),a._svgIcon=e}return null},removeIcon:function(a){a._svgIcon&&($e(a.root||a).removeChild(a._svgIcon),a._svgIcon=null)},_targetIsRTL:function(a){if(this.__targetIsRTL==null)if(this.useGlobalRtlAttribute){var i=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=i.getAttribute("dir")==="rtl"}else a&&a.nodeType!==Node.ELEMENT_NODE&&(a=a.host),this.__targetIsRTL=a&&window.getComputedStyle(a).direction==="rtl";return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var a=Object.create(null);return $e(this).querySelectorAll("[id]").forEach(function(i){a[i.id]=i}),a},_cloneIcon:function(a,i){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[a],this.size,i)},_prepareSvgClone:function(a,i,e){if(a){var t=a.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=t.getAttribute("viewBox")||"0 0 "+i+" "+i,h="pointer-events: none; display: block; width: 100%; height: 100%;";return e&&t.hasAttribute("mirror-in-rtl")&&(h+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",o),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=h,n.appendChild(t).removeAttribute("id"),n}return null}});class mp extends gc{static get styles(){return Ie`
        :host {
            display: block;
            font-size: 14px;
        }

        div.paginator-page-container {
            display: block;
            @apply --layout-horizontal;
            @apply --layout-center;
            @apply --layout-center-justified;
            @apply --layout-center-center;
        }

        :host paper-button {
            margin: 0px 4px;
            padding: 2px 8px;
            /*margin: 0px;*/
            position: relative;
            min-width: 30px;

        }

        :host paper-button {
            color: var(--primary-text-color);
            color: var(--lumo-body-text-color);
            color: var(--material-body-text-color);
            background-color: transparent;
            border-radius: 16px;
        }

        :host span {
            margin: 0px 4px;
        }
    `}static get properties(){return{limit:{type:Number,reflect:!0,attribute:!0},total:{type:Number,reflect:!0,attribute:!0},page:{type:Number,reflect:!0,attribute:!0},size:{type:Number,reflect:!0,attribute:!0},pages:{type:Number},hasBefore:{type:Boolean},hasNext:{type:Boolean},hasPages:{type:Boolean},items:{type:Array},pageText:{type:String},ofText:{type:String}}}constructor(){super(),this.limit=2,this.page=1,this.size=2,this.items={},this.total=20,this.hasBefore=this.computeBefore(this.page,this.pages),this.hasNext=this.computeNext(this.page,this.pages),this.hasPages=this.computeHasPage(this.items.size,this.total),this.pageText="Page",this.ofText="of"}set page(i){let e=this._page;this._page=i,this.requestUpdate("page",e),this.onPageChange(this._page,e),this.observePageCount(this._page,this.limit,this.total),this.hasBefore=this.computeBefore(i,this.pages),this.hasNext=this.computeNext(i,this.pages),this.updateNavigationButtonsState()}get page(){return this._page}set limit(i){let e=this._limit;this._limit=i,this.requestUpdate("limit",e),this.observePageCount(this.page,this._limit,this.total)}get limit(){return this._limit}set total(i){let e=this._total;this._total=i,this.requestUpdate("total",e),this.observePageCount(this.page,this.limit,this._total)}get total(){return this._total}set size(i){let e=this._size;this._size=i,this.requestUpdate("size",e)}get size(){return this._size}render(){return Ln`
        <iron-iconset-svg name="pagination-icons" size="24">
            <svg>
                <defs>
                    <g id="fast-forward">
                        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
                    </g>
                    <g id="fast-rewind">
                        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
                    </g>
                    <g id="navigate-before">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </g>
                    <g id="navigate-next">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </g>
                </defs>
            </svg>
        </iron-iconset-svg>
        <div class="paginator-page-container" ?hidden="${!this.hasPage}">
            <paper-icon-button id="fastRewindId" icon="pagination-icons:fast-rewind" @click="${i=>this.onBegin()}"></paper-icon-button>
            <paper-icon-button id="navigateBeforeId" icon="pagination-icons:navigate-before" @click="${i=>this.onBefore()}"></paper-icon-button>
            <span>${this.pageText}</span>
            ${this.items.map(i=>Ln`
                <paper-button
                        raised="${!this.isCurrent(i,this.page)}"
                        ?disabled="${this.isCurrent(i,this.page)}"
                        @click="${e=>this.onChange(i)}">
                    ${i}
                </paper-button>
            `)}

            <span>${this.ofText}</span>
            ${this.pages}
            <paper-icon-button id="navigateNextId" icon="pagination-icons:navigate-next" @click=${i=>this.onNext()}></paper-icon-button>
            <paper-icon-button id="fastForwardId" icon="pagination-icons:fast-forward" @click=${i=>this.onEnd()}></paper-icon-button>
        </div>
        `}updated(i){this.updateNavigationButtonsState()}computeBefore(i,e){return i>1}computeNext(i,e){return i<e}computeHasPage(i,e){return i<e}observePageCount(i,e,t){if(e&&t&&(this.pages=parseInt(Math.ceil(parseFloat(t)/parseFloat(e)))),i&&e&&t){let o=[],h=this._firstIndex(i,this.size),s=this._lastIndex(i,this.size);for(var n=h;n<=s;n++)o.push(n);this.items=o}}onPageChange(i,e){this.dispatchEvent(new CustomEvent("page-change",{detail:{newPage:i,oldPage:e}}))}updateNavigationButtonsState(){if(this.shadowRoot){let i=this.shadowRoot.getElementById("fastRewindId"),e=this.shadowRoot.getElementById("navigateBeforeId"),t=this.shadowRoot.getElementById("navigateNextId"),n=this.shadowRoot.getElementById("fastForwardId");i&&e&&t&&n&&(this.hasNext?(t.removeAttribute("disabled"),n.removeAttribute("disabled")):(t.setAttribute("disabled","disabled"),n.setAttribute("disabled","disabled")),this.hasBefore?(i.removeAttribute("disabled"),e.removeAttribute("disabled")):(i.setAttribute("disabled","disabled"),e.setAttribute("disabled","disabled")))}}_firstIndex(i,e){let t=i-e;return t<1?1:t}_lastIndex(i,e){let t=parseInt(i)+parseInt(e);return t>this.pages?this.pages:t}isCurrent(i,e){return i===e}onChange(i){this.page=i,this.requestUpdate()}onBefore(i){this.page=this.page>1?this.page-1:1}onNext(i){this.page=this.page<this.pages?parseInt(this.page)+1:this.pages}onBegin(i){this.page=1}onEnd(i){this.page=this.pages}}customElements.define("lit-pagination",mp);/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(a,i,e,t){function n(E,P,H){return setTimeout(m(E,H),P)}function o(E,P,H){return Array.isArray(E)?(h(E,H[P],H),!0):!1}function h(E,P,H){var X;if(E)if(E.forEach)E.forEach(P,H);else if(E.length!==t)for(X=0;X<E.length;)P.call(H,E[X],X,E),X++;else for(X in E)E.hasOwnProperty(X)&&P.call(H,E[X],X,E)}function s(E,P,H){var X="DEPRECATED METHOD: "+P+`
`+H+` AT 
`;return function(){var ne=new Error("get-stack-trace"),he=ne&&ne.stack?ne.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",pe=a.console&&(a.console.warn||a.console.log);return pe&&pe.call(a.console,X,he),E.apply(this,arguments)}}function d(E,P,H){var X,ne=P.prototype;X=E.prototype=Object.create(ne),X.constructor=E,X._super=ne,H&&Te(X,H)}function m(E,P){return function(){return E.apply(P,arguments)}}function c(E,P){return typeof E==wt?E.apply(P&&P[0]||t,P):E}function l(E,P){return E===t?P:E}function u(E,P,H){h(C(P),function(X){E.addEventListener(X,H,!1)})}function p(E,P,H){h(C(P),function(X){E.removeEventListener(X,H,!1)})}function _(E,P){for(;E;){if(E==P)return!0;E=E.parentNode}return!1}function y(E,P){return E.indexOf(P)>-1}function C(E){return E.trim().split(/\s+/g)}function x(E,P,H){if(E.indexOf&&!H)return E.indexOf(P);for(var X=0;X<E.length;){if(H&&E[X][H]==P||!H&&E[X]===P)return X;X++}return-1}function w(E){return Array.prototype.slice.call(E,0)}function A(E,P,H){for(var X=[],ne=[],he=0;he<E.length;){var pe=E[he][P];x(ne,pe)<0&&X.push(E[he]),ne[he]=pe,he++}return X=X.sort(function(ze,ht){return ze[P]>ht[P]}),X}function I(E,P){for(var H,X,ne=P[0].toUpperCase()+P.slice(1),he=0;he<oi.length;){if(H=oi[he],X=H?H+ne:P,X in E)return X;he++}return t}function D(){return It++}function z(E){var P=E.ownerDocument||E;return P.defaultView||P.parentWindow||a}function V(E,P){var H=this;this.manager=E,this.callback=P,this.element=E.element,this.target=E.options.inputTarget,this.domHandler=function(X){c(E.options.enable,[E])&&H.handler(X)},this.init()}function T(E){var P=E.options.inputClass;return new(P||(nn?B:Ii?te:si?ae:N))(E,M)}function M(E,P,H){var X=H.pointers.length,ne=H.changedPointers.length,he=P&Ke&&X-ne===0,pe=P&(Fe|ge)&&X-ne===0;H.isFirst=!!he,H.isFinal=!!pe,he&&(E.session={}),H.eventType=P,F(E,H),E.emit("hammer.input",H),E.recognize(H),E.session.prevInput=H}function F(E,P){var H=E.session,X=P.pointers,ne=X.length;H.firstInput||(H.firstInput=U(P)),ne>1&&!H.firstMultiple?H.firstMultiple=U(P):ne===1&&(H.firstMultiple=!1);var he=H.firstInput,pe=H.firstMultiple,ze=pe?pe.center:he.center,ht=P.center=$(X);P.timeStamp=St(),P.deltaTime=P.timeStamp-he.timeStamp,P.angle=Q(ze,ht),P.distance=J(ze,ht),L(H,P),P.offsetDirection=G(P.deltaX,P.deltaY);var ot=Y(P.deltaTime,P.deltaX,P.deltaY);P.overallVelocityX=ot.x,P.overallVelocityY=ot.y,P.overallVelocity=dt(ot.x)>dt(ot.y)?ot.x:ot.y,P.scale=pe?O(pe.pointers,X):1,P.rotation=pe?oe(pe.pointers,X):0,P.maxPointers=H.prevInput?P.pointers.length>H.prevInput.maxPointers?P.pointers.length:H.prevInput.maxPointers:P.pointers.length,W(H,P);var _t=E.element;_(P.srcEvent.target,_t)&&(_t=P.srcEvent.target),P.target=_t}function L(E,P){var H=P.center,X=E.offsetDelta||{},ne=E.prevDelta||{},he=E.prevInput||{};P.eventType!==Ke&&he.eventType!==Fe||(ne=E.prevDelta={x:he.deltaX||0,y:he.deltaY||0},X=E.offsetDelta={x:H.x,y:H.y}),P.deltaX=ne.x+(H.x-X.x),P.deltaY=ne.y+(H.y-X.y)}function W(E,P){var H,X,ne,he,pe=E.lastInterval||P,ze=P.timeStamp-pe.timeStamp;if(P.eventType!=ge&&(ze>on||pe.velocity===t)){var ht=P.deltaX-pe.deltaX,ot=P.deltaY-pe.deltaY,_t=Y(ze,ht,ot);X=_t.x,ne=_t.y,H=dt(_t.x)>dt(_t.y)?_t.x:_t.y,he=G(ht,ot),E.lastInterval=P}else H=pe.velocity,X=pe.velocityX,ne=pe.velocityY,he=pe.direction;P.velocity=H,P.velocityX=X,P.velocityY=ne,P.direction=he}function U(E){for(var P=[],H=0;H<E.pointers.length;)P[H]={clientX:xe(E.pointers[H].clientX),clientY:xe(E.pointers[H].clientY)},H++;return{timeStamp:St(),pointers:P,center:$(P),deltaX:E.deltaX,deltaY:E.deltaY}}function $(E){var P=E.length;if(P===1)return{x:xe(E[0].clientX),y:xe(E[0].clientY)};for(var H=0,X=0,ne=0;P>ne;)H+=E[ne].clientX,X+=E[ne].clientY,ne++;return{x:xe(H/P),y:xe(X/P)}}function Y(E,P,H){return{x:P/E||0,y:H/E||0}}function G(E,P){return E===P?At:dt(E)>=dt(P)?0>E?hi:Xe:0>P?nt:Je}function J(E,P,H){H||(H=kt);var X=P[H[0]]-E[H[0]],ne=P[H[1]]-E[H[1]];return Math.sqrt(X*X+ne*ne)}function Q(E,P,H){H||(H=kt);var X=P[H[0]]-E[H[0]],ne=P[H[1]]-E[H[1]];return 180*Math.atan2(ne,X)/Math.PI}function oe(E,P){return Q(P[1],P[0],Ai)+Q(E[1],E[0],Ai)}function O(E,P){return J(P[0],P[1],Ai)/J(E[0],E[1],Ai)}function N(){this.evEl=ci,this.evWin=ki,this.pressed=!1,V.apply(this,arguments)}function B(){this.evEl=Ot,this.evWin=ui,V.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function j(){this.evTarget=ln,this.evWin=dn,this.started=!1,V.apply(this,arguments)}function K(E,P){var H=w(E.touches),X=w(E.changedTouches);return P&(Fe|ge)&&(H=A(H.concat(X),"identifier")),[H,X]}function te(){this.evTarget=Ve,this.targetIds={},V.apply(this,arguments)}function ie(E,P){var H=w(E.touches),X=this.targetIds;if(P&(Ke|rt)&&H.length===1)return X[H[0].identifier]=!0,[H,H];var ne,he,pe=w(E.changedTouches),ze=[],ht=this.target;if(he=H.filter(function(ot){return _(ot.target,ht)}),P===Ke)for(ne=0;ne<he.length;)X[he[ne].identifier]=!0,ne++;for(ne=0;ne<pe.length;)X[pe[ne].identifier]&&ze.push(pe[ne]),P&(Fe|ge)&&delete X[pe[ne].identifier],ne++;return ze.length?[A(he.concat(ze),"identifier"),ze]:void 0}function ae(){V.apply(this,arguments);var E=m(this.handler,this);this.touch=new te(this.manager,E),this.mouse=new N(this.manager,E),this.primaryTouch=null,this.lastTouches=[]}function Z(E,P){E&Ke?(this.primaryTouch=P.changedPointers[0].identifier,re.call(this,P)):E&(Fe|ge)&&re.call(this,P)}function re(E){var P=E.changedPointers[0];if(P.identifier===this.primaryTouch){var H={x:P.clientX,y:P.clientY};this.lastTouches.push(H);var X=this.lastTouches,ne=function(){var he=X.indexOf(H);he>-1&&X.splice(he,1)};setTimeout(ne,Ei)}}function me(E){for(var P=E.srcEvent.clientX,H=E.srcEvent.clientY,X=0;X<this.lastTouches.length;X++){var ne=this.lastTouches[X],he=Math.abs(P-ne.x),pe=Math.abs(H-ne.y);if(qi>=he&&qi>=pe)return!0}return!1}function ue(E,P){this.manager=E,this.set(P)}function fe(E){if(y(E,Rt))return Rt;var P=y(E,Wt),H=y(E,$t);return P&&H?Rt:P||H?P?Wt:$t:y(E,Gi)?Gi:vr}function De(){if(!gr)return!1;var E={},P=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(H){E[H]=P?a.CSS.supports("touch-action",H):!0}),E}function ce(E){this.options=Te({},this.defaults,E||{}),this.id=D(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=Ti,this.simultaneous={},this.requireFail=[]}function ye(E){return E&fi?"cancel":E&Et?"end":E&Yt?"move":E&at?"start":""}function be(E){return E==Je?"down":E==nt?"up":E==hi?"left":E==Xe?"right":""}function Be(E,P){var H=P.manager;return H?H.get(E):E}function ve(){ce.apply(this,arguments)}function Re(){ve.apply(this,arguments),this.pX=null,this.pY=null}function qe(){ve.apply(this,arguments)}function Ye(){ce.apply(this,arguments),this._timer=null,this._input=null}function Pe(){ve.apply(this,arguments)}function le(){ve.apply(this,arguments)}function Ct(){ce.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function it(E,P){return P=P||{},P.recognizers=l(P.recognizers,it.defaults.preset),new ut(E,P)}function ut(E,P){this.options=Te({},it.defaults,P||{}),this.options.inputTarget=this.options.inputTarget||E,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=E,this.input=T(this),this.touchAction=new ue(this,this.options.touchAction),Dt(this,!0),h(this.options.recognizers,function(H){var X=this.add(new H[0](H[1]));H[2]&&X.recognizeWith(H[2]),H[3]&&X.requireFailure(H[3])},this)}function Dt(E,P){var H=E.element;if(H.style){var X;h(E.options.cssProps,function(ne,he){X=I(H.style,he),P?(E.oldCssProps[X]=H.style[X],H.style[X]=ne):H.style[X]=E.oldCssProps[X]||""}),P||(E.oldCssProps={})}}function Ht(E,P){var H=i.createEvent("Event");H.initEvent(E,!0,!0),H.gesture=P,P.target.dispatchEvent(H)}var Te,oi=["","webkit","Moz","MS","ms","o"],vt=i.createElement("div"),wt="function",xe=Math.round,dt=Math.abs,St=Date.now;Te=typeof Object.assign!="function"?function(E){if(E===t||E===null)throw new TypeError("Cannot convert undefined or null to object");for(var P=Object(E),H=1;H<arguments.length;H++){var X=arguments[H];if(X!==t&&X!==null)for(var ne in X)X.hasOwnProperty(ne)&&(P[ne]=X[ne])}return P}:Object.assign;var ft=s(function(E,P,H){for(var X=Object.keys(P),ne=0;ne<X.length;)(!H||H&&E[X[ne]]===t)&&(E[X[ne]]=P[X[ne]]),ne++;return E},"extend","Use `assign`."),Pt=s(function(E,P){return ft(E,P,!0)},"merge","Use `assign`."),It=1,rn=/mobile|tablet|ip(ad|hone|od)|android/i,si="ontouchstart"in a,nn=I(a,"PointerEvent")!==t,Ii=si&&rn.test(navigator.userAgent),ai="touch",li="pen",di="mouse",de="kinect",on=25,Ke=1,rt=2,Fe=4,ge=8,At=1,hi=2,Xe=4,nt=8,Je=16,ke=hi|Xe,je=nt|Je,pt=ke|je,kt=["x","y"],Ai=["clientX","clientY"];V.prototype={handler:function(){},init:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(z(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(z(this.element),this.evWin,this.domHandler)}};var sn={mousedown:Ke,mousemove:rt,mouseup:Fe},ci="mousedown",ki="mousemove mouseup";d(N,V,{handler:function(E){var P=sn[E.type];P&Ke&&E.button===0&&(this.pressed=!0),P&rt&&E.which!==1&&(P=Fe),this.pressed&&(P&Fe&&(this.pressed=!1),this.callback(this.manager,P,{pointers:[E],changedPointers:[E],pointerType:di,srcEvent:E}))}});var pr={pointerdown:Ke,pointermove:rt,pointerup:Fe,pointercancel:ge,pointerout:ge},an={2:ai,3:li,4:di,5:de},Ot="pointerdown",ui="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Ot="MSPointerDown",ui="MSPointerMove MSPointerUp MSPointerCancel"),d(B,V,{handler:function(E){var P=this.store,H=!1,X=E.type.toLowerCase().replace("ms",""),ne=pr[X],he=an[E.pointerType]||E.pointerType,pe=he==ai,ze=x(P,E.pointerId,"pointerId");ne&Ke&&(E.button===0||pe)?0>ze&&(P.push(E),ze=P.length-1):ne&(Fe|ge)&&(H=!0),0>ze||(P[ze]=E,this.callback(this.manager,ne,{pointers:P,changedPointers:[E],pointerType:he,srcEvent:E}),H&&P.splice(ze,1))}});var mr={touchstart:Ke,touchmove:rt,touchend:Fe,touchcancel:ge},ln="touchstart",dn="touchstart touchmove touchend touchcancel";d(j,V,{handler:function(E){var P=mr[E.type];if(P===Ke&&(this.started=!0),this.started){var H=K.call(this,E,P);P&(Fe|ge)&&H[0].length-H[1].length===0&&(this.started=!1),this.callback(this.manager,P,{pointers:H[0],changedPointers:H[1],pointerType:ai,srcEvent:E})}}});var hn={touchstart:Ke,touchmove:rt,touchend:Fe,touchcancel:ge},Ve="touchstart touchmove touchend touchcancel";d(te,V,{handler:function(E){var P=hn[E.type],H=ie.call(this,E,P);H&&this.callback(this.manager,P,{pointers:H[0],changedPointers:H[1],pointerType:ai,srcEvent:E})}});var Ei=2500,qi=25;d(ae,V,{handler:function(E,P,H){var X=H.pointerType==ai,ne=H.pointerType==di;if(!(ne&&H.sourceCapabilities&&H.sourceCapabilities.firesTouchEvents)){if(X)Z.call(this,P,H);else if(ne&&me.call(this,H))return;this.callback(E,P,H)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var _r=I(vt.style,"touchAction"),gr=_r!==t,ji="compute",vr="auto",Gi="manipulation",Rt="none",Wt="pan-x",$t="pan-y",Mi=De();ue.prototype={set:function(E){E==ji&&(E=this.compute()),gr&&this.manager.element.style&&Mi[E]&&(this.manager.element.style[_r]=E),this.actions=E.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var E=[];return h(this.manager.recognizers,function(P){c(P.options.enable,[P])&&(E=E.concat(P.getTouchAction()))}),fe(E.join(" "))},preventDefaults:function(E){var P=E.srcEvent,H=E.offsetDirection;if(this.manager.session.prevented)return void P.preventDefault();var X=this.actions,ne=y(X,Rt)&&!Mi[Rt],he=y(X,$t)&&!Mi[$t],pe=y(X,Wt)&&!Mi[Wt];if(ne){var ze=E.pointers.length===1,ht=E.distance<2,ot=E.deltaTime<250;if(ze&&ht&&ot)return}return pe&&he?void 0:ne||he&&H&ke||pe&&H&je?this.preventSrc(P):void 0},preventSrc:function(E){this.manager.session.prevented=!0,E.preventDefault()}};var Ti=1,at=2,Yt=4,Et=8,mt=Et,fi=16,Qe=32;ce.prototype={defaults:{},set:function(E){return Te(this.options,E),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(E){if(o(E,"recognizeWith",this))return this;var P=this.simultaneous;return E=Be(E,this),P[E.id]||(P[E.id]=E,E.recognizeWith(this)),this},dropRecognizeWith:function(E){return o(E,"dropRecognizeWith",this)?this:(E=Be(E,this),delete this.simultaneous[E.id],this)},requireFailure:function(E){if(o(E,"requireFailure",this))return this;var P=this.requireFail;return E=Be(E,this),x(P,E)===-1&&(P.push(E),E.requireFailure(this)),this},dropRequireFailure:function(E){if(o(E,"dropRequireFailure",this))return this;E=Be(E,this);var P=x(this.requireFail,E);return P>-1&&this.requireFail.splice(P,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(E){return!!this.simultaneous[E.id]},emit:function(E){function P(ne){H.manager.emit(ne,E)}var H=this,X=this.state;Et>X&&P(H.options.event+ye(X)),P(H.options.event),E.additionalEvent&&P(E.additionalEvent),X>=Et&&P(H.options.event+ye(X))},tryEmit:function(E){return this.canEmit()?this.emit(E):void(this.state=Qe)},canEmit:function(){for(var E=0;E<this.requireFail.length;){if(!(this.requireFail[E].state&(Qe|Ti)))return!1;E++}return!0},recognize:function(E){var P=Te({},E);return c(this.options.enable,[this,P])?(this.state&(mt|fi|Qe)&&(this.state=Ti),this.state=this.process(P),void(this.state&(at|Yt|Et|fi)&&this.tryEmit(P))):(this.reset(),void(this.state=Qe))},process:function(E){},getTouchAction:function(){},reset:function(){}},d(ve,ce,{defaults:{pointers:1},attrTest:function(E){var P=this.options.pointers;return P===0||E.pointers.length===P},process:function(E){var P=this.state,H=E.eventType,X=P&(at|Yt),ne=this.attrTest(E);return X&&(H&ge||!ne)?P|fi:X||ne?H&Fe?P|Et:P&at?P|Yt:at:Qe}}),d(Re,ve,{defaults:{event:"pan",threshold:10,pointers:1,direction:pt},getTouchAction:function(){var E=this.options.direction,P=[];return E&ke&&P.push($t),E&je&&P.push(Wt),P},directionTest:function(E){var P=this.options,H=!0,X=E.distance,ne=E.direction,he=E.deltaX,pe=E.deltaY;return ne&P.direction||(P.direction&ke?(ne=he===0?At:0>he?hi:Xe,H=he!=this.pX,X=Math.abs(E.deltaX)):(ne=pe===0?At:0>pe?nt:Je,H=pe!=this.pY,X=Math.abs(E.deltaY))),E.direction=ne,H&&X>P.threshold&&ne&P.direction},attrTest:function(E){return ve.prototype.attrTest.call(this,E)&&(this.state&at||!(this.state&at)&&this.directionTest(E))},emit:function(E){this.pX=E.deltaX,this.pY=E.deltaY;var P=be(E.direction);P&&(E.additionalEvent=this.options.event+P),this._super.emit.call(this,E)}}),d(qe,ve,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.scale-1)>this.options.threshold||this.state&at)},emit:function(E){if(E.scale!==1){var P=E.scale<1?"in":"out";E.additionalEvent=this.options.event+P}this._super.emit.call(this,E)}}),d(Ye,ce,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[vr]},process:function(E){var P=this.options,H=E.pointers.length===P.pointers,X=E.distance<P.threshold,ne=E.deltaTime>P.time;if(this._input=E,!X||!H||E.eventType&(Fe|ge)&&!ne)this.reset();else if(E.eventType&Ke)this.reset(),this._timer=n(function(){this.state=mt,this.tryEmit()},P.time,this);else if(E.eventType&Fe)return mt;return Qe},reset:function(){clearTimeout(this._timer)},emit:function(E){this.state===mt&&(E&&E.eventType&Fe?this.manager.emit(this.options.event+"up",E):(this._input.timeStamp=St(),this.manager.emit(this.options.event,this._input)))}}),d(Pe,ve,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Rt]},attrTest:function(E){return this._super.attrTest.call(this,E)&&(Math.abs(E.rotation)>this.options.threshold||this.state&at)}}),d(le,ve,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:ke|je,pointers:1},getTouchAction:function(){return Re.prototype.getTouchAction.call(this)},attrTest:function(E){var P,H=this.options.direction;return H&(ke|je)?P=E.overallVelocity:H&ke?P=E.overallVelocityX:H&je&&(P=E.overallVelocityY),this._super.attrTest.call(this,E)&&H&E.offsetDirection&&E.distance>this.options.threshold&&E.maxPointers==this.options.pointers&&dt(P)>this.options.velocity&&E.eventType&Fe},emit:function(E){var P=be(E.offsetDirection);P&&this.manager.emit(this.options.event+P,E),this.manager.emit(this.options.event,E)}}),d(Ct,ce,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Gi]},process:function(E){var P=this.options,H=E.pointers.length===P.pointers,X=E.distance<P.threshold,ne=E.deltaTime<P.time;if(this.reset(),E.eventType&Ke&&this.count===0)return this.failTimeout();if(X&&ne&&H){if(E.eventType!=Fe)return this.failTimeout();var he=this.pTime?E.timeStamp-this.pTime<P.interval:!0,pe=!this.pCenter||J(this.pCenter,E.center)<P.posThreshold;this.pTime=E.timeStamp,this.pCenter=E.center,pe&&he?this.count+=1:this.count=1,this._input=E;var ze=this.count%P.taps;if(ze===0)return this.hasRequireFailures()?(this._timer=n(function(){this.state=mt,this.tryEmit()},P.interval,this),at):mt}return Qe},failTimeout:function(){return this._timer=n(function(){this.state=Qe},this.options.interval,this),Qe},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==mt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),it.VERSION="2.0.8",it.defaults={domEvents:!1,touchAction:ji,enable:!0,inputTarget:null,inputClass:null,preset:[[Pe,{enable:!1}],[qe,{enable:!1},["rotate"]],[le,{direction:ke}],[Re,{direction:ke},["swipe"]],[Ct],[Ct,{event:"doubletap",taps:2},["tap"]],[Ye]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Di=1,Ki=2;ut.prototype={set:function(E){return Te(this.options,E),E.touchAction&&this.touchAction.update(),E.inputTarget&&(this.input.destroy(),this.input.target=E.inputTarget,this.input.init()),this},stop:function(E){this.session.stopped=E?Ki:Di},recognize:function(E){var P=this.session;if(!P.stopped){this.touchAction.preventDefaults(E);var H,X=this.recognizers,ne=P.curRecognizer;(!ne||ne&&ne.state&mt)&&(ne=P.curRecognizer=null);for(var he=0;he<X.length;)H=X[he],P.stopped===Ki||ne&&H!=ne&&!H.canRecognizeWith(ne)?H.reset():H.recognize(E),!ne&&H.state&(at|Yt|Et)&&(ne=P.curRecognizer=H),he++}},get:function(E){if(E instanceof ce)return E;for(var P=this.recognizers,H=0;H<P.length;H++)if(P[H].options.event==E)return P[H];return null},add:function(E){if(o(E,"add",this))return this;var P=this.get(E.options.event);return P&&this.remove(P),this.recognizers.push(E),E.manager=this,this.touchAction.update(),E},remove:function(E){if(o(E,"remove",this))return this;if(E=this.get(E)){var P=this.recognizers,H=x(P,E);H!==-1&&(P.splice(H,1),this.touchAction.update())}return this},on:function(E,P){if(E!==t&&P!==t){var H=this.handlers;return h(C(E),function(X){H[X]=H[X]||[],H[X].push(P)}),this}},off:function(E,P){if(E!==t){var H=this.handlers;return h(C(E),function(X){P?H[X]&&H[X].splice(x(H[X],P),1):delete H[X]}),this}},emit:function(E,P){this.options.domEvents&&Ht(E,P);var H=this.handlers[E]&&this.handlers[E].slice();if(H&&H.length){P.type=E,P.preventDefault=function(){P.srcEvent.preventDefault()};for(var X=0;X<H.length;)H[X](P),X++}},destroy:function(){this.element&&Dt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},Te(it,{INPUT_START:Ke,INPUT_MOVE:rt,INPUT_END:Fe,INPUT_CANCEL:ge,STATE_POSSIBLE:Ti,STATE_BEGAN:at,STATE_CHANGED:Yt,STATE_ENDED:Et,STATE_RECOGNIZED:mt,STATE_CANCELLED:fi,STATE_FAILED:Qe,DIRECTION_NONE:At,DIRECTION_LEFT:hi,DIRECTION_RIGHT:Xe,DIRECTION_UP:nt,DIRECTION_DOWN:Je,DIRECTION_HORIZONTAL:ke,DIRECTION_VERTICAL:je,DIRECTION_ALL:pt,Manager:ut,Input:V,TouchAction:ue,TouchInput:te,MouseInput:N,PointerEventInput:B,TouchMouseInput:ae,SingleTouchInput:j,Recognizer:ce,AttrRecognizer:ve,Tap:Ct,Pan:Re,Swipe:le,Pinch:qe,Rotate:Pe,Press:Ye,on:u,off:p,each:h,merge:Pt,extend:ft,assign:Te,inherit:d,bindFn:m,prefixed:I});var pi=typeof a<"u"?a:typeof self<"u"?self:{};pi.Hammer=it,typeof define=="function"&&define.amd?define(function(){return it}):typeof xt<"u"&&xt.exports?xt.exports=it:a[e]=it})(window,document,"Hammer");//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a,i){typeof _o=="object"&&typeof xt<"u"?xt.exports=i():typeof define=="function"&&define.amd?define(i):a.moment=i()})(window,function(){var a;function i(){return a.apply(null,arguments)}function e(f){a=f}function t(f){return f instanceof Array||Object.prototype.toString.call(f)==="[object Array]"}function n(f){return f!=null&&Object.prototype.toString.call(f)==="[object Object]"}function o(f){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(f).length===0;var v;for(v in f)if(f.hasOwnProperty(v))return!1;return!0}function h(f){return f===void 0}function s(f){return typeof f=="number"||Object.prototype.toString.call(f)==="[object Number]"}function d(f){return f instanceof Date||Object.prototype.toString.call(f)==="[object Date]"}function m(f,v){var S=[],k;for(k=0;k<f.length;++k)S.push(v(f[k],k));return S}function c(f,v){return Object.prototype.hasOwnProperty.call(f,v)}function l(f,v){for(var S in v)c(v,S)&&(f[S]=v[S]);return c(v,"toString")&&(f.toString=v.toString),c(v,"valueOf")&&(f.valueOf=v.valueOf),f}function u(f,v,S,k){return Io(f,v,S,k,!0).utc()}function p(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function _(f){return f._pf==null&&(f._pf=p()),f._pf}var y;Array.prototype.some?y=Array.prototype.some:y=function(f){for(var v=Object(this),S=v.length>>>0,k=0;k<S;k++)if(k in v&&f.call(this,v[k],k,v))return!0;return!1};function C(f){if(f._isValid==null){var v=_(f),S=y.call(v.parsedDateParts,function(R){return R!=null}),k=!isNaN(f._d.getTime())&&v.overflow<0&&!v.empty&&!v.invalidMonth&&!v.invalidWeekday&&!v.weekdayMismatch&&!v.nullInput&&!v.invalidFormat&&!v.userInvalidated&&(!v.meridiem||v.meridiem&&S);if(f._strict&&(k=k&&v.charsLeftOver===0&&v.unusedTokens.length===0&&v.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(f))f._isValid=k;else return k}return f._isValid}function x(f){var v=u(NaN);return f!=null?l(_(v),f):_(v).userInvalidated=!0,v}var w=i.momentProperties=[];function A(f,v){var S,k,R;if(h(v._isAMomentObject)||(f._isAMomentObject=v._isAMomentObject),h(v._i)||(f._i=v._i),h(v._f)||(f._f=v._f),h(v._l)||(f._l=v._l),h(v._strict)||(f._strict=v._strict),h(v._tzm)||(f._tzm=v._tzm),h(v._isUTC)||(f._isUTC=v._isUTC),h(v._offset)||(f._offset=v._offset),h(v._pf)||(f._pf=_(v)),h(v._locale)||(f._locale=v._locale),w.length>0)for(S=0;S<w.length;S++)k=w[S],R=v[k],h(R)||(f[k]=R);return f}var I=!1;function D(f){A(this,f),this._d=new Date(f._d!=null?f._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),I===!1&&(I=!0,i.updateOffset(this),I=!1)}function z(f){return f instanceof D||f!=null&&f._isAMomentObject!=null}function V(f){return f<0?Math.ceil(f)||0:Math.floor(f)}function T(f){var v=+f,S=0;return v!==0&&isFinite(v)&&(S=V(v)),S}function M(f,v,S){var k=Math.min(f.length,v.length),R=Math.abs(f.length-v.length),q=0,ee;for(ee=0;ee<k;ee++)(S&&f[ee]!==v[ee]||!S&&T(f[ee])!==T(v[ee]))&&q++;return q+R}function F(f){i.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+f)}function L(f,v){var S=!0;return l(function(){if(i.deprecationHandler!=null&&i.deprecationHandler(null,f),S){for(var k=[],R,q=0;q<arguments.length;q++){if(R="",typeof arguments[q]=="object"){R+=`
[`+q+"] ";for(var ee in arguments[0])R+=ee+": "+arguments[0][ee]+", ";R=R.slice(0,-2)}else R=arguments[q];k.push(R)}F(f+`
Arguments: `+Array.prototype.slice.call(k).join("")+`
`+new Error().stack),S=!1}return v.apply(this,arguments)},v)}var W={};function U(f,v){i.deprecationHandler!=null&&i.deprecationHandler(f,v),W[f]||(F(v),W[f]=!0)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null;function $(f){return f instanceof Function||Object.prototype.toString.call(f)==="[object Function]"}function Y(f){var v,S;for(S in f)v=f[S],$(v)?this[S]=v:this["_"+S]=v;this._config=f,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function G(f,v){var S=l({},f),k;for(k in v)c(v,k)&&(n(f[k])&&n(v[k])?(S[k]={},l(S[k],f[k]),l(S[k],v[k])):v[k]!=null?S[k]=v[k]:delete S[k]);for(k in f)c(f,k)&&!c(v,k)&&n(f[k])&&(S[k]=l({},S[k]));return S}function J(f){f!=null&&this.set(f)}var Q;Object.keys?Q=Object.keys:Q=function(f){var v,S=[];for(v in f)c(f,v)&&S.push(v);return S};var oe={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function O(f,v,S){var k=this._calendar[f]||this._calendar.sameElse;return $(k)?k.call(v,S):k}var N={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function B(f){var v=this._longDateFormat[f],S=this._longDateFormat[f.toUpperCase()];return v||!S?v:(this._longDateFormat[f]=S.replace(/MMMM|MM|DD|dddd/g,function(k){return k.slice(1)}),this._longDateFormat[f])}var j="Invalid date";function K(){return this._invalidDate}var te="%d",ie=/\d{1,2}/;function ae(f){return this._ordinal.replace("%d",f)}var Z={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function re(f,v,S,k){var R=this._relativeTime[S];return $(R)?R(f,v,S,k):R.replace(/%d/i,f)}function me(f,v){var S=this._relativeTime[f>0?"future":"past"];return $(S)?S(v):S.replace(/%s/i,v)}var ue={};function fe(f,v){var S=f.toLowerCase();ue[S]=ue[S+"s"]=ue[v]=f}function De(f){return typeof f=="string"?ue[f]||ue[f.toLowerCase()]:void 0}function ce(f){var v={},S,k;for(k in f)c(f,k)&&(S=De(k),S&&(v[S]=f[k]));return v}var ye={};function be(f,v){ye[f]=v}function Be(f){var v=[];for(var S in f)v.push({unit:S,priority:ye[S]});return v.sort(function(k,R){return k.priority-R.priority}),v}function ve(f,v,S){var k=""+Math.abs(f),R=v-k.length,q=f>=0;return(q?S?"+":"":"-")+Math.pow(10,Math.max(0,R)).toString().substr(1)+k}var Re=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qe=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ye={},Pe={};function le(f,v,S,k){var R=k;typeof k=="string"&&(R=function(){return this[k]()}),f&&(Pe[f]=R),v&&(Pe[v[0]]=function(){return ve(R.apply(this,arguments),v[1],v[2])}),S&&(Pe[S]=function(){return this.localeData().ordinal(R.apply(this,arguments),f)})}function Ct(f){return f.match(/\[[\s\S]/)?f.replace(/^\[|\]$/g,""):f.replace(/\\/g,"")}function it(f){var v=f.match(Re),S,k;for(S=0,k=v.length;S<k;S++)Pe[v[S]]?v[S]=Pe[v[S]]:v[S]=Ct(v[S]);return function(R){var q="",ee;for(ee=0;ee<k;ee++)q+=$(v[ee])?v[ee].call(R,f):v[ee];return q}}function ut(f,v){return f.isValid()?(v=Dt(v,f.localeData()),Ye[v]=Ye[v]||it(v),Ye[v](f)):f.localeData().invalidDate()}function Dt(f,v){var S=5;function k(R){return v.longDateFormat(R)||R}for(qe.lastIndex=0;S>=0&&qe.test(f);)f=f.replace(qe,k),qe.lastIndex=0,S-=1;return f}var Ht=/\d/,Te=/\d\d/,oi=/\d{3}/,vt=/\d{4}/,wt=/[+-]?\d{6}/,xe=/\d\d?/,dt=/\d\d\d\d?/,St=/\d\d\d\d\d\d?/,ft=/\d{1,3}/,Pt=/\d{1,4}/,It=/[+-]?\d{1,6}/,rn=/\d+/,si=/[+-]?\d+/,nn=/Z|[+-]\d\d:?\d\d/gi,Ii=/Z|[+-]\d\d(?::?\d\d)?/gi,ai=/[+-]?\d+(\.\d{1,3})?/,li=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,di={};function de(f,v,S){di[f]=$(v)?v:function(k,R){return k&&S?S:v}}function on(f,v){return c(di,f)?di[f](v._strict,v._locale):new RegExp(Ke(f))}function Ke(f){return rt(f.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(v,S,k,R,q){return S||k||R||q}))}function rt(f){return f.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Fe={};function ge(f,v){var S,k=v;for(typeof f=="string"&&(f=[f]),s(v)&&(k=function(R,q){q[v]=T(R)}),S=0;S<f.length;S++)Fe[f[S]]=k}function At(f,v){ge(f,function(S,k,R,q){R._w=R._w||{},v(S,R._w,R,q)})}function hi(f,v,S){v!=null&&c(Fe,f)&&Fe[f](v,S._a,S,f)}var Xe=0,nt=1,Je=2,ke=3,je=4,pt=5,kt=6,Ai=7,sn=8;le("Y",0,0,function(){var f=this.year();return f<=9999?""+f:"+"+f}),le(0,["YY",2],0,function(){return this.year()%100}),le(0,["YYYY",4],0,"year"),le(0,["YYYYY",5],0,"year"),le(0,["YYYYYY",6,!0],0,"year"),fe("year","y"),be("year",1),de("Y",si),de("YY",xe,Te),de("YYYY",Pt,vt),de("YYYYY",It,wt),de("YYYYYY",It,wt),ge(["YYYYY","YYYYYY"],Xe),ge("YYYY",function(f,v){v[Xe]=f.length===2?i.parseTwoDigitYear(f):T(f)}),ge("YY",function(f,v){v[Xe]=i.parseTwoDigitYear(f)}),ge("Y",function(f,v){v[Xe]=parseInt(f,10)});function ci(f){return ki(f)?366:365}function ki(f){return f%4===0&&f%100!==0||f%400===0}i.parseTwoDigitYear=function(f){return T(f)+(T(f)>68?1900:2e3)};var pr=Ot("FullYear",!0);function an(){return ki(this.year())}function Ot(f,v){return function(S){return S!=null?(mr(this,f,S),i.updateOffset(this,v),this):ui(this,f)}}function ui(f,v){return f.isValid()?f._d["get"+(f._isUTC?"UTC":"")+v]():NaN}function mr(f,v,S){f.isValid()&&!isNaN(S)&&(v==="FullYear"&&ki(f.year())&&f.month()===1&&f.date()===29?f._d["set"+(f._isUTC?"UTC":"")+v](S,f.month(),Ei(S,f.month())):f._d["set"+(f._isUTC?"UTC":"")+v](S))}function ln(f){return f=De(f),$(this[f])?this[f]():this}function dn(f,v){if(typeof f=="object"){f=ce(f);for(var S=Be(f),k=0;k<S.length;k++)this[S[k].unit](f[S[k].unit])}else if(f=De(f),$(this[f]))return this[f](v);return this}function hn(f,v){return(f%v+v)%v}var Ve;Array.prototype.indexOf?Ve=Array.prototype.indexOf:Ve=function(f){var v;for(v=0;v<this.length;++v)if(this[v]===f)return v;return-1};function Ei(f,v){if(isNaN(f)||isNaN(v))return NaN;var S=hn(v,12);return f+=(v-S)/12,S===1?ki(f)?29:28:31-S%7%2}le("M",["MM",2],"Mo",function(){return this.month()+1}),le("MMM",0,0,function(f){return this.localeData().monthsShort(this,f)}),le("MMMM",0,0,function(f){return this.localeData().months(this,f)}),fe("month","M"),be("month",8),de("M",xe),de("MM",xe,Te),de("MMM",function(f,v){return v.monthsShortRegex(f)}),de("MMMM",function(f,v){return v.monthsRegex(f)}),ge(["M","MM"],function(f,v){v[nt]=T(f)-1}),ge(["MMM","MMMM"],function(f,v,S,k){var R=S._locale.monthsParse(f,k,S._strict);R!=null?v[nt]=R:_(S).invalidMonth=f});var qi=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,_r="January_February_March_April_May_June_July_August_September_October_November_December".split("_");function gr(f,v){return f?t(this._months)?this._months[f.month()]:this._months[(this._months.isFormat||qi).test(v)?"format":"standalone"][f.month()]:t(this._months)?this._months:this._months.standalone}var ji="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function vr(f,v){return f?t(this._monthsShort)?this._monthsShort[f.month()]:this._monthsShort[qi.test(v)?"format":"standalone"][f.month()]:t(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Gi(f,v,S){var k,R,q,ee=f.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],k=0;k<12;++k)q=u([2e3,k]),this._shortMonthsParse[k]=this.monthsShort(q,"").toLocaleLowerCase(),this._longMonthsParse[k]=this.months(q,"").toLocaleLowerCase();return S?v==="MMM"?(R=Ve.call(this._shortMonthsParse,ee),R!==-1?R:null):(R=Ve.call(this._longMonthsParse,ee),R!==-1?R:null):v==="MMM"?(R=Ve.call(this._shortMonthsParse,ee),R!==-1?R:(R=Ve.call(this._longMonthsParse,ee),R!==-1?R:null)):(R=Ve.call(this._longMonthsParse,ee),R!==-1?R:(R=Ve.call(this._shortMonthsParse,ee),R!==-1?R:null))}function Rt(f,v,S){var k,R,q;if(this._monthsParseExact)return Gi.call(this,f,v,S);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),k=0;k<12;k++){if(R=u([2e3,k]),S&&!this._longMonthsParse[k]&&(this._longMonthsParse[k]=new RegExp("^"+this.months(R,"").replace(".","")+"$","i"),this._shortMonthsParse[k]=new RegExp("^"+this.monthsShort(R,"").replace(".","")+"$","i")),!S&&!this._monthsParse[k]&&(q="^"+this.months(R,"")+"|^"+this.monthsShort(R,""),this._monthsParse[k]=new RegExp(q.replace(".",""),"i")),S&&v==="MMMM"&&this._longMonthsParse[k].test(f))return k;if(S&&v==="MMM"&&this._shortMonthsParse[k].test(f))return k;if(!S&&this._monthsParse[k].test(f))return k}}function Wt(f,v){var S;if(!f.isValid())return f;if(typeof v=="string"){if(/^\d+$/.test(v))v=T(v);else if(v=f.localeData().monthsParse(v),!s(v))return f}return S=Math.min(f.date(),Ei(f.year(),v)),f._d["set"+(f._isUTC?"UTC":"")+"Month"](v,S),f}function $t(f){return f!=null?(Wt(this,f),i.updateOffset(this,!0),this):ui(this,"Month")}function Mi(){return Ei(this.year(),this.month())}var Ti=li;function at(f){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),f?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Ti),this._monthsShortStrictRegex&&f?this._monthsShortStrictRegex:this._monthsShortRegex)}var Yt=li;function Et(f){return this._monthsParseExact?(c(this,"_monthsRegex")||mt.call(this),f?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Yt),this._monthsStrictRegex&&f?this._monthsStrictRegex:this._monthsRegex)}function mt(){function f(ee,_e){return _e.length-ee.length}var v=[],S=[],k=[],R,q;for(R=0;R<12;R++)q=u([2e3,R]),v.push(this.monthsShort(q,"")),S.push(this.months(q,"")),k.push(this.months(q,"")),k.push(this.monthsShort(q,""));for(v.sort(f),S.sort(f),k.sort(f),R=0;R<12;R++)v[R]=rt(v[R]),S[R]=rt(S[R]);for(R=0;R<24;R++)k[R]=rt(k[R]);this._monthsRegex=new RegExp("^("+k.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+S.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+v.join("|")+")","i")}function fi(f,v,S,k,R,q,ee){var _e=new Date(f,v,S,k,R,q,ee);return f<100&&f>=0&&isFinite(_e.getFullYear())&&_e.setFullYear(f),_e}function Qe(f){var v=new Date(Date.UTC.apply(null,arguments));return f<100&&f>=0&&isFinite(v.getUTCFullYear())&&v.setUTCFullYear(f),v}function Di(f,v,S){var k=7+v-S,R=(7+Qe(f,0,k).getUTCDay()-v)%7;return-R+k-1}function Ki(f,v,S,k,R){var q=(7+S-k)%7,ee=Di(f,k,R),_e=1+7*(v-1)+q+ee,Se,Ue;return _e<=0?(Se=f-1,Ue=ci(Se)+_e):_e>ci(f)?(Se=f+1,Ue=_e-ci(f)):(Se=f,Ue=_e),{year:Se,dayOfYear:Ue}}function pi(f,v,S){var k=Di(f.year(),v,S),R=Math.floor((f.dayOfYear()-k-1)/7)+1,q,ee;return R<1?(ee=f.year()-1,q=R+E(ee,v,S)):R>E(f.year(),v,S)?(q=R-E(f.year(),v,S),ee=f.year()+1):(ee=f.year(),q=R),{week:q,year:ee}}function E(f,v,S){var k=Di(f,v,S),R=Di(f+1,v,S);return(ci(f)-k+R)/7}le("w",["ww",2],"wo","week"),le("W",["WW",2],"Wo","isoWeek"),fe("week","w"),fe("isoWeek","W"),be("week",5),be("isoWeek",5),de("w",xe),de("ww",xe,Te),de("W",xe),de("WW",xe,Te),At(["w","ww","W","WW"],function(f,v,S,k){v[k.substr(0,1)]=T(f)});function P(f){return pi(f,this._week.dow,this._week.doy).week}var H={dow:0,doy:6};function X(){return this._week.dow}function ne(){return this._week.doy}function he(f){var v=this.localeData().week(this);return f==null?v:this.add((f-v)*7,"d")}function pe(f){var v=pi(this,1,4).week;return f==null?v:this.add((f-v)*7,"d")}le("d",0,"do","day"),le("dd",0,0,function(f){return this.localeData().weekdaysMin(this,f)}),le("ddd",0,0,function(f){return this.localeData().weekdaysShort(this,f)}),le("dddd",0,0,function(f){return this.localeData().weekdays(this,f)}),le("e",0,0,"weekday"),le("E",0,0,"isoWeekday"),fe("day","d"),fe("weekday","e"),fe("isoWeekday","E"),be("day",11),be("weekday",11),be("isoWeekday",11),de("d",xe),de("e",xe),de("E",xe),de("dd",function(f,v){return v.weekdaysMinRegex(f)}),de("ddd",function(f,v){return v.weekdaysShortRegex(f)}),de("dddd",function(f,v){return v.weekdaysRegex(f)}),At(["dd","ddd","dddd"],function(f,v,S,k){var R=S._locale.weekdaysParse(f,k,S._strict);R!=null?v.d=R:_(S).invalidWeekday=f}),At(["d","e","E"],function(f,v,S,k){v[k]=T(f)});function ze(f,v){return typeof f!="string"?f:isNaN(f)?(f=v.weekdaysParse(f),typeof f=="number"?f:null):parseInt(f,10)}function ht(f,v){return typeof f=="string"?v.weekdaysParse(f)%7||7:isNaN(f)?null:f}var ot="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");function _t(f,v){return f?t(this._weekdays)?this._weekdays[f.day()]:this._weekdays[this._weekdays.isFormat.test(v)?"format":"standalone"][f.day()]:t(this._weekdays)?this._weekdays:this._weekdays.standalone}var go="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function dl(f){return f?this._weekdaysShort[f.day()]:this._weekdaysShort}var hl="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function cl(f){return f?this._weekdaysMin[f.day()]:this._weekdaysMin}function ul(f,v,S){var k,R,q,ee=f.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],k=0;k<7;++k)q=u([2e3,1]).day(k),this._minWeekdaysParse[k]=this.weekdaysMin(q,"").toLocaleLowerCase(),this._shortWeekdaysParse[k]=this.weekdaysShort(q,"").toLocaleLowerCase(),this._weekdaysParse[k]=this.weekdays(q,"").toLocaleLowerCase();return S?v==="dddd"?(R=Ve.call(this._weekdaysParse,ee),R!==-1?R:null):v==="ddd"?(R=Ve.call(this._shortWeekdaysParse,ee),R!==-1?R:null):(R=Ve.call(this._minWeekdaysParse,ee),R!==-1?R:null):v==="dddd"?(R=Ve.call(this._weekdaysParse,ee),R!==-1||(R=Ve.call(this._shortWeekdaysParse,ee),R!==-1)?R:(R=Ve.call(this._minWeekdaysParse,ee),R!==-1?R:null)):v==="ddd"?(R=Ve.call(this._shortWeekdaysParse,ee),R!==-1||(R=Ve.call(this._weekdaysParse,ee),R!==-1)?R:(R=Ve.call(this._minWeekdaysParse,ee),R!==-1?R:null)):(R=Ve.call(this._minWeekdaysParse,ee),R!==-1||(R=Ve.call(this._weekdaysParse,ee),R!==-1)?R:(R=Ve.call(this._shortWeekdaysParse,ee),R!==-1?R:null))}function fl(f,v,S){var k,R,q;if(this._weekdaysParseExact)return ul.call(this,f,v,S);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),k=0;k<7;k++){if(R=u([2e3,1]).day(k),S&&!this._fullWeekdaysParse[k]&&(this._fullWeekdaysParse[k]=new RegExp("^"+this.weekdays(R,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[k]=new RegExp("^"+this.weekdaysShort(R,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[k]=new RegExp("^"+this.weekdaysMin(R,"").replace(".",".?")+"$","i")),this._weekdaysParse[k]||(q="^"+this.weekdays(R,"")+"|^"+this.weekdaysShort(R,"")+"|^"+this.weekdaysMin(R,""),this._weekdaysParse[k]=new RegExp(q.replace(".",""),"i")),S&&v==="dddd"&&this._fullWeekdaysParse[k].test(f))return k;if(S&&v==="ddd"&&this._shortWeekdaysParse[k].test(f))return k;if(S&&v==="dd"&&this._minWeekdaysParse[k].test(f))return k;if(!S&&this._weekdaysParse[k].test(f))return k}}function pl(f){if(!this.isValid())return f!=null?this:NaN;var v=this._isUTC?this._d.getUTCDay():this._d.getDay();return f!=null?(f=ze(f,this.localeData()),this.add(f-v,"d")):v}function ml(f){if(!this.isValid())return f!=null?this:NaN;var v=(this.day()+7-this.localeData()._week.dow)%7;return f==null?v:this.add(f-v,"d")}function _l(f){if(!this.isValid())return f!=null?this:NaN;if(f!=null){var v=ht(f,this.localeData());return this.day(this.day()%7?v:v-7)}else return this.day()||7}var gl=li;function vl(f){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||cn.call(this),f?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=gl),this._weekdaysStrictRegex&&f?this._weekdaysStrictRegex:this._weekdaysRegex)}var bl=li;function yl(f){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||cn.call(this),f?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=bl),this._weekdaysShortStrictRegex&&f?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}var xl=li;function Cl(f){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||cn.call(this),f?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=xl),this._weekdaysMinStrictRegex&&f?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function cn(){function f(gt,Ji){return Ji.length-gt.length}var v=[],S=[],k=[],R=[],q,ee,_e,Se,Ue;for(q=0;q<7;q++)ee=u([2e3,1]).day(q),_e=this.weekdaysMin(ee,""),Se=this.weekdaysShort(ee,""),Ue=this.weekdays(ee,""),v.push(_e),S.push(Se),k.push(Ue),R.push(_e),R.push(Se),R.push(Ue);for(v.sort(f),S.sort(f),k.sort(f),R.sort(f),q=0;q<7;q++)S[q]=rt(S[q]),k[q]=rt(k[q]),R[q]=rt(R[q]);this._weekdaysRegex=new RegExp("^("+R.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+S.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+v.join("|")+")","i")}function un(){return this.hours()%12||12}function wl(){return this.hours()||24}le("H",["HH",2],0,"hour"),le("h",["hh",2],0,un),le("k",["kk",2],0,wl),le("hmm",0,0,function(){return""+un.apply(this)+ve(this.minutes(),2)}),le("hmmss",0,0,function(){return""+un.apply(this)+ve(this.minutes(),2)+ve(this.seconds(),2)}),le("Hmm",0,0,function(){return""+this.hours()+ve(this.minutes(),2)}),le("Hmmss",0,0,function(){return""+this.hours()+ve(this.minutes(),2)+ve(this.seconds(),2)});function vo(f,v){le(f,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),v)})}vo("a",!0),vo("A",!1),fe("hour","h"),be("hour",13);function bo(f,v){return v._meridiemParse}de("a",bo),de("A",bo),de("H",xe),de("h",xe),de("k",xe),de("HH",xe,Te),de("hh",xe,Te),de("kk",xe,Te),de("hmm",dt),de("hmmss",St),de("Hmm",dt),de("Hmmss",St),ge(["H","HH"],ke),ge(["k","kk"],function(f,v,S){var k=T(f);v[ke]=k===24?0:k}),ge(["a","A"],function(f,v,S){S._isPm=S._locale.isPM(f),S._meridiem=f}),ge(["h","hh"],function(f,v,S){v[ke]=T(f),_(S).bigHour=!0}),ge("hmm",function(f,v,S){var k=f.length-2;v[ke]=T(f.substr(0,k)),v[je]=T(f.substr(k)),_(S).bigHour=!0}),ge("hmmss",function(f,v,S){var k=f.length-4,R=f.length-2;v[ke]=T(f.substr(0,k)),v[je]=T(f.substr(k,2)),v[pt]=T(f.substr(R)),_(S).bigHour=!0}),ge("Hmm",function(f,v,S){var k=f.length-2;v[ke]=T(f.substr(0,k)),v[je]=T(f.substr(k))}),ge("Hmmss",function(f,v,S){var k=f.length-4,R=f.length-2;v[ke]=T(f.substr(0,k)),v[je]=T(f.substr(k,2)),v[pt]=T(f.substr(R))});function Sl(f){return(f+"").toLowerCase().charAt(0)==="p"}var Il=/[ap]\.?m?\.?/i;function Al(f,v,S){return f>11?S?"pm":"PM":S?"am":"AM"}var kl=Ot("Hours",!0),yo={calendar:oe,longDateFormat:N,invalidDate:j,ordinal:te,dayOfMonthOrdinalParse:ie,relativeTime:Z,months:_r,monthsShort:ji,week:H,weekdays:ot,weekdaysMin:hl,weekdaysShort:go,meridiemParse:Il},Ge={},Xi={},br;function xo(f){return f&&f.toLowerCase().replace("_","-")}function El(f){for(var v=0,S,k,R,q;v<f.length;){for(q=xo(f[v]).split("-"),S=q.length,k=xo(f[v+1]),k=k?k.split("-"):null;S>0;){if(R=fn(q.slice(0,S).join("-")),R)return R;if(k&&k.length>=S&&M(q,k,!0)>=S-1)break;S--}v++}return null}function fn(f){var v=null;if(!Ge[f]&&typeof xt<"u"&&xt&&xt.exports)try{v=br._abbr;var S=require;S("./locale/"+f),Pi(v)}catch{}return Ge[f]}function Pi(f,v){var S;return f&&(h(v)?S=Ut(f):S=pn(f,v),S&&(br=S)),br._abbr}function pn(f,v){if(v!==null){var S=yo;if(v.abbr=f,Ge[f]!=null)U("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),S=Ge[f]._config;else if(v.parentLocale!=null)if(Ge[v.parentLocale]!=null)S=Ge[v.parentLocale]._config;else return Xi[v.parentLocale]||(Xi[v.parentLocale]=[]),Xi[v.parentLocale].push({name:f,config:v}),null;return Ge[f]=new J(G(S,v)),Xi[f]&&Xi[f].forEach(function(k){pn(k.name,k.config)}),Pi(f),Ge[f]}else return delete Ge[f],null}function Ml(f,v){if(v!=null){var S,k,R=yo;k=fn(f),k!=null&&(R=k._config),v=G(R,v),S=new J(v),S.parentLocale=Ge[f],Ge[f]=S,Pi(f)}else Ge[f]!=null&&(Ge[f].parentLocale!=null?Ge[f]=Ge[f].parentLocale:Ge[f]!=null&&delete Ge[f]);return Ge[f]}function Ut(f){var v;if(f&&f._locale&&f._locale._abbr&&(f=f._locale._abbr),!f)return br;if(!t(f)){if(v=fn(f),v)return v;f=[f]}return El(f)}function Tl(){return Q(Ge)}function mn(f){var v,S=f._a;return S&&_(f).overflow===-2&&(v=S[nt]<0||S[nt]>11?nt:S[Je]<1||S[Je]>Ei(S[Xe],S[nt])?Je:S[ke]<0||S[ke]>24||S[ke]===24&&(S[je]!==0||S[pt]!==0||S[kt]!==0)?ke:S[je]<0||S[je]>59?je:S[pt]<0||S[pt]>59?pt:S[kt]<0||S[kt]>999?kt:-1,_(f)._overflowDayOfYear&&(v<Xe||v>Je)&&(v=Je),_(f)._overflowWeeks&&v===-1&&(v=Ai),_(f)._overflowWeekday&&v===-1&&(v=sn),_(f).overflow=v),f}function Oi(f,v,S){return f??v??S}function Dl(f){var v=new Date(i.now());return f._useUTC?[v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()]:[v.getFullYear(),v.getMonth(),v.getDate()]}function _n(f){var v,S,k=[],R,q,ee;if(!f._d){for(R=Dl(f),f._w&&f._a[Je]==null&&f._a[nt]==null&&Pl(f),f._dayOfYear!=null&&(ee=Oi(f._a[Xe],R[Xe]),(f._dayOfYear>ci(ee)||f._dayOfYear===0)&&(_(f)._overflowDayOfYear=!0),S=Qe(ee,0,f._dayOfYear),f._a[nt]=S.getUTCMonth(),f._a[Je]=S.getUTCDate()),v=0;v<3&&f._a[v]==null;++v)f._a[v]=k[v]=R[v];for(;v<7;v++)f._a[v]=k[v]=f._a[v]==null?v===2?1:0:f._a[v];f._a[ke]===24&&f._a[je]===0&&f._a[pt]===0&&f._a[kt]===0&&(f._nextDay=!0,f._a[ke]=0),f._d=(f._useUTC?Qe:fi).apply(null,k),q=f._useUTC?f._d.getUTCDay():f._d.getDay(),f._tzm!=null&&f._d.setUTCMinutes(f._d.getUTCMinutes()-f._tzm),f._nextDay&&(f._a[ke]=24),f._w&&typeof f._w.d<"u"&&f._w.d!==q&&(_(f).weekdayMismatch=!0)}}function Pl(f){var v,S,k,R,q,ee,_e,Se;if(v=f._w,v.GG!=null||v.W!=null||v.E!=null)q=1,ee=4,S=Oi(v.GG,f._a[Xe],pi(He(),1,4).year),k=Oi(v.W,1),R=Oi(v.E,1),(R<1||R>7)&&(Se=!0);else{q=f._locale._week.dow,ee=f._locale._week.doy;var Ue=pi(He(),q,ee);S=Oi(v.gg,f._a[Xe],Ue.year),k=Oi(v.w,Ue.week),v.d!=null?(R=v.d,(R<0||R>6)&&(Se=!0)):v.e!=null?(R=v.e+q,(v.e<0||v.e>6)&&(Se=!0)):R=q}k<1||k>E(S,q,ee)?_(f)._overflowWeeks=!0:Se!=null?_(f)._overflowWeekday=!0:(_e=Ki(S,k,R,q,ee),f._a[Xe]=_e.year,f._dayOfYear=_e.dayOfYear)}var Ol=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Rl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fl=/Z|[+-]\d\d(?::?\d\d)?/,yr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],zl=/^\/?Date\((\-?\d+)/i;function Co(f){var v,S,k=f._i,R=Ol.exec(k)||Rl.exec(k),q,ee,_e,Se;if(R){for(_(f).iso=!0,v=0,S=yr.length;v<S;v++)if(yr[v][1].exec(R[1])){ee=yr[v][0],q=yr[v][2]!==!1;break}if(ee==null){f._isValid=!1;return}if(R[3]){for(v=0,S=gn.length;v<S;v++)if(gn[v][1].exec(R[3])){_e=(R[2]||" ")+gn[v][0];break}if(_e==null){f._isValid=!1;return}}if(!q&&_e!=null){f._isValid=!1;return}if(R[4])if(Fl.exec(R[4]))Se="Z";else{f._isValid=!1;return}f._f=ee+(_e||"")+(Se||""),vn(f)}else f._isValid=!1}var Ll=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Nl(f,v,S,k,R,q){var ee=[Bl(f),ji.indexOf(v),parseInt(S,10),parseInt(k,10),parseInt(R,10)];return q&&ee.push(parseInt(q,10)),ee}function Bl(f){var v=parseInt(f,10);return v<=49?2e3+v:v<=999?1900+v:v}function Vl(f){return f.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}function Hl(f,v,S){if(f){var k=go.indexOf(f),R=new Date(v[0],v[1],v[2]).getDay();if(k!==R)return _(S).weekdayMismatch=!0,S._isValid=!1,!1}return!0}var Wl={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function $l(f,v,S){if(f)return Wl[f];if(v)return 0;var k=parseInt(S,10),R=k%100,q=(k-R)/100;return q*60+R}function wo(f){var v=Ll.exec(Vl(f._i));if(v){var S=Nl(v[4],v[3],v[2],v[5],v[6],v[7]);if(!Hl(v[1],S,f))return;f._a=S,f._tzm=$l(v[8],v[9],v[10]),f._d=Qe.apply(null,f._a),f._d.setUTCMinutes(f._d.getUTCMinutes()-f._tzm),_(f).rfc2822=!0}else f._isValid=!1}function Yl(f){var v=zl.exec(f._i);if(v!==null){f._d=new Date(+v[1]);return}if(Co(f),f._isValid===!1)delete f._isValid;else return;if(wo(f),f._isValid===!1)delete f._isValid;else return;i.createFromInputFallback(f)}i.createFromInputFallback=L("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(f){f._d=new Date(f._i+(f._useUTC?" UTC":""))}),i.ISO_8601=function(){},i.RFC_2822=function(){};function vn(f){if(f._f===i.ISO_8601){Co(f);return}if(f._f===i.RFC_2822){wo(f);return}f._a=[],_(f).empty=!0;var v=""+f._i,S,k,R,q,ee,_e=v.length,Se=0;for(R=Dt(f._f,f._locale).match(Re)||[],S=0;S<R.length;S++)q=R[S],k=(v.match(on(q,f))||[])[0],k&&(ee=v.substr(0,v.indexOf(k)),ee.length>0&&_(f).unusedInput.push(ee),v=v.slice(v.indexOf(k)+k.length),Se+=k.length),Pe[q]?(k?_(f).empty=!1:_(f).unusedTokens.push(q),hi(q,k,f)):f._strict&&!k&&_(f).unusedTokens.push(q);_(f).charsLeftOver=_e-Se,v.length>0&&_(f).unusedInput.push(v),f._a[ke]<=12&&_(f).bigHour===!0&&f._a[ke]>0&&(_(f).bigHour=void 0),_(f).parsedDateParts=f._a.slice(0),_(f).meridiem=f._meridiem,f._a[ke]=Ul(f._locale,f._a[ke],f._meridiem),_n(f),mn(f)}function Ul(f,v,S){var k;return S==null?v:f.meridiemHour!=null?f.meridiemHour(v,S):(f.isPM!=null&&(k=f.isPM(S),k&&v<12&&(v+=12),!k&&v===12&&(v=0)),v)}function ql(f){var v,S,k,R,q;if(f._f.length===0){_(f).invalidFormat=!0,f._d=new Date(NaN);return}for(R=0;R<f._f.length;R++)q=0,v=A({},f),f._useUTC!=null&&(v._useUTC=f._useUTC),v._f=f._f[R],vn(v),C(v)&&(q+=_(v).charsLeftOver,q+=_(v).unusedTokens.length*10,_(v).score=q,(k==null||q<k)&&(k=q,S=v));l(f,S||v)}function jl(f){if(!f._d){var v=ce(f._i);f._a=m([v.year,v.month,v.day||v.date,v.hour,v.minute,v.second,v.millisecond],function(S){return S&&parseInt(S,10)}),_n(f)}}function Gl(f){var v=new D(mn(So(f)));return v._nextDay&&(v.add(1,"d"),v._nextDay=void 0),v}function So(f){var v=f._i,S=f._f;return f._locale=f._locale||Ut(f._l),v===null||S===void 0&&v===""?x({nullInput:!0}):(typeof v=="string"&&(f._i=v=f._locale.preparse(v)),z(v)?new D(mn(v)):(d(v)?f._d=v:t(S)?ql(f):S?vn(f):Kl(f),C(f)||(f._d=null),f))}function Kl(f){var v=f._i;h(v)?f._d=new Date(i.now()):d(v)?f._d=new Date(v.valueOf()):typeof v=="string"?Yl(f):t(v)?(f._a=m(v.slice(0),function(S){return parseInt(S,10)}),_n(f)):n(v)?jl(f):s(v)?f._d=new Date(v):i.createFromInputFallback(f)}function Io(f,v,S,k,R){var q={};return(S===!0||S===!1)&&(k=S,S=void 0),(n(f)&&o(f)||t(f)&&f.length===0)&&(f=void 0),q._isAMomentObject=!0,q._useUTC=q._isUTC=R,q._l=S,q._i=f,q._f=v,q._strict=k,Gl(q)}function He(f,v,S,k){return Io(f,v,S,k,!1)}var Xl=L("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var f=He.apply(null,arguments);return this.isValid()&&f.isValid()?f<this?this:f:x()}),Zl=L("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var f=He.apply(null,arguments);return this.isValid()&&f.isValid()?f>this?this:f:x()});function Ao(f,v){var S,k;if(v.length===1&&t(v[0])&&(v=v[0]),!v.length)return He();for(S=v[0],k=1;k<v.length;++k)(!v[k].isValid()||v[k][f](S))&&(S=v[k]);return S}function Jl(){var f=[].slice.call(arguments,0);return Ao("isBefore",f)}function Ql(){var f=[].slice.call(arguments,0);return Ao("isAfter",f)}var ed=function(){return Date.now?Date.now():+new Date},Zi=["year","quarter","month","week","day","hour","minute","second","millisecond"];function td(f){for(var v in f)if(!(Ve.call(Zi,v)!==-1&&(f[v]==null||!isNaN(f[v]))))return!1;for(var S=!1,k=0;k<Zi.length;++k)if(f[Zi[k]]){if(S)return!1;parseFloat(f[Zi[k]])!==T(f[Zi[k]])&&(S=!0)}return!0}function id(){return this._isValid}function rd(){return bt(NaN)}function xr(f){var v=ce(f),S=v.year||0,k=v.quarter||0,R=v.month||0,q=v.week||0,ee=v.day||0,_e=v.hour||0,Se=v.minute||0,Ue=v.second||0,gt=v.millisecond||0;this._isValid=td(v),this._milliseconds=+gt+Ue*1e3+Se*6e4+_e*1e3*60*60,this._days=+ee+q*7,this._months=+R+k*3+S*12,this._data={},this._locale=Ut(),this._bubble()}function bn(f){return f instanceof xr}function yn(f){return f<0?Math.round(-1*f)*-1:Math.round(f)}function ko(f,v){le(f,0,0,function(){var S=this.utcOffset(),k="+";return S<0&&(S=-S,k="-"),k+ve(~~(S/60),2)+v+ve(~~S%60,2)})}ko("Z",":"),ko("ZZ",""),de("Z",Ii),de("ZZ",Ii),ge(["Z","ZZ"],function(f,v,S){S._useUTC=!0,S._tzm=xn(Ii,f)});var nd=/([\+\-]|\d\d)/gi;function xn(f,v){var S=(v||"").match(f);if(S===null)return null;var k=S[S.length-1]||[],R=(k+"").match(nd)||["-",0,0],q=+(R[1]*60)+T(R[2]);return q===0?0:R[0]==="+"?q:-q}function Cn(f,v){var S,k;return v._isUTC?(S=v.clone(),k=(z(f)||d(f)?f.valueOf():He(f).valueOf())-S.valueOf(),S._d.setTime(S._d.valueOf()+k),i.updateOffset(S,!1),S):He(f).local()}function wn(f){return-Math.round(f._d.getTimezoneOffset()/15)*15}i.updateOffset=function(){};function od(f,v,S){var k=this._offset||0,R;if(!this.isValid())return f!=null?this:NaN;if(f!=null){if(typeof f=="string"){if(f=xn(Ii,f),f===null)return this}else Math.abs(f)<16&&!S&&(f=f*60);return!this._isUTC&&v&&(R=wn(this)),this._offset=f,this._isUTC=!0,R!=null&&this.add(R,"m"),k!==f&&(!v||this._changeInProgress?Do(this,bt(f-k,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?k:wn(this)}function sd(f,v){return f!=null?(typeof f!="string"&&(f=-f),this.utcOffset(f,v),this):-this.utcOffset()}function ad(f){return this.utcOffset(0,f)}function ld(f){return this._isUTC&&(this.utcOffset(0,f),this._isUTC=!1,f&&this.subtract(wn(this),"m")),this}function dd(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var f=xn(nn,this._i);f!=null?this.utcOffset(f):this.utcOffset(0,!0)}return this}function hd(f){return this.isValid()?(f=f?He(f).utcOffset():0,(this.utcOffset()-f)%60===0):!1}function cd(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ud(){if(!h(this._isDSTShifted))return this._isDSTShifted;var f={};if(A(f,this),f=So(f),f._a){var v=f._isUTC?u(f._a):He(f._a);this._isDSTShifted=this.isValid()&&M(f._a,v.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function fd(){return this.isValid()?!this._isUTC:!1}function pd(){return this.isValid()?this._isUTC:!1}function Eo(){return this.isValid()?this._isUTC&&this._offset===0:!1}var md=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,_d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function bt(f,v){var S=f,k=null,R,q,ee;return bn(f)?S={ms:f._milliseconds,d:f._days,M:f._months}:s(f)?(S={},v?S[v]=f:S.milliseconds=f):(k=md.exec(f))?(R=k[1]==="-"?-1:1,S={y:0,d:T(k[Je])*R,h:T(k[ke])*R,m:T(k[je])*R,s:T(k[pt])*R,ms:T(yn(k[kt]*1e3))*R}):(k=_d.exec(f))?(R=k[1]==="-"?-1:(k[1]==="+",1),S={y:mi(k[2],R),M:mi(k[3],R),w:mi(k[4],R),d:mi(k[5],R),h:mi(k[6],R),m:mi(k[7],R),s:mi(k[8],R)}):S==null?S={}:typeof S=="object"&&("from"in S||"to"in S)&&(ee=gd(He(S.from),He(S.to)),S={},S.ms=ee.milliseconds,S.M=ee.months),q=new xr(S),bn(f)&&c(f,"_locale")&&(q._locale=f._locale),q}bt.fn=xr.prototype,bt.invalid=rd;function mi(f,v){var S=f&&parseFloat(f.replace(",","."));return(isNaN(S)?0:S)*v}function Mo(f,v){var S={milliseconds:0,months:0};return S.months=v.month()-f.month()+(v.year()-f.year())*12,f.clone().add(S.months,"M").isAfter(v)&&--S.months,S.milliseconds=+v-+f.clone().add(S.months,"M"),S}function gd(f,v){var S;return f.isValid()&&v.isValid()?(v=Cn(v,f),f.isBefore(v)?S=Mo(f,v):(S=Mo(v,f),S.milliseconds=-S.milliseconds,S.months=-S.months),S):{milliseconds:0,months:0}}function To(f,v){return function(S,k){var R,q;return k!==null&&!isNaN(+k)&&(U(v,"moment()."+v+"(period, number) is deprecated. Please use moment()."+v+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),q=S,S=k,k=q),S=typeof S=="string"?+S:S,R=bt(S,k),Do(this,R,f),this}}function Do(f,v,S,k){var R=v._milliseconds,q=yn(v._days),ee=yn(v._months);f.isValid()&&(k=k??!0,ee&&Wt(f,ui(f,"Month")+ee*S),q&&mr(f,"Date",ui(f,"Date")+q*S),R&&f._d.setTime(f._d.valueOf()+R*S),k&&i.updateOffset(f,q||ee))}var vd=To(1,"add"),bd=To(-1,"subtract");function yd(f,v){var S=f.diff(v,"days",!0);return S<-6?"sameElse":S<-1?"lastWeek":S<0?"lastDay":S<1?"sameDay":S<2?"nextDay":S<7?"nextWeek":"sameElse"}function xd(f,v){var S=f||He(),k=Cn(S,this).startOf("day"),R=i.calendarFormat(this,k)||"sameElse",q=v&&($(v[R])?v[R].call(this,S):v[R]);return this.format(q||this.localeData().calendar(R,this,He(S)))}function Cd(){return new D(this)}function wd(f,v){var S=z(f)?f:He(f);return this.isValid()&&S.isValid()?(v=De(h(v)?"millisecond":v),v==="millisecond"?this.valueOf()>S.valueOf():S.valueOf()<this.clone().startOf(v).valueOf()):!1}function Sd(f,v){var S=z(f)?f:He(f);return this.isValid()&&S.isValid()?(v=De(h(v)?"millisecond":v),v==="millisecond"?this.valueOf()<S.valueOf():this.clone().endOf(v).valueOf()<S.valueOf()):!1}function Id(f,v,S,k){return k=k||"()",(k[0]==="("?this.isAfter(f,S):!this.isBefore(f,S))&&(k[1]===")"?this.isBefore(v,S):!this.isAfter(v,S))}function Ad(f,v){var S=z(f)?f:He(f),k;return this.isValid()&&S.isValid()?(v=De(v||"millisecond"),v==="millisecond"?this.valueOf()===S.valueOf():(k=S.valueOf(),this.clone().startOf(v).valueOf()<=k&&k<=this.clone().endOf(v).valueOf())):!1}function kd(f,v){return this.isSame(f,v)||this.isAfter(f,v)}function Ed(f,v){return this.isSame(f,v)||this.isBefore(f,v)}function Md(f,v,S){var k,R,q;if(!this.isValid())return NaN;if(k=Cn(f,this),!k.isValid())return NaN;switch(R=(k.utcOffset()-this.utcOffset())*6e4,v=De(v),v){case"year":q=Sn(this,k)/12;break;case"month":q=Sn(this,k);break;case"quarter":q=Sn(this,k)/3;break;case"second":q=(this-k)/1e3;break;case"minute":q=(this-k)/6e4;break;case"hour":q=(this-k)/36e5;break;case"day":q=(this-k-R)/864e5;break;case"week":q=(this-k-R)/6048e5;break;default:q=this-k}return S?q:V(q)}function Sn(f,v){var S=(v.year()-f.year())*12+(v.month()-f.month()),k=f.clone().add(S,"months"),R,q;return v-k<0?(R=f.clone().add(S-1,"months"),q=(v-k)/(k-R)):(R=f.clone().add(S+1,"months"),q=(v-k)/(R-k)),-(S+q)||0}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Td(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Dd(f){if(!this.isValid())return null;var v=f!==!0,S=v?this.clone().utc():this;return S.year()<0||S.year()>9999?ut(S,v?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):$(Date.prototype.toISOString)?v?this.toDate().toISOString():new Date(this._d.valueOf()).toISOString().replace("Z",ut(S,"Z")):ut(S,v?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Pd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var f="moment",v="";this.isLocal()||(f=this.utcOffset()===0?"moment.utc":"moment.parseZone",v="Z");var S="["+f+'("]',k=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",R="-MM-DD[T]HH:mm:ss.SSS",q=v+'[")]';return this.format(S+k+R+q)}function Od(f){f||(f=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var v=ut(this,f);return this.localeData().postformat(v)}function Rd(f,v){return this.isValid()&&(z(f)&&f.isValid()||He(f).isValid())?bt({to:this,from:f}).locale(this.locale()).humanize(!v):this.localeData().invalidDate()}function Fd(f){return this.from(He(),f)}function zd(f,v){return this.isValid()&&(z(f)&&f.isValid()||He(f).isValid())?bt({from:this,to:f}).locale(this.locale()).humanize(!v):this.localeData().invalidDate()}function Ld(f){return this.to(He(),f)}function Po(f){var v;return f===void 0?this._locale._abbr:(v=Ut(f),v!=null&&(this._locale=v),this)}var Oo=L("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(f){return f===void 0?this.localeData():this.locale(f)});function Ro(){return this._locale}function Nd(f){switch(f=De(f),f){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return f==="week"&&this.weekday(0),f==="isoWeek"&&this.isoWeekday(1),f==="quarter"&&this.month(Math.floor(this.month()/3)*3),this}function Bd(f){return f=De(f),f===void 0||f==="millisecond"?this:(f==="date"&&(f="day"),this.startOf(f).add(1,f==="isoWeek"?"week":f).subtract(1,"ms"))}function Vd(){return this._d.valueOf()-(this._offset||0)*6e4}function Hd(){return Math.floor(this.valueOf()/1e3)}function Wd(){return new Date(this.valueOf())}function $d(){var f=this;return[f.year(),f.month(),f.date(),f.hour(),f.minute(),f.second(),f.millisecond()]}function Yd(){var f=this;return{years:f.year(),months:f.month(),date:f.date(),hours:f.hours(),minutes:f.minutes(),seconds:f.seconds(),milliseconds:f.milliseconds()}}function Ud(){return this.isValid()?this.toISOString():null}function qd(){return C(this)}function jd(){return l({},_(this))}function Gd(){return _(this).overflow}function Kd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}le(0,["gg",2],0,function(){return this.weekYear()%100}),le(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Cr(f,v){le(0,[f,f.length],0,v)}Cr("gggg","weekYear"),Cr("ggggg","weekYear"),Cr("GGGG","isoWeekYear"),Cr("GGGGG","isoWeekYear"),fe("weekYear","gg"),fe("isoWeekYear","GG"),be("weekYear",1),be("isoWeekYear",1),de("G",si),de("g",si),de("GG",xe,Te),de("gg",xe,Te),de("GGGG",Pt,vt),de("gggg",Pt,vt),de("GGGGG",It,wt),de("ggggg",It,wt),At(["gggg","ggggg","GGGG","GGGGG"],function(f,v,S,k){v[k.substr(0,2)]=T(f)}),At(["gg","GG"],function(f,v,S,k){v[k]=i.parseTwoDigitYear(f)});function Xd(f){return Fo.call(this,f,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Zd(f){return Fo.call(this,f,this.isoWeek(),this.isoWeekday(),1,4)}function Jd(){return E(this.year(),1,4)}function Qd(){var f=this.localeData()._week;return E(this.year(),f.dow,f.doy)}function Fo(f,v,S,k,R){var q;return f==null?pi(this,k,R).year:(q=E(f,k,R),v>q&&(v=q),eh.call(this,f,v,S,k,R))}function eh(f,v,S,k,R){var q=Ki(f,v,S,k,R),ee=Qe(q.year,0,q.dayOfYear);return this.year(ee.getUTCFullYear()),this.month(ee.getUTCMonth()),this.date(ee.getUTCDate()),this}le("Q",0,"Qo","quarter"),fe("quarter","Q"),be("quarter",7),de("Q",Ht),ge("Q",function(f,v){v[nt]=(T(f)-1)*3});function th(f){return f==null?Math.ceil((this.month()+1)/3):this.month((f-1)*3+this.month()%3)}le("D",["DD",2],"Do","date"),fe("date","D"),be("date",9),de("D",xe),de("DD",xe,Te),de("Do",function(f,v){return f?v._dayOfMonthOrdinalParse||v._ordinalParse:v._dayOfMonthOrdinalParseLenient}),ge(["D","DD"],Je),ge("Do",function(f,v){v[Je]=T(f.match(xe)[0])});var zo=Ot("Date",!0);le("DDD",["DDDD",3],"DDDo","dayOfYear"),fe("dayOfYear","DDD"),be("dayOfYear",4),de("DDD",ft),de("DDDD",oi),ge(["DDD","DDDD"],function(f,v,S){S._dayOfYear=T(f)});function ih(f){var v=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return f==null?v:this.add(f-v,"d")}le("m",["mm",2],0,"minute"),fe("minute","m"),be("minute",14),de("m",xe),de("mm",xe,Te),ge(["m","mm"],je);var rh=Ot("Minutes",!1);le("s",["ss",2],0,"second"),fe("second","s"),be("second",15),de("s",xe),de("ss",xe,Te),ge(["s","ss"],pt);var nh=Ot("Seconds",!1);le("S",0,0,function(){return~~(this.millisecond()/100)}),le(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),le(0,["SSS",3],0,"millisecond"),le(0,["SSSS",4],0,function(){return this.millisecond()*10}),le(0,["SSSSS",5],0,function(){return this.millisecond()*100}),le(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),le(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),le(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),le(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),fe("millisecond","ms"),be("millisecond",16),de("S",ft,Ht),de("SS",ft,Te),de("SSS",ft,oi);var qt;for(qt="SSSS";qt.length<=9;qt+="S")de(qt,rn);function oh(f,v){v[kt]=T(("0."+f)*1e3)}for(qt="S";qt.length<=9;qt+="S")ge(qt,oh);var sh=Ot("Milliseconds",!1);le("z",0,0,"zoneAbbr"),le("zz",0,0,"zoneName");function ah(){return this._isUTC?"UTC":""}function lh(){return this._isUTC?"Coordinated Universal Time":""}var se=D.prototype;se.add=vd,se.calendar=xd,se.clone=Cd,se.diff=Md,se.endOf=Bd,se.format=Od,se.from=Rd,se.fromNow=Fd,se.to=zd,se.toNow=Ld,se.get=ln,se.invalidAt=Gd,se.isAfter=wd,se.isBefore=Sd,se.isBetween=Id,se.isSame=Ad,se.isSameOrAfter=kd,se.isSameOrBefore=Ed,se.isValid=qd,se.lang=Oo,se.locale=Po,se.localeData=Ro,se.max=Zl,se.min=Xl,se.parsingFlags=jd,se.set=dn,se.startOf=Nd,se.subtract=bd,se.toArray=$d,se.toObject=Yd,se.toDate=Wd,se.toISOString=Dd,se.inspect=Pd,se.toJSON=Ud,se.toString=Td,se.unix=Hd,se.valueOf=Vd,se.creationData=Kd,se.year=pr,se.isLeapYear=an,se.weekYear=Xd,se.isoWeekYear=Zd,se.quarter=se.quarters=th,se.month=$t,se.daysInMonth=Mi,se.week=se.weeks=he,se.isoWeek=se.isoWeeks=pe,se.weeksInYear=Qd,se.isoWeeksInYear=Jd,se.date=zo,se.day=se.days=pl,se.weekday=ml,se.isoWeekday=_l,se.dayOfYear=ih,se.hour=se.hours=kl,se.minute=se.minutes=rh,se.second=se.seconds=nh,se.millisecond=se.milliseconds=sh,se.utcOffset=od,se.utc=ad,se.local=ld,se.parseZone=dd,se.hasAlignedHourOffset=hd,se.isDST=cd,se.isLocal=fd,se.isUtcOffset=pd,se.isUtc=Eo,se.isUTC=Eo,se.zoneAbbr=ah,se.zoneName=lh,se.dates=L("dates accessor is deprecated. Use date instead.",zo),se.months=L("months accessor is deprecated. Use month instead",$t),se.years=L("years accessor is deprecated. Use year instead",pr),se.zone=L("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",sd),se.isDSTShifted=L("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ud);function dh(f){return He(f*1e3)}function hh(){return He.apply(null,arguments).parseZone()}function Lo(f){return f}var Oe=J.prototype;Oe.calendar=O,Oe.longDateFormat=B,Oe.invalidDate=K,Oe.ordinal=ae,Oe.preparse=Lo,Oe.postformat=Lo,Oe.relativeTime=re,Oe.pastFuture=me,Oe.set=Y,Oe.months=gr,Oe.monthsShort=vr,Oe.monthsParse=Rt,Oe.monthsRegex=Et,Oe.monthsShortRegex=at,Oe.week=P,Oe.firstDayOfYear=ne,Oe.firstDayOfWeek=X,Oe.weekdays=_t,Oe.weekdaysMin=cl,Oe.weekdaysShort=dl,Oe.weekdaysParse=fl,Oe.weekdaysRegex=vl,Oe.weekdaysShortRegex=yl,Oe.weekdaysMinRegex=Cl,Oe.isPM=Sl,Oe.meridiem=Al;function wr(f,v,S,k){var R=Ut(),q=u().set(k,v);return R[S](q,f)}function No(f,v,S){if(s(f)&&(v=f,f=void 0),f=f||"",v!=null)return wr(f,v,S,"month");var k,R=[];for(k=0;k<12;k++)R[k]=wr(f,k,S,"month");return R}function In(f,v,S,k){typeof f=="boolean"?(s(v)&&(S=v,v=void 0),v=v||""):(v=f,S=v,f=!1,s(v)&&(S=v,v=void 0),v=v||"");var R=Ut(),q=f?R._week.dow:0;if(S!=null)return wr(v,(S+q)%7,k,"day");var ee,_e=[];for(ee=0;ee<7;ee++)_e[ee]=wr(v,(ee+q)%7,k,"day");return _e}function ch(f,v){return No(f,v,"months")}function uh(f,v){return No(f,v,"monthsShort")}function fh(f,v,S){return In(f,v,S,"weekdays")}function ph(f,v,S){return In(f,v,S,"weekdaysShort")}function mh(f,v,S){return In(f,v,S,"weekdaysMin")}Pi("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(f){var v=f%10,S=T(f%100/10)===1?"th":v===1?"st":v===2?"nd":v===3?"rd":"th";return f+S}}),i.lang=L("moment.lang is deprecated. Use moment.locale instead.",Pi),i.langData=L("moment.langData is deprecated. Use moment.localeData instead.",Ut);var Ft=Math.abs;function _h(){var f=this._data;return this._milliseconds=Ft(this._milliseconds),this._days=Ft(this._days),this._months=Ft(this._months),f.milliseconds=Ft(f.milliseconds),f.seconds=Ft(f.seconds),f.minutes=Ft(f.minutes),f.hours=Ft(f.hours),f.months=Ft(f.months),f.years=Ft(f.years),this}function Bo(f,v,S,k){var R=bt(v,S);return f._milliseconds+=k*R._milliseconds,f._days+=k*R._days,f._months+=k*R._months,f._bubble()}function gh(f,v){return Bo(this,f,v,1)}function vh(f,v){return Bo(this,f,v,-1)}function Vo(f){return f<0?Math.floor(f):Math.ceil(f)}function bh(){var f=this._milliseconds,v=this._days,S=this._months,k=this._data,R,q,ee,_e,Se;return f>=0&&v>=0&&S>=0||f<=0&&v<=0&&S<=0||(f+=Vo(An(S)+v)*864e5,v=0,S=0),k.milliseconds=f%1e3,R=V(f/1e3),k.seconds=R%60,q=V(R/60),k.minutes=q%60,ee=V(q/60),k.hours=ee%24,v+=V(ee/24),Se=V(Ho(v)),S+=Se,v-=Vo(An(Se)),_e=V(S/12),S%=12,k.days=v,k.months=S,k.years=_e,this}function Ho(f){return f*4800/146097}function An(f){return f*146097/4800}function yh(f){if(!this.isValid())return NaN;var v,S,k=this._milliseconds;if(f=De(f),f==="month"||f==="year")return v=this._days+k/864e5,S=this._months+Ho(v),f==="month"?S:S/12;switch(v=this._days+Math.round(An(this._months)),f){case"week":return v/7+k/6048e5;case"day":return v+k/864e5;case"hour":return v*24+k/36e5;case"minute":return v*1440+k/6e4;case"second":return v*86400+k/1e3;case"millisecond":return Math.floor(v*864e5)+k;default:throw new Error("Unknown unit "+f)}}function xh(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+T(this._months/12)*31536e6:NaN}function jt(f){return function(){return this.as(f)}}var Ch=jt("ms"),wh=jt("s"),Sh=jt("m"),Ih=jt("h"),Ah=jt("d"),kh=jt("w"),Eh=jt("M"),Mh=jt("y");function Th(){return bt(this)}function Dh(f){return f=De(f),this.isValid()?this[f+"s"]():NaN}function _i(f){return function(){return this.isValid()?this._data[f]:NaN}}var Ph=_i("milliseconds"),Oh=_i("seconds"),Rh=_i("minutes"),Fh=_i("hours"),zh=_i("days"),Lh=_i("months"),Nh=_i("years");function Bh(){return V(this.days()/7)}var Gt=Math.round,Mt={ss:44,s:45,m:45,h:22,d:26,M:11};function Vh(f,v,S,k,R){return R.relativeTime(v||1,!!S,f,k)}function Hh(f,v,S){var k=bt(f).abs(),R=Gt(k.as("s")),q=Gt(k.as("m")),ee=Gt(k.as("h")),_e=Gt(k.as("d")),Se=Gt(k.as("M")),Ue=Gt(k.as("y")),gt=R<=Mt.ss&&["s",R]||R<Mt.s&&["ss",R]||q<=1&&["m"]||q<Mt.m&&["mm",q]||ee<=1&&["h"]||ee<Mt.h&&["hh",ee]||_e<=1&&["d"]||_e<Mt.d&&["dd",_e]||Se<=1&&["M"]||Se<Mt.M&&["MM",Se]||Ue<=1&&["y"]||["yy",Ue];return gt[2]=v,gt[3]=+f>0,gt[4]=S,Vh.apply(null,gt)}function Wh(f){return f===void 0?Gt:typeof f=="function"?(Gt=f,!0):!1}function $h(f,v){return Mt[f]===void 0?!1:v===void 0?Mt[f]:(Mt[f]=v,f==="s"&&(Mt.ss=v-1),!0)}function Yh(f){if(!this.isValid())return this.localeData().invalidDate();var v=this.localeData(),S=Hh(this,!f,v);return f&&(S=v.pastFuture(+this,S)),v.postformat(S)}var kn=Math.abs;function Ri(f){return(f>0)-(f<0)||+f}function Sr(){if(!this.isValid())return this.localeData().invalidDate();var f=kn(this._milliseconds)/1e3,v=kn(this._days),S=kn(this._months),k,R,q;k=V(f/60),R=V(k/60),f%=60,k%=60,q=V(S/12),S%=12;var ee=q,_e=S,Se=v,Ue=R,gt=k,Ji=f?f.toFixed(3).replace(/\.?0+$/,""):"",Qi=this.asSeconds();if(!Qi)return"P0D";var Uh=Qi<0?"-":"",Wo=Ri(this._months)!==Ri(Qi)?"-":"",qh=Ri(this._days)!==Ri(Qi)?"-":"",En=Ri(this._milliseconds)!==Ri(Qi)?"-":"";return Uh+"P"+(ee?Wo+ee+"Y":"")+(_e?Wo+_e+"M":"")+(Se?qh+Se+"D":"")+(Ue||gt||Ji?"T":"")+(Ue?En+Ue+"H":"")+(gt?En+gt+"M":"")+(Ji?En+Ji+"S":"")}var we=xr.prototype;return we.isValid=id,we.abs=_h,we.add=gh,we.subtract=vh,we.as=yh,we.asMilliseconds=Ch,we.asSeconds=wh,we.asMinutes=Sh,we.asHours=Ih,we.asDays=Ah,we.asWeeks=kh,we.asMonths=Eh,we.asYears=Mh,we.valueOf=xh,we._bubble=bh,we.clone=Th,we.get=Dh,we.milliseconds=Ph,we.seconds=Oh,we.minutes=Rh,we.hours=Fh,we.days=zh,we.weeks=Bh,we.months=Lh,we.years=Nh,we.humanize=Yh,we.toISOString=Sr,we.toString=Sr,we.toJSON=Sr,we.locale=Po,we.localeData=Ro,we.toIsoString=L("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Sr),we.lang=Oo,le("X",0,0,"unix"),le("x",0,0,"valueOf"),de("x",si),de("X",ai),ge("X",function(f,v,S){S._d=new Date(parseFloat(f,10)*1e3)}),ge("x",function(f,v,S){S._d=new Date(T(f))}),i.version="2.20.1",e(He),i.fn=se,i.min=Jl,i.max=Ql,i.now=ed,i.utc=u,i.unix=dh,i.months=ch,i.isDate=d,i.locale=Pi,i.invalid=x,i.duration=bt,i.isMoment=z,i.weekdays=fh,i.parseZone=hh,i.localeData=Ut,i.isDuration=bn,i.monthsShort=uh,i.weekdaysMin=mh,i.defineLocale=pn,i.updateLocale=Ml,i.locales=Tl,i.weekdaysShort=ph,i.normalizeUnits=De,i.relativeTimeRounding=Wh,i.relativeTimeThreshold=$h,i.calendarFormat=yd,i.prototype=se,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},i});/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */(function(a){typeof _o=="object"&&typeof xt<"u"?xt.exports=a():typeof define=="function"&&define.amd?define([],a):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).Chart=a()})(function(){return function a(i,e,t){function n(s,d){if(!e[s]){if(!i[s]){var m=typeof require=="function"&&require;if(!d&&m)return m(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[s]={exports:{}};i[s][0].call(l.exports,function(u){var p=i[s][1][u];return n(p||u)},l,l.exports,a,i,e,t)}return e[s].exports}for(var o=typeof require=="function"&&require,h=0;h<t.length;h++)n(t[h]);return n}({1:[function(a,i,e){},{}],2:[function(a,i,e){var t=a(6);function n(_){if(_){var y=[0,0,0],C=1,x=_.match(/^#([a-fA-F0-9]{3})$/i);if(x){x=x[1];for(var w=0;w<y.length;w++)y[w]=parseInt(x[w]+x[w],16)}else if(x=_.match(/^#([a-fA-F0-9]{6})$/i))for(x=x[1],w=0;w<y.length;w++)y[w]=parseInt(x.slice(2*w,2*w+2),16);else if(x=_.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(w=0;w<y.length;w++)y[w]=parseInt(x[w+1]);C=parseFloat(x[4])}else if(x=_.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(w=0;w<y.length;w++)y[w]=Math.round(2.55*parseFloat(x[w+1]));C=parseFloat(x[4])}else if(x=_.match(/(\w+)/)){if(x[1]=="transparent")return[0,0,0,0];if(!(y=t[x[1]]))return}for(w=0;w<y.length;w++)y[w]=c(y[w],0,255);return C=C||C==0?c(C,0,1):1,y[3]=C,y}}function o(_){if(_){var y=_.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(y){var C=parseFloat(y[4]);return[c(parseInt(y[1]),0,360),c(parseFloat(y[2]),0,100),c(parseFloat(y[3]),0,100),c(isNaN(C)?1:C,0,1)]}}}function h(_){if(_){var y=_.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(y){var C=parseFloat(y[4]);return[c(parseInt(y[1]),0,360),c(parseFloat(y[2]),0,100),c(parseFloat(y[3]),0,100),c(isNaN(C)?1:C,0,1)]}}}function s(_,y){return y===void 0&&(y=_[3]!==void 0?_[3]:1),"rgba("+_[0]+", "+_[1]+", "+_[2]+", "+y+")"}function d(_,y){return"rgba("+Math.round(_[0]/255*100)+"%, "+Math.round(_[1]/255*100)+"%, "+Math.round(_[2]/255*100)+"%, "+(y||_[3]||1)+")"}function m(_,y){return y===void 0&&(y=_[3]!==void 0?_[3]:1),"hsla("+_[0]+", "+_[1]+"%, "+_[2]+"%, "+y+")"}function c(_,y,C){return Math.min(Math.max(y,_),C)}function l(_){var y=_.toString(16).toUpperCase();return y.length<2?"0"+y:y}i.exports={getRgba:n,getHsla:o,getRgb:function(_){var y=n(_);return y&&y.slice(0,3)},getHsl:function(_){var y=o(_);return y&&y.slice(0,3)},getHwb:h,getAlpha:function(_){var y=n(_);if(y||(y=o(_))||(y=h(_)))return y[3]},hexString:function(_){return"#"+l(_[0])+l(_[1])+l(_[2])},rgbString:function(_,y){return y<1||_[3]&&_[3]<1?s(_,y):"rgb("+_[0]+", "+_[1]+", "+_[2]+")"},rgbaString:s,percentString:function(_,y){if(y<1||_[3]&&_[3]<1)return d(_,y);var C=Math.round(_[0]/255*100),x=Math.round(_[1]/255*100),w=Math.round(_[2]/255*100);return"rgb("+C+"%, "+x+"%, "+w+"%)"},percentaString:d,hslString:function(_,y){return y<1||_[3]&&_[3]<1?m(_,y):"hsl("+_[0]+", "+_[1]+"%, "+_[2]+"%)"},hslaString:m,hwbString:function(_,y){return y===void 0&&(y=_[3]!==void 0?_[3]:1),"hwb("+_[0]+", "+_[1]+"%, "+_[2]+"%"+(y!==void 0&&y!==1?", "+y:"")+")"},keyword:function(_){return u[_.slice(0,3)]}};var u={};for(var p in t)u[t[p]]=p},{6:6}],3:[function(a,i,e){var t=a(5),n=a(2),o=function(h){return h instanceof o?h:this instanceof o?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void(typeof h=="string"?(s=n.getRgba(h))?this.setValues("rgb",s):(s=n.getHsla(h))?this.setValues("hsl",s):(s=n.getHwb(h))&&this.setValues("hwb",s):typeof h=="object"&&((s=h).r!==void 0||s.red!==void 0?this.setValues("rgb",s):s.l!==void 0||s.lightness!==void 0?this.setValues("hsl",s):s.v!==void 0||s.value!==void 0?this.setValues("hsv",s):s.w!==void 0||s.whiteness!==void 0?this.setValues("hwb",s):s.c===void 0&&s.cyan===void 0||this.setValues("cmyk",s)))):new o(h);var s};o.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var h=this.values;return h.alpha!==1?h.hwb.concat([h.alpha]):h.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var h=this.values;return h.rgb.concat([h.alpha])},hslaArray:function(){var h=this.values;return h.hsl.concat([h.alpha])},alpha:function(h){return h===void 0?this.values.alpha:(this.setValues("alpha",h),this)},red:function(h){return this.setChannel("rgb",0,h)},green:function(h){return this.setChannel("rgb",1,h)},blue:function(h){return this.setChannel("rgb",2,h)},hue:function(h){return h&&(h=(h%=360)<0?360+h:h),this.setChannel("hsl",0,h)},saturation:function(h){return this.setChannel("hsl",1,h)},lightness:function(h){return this.setChannel("hsl",2,h)},saturationv:function(h){return this.setChannel("hsv",1,h)},whiteness:function(h){return this.setChannel("hwb",1,h)},blackness:function(h){return this.setChannel("hwb",2,h)},value:function(h){return this.setChannel("hsv",2,h)},cyan:function(h){return this.setChannel("cmyk",0,h)},magenta:function(h){return this.setChannel("cmyk",1,h)},yellow:function(h){return this.setChannel("cmyk",2,h)},black:function(h){return this.setChannel("cmyk",3,h)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return n.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var h=this.values.rgb;return h[0]<<16|h[1]<<8|h[2]},luminosity:function(){for(var h=this.values.rgb,s=[],d=0;d<h.length;d++){var m=h[d]/255;s[d]=m<=.03928?m/12.92:Math.pow((m+.055)/1.055,2.4)}return .2126*s[0]+.7152*s[1]+.0722*s[2]},contrast:function(h){var s=this.luminosity(),d=h.luminosity();return s>d?(s+.05)/(d+.05):(d+.05)/(s+.05)},level:function(h){var s=this.contrast(h);return s>=7.1?"AAA":s>=4.5?"AA":""},dark:function(){var h=this.values.rgb;return(299*h[0]+587*h[1]+114*h[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var h=[],s=0;s<3;s++)h[s]=255-this.values.rgb[s];return this.setValues("rgb",h),this},lighten:function(h){var s=this.values.hsl;return s[2]+=s[2]*h,this.setValues("hsl",s),this},darken:function(h){var s=this.values.hsl;return s[2]-=s[2]*h,this.setValues("hsl",s),this},saturate:function(h){var s=this.values.hsl;return s[1]+=s[1]*h,this.setValues("hsl",s),this},desaturate:function(h){var s=this.values.hsl;return s[1]-=s[1]*h,this.setValues("hsl",s),this},whiten:function(h){var s=this.values.hwb;return s[1]+=s[1]*h,this.setValues("hwb",s),this},blacken:function(h){var s=this.values.hwb;return s[2]+=s[2]*h,this.setValues("hwb",s),this},greyscale:function(){var h=this.values.rgb,s=.3*h[0]+.59*h[1]+.11*h[2];return this.setValues("rgb",[s,s,s]),this},clearer:function(h){var s=this.values.alpha;return this.setValues("alpha",s-s*h),this},opaquer:function(h){var s=this.values.alpha;return this.setValues("alpha",s+s*h),this},rotate:function(h){var s=this.values.hsl,d=(s[0]+h)%360;return s[0]=d<0?360+d:d,this.setValues("hsl",s),this},mix:function(h,s){var d=this,m=h,c=s===void 0?.5:s,l=2*c-1,u=d.alpha()-m.alpha(),p=((l*u==-1?l:(l+u)/(1+l*u))+1)/2,_=1-p;return this.rgb(p*d.red()+_*m.red(),p*d.green()+_*m.green(),p*d.blue()+_*m.blue()).alpha(d.alpha()*c+m.alpha()*(1-c))},toJSON:function(){return this.rgb()},clone:function(){var h,s,d=new o,m=this.values,c=d.values;for(var l in m)m.hasOwnProperty(l)&&(h=m[l],(s={}.toString.call(h))==="[object Array]"?c[l]=h.slice(0):s==="[object Number]"?c[l]=h:console.error("unexpected color value:",h));return d}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(h){for(var s=this.values,d={},m=0;m<h.length;m++)d[h.charAt(m)]=s[h][m];return s.alpha!==1&&(d.a=s.alpha),d},o.prototype.setValues=function(h,s){var d,m,c=this.values,l=this.spaces,u=this.maxes,p=1;if(this.valid=!0,h==="alpha")p=s;else if(s.length)c[h]=s.slice(0,h.length),p=s[h.length];else if(s[h.charAt(0)]!==void 0){for(d=0;d<h.length;d++)c[h][d]=s[h.charAt(d)];p=s.a}else if(s[l[h][0]]!==void 0){var _=l[h];for(d=0;d<h.length;d++)c[h][d]=s[_[d]];p=s.alpha}if(c.alpha=Math.max(0,Math.min(1,p===void 0?c.alpha:p)),h==="alpha")return!1;for(d=0;d<h.length;d++)m=Math.max(0,Math.min(u[h][d],c[h][d])),c[h][d]=Math.round(m);for(var y in l)y!==h&&(c[y]=t[h][y](c[h]));return!0},o.prototype.setSpace=function(h,s){var d=s[0];return d===void 0?this.getValues(h):(typeof d=="number"&&(d=Array.prototype.slice.call(s)),this.setValues(h,d),this)},o.prototype.setChannel=function(h,s,d){var m=this.values[h];return d===void 0?m[s]:d===m[s]?this:(m[s]=d,this.setValues(h,m),this)},typeof window<"u"&&(window.Color=o),i.exports=o},{2:2,5:5}],4:[function(a,i,e){function t(T){var M,F,L=T[0]/255,W=T[1]/255,U=T[2]/255,$=Math.min(L,W,U),Y=Math.max(L,W,U),G=Y-$;return Y==$?M=0:L==Y?M=(W-U)/G:W==Y?M=2+(U-L)/G:U==Y&&(M=4+(L-W)/G),(M=Math.min(60*M,360))<0&&(M+=360),F=($+Y)/2,[M,100*(Y==$?0:F<=.5?G/(Y+$):G/(2-Y-$)),100*F]}function n(T){var M,F,L=T[0],W=T[1],U=T[2],$=Math.min(L,W,U),Y=Math.max(L,W,U),G=Y-$;return F=Y==0?0:G/Y*1e3/10,Y==$?M=0:L==Y?M=(W-U)/G:W==Y?M=2+(U-L)/G:U==Y&&(M=4+(L-W)/G),(M=Math.min(60*M,360))<0&&(M+=360),[M,F,Y/255*1e3/10]}function o(T){var M=T[0],F=T[1],L=T[2];return[t(T)[0],100*(1/255*Math.min(M,Math.min(F,L))),100*(L=1-1/255*Math.max(M,Math.max(F,L)))]}function h(T){var M,F=T[0]/255,L=T[1]/255,W=T[2]/255;return[100*((1-F-(M=Math.min(1-F,1-L,1-W)))/(1-M)||0),100*((1-L-M)/(1-M)||0),100*((1-W-M)/(1-M)||0),100*M]}function s(T){return z[JSON.stringify(T)]}function d(T){var M=T[0]/255,F=T[1]/255,L=T[2]/255;return[100*(.4124*(M=M>.04045?Math.pow((M+.055)/1.055,2.4):M/12.92)+.3576*(F=F>.04045?Math.pow((F+.055)/1.055,2.4):F/12.92)+.1805*(L=L>.04045?Math.pow((L+.055)/1.055,2.4):L/12.92)),100*(.2126*M+.7152*F+.0722*L),100*(.0193*M+.1192*F+.9505*L)]}function m(T){var M=d(T),F=M[0],L=M[1],W=M[2];return L/=100,W/=108.883,F=(F/=95.047)>.008856?Math.pow(F,1/3):7.787*F+16/116,[116*(L=L>.008856?Math.pow(L,1/3):7.787*L+16/116)-16,500*(F-L),200*(L-(W=W>.008856?Math.pow(W,1/3):7.787*W+16/116))]}function c(T){var M,F,L,W,U,$=T[0]/360,Y=T[1]/100,G=T[2]/100;if(Y==0)return[U=255*G,U,U];M=2*G-(F=G<.5?G*(1+Y):G+Y-G*Y),W=[0,0,0];for(var J=0;J<3;J++)(L=$+1/3*-(J-1))<0&&L++,L>1&&L--,U=6*L<1?M+6*(F-M)*L:2*L<1?F:3*L<2?M+(F-M)*(2/3-L)*6:M,W[J]=255*U;return W}function l(T){var M=T[0]/60,F=T[1]/100,L=T[2]/100,W=Math.floor(M)%6,U=M-Math.floor(M),$=255*L*(1-F),Y=255*L*(1-F*U),G=255*L*(1-F*(1-U));switch(L*=255,W){case 0:return[L,G,$];case 1:return[Y,L,$];case 2:return[$,L,G];case 3:return[$,Y,L];case 4:return[G,$,L];case 5:return[L,$,Y]}}function u(T){var M,F,L,W,U=T[0]/360,$=T[1]/100,Y=T[2]/100,G=$+Y;switch(G>1&&($/=G,Y/=G),L=6*U-(M=Math.floor(6*U)),1&M&&(L=1-L),W=$+L*((F=1-Y)-$),M){default:case 6:case 0:r=F,g=W,b=$;break;case 1:r=W,g=F,b=$;break;case 2:r=$,g=F,b=W;break;case 3:r=$,g=W,b=F;break;case 4:r=W,g=$,b=F;break;case 5:r=F,g=$,b=W}return[255*r,255*g,255*b]}function p(T){var M=T[0]/100,F=T[1]/100,L=T[2]/100,W=T[3]/100;return[255*(1-Math.min(1,M*(1-W)+W)),255*(1-Math.min(1,F*(1-W)+W)),255*(1-Math.min(1,L*(1-W)+W))]}function _(T){var M,F,L,W=T[0]/100,U=T[1]/100,$=T[2]/100;return F=-.9689*W+1.8758*U+.0415*$,L=.0557*W+-.204*U+1.057*$,M=(M=3.2406*W+-1.5372*U+-.4986*$)>.0031308?1.055*Math.pow(M,1/2.4)-.055:M*=12.92,F=F>.0031308?1.055*Math.pow(F,1/2.4)-.055:F*=12.92,L=L>.0031308?1.055*Math.pow(L,1/2.4)-.055:L*=12.92,[255*(M=Math.min(Math.max(0,M),1)),255*(F=Math.min(Math.max(0,F),1)),255*(L=Math.min(Math.max(0,L),1))]}function y(T){var M=T[0],F=T[1],L=T[2];return F/=100,L/=108.883,M=(M/=95.047)>.008856?Math.pow(M,1/3):7.787*M+16/116,[116*(F=F>.008856?Math.pow(F,1/3):7.787*F+16/116)-16,500*(M-F),200*(F-(L=L>.008856?Math.pow(L,1/3):7.787*L+16/116))]}function C(T){var M,F,L,W,U=T[0],$=T[1],Y=T[2];return U<=8?W=(F=100*U/903.3)/100*7.787+16/116:(F=100*Math.pow((U+16)/116,3),W=Math.pow(F/100,1/3)),[M=M/95.047<=.008856?M=95.047*($/500+W-16/116)/7.787:95.047*Math.pow($/500+W,3),F,L=L/108.883<=.008859?L=108.883*(W-Y/200-16/116)/7.787:108.883*Math.pow(W-Y/200,3)]}function x(T){var M,F=T[0],L=T[1],W=T[2];return(M=360*Math.atan2(W,L)/2/Math.PI)<0&&(M+=360),[F,Math.sqrt(L*L+W*W),M]}function w(T){return _(C(T))}function A(T){var M,F=T[0],L=T[1];return M=T[2]/360*2*Math.PI,[F,L*Math.cos(M),L*Math.sin(M)]}function I(T){return D[T]}i.exports={rgb2hsl:t,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:h,rgb2keyword:s,rgb2xyz:d,rgb2lab:m,rgb2lch:function(T){return x(m(T))},hsl2rgb:c,hsl2hsv:function(T){var M=T[0],F=T[1]/100,L=T[2]/100;return L===0?[0,0,0]:[M,100*(2*(F*=(L*=2)<=1?L:2-L)/(L+F)),100*((L+F)/2)]},hsl2hwb:function(T){return o(c(T))},hsl2cmyk:function(T){return h(c(T))},hsl2keyword:function(T){return s(c(T))},hsv2rgb:l,hsv2hsl:function(T){var M,F,L=T[0],W=T[1]/100,U=T[2]/100;return M=W*U,[L,100*(M=(M/=(F=(2-W)*U)<=1?F:2-F)||0),100*(F/=2)]},hsv2hwb:function(T){return o(l(T))},hsv2cmyk:function(T){return h(l(T))},hsv2keyword:function(T){return s(l(T))},hwb2rgb:u,hwb2hsl:function(T){return t(u(T))},hwb2hsv:function(T){return n(u(T))},hwb2cmyk:function(T){return h(u(T))},hwb2keyword:function(T){return s(u(T))},cmyk2rgb:p,cmyk2hsl:function(T){return t(p(T))},cmyk2hsv:function(T){return n(p(T))},cmyk2hwb:function(T){return o(p(T))},cmyk2keyword:function(T){return s(p(T))},keyword2rgb:I,keyword2hsl:function(T){return t(I(T))},keyword2hsv:function(T){return n(I(T))},keyword2hwb:function(T){return o(I(T))},keyword2cmyk:function(T){return h(I(T))},keyword2lab:function(T){return m(I(T))},keyword2xyz:function(T){return d(I(T))},xyz2rgb:_,xyz2lab:y,xyz2lch:function(T){return x(y(T))},lab2xyz:C,lab2rgb:w,lab2lch:x,lch2lab:A,lch2xyz:function(T){return C(A(T))},lch2rgb:function(T){return w(A(T))}};var D={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},z={};for(var V in D)z[JSON.stringify(D[V])]=V},{}],5:[function(a,i,e){var t=a(4),n=function(){return new m};for(var o in t){n[o+"Raw"]=function(c){return function(l){return typeof l=="number"&&(l=Array.prototype.slice.call(arguments)),t[c](l)}}(o);var h=/(\w+)2(\w+)/.exec(o),s=h[1],d=h[2];(n[s]=n[s]||{})[d]=n[o]=function(c){return function(l){typeof l=="number"&&(l=Array.prototype.slice.call(arguments));var u=t[c](l);if(typeof u=="string"||u===void 0)return u;for(var p=0;p<u.length;p++)u[p]=Math.round(u[p]);return u}}(o)}var m=function(){this.convs={}};m.prototype.routeSpace=function(c,l){var u=l[0];return u===void 0?this.getValues(c):(typeof u=="number"&&(u=Array.prototype.slice.call(l)),this.setValues(c,u))},m.prototype.setValues=function(c,l){return this.space=c,this.convs={},this.convs[c]=l,this},m.prototype.getValues=function(c){var l=this.convs[c];if(!l){var u=this.space,p=this.convs[u];l=n[u][c](p),this.convs[c]=l}return l},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(c){m.prototype[c]=function(l){return this.routeSpace(c,arguments)}}),i.exports=n},{4:4}],6:[function(a,i,e){i.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(a,i,e){var t=a(29)();t.helpers=a(45),a(27)(t),t.defaults=a(25),t.Element=a(26),t.elements=a(40),t.Interaction=a(28),t.layouts=a(30),t.platform=a(48),t.plugins=a(31),t.Ticks=a(34),a(22)(t),a(23)(t),a(24)(t),a(33)(t),a(32)(t),a(35)(t),a(55)(t),a(53)(t),a(54)(t),a(56)(t),a(57)(t),a(58)(t),a(15)(t),a(16)(t),a(17)(t),a(18)(t),a(19)(t),a(20)(t),a(21)(t),a(8)(t),a(9)(t),a(10)(t),a(11)(t),a(12)(t),a(13)(t),a(14)(t);var n=a(49);for(var o in n)n.hasOwnProperty(o)&&t.plugins.register(n[o]);t.platform.initialize(),i.exports=t,typeof window<"u"&&(window.Chart=t),t.Legend=n.legend._element,t.Title=n.title._element,t.pluginService=t.plugins,t.PluginBase=t.Element.extend({}),t.canvasHelpers=t.helpers.canvas,t.layoutService=t.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,40:40,45:45,48:48,49:49,53:53,54:54,55:55,56:56,57:57,58:58,8:8,9:9}],8:[function(a,i,e){i.exports=function(t){t.Bar=function(n,o){return o.type="bar",new t(n,o)}}},{}],9:[function(a,i,e){i.exports=function(t){t.Bubble=function(n,o){return o.type="bubble",new t(n,o)}}},{}],10:[function(a,i,e){i.exports=function(t){t.Doughnut=function(n,o){return o.type="doughnut",new t(n,o)}}},{}],11:[function(a,i,e){i.exports=function(t){t.Line=function(n,o){return o.type="line",new t(n,o)}}},{}],12:[function(a,i,e){i.exports=function(t){t.PolarArea=function(n,o){return o.type="polarArea",new t(n,o)}}},{}],13:[function(a,i,e){i.exports=function(t){t.Radar=function(n,o){return o.type="radar",new t(n,o)}}},{}],14:[function(a,i,e){i.exports=function(t){t.Scatter=function(n,o){return o.type="scatter",new t(n,o)}}},{}],15:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),t._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(h,s){var d="";return h.length>0&&(h[0].yLabel?d=h[0].yLabel:s.labels.length>0&&h[0].index<s.labels.length&&(d=s.labels[h[0].index])),d},label:function(h,s){return(s.datasets[h.datasetIndex].label||"")+": "+h.xLabel}},mode:"index",axis:"y"}}),i.exports=function(h){h.controllers.bar=h.DatasetController.extend({dataElementType:n.Rectangle,initialize:function(){var s;h.DatasetController.prototype.initialize.apply(this,arguments),(s=this.getMeta()).stack=this.getDataset().stack,s.bar=!0},update:function(s){var d,m,c=this.getMeta().data;for(this._ruler=this.getRuler(),d=0,m=c.length;d<m;++d)this.updateElement(c[d],d,s)},updateElement:function(s,d,m){var c=this,l=c.chart,u=c.getMeta(),p=c.getDataset(),_=s.custom||{},y=l.options.elements.rectangle;s._xScale=c.getScaleForId(u.xAxisID),s._yScale=c.getScaleForId(u.yAxisID),s._datasetIndex=c.index,s._index=d,s._model={datasetLabel:p.label,label:l.data.labels[d],borderSkipped:_.borderSkipped?_.borderSkipped:y.borderSkipped,backgroundColor:_.backgroundColor?_.backgroundColor:o.valueAtIndexOrDefault(p.backgroundColor,d,y.backgroundColor),borderColor:_.borderColor?_.borderColor:o.valueAtIndexOrDefault(p.borderColor,d,y.borderColor),borderWidth:_.borderWidth?_.borderWidth:o.valueAtIndexOrDefault(p.borderWidth,d,y.borderWidth)},c.updateElementGeometry(s,d,m),s.pivot()},updateElementGeometry:function(s,d,m){var c=this,l=s._model,u=c.getValueScale(),p=u.getBasePixel(),_=u.isHorizontal(),y=c._ruler||c.getRuler(),C=c.calculateBarValuePixels(c.index,d),x=c.calculateBarIndexPixels(c.index,d,y);l.horizontal=_,l.base=m?p:C.base,l.x=_?m?p:C.head:x.center,l.y=_?x.center:m?p:C.head,l.height=_?x.size:void 0,l.width=_?void 0:x.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(s){var d,m,c=this.chart,l=this.getIndexScale().options.stacked,u=s===void 0?c.data.datasets.length:s+1,p=[];for(d=0;d<u;++d)(m=c.getDatasetMeta(d)).bar&&c.isDatasetVisible(d)&&(l===!1||l===!0&&p.indexOf(m.stack)===-1||l===void 0&&(m.stack===void 0||p.indexOf(m.stack)===-1))&&p.push(m.stack);return p},getStackCount:function(){return this._getStacks().length},getStackIndex:function(s,d){var m=this._getStacks(s),c=d!==void 0?m.indexOf(d):-1;return c===-1?m.length-1:c},getRuler:function(){var s,d,m=this.getIndexScale(),c=this.getStackCount(),l=this.index,u=m.isHorizontal(),p=u?m.left:m.top,_=p+(u?m.width:m.height),y=[];for(s=0,d=this.getMeta().data.length;s<d;++s)y.push(m.getPixelForValue(null,s,l));return{min:o.isNullOrUndef(m.options.barThickness)?function(C,x){var w,A,I,D,z=C.isHorizontal()?C.width:C.height,V=C.getTicks();for(I=1,D=x.length;I<D;++I)z=Math.min(z,x[I]-x[I-1]);for(I=0,D=V.length;I<D;++I)A=C.getPixelForTick(I),z=I>0?Math.min(z,A-w):z,w=A;return z}(m,y):-1,pixels:y,start:p,end:_,stackCount:c,scale:m}},calculateBarValuePixels:function(s,d){var m,c,l,u,p,_,y=this.chart,C=this.getMeta(),x=this.getValueScale(),w=y.data.datasets,A=x.getRightValue(w[s].data[d]),I=x.options.stacked,D=C.stack,z=0;if(I||I===void 0&&D!==void 0)for(m=0;m<s;++m)(c=y.getDatasetMeta(m)).bar&&c.stack===D&&c.controller.getValueScaleId()===x.id&&y.isDatasetVisible(m)&&(l=x.getRightValue(w[m].data[d]),(A<0&&l<0||A>=0&&l>0)&&(z+=l));return u=x.getPixelForValue(z),{size:_=((p=x.getPixelForValue(z+A))-u)/2,base:u,head:p,center:p+_/2}},calculateBarIndexPixels:function(s,d,m){var c,l,u,p,_,y,C,x,w,A,I,D,z,V,T,M,F,L=m.scale.options,W=L.barThickness==="flex"?(w=d,I=L,z=(A=m).pixels,V=z[w],T=w>0?z[w-1]:null,M=w<z.length-1?z[w+1]:null,F=I.categoryPercentage,T===null&&(T=V-(M===null?A.end-V:M-V)),M===null&&(M=V+V-T),D=V-(V-T)/2*F,{chunk:(M-T)/2*F/A.stackCount,ratio:I.barPercentage,start:D}):(c=d,l=m,y=(u=L).barThickness,C=l.stackCount,x=l.pixels[c],o.isNullOrUndef(y)?(p=l.min*u.categoryPercentage,_=u.barPercentage):(p=y*C,_=1),{chunk:p/C,ratio:_,start:x-p/2}),U=this.getStackIndex(s,this.getMeta().stack),$=W.start+W.chunk*U+W.chunk/2,Y=Math.min(o.valueOrDefault(L.maxBarThickness,1/0),W.chunk*W.ratio);return{base:$-Y/2,head:$+Y/2,center:$,size:Y}},draw:function(){var s=this.chart,d=this.getValueScale(),m=this.getMeta().data,c=this.getDataset(),l=m.length,u=0;for(o.canvas.clipArea(s.ctx,s.chartArea);u<l;++u)isNaN(d.getRightValue(c.data[u]))||m[u].draw();o.canvas.unclipArea(s.ctx)},setHoverStyle:function(s){var d=this.chart.data.datasets[s._datasetIndex],m=s._index,c=s.custom||{},l=s._model;l.backgroundColor=c.hoverBackgroundColor?c.hoverBackgroundColor:o.valueAtIndexOrDefault(d.hoverBackgroundColor,m,o.getHoverColor(l.backgroundColor)),l.borderColor=c.hoverBorderColor?c.hoverBorderColor:o.valueAtIndexOrDefault(d.hoverBorderColor,m,o.getHoverColor(l.borderColor)),l.borderWidth=c.hoverBorderWidth?c.hoverBorderWidth:o.valueAtIndexOrDefault(d.hoverBorderWidth,m,l.borderWidth)},removeHoverStyle:function(s){var d=this.chart.data.datasets[s._datasetIndex],m=s._index,c=s.custom||{},l=s._model,u=this.chart.options.elements.rectangle;l.backgroundColor=c.backgroundColor?c.backgroundColor:o.valueAtIndexOrDefault(d.backgroundColor,m,u.backgroundColor),l.borderColor=c.borderColor?c.borderColor:o.valueAtIndexOrDefault(d.borderColor,m,u.borderColor),l.borderWidth=c.borderWidth?c.borderWidth:o.valueAtIndexOrDefault(d.borderWidth,m,u.borderWidth)}}),h.controllers.horizontalBar=h.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{25:25,40:40,45:45}],16:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(h,s){var d=s.datasets[h.datasetIndex].label||"",m=s.datasets[h.datasetIndex].data[h.index];return d+": ("+h.xLabel+", "+h.yLabel+", "+m.r+")"}}}}),i.exports=function(h){h.controllers.bubble=h.DatasetController.extend({dataElementType:n.Point,update:function(s){var d=this,m=d.getMeta().data;o.each(m,function(c,l){d.updateElement(c,l,s)})},updateElement:function(s,d,m){var c=this,l=c.getMeta(),u=s.custom||{},p=c.getScaleForId(l.xAxisID),_=c.getScaleForId(l.yAxisID),y=c._resolveElementOptions(s,d),C=c.getDataset().data[d],x=c.index,w=m?p.getPixelForDecimal(.5):p.getPixelForValue(typeof C=="object"?C:NaN,d,x),A=m?_.getBasePixel():_.getPixelForValue(C,d,x);s._xScale=p,s._yScale=_,s._options=y,s._datasetIndex=x,s._index=d,s._model={backgroundColor:y.backgroundColor,borderColor:y.borderColor,borderWidth:y.borderWidth,hitRadius:y.hitRadius,pointStyle:y.pointStyle,radius:m?0:y.radius,skip:u.skip||isNaN(w)||isNaN(A),x:w,y:A},s.pivot()},setHoverStyle:function(s){var d=s._model,m=s._options;d.backgroundColor=o.valueOrDefault(m.hoverBackgroundColor,o.getHoverColor(m.backgroundColor)),d.borderColor=o.valueOrDefault(m.hoverBorderColor,o.getHoverColor(m.borderColor)),d.borderWidth=o.valueOrDefault(m.hoverBorderWidth,m.borderWidth),d.radius=m.radius+m.hoverRadius},removeHoverStyle:function(s){var d=s._model,m=s._options;d.backgroundColor=m.backgroundColor,d.borderColor=m.borderColor,d.borderWidth=m.borderWidth,d.radius=m.radius},_resolveElementOptions:function(s,d){var m,c,l,u=this.chart,p=u.data.datasets[this.index],_=s.custom||{},y=u.options.elements.point,C=o.options.resolve,x=p.data[d],w={},A={chart:u,dataIndex:d,dataset:p,datasetIndex:this.index},I=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(m=0,c=I.length;m<c;++m)w[l=I[m]]=C([_[l],p[l],y[l]],A,d);return w.radius=C([_.radius,x?x.r:void 0,p.radius,y.radius],A,d),w}})}},{25:25,40:40,45:45}],17:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(h){var s=[];s.push('<ul class="'+h.id+'-legend">');var d=h.data,m=d.datasets,c=d.labels;if(m.length)for(var l=0;l<m[0].data.length;++l)s.push('<li><span style="background-color:'+m[0].backgroundColor[l]+'"></span>'),c[l]&&s.push(c[l]),s.push("</li>");return s.push("</ul>"),s.join("")},legend:{labels:{generateLabels:function(h){var s=h.data;return s.labels.length&&s.datasets.length?s.labels.map(function(d,m){var c=h.getDatasetMeta(0),l=s.datasets[0],u=c.data[m],p=u&&u.custom||{},_=o.valueAtIndexOrDefault,y=h.options.elements.arc;return{text:d,fillStyle:p.backgroundColor?p.backgroundColor:_(l.backgroundColor,m,y.backgroundColor),strokeStyle:p.borderColor?p.borderColor:_(l.borderColor,m,y.borderColor),lineWidth:p.borderWidth?p.borderWidth:_(l.borderWidth,m,y.borderWidth),hidden:isNaN(l.data[m])||c.data[m].hidden,index:m}}):[]}},onClick:function(h,s){var d,m,c,l=s.index,u=this.chart;for(d=0,m=(u.data.datasets||[]).length;d<m;++d)(c=u.getDatasetMeta(d)).data[l]&&(c.data[l].hidden=!c.data[l].hidden);u.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(h,s){var d=s.labels[h.index],m=": "+s.datasets[h.datasetIndex].data[h.index];return o.isArray(d)?(d=d.slice())[0]+=m:d+=m,d}}}}),t._set("pie",o.clone(t.doughnut)),t._set("pie",{cutoutPercentage:0}),i.exports=function(h){h.controllers.doughnut=h.controllers.pie=h.DatasetController.extend({dataElementType:n.Arc,linkScales:o.noop,getRingIndex:function(s){for(var d=0,m=0;m<s;++m)this.chart.isDatasetVisible(m)&&++d;return d},update:function(s){var d=this,m=d.chart,c=m.chartArea,l=m.options,u=l.elements.arc,p=c.right-c.left-u.borderWidth,_=c.bottom-c.top-u.borderWidth,y=Math.min(p,_),C={x:0,y:0},x=d.getMeta(),w=l.cutoutPercentage,A=l.circumference;if(A<2*Math.PI){var I=l.rotation%(2*Math.PI),D=(I+=2*Math.PI*(I>=Math.PI?-1:I<-Math.PI?1:0))+A,z=Math.cos(I),V=Math.sin(I),T=Math.cos(D),M=Math.sin(D),F=I<=0&&D>=0||I<=2*Math.PI&&2*Math.PI<=D,L=I<=.5*Math.PI&&.5*Math.PI<=D||I<=2.5*Math.PI&&2.5*Math.PI<=D,W=I<=-Math.PI&&-Math.PI<=D||I<=Math.PI&&Math.PI<=D,U=I<=.5*-Math.PI&&.5*-Math.PI<=D||I<=1.5*Math.PI&&1.5*Math.PI<=D,$=w/100,Y=W?-1:Math.min(z*(z<0?1:$),T*(T<0?1:$)),G=U?-1:Math.min(V*(V<0?1:$),M*(M<0?1:$)),J=F?1:Math.max(z*(z>0?1:$),T*(T>0?1:$)),Q=L?1:Math.max(V*(V>0?1:$),M*(M>0?1:$)),oe=.5*(J-Y),O=.5*(Q-G);y=Math.min(p/oe,_/O),C={x:-.5*(J+Y),y:-.5*(Q+G)}}m.borderWidth=d.getMaxBorderWidth(x.data),m.outerRadius=Math.max((y-m.borderWidth)/2,0),m.innerRadius=Math.max(w?m.outerRadius/100*w:0,0),m.radiusLength=(m.outerRadius-m.innerRadius)/m.getVisibleDatasetCount(),m.offsetX=C.x*m.outerRadius,m.offsetY=C.y*m.outerRadius,x.total=d.calculateTotal(),d.outerRadius=m.outerRadius-m.radiusLength*d.getRingIndex(d.index),d.innerRadius=Math.max(d.outerRadius-m.radiusLength,0),o.each(x.data,function(N,B){d.updateElement(N,B,s)})},updateElement:function(s,d,m){var c=this,l=c.chart,u=l.chartArea,p=l.options,_=p.animation,y=(u.left+u.right)/2,C=(u.top+u.bottom)/2,x=p.rotation,w=p.rotation,A=c.getDataset(),I=m&&_.animateRotate||s.hidden?0:c.calculateCircumference(A.data[d])*(p.circumference/(2*Math.PI)),D=m&&_.animateScale?0:c.innerRadius,z=m&&_.animateScale?0:c.outerRadius,V=o.valueAtIndexOrDefault;o.extend(s,{_datasetIndex:c.index,_index:d,_model:{x:y+l.offsetX,y:C+l.offsetY,startAngle:x,endAngle:w,circumference:I,outerRadius:z,innerRadius:D,label:V(A.label,d,l.data.labels[d])}});var T=s._model;this.removeHoverStyle(s),m&&_.animateRotate||(T.startAngle=d===0?p.rotation:c.getMeta().data[d-1]._model.endAngle,T.endAngle=T.startAngle+T.circumference),s.pivot()},removeHoverStyle:function(s){h.DatasetController.prototype.removeHoverStyle.call(this,s,this.chart.options.elements.arc)},calculateTotal:function(){var s,d=this.getDataset(),m=this.getMeta(),c=0;return o.each(m.data,function(l,u){s=d.data[u],isNaN(s)||l.hidden||(c+=Math.abs(s))}),c},calculateCircumference:function(s){var d=this.getMeta().total;return d>0&&!isNaN(s)?2*Math.PI*(Math.abs(s)/d):0},getMaxBorderWidth:function(s){for(var d,m,c=0,l=this.index,u=s.length,p=0;p<u;p++)d=s[p]._model?s[p]._model.borderWidth:0,c=(m=s[p]._chart?s[p]._chart.config.data.datasets[l].hoverBorderWidth:0)>(c=d>c?d:c)?m:c;return c}})}},{25:25,40:40,45:45}],18:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),i.exports=function(h){function s(d,m){return o.valueOrDefault(d.showLine,m.showLines)}h.controllers.line=h.DatasetController.extend({datasetElementType:n.Line,dataElementType:n.Point,update:function(d){var m,c,l,u=this,p=u.getMeta(),_=p.dataset,y=p.data||[],C=u.chart.options,x=C.elements.line,w=u.getScaleForId(p.yAxisID),A=u.getDataset(),I=s(A,C);for(I&&(l=_.custom||{},A.tension!==void 0&&A.lineTension===void 0&&(A.lineTension=A.tension),_._scale=w,_._datasetIndex=u.index,_._children=y,_._model={spanGaps:A.spanGaps?A.spanGaps:C.spanGaps,tension:l.tension?l.tension:o.valueOrDefault(A.lineTension,x.tension),backgroundColor:l.backgroundColor?l.backgroundColor:A.backgroundColor||x.backgroundColor,borderWidth:l.borderWidth?l.borderWidth:A.borderWidth||x.borderWidth,borderColor:l.borderColor?l.borderColor:A.borderColor||x.borderColor,borderCapStyle:l.borderCapStyle?l.borderCapStyle:A.borderCapStyle||x.borderCapStyle,borderDash:l.borderDash?l.borderDash:A.borderDash||x.borderDash,borderDashOffset:l.borderDashOffset?l.borderDashOffset:A.borderDashOffset||x.borderDashOffset,borderJoinStyle:l.borderJoinStyle?l.borderJoinStyle:A.borderJoinStyle||x.borderJoinStyle,fill:l.fill?l.fill:A.fill!==void 0?A.fill:x.fill,steppedLine:l.steppedLine?l.steppedLine:o.valueOrDefault(A.steppedLine,x.stepped),cubicInterpolationMode:l.cubicInterpolationMode?l.cubicInterpolationMode:o.valueOrDefault(A.cubicInterpolationMode,x.cubicInterpolationMode)},_.pivot()),m=0,c=y.length;m<c;++m)u.updateElement(y[m],m,d);for(I&&_._model.tension!==0&&u.updateBezierControlPoints(),m=0,c=y.length;m<c;++m)y[m].pivot()},getPointBackgroundColor:function(d,m){var c=this.chart.options.elements.point.backgroundColor,l=this.getDataset(),u=d.custom||{};return u.backgroundColor?c=u.backgroundColor:l.pointBackgroundColor?c=o.valueAtIndexOrDefault(l.pointBackgroundColor,m,c):l.backgroundColor&&(c=l.backgroundColor),c},getPointBorderColor:function(d,m){var c=this.chart.options.elements.point.borderColor,l=this.getDataset(),u=d.custom||{};return u.borderColor?c=u.borderColor:l.pointBorderColor?c=o.valueAtIndexOrDefault(l.pointBorderColor,m,c):l.borderColor&&(c=l.borderColor),c},getPointBorderWidth:function(d,m){var c=this.chart.options.elements.point.borderWidth,l=this.getDataset(),u=d.custom||{};return isNaN(u.borderWidth)?!isNaN(l.pointBorderWidth)||o.isArray(l.pointBorderWidth)?c=o.valueAtIndexOrDefault(l.pointBorderWidth,m,c):isNaN(l.borderWidth)||(c=l.borderWidth):c=u.borderWidth,c},updateElement:function(d,m,c){var l,u,p=this,_=p.getMeta(),y=d.custom||{},C=p.getDataset(),x=p.index,w=C.data[m],A=p.getScaleForId(_.yAxisID),I=p.getScaleForId(_.xAxisID),D=p.chart.options.elements.point;C.radius!==void 0&&C.pointRadius===void 0&&(C.pointRadius=C.radius),C.hitRadius!==void 0&&C.pointHitRadius===void 0&&(C.pointHitRadius=C.hitRadius),l=I.getPixelForValue(typeof w=="object"?w:NaN,m,x),u=c?A.getBasePixel():p.calculatePointY(w,m,x),d._xScale=I,d._yScale=A,d._datasetIndex=x,d._index=m,d._model={x:l,y:u,skip:y.skip||isNaN(l)||isNaN(u),radius:y.radius||o.valueAtIndexOrDefault(C.pointRadius,m,D.radius),pointStyle:y.pointStyle||o.valueAtIndexOrDefault(C.pointStyle,m,D.pointStyle),backgroundColor:p.getPointBackgroundColor(d,m),borderColor:p.getPointBorderColor(d,m),borderWidth:p.getPointBorderWidth(d,m),tension:_.dataset._model?_.dataset._model.tension:0,steppedLine:!!_.dataset._model&&_.dataset._model.steppedLine,hitRadius:y.hitRadius||o.valueAtIndexOrDefault(C.pointHitRadius,m,D.hitRadius)}},calculatePointY:function(d,m,c){var l,u,p,_=this.chart,y=this.getMeta(),C=this.getScaleForId(y.yAxisID),x=0,w=0;if(C.options.stacked){for(l=0;l<c;l++)if(u=_.data.datasets[l],(p=_.getDatasetMeta(l)).type==="line"&&p.yAxisID===C.id&&_.isDatasetVisible(l)){var A=Number(C.getRightValue(u.data[m]));A<0?w+=A||0:x+=A||0}var I=Number(C.getRightValue(d));return I<0?C.getPixelForValue(w+I):C.getPixelForValue(x+I)}return C.getPixelForValue(d)},updateBezierControlPoints:function(){var d,m,c,l,u=this.getMeta(),p=this.chart.chartArea,_=u.data||[];function y(C,x,w){return Math.max(Math.min(C,w),x)}if(u.dataset._model.spanGaps&&(_=_.filter(function(C){return!C._model.skip})),u.dataset._model.cubicInterpolationMode==="monotone")o.splineCurveMonotone(_);else for(d=0,m=_.length;d<m;++d)c=_[d]._model,l=o.splineCurve(o.previousItem(_,d)._model,c,o.nextItem(_,d)._model,u.dataset._model.tension),c.controlPointPreviousX=l.previous.x,c.controlPointPreviousY=l.previous.y,c.controlPointNextX=l.next.x,c.controlPointNextY=l.next.y;if(this.chart.options.elements.line.capBezierPoints)for(d=0,m=_.length;d<m;++d)(c=_[d]._model).controlPointPreviousX=y(c.controlPointPreviousX,p.left,p.right),c.controlPointPreviousY=y(c.controlPointPreviousY,p.top,p.bottom),c.controlPointNextX=y(c.controlPointNextX,p.left,p.right),c.controlPointNextY=y(c.controlPointNextY,p.top,p.bottom)},draw:function(){var d=this.chart,m=this.getMeta(),c=m.data||[],l=d.chartArea,u=c.length,p=0;for(o.canvas.clipArea(d.ctx,l),s(this.getDataset(),d.options)&&m.dataset.draw(),o.canvas.unclipArea(d.ctx);p<u;++p)c[p].draw(l)},setHoverStyle:function(d){var m=this.chart.data.datasets[d._datasetIndex],c=d._index,l=d.custom||{},u=d._model;u.radius=l.hoverRadius||o.valueAtIndexOrDefault(m.pointHoverRadius,c,this.chart.options.elements.point.hoverRadius),u.backgroundColor=l.hoverBackgroundColor||o.valueAtIndexOrDefault(m.pointHoverBackgroundColor,c,o.getHoverColor(u.backgroundColor)),u.borderColor=l.hoverBorderColor||o.valueAtIndexOrDefault(m.pointHoverBorderColor,c,o.getHoverColor(u.borderColor)),u.borderWidth=l.hoverBorderWidth||o.valueAtIndexOrDefault(m.pointHoverBorderWidth,c,u.borderWidth)},removeHoverStyle:function(d){var m=this,c=m.chart.data.datasets[d._datasetIndex],l=d._index,u=d.custom||{},p=d._model;c.radius!==void 0&&c.pointRadius===void 0&&(c.pointRadius=c.radius),p.radius=u.radius||o.valueAtIndexOrDefault(c.pointRadius,l,m.chart.options.elements.point.radius),p.backgroundColor=m.getPointBackgroundColor(d,l),p.borderColor=m.getPointBorderColor(d,l),p.borderWidth=m.getPointBorderWidth(d,l)}})}},{25:25,40:40,45:45}],19:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(h){var s=[];s.push('<ul class="'+h.id+'-legend">');var d=h.data,m=d.datasets,c=d.labels;if(m.length)for(var l=0;l<m[0].data.length;++l)s.push('<li><span style="background-color:'+m[0].backgroundColor[l]+'"></span>'),c[l]&&s.push(c[l]),s.push("</li>");return s.push("</ul>"),s.join("")},legend:{labels:{generateLabels:function(h){var s=h.data;return s.labels.length&&s.datasets.length?s.labels.map(function(d,m){var c=h.getDatasetMeta(0),l=s.datasets[0],u=c.data[m].custom||{},p=o.valueAtIndexOrDefault,_=h.options.elements.arc;return{text:d,fillStyle:u.backgroundColor?u.backgroundColor:p(l.backgroundColor,m,_.backgroundColor),strokeStyle:u.borderColor?u.borderColor:p(l.borderColor,m,_.borderColor),lineWidth:u.borderWidth?u.borderWidth:p(l.borderWidth,m,_.borderWidth),hidden:isNaN(l.data[m])||c.data[m].hidden,index:m}}):[]}},onClick:function(h,s){var d,m,c,l=s.index,u=this.chart;for(d=0,m=(u.data.datasets||[]).length;d<m;++d)(c=u.getDatasetMeta(d)).data[l].hidden=!c.data[l].hidden;u.update()}},tooltips:{callbacks:{title:function(){return""},label:function(h,s){return s.labels[h.index]+": "+h.yLabel}}}}),i.exports=function(h){h.controllers.polarArea=h.DatasetController.extend({dataElementType:n.Arc,linkScales:o.noop,update:function(s){var d=this,m=d.chart,c=m.chartArea,l=d.getMeta(),u=m.options,p=u.elements.arc,_=Math.min(c.right-c.left,c.bottom-c.top);m.outerRadius=Math.max((_-p.borderWidth/2)/2,0),m.innerRadius=Math.max(u.cutoutPercentage?m.outerRadius/100*u.cutoutPercentage:1,0),m.radiusLength=(m.outerRadius-m.innerRadius)/m.getVisibleDatasetCount(),d.outerRadius=m.outerRadius-m.radiusLength*d.index,d.innerRadius=d.outerRadius-m.radiusLength,l.count=d.countVisibleElements(),o.each(l.data,function(y,C){d.updateElement(y,C,s)})},updateElement:function(s,d,m){for(var c=this,l=c.chart,u=c.getDataset(),p=l.options,_=p.animation,y=l.scale,C=l.data.labels,x=c.calculateCircumference(u.data[d]),w=y.xCenter,A=y.yCenter,I=0,D=c.getMeta(),z=0;z<d;++z)isNaN(u.data[z])||D.data[z].hidden||++I;var V=p.startAngle,T=s.hidden?0:y.getDistanceFromCenterForValue(u.data[d]),M=V+x*I,F=M+(s.hidden?0:x),L=_.animateScale?0:y.getDistanceFromCenterForValue(u.data[d]);o.extend(s,{_datasetIndex:c.index,_index:d,_scale:y,_model:{x:w,y:A,innerRadius:0,outerRadius:m?L:T,startAngle:m&&_.animateRotate?V:M,endAngle:m&&_.animateRotate?V:F,label:o.valueAtIndexOrDefault(C,d,C[d])}}),c.removeHoverStyle(s),s.pivot()},removeHoverStyle:function(s){h.DatasetController.prototype.removeHoverStyle.call(this,s,this.chart.options.elements.arc)},countVisibleElements:function(){var s=this.getDataset(),d=this.getMeta(),m=0;return o.each(d.data,function(c,l){isNaN(s.data[l])||c.hidden||m++}),m},calculateCircumference:function(s){var d=this.getMeta().count;return d>0&&!isNaN(s)?2*Math.PI/d:0}})}},{25:25,40:40,45:45}],20:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),i.exports=function(h){h.controllers.radar=h.DatasetController.extend({datasetElementType:n.Line,dataElementType:n.Point,linkScales:o.noop,update:function(s){var d=this,m=d.getMeta(),c=m.dataset,l=m.data,u=c.custom||{},p=d.getDataset(),_=d.chart.options.elements.line,y=d.chart.scale;p.tension!==void 0&&p.lineTension===void 0&&(p.lineTension=p.tension),o.extend(m.dataset,{_datasetIndex:d.index,_scale:y,_children:l,_loop:!0,_model:{tension:u.tension?u.tension:o.valueOrDefault(p.lineTension,_.tension),backgroundColor:u.backgroundColor?u.backgroundColor:p.backgroundColor||_.backgroundColor,borderWidth:u.borderWidth?u.borderWidth:p.borderWidth||_.borderWidth,borderColor:u.borderColor?u.borderColor:p.borderColor||_.borderColor,fill:u.fill?u.fill:p.fill!==void 0?p.fill:_.fill,borderCapStyle:u.borderCapStyle?u.borderCapStyle:p.borderCapStyle||_.borderCapStyle,borderDash:u.borderDash?u.borderDash:p.borderDash||_.borderDash,borderDashOffset:u.borderDashOffset?u.borderDashOffset:p.borderDashOffset||_.borderDashOffset,borderJoinStyle:u.borderJoinStyle?u.borderJoinStyle:p.borderJoinStyle||_.borderJoinStyle}}),m.dataset.pivot(),o.each(l,function(C,x){d.updateElement(C,x,s)},d),d.updateBezierControlPoints()},updateElement:function(s,d,m){var c=this,l=s.custom||{},u=c.getDataset(),p=c.chart.scale,_=c.chart.options.elements.point,y=p.getPointPositionForValue(d,u.data[d]);u.radius!==void 0&&u.pointRadius===void 0&&(u.pointRadius=u.radius),u.hitRadius!==void 0&&u.pointHitRadius===void 0&&(u.pointHitRadius=u.hitRadius),o.extend(s,{_datasetIndex:c.index,_index:d,_scale:p,_model:{x:m?p.xCenter:y.x,y:m?p.yCenter:y.y,tension:l.tension?l.tension:o.valueOrDefault(u.lineTension,c.chart.options.elements.line.tension),radius:l.radius?l.radius:o.valueAtIndexOrDefault(u.pointRadius,d,_.radius),backgroundColor:l.backgroundColor?l.backgroundColor:o.valueAtIndexOrDefault(u.pointBackgroundColor,d,_.backgroundColor),borderColor:l.borderColor?l.borderColor:o.valueAtIndexOrDefault(u.pointBorderColor,d,_.borderColor),borderWidth:l.borderWidth?l.borderWidth:o.valueAtIndexOrDefault(u.pointBorderWidth,d,_.borderWidth),pointStyle:l.pointStyle?l.pointStyle:o.valueAtIndexOrDefault(u.pointStyle,d,_.pointStyle),hitRadius:l.hitRadius?l.hitRadius:o.valueAtIndexOrDefault(u.pointHitRadius,d,_.hitRadius)}}),s._model.skip=l.skip?l.skip:isNaN(s._model.x)||isNaN(s._model.y)},updateBezierControlPoints:function(){var s=this.chart.chartArea,d=this.getMeta();o.each(d.data,function(m,c){var l=m._model,u=o.splineCurve(o.previousItem(d.data,c,!0)._model,l,o.nextItem(d.data,c,!0)._model,l.tension);l.controlPointPreviousX=Math.max(Math.min(u.previous.x,s.right),s.left),l.controlPointPreviousY=Math.max(Math.min(u.previous.y,s.bottom),s.top),l.controlPointNextX=Math.max(Math.min(u.next.x,s.right),s.left),l.controlPointNextY=Math.max(Math.min(u.next.y,s.bottom),s.top),m.pivot()})},setHoverStyle:function(s){var d=this.chart.data.datasets[s._datasetIndex],m=s.custom||{},c=s._index,l=s._model;l.radius=m.hoverRadius?m.hoverRadius:o.valueAtIndexOrDefault(d.pointHoverRadius,c,this.chart.options.elements.point.hoverRadius),l.backgroundColor=m.hoverBackgroundColor?m.hoverBackgroundColor:o.valueAtIndexOrDefault(d.pointHoverBackgroundColor,c,o.getHoverColor(l.backgroundColor)),l.borderColor=m.hoverBorderColor?m.hoverBorderColor:o.valueAtIndexOrDefault(d.pointHoverBorderColor,c,o.getHoverColor(l.borderColor)),l.borderWidth=m.hoverBorderWidth?m.hoverBorderWidth:o.valueAtIndexOrDefault(d.pointHoverBorderWidth,c,l.borderWidth)},removeHoverStyle:function(s){var d=this.chart.data.datasets[s._datasetIndex],m=s.custom||{},c=s._index,l=s._model,u=this.chart.options.elements.point;l.radius=m.radius?m.radius:o.valueAtIndexOrDefault(d.pointRadius,c,u.radius),l.backgroundColor=m.backgroundColor?m.backgroundColor:o.valueAtIndexOrDefault(d.pointBackgroundColor,c,u.backgroundColor),l.borderColor=m.borderColor?m.borderColor:o.valueAtIndexOrDefault(d.pointBorderColor,c,u.borderColor),l.borderWidth=m.borderWidth?m.borderWidth:o.valueAtIndexOrDefault(d.pointBorderWidth,c,u.borderWidth)}})}},{25:25,40:40,45:45}],21:[function(a,i,e){a(25)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),i.exports=function(t){t.controllers.scatter=t.controllers.line}},{25:25}],22:[function(a,i,e){var t=a(25),n=a(26),o=a(45);t._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:o.noop,onComplete:o.noop}}),i.exports=function(h){h.Animation=n.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),h.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(s,d,m,c){var l,u,p=this.animations;for(d.chart=s,c||(s.animating=!0),l=0,u=p.length;l<u;++l)if(p[l].chart===s)return void(p[l]=d);p.push(d),p.length===1&&this.requestAnimationFrame()},cancelAnimation:function(s){var d=o.findIndex(this.animations,function(m){return m.chart===s});d!==-1&&(this.animations.splice(d,1),s.animating=!1)},requestAnimationFrame:function(){var s=this;s.request===null&&(s.request=o.requestAnimFrame.call(window,function(){s.request=null,s.startDigest()}))},startDigest:function(){var s=this,d=Date.now(),m=0;s.dropFrames>1&&(m=Math.floor(s.dropFrames),s.dropFrames=s.dropFrames%1),s.advance(1+m);var c=Date.now();s.dropFrames+=(c-d)/s.frameDuration,s.animations.length>0&&s.requestAnimationFrame()},advance:function(s){for(var d,m,c=this.animations,l=0;l<c.length;)m=(d=c[l]).chart,d.currentStep=(d.currentStep||0)+s,d.currentStep=Math.min(d.currentStep,d.numSteps),o.callback(d.render,[m,d],m),o.callback(d.onAnimationProgress,[d],m),d.currentStep>=d.numSteps?(o.callback(d.onAnimationComplete,[d],m),m.animating=!1,c.splice(l,1)):++l}},Object.defineProperty(h.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(h.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(s){this.chart=s}})}},{25:25,26:26,45:45}],23:[function(a,i,e){var t=a(25),n=a(45),o=a(28),h=a(30),s=a(48),d=a(31);i.exports=function(m){function c(l){return l==="top"||l==="bottom"}m.types={},m.instances={},m.controllers={},n.extend(m.prototype,{construct:function(l,u){var p,_,y=this;(_=(p=(p=u)||{}).data=p.data||{}).datasets=_.datasets||[],_.labels=_.labels||[],p.options=n.configMerge(t.global,t[p.type],p.options||{}),u=p;var C=s.acquireContext(l,u),x=C&&C.canvas,w=x&&x.height,A=x&&x.width;y.id=n.uid(),y.ctx=C,y.canvas=x,y.config=u,y.width=A,y.height=w,y.aspectRatio=w?A/w:null,y.options=u.options,y._bufferedRender=!1,y.chart=y,y.controller=y,m.instances[y.id]=y,Object.defineProperty(y,"data",{get:function(){return y.config.data},set:function(I){y.config.data=I}}),C&&x?(y.initialize(),y.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var l=this;return d.notify(l,"beforeInit"),n.retinaScale(l,l.options.devicePixelRatio),l.bindEvents(),l.options.responsive&&l.resize(!0),l.ensureScalesHaveIDs(),l.buildOrUpdateScales(),l.initToolTip(),d.notify(l,"afterInit"),l},clear:function(){return n.canvas.clear(this),this},stop:function(){return m.animationService.cancelAnimation(this),this},resize:function(l){var u=this,p=u.options,_=u.canvas,y=p.maintainAspectRatio&&u.aspectRatio||null,C=Math.max(0,Math.floor(n.getMaximumWidth(_))),x=Math.max(0,Math.floor(y?C/y:n.getMaximumHeight(_)));if((u.width!==C||u.height!==x)&&(_.width=u.width=C,_.height=u.height=x,_.style.width=C+"px",_.style.height=x+"px",n.retinaScale(u,p.devicePixelRatio),!l)){var w={width:C,height:x};d.notify(u,"resize",[w]),u.options.onResize&&u.options.onResize(u,w),u.stop(),u.update(u.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var l=this.options,u=l.scales||{},p=l.scale;n.each(u.xAxes,function(_,y){_.id=_.id||"x-axis-"+y}),n.each(u.yAxes,function(_,y){_.id=_.id||"y-axis-"+y}),p&&(p.id=p.id||"scale")},buildOrUpdateScales:function(){var l=this,u=l.options,p=l.scales||{},_=[],y=Object.keys(p).reduce(function(C,x){return C[x]=!1,C},{});u.scales&&(_=_.concat((u.scales.xAxes||[]).map(function(C){return{options:C,dtype:"category",dposition:"bottom"}}),(u.scales.yAxes||[]).map(function(C){return{options:C,dtype:"linear",dposition:"left"}}))),u.scale&&_.push({options:u.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),n.each(_,function(C){var x=C.options,w=x.id,A=n.valueOrDefault(x.type,C.dtype);c(x.position)!==c(C.dposition)&&(x.position=C.dposition),y[w]=!0;var I=null;if(w in p&&p[w].type===A)(I=p[w]).options=x,I.ctx=l.ctx,I.chart=l;else{var D=m.scaleService.getScaleConstructor(A);if(!D)return;I=new D({id:w,type:A,options:x,ctx:l.ctx,chart:l}),p[I.id]=I}I.mergeTicksOptions(),C.isDefault&&(l.scale=I)}),n.each(y,function(C,x){C||delete p[x]}),l.scales=p,m.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var l=this,u=[],p=[];return n.each(l.data.datasets,function(_,y){var C=l.getDatasetMeta(y),x=_.type||l.config.type;if(C.type&&C.type!==x&&(l.destroyDatasetMeta(y),C=l.getDatasetMeta(y)),C.type=x,u.push(C.type),C.controller)C.controller.updateIndex(y),C.controller.linkScales();else{var w=m.controllers[C.type];if(w===void 0)throw new Error('"'+C.type+'" is not a chart type.');C.controller=new w(l,y),p.push(C.controller)}},l),p},resetElements:function(){var l=this;n.each(l.data.datasets,function(u,p){l.getDatasetMeta(p).controller.reset()},l)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(l){var u,p,_=this;if(l&&typeof l=="object"||(l={duration:l,lazy:arguments[1]}),p=(u=_).options,n.each(u.scales,function(C){h.removeBox(u,C)}),p=n.configMerge(m.defaults.global,m.defaults[u.config.type],p),u.options=u.config.options=p,u.ensureScalesHaveIDs(),u.buildOrUpdateScales(),u.tooltip._options=p.tooltips,u.tooltip.initialize(),d._invalidate(_),d.notify(_,"beforeUpdate")!==!1){_.tooltip._data=_.data;var y=_.buildOrUpdateControllers();n.each(_.data.datasets,function(C,x){_.getDatasetMeta(x).controller.buildOrUpdateElements()},_),_.updateLayout(),_.options.animation&&_.options.animation.duration&&n.each(y,function(C){C.reset()}),_.updateDatasets(),_.tooltip.initialize(),_.lastActive=[],d.notify(_,"afterUpdate"),_._bufferedRender?_._bufferedRequest={duration:l.duration,easing:l.easing,lazy:l.lazy}:_.render(l)}},updateLayout:function(){d.notify(this,"beforeLayout")!==!1&&(h.update(this,this.width,this.height),d.notify(this,"afterScaleUpdate"),d.notify(this,"afterLayout"))},updateDatasets:function(){if(d.notify(this,"beforeDatasetsUpdate")!==!1){for(var l=0,u=this.data.datasets.length;l<u;++l)this.updateDataset(l);d.notify(this,"afterDatasetsUpdate")}},updateDataset:function(l){var u=this.getDatasetMeta(l),p={meta:u,index:l};d.notify(this,"beforeDatasetUpdate",[p])!==!1&&(u.controller.update(),d.notify(this,"afterDatasetUpdate",[p]))},render:function(l){var u=this;l&&typeof l=="object"||(l={duration:l,lazy:arguments[1]});var p=l.duration,_=l.lazy;if(d.notify(u,"beforeRender")!==!1){var y=u.options.animation,C=function(w){d.notify(u,"afterRender"),n.callback(y&&y.onComplete,[w],u)};if(y&&(p!==void 0&&p!==0||p===void 0&&y.duration!==0)){var x=new m.Animation({numSteps:(p||y.duration)/16.66,easing:l.easing||y.easing,render:function(w,A){var I=n.easing.effects[A.easing],D=A.currentStep,z=D/A.numSteps;w.draw(I(z),z,D)},onAnimationProgress:y.onProgress,onAnimationComplete:C});m.animationService.addAnimation(u,x,p,_)}else u.draw(),C(new m.Animation({numSteps:0,chart:u}));return u}},draw:function(l){var u=this;u.clear(),n.isNullOrUndef(l)&&(l=1),u.transition(l),d.notify(u,"beforeDraw",[l])!==!1&&(n.each(u.boxes,function(p){p.draw(u.chartArea)},u),u.scale&&u.scale.draw(),u.drawDatasets(l),u._drawTooltip(l),d.notify(u,"afterDraw",[l]))},transition:function(l){for(var u=0,p=(this.data.datasets||[]).length;u<p;++u)this.isDatasetVisible(u)&&this.getDatasetMeta(u).controller.transition(l);this.tooltip.transition(l)},drawDatasets:function(l){var u=this;if(d.notify(u,"beforeDatasetsDraw",[l])!==!1){for(var p=(u.data.datasets||[]).length-1;p>=0;--p)u.isDatasetVisible(p)&&u.drawDataset(p,l);d.notify(u,"afterDatasetsDraw",[l])}},drawDataset:function(l,u){var p=this.getDatasetMeta(l),_={meta:p,index:l,easingValue:u};d.notify(this,"beforeDatasetDraw",[_])!==!1&&(p.controller.draw(u),d.notify(this,"afterDatasetDraw",[_]))},_drawTooltip:function(l){var u=this.tooltip,p={tooltip:u,easingValue:l};d.notify(this,"beforeTooltipDraw",[p])!==!1&&(u.draw(),d.notify(this,"afterTooltipDraw",[p]))},getElementAtEvent:function(l){return o.modes.single(this,l)},getElementsAtEvent:function(l){return o.modes.label(this,l,{intersect:!0})},getElementsAtXAxis:function(l){return o.modes["x-axis"](this,l,{intersect:!0})},getElementsAtEventForMode:function(l,u,p){var _=o.modes[u];return typeof _=="function"?_(this,l,p):[]},getDatasetAtEvent:function(l){return o.modes.dataset(this,l,{intersect:!0})},getDatasetMeta:function(l){var u=this.data.datasets[l];u._meta||(u._meta={});var p=u._meta[this.id];return p||(p=u._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),p},getVisibleDatasetCount:function(){for(var l=0,u=0,p=this.data.datasets.length;u<p;++u)this.isDatasetVisible(u)&&l++;return l},isDatasetVisible:function(l){var u=this.getDatasetMeta(l);return typeof u.hidden=="boolean"?!u.hidden:!this.data.datasets[l].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(l){var u=this.id,p=this.data.datasets[l],_=p._meta&&p._meta[u];_&&(_.controller.destroy(),delete p._meta[u])},destroy:function(){var l,u,p=this,_=p.canvas;for(p.stop(),l=0,u=p.data.datasets.length;l<u;++l)p.destroyDatasetMeta(l);_&&(p.unbindEvents(),n.canvas.clear(p),s.releaseContext(p.ctx),p.canvas=null,p.ctx=null),d.notify(p,"destroy"),delete m.instances[p.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var l=this;l.tooltip=new m.Tooltip({_chart:l,_chartInstance:l,_data:l.data,_options:l.options.tooltips},l)},bindEvents:function(){var l=this,u=l._listeners={},p=function(){l.eventHandler.apply(l,arguments)};n.each(l.options.events,function(_){s.addEventListener(l,_,p),u[_]=p}),l.options.responsive&&(p=function(){l.resize()},s.addEventListener(l,"resize",p),u.resize=p)},unbindEvents:function(){var l=this,u=l._listeners;u&&(delete l._listeners,n.each(u,function(p,_){s.removeEventListener(l,_,p)}))},updateHoverStyle:function(l,u,p){var _,y,C,x=p?"setHoverStyle":"removeHoverStyle";for(y=0,C=l.length;y<C;++y)(_=l[y])&&this.getDatasetMeta(_._datasetIndex).controller[x](_)},eventHandler:function(l){var u=this,p=u.tooltip;if(d.notify(u,"beforeEvent",[l])!==!1){u._bufferedRender=!0,u._bufferedRequest=null;var _=u.handleEvent(l);p&&(_=p._start?p.handleEvent(l):_|p.handleEvent(l)),d.notify(u,"afterEvent",[l]);var y=u._bufferedRequest;return y?u.render(y):_&&!u.animating&&(u.stop(),u.render(u.options.hover.animationDuration,!0)),u._bufferedRender=!1,u._bufferedRequest=null,u}},handleEvent:function(l){var u,p=this,_=p.options||{},y=_.hover;return p.lastActive=p.lastActive||[],l.type==="mouseout"?p.active=[]:p.active=p.getElementsAtEventForMode(l,y.mode,y),n.callback(_.onHover||_.hover.onHover,[l.native,p.active],p),l.type!=="mouseup"&&l.type!=="click"||_.onClick&&_.onClick.call(p,l.native,p.active),p.lastActive.length&&p.updateHoverStyle(p.lastActive,y.mode,!1),p.active.length&&y.mode&&p.updateHoverStyle(p.active,y.mode,!0),u=!n.arrayEquals(p.active,p.lastActive),p.lastActive=p.active,u}}),m.Controller=m}},{25:25,28:28,30:30,31:31,45:45,48:48}],24:[function(a,i,e){var t=a(45);i.exports=function(n){var o=["push","pop","shift","splice","unshift"];function h(s,d){var m=s._chartjs;if(m){var c=m.listeners,l=c.indexOf(d);l!==-1&&c.splice(l,1),c.length>0||(o.forEach(function(u){delete s[u]}),delete s._chartjs)}}n.DatasetController=function(s,d){this.initialize(s,d)},t.extend(n.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(s,d){this.chart=s,this.index=d,this.linkScales(),this.addElements()},updateIndex:function(s){this.index=s},linkScales:function(){var s=this,d=s.getMeta(),m=s.getDataset();d.xAxisID!==null&&d.xAxisID in s.chart.scales||(d.xAxisID=m.xAxisID||s.chart.options.scales.xAxes[0].id),d.yAxisID!==null&&d.yAxisID in s.chart.scales||(d.yAxisID=m.yAxisID||s.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(s){return this.chart.scales[s]},reset:function(){this.update(!0)},destroy:function(){this._data&&h(this._data,this)},createMetaDataset:function(){var s=this.datasetElementType;return s&&new s({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(s){var d=this.dataElementType;return d&&new d({_chart:this.chart,_datasetIndex:this.index,_index:s})},addElements:function(){var s,d,m=this.getMeta(),c=this.getDataset().data||[],l=m.data;for(s=0,d=c.length;s<d;++s)l[s]=l[s]||this.createMetaData(s);m.dataset=m.dataset||this.createMetaDataset()},addElementAndReset:function(s){var d=this.createMetaData(s);this.getMeta().data.splice(s,0,d),this.updateElement(d,s,!0)},buildOrUpdateElements:function(){var s,d,m=this,c=m.getDataset(),l=c.data||(c.data=[]);m._data!==l&&(m._data&&h(m._data,m),d=m,(s=l)._chartjs?s._chartjs.listeners.push(d):(Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[d]}}),o.forEach(function(u){var p="onData"+u.charAt(0).toUpperCase()+u.slice(1),_=s[u];Object.defineProperty(s,u,{configurable:!0,enumerable:!1,value:function(){var y=Array.prototype.slice.call(arguments),C=_.apply(this,y);return t.each(s._chartjs.listeners,function(x){typeof x[p]=="function"&&x[p].apply(x,y)}),C}})})),m._data=l),m.resyncElements()},update:t.noop,transition:function(s){for(var d=this.getMeta(),m=d.data||[],c=m.length,l=0;l<c;++l)m[l].transition(s);d.dataset&&d.dataset.transition(s)},draw:function(){var s=this.getMeta(),d=s.data||[],m=d.length,c=0;for(s.dataset&&s.dataset.draw();c<m;++c)d[c].draw()},removeHoverStyle:function(s,d){var m=this.chart.data.datasets[s._datasetIndex],c=s._index,l=s.custom||{},u=t.valueAtIndexOrDefault,p=s._model;p.backgroundColor=l.backgroundColor?l.backgroundColor:u(m.backgroundColor,c,d.backgroundColor),p.borderColor=l.borderColor?l.borderColor:u(m.borderColor,c,d.borderColor),p.borderWidth=l.borderWidth?l.borderWidth:u(m.borderWidth,c,d.borderWidth)},setHoverStyle:function(s){var d=this.chart.data.datasets[s._datasetIndex],m=s._index,c=s.custom||{},l=t.valueAtIndexOrDefault,u=t.getHoverColor,p=s._model;p.backgroundColor=c.hoverBackgroundColor?c.hoverBackgroundColor:l(d.hoverBackgroundColor,m,u(p.backgroundColor)),p.borderColor=c.hoverBorderColor?c.hoverBorderColor:l(d.hoverBorderColor,m,u(p.borderColor)),p.borderWidth=c.hoverBorderWidth?c.hoverBorderWidth:l(d.hoverBorderWidth,m,p.borderWidth)},resyncElements:function(){var s=this.getMeta(),d=this.getDataset().data,m=s.data.length,c=d.length;c<m?s.data.splice(c,m-c):c>m&&this.insertElements(m,c-m)},insertElements:function(s,d){for(var m=0;m<d;++m)this.addElementAndReset(s+m)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(s,d){this.getMeta().data.splice(s,d),this.insertElements(s,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),n.DatasetController.extend=t.inherits}},{45:45}],25:[function(a,i,e){var t=a(45);i.exports={_set:function(n,o){return t.merge(this[n]||(this[n]={}),o)}}},{45:45}],26:[function(a,i,e){var t=a(3),n=a(45),o=function(h){n.extend(this,h),this.initialize.apply(this,arguments)};n.extend(o.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var h=this;return h._view||(h._view=n.clone(h._model)),h._start={},h},transition:function(h){var s=this,d=s._model,m=s._start,c=s._view;return d&&h!==1?(c||(c=s._view={}),m||(m=s._start={}),function(l,u,p,_){var y,C,x,w,A,I,D,z,V,T=Object.keys(p);for(y=0,C=T.length;y<C;++y)if(I=p[x=T[y]],u.hasOwnProperty(x)||(u[x]=I),(w=u[x])!==I&&x[0]!=="_"){if(l.hasOwnProperty(x)||(l[x]=w),(D=typeof I)==typeof(A=l[x])){if(D==="string"){if((z=t(A)).valid&&(V=t(I)).valid){u[x]=V.mix(z,_).rgbString();continue}}else if(D==="number"&&isFinite(A)&&isFinite(I)){u[x]=A+(I-A)*_;continue}}u[x]=I}}(m,c,d,h),s):(s._view=d,s._start=null,s)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return n.isNumber(this._model.x)&&n.isNumber(this._model.y)}}),o.extend=n.inherits,i.exports=o},{3:3,45:45}],27:[function(a,i,e){var t=a(3),n=a(25),o=a(45);i.exports=function(h){function s(c,l,u){var p;return typeof c=="string"?(p=parseInt(c,10),c.indexOf("%")!==-1&&(p=p/100*l.parentNode[u])):p=c,p}function d(c){return c!=null&&c!=="none"}function m(c,l,u){var p=document.defaultView,_=c.parentNode,y=p.getComputedStyle(c)[l],C=p.getComputedStyle(_)[l],x=d(y),w=d(C),A=Number.POSITIVE_INFINITY;return x||w?Math.min(x?s(y,c,u):A,w?s(C,_,u):A):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(c,l,u,p){var _=l[c]||{},y=u[c];c==="scales"?l[c]=o.scaleMerge(_,y):c==="scale"?l[c]=o.merge(_,[h.scaleService.getScaleDefaults(y.type),y]):o._merger(c,l,u,p)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(c,l,u,p){if(c==="xAxes"||c==="yAxes"){var _,y,C,x=u[c].length;for(l[c]||(l[c]=[]),_=0;_<x;++_)C=u[c][_],y=o.valueOrDefault(C.type,c==="xAxes"?"category":"linear"),_>=l[c].length&&l[c].push({}),!l[c][_].type||C.type&&C.type!==l[c][_].type?o.merge(l[c][_],[h.scaleService.getScaleDefaults(y),C]):o.merge(l[c][_],C)}else o._merger(c,l,u,p)}})},o.where=function(c,l){if(o.isArray(c)&&Array.prototype.filter)return c.filter(l);var u=[];return o.each(c,function(p){l(p)&&u.push(p)}),u},o.findIndex=Array.prototype.findIndex?function(c,l,u){return c.findIndex(l,u)}:function(c,l,u){u=u===void 0?c:u;for(var p=0,_=c.length;p<_;++p)if(l.call(u,c[p],p,c))return p;return-1},o.findNextWhere=function(c,l,u){o.isNullOrUndef(u)&&(u=-1);for(var p=u+1;p<c.length;p++){var _=c[p];if(l(_))return _}},o.findPreviousWhere=function(c,l,u){o.isNullOrUndef(u)&&(u=c.length);for(var p=u-1;p>=0;p--){var _=c[p];if(l(_))return _}},o.isNumber=function(c){return!isNaN(parseFloat(c))&&isFinite(c)},o.almostEquals=function(c,l,u){return Math.abs(c-l)<u},o.almostWhole=function(c,l){var u=Math.round(c);return u-l<c&&u+l>c},o.max=function(c){return c.reduce(function(l,u){return isNaN(u)?l:Math.max(l,u)},Number.NEGATIVE_INFINITY)},o.min=function(c){return c.reduce(function(l,u){return isNaN(u)?l:Math.min(l,u)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(c){return Math.sign(c)}:function(c){return(c=+c)==0||isNaN(c)?c:c>0?1:-1},o.log10=Math.log10?function(c){return Math.log10(c)}:function(c){var l=Math.log(c)*Math.LOG10E,u=Math.round(l);return c===Math.pow(10,u)?u:l},o.toRadians=function(c){return c*(Math.PI/180)},o.toDegrees=function(c){return c*(180/Math.PI)},o.getAngleFromPoint=function(c,l){var u=l.x-c.x,p=l.y-c.y,_=Math.sqrt(u*u+p*p),y=Math.atan2(p,u);return y<-.5*Math.PI&&(y+=2*Math.PI),{angle:y,distance:_}},o.distanceBetweenPoints=function(c,l){return Math.sqrt(Math.pow(l.x-c.x,2)+Math.pow(l.y-c.y,2))},o.aliasPixel=function(c){return c%2==0?0:.5},o.splineCurve=function(c,l,u,p){var _=c.skip?l:c,y=l,C=u.skip?l:u,x=Math.sqrt(Math.pow(y.x-_.x,2)+Math.pow(y.y-_.y,2)),w=Math.sqrt(Math.pow(C.x-y.x,2)+Math.pow(C.y-y.y,2)),A=x/(x+w),I=w/(x+w),D=p*(A=isNaN(A)?0:A),z=p*(I=isNaN(I)?0:I);return{previous:{x:y.x-D*(C.x-_.x),y:y.y-D*(C.y-_.y)},next:{x:y.x+z*(C.x-_.x),y:y.y+z*(C.y-_.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(c){var l,u,p,_,y,C,x,w,A,I=(c||[]).map(function(V){return{model:V._model,deltaK:0,mK:0}}),D=I.length;for(l=0;l<D;++l)if(!(p=I[l]).model.skip){if(u=l>0?I[l-1]:null,(_=l<D-1?I[l+1]:null)&&!_.model.skip){var z=_.model.x-p.model.x;p.deltaK=z!==0?(_.model.y-p.model.y)/z:0}!u||u.model.skip?p.mK=p.deltaK:!_||_.model.skip?p.mK=u.deltaK:this.sign(u.deltaK)!==this.sign(p.deltaK)?p.mK=0:p.mK=(u.deltaK+p.deltaK)/2}for(l=0;l<D-1;++l)p=I[l],_=I[l+1],p.model.skip||_.model.skip||(o.almostEquals(p.deltaK,0,this.EPSILON)?p.mK=_.mK=0:(y=p.mK/p.deltaK,C=_.mK/p.deltaK,(w=Math.pow(y,2)+Math.pow(C,2))<=9||(x=3/Math.sqrt(w),p.mK=y*x*p.deltaK,_.mK=C*x*p.deltaK)));for(l=0;l<D;++l)(p=I[l]).model.skip||(u=l>0?I[l-1]:null,_=l<D-1?I[l+1]:null,u&&!u.model.skip&&(A=(p.model.x-u.model.x)/3,p.model.controlPointPreviousX=p.model.x-A,p.model.controlPointPreviousY=p.model.y-A*p.mK),_&&!_.model.skip&&(A=(_.model.x-p.model.x)/3,p.model.controlPointNextX=p.model.x+A,p.model.controlPointNextY=p.model.y+A*p.mK))},o.nextItem=function(c,l,u){return u?l>=c.length-1?c[0]:c[l+1]:l>=c.length-1?c[c.length-1]:c[l+1]},o.previousItem=function(c,l,u){return u?l<=0?c[c.length-1]:c[l-1]:l<=0?c[0]:c[l-1]},o.niceNum=function(c,l){var u=Math.floor(o.log10(c)),p=c/Math.pow(10,u);return(l?p<1.5?1:p<3?2:p<7?5:10:p<=1?1:p<=2?2:p<=5?5:10)*Math.pow(10,u)},o.requestAnimFrame=typeof window>"u"?function(c){c()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){return window.setTimeout(c,1e3/60)},o.getRelativePosition=function(c,l){var u,p,_=c.originalEvent||c,y=c.currentTarget||c.srcElement,C=y.getBoundingClientRect(),x=_.touches;x&&x.length>0?(u=x[0].clientX,p=x[0].clientY):(u=_.clientX,p=_.clientY);var w=parseFloat(o.getStyle(y,"padding-left")),A=parseFloat(o.getStyle(y,"padding-top")),I=parseFloat(o.getStyle(y,"padding-right")),D=parseFloat(o.getStyle(y,"padding-bottom")),z=C.right-C.left-w-I,V=C.bottom-C.top-A-D;return{x:u=Math.round((u-C.left-w)/z*y.width/l.currentDevicePixelRatio),y:p=Math.round((p-C.top-A)/V*y.height/l.currentDevicePixelRatio)}},o.getConstraintWidth=function(c){return m(c,"max-width","clientWidth")},o.getConstraintHeight=function(c){return m(c,"max-height","clientHeight")},o.getMaximumWidth=function(c){var l=c.parentNode;if(!l)return c.clientWidth;var u=parseInt(o.getStyle(l,"padding-left"),10),p=parseInt(o.getStyle(l,"padding-right"),10),_=l.clientWidth-u-p,y=o.getConstraintWidth(c);return isNaN(y)?_:Math.min(_,y)},o.getMaximumHeight=function(c){var l=c.parentNode;if(!l)return c.clientHeight;var u=parseInt(o.getStyle(l,"padding-top"),10),p=parseInt(o.getStyle(l,"padding-bottom"),10),_=l.clientHeight-u-p,y=o.getConstraintHeight(c);return isNaN(y)?_:Math.min(_,y)},o.getStyle=function(c,l){return c.currentStyle?c.currentStyle[l]:document.defaultView.getComputedStyle(c,null).getPropertyValue(l)},o.retinaScale=function(c,l){var u=c.currentDevicePixelRatio=l||window.devicePixelRatio||1;if(u!==1){var p=c.canvas,_=c.height,y=c.width;p.height=_*u,p.width=y*u,c.ctx.scale(u,u),p.style.height||p.style.width||(p.style.height=_+"px",p.style.width=y+"px")}},o.fontString=function(c,l,u){return l+" "+c+"px "+u},o.longestText=function(c,l,u,p){var _=(p=p||{}).data=p.data||{},y=p.garbageCollect=p.garbageCollect||[];p.font!==l&&(_=p.data={},y=p.garbageCollect=[],p.font=l),c.font=l;var C=0;o.each(u,function(A){A!=null&&o.isArray(A)!==!0?C=o.measureText(c,_,y,C,A):o.isArray(A)&&o.each(A,function(I){I==null||o.isArray(I)||(C=o.measureText(c,_,y,C,I))})});var x=y.length/2;if(x>u.length){for(var w=0;w<x;w++)delete _[y[w]];y.splice(0,x)}return C},o.measureText=function(c,l,u,p,_){var y=l[_];return y||(y=l[_]=c.measureText(_).width,u.push(_)),y>p&&(p=y),p},o.numberOfLabelLines=function(c){var l=1;return o.each(c,function(u){o.isArray(u)&&u.length>l&&(l=u.length)}),l},o.color=t?function(c){return c instanceof CanvasGradient&&(c=n.global.defaultColor),t(c)}:function(c){return console.error("Color.js not found!"),c},o.getHoverColor=function(c){return c instanceof CanvasPattern?c:o.color(c).saturate(.5).darken(.1).rgbString()}}},{25:25,3:3,45:45}],28:[function(a,i,e){var t=a(45);function n(c,l){return c.native?{x:c.x,y:c.y}:t.getRelativePosition(c,l)}function o(c,l){var u,p,_,y,C;for(p=0,y=c.data.datasets.length;p<y;++p)if(c.isDatasetVisible(p))for(_=0,C=(u=c.getDatasetMeta(p)).data.length;_<C;++_){var x=u.data[_];x._view.skip||l(x)}}function h(c,l){var u=[];return o(c,function(p){p.inRange(l.x,l.y)&&u.push(p)}),u}function s(c,l,u,p){var _=Number.POSITIVE_INFINITY,y=[];return o(c,function(C){if(!u||C.inRange(l.x,l.y)){var x=C.getCenterPoint(),w=p(l,x);w<_?(y=[C],_=w):w===_&&y.push(C)}}),y}function d(c){var l=c.indexOf("x")!==-1,u=c.indexOf("y")!==-1;return function(p,_){var y=l?Math.abs(p.x-_.x):0,C=u?Math.abs(p.y-_.y):0;return Math.sqrt(Math.pow(y,2)+Math.pow(C,2))}}function m(c,l,u){var p=n(l,c);u.axis=u.axis||"x";var _=d(u.axis),y=u.intersect?h(c,p):s(c,p,!1,_),C=[];return y.length?(c.data.datasets.forEach(function(x,w){if(c.isDatasetVisible(w)){var A=c.getDatasetMeta(w).data[y[0]._index];A&&!A._view.skip&&C.push(A)}}),C):[]}i.exports={modes:{single:function(c,l){var u=n(l,c),p=[];return o(c,function(_){if(_.inRange(u.x,u.y))return p.push(_),p}),p.slice(0,1)},label:m,index:m,dataset:function(c,l,u){var p=n(l,c);u.axis=u.axis||"xy";var _=d(u.axis),y=u.intersect?h(c,p):s(c,p,!1,_);return y.length>0&&(y=c.getDatasetMeta(y[0]._datasetIndex).data),y},"x-axis":function(c,l){return m(c,l,{intersect:!1})},point:function(c,l){return h(c,n(l,c))},nearest:function(c,l,u){var p=n(l,c);u.axis=u.axis||"xy";var _=d(u.axis),y=s(c,p,u.intersect,_);return y.length>1&&y.sort(function(C,x){var w=C.getArea()-x.getArea();return w===0&&(w=C._datasetIndex-x._datasetIndex),w}),y.slice(0,1)},x:function(c,l,u){var p=n(l,c),_=[],y=!1;return o(c,function(C){C.inXRange(p.x)&&_.push(C),C.inRange(p.x,p.y)&&(y=!0)}),u.intersect&&!y&&(_=[]),_},y:function(c,l,u){var p=n(l,c),_=[],y=!1;return o(c,function(C){C.inYRange(p.y)&&_.push(C),C.inRange(p.x,p.y)&&(y=!0)}),u.intersect&&!y&&(_=[]),_}}}},{45:45}],29:[function(a,i,e){a(25)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),i.exports=function(){var t=function(n,o){return this.construct(n,o),this};return t.Chart=t,t}},{25:25}],30:[function(a,i,e){var t=a(45);function n(h,s){return t.where(h,function(d){return d.position===s})}function o(h,s){h.forEach(function(d,m){return d._tmpIndex_=m,d}),h.sort(function(d,m){var c=s?m:d,l=s?d:m;return c.weight===l.weight?c._tmpIndex_-l._tmpIndex_:c.weight-l.weight}),h.forEach(function(d){delete d._tmpIndex_})}i.exports={defaults:{},addBox:function(h,s){h.boxes||(h.boxes=[]),s.fullWidth=s.fullWidth||!1,s.position=s.position||"top",s.weight=s.weight||0,h.boxes.push(s)},removeBox:function(h,s){var d=h.boxes?h.boxes.indexOf(s):-1;d!==-1&&h.boxes.splice(d,1)},configure:function(h,s,d){for(var m,c=["fullWidth","position","weight"],l=c.length,u=0;u<l;++u)m=c[u],d.hasOwnProperty(m)&&(s[m]=d[m])},update:function(h,s,d){if(h){var m=h.options.layout||{},c=t.options.toPadding(m.padding),l=c.left,u=c.right,p=c.top,_=c.bottom,y=n(h.boxes,"left"),C=n(h.boxes,"right"),x=n(h.boxes,"top"),w=n(h.boxes,"bottom"),A=n(h.boxes,"chartArea");o(y,!0),o(C,!1),o(x,!0),o(w,!1);var I=s-l-u,D=d-p-_,z=D/2,V=(s-I/2)/(y.length+C.length),T=(d-z)/(x.length+w.length),M=I,F=D,L=[];t.each(y.concat(C,x,w),function(Z){var re,me=Z.isHorizontal();me?(re=Z.update(Z.fullWidth?I:M,T),F-=re.height):(re=Z.update(V,F),M-=re.width),L.push({horizontal:me,minSize:re,box:Z})});var W=0,U=0,$=0,Y=0;t.each(x.concat(w),function(Z){if(Z.getPadding){var re=Z.getPadding();W=Math.max(W,re.left),U=Math.max(U,re.right)}}),t.each(y.concat(C),function(Z){if(Z.getPadding){var re=Z.getPadding();$=Math.max($,re.top),Y=Math.max(Y,re.bottom)}});var G=l,J=u,Q=p,oe=_;t.each(y.concat(C),ie),t.each(y,function(Z){G+=Z.width}),t.each(C,function(Z){J+=Z.width}),t.each(x.concat(w),ie),t.each(x,function(Z){Q+=Z.height}),t.each(w,function(Z){oe+=Z.height}),t.each(y.concat(C),function(Z){var re=t.findNextWhere(L,function(ue){return ue.box===Z}),me={left:0,right:0,top:Q,bottom:oe};re&&Z.update(re.minSize.width,F,me)}),G=l,J=u,Q=p,oe=_,t.each(y,function(Z){G+=Z.width}),t.each(C,function(Z){J+=Z.width}),t.each(x,function(Z){Q+=Z.height}),t.each(w,function(Z){oe+=Z.height});var O=Math.max(W-G,0);G+=O,J+=Math.max(U-J,0);var N=Math.max($-Q,0);Q+=N,oe+=Math.max(Y-oe,0);var B=d-Q-oe,j=s-G-J;j===M&&B===F||(t.each(y,function(Z){Z.height=B}),t.each(C,function(Z){Z.height=B}),t.each(x,function(Z){Z.fullWidth||(Z.width=j)}),t.each(w,function(Z){Z.fullWidth||(Z.width=j)}),F=B,M=j);var K=l+O,te=p+N;t.each(y.concat(x),ae),K+=M,te+=F,t.each(C,ae),t.each(w,ae),h.chartArea={left:G,top:Q,right:G+M,bottom:Q+F},t.each(A,function(Z){Z.left=h.chartArea.left,Z.top=h.chartArea.top,Z.right=h.chartArea.right,Z.bottom=h.chartArea.bottom,Z.update(M,F)})}function ie(Z){var re=t.findNextWhere(L,function(ue){return ue.box===Z});if(re)if(Z.isHorizontal()){var me={left:Math.max(G,W),right:Math.max(J,U),top:0,bottom:0};Z.update(Z.fullWidth?I:M,D/2,me)}else Z.update(re.minSize.width,F)}function ae(Z){Z.isHorizontal()?(Z.left=Z.fullWidth?l:G,Z.right=Z.fullWidth?s-u:G+M,Z.top=te,Z.bottom=te+Z.height,te=Z.bottom):(Z.left=K,Z.right=K+Z.width,Z.top=Q,Z.bottom=Q+F,K=Z.right)}}}},{45:45}],31:[function(a,i,e){var t=a(25),n=a(45);t._set("global",{plugins:{}}),i.exports={_plugins:[],_cacheId:0,register:function(o){var h=this._plugins;[].concat(o).forEach(function(s){h.indexOf(s)===-1&&h.push(s)}),this._cacheId++},unregister:function(o){var h=this._plugins;[].concat(o).forEach(function(s){var d=h.indexOf(s);d!==-1&&h.splice(d,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(o,h,s){var d,m,c,l,u,p=this.descriptors(o),_=p.length;for(d=0;d<_;++d)if(typeof(u=(c=(m=p[d]).plugin)[h])=="function"&&((l=[o].concat(s||[])).push(m.options),u.apply(c,l)===!1))return!1;return!0},descriptors:function(o){var h=o.$plugins||(o.$plugins={});if(h.id===this._cacheId)return h.descriptors;var s=[],d=[],m=o&&o.config||{},c=m.options&&m.options.plugins||{};return this._plugins.concat(m.plugins||[]).forEach(function(l){if(s.indexOf(l)===-1){var u=l.id,p=c[u];p!==!1&&(p===!0&&(p=n.clone(t.global.plugins[u])),s.push(l),d.push({plugin:l,options:p||{}}))}}),h.descriptors=d,h.id=this._cacheId,d},_invalidate:function(o){delete o.$plugins}}},{25:25,45:45}],32:[function(a,i,e){var t=a(25),n=a(26),o=a(45),h=a(34);function s(m){var c,l,u=[];for(c=0,l=m.length;c<l;++c)u.push(m[c].label);return u}function d(m,c,l){var u=m.getPixelForTick(c);return l&&(u-=c===0?(m.getPixelForTick(1)-u)/2:(u-m.getPixelForTick(c-1))/2),u}t._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:h.formatters.values,minor:{},major:{}}}),i.exports=function(m){function c(p,_,y){return o.isArray(_)?o.longestText(p,y,_):p.measureText(_).width}function l(p){var _=o.valueOrDefault,y=t.global,C=_(p.fontSize,y.defaultFontSize),x=_(p.fontStyle,y.defaultFontStyle),w=_(p.fontFamily,y.defaultFontFamily);return{size:C,style:x,family:w,font:o.fontString(C,x,w)}}function u(p){return o.options.toLineHeight(o.valueOrDefault(p.lineHeight,1.2),o.valueOrDefault(p.fontSize,t.global.defaultFontSize))}m.Scale=n.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var p=this.options.ticks;for(var _ in p.minor===!1&&(p.minor={display:!1}),p.major===!1&&(p.major={display:!1}),p)_!=="major"&&_!=="minor"&&(p.minor[_]===void 0&&(p.minor[_]=p[_]),p.major[_]===void 0&&(p.major[_]=p[_]))},beforeUpdate:function(){o.callback(this.options.beforeUpdate,[this])},update:function(p,_,y){var C,x,w,A,I,D,z=this;for(z.beforeUpdate(),z.maxWidth=p,z.maxHeight=_,z.margins=o.extend({left:0,right:0,top:0,bottom:0},y),z.longestTextCache=z.longestTextCache||{},z.beforeSetDimensions(),z.setDimensions(),z.afterSetDimensions(),z.beforeDataLimits(),z.determineDataLimits(),z.afterDataLimits(),z.beforeBuildTicks(),I=z.buildTicks()||[],z.afterBuildTicks(),z.beforeTickToLabelConversion(),w=z.convertTicksToLabels(I)||z.ticks,z.afterTickToLabelConversion(),z.ticks=w,C=0,x=w.length;C<x;++C)A=w[C],(D=I[C])?D.label=A:I.push(D={label:A,major:!1});return z._ticks=I,z.beforeCalculateTickRotation(),z.calculateTickRotation(),z.afterCalculateTickRotation(),z.beforeFit(),z.fit(),z.afterFit(),z.afterUpdate(),z.minSize},afterUpdate:function(){o.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){o.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var p=this;p.isHorizontal()?(p.width=p.maxWidth,p.left=0,p.right=p.width):(p.height=p.maxHeight,p.top=0,p.bottom=p.height),p.paddingLeft=0,p.paddingTop=0,p.paddingRight=0,p.paddingBottom=0},afterSetDimensions:function(){o.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){o.callback(this.options.beforeDataLimits,[this])},determineDataLimits:o.noop,afterDataLimits:function(){o.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){o.callback(this.options.beforeBuildTicks,[this])},buildTicks:o.noop,afterBuildTicks:function(){o.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){o.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var p=this.options.ticks;this.ticks=this.ticks.map(p.userCallback||p.callback,this)},afterTickToLabelConversion:function(){o.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){o.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var p=this,_=p.ctx,y=p.options.ticks,C=s(p._ticks),x=l(y);_.font=x.font;var w=y.minRotation||0;if(C.length&&p.options.display&&p.isHorizontal())for(var A,I=o.longestText(_,x.font,C,p.longestTextCache),D=I,z=p.getPixelForTick(1)-p.getPixelForTick(0)-6;D>z&&w<y.maxRotation;){var V=o.toRadians(w);if(A=Math.cos(V),Math.sin(V)*I>p.maxHeight){w--;break}w++,D=A*I}p.labelRotation=w},afterCalculateTickRotation:function(){o.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){o.callback(this.options.beforeFit,[this])},fit:function(){var p=this,_=p.minSize={width:0,height:0},y=s(p._ticks),C=p.options,x=C.ticks,w=C.scaleLabel,A=C.gridLines,I=C.display,D=p.isHorizontal(),z=l(x),V=C.gridLines.tickMarkLength;if(_.width=D?p.isFullWidth()?p.maxWidth-p.margins.left-p.margins.right:p.maxWidth:I&&A.drawTicks?V:0,_.height=D?I&&A.drawTicks?V:0:p.maxHeight,w.display&&I){var T=u(w)+o.options.toPadding(w.padding).height;D?_.height+=T:_.width+=T}if(x.display&&I){var M=o.longestText(p.ctx,z.font,y,p.longestTextCache),F=o.numberOfLabelLines(y),L=.5*z.size,W=p.options.ticks.padding;if(D){p.longestLabelWidth=M;var U=o.toRadians(p.labelRotation),$=Math.cos(U),Y=Math.sin(U)*M+z.size*F+L*(F-1)+L;_.height=Math.min(p.maxHeight,_.height+Y+W),p.ctx.font=z.font;var G=c(p.ctx,y[0],z.font),J=c(p.ctx,y[y.length-1],z.font);p.labelRotation!==0?(p.paddingLeft=C.position==="bottom"?$*G+3:$*L+3,p.paddingRight=C.position==="bottom"?$*L+3:$*J+3):(p.paddingLeft=G/2+3,p.paddingRight=J/2+3)}else x.mirror?M=0:M+=W+L,_.width=Math.min(p.maxWidth,_.width+M),p.paddingTop=z.size/2,p.paddingBottom=z.size/2}p.handleMargins(),p.width=_.width,p.height=_.height},handleMargins:function(){var p=this;p.margins&&(p.paddingLeft=Math.max(p.paddingLeft-p.margins.left,0),p.paddingTop=Math.max(p.paddingTop-p.margins.top,0),p.paddingRight=Math.max(p.paddingRight-p.margins.right,0),p.paddingBottom=Math.max(p.paddingBottom-p.margins.bottom,0))},afterFit:function(){o.callback(this.options.afterFit,[this])},isHorizontal:function(){return this.options.position==="top"||this.options.position==="bottom"},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(p){if(o.isNullOrUndef(p))return NaN;if(typeof p=="number"&&!isFinite(p))return NaN;if(p){if(this.isHorizontal()){if(p.x!==void 0)return this.getRightValue(p.x)}else if(p.y!==void 0)return this.getRightValue(p.y)}return p},getLabelForIndex:o.noop,getPixelForValue:o.noop,getValueForPixel:o.noop,getPixelForTick:function(p){var _=this,y=_.options.offset;if(_.isHorizontal()){var C=(_.width-(_.paddingLeft+_.paddingRight))/Math.max(_._ticks.length-(y?0:1),1),x=C*p+_.paddingLeft;y&&(x+=C/2);var w=_.left+Math.round(x);return w+=_.isFullWidth()?_.margins.left:0}var A=_.height-(_.paddingTop+_.paddingBottom);return _.top+p*(A/(_._ticks.length-1))},getPixelForDecimal:function(p){var _=this;if(_.isHorizontal()){var y=(_.width-(_.paddingLeft+_.paddingRight))*p+_.paddingLeft,C=_.left+Math.round(y);return C+=_.isFullWidth()?_.margins.left:0}return _.top+p*_.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var p=this.min,_=this.max;return this.beginAtZero?0:p<0&&_<0?_:p>0&&_>0?p:0},_autoSkip:function(p){var _,y,C,x,w=this,A=w.isHorizontal(),I=w.options.ticks.minor,D=p.length,z=o.toRadians(w.labelRotation),V=Math.cos(z),T=w.longestLabelWidth*V,M=[];for(I.maxTicksLimit&&(x=I.maxTicksLimit),A&&(_=!1,(T+I.autoSkipPadding)*D>w.width-(w.paddingLeft+w.paddingRight)&&(_=1+Math.floor((T+I.autoSkipPadding)*D/(w.width-(w.paddingLeft+w.paddingRight)))),x&&D>x&&(_=Math.max(_,Math.floor(D/x)))),y=0;y<D;y++)C=p[y],(_>1&&y%_>0||y%_==0&&y+_>=D)&&y!==D-1&&delete C.label,M.push(C);return M},draw:function(p){var _=this,y=_.options;if(y.display){var C=_.ctx,x=t.global,w=y.ticks.minor,A=y.ticks.major||w,I=y.gridLines,D=y.scaleLabel,z=_.labelRotation!==0,V=_.isHorizontal(),T=w.autoSkip?_._autoSkip(_.getTicks()):_.getTicks(),M=o.valueOrDefault(w.fontColor,x.defaultFontColor),F=l(w),L=o.valueOrDefault(A.fontColor,x.defaultFontColor),W=l(A),U=I.drawTicks?I.tickMarkLength:0,$=o.valueOrDefault(D.fontColor,x.defaultFontColor),Y=l(D),G=o.options.toPadding(D.padding),J=o.toRadians(_.labelRotation),Q=[],oe=_.options.gridLines.lineWidth,O=y.position==="right"?_.right:_.right-oe-U,N=y.position==="right"?_.right+U:_.right,B=y.position==="bottom"?_.top+oe:_.bottom-U-oe,j=y.position==="bottom"?_.top+oe+U:_.bottom+oe;if(o.each(T,function(ce,ye){if(!o.isNullOrUndef(ce.label)){var be,Be,ve,Re,qe,Ye,Pe,le,Ct,it,ut,Dt,Ht,Te,oi=ce.label;ye===_.zeroLineIndex&&y.offset===I.offsetGridLines?(be=I.zeroLineWidth,Be=I.zeroLineColor,ve=I.zeroLineBorderDash,Re=I.zeroLineBorderDashOffset):(be=o.valueAtIndexOrDefault(I.lineWidth,ye),Be=o.valueAtIndexOrDefault(I.color,ye),ve=o.valueOrDefault(I.borderDash,x.borderDash),Re=o.valueOrDefault(I.borderDashOffset,x.borderDashOffset));var vt="middle",wt="middle",xe=w.padding;if(V){var dt=U+xe;y.position==="bottom"?(wt=z?"middle":"top",vt=z?"right":"center",Te=_.top+dt):(wt=z?"middle":"bottom",vt=z?"left":"center",Te=_.bottom-dt);var St=d(_,ye,I.offsetGridLines&&T.length>1);St<_.left&&(Be="rgba(0,0,0,0)"),St+=o.aliasPixel(be),Ht=_.getPixelForTick(ye)+w.labelOffset,qe=Pe=Ct=ut=St,Ye=B,le=j,it=p.top,Dt=p.bottom+oe}else{var ft,Pt=y.position==="left";w.mirror?(vt=Pt?"left":"right",ft=xe):(vt=Pt?"right":"left",ft=U+xe),Ht=Pt?_.right-ft:_.left+ft;var It=d(_,ye,I.offsetGridLines&&T.length>1);It<_.top&&(Be="rgba(0,0,0,0)"),It+=o.aliasPixel(be),Te=_.getPixelForTick(ye)+w.labelOffset,qe=O,Pe=N,Ct=p.left,ut=p.right+oe,Ye=le=it=Dt=It}Q.push({tx1:qe,ty1:Ye,tx2:Pe,ty2:le,x1:Ct,y1:it,x2:ut,y2:Dt,labelX:Ht,labelY:Te,glWidth:be,glColor:Be,glBorderDash:ve,glBorderDashOffset:Re,rotation:-1*J,label:oi,major:ce.major,textBaseline:wt,textAlign:vt})}}),o.each(Q,function(ce){if(I.display&&(C.save(),C.lineWidth=ce.glWidth,C.strokeStyle=ce.glColor,C.setLineDash&&(C.setLineDash(ce.glBorderDash),C.lineDashOffset=ce.glBorderDashOffset),C.beginPath(),I.drawTicks&&(C.moveTo(ce.tx1,ce.ty1),C.lineTo(ce.tx2,ce.ty2)),I.drawOnChartArea&&(C.moveTo(ce.x1,ce.y1),C.lineTo(ce.x2,ce.y2)),C.stroke(),C.restore()),w.display){C.save(),C.translate(ce.labelX,ce.labelY),C.rotate(ce.rotation),C.font=ce.major?W.font:F.font,C.fillStyle=ce.major?L:M,C.textBaseline=ce.textBaseline,C.textAlign=ce.textAlign;var ye=ce.label;if(o.isArray(ye))for(var be=ye.length,Be=1.5*F.size,ve=_.isHorizontal()?0:-Be*(be-1)/2,Re=0;Re<be;++Re)C.fillText(""+ye[Re],0,ve),ve+=Be;else C.fillText(ye,0,0);C.restore()}}),D.display){var K,te,ie=0,ae=u(D)/2;if(V)K=_.left+(_.right-_.left)/2,te=y.position==="bottom"?_.bottom-ae-G.bottom:_.top+ae+G.top;else{var Z=y.position==="left";K=Z?_.left+ae+G.top:_.right-ae-G.top,te=_.top+(_.bottom-_.top)/2,ie=Z?-.5*Math.PI:.5*Math.PI}C.save(),C.translate(K,te),C.rotate(ie),C.textAlign="center",C.textBaseline="middle",C.fillStyle=$,C.font=Y.font,C.fillText(D.labelString,0,0),C.restore()}if(I.drawBorder){C.lineWidth=o.valueAtIndexOrDefault(I.lineWidth,0),C.strokeStyle=o.valueAtIndexOrDefault(I.color,0);var re=_.left,me=_.right+oe,ue=_.top,fe=_.bottom+oe,De=o.aliasPixel(C.lineWidth);V?(ue=fe=y.position==="top"?_.bottom:_.top,ue+=De,fe+=De):(re=me=y.position==="left"?_.right:_.left,re+=De,me+=De),C.beginPath(),C.moveTo(re,ue),C.lineTo(me,fe),C.stroke()}}}})}},{25:25,26:26,34:34,45:45}],33:[function(a,i,e){var t=a(25),n=a(45),o=a(30);i.exports=function(h){h.scaleService={constructors:{},defaults:{},registerScaleType:function(s,d,m){this.constructors[s]=d,this.defaults[s]=n.clone(m)},getScaleConstructor:function(s){return this.constructors.hasOwnProperty(s)?this.constructors[s]:void 0},getScaleDefaults:function(s){return this.defaults.hasOwnProperty(s)?n.merge({},[t.scale,this.defaults[s]]):{}},updateScaleDefaults:function(s,d){this.defaults.hasOwnProperty(s)&&(this.defaults[s]=n.extend(this.defaults[s],d))},addScalesToLayout:function(s){n.each(s.scales,function(d){d.fullWidth=d.options.fullWidth,d.position=d.options.position,d.weight=d.options.weight,o.addBox(s,d)})}}}},{25:25,30:30,45:45}],34:[function(a,i,e){var t=a(45);i.exports={formatters:{values:function(n){return t.isArray(n)?n:""+n},linear:function(n,o,h){var s=h.length>3?h[2]-h[1]:h[1]-h[0];Math.abs(s)>1&&n!==Math.floor(n)&&(s=n-Math.floor(n));var d=t.log10(Math.abs(s)),m="";if(n!==0){var c=-1*Math.floor(d);c=Math.max(Math.min(c,20),0),m=n.toFixed(c)}else m="0";return m},logarithmic:function(n,o,h){var s=n/Math.pow(10,Math.floor(t.log10(n)));return n===0?"0":s===1||s===2||s===5||o===0||o===h.length-1?n.toExponential():""}}}},{45:45}],35:[function(a,i,e){var t=a(25),n=a(26),o=a(45);t._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(h,s){var d="",m=s.labels,c=m?m.length:0;if(h.length>0){var l=h[0];l.xLabel?d=l.xLabel:c>0&&l.index<c&&(d=m[l.index])}return d},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(h,s){var d=s.datasets[h.datasetIndex].label||"";return d&&(d+=": "),d+=h.yLabel},labelColor:function(h,s){var d=s.getDatasetMeta(h.datasetIndex).data[h.index]._view;return{borderColor:d.borderColor,backgroundColor:d.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}}),i.exports=function(h){function s(c,l){var u=o.color(c);return u.alpha(l*u.alpha()).rgbaString()}function d(c,l){return l&&(o.isArray(l)?Array.prototype.push.apply(c,l):c.push(l)),c}function m(c){var l=t.global,u=o.valueOrDefault;return{xPadding:c.xPadding,yPadding:c.yPadding,xAlign:c.xAlign,yAlign:c.yAlign,bodyFontColor:c.bodyFontColor,_bodyFontFamily:u(c.bodyFontFamily,l.defaultFontFamily),_bodyFontStyle:u(c.bodyFontStyle,l.defaultFontStyle),_bodyAlign:c.bodyAlign,bodyFontSize:u(c.bodyFontSize,l.defaultFontSize),bodySpacing:c.bodySpacing,titleFontColor:c.titleFontColor,_titleFontFamily:u(c.titleFontFamily,l.defaultFontFamily),_titleFontStyle:u(c.titleFontStyle,l.defaultFontStyle),titleFontSize:u(c.titleFontSize,l.defaultFontSize),_titleAlign:c.titleAlign,titleSpacing:c.titleSpacing,titleMarginBottom:c.titleMarginBottom,footerFontColor:c.footerFontColor,_footerFontFamily:u(c.footerFontFamily,l.defaultFontFamily),_footerFontStyle:u(c.footerFontStyle,l.defaultFontStyle),footerFontSize:u(c.footerFontSize,l.defaultFontSize),_footerAlign:c.footerAlign,footerSpacing:c.footerSpacing,footerMarginTop:c.footerMarginTop,caretSize:c.caretSize,cornerRadius:c.cornerRadius,backgroundColor:c.backgroundColor,opacity:0,legendColorBackground:c.multiKeyBackground,displayColors:c.displayColors,borderColor:c.borderColor,borderWidth:c.borderWidth}}h.Tooltip=n.extend({initialize:function(){this._model=m(this._options),this._lastActive=[]},getTitle:function(){var c=this._options.callbacks,l=c.beforeTitle.apply(this,arguments),u=c.title.apply(this,arguments),p=c.afterTitle.apply(this,arguments),_=[];return _=d(_=d(_=d(_,l),u),p)},getBeforeBody:function(){var c=this._options.callbacks.beforeBody.apply(this,arguments);return o.isArray(c)?c:c!==void 0?[c]:[]},getBody:function(c,l){var u=this,p=u._options.callbacks,_=[];return o.each(c,function(y){var C={before:[],lines:[],after:[]};d(C.before,p.beforeLabel.call(u,y,l)),d(C.lines,p.label.call(u,y,l)),d(C.after,p.afterLabel.call(u,y,l)),_.push(C)}),_},getAfterBody:function(){var c=this._options.callbacks.afterBody.apply(this,arguments);return o.isArray(c)?c:c!==void 0?[c]:[]},getFooter:function(){var c=this._options.callbacks,l=c.beforeFooter.apply(this,arguments),u=c.footer.apply(this,arguments),p=c.afterFooter.apply(this,arguments),_=[];return _=d(_=d(_=d(_,l),u),p)},update:function(c){var l,u,p,_,y,C,x,w,A,I,D,z,V,T,M,F,L,W,U,$,Y=this,G=Y._options,J=Y._model,Q=Y._model=m(G),oe=Y._active,O=Y._data,N={xAlign:J.xAlign,yAlign:J.yAlign},B={x:J.x,y:J.y},j={width:J.width,height:J.height},K={x:J.caretX,y:J.caretY};if(oe.length){Q.opacity=1;var te=[],ie=[];K=h.Tooltip.positioners[G.position].call(Y,oe,Y._eventPosition);var ae=[];for(l=0,u=oe.length;l<u;++l)ae.push((F=oe[l],L=void 0,W=void 0,L=F._xScale,W=F._yScale||F._scale,U=F._index,$=F._datasetIndex,{xLabel:L?L.getLabelForIndex(U,$):"",yLabel:W?W.getLabelForIndex(U,$):"",index:U,datasetIndex:$,x:F._model.x,y:F._model.y}));G.filter&&(ae=ae.filter(function(Z){return G.filter(Z,O)})),G.itemSort&&(ae=ae.sort(function(Z,re){return G.itemSort(Z,re,O)})),o.each(ae,function(Z){te.push(G.callbacks.labelColor.call(Y,Z,Y._chart)),ie.push(G.callbacks.labelTextColor.call(Y,Z,Y._chart))}),Q.title=Y.getTitle(ae,O),Q.beforeBody=Y.getBeforeBody(ae,O),Q.body=Y.getBody(ae,O),Q.afterBody=Y.getAfterBody(ae,O),Q.footer=Y.getFooter(ae,O),Q.x=Math.round(K.x),Q.y=Math.round(K.y),Q.caretPadding=G.caretPadding,Q.labelColors=te,Q.labelTextColors=ie,Q.dataPoints=ae,N=function(Z,re){var me,ue,fe,De,ce,ye=Z._model,be=Z._chart,Be=Z._chart.chartArea,ve="center",Re="center";ye.y<re.height?Re="top":ye.y>be.height-re.height&&(Re="bottom");var qe=(Be.left+Be.right)/2,Ye=(Be.top+Be.bottom)/2;Re==="center"?(me=function(le){return le<=qe},ue=function(le){return le>qe}):(me=function(le){return le<=re.width/2},ue=function(le){return le>=be.width-re.width/2}),fe=function(le){return le+re.width+ye.caretSize+ye.caretPadding>be.width},De=function(le){return le-re.width-ye.caretSize-ye.caretPadding<0},ce=function(le){return le<=Ye?"top":"bottom"},me(ye.x)?(ve="left",fe(ye.x)&&(ve="center",Re=ce(ye.y))):ue(ye.x)&&(ve="right",De(ye.x)&&(ve="center",Re=ce(ye.y)));var Pe=Z._options;return{xAlign:Pe.xAlign?Pe.xAlign:ve,yAlign:Pe.yAlign?Pe.yAlign:Re}}(this,j=function(Z,re){var me=Z._chart.ctx,ue=2*re.yPadding,fe=0,De=re.body,ce=De.reduce(function(Pe,le){return Pe+le.before.length+le.lines.length+le.after.length},0);ce+=re.beforeBody.length+re.afterBody.length;var ye=re.title.length,be=re.footer.length,Be=re.titleFontSize,ve=re.bodyFontSize,Re=re.footerFontSize;ue+=ye*Be,ue+=ye?(ye-1)*re.titleSpacing:0,ue+=ye?re.titleMarginBottom:0,ue+=ce*ve,ue+=ce?(ce-1)*re.bodySpacing:0,ue+=be?re.footerMarginTop:0,ue+=be*Re,ue+=be?(be-1)*re.footerSpacing:0;var qe=0,Ye=function(Pe){fe=Math.max(fe,me.measureText(Pe).width+qe)};return me.font=o.fontString(Be,re._titleFontStyle,re._titleFontFamily),o.each(re.title,Ye),me.font=o.fontString(ve,re._bodyFontStyle,re._bodyFontFamily),o.each(re.beforeBody.concat(re.afterBody),Ye),qe=re.displayColors?ve+2:0,o.each(De,function(Pe){o.each(Pe.before,Ye),o.each(Pe.lines,Ye),o.each(Pe.after,Ye)}),qe=0,me.font=o.fontString(Re,re._footerFontStyle,re._footerFontFamily),o.each(re.footer,Ye),{width:fe+=2*re.xPadding,height:ue}}(this,Q)),p=Q,_=j,y=N,C=Y._chart,x=p.x,w=p.y,A=p.caretSize,I=p.caretPadding,D=p.cornerRadius,z=y.xAlign,V=y.yAlign,T=A+I,M=D+I,z==="right"?x-=_.width:z==="center"&&((x-=_.width/2)+_.width>C.width&&(x=C.width-_.width),x<0&&(x=0)),V==="top"?w+=T:w-=V==="bottom"?_.height+T:_.height/2,V==="center"?z==="left"?x+=T:z==="right"&&(x-=T):z==="left"?x-=M:z==="right"&&(x+=M),B={x,y:w}}else Q.opacity=0;return Q.xAlign=N.xAlign,Q.yAlign=N.yAlign,Q.x=B.x,Q.y=B.y,Q.width=j.width,Q.height=j.height,Q.caretX=K.x,Q.caretY=K.y,Y._model=Q,c&&G.custom&&G.custom.call(Y,Q),Y},drawCaret:function(c,l){var u=this._chart.ctx,p=this._view,_=this.getCaretPosition(c,l,p);u.lineTo(_.x1,_.y1),u.lineTo(_.x2,_.y2),u.lineTo(_.x3,_.y3)},getCaretPosition:function(c,l,u){var p,_,y,C,x,w,A=u.caretSize,I=u.cornerRadius,D=u.xAlign,z=u.yAlign,V=c.x,T=c.y,M=l.width,F=l.height;if(z==="center")x=T+F/2,D==="left"?(_=(p=V)-A,y=p,C=x+A,w=x-A):(_=(p=V+M)+A,y=p,C=x-A,w=x+A);else if(D==="left"?(p=(_=V+I+A)-A,y=_+A):D==="right"?(p=(_=V+M-I-A)-A,y=_+A):(p=(_=u.caretX)-A,y=_+A),z==="top")x=(C=T)-A,w=C;else{x=(C=T+F)+A,w=C;var L=y;y=p,p=L}return{x1:p,x2:_,x3:y,y1:C,y2:x,y3:w}},drawTitle:function(c,l,u,p){var _=l.title;if(_.length){u.textAlign=l._titleAlign,u.textBaseline="top";var y,C,x=l.titleFontSize,w=l.titleSpacing;for(u.fillStyle=s(l.titleFontColor,p),u.font=o.fontString(x,l._titleFontStyle,l._titleFontFamily),y=0,C=_.length;y<C;++y)u.fillText(_[y],c.x,c.y),c.y+=x+w,y+1===_.length&&(c.y+=l.titleMarginBottom-w)}},drawBody:function(c,l,u,p){var _=l.bodyFontSize,y=l.bodySpacing,C=l.body;u.textAlign=l._bodyAlign,u.textBaseline="top",u.font=o.fontString(_,l._bodyFontStyle,l._bodyFontFamily);var x=0,w=function(I){u.fillText(I,c.x+x,c.y),c.y+=_+y};u.fillStyle=s(l.bodyFontColor,p),o.each(l.beforeBody,w);var A=l.displayColors;x=A?_+2:0,o.each(C,function(I,D){var z=s(l.labelTextColors[D],p);u.fillStyle=z,o.each(I.before,w),o.each(I.lines,function(V){A&&(u.fillStyle=s(l.legendColorBackground,p),u.fillRect(c.x,c.y,_,_),u.lineWidth=1,u.strokeStyle=s(l.labelColors[D].borderColor,p),u.strokeRect(c.x,c.y,_,_),u.fillStyle=s(l.labelColors[D].backgroundColor,p),u.fillRect(c.x+1,c.y+1,_-2,_-2),u.fillStyle=z),w(V)}),o.each(I.after,w)}),x=0,o.each(l.afterBody,w),c.y-=y},drawFooter:function(c,l,u,p){var _=l.footer;_.length&&(c.y+=l.footerMarginTop,u.textAlign=l._footerAlign,u.textBaseline="top",u.fillStyle=s(l.footerFontColor,p),u.font=o.fontString(l.footerFontSize,l._footerFontStyle,l._footerFontFamily),o.each(_,function(y){u.fillText(y,c.x,c.y),c.y+=l.footerFontSize+l.footerSpacing}))},drawBackground:function(c,l,u,p,_){u.fillStyle=s(l.backgroundColor,_),u.strokeStyle=s(l.borderColor,_),u.lineWidth=l.borderWidth;var y=l.xAlign,C=l.yAlign,x=c.x,w=c.y,A=p.width,I=p.height,D=l.cornerRadius;u.beginPath(),u.moveTo(x+D,w),C==="top"&&this.drawCaret(c,p),u.lineTo(x+A-D,w),u.quadraticCurveTo(x+A,w,x+A,w+D),C==="center"&&y==="right"&&this.drawCaret(c,p),u.lineTo(x+A,w+I-D),u.quadraticCurveTo(x+A,w+I,x+A-D,w+I),C==="bottom"&&this.drawCaret(c,p),u.lineTo(x+D,w+I),u.quadraticCurveTo(x,w+I,x,w+I-D),C==="center"&&y==="left"&&this.drawCaret(c,p),u.lineTo(x,w+D),u.quadraticCurveTo(x,w,x+D,w),u.closePath(),u.fill(),l.borderWidth>0&&u.stroke()},draw:function(){var c=this._chart.ctx,l=this._view;if(l.opacity!==0){var u={width:l.width,height:l.height},p={x:l.x,y:l.y},_=Math.abs(l.opacity<.001)?0:l.opacity,y=l.title.length||l.beforeBody.length||l.body.length||l.afterBody.length||l.footer.length;this._options.enabled&&y&&(this.drawBackground(p,l,c,u,_),p.x+=l.xPadding,p.y+=l.yPadding,this.drawTitle(p,l,c,_),this.drawBody(p,l,c,_),this.drawFooter(p,l,c,_))}},handleEvent:function(c){var l,u=this,p=u._options;return u._lastActive=u._lastActive||[],c.type==="mouseout"?u._active=[]:u._active=u._chart.getElementsAtEventForMode(c,p.mode,p),(l=!o.arrayEquals(u._active,u._lastActive))&&(u._lastActive=u._active,(p.enabled||p.custom)&&(u._eventPosition={x:c.x,y:c.y},u.update(!0),u.pivot())),l}}),h.Tooltip.positioners={average:function(c){if(!c.length)return!1;var l,u,p=0,_=0,y=0;for(l=0,u=c.length;l<u;++l){var C=c[l];if(C&&C.hasValue()){var x=C.tooltipPosition();p+=x.x,_+=x.y,++y}}return{x:Math.round(p/y),y:Math.round(_/y)}},nearest:function(c,l){var u,p,_,y=l.x,C=l.y,x=Number.POSITIVE_INFINITY;for(u=0,p=c.length;u<p;++u){var w=c[u];if(w&&w.hasValue()){var A=w.getCenterPoint(),I=o.distanceBetweenPoints(l,A);I<x&&(x=I,_=w)}}if(_){var D=_.tooltipPosition();y=D.x,C=D.y}return{x:y,y:C}}}}},{25:25,26:26,45:45}],36:[function(a,i,e){var t=a(25),n=a(26),o=a(45);t._set("global",{elements:{arc:{backgroundColor:t.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),i.exports=n.extend({inLabelRange:function(h){var s=this._view;return!!s&&Math.pow(h-s.x,2)<Math.pow(s.radius+s.hoverRadius,2)},inRange:function(h,s){var d=this._view;if(d){for(var m=o.getAngleFromPoint(d,{x:h,y:s}),c=m.angle,l=m.distance,u=d.startAngle,p=d.endAngle;p<u;)p+=2*Math.PI;for(;c>p;)c-=2*Math.PI;for(;c<u;)c+=2*Math.PI;var _=c>=u&&c<=p,y=l>=d.innerRadius&&l<=d.outerRadius;return _&&y}return!1},getCenterPoint:function(){var h=this._view,s=(h.startAngle+h.endAngle)/2,d=(h.innerRadius+h.outerRadius)/2;return{x:h.x+Math.cos(s)*d,y:h.y+Math.sin(s)*d}},getArea:function(){var h=this._view;return Math.PI*((h.endAngle-h.startAngle)/(2*Math.PI))*(Math.pow(h.outerRadius,2)-Math.pow(h.innerRadius,2))},tooltipPosition:function(){var h=this._view,s=h.startAngle+(h.endAngle-h.startAngle)/2,d=(h.outerRadius-h.innerRadius)/2+h.innerRadius;return{x:h.x+Math.cos(s)*d,y:h.y+Math.sin(s)*d}},draw:function(){var h=this._chart.ctx,s=this._view,d=s.startAngle,m=s.endAngle;h.beginPath(),h.arc(s.x,s.y,s.outerRadius,d,m),h.arc(s.x,s.y,s.innerRadius,m,d,!0),h.closePath(),h.strokeStyle=s.borderColor,h.lineWidth=s.borderWidth,h.fillStyle=s.backgroundColor,h.fill(),h.lineJoin="bevel",s.borderWidth&&h.stroke()}})},{25:25,26:26,45:45}],37:[function(a,i,e){var t=a(25),n=a(26),o=a(45),h=t.global;t._set("global",{elements:{line:{tension:.4,backgroundColor:h.defaultColor,borderWidth:3,borderColor:h.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),i.exports=n.extend({draw:function(){var s,d,m,c,l=this._view,u=this._chart.ctx,p=l.spanGaps,_=this._children.slice(),y=h.elements.line,C=-1;for(this._loop&&_.length&&_.push(_[0]),u.save(),u.lineCap=l.borderCapStyle||y.borderCapStyle,u.setLineDash&&u.setLineDash(l.borderDash||y.borderDash),u.lineDashOffset=l.borderDashOffset||y.borderDashOffset,u.lineJoin=l.borderJoinStyle||y.borderJoinStyle,u.lineWidth=l.borderWidth||y.borderWidth,u.strokeStyle=l.borderColor||h.defaultColor,u.beginPath(),C=-1,s=0;s<_.length;++s)d=_[s],m=o.previousItem(_,s),c=d._view,s===0?c.skip||(u.moveTo(c.x,c.y),C=s):(m=C===-1?m:_[C],c.skip||(C!==s-1&&!p||C===-1?u.moveTo(c.x,c.y):o.canvas.lineTo(u,m._view,d._view),C=s));u.stroke(),u.restore()}})},{25:25,26:26,45:45}],38:[function(a,i,e){var t=a(25),n=a(26),o=a(45),h=t.global.defaultColor;function s(d){var m=this._view;return!!m&&Math.abs(d-m.x)<m.radius+m.hitRadius}t._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:h,borderColor:h,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),i.exports=n.extend({inRange:function(d,m){var c=this._view;return!!c&&Math.pow(d-c.x,2)+Math.pow(m-c.y,2)<Math.pow(c.hitRadius+c.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(d){var m=this._view;return!!m&&Math.abs(d-m.y)<m.radius+m.hitRadius},getCenterPoint:function(){var d=this._view;return{x:d.x,y:d.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var d=this._view;return{x:d.x,y:d.y,padding:d.radius+d.borderWidth}},draw:function(d){var m=this._view,c=this._model,l=this._chart.ctx,u=m.pointStyle,p=m.radius,_=m.x,y=m.y,C=o.color,x=0;m.skip||(l.strokeStyle=m.borderColor||h,l.lineWidth=o.valueOrDefault(m.borderWidth,t.global.elements.point.borderWidth),l.fillStyle=m.backgroundColor||h,d!==void 0&&(c.x<d.left||1.01*d.right<c.x||c.y<d.top||1.01*d.bottom<c.y)&&(c.x<d.left?x=(_-c.x)/(d.left-c.x):1.01*d.right<c.x?x=(c.x-_)/(c.x-d.right):c.y<d.top?x=(y-c.y)/(d.top-c.y):1.01*d.bottom<c.y&&(x=(c.y-y)/(c.y-d.bottom)),x=Math.round(100*x)/100,l.strokeStyle=C(l.strokeStyle).alpha(x).rgbString(),l.fillStyle=C(l.fillStyle).alpha(x).rgbString()),o.canvas.drawPoint(l,u,p,_,y))}})},{25:25,26:26,45:45}],39:[function(a,i,e){var t=a(25),n=a(26);function o(s){return s._view.width!==void 0}function h(s){var d,m,c,l,u=s._view;if(o(s)){var p=u.width/2;d=u.x-p,m=u.x+p,c=Math.min(u.y,u.base),l=Math.max(u.y,u.base)}else{var _=u.height/2;d=Math.min(u.x,u.base),m=Math.max(u.x,u.base),c=u.y-_,l=u.y+_}return{left:d,top:c,right:m,bottom:l}}t._set("global",{elements:{rectangle:{backgroundColor:t.global.defaultColor,borderColor:t.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),i.exports=n.extend({draw:function(){var s,d,m,c,l,u,p,_=this._chart.ctx,y=this._view,C=y.borderWidth;if(y.horizontal?(s=y.base,d=y.x,m=y.y-y.height/2,c=y.y+y.height/2,l=d>s?1:-1,u=1,p=y.borderSkipped||"left"):(s=y.x-y.width/2,d=y.x+y.width/2,m=y.y,l=1,u=(c=y.base)>m?1:-1,p=y.borderSkipped||"bottom"),C){var x=Math.min(Math.abs(s-d),Math.abs(m-c)),w=(C=C>x?x:C)/2,A=s+(p!=="left"?w*l:0),I=d+(p!=="right"?-w*l:0),D=m+(p!=="top"?w*u:0),z=c+(p!=="bottom"?-w*u:0);A!==I&&(m=D,c=z),D!==z&&(s=A,d=I)}_.beginPath(),_.fillStyle=y.backgroundColor,_.strokeStyle=y.borderColor,_.lineWidth=C;var V=[[s,c],[s,m],[d,m],[d,c]],T=["bottom","left","top","right"].indexOf(p,0);function M(W){return V[(T+W)%4]}T===-1&&(T=0);var F=M(0);_.moveTo(F[0],F[1]);for(var L=1;L<4;L++)F=M(L),_.lineTo(F[0],F[1]);_.fill(),C&&_.stroke()},height:function(){var s=this._view;return s.base-s.y},inRange:function(s,d){var m=!1;if(this._view){var c=h(this);m=s>=c.left&&s<=c.right&&d>=c.top&&d<=c.bottom}return m},inLabelRange:function(s,d){if(!this._view)return!1;var m=h(this);return o(this)?s>=m.left&&s<=m.right:d>=m.top&&d<=m.bottom},inXRange:function(s){var d=h(this);return s>=d.left&&s<=d.right},inYRange:function(s){var d=h(this);return s>=d.top&&s<=d.bottom},getCenterPoint:function(){var s,d,m=this._view;return o(this)?(s=m.x,d=(m.y+m.base)/2):(s=(m.x+m.base)/2,d=m.y),{x:s,y:d}},getArea:function(){var s=this._view;return s.width*Math.abs(s.y-s.base)},tooltipPosition:function(){var s=this._view;return{x:s.x,y:s.y}}})},{25:25,26:26}],40:[function(a,i,e){i.exports={},i.exports.Arc=a(36),i.exports.Line=a(37),i.exports.Point=a(38),i.exports.Rectangle=a(39)},{36:36,37:37,38:38,39:39}],41:[function(a,i,e){var t=a(42);e=i.exports={clear:function(n){n.ctx.clearRect(0,0,n.width,n.height)},roundedRect:function(n,o,h,s,d,m){if(m){var c=Math.min(m,s/2),l=Math.min(m,d/2);n.moveTo(o+c,h),n.lineTo(o+s-c,h),n.quadraticCurveTo(o+s,h,o+s,h+l),n.lineTo(o+s,h+d-l),n.quadraticCurveTo(o+s,h+d,o+s-c,h+d),n.lineTo(o+c,h+d),n.quadraticCurveTo(o,h+d,o,h+d-l),n.lineTo(o,h+l),n.quadraticCurveTo(o,h,o+c,h)}else n.rect(o,h,s,d)},drawPoint:function(n,o,h,s,d){var m,c,l,u,p,_;if(!o||typeof o!="object"||(m=o.toString())!=="[object HTMLImageElement]"&&m!=="[object HTMLCanvasElement]"){if(!(isNaN(h)||h<=0)){switch(o){default:n.beginPath(),n.arc(s,d,h,0,2*Math.PI),n.closePath(),n.fill();break;case"triangle":n.beginPath(),p=(c=3*h/Math.sqrt(3))*Math.sqrt(3)/2,n.moveTo(s-c/2,d+p/3),n.lineTo(s+c/2,d+p/3),n.lineTo(s,d-2*p/3),n.closePath(),n.fill();break;case"rect":_=1/Math.SQRT2*h,n.beginPath(),n.fillRect(s-_,d-_,2*_,2*_),n.strokeRect(s-_,d-_,2*_,2*_);break;case"rectRounded":var y=h/Math.SQRT2,C=s-y,x=d-y,w=Math.SQRT2*h;n.beginPath(),this.roundedRect(n,C,x,w,w,h/2),n.closePath(),n.fill();break;case"rectRot":_=1/Math.SQRT2*h,n.beginPath(),n.moveTo(s-_,d),n.lineTo(s,d+_),n.lineTo(s+_,d),n.lineTo(s,d-_),n.closePath(),n.fill();break;case"cross":n.beginPath(),n.moveTo(s,d+h),n.lineTo(s,d-h),n.moveTo(s-h,d),n.lineTo(s+h,d),n.closePath();break;case"crossRot":n.beginPath(),l=Math.cos(Math.PI/4)*h,u=Math.sin(Math.PI/4)*h,n.moveTo(s-l,d-u),n.lineTo(s+l,d+u),n.moveTo(s-l,d+u),n.lineTo(s+l,d-u),n.closePath();break;case"star":n.beginPath(),n.moveTo(s,d+h),n.lineTo(s,d-h),n.moveTo(s-h,d),n.lineTo(s+h,d),l=Math.cos(Math.PI/4)*h,u=Math.sin(Math.PI/4)*h,n.moveTo(s-l,d-u),n.lineTo(s+l,d+u),n.moveTo(s-l,d+u),n.lineTo(s+l,d-u),n.closePath();break;case"line":n.beginPath(),n.moveTo(s-h,d),n.lineTo(s+h,d),n.closePath();break;case"dash":n.beginPath(),n.moveTo(s,d),n.lineTo(s+h,d),n.closePath()}n.stroke()}}else n.drawImage(o,s-o.width/2,d-o.height/2,o.width,o.height)},clipArea:function(n,o){n.save(),n.beginPath(),n.rect(o.left,o.top,o.right-o.left,o.bottom-o.top),n.clip()},unclipArea:function(n){n.restore()},lineTo:function(n,o,h,s){if(h.steppedLine)return h.steppedLine==="after"&&!s||h.steppedLine!=="after"&&s?n.lineTo(o.x,h.y):n.lineTo(h.x,o.y),void n.lineTo(h.x,h.y);h.tension?n.bezierCurveTo(s?o.controlPointPreviousX:o.controlPointNextX,s?o.controlPointPreviousY:o.controlPointNextY,s?h.controlPointNextX:h.controlPointPreviousX,s?h.controlPointNextY:h.controlPointPreviousY,h.x,h.y):n.lineTo(h.x,h.y)}},t.clear=e.clear,t.drawRoundedRectangle=function(n){n.beginPath(),e.roundedRect.apply(e,arguments),n.closePath()}},{42:42}],42:[function(a,i,e){var t,n={noop:function(){},uid:(t=0,function(){return t++}),isNullOrUndef:function(o){return o==null},isArray:Array.isArray?Array.isArray:function(o){return Object.prototype.toString.call(o)==="[object Array]"},isObject:function(o){return o!==null&&Object.prototype.toString.call(o)==="[object Object]"},valueOrDefault:function(o,h){return o===void 0?h:o},valueAtIndexOrDefault:function(o,h,s){return n.valueOrDefault(n.isArray(o)?o[h]:o,s)},callback:function(o,h,s){if(o&&typeof o.call=="function")return o.apply(s,h)},each:function(o,h,s,d){var m,c,l;if(n.isArray(o))if(c=o.length,d)for(m=c-1;m>=0;m--)h.call(s,o[m],m);else for(m=0;m<c;m++)h.call(s,o[m],m);else if(n.isObject(o))for(c=(l=Object.keys(o)).length,m=0;m<c;m++)h.call(s,o[l[m]],l[m])},arrayEquals:function(o,h){var s,d,m,c;if(!o||!h||o.length!==h.length)return!1;for(s=0,d=o.length;s<d;++s)if(m=o[s],c=h[s],m instanceof Array&&c instanceof Array){if(!n.arrayEquals(m,c))return!1}else if(m!==c)return!1;return!0},clone:function(o){if(n.isArray(o))return o.map(n.clone);if(n.isObject(o)){for(var h={},s=Object.keys(o),d=s.length,m=0;m<d;++m)h[s[m]]=n.clone(o[s[m]]);return h}return o},_merger:function(o,h,s,d){var m=h[o],c=s[o];n.isObject(m)&&n.isObject(c)?n.merge(m,c,d):h[o]=n.clone(c)},_mergerIf:function(o,h,s){var d=h[o],m=s[o];n.isObject(d)&&n.isObject(m)?n.mergeIf(d,m):h.hasOwnProperty(o)||(h[o]=n.clone(m))},merge:function(o,h,s){var d,m,c,l,u,p=n.isArray(h)?h:[h],_=p.length;if(!n.isObject(o))return o;for(d=(s=s||{}).merger||n._merger,m=0;m<_;++m)if(h=p[m],n.isObject(h))for(u=0,l=(c=Object.keys(h)).length;u<l;++u)d(c[u],o,h,s);return o},mergeIf:function(o,h){return n.merge(o,h,{merger:n._mergerIf})},extend:function(o){for(var h=function(m,c){o[c]=m},s=1,d=arguments.length;s<d;++s)n.each(arguments[s],h);return o},inherits:function(o){var h=this,s=o&&o.hasOwnProperty("constructor")?o.constructor:function(){return h.apply(this,arguments)},d=function(){this.constructor=s};return d.prototype=h.prototype,s.prototype=new d,s.extend=n.inherits,o&&n.extend(s.prototype,o),s.__super__=h.prototype,s}};i.exports=n,n.callCallback=n.callback,n.indexOf=function(o,h,s){return Array.prototype.indexOf.call(o,h,s)},n.getValueOrDefault=n.valueOrDefault,n.getValueAtIndexOrDefault=n.valueAtIndexOrDefault},{}],43:[function(a,i,e){var t=a(42),n={linear:function(o){return o},easeInQuad:function(o){return o*o},easeOutQuad:function(o){return-o*(o-2)},easeInOutQuad:function(o){return(o/=.5)<1?.5*o*o:-.5*(--o*(o-2)-1)},easeInCubic:function(o){return o*o*o},easeOutCubic:function(o){return(o-=1)*o*o+1},easeInOutCubic:function(o){return(o/=.5)<1?.5*o*o*o:.5*((o-=2)*o*o+2)},easeInQuart:function(o){return o*o*o*o},easeOutQuart:function(o){return-((o-=1)*o*o*o-1)},easeInOutQuart:function(o){return(o/=.5)<1?.5*o*o*o*o:-.5*((o-=2)*o*o*o-2)},easeInQuint:function(o){return o*o*o*o*o},easeOutQuint:function(o){return(o-=1)*o*o*o*o+1},easeInOutQuint:function(o){return(o/=.5)<1?.5*o*o*o*o*o:.5*((o-=2)*o*o*o*o+2)},easeInSine:function(o){return 1-Math.cos(o*(Math.PI/2))},easeOutSine:function(o){return Math.sin(o*(Math.PI/2))},easeInOutSine:function(o){return-.5*(Math.cos(Math.PI*o)-1)},easeInExpo:function(o){return o===0?0:Math.pow(2,10*(o-1))},easeOutExpo:function(o){return o===1?1:1-Math.pow(2,-10*o)},easeInOutExpo:function(o){return o===0?0:o===1?1:(o/=.5)<1?.5*Math.pow(2,10*(o-1)):.5*(2-Math.pow(2,-10*--o))},easeInCirc:function(o){return o>=1?o:-(Math.sqrt(1-o*o)-1)},easeOutCirc:function(o){return Math.sqrt(1-(o-=1)*o)},easeInOutCirc:function(o){return(o/=.5)<1?-.5*(Math.sqrt(1-o*o)-1):.5*(Math.sqrt(1-(o-=2)*o)+1)},easeInElastic:function(o){var h=1.70158,s=0,d=1;return o===0?0:o===1?1:(s||(s=.3),h=s/(2*Math.PI)*Math.asin(1/d),-d*Math.pow(2,10*(o-=1))*Math.sin((o-h)*(2*Math.PI)/s))},easeOutElastic:function(o){var h=1.70158,s=0,d=1;return o===0?0:o===1?1:(s||(s=.3),h=s/(2*Math.PI)*Math.asin(1/d),d*Math.pow(2,-10*o)*Math.sin((o-h)*(2*Math.PI)/s)+1)},easeInOutElastic:function(o){var h=1.70158,s=0,d=1;return o===0?0:(o/=.5)==2?1:(s||(s=.45),h=s/(2*Math.PI)*Math.asin(1/d),o<1?d*Math.pow(2,10*(o-=1))*Math.sin((o-h)*(2*Math.PI)/s)*-.5:d*Math.pow(2,-10*(o-=1))*Math.sin((o-h)*(2*Math.PI)/s)*.5+1)},easeInBack:function(o){return o*o*(2.70158*o-1.70158)},easeOutBack:function(o){return(o-=1)*o*(2.70158*o+1.70158)+1},easeInOutBack:function(o){var h=1.70158;return(o/=.5)<1?o*o*((1+(h*=1.525))*o-h)*.5:.5*((o-=2)*o*((1+(h*=1.525))*o+h)+2)},easeInBounce:function(o){return 1-n.easeOutBounce(1-o)},easeOutBounce:function(o){return o<1/2.75?7.5625*o*o:o<2/2.75?7.5625*(o-=1.5/2.75)*o+.75:o<2.5/2.75?7.5625*(o-=2.25/2.75)*o+.9375:7.5625*(o-=2.625/2.75)*o+.984375},easeInOutBounce:function(o){return o<.5?.5*n.easeInBounce(2*o):.5*n.easeOutBounce(2*o-1)+.5}};i.exports={effects:n},t.easingEffects=n},{42:42}],44:[function(a,i,e){var t=a(42);i.exports={toLineHeight:function(n,o){var h=(""+n).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!h||h[1]==="normal")return 1.2*o;switch(n=+h[2],h[3]){case"px":return n;case"%":n/=100}return o*n},toPadding:function(n){var o,h,s,d;return t.isObject(n)?(o=+n.top||0,h=+n.right||0,s=+n.bottom||0,d=+n.left||0):o=h=s=d=+n||0,{top:o,right:h,bottom:s,left:d,height:o+s,width:d+h}},resolve:function(n,o,h){var s,d,m;for(s=0,d=n.length;s<d;++s)if((m=n[s])!==void 0&&(o!==void 0&&typeof m=="function"&&(m=m(o)),h!==void 0&&t.isArray(m)&&(m=m[h]),m!==void 0))return m}}},{42:42}],45:[function(a,i,e){i.exports=a(42),i.exports.easing=a(43),i.exports.canvas=a(41),i.exports.options=a(44)},{41:41,42:42,43:43,44:44}],46:[function(a,i,e){i.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],47:[function(a,i,e){var t=a(45),n="$chartjs",o="chartjs-",h=o+"render-monitor",s=o+"render-animation",d=["animationstart","webkitAnimationStart"],m={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function c(x,w){var A=t.getStyle(x,w),I=A&&A.match(/^(\d+)(\.\d+)?px$/);return I?Number(I[1]):void 0}var l=!!function(){var x=!1;try{var w=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("e",null,w)}catch{}return x}()&&{passive:!0};function u(x,w,A){x.addEventListener(w,A,l)}function p(x,w,A){x.removeEventListener(w,A,l)}function _(x,w,A,I,D){return{type:x,chart:w,native:D||null,x:A!==void 0?A:null,y:I!==void 0?I:null}}function y(x,w,A){var I,D,z,V,T,M,F,L,W=x[n]||(x[n]={}),U=W.resizer=function($){var Y=document.createElement("div"),G=o+"size-monitor",J="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";Y.style.cssText=J,Y.className=G,Y.innerHTML='<div class="'+G+'-expand" style="'+J+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+G+'-shrink" style="'+J+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var Q=Y.childNodes[0],oe=Y.childNodes[1];Y._reset=function(){Q.scrollLeft=1e6,Q.scrollTop=1e6,oe.scrollLeft=1e6,oe.scrollTop=1e6};var O=function(){Y._reset(),$()};return u(Q,"scroll",O.bind(Q,"expand")),u(oe,"scroll",O.bind(oe,"shrink")),Y}((I=function(){if(W.resizer)return w(_("resize",A))},z=!1,V=[],function(){V=Array.prototype.slice.call(arguments),D=D||this,z||(z=!0,t.requestAnimFrame.call(window,function(){z=!1,I.apply(D,V)}))}));M=function(){if(W.resizer){var $=x.parentNode;$&&$!==U.parentNode&&$.insertBefore(U,$.firstChild),U._reset()}},F=(T=x)[n]||(T[n]={}),L=F.renderProxy=function($){$.animationName===s&&M()},t.each(d,function($){u(T,$,L)}),F.reflow=!!T.offsetParent,T.classList.add(h)}function C(x){var w,A,I,D=x[n]||{},z=D.resizer;delete D.resizer,A=(w=x)[n]||{},(I=A.renderProxy)&&(t.each(d,function(V){p(w,V,I)}),delete A.renderProxy),w.classList.remove(h),z&&z.parentNode&&z.parentNode.removeChild(z)}i.exports={_enabled:typeof window<"u"&&typeof document<"u",initialize:function(){var x,w,A,I="from{opacity:0.99}to{opacity:1}";w="@-webkit-keyframes "+s+"{"+I+"}@keyframes "+s+"{"+I+"}."+h+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",A=(x=this)._style||document.createElement("style"),x._style||(x._style=A,w=`/* Chart.js */
`+w,A.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(A)),A.appendChild(document.createTextNode(w))},acquireContext:function(x,w){typeof x=="string"?x=document.getElementById(x):x.length&&(x=x[0]),x&&x.canvas&&(x=x.canvas);var A=x&&x.getContext&&x.getContext("2d");return A&&A.canvas===x?(function(I,D){var z=I.style,V=I.getAttribute("height"),T=I.getAttribute("width");if(I[n]={initial:{height:V,width:T,style:{display:z.display,height:z.height,width:z.width}}},z.display=z.display||"block",T===null||T===""){var M=c(I,"width");M!==void 0&&(I.width=M)}if(V===null||V==="")if(I.style.height==="")I.height=I.width/(D.options.aspectRatio||2);else{var F=c(I,"height");M!==void 0&&(I.height=F)}}(x,w),A):null},releaseContext:function(x){var w=x.canvas;if(w[n]){var A=w[n].initial;["height","width"].forEach(function(I){var D=A[I];t.isNullOrUndef(D)?w.removeAttribute(I):w.setAttribute(I,D)}),t.each(A.style||{},function(I,D){w.style[D]=I}),w.width=w.width,delete w[n]}},addEventListener:function(x,w,A){var I=x.canvas;if(w!=="resize"){var D=A[n]||(A[n]={});u(I,w,(D.proxies||(D.proxies={}))[x.id+"_"+w]=function(z){var V,T,M,F;A((T=x,M=m[(V=z).type]||V.type,F=t.getRelativePosition(V,T),_(M,T,F.x,F.y,V)))})}else y(I,A,x)},removeEventListener:function(x,w,A){var I=x.canvas;if(w!=="resize"){var D=((A[n]||{}).proxies||{})[x.id+"_"+w];D&&p(I,w,D)}else C(I)}},t.addEvent=u,t.removeEvent=p},{45:45}],48:[function(a,i,e){var t=a(45),n=a(46),o=a(47),h=o._enabled?o:n;i.exports=t.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},h)},{45:45,46:46,47:47}],49:[function(a,i,e){i.exports={},i.exports.filler=a(50),i.exports.legend=a(51),i.exports.title=a(52)},{50:50,51:51,52:52}],50:[function(a,i,e){var t=a(25),n=a(40),o=a(45);t._set("global",{plugins:{filler:{propagate:!0}}});var h={dataset:function(u){var p=u.fill,_=u.chart,y=_.getDatasetMeta(p),C=y&&_.isDatasetVisible(p)&&y.dataset._children||[],x=C.length||0;return x?function(w,A){return A<x&&C[A]._view||null}:null},boundary:function(u){var p=u.boundary,_=p?p.x:null,y=p?p.y:null;return function(C){return{x:_===null?C.x:_,y:y===null?C.y:y}}}};function s(u,p,_){var y,C=u._model||{},x=C.fill;if(x===void 0&&(x=!!C.backgroundColor),x===!1||x===null)return!1;if(x===!0)return"origin";if(y=parseFloat(x,10),isFinite(y)&&Math.floor(y)===y)return x[0]!=="-"&&x[0]!=="+"||(y=p+y),!(y===p||y<0||y>=_)&&y;switch(x){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return x;default:return!1}}function d(u){var p,_=u.el._model||{},y=u.el._scale||{},C=u.fill,x=null;if(isFinite(C))return null;if(C==="start"?x=_.scaleBottom===void 0?y.bottom:_.scaleBottom:C==="end"?x=_.scaleTop===void 0?y.top:_.scaleTop:_.scaleZero!==void 0?x=_.scaleZero:y.getBasePosition?x=y.getBasePosition():y.getBasePixel&&(x=y.getBasePixel()),x!=null){if(x.x!==void 0&&x.y!==void 0)return x;if(typeof x=="number"&&isFinite(x))return{x:(p=y.isHorizontal())?x:null,y:p?null:x}}return null}function m(u,p,_){var y,C=u[p].fill,x=[p];if(!_)return C;for(;C!==!1&&x.indexOf(C)===-1;){if(!isFinite(C))return C;if(!(y=u[C]))return!1;if(y.visible)return C;x.push(C),C=y.fill}return!1}function c(u){return u&&!u.skip}function l(u,p,_,y,C){var x;if(y&&C){for(u.moveTo(p[0].x,p[0].y),x=1;x<y;++x)o.canvas.lineTo(u,p[x-1],p[x]);for(u.lineTo(_[C-1].x,_[C-1].y),x=C-1;x>0;--x)o.canvas.lineTo(u,_[x],_[x-1],!0)}}i.exports={id:"filler",afterDatasetsUpdate:function(u,p){var _,y,C,x,w,A,I,D=(u.data.datasets||[]).length,z=p.propagate,V=[];for(y=0;y<D;++y)x=null,(C=(_=u.getDatasetMeta(y)).dataset)&&C._model&&C instanceof n.Line&&(x={visible:u.isDatasetVisible(y),fill:s(C,y,D),chart:u,el:C}),_.$filler=x,V.push(x);for(y=0;y<D;++y)(x=V[y])&&(x.fill=m(V,y,z),x.boundary=d(x),x.mapper=(I=void 0,A=(w=x).fill,I="dataset",A===!1?null:(isFinite(A)||(I="boundary"),h[I](w))))},beforeDatasetDraw:function(u,p){var _=p.meta.$filler;if(_){var y=u.ctx,C=_.el,x=C._view,w=C._children||[],A=_.mapper,I=x.backgroundColor||t.global.defaultColor;A&&I&&w.length&&(o.canvas.clipArea(y,u.chartArea),function(D,z,V,T,M,F){var L,W,U,$,Y,G,J,Q=z.length,oe=T.spanGaps,O=[],N=[],B=0,j=0;for(D.beginPath(),L=0,W=Q+!!F;L<W;++L)Y=V($=z[U=L%Q]._view,U,T),G=c($),J=c(Y),G&&J?(B=O.push($),j=N.push(Y)):B&&j&&(oe?(G&&O.push($),J&&N.push(Y)):(l(D,O,N,B,j),B=j=0,O=[],N=[]));l(D,O,N,B,j),D.closePath(),D.fillStyle=M,D.fill()}(y,w,A,x,I,C._loop),o.canvas.unclipArea(y))}}}},{25:25,40:40,45:45}],51:[function(a,i,e){var t=a(25),n=a(26),o=a(45),h=a(30),s=o.noop;function d(l,u){return l.usePointStyle?u*Math.SQRT2:l.boxWidth}t._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(l,u){var p=u.datasetIndex,_=this.chart,y=_.getDatasetMeta(p);y.hidden=y.hidden===null?!_.data.datasets[p].hidden:null,_.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(l){var u=l.data;return o.isArray(u.datasets)?u.datasets.map(function(p,_){return{text:p.label,fillStyle:o.isArray(p.backgroundColor)?p.backgroundColor[0]:p.backgroundColor,hidden:!l.isDatasetVisible(_),lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,pointStyle:p.pointStyle,datasetIndex:_}},this):[]}}},legendCallback:function(l){var u=[];u.push('<ul class="'+l.id+'-legend">');for(var p=0;p<l.data.datasets.length;p++)u.push('<li><span style="background-color:'+l.data.datasets[p].backgroundColor+'"></span>'),l.data.datasets[p].label&&u.push(l.data.datasets[p].label),u.push("</li>");return u.push("</ul>"),u.join("")}});var m=n.extend({initialize:function(l){o.extend(this,l),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(l,u,p){var _=this;return _.beforeUpdate(),_.maxWidth=l,_.maxHeight=u,_.margins=p,_.beforeSetDimensions(),_.setDimensions(),_.afterSetDimensions(),_.beforeBuildLabels(),_.buildLabels(),_.afterBuildLabels(),_.beforeFit(),_.fit(),_.afterFit(),_.afterUpdate(),_.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var l=this;l.isHorizontal()?(l.width=l.maxWidth,l.left=0,l.right=l.width):(l.height=l.maxHeight,l.top=0,l.bottom=l.height),l.paddingLeft=0,l.paddingTop=0,l.paddingRight=0,l.paddingBottom=0,l.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var l=this,u=l.options.labels||{},p=o.callback(u.generateLabels,[l.chart],l)||[];u.filter&&(p=p.filter(function(_){return u.filter(_,l.chart.data)})),l.options.reverse&&p.reverse(),l.legendItems=p},afterBuildLabels:s,beforeFit:s,fit:function(){var l=this,u=l.options,p=u.labels,_=u.display,y=l.ctx,C=t.global,x=o.valueOrDefault,w=x(p.fontSize,C.defaultFontSize),A=x(p.fontStyle,C.defaultFontStyle),I=x(p.fontFamily,C.defaultFontFamily),D=o.fontString(w,A,I),z=l.legendHitBoxes=[],V=l.minSize,T=l.isHorizontal();if(T?(V.width=l.maxWidth,V.height=_?10:0):(V.width=_?10:0,V.height=l.maxHeight),_)if(y.font=D,T){var M=l.lineWidths=[0],F=l.legendItems.length?w+p.padding:0;y.textAlign="left",y.textBaseline="top",o.each(l.legendItems,function(J,Q){var oe=d(p,w)+w/2+y.measureText(J.text).width;M[M.length-1]+oe+p.padding>=l.width&&(F+=w+p.padding,M[M.length]=l.left),z[Q]={left:0,top:0,width:oe,height:w},M[M.length-1]+=oe+p.padding}),V.height+=F}else{var L=p.padding,W=l.columnWidths=[],U=p.padding,$=0,Y=0,G=w+L;o.each(l.legendItems,function(J,Q){var oe=d(p,w)+w/2+y.measureText(J.text).width;Y+G>V.height&&(U+=$+p.padding,W.push($),$=0,Y=0),$=Math.max($,oe),Y+=G,z[Q]={left:0,top:0,width:oe,height:w}}),U+=$,W.push($),V.width+=U}l.width=V.width,l.height=V.height},afterFit:s,isHorizontal:function(){return this.options.position==="top"||this.options.position==="bottom"},draw:function(){var l=this,u=l.options,p=u.labels,_=t.global,y=_.elements.line,C=l.width,x=l.lineWidths;if(u.display){var w,A=l.ctx,I=o.valueOrDefault,D=I(p.fontColor,_.defaultFontColor),z=I(p.fontSize,_.defaultFontSize),V=I(p.fontStyle,_.defaultFontStyle),T=I(p.fontFamily,_.defaultFontFamily),M=o.fontString(z,V,T);A.textAlign="left",A.textBaseline="middle",A.lineWidth=.5,A.strokeStyle=D,A.fillStyle=D,A.font=M;var F=d(p,z),L=l.legendHitBoxes,W=l.isHorizontal();w=W?{x:l.left+(C-x[0])/2,y:l.top+p.padding,line:0}:{x:l.left+p.padding,y:l.top+p.padding,line:0};var U=z+p.padding;o.each(l.legendItems,function($,Y){var G,J,Q,oe,O,N=A.measureText($.text).width,B=F+z/2+N,j=w.x,K=w.y;W?j+B>=C&&(K=w.y+=U,w.line++,j=w.x=l.left+(C-x[w.line])/2):K+U>l.bottom&&(j=w.x=j+l.columnWidths[w.line]+p.padding,K=w.y=l.top+p.padding,w.line++),function(te,ie,ae){if(!(isNaN(F)||F<=0)){A.save(),A.fillStyle=I(ae.fillStyle,_.defaultColor),A.lineCap=I(ae.lineCap,y.borderCapStyle),A.lineDashOffset=I(ae.lineDashOffset,y.borderDashOffset),A.lineJoin=I(ae.lineJoin,y.borderJoinStyle),A.lineWidth=I(ae.lineWidth,y.borderWidth),A.strokeStyle=I(ae.strokeStyle,_.defaultColor);var Z=I(ae.lineWidth,y.borderWidth)===0;if(A.setLineDash&&A.setLineDash(I(ae.lineDash,y.borderDash)),u.labels&&u.labels.usePointStyle){var re=z*Math.SQRT2/2,me=re/Math.SQRT2,ue=te+me,fe=ie+me;o.canvas.drawPoint(A,ae.pointStyle,re,ue,fe)}else Z||A.strokeRect(te,ie,F,z),A.fillRect(te,ie,F,z);A.restore()}}(j,K,$),L[Y].left=j,L[Y].top=K,G=$,J=N,oe=F+(Q=z/2)+j,O=K+Q,A.fillText(G.text,oe,O),G.hidden&&(A.beginPath(),A.lineWidth=2,A.moveTo(oe,O),A.lineTo(oe+J,O),A.stroke()),W?w.x+=B+p.padding:w.y+=U})}},handleEvent:function(l){var u=this,p=u.options,_=l.type==="mouseup"?"click":l.type,y=!1;if(_==="mousemove"){if(!p.onHover)return}else if(_!=="click"||!p.onClick)return;var C=l.x,x=l.y;if(C>=u.left&&C<=u.right&&x>=u.top&&x<=u.bottom)for(var w=u.legendHitBoxes,A=0;A<w.length;++A){var I=w[A];if(C>=I.left&&C<=I.left+I.width&&x>=I.top&&x<=I.top+I.height){if(_==="click"){p.onClick.call(u,l.native,u.legendItems[A]),y=!0;break}if(_==="mousemove"){p.onHover.call(u,l.native,u.legendItems[A]),y=!0;break}}}return y}});function c(l,u){var p=new m({ctx:l.ctx,options:u,chart:l});h.configure(l,p,u),h.addBox(l,p),l.legend=p}i.exports={id:"legend",_element:m,beforeInit:function(l){var u=l.options.legend;u&&c(l,u)},beforeUpdate:function(l){var u=l.options.legend,p=l.legend;u?(o.mergeIf(u,t.global.legend),p?(h.configure(l,p,u),p.options=u):c(l,u)):p&&(h.removeBox(l,p),delete l.legend)},afterEvent:function(l,u){var p=l.legend;p&&p.handleEvent(u)}}},{25:25,26:26,30:30,45:45}],52:[function(a,i,e){var t=a(25),n=a(26),o=a(45),h=a(30),s=o.noop;t._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var d=n.extend({initialize:function(c){o.extend(this,c),this.legendHitBoxes=[]},beforeUpdate:s,update:function(c,l,u){var p=this;return p.beforeUpdate(),p.maxWidth=c,p.maxHeight=l,p.margins=u,p.beforeSetDimensions(),p.setDimensions(),p.afterSetDimensions(),p.beforeBuildLabels(),p.buildLabels(),p.afterBuildLabels(),p.beforeFit(),p.fit(),p.afterFit(),p.afterUpdate(),p.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var c=this;c.isHorizontal()?(c.width=c.maxWidth,c.left=0,c.right=c.width):(c.height=c.maxHeight,c.top=0,c.bottom=c.height),c.paddingLeft=0,c.paddingTop=0,c.paddingRight=0,c.paddingBottom=0,c.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var c=this,l=o.valueOrDefault,u=c.options,p=u.display,_=l(u.fontSize,t.global.defaultFontSize),y=c.minSize,C=o.isArray(u.text)?u.text.length:1,x=o.options.toLineHeight(u.lineHeight,_),w=p?C*x+2*u.padding:0;c.isHorizontal()?(y.width=c.maxWidth,y.height=w):(y.width=w,y.height=c.maxHeight),c.width=y.width,c.height=y.height},afterFit:s,isHorizontal:function(){var c=this.options.position;return c==="top"||c==="bottom"},draw:function(){var c=this,l=c.ctx,u=o.valueOrDefault,p=c.options,_=t.global;if(p.display){var y,C,x,w=u(p.fontSize,_.defaultFontSize),A=u(p.fontStyle,_.defaultFontStyle),I=u(p.fontFamily,_.defaultFontFamily),D=o.fontString(w,A,I),z=o.options.toLineHeight(p.lineHeight,w),V=z/2+p.padding,T=0,M=c.top,F=c.left,L=c.bottom,W=c.right;l.fillStyle=u(p.fontColor,_.defaultFontColor),l.font=D,c.isHorizontal()?(C=F+(W-F)/2,x=M+V,y=W-F):(C=p.position==="left"?F+V:W-V,x=M+(L-M)/2,y=L-M,T=Math.PI*(p.position==="left"?-.5:.5)),l.save(),l.translate(C,x),l.rotate(T),l.textAlign="center",l.textBaseline="middle";var U=p.text;if(o.isArray(U))for(var $=0,Y=0;Y<U.length;++Y)l.fillText(U[Y],0,$,y),$+=z;else l.fillText(U,0,0,y);l.restore()}}});function m(c,l){var u=new d({ctx:c.ctx,options:l,chart:c});h.configure(c,u,l),h.addBox(c,u),c.titleBlock=u}i.exports={id:"title",_element:d,beforeInit:function(c){var l=c.options.title;l&&m(c,l)},beforeUpdate:function(c){var l=c.options.title,u=c.titleBlock;l?(o.mergeIf(l,t.global.title),u?(h.configure(c,u,l),u.options=l):m(c,l)):u&&(h.removeBox(c,u),delete c.titleBlock)}}},{25:25,26:26,30:30,45:45}],53:[function(a,i,e){i.exports=function(t){var n=t.Scale.extend({getLabels:function(){var o=this.chart.data;return this.options.labels||(this.isHorizontal()?o.xLabels:o.yLabels)||o.labels},determineDataLimits:function(){var o,h=this,s=h.getLabels();h.minIndex=0,h.maxIndex=s.length-1,h.options.ticks.min!==void 0&&(o=s.indexOf(h.options.ticks.min),h.minIndex=o!==-1?o:h.minIndex),h.options.ticks.max!==void 0&&(o=s.indexOf(h.options.ticks.max),h.maxIndex=o!==-1?o:h.maxIndex),h.min=s[h.minIndex],h.max=s[h.maxIndex]},buildTicks:function(){var o=this,h=o.getLabels();o.ticks=o.minIndex===0&&o.maxIndex===h.length-1?h:h.slice(o.minIndex,o.maxIndex+1)},getLabelForIndex:function(o,h){var s=this,d=s.chart.data,m=s.isHorizontal();return d.yLabels&&!m?s.getRightValue(d.datasets[h].data[o]):s.ticks[o-s.minIndex]},getPixelForValue:function(o,h){var s,d=this,m=d.options.offset,c=Math.max(d.maxIndex+1-d.minIndex-(m?0:1),1);if(o!=null&&(s=d.isHorizontal()?o.x:o.y),s!==void 0||o!==void 0&&isNaN(h)){o=s||o;var l=d.getLabels().indexOf(o);h=l!==-1?l:h}if(d.isHorizontal()){var u=d.width/c,p=u*(h-d.minIndex);return m&&(p+=u/2),d.left+Math.round(p)}var _=d.height/c,y=_*(h-d.minIndex);return m&&(y+=_/2),d.top+Math.round(y)},getPixelForTick:function(o){return this.getPixelForValue(this.ticks[o],o+this.minIndex,null)},getValueForPixel:function(o){var h=this,s=h.options.offset,d=Math.max(h._ticks.length-(s?0:1),1),m=h.isHorizontal(),c=(m?h.width:h.height)/d;return o-=m?h.left:h.top,s&&(o-=c/2),(o<=0?0:Math.round(o/c))+h.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",n,{position:"bottom"})}},{}],54:[function(a,i,e){var t=a(25),n=a(45),o=a(34);i.exports=function(h){var s={position:"left",ticks:{callback:o.formatters.linear}},d=h.LinearScaleBase.extend({determineDataLimits:function(){var m=this,c=m.options,l=m.chart,u=l.data.datasets,p=m.isHorizontal();function _(x){return p?x.xAxisID===m.id:x.yAxisID===m.id}m.min=null,m.max=null;var y=c.stacked;if(y===void 0&&n.each(u,function(x,w){if(!y){var A=l.getDatasetMeta(w);l.isDatasetVisible(w)&&_(A)&&A.stack!==void 0&&(y=!0)}}),c.stacked||y){var C={};n.each(u,function(x,w){var A=l.getDatasetMeta(w),I=[A.type,c.stacked===void 0&&A.stack===void 0?w:"",A.stack].join(".");C[I]===void 0&&(C[I]={positiveValues:[],negativeValues:[]});var D=C[I].positiveValues,z=C[I].negativeValues;l.isDatasetVisible(w)&&_(A)&&n.each(x.data,function(V,T){var M=+m.getRightValue(V);isNaN(M)||A.data[T].hidden||(D[T]=D[T]||0,z[T]=z[T]||0,c.relativePoints?D[T]=100:M<0?z[T]+=M:D[T]+=M)})}),n.each(C,function(x){var w=x.positiveValues.concat(x.negativeValues),A=n.min(w),I=n.max(w);m.min=m.min===null?A:Math.min(m.min,A),m.max=m.max===null?I:Math.max(m.max,I)})}else n.each(u,function(x,w){var A=l.getDatasetMeta(w);l.isDatasetVisible(w)&&_(A)&&n.each(x.data,function(I,D){var z=+m.getRightValue(I);isNaN(z)||A.data[D].hidden||((m.min===null||z<m.min)&&(m.min=z),(m.max===null||z>m.max)&&(m.max=z))})});m.min=isFinite(m.min)&&!isNaN(m.min)?m.min:0,m.max=isFinite(m.max)&&!isNaN(m.max)?m.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var m,c=this.options.ticks;if(this.isHorizontal())m=Math.min(c.maxTicksLimit?c.maxTicksLimit:11,Math.ceil(this.width/50));else{var l=n.valueOrDefault(c.fontSize,t.global.defaultFontSize);m=Math.min(c.maxTicksLimit?c.maxTicksLimit:11,Math.ceil(this.height/(2*l)))}return m},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(m,c){return+this.getRightValue(this.chart.data.datasets[c].data[m])},getPixelForValue:function(m){var c=this,l=c.start,u=+c.getRightValue(m),p=c.end-l;return c.isHorizontal()?c.left+c.width/p*(u-l):c.bottom-c.height/p*(u-l)},getValueForPixel:function(m){var c=this,l=c.isHorizontal(),u=l?c.width:c.height,p=(l?m-c.left:c.bottom-m)/u;return c.start+(c.end-c.start)*p},getPixelForTick:function(m){return this.getPixelForValue(this.ticksAsNumbers[m])}});h.scaleService.registerScaleType("linear",d,s)}},{25:25,34:34,45:45}],55:[function(a,i,e){var t=a(45);i.exports=function(n){var o=t.noop;n.LinearScaleBase=n.Scale.extend({getRightValue:function(h){return typeof h=="string"?+h:n.Scale.prototype.getRightValue.call(this,h)},handleTickRangeOptions:function(){var h=this,s=h.options.ticks;if(s.beginAtZero){var d=t.sign(h.min),m=t.sign(h.max);d<0&&m<0?h.max=0:d>0&&m>0&&(h.min=0)}var c=s.min!==void 0||s.suggestedMin!==void 0,l=s.max!==void 0||s.suggestedMax!==void 0;s.min!==void 0?h.min=s.min:s.suggestedMin!==void 0&&(h.min===null?h.min=s.suggestedMin:h.min=Math.min(h.min,s.suggestedMin)),s.max!==void 0?h.max=s.max:s.suggestedMax!==void 0&&(h.max===null?h.max=s.suggestedMax:h.max=Math.max(h.max,s.suggestedMax)),c!==l&&h.min>=h.max&&(c?h.max=h.min+1:h.min=h.max-1),h.min===h.max&&(h.max++,s.beginAtZero||h.min--)},getTickLimit:o,handleDirectionalChanges:o,buildTicks:function(){var h=this,s=h.options.ticks,d=h.getTickLimit(),m={maxTicks:d=Math.max(2,d),min:s.min,max:s.max,stepSize:t.valueOrDefault(s.fixedStepSize,s.stepSize)},c=h.ticks=function(l,u){var p,_=[];if(l.stepSize&&l.stepSize>0)p=l.stepSize;else{var y=t.niceNum(u.max-u.min,!1);p=t.niceNum(y/(l.maxTicks-1),!0)}var C=Math.floor(u.min/p)*p,x=Math.ceil(u.max/p)*p;l.min&&l.max&&l.stepSize&&t.almostWhole((l.max-l.min)/l.stepSize,p/1e3)&&(C=l.min,x=l.max);var w=(x-C)/p;w=t.almostEquals(w,Math.round(w),p/1e3)?Math.round(w):Math.ceil(w);var A=1;p<1&&(A=Math.pow(10,p.toString().length-2),C=Math.round(C*A)/A,x=Math.round(x*A)/A),_.push(l.min!==void 0?l.min:C);for(var I=1;I<w;++I)_.push(Math.round((C+I*p)*A)/A);return _.push(l.max!==void 0?l.max:x),_}(m,h);h.handleDirectionalChanges(),h.max=t.max(c),h.min=t.min(c),s.reverse?(c.reverse(),h.start=h.max,h.end=h.min):(h.start=h.min,h.end=h.max)},convertTicksToLabels:function(){var h=this;h.ticksAsNumbers=h.ticks.slice(),h.zeroLineIndex=h.ticks.indexOf(0),n.Scale.prototype.convertTicksToLabels.call(h)}})}},{45:45}],56:[function(a,i,e){var t=a(45),n=a(34);i.exports=function(o){var h={position:"left",ticks:{callback:n.formatters.logarithmic}},s=o.Scale.extend({determineDataLimits:function(){var d=this,m=d.options,c=d.chart,l=c.data.datasets,u=d.isHorizontal();function p(C){return u?C.xAxisID===d.id:C.yAxisID===d.id}d.min=null,d.max=null,d.minNotZero=null;var _=m.stacked;if(_===void 0&&t.each(l,function(C,x){if(!_){var w=c.getDatasetMeta(x);c.isDatasetVisible(x)&&p(w)&&w.stack!==void 0&&(_=!0)}}),m.stacked||_){var y={};t.each(l,function(C,x){var w=c.getDatasetMeta(x),A=[w.type,m.stacked===void 0&&w.stack===void 0?x:"",w.stack].join(".");c.isDatasetVisible(x)&&p(w)&&(y[A]===void 0&&(y[A]=[]),t.each(C.data,function(I,D){var z=y[A],V=+d.getRightValue(I);isNaN(V)||w.data[D].hidden||V<0||(z[D]=z[D]||0,z[D]+=V)}))}),t.each(y,function(C){if(C.length>0){var x=t.min(C),w=t.max(C);d.min=d.min===null?x:Math.min(d.min,x),d.max=d.max===null?w:Math.max(d.max,w)}})}else t.each(l,function(C,x){var w=c.getDatasetMeta(x);c.isDatasetVisible(x)&&p(w)&&t.each(C.data,function(A,I){var D=+d.getRightValue(A);isNaN(D)||w.data[I].hidden||D<0||((d.min===null||D<d.min)&&(d.min=D),(d.max===null||D>d.max)&&(d.max=D),D!==0&&(d.minNotZero===null||D<d.minNotZero)&&(d.minNotZero=D))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var d=this,m=d.options.ticks,c=t.valueOrDefault;d.min=c(m.min,d.min),d.max=c(m.max,d.max),d.min===d.max&&(d.min!==0&&d.min!==null?(d.min=Math.pow(10,Math.floor(t.log10(d.min))-1),d.max=Math.pow(10,Math.floor(t.log10(d.max))+1)):(d.min=1,d.max=10)),d.min===null&&(d.min=Math.pow(10,Math.floor(t.log10(d.max))-1)),d.max===null&&(d.max=d.min!==0?Math.pow(10,Math.floor(t.log10(d.min))+1):10),d.minNotZero===null&&(d.min>0?d.minNotZero=d.min:d.max<1?d.minNotZero=Math.pow(10,Math.floor(t.log10(d.max))):d.minNotZero=1)},buildTicks:function(){var d=this,m=d.options.ticks,c=!d.isHorizontal(),l={min:m.min,max:m.max},u=d.ticks=function(p,_){var y,C,x=[],w=t.valueOrDefault,A=w(p.min,Math.pow(10,Math.floor(t.log10(_.min)))),I=Math.floor(t.log10(_.max)),D=Math.ceil(_.max/Math.pow(10,I));A===0?(y=Math.floor(t.log10(_.minNotZero)),C=Math.floor(_.minNotZero/Math.pow(10,y)),x.push(A),A=C*Math.pow(10,y)):(y=Math.floor(t.log10(A)),C=Math.floor(A/Math.pow(10,y)));for(var z=y<0?Math.pow(10,Math.abs(y)):1;x.push(A),++C==10&&(C=1,z=++y>=0?1:z),A=Math.round(C*Math.pow(10,y)*z)/z,y<I||y===I&&C<D;);var V=w(p.max,A);return x.push(V),x}(l,d);d.max=t.max(u),d.min=t.min(u),m.reverse?(c=!c,d.start=d.max,d.end=d.min):(d.start=d.min,d.end=d.max),c&&u.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),o.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(d,m){return+this.getRightValue(this.chart.data.datasets[m].data[d])},getPixelForTick:function(d){return this.getPixelForValue(this.tickValues[d])},_getFirstTickValue:function(d){var m=Math.floor(t.log10(d));return Math.floor(d/Math.pow(10,m))*Math.pow(10,m)},getPixelForValue:function(d){var m,c,l,u,p,_=this,y=_.options.ticks.reverse,C=t.log10,x=_._getFirstTickValue(_.minNotZero),w=0;return d=+_.getRightValue(d),y?(l=_.end,u=_.start,p=-1):(l=_.start,u=_.end,p=1),_.isHorizontal()?(m=_.width,c=y?_.right:_.left):(m=_.height,p*=-1,c=y?_.top:_.bottom),d!==l&&(l===0&&(m-=w=t.getValueOrDefault(_.options.ticks.fontSize,o.defaults.global.defaultFontSize),l=x),d!==0&&(w+=m/(C(u)-C(l))*(C(d)-C(l))),c+=p*w),c},getValueForPixel:function(d){var m,c,l,u,p=this,_=p.options.ticks.reverse,y=t.log10,C=p._getFirstTickValue(p.minNotZero);if(_?(c=p.end,l=p.start):(c=p.start,l=p.end),p.isHorizontal()?(m=p.width,u=_?p.right-d:d-p.left):(m=p.height,u=_?d-p.top:p.bottom-d),u!==c){if(c===0){var x=t.getValueOrDefault(p.options.ticks.fontSize,o.defaults.global.defaultFontSize);u-=x,m-=x,c=C}u*=y(l)-y(c),u/=m,u=Math.pow(10,y(c)+u)}return u}});o.scaleService.registerScaleType("logarithmic",s,h)}},{34:34,45:45}],57:[function(a,i,e){var t=a(25),n=a(45),o=a(34);i.exports=function(h){var s=t.global,d={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:o.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(y){return y}}};function m(y){var C=y.options;return C.angleLines.display||C.pointLabels.display?y.chart.data.labels.length:0}function c(y){var C=y.options.pointLabels,x=n.valueOrDefault(C.fontSize,s.defaultFontSize),w=n.valueOrDefault(C.fontStyle,s.defaultFontStyle),A=n.valueOrDefault(C.fontFamily,s.defaultFontFamily);return{size:x,style:w,family:A,font:n.fontString(x,w,A)}}function l(y,C,x,w,A){return y===w||y===A?{start:C-x/2,end:C+x/2}:y<w||y>A?{start:C-x-5,end:C}:{start:C,end:C+x+5}}function u(y,C,x,w){if(n.isArray(C))for(var A=x.y,I=1.5*w,D=0;D<C.length;++D)y.fillText(C[D],x.x,A),A+=I;else y.fillText(C,x.x,x.y)}function p(y){return n.isNumber(y)?y:0}var _=h.LinearScaleBase.extend({setDimensions:function(){var y=this,C=y.options,x=C.ticks;y.width=y.maxWidth,y.height=y.maxHeight,y.xCenter=Math.round(y.width/2),y.yCenter=Math.round(y.height/2);var w=n.min([y.height,y.width]),A=n.valueOrDefault(x.fontSize,s.defaultFontSize);y.drawingArea=C.display?w/2-(A/2+x.backdropPaddingY):w/2},determineDataLimits:function(){var y=this,C=y.chart,x=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;n.each(C.data.datasets,function(A,I){if(C.isDatasetVisible(I)){var D=C.getDatasetMeta(I);n.each(A.data,function(z,V){var T=+y.getRightValue(z);isNaN(T)||D.data[V].hidden||(x=Math.min(T,x),w=Math.max(T,w))})}}),y.min=x===Number.POSITIVE_INFINITY?0:x,y.max=w===Number.NEGATIVE_INFINITY?0:w,y.handleTickRangeOptions()},getTickLimit:function(){var y=this.options.ticks,C=n.valueOrDefault(y.fontSize,s.defaultFontSize);return Math.min(y.maxTicksLimit?y.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*C)))},convertTicksToLabels:function(){var y=this;h.LinearScaleBase.prototype.convertTicksToLabels.call(y),y.pointLabels=y.chart.data.labels.map(y.options.pointLabels.callback,y)},getLabelForIndex:function(y,C){return+this.getRightValue(this.chart.data.datasets[C].data[y])},fit:function(){var y,C;this.options.pointLabels.display?function(x){var w,A,I,D=c(x),z=Math.min(x.height/2,x.width/2),V={r:x.width,l:0,t:x.height,b:0},T={};x.ctx.font=D.font,x._pointLabelSizes=[];var M,F,L,W=m(x);for(w=0;w<W;w++){I=x.getPointPosition(w,z),M=x.ctx,F=D.size,L=x.pointLabels[w]||"",A=n.isArray(L)?{w:n.longestText(M,M.font,L),h:L.length*F+1.5*(L.length-1)*F}:{w:M.measureText(L).width,h:F},x._pointLabelSizes[w]=A;var U=x.getIndexAngle(w),$=n.toDegrees(U)%360,Y=l($,I.x,A.w,0,180),G=l($,I.y,A.h,90,270);Y.start<V.l&&(V.l=Y.start,T.l=U),Y.end>V.r&&(V.r=Y.end,T.r=U),G.start<V.t&&(V.t=G.start,T.t=U),G.end>V.b&&(V.b=G.end,T.b=U)}x.setReductions(z,V,T)}(this):(y=this,C=Math.min(y.height/2,y.width/2),y.drawingArea=Math.round(C),y.setCenterPoint(0,0,0,0))},setReductions:function(y,C,x){var w=C.l/Math.sin(x.l),A=Math.max(C.r-this.width,0)/Math.sin(x.r),I=-C.t/Math.cos(x.t),D=-Math.max(C.b-this.height,0)/Math.cos(x.b);w=p(w),A=p(A),I=p(I),D=p(D),this.drawingArea=Math.min(Math.round(y-(w+A)/2),Math.round(y-(I+D)/2)),this.setCenterPoint(w,A,I,D)},setCenterPoint:function(y,C,x,w){var A=this,I=A.width-C-A.drawingArea,D=y+A.drawingArea,z=x+A.drawingArea,V=A.height-w-A.drawingArea;A.xCenter=Math.round((D+I)/2+A.left),A.yCenter=Math.round((z+V)/2+A.top)},getIndexAngle:function(y){return y*(2*Math.PI/m(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(y){var C=this;if(y===null)return 0;var x=C.drawingArea/(C.max-C.min);return C.options.ticks.reverse?(C.max-y)*x:(y-C.min)*x},getPointPosition:function(y,C){var x=this.getIndexAngle(y)-Math.PI/2;return{x:Math.round(Math.cos(x)*C)+this.xCenter,y:Math.round(Math.sin(x)*C)+this.yCenter}},getPointPositionForValue:function(y,C){return this.getPointPosition(y,this.getDistanceFromCenterForValue(C))},getBasePosition:function(){var y=this.min,C=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:y<0&&C<0?C:y>0&&C>0?y:0)},draw:function(){var y=this,C=y.options,x=C.gridLines,w=C.ticks,A=n.valueOrDefault;if(C.display){var I=y.ctx,D=this.getIndexAngle(0),z=A(w.fontSize,s.defaultFontSize),V=A(w.fontStyle,s.defaultFontStyle),T=A(w.fontFamily,s.defaultFontFamily),M=n.fontString(z,V,T);n.each(y.ticks,function(F,L){if(L>0||w.reverse){var W=y.getDistanceFromCenterForValue(y.ticksAsNumbers[L]);if(x.display&&L!==0&&function(Y,G,J,Q){var oe=Y.ctx;if(oe.strokeStyle=n.valueAtIndexOrDefault(G.color,Q-1),oe.lineWidth=n.valueAtIndexOrDefault(G.lineWidth,Q-1),Y.options.gridLines.circular)oe.beginPath(),oe.arc(Y.xCenter,Y.yCenter,J,0,2*Math.PI),oe.closePath(),oe.stroke();else{var O=m(Y);if(O===0)return;oe.beginPath();var N=Y.getPointPosition(0,J);oe.moveTo(N.x,N.y);for(var B=1;B<O;B++)N=Y.getPointPosition(B,J),oe.lineTo(N.x,N.y);oe.closePath(),oe.stroke()}}(y,x,W,L),w.display){var U=A(w.fontColor,s.defaultFontColor);if(I.font=M,I.save(),I.translate(y.xCenter,y.yCenter),I.rotate(D),w.showLabelBackdrop){var $=I.measureText(F).width;I.fillStyle=w.backdropColor,I.fillRect(-$/2-w.backdropPaddingX,-W-z/2-w.backdropPaddingY,$+2*w.backdropPaddingX,z+2*w.backdropPaddingY)}I.textAlign="center",I.textBaseline="middle",I.fillStyle=U,I.fillText(F,0,-W),I.restore()}}}),(C.angleLines.display||C.pointLabels.display)&&function(F){var L=F.ctx,W=F.options,U=W.angleLines,$=W.pointLabels;L.lineWidth=U.lineWidth,L.strokeStyle=U.color;var Y,G,J,Q,oe=F.getDistanceFromCenterForValue(W.ticks.reverse?F.min:F.max),O=c(F);L.textBaseline="top";for(var N=m(F)-1;N>=0;N--){if(U.display){var B=F.getPointPosition(N,oe);L.beginPath(),L.moveTo(F.xCenter,F.yCenter),L.lineTo(B.x,B.y),L.stroke(),L.closePath()}if($.display){var j=F.getPointPosition(N,oe+5),K=n.valueAtIndexOrDefault($.fontColor,N,s.defaultFontColor);L.font=O.font,L.fillStyle=K;var te=F.getIndexAngle(N),ie=n.toDegrees(te);L.textAlign=(Q=ie)===0||Q===180?"center":Q<180?"left":"right",Y=ie,G=F._pointLabelSizes[N],J=j,Y===90||Y===270?J.y-=G.h/2:(Y>270||Y<90)&&(J.y-=G.h),u(L,F.pointLabels[N]||"",j,O.size)}}}(y)}}});h.scaleService.registerScaleType("radialLinear",_,d)}},{25:25,34:34,45:45}],58:[function(a,i,e){var t=a(1);t=typeof t=="function"?t:window.moment;var n=a(25),o=a(45),h=Number.MIN_SAFE_INTEGER||-9007199254740991,s=Number.MAX_SAFE_INTEGER||9007199254740991,d={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},m=Object.keys(d);function c(x,w){return x-w}function l(x){var w,A,I,D={},z=[];for(w=0,A=x.length;w<A;++w)D[I=x[w]]||(D[I]=!0,z.push(I));return z}function u(x,w,A,I){var D=function(L,W,U){for(var $,Y,G,J=0,Q=L.length-1;J>=0&&J<=Q;){if(Y=L[($=J+Q>>1)-1]||null,G=L[$],!Y)return{lo:null,hi:G};if(G[W]<U)J=$+1;else{if(!(Y[W]>U))return{lo:Y,hi:G};Q=$-1}}return{lo:G,hi:null}}(x,w,A),z=D.lo?D.hi?D.lo:x[x.length-2]:x[0],V=D.lo?D.hi?D.hi:x[x.length-1]:x[1],T=V[w]-z[w],M=T?(A-z[w])/T:0,F=(V[I]-z[I])*M;return z[I]+F}function p(x,w){var A=w.parser,I=w.parser||w.format;return typeof A=="function"?A(x):typeof x=="string"&&typeof I=="string"?t(x,I):(x instanceof t||(x=t(x)),x.isValid()?x:typeof I=="function"?I(x):x)}function _(x,w){if(o.isNullOrUndef(x))return null;var A=w.options.time,I=p(w.getRightValue(x),A);return I.isValid()?(A.round&&I.startOf(A.round),I.valueOf()):null}function y(x){for(var w=m.indexOf(x)+1,A=m.length;w<A;++w)if(d[m[w]].common)return m[w]}function C(x,w,A,I){var D,z=I.time,V=z.unit||function(G,J,Q,oe){var O,N,B,j=m.length;for(O=m.indexOf(G);O<j-1;++O)if(B=(N=d[m[O]]).steps?N.steps[N.steps.length-1]:s,N.common&&Math.ceil((Q-J)/(B*N.size))<=oe)return m[O];return m[j-1]}(z.minUnit,x,w,A),T=y(V),M=o.valueOrDefault(z.stepSize,z.unitStepSize),F=V==="week"&&z.isoWeekday,L=I.ticks.major.enabled,W=d[V],U=t(x),$=t(w),Y=[];for(M||(M=function(G,J,Q,oe){var O,N,B,j=J-G,K=d[Q],te=K.size,ie=K.steps;if(!ie)return Math.ceil(j/(oe*te));for(O=0,N=ie.length;O<N&&(B=ie[O],!(Math.ceil(j/(te*B))<=oe));++O);return B}(x,w,V,A)),F&&(U=U.isoWeekday(F),$=$.isoWeekday(F)),U=U.startOf(F?"day":V),($=$.startOf(F?"day":V))<w&&$.add(1,V),D=t(U),L&&T&&!F&&!z.round&&(D.startOf(T),D.add(~~((U-D)/(W.size*M))*M,V));D<$;D.add(M,V))Y.push(+D);return Y.push(+D),Y}i.exports=function(x){var w=x.Scale.extend({initialize:function(){if(!t)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),x.Scale.prototype.initialize.call(this)},update:function(){var A=this.options;return A.time&&A.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),x.Scale.prototype.update.apply(this,arguments)},getRightValue:function(A){return A&&A.t!==void 0&&(A=A.t),x.Scale.prototype.getRightValue.call(this,A)},determineDataLimits:function(){var A,I,D,z,V,T,M=this,F=M.chart,L=M.options.time,W=L.unit||"day",U=s,$=h,Y=[],G=[],J=[];for(A=0,D=F.data.labels.length;A<D;++A)J.push(_(F.data.labels[A],M));for(A=0,D=(F.data.datasets||[]).length;A<D;++A)if(F.isDatasetVisible(A))if(V=F.data.datasets[A].data,o.isObject(V[0]))for(G[A]=[],I=0,z=V.length;I<z;++I)T=_(V[I],M),Y.push(T),G[A][I]=T;else Y.push.apply(Y,J),G[A]=J.slice(0);else G[A]=[];J.length&&(J=l(J).sort(c),U=Math.min(U,J[0]),$=Math.max($,J[J.length-1])),Y.length&&(Y=l(Y).sort(c),U=Math.min(U,Y[0]),$=Math.max($,Y[Y.length-1])),U=_(L.min,M)||U,$=_(L.max,M)||$,U=U===s?+t().startOf(W):U,$=$===h?+t().endOf(W)+1:$,M.min=Math.min(U,$),M.max=Math.max(U+1,$),M._horizontal=M.isHorizontal(),M._table=[],M._timestamps={data:Y,datasets:G,labels:J}},buildTicks:function(){var A,I,D,z,V,T,M,F,L,W,U,$,Y=this,G=Y.min,J=Y.max,Q=Y.options,oe=Q.time,O=[],N=[];switch(Q.ticks.source){case"data":O=Y._timestamps.data;break;case"labels":O=Y._timestamps.labels;break;case"auto":default:O=C(G,J,Y.getLabelCapacity(G),Q)}for(Q.bounds==="ticks"&&O.length&&(G=O[0],J=O[O.length-1]),G=_(oe.min,Y)||G,J=_(oe.max,Y)||J,A=0,I=O.length;A<I;++A)(D=O[A])>=G&&D<=J&&N.push(D);return Y.min=G,Y.max=J,Y._unit=oe.unit||function(B,j,K,te){var ie,ae,Z=t.duration(t(te).diff(t(K)));for(ie=m.length-1;ie>=m.indexOf(j);ie--)if(ae=m[ie],d[ae].common&&Z.as(ae)>=B.length)return ae;return m[j?m.indexOf(j):0]}(N,oe.minUnit,Y.min,Y.max),Y._majorUnit=y(Y._unit),Y._table=function(B,j,K,te){if(te==="linear"||!B.length)return[{time:j,pos:0},{time:K,pos:1}];var ie,ae,Z,re,me,ue=[],fe=[j];for(ie=0,ae=B.length;ie<ae;++ie)(re=B[ie])>j&&re<K&&fe.push(re);for(fe.push(K),ie=0,ae=fe.length;ie<ae;++ie)me=fe[ie+1],Z=fe[ie-1],re=fe[ie],Z!==void 0&&me!==void 0&&Math.round((me+Z)/2)===re||ue.push({time:re,pos:ie/(ae-1)});return ue}(Y._timestamps.data,G,J,Q.distribution),Y._offsets=(z=Y._table,V=N,T=G,M=J,U=0,$=0,(F=Q).offset&&V.length&&(F.time.min||(L=V.length>1?V[1]:M,W=V[0],U=(u(z,"time",L,"pos")-u(z,"time",W,"pos"))/2),F.time.max||(L=V[V.length-1],W=V.length>1?V[V.length-2]:T,$=(u(z,"time",L,"pos")-u(z,"time",W,"pos"))/2)),{left:U,right:$}),Y._labelFormat=function(B,j){var K,te,ie,ae=B.length;for(K=0;K<ae;K++){if((te=p(B[K],j)).millisecond()!==0)return"MMM D, YYYY h:mm:ss.SSS a";te.second()===0&&te.minute()===0&&te.hour()===0||(ie=!0)}return ie?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(Y._timestamps.data,oe),function(B,j){var K,te,ie,ae,Z=[];for(K=0,te=B.length;K<te;++K)ie=B[K],ae=!!j&&ie===+t(ie).startOf(j),Z.push({value:ie,major:ae});return Z}(N,Y._majorUnit)},getLabelForIndex:function(A,I){var D=this.chart.data,z=this.options.time,V=D.labels&&A<D.labels.length?D.labels[A]:"",T=D.datasets[I].data[A];return o.isObject(T)&&(V=this.getRightValue(T)),z.tooltipFormat?p(V,z).format(z.tooltipFormat):typeof V=="string"?V:p(V,z).format(this._labelFormat)},tickFormatFunction:function(A,I,D,z){var V=this.options,T=A.valueOf(),M=V.time.displayFormats,F=M[this._unit],L=this._majorUnit,W=M[L],U=A.clone().startOf(L).valueOf(),$=V.ticks.major,Y=$.enabled&&L&&W&&T===U,G=A.format(z||(Y?W:F)),J=Y?$:V.ticks.minor,Q=o.valueOrDefault(J.callback,J.userCallback);return Q?Q(G,I,D):G},convertTicksToLabels:function(A){var I,D,z=[];for(I=0,D=A.length;I<D;++I)z.push(this.tickFormatFunction(t(A[I].value),I,A));return z},getPixelForOffset:function(A){var I=this,D=I._horizontal?I.width:I.height,z=I._horizontal?I.left:I.top,V=u(I._table,"time",A,"pos");return z+D*(I._offsets.left+V)/(I._offsets.left+1+I._offsets.right)},getPixelForValue:function(A,I,D){var z=null;if(I!==void 0&&D!==void 0&&(z=this._timestamps.datasets[D][I]),z===null&&(z=_(A,this)),z!==null)return this.getPixelForOffset(z)},getPixelForTick:function(A){var I=this.getTicks();return A>=0&&A<I.length?this.getPixelForOffset(I[A].value):null},getValueForPixel:function(A){var I=this,D=I._horizontal?I.width:I.height,z=I._horizontal?I.left:I.top,V=(D?(A-z)/D:0)*(I._offsets.left+1+I._offsets.left)-I._offsets.right,T=u(I._table,"pos",V,"time");return t(T)},getLabelWidth:function(A){var I=this.options.ticks,D=this.ctx.measureText(A).width,z=o.toRadians(I.maxRotation),V=Math.cos(z),T=Math.sin(z);return D*V+o.valueOrDefault(I.fontSize,n.global.defaultFontSize)*T},getLabelCapacity:function(A){var I=this,D=I.options.time.displayFormats.millisecond,z=I.tickFormatFunction(t(A),0,[],D),V=I.getLabelWidth(z),T=I.isHorizontal()?I.width:I.height,M=Math.floor(T/V);return M>0?M:1}});x.scaleService.registerScaleType("time",w,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,25:25,45:45}]},{},[7])(7)});/*!
 * chartjs-plugin-zoom
 * http://chartjs.org/
 * Version: 0.5.0
 *
 * Copyright 2016 Evert Timberg
 * Released under the MIT license
 * https://github.com/chartjs/chartjs-plugin-zoom/blob/master/LICENSE.md
 */(function a(i,e,t){function n(s,d){if(!e[s]){if(!i[s]){var m=typeof require=="function"&&require;if(!d&&m)return m(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[s]={exports:{}};i[s][0].call(l.exports,function(u){var p=i[s][1][u];return n(p||u)},l,l.exports,a,i,e,t)}return e[s].exports}for(var o=typeof require=="function"&&require,h=0;h<t.length;h++)n(t[h]);return n})({1:[function(a,i,e){},{}],2:[function(a,i,e){function t(M,F){return M===void 0||typeof M=="string"&&M.indexOf(F)!==-1}function n(M,F){if(M.scaleAxes&&M.rangeMax&&M.rangeMax[M.scaleAxes]){var L=M.rangeMax[M.scaleAxes];F>L&&(F=L)}return F}function o(M,F){if(M.scaleAxes&&M.rangeMin&&M.rangeMin[M.scaleAxes]){var L=M.rangeMin[M.scaleAxes];F<L&&(F=L)}return F}function h(M,F,L,W){var U=M.chart.data.labels,$=M.minIndex,Y=U.length-1,G=M.maxIndex,J=W.sensitivity,Q=M.isHorizontal()?M.left+M.width/2:M.top+M.height/2,oe=M.isHorizontal()?L.x:L.y;I.zoomCumulativeDelta=F>1?I.zoomCumulativeDelta+1:I.zoomCumulativeDelta-1,Math.abs(I.zoomCumulativeDelta)>J&&(I.zoomCumulativeDelta<0?(oe<=Q?$<=0?G=Math.min(Y,G+1):$=Math.max(0,$-1):oe>Q&&(G>=Y?$=Math.max(0,$-1):G=Math.min(Y,G+1)),I.zoomCumulativeDelta=0):I.zoomCumulativeDelta>0&&(oe<=Q?$=$<G?$=Math.min(G,$+1):$:oe>Q&&(G=G>$?G=Math.max($,G-1):G),I.zoomCumulativeDelta=0),M.options.ticks.min=o(W,U[$]),M.options.ticks.max=n(W,U[G]))}function s(M,F,L,W){var U,$,Y=M.options;M.isHorizontal()?(U=M.right-M.left,$=(L.x-M.left)/U):(U=M.bottom-M.top,$=(L.y-M.top)/U);var G=1-$,J=U*(F-1),Q=J*$,oe=J*G;Y.time.min=o(W,M.getValueForPixel(M.getPixelForValue(M.firstTick)+Q)),Y.time.max=n(W,M.getValueForPixel(M.getPixelForValue(M.lastTick)-oe))}function d(M,F,L,W){var U=M.max-M.min,$=U*(F-1),Y=M.isHorizontal()?L.x:L.y,G=(M.getValueForPixel(Y)-M.min)/U,J=1-G,Q=$*G,oe=$*J;M.options.ticks.min=o(W,M.min+Q),M.options.ticks.max=n(W,M.max-oe)}function m(M,F,L,W){var U=D[M.options.type];U&&U(M,F,L,W)}function c(M,F,L){var W=M.chartArea;L||(L={x:(W.left+W.right)/2,y:(W.top+W.bottom)/2});var U=M.options.zoom;if(U&&A.getValueOrDefault(U.enabled,V.zoom.enabled)){var $=A.getValueOrDefault(M.options.zoom.mode,V.zoom.mode);U.sensitivity=A.getValueOrDefault(M.options.zoom.sensitivity,V.zoom.sensitivity),A.each(M.scales,function(Y,G){Y.isHorizontal()&&t($,"x")?(U.scaleAxes="x",m(Y,F,L,U)):!Y.isHorizontal()&&t($,"y")&&(U.scaleAxes="y",m(Y,F,L,U))}),M.update(0)}}function l(M,F,L){var W,U=M.chart.data.labels,$=U.length-1,Y=Math.max(M.ticks.length-(M.options.gridLines.offsetGridLines?0:1),1),G=L.speed,J=M.minIndex,Q=Math.round(M.width/(Y*G));I.panCumulativeDelta+=F,J=I.panCumulativeDelta>Q?Math.max(0,J-1):I.panCumulativeDelta<-Q?Math.min($-Y+1,J+1):J,I.panCumulativeDelta=J!==M.minIndex?0:I.panCumulativeDelta,W=Math.min($,J+Y-1),M.options.ticks.min=o(L,U[J]),M.options.ticks.max=n(L,U[W])}function u(M,F,L){var W=M.options;W.time.min=o(L,M.getValueForPixel(M.getPixelForValue(M.firstTick)-F)),W.time.max=n(L,M.getValueForPixel(M.getPixelForValue(M.lastTick)-F))}function p(M,F,L){var W=M.options.ticks,U=M.start,$=M.end;W.reverse?(W.max=M.getValueForPixel(M.getPixelForValue(U)-F),W.min=M.getValueForPixel(M.getPixelForValue($)-F)):(W.min=M.getValueForPixel(M.getPixelForValue(U)-F),W.max=M.getValueForPixel(M.getPixelForValue($)-F)),W.min=o(L,W.min),W.max=n(L,W.max)}function _(M,F,L){var W=z[M.options.type];W&&W(M,F,L)}function y(M,F,L){var W=M.options.pan;if(W&&A.getValueOrDefault(W.enabled,V.pan.enabled)){var U=A.getValueOrDefault(M.options.pan.mode,V.pan.mode);W.speed=A.getValueOrDefault(M.options.pan.speed,V.pan.speed),A.each(M.scales,function($,Y){$.isHorizontal()&&t(U,"x")&&F!==0?(W.scaleAxes="x",_($,F,W)):!$.isHorizontal()&&t(U,"y")&&L!==0&&(W.scaleAxes="y",_($,L,W))}),M.update(0)}}function C(M){var F=M.scales;for(var L in F){var W=F[L];if(!W.isHorizontal())return W}}var x=a("hammerjs");x=typeof x=="function"?x:window.Hammer;var w=a("chart.js");w=typeof w=="function"?w:window.Chart;var A=w.helpers,I=w.Zoom=w.Zoom||{},D=I.zoomFunctions=I.zoomFunctions||{},z=I.panFunctions=I.panFunctions||{},V=I.defaults={pan:{enabled:!0,mode:"xy",speed:20,threshold:10},zoom:{enabled:!0,mode:"xy",sensitivity:3}};I.zoomFunctions.category=h,I.zoomFunctions.time=s,I.zoomFunctions.linear=d,I.zoomFunctions.logarithmic=d,I.panFunctions.category=l,I.panFunctions.time=u,I.panFunctions.linear=p,I.panFunctions.logarithmic=p,I.panCumulativeDelta=0,I.zoomCumulativeDelta=0;var T={afterInit:function(M){A.each(M.scales,function(F){F.originalOptions=JSON.parse(JSON.stringify(F.options))}),M.resetZoom=function(){A.each(M.scales,function(F,L){var W=F.options.time,U=F.options.ticks;W&&(delete W.min,delete W.max),U&&(delete U.min,delete U.max),F.options=A.configMerge(F.options,F.originalOptions)}),A.each(M.data.datasets,function(F,L){F._meta=null}),M.update()}},beforeInit:function(M){M.zoom={};var F=M.zoom.node=M.chart.ctx.canvas,L=M.options,W=A.getValueOrDefault(L.pan?L.pan.threshold:void 0,I.defaults.pan.threshold);if(L.zoom&&L.zoom.drag?(L.zoom.mode="x",M.zoom._mouseDownHandler=function(O){M.zoom._dragZoomStart=O},F.addEventListener("mousedown",M.zoom._mouseDownHandler),M.zoom._mouseMoveHandler=function(O){M.zoom._dragZoomStart&&(M.zoom._dragZoomEnd=O,M.update(0)),M.update(0)},F.addEventListener("mousemove",M.zoom._mouseMoveHandler),M.zoom._mouseUpHandler=function(O){if(M.zoom._dragZoomStart){var N=M.chartArea,B=C(M),j=M.zoom._dragZoomStart,K=j.target.getBoundingClientRect().left,te=Math.min(j.clientX,O.clientX)-K,ie=Math.max(j.clientX,O.clientX)-K,ae=ie-te,Z=N.right-N.left,re=1+(Z-ae)/Z;ae>0&&c(M,re,{x:ae/2+te,y:(B.bottom-B.top)/2}),M.zoom._dragZoomStart=null,M.zoom._dragZoomEnd=null}},F.addEventListener("mouseup",M.zoom._mouseUpHandler)):(M.zoom._wheelHandler=function(O){var N=O.target.getBoundingClientRect(),B=O.clientX-N.left,j=O.clientY-N.top,K={x:B,y:j};O.deltaY<0?c(M,1.1,K):c(M,.909,K),O.preventDefault()},F.addEventListener("wheel",M.zoom._wheelHandler)),x){var U=new x.Manager(F);U.add(new x.Pinch),U.add(new x.Pan({threshold:W}));var $,Y=function(O){var N=1/$*O.scale;c(M,N,O.center),$=O.scale};U.on("pinchstart",function(O){$=1}),U.on("pinch",Y),U.on("pinchend",function(O){Y(O),$=null,I.zoomCumulativeDelta=0});var G=null,J=null,Q=!1,oe=function(O){if(G!==null&&J!==null){Q=!0;var N=O.deltaX-G,B=O.deltaY-J;G=O.deltaX,J=O.deltaY,y(M,N,B)}};U.on("panstart",function(O){G=0,J=0,oe(O)}),U.on("panmove",oe),U.on("panend",function(O){G=null,J=null,I.panCumulativeDelta=0,setTimeout(function(){Q=!1},500)}),M.zoom._ghostClickHandler=function(O){Q&&(O.stopImmediatePropagation(),O.preventDefault())},F.addEventListener("click",M.zoom._ghostClickHandler),M._mc=U}},beforeDatasetsDraw:function(M){var F=M.chart.ctx,L=M.chartArea;if(F.save(),F.beginPath(),M.zoom._dragZoomEnd){var W=C(M),U=M.zoom._dragZoomStart,$=M.zoom._dragZoomEnd,Y=U.target.getBoundingClientRect().left,G=Math.min(U.clientX,$.clientX)-Y,J=Math.max(U.clientX,$.clientX)-Y,Q=J-G;F.fillStyle="rgba(225,225,225,0.3)",F.lineWidth=5,F.fillRect(G,W.top,Q,W.bottom-W.top)}F.rect(L.left,L.top,L.right-L.left,L.bottom-L.top),F.clip()},afterDatasetsDraw:function(M){M.chart.ctx.restore()},destroy:function(M){if(M.zoom){var F=M.options,L=M.zoom.node;F.zoom&&F.zoom.drag?(L.removeEventListener("mousedown",M.zoom._mouseDownHandler),L.removeEventListener("mousemove",M.zoom._mouseMoveHandler),L.removeEventListener("mouseup",M.zoom._mouseUpHandler)):L.removeEventListener("wheel",M.zoom._wheelHandler),x&&L.removeEventListener("click",M.zoom._ghostClickHandler),delete M.zoom;var W=M._mc;W&&(W.remove("pinchstart"),W.remove("pinch"),W.remove("pinchend"),W.remove("panstart"),W.remove("pan"),W.remove("panend"))}}};i.exports=T,w.pluginService.register(T)},{"chart.js":1,hammerjs:1}]},{},[2]);/*!
 * chartjs-plugin-annotation.js
 * http://chartjs.org/
 * Version: 0.5.7
 *
 * Copyright 2016 Evert Timberg
 * Released under the MIT license
 * https://github.com/chartjs/Chart.Annotation.js/blob/master/LICENSE.md
 */(function a(i,e,t){function n(s,d){if(!e[s]){if(!i[s]){var m=typeof require=="function"&&require;if(!d&&m)return m(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[s]={exports:{}};i[s][0].call(l.exports,function(u){var p=i[s][1][u];return n(p||u)},l,l.exports,a,i,e,t)}return e[s].exports}for(var o=typeof require=="function"&&require,h=0;h<t.length;h++)n(t[h]);return n})({1:[function(a,i,e){},{}],2:[function(a,i,e){i.exports=function(t){function n(c){s.decorate(c,"afterDataLimits",function(l,u){l&&l(u),s.adjustScaleRange(u)})}function o(c){return function(l,u){var p=l.annotation.options.drawTime;s.elements(l).filter(function(_){return c===(_.options.drawTime||p)}).forEach(function(_){_.transition(u).draw()})}}var h=t.helpers,s=a("./helpers.js")(t),d=a("./events.js")(t),m=t.Annotation.types;return{beforeInit:function(c){var l=c.options,u=c.annotation={elements:{},options:s.initConfig(l.annotation||{}),onDestroy:[],firstRun:!0,supported:!1};c.ensureScalesHaveIDs(),l.scales&&(u.supported=!0,h.each(l.scales.xAxes,n),h.each(l.scales.yAxes,n))},beforeUpdate:function(c){var l=c.annotation;if(l.supported){l.firstRun?l.firstRun=!1:l.options=s.initConfig(c.options.annotation||{});var u=[];l.options.annotations.forEach(function(p){var _=p.id||s.objectId();if(!l.elements[_]&&m[p.type]){var y=m[p.type],C=new y({id:_,options:p,chartInstance:c});C.initialize(),l.elements[_]=C,p.id=_,u.push(_)}else l.elements[_]&&u.push(_)}),Object.keys(l.elements).forEach(function(p){u.indexOf(p)===-1&&(l.elements[p].destroy(),delete l.elements[p])})}},afterScaleUpdate:function(c){s.elements(c).forEach(function(l){l.configure()})},beforeDatasetsDraw:o("beforeDatasetsDraw"),afterDatasetsDraw:o("afterDatasetsDraw"),afterDraw:o("afterDraw"),afterInit:function(c){var l=c.annotation.options.events;if(h.isArray(l)&&l.length>0){var u=c.chart.canvas,p=d.dispatcher.bind(c);d.collapseHoverEvents(l).forEach(function(_){h.addEvent(u,_,p),c.annotation.onDestroy.push(function(){h.removeEvent(u,_,p)})})}},destroy:function(c){for(var l=c.annotation.onDestroy;l.length>0;)l.pop()()}}}},{"./events.js":4,"./helpers.js":5}],3:[function(a,i,e){i.exports=function(t){var n=t.helpers,o=t.Element.extend({initialize:function(){this.hidden=!1,this.hovering=!1,this._model=n.clone(this._model)||{},this.setDataLimits()},destroy:function(){},setDataLimits:function(){},configure:function(){},inRange:function(){},getCenterPoint:function(){},getWidth:function(){},getHeight:function(){},getArea:function(){},draw:function(){}});return o}},{}],4:[function(a,i,e){i.exports=function(t){function n(d){var m=!1,c=d.filter(function(l){switch(l){case"mouseenter":case"mouseover":case"mouseout":case"mouseleave":return m=!0,!1;default:return!0}});return m&&c.indexOf("mousemove")===-1&&c.push("mousemove"),c}function o(d){var m=this.annotation,c=s.elements(this),l=h.getRelativePosition(d,this.chart),u=s.getNearestItems(c,l),p=n(m.options.events),_=m.options.dblClickSpeed,y=[],C=s.getEventHandlerName(d.type),x=(u||{}).options;if(d.type==="mousemove"&&(u&&!u.hovering?["mouseenter","mouseover"].forEach(function(w){var A=s.getEventHandlerName(w),I=s.createMouseEvent(w,d);u.hovering=!0,typeof x[A]=="function"&&y.push([x[A],I,u])}):u||c.forEach(function(w){if(w.hovering){w.hovering=!1;var A=w.options;["mouseout","mouseleave"].forEach(function(I){var D=s.getEventHandlerName(I),z=s.createMouseEvent(I,d);typeof A[D]=="function"&&y.push([A[D],z,w])})}})),u&&p.indexOf("dblclick")>-1&&typeof x.onDblclick=="function"){if(d.type==="click"&&typeof x.onClick=="function")return clearTimeout(u.clickTimeout),u.clickTimeout=setTimeout(function(){delete u.clickTimeout,x.onClick.call(u,d)},_),d.stopImmediatePropagation(),void d.preventDefault();d.type==="dblclick"&&u.clickTimeout&&(clearTimeout(u.clickTimeout),delete u.clickTimeout)}u&&typeof x[C]=="function"&&y.length===0&&y.push([x[C],d,u]),y.length>0&&(d.stopImmediatePropagation(),d.preventDefault(),y.forEach(function(w){w[0].call(w[2],w[1])}))}var h=t.helpers,s=a("./helpers.js")(t);return{dispatcher:o,collapseHoverEvents:n}}},{"./helpers.js":5}],5:[function(a,i,e){function t(){}function n(l){var u=l.annotation.elements;return Object.keys(u).map(function(p){return u[p]})}function o(){return Math.random().toString(36).substr(2,6)}function h(l){return l!==null&&typeof l<"u"&&(typeof l=="number"?isFinite(l):!!l)}function s(l,u,p){var _="$";l[_+u]||(l[u]?(l[_+u]=l[u].bind(l),l[u]=function(){var y=[l[_+u]].concat(Array.prototype.slice.call(arguments));return p.apply(l,y)}):l[u]=function(){var y=[void 0].concat(Array.prototype.slice.call(arguments));return p.apply(l,y)})}function d(l,u){l.forEach(function(p){(u?p[u]:p)()})}function m(l){return"on"+l[0].toUpperCase()+l.substring(1)}function c(l,u){try{return new MouseEvent(l,u)}catch{try{var p=document.createEvent("MouseEvent");return p.initMouseEvent(l,u.canBubble,u.cancelable,u.view,u.detail,u.screenX,u.screenY,u.clientX,u.clientY,u.ctrlKey,u.altKey,u.shiftKey,u.metaKey,u.button,u.relatedTarget),p}catch{var _=document.createEvent("Event");return _.initEvent(l,u.canBubble,u.cancelable),_}}}i.exports=function(l){function u(x){return x=C.configMerge(l.Annotation.defaults,x),C.isArray(x.annotations)&&x.annotations.forEach(function(w){w.label=C.configMerge(l.Annotation.labelDefaults,w.label)}),x}function p(x,w,A,I){var D=w.filter(function(T){return!!T._model.ranges[x]}).map(function(T){return T._model.ranges[x]}),z=D.map(function(T){return Number(T.min)}).reduce(function(T,M){return isFinite(M)&&!isNaN(M)&&M<T?M:T},A),V=D.map(function(T){return Number(T.max)}).reduce(function(T,M){return isFinite(M)&&!isNaN(M)&&M>T?M:T},I);return{min:z,max:V}}function _(x){var w=p(x.id,n(x.chart),x.min,x.max);typeof x.options.ticks.min>"u"&&typeof x.options.ticks.suggestedMin>"u"&&(x.min=w.min),typeof x.options.ticks.max>"u"&&typeof x.options.ticks.suggestedMax>"u"&&(x.max=w.max),x.handleTickRangeOptions&&x.handleTickRangeOptions()}function y(x,w){var A=Number.POSITIVE_INFINITY;return x.filter(function(I){return I.inRange(w.x,w.y)}).reduce(function(I,D){var z=D.getCenterPoint(),V=C.distanceBetweenPoints(w,z);return V<A?(I=[D],A=V):V===A&&I.push(D),I},[]).sort(function(I,D){var z=I.getArea(),V=D.getArea();return z>V||z<V?z-V:I._index-D._index}).slice(0,1)[0]}var C=l.helpers;return{initConfig:u,elements:n,callEach:d,noop:t,objectId:o,isValid:h,decorate:s,adjustScaleRange:_,getNearestItems:y,getEventHandlerName:m,createMouseEvent:c}}},{}],6:[function(a,i,e){var t=a("chart.js");t=typeof t=="function"?t:window.Chart,t.Annotation=t.Annotation||{},t.Annotation.drawTimeOptions={afterDraw:"afterDraw",afterDatasetsDraw:"afterDatasetsDraw",beforeDatasetsDraw:"beforeDatasetsDraw"},t.Annotation.defaults={drawTime:"afterDatasetsDraw",dblClickSpeed:350,events:[],annotations:[]},t.Annotation.labelDefaults={backgroundColor:"rgba(0,0,0,0.8)",fontFamily:t.defaults.global.defaultFontFamily,fontSize:t.defaults.global.defaultFontSize,fontStyle:"bold",fontColor:"#fff",xPadding:6,yPadding:6,cornerRadius:6,position:"center",xAdjust:0,yAdjust:0,enabled:!1,content:null},t.Annotation.Element=a("./element.js")(t),t.Annotation.types={line:a("./types/line.js")(t),box:a("./types/box.js")(t)};var n=a("./annotation.js")(t);i.exports=n,t.pluginService.register(n)},{"./annotation.js":2,"./element.js":3,"./types/box.js":7,"./types/line.js":8,"chart.js":1}],7:[function(a,i,e){i.exports=function(t){var n=a("../helpers.js")(t),o=t.Annotation.Element.extend({setDataLimits:function(){var h=this._model,s=this.options,d=this.chartInstance,m=d.scales[s.xScaleID],c=d.scales[s.yScaleID],l=d.chartArea;if(h.ranges={},l){var u=0,p=0;m&&(u=n.isValid(s.xMin)?s.xMin:m.getPixelForValue(l.left),p=n.isValid(s.xMax)?s.xMax:m.getPixelForValue(l.right),h.ranges[s.xScaleID]={min:Math.min(u,p),max:Math.max(u,p)}),c&&(u=n.isValid(s.yMin)?s.yMin:c.getPixelForValue(l.bottom),p=n.isValid(s.yMax)?s.yMax:c.getPixelForValue(l.top),h.ranges[s.yScaleID]={min:Math.min(u,p),max:Math.max(u,p)})}},configure:function(){var h=this._model,s=this.options,d=this.chartInstance,m=d.scales[s.xScaleID],c=d.scales[s.yScaleID],l=d.chartArea;h.clip={x1:l.left,x2:l.right,y1:l.top,y2:l.bottom};var u,p,_=l.left,y=l.top,C=l.right,x=l.bottom;m&&(u=n.isValid(s.xMin)?m.getPixelForValue(s.xMin):l.left,p=n.isValid(s.xMax)?m.getPixelForValue(s.xMax):l.right,_=Math.min(u,p),C=Math.max(u,p)),c&&(u=n.isValid(s.yMin)?c.getPixelForValue(s.yMin):l.bottom,p=n.isValid(s.yMax)?c.getPixelForValue(s.yMax):l.top,y=Math.min(u,p),x=Math.max(u,p)),h.left=_,h.top=y,h.right=C,h.bottom=x,h.borderColor=s.borderColor,h.borderWidth=s.borderWidth,h.backgroundColor=s.backgroundColor},inRange:function(h,s){var d=this._model;return d&&h>=d.left&&h<=d.right&&s>=d.top&&s<=d.bottom},getCenterPoint:function(){var h=this._model;return{x:(h.right+h.left)/2,y:(h.bottom+h.top)/2}},getWidth:function(){var h=this._model;return Math.abs(h.right-h.left)},getHeight:function(){var h=this._model;return Math.abs(h.bottom-h.top)},getArea:function(){return this.getWidth()*this.getHeight()},draw:function(){var h=this._view,s=this.chartInstance.chart.ctx;s.save(),s.beginPath(),s.rect(h.clip.x1,h.clip.y1,h.clip.x2-h.clip.x1,h.clip.y2-h.clip.y1),s.clip(),s.lineWidth=h.borderWidth,s.strokeStyle=h.borderColor,s.fillStyle=h.backgroundColor;var d=h.right-h.left,m=h.bottom-h.top;s.fillRect(h.left,h.top,d,m),s.strokeRect(h.left,h.top,d,m),s.restore()}});return o}},{"../helpers.js":5}],8:[function(a,i,e){i.exports=function(t){function n(l){var u=(l.x2-l.x1)/(l.y2-l.y1),p=l.x1||0;this.m=u,this.b=p,this.getX=function(_){return u*(_-l.y1)+p},this.getY=function(_){return(_-p)/u+l.y1},this.intersects=function(_,y,C){C=C||.001;var x=this.getY(_),w=this.getX(y);return(!isFinite(x)||Math.abs(y-x)<C)&&(!isFinite(w)||Math.abs(_-w)<C)}}function o(l,u,p,_,y){var C=l.line,x={},w=0,A=0;switch(!0){case(l.mode==m&&l.labelPosition=="top"):A=y+l.labelYAdjust,w=u/2+l.labelXAdjust,x.y=l.y1+A,x.x=(isFinite(C.m)?C.getX(x.y):l.x1)-w;break;case(l.mode==m&&l.labelPosition=="bottom"):A=p+y+l.labelYAdjust,w=u/2+l.labelXAdjust,x.y=l.y2-A,x.x=(isFinite(C.m)?C.getX(x.y):l.x1)-w;break;case(l.mode==d&&l.labelPosition=="left"):w=_+l.labelXAdjust,A=-(p/2)+l.labelYAdjust,x.x=l.x1+w,x.y=C.getY(x.x)+A;break;case(l.mode==d&&l.labelPosition=="right"):w=u+_+l.labelXAdjust,A=-(p/2)+l.labelYAdjust,x.x=l.x2-w,x.y=C.getY(x.x)+A;break;default:x.x=(l.x1+l.x2-u)/2+l.labelXAdjust,x.y=(l.y1+l.y2-p)/2+l.labelYAdjust}return x}var h=t.helpers,s=a("../helpers.js")(t),d="horizontal",m="vertical",c=t.Annotation.Element.extend({setDataLimits:function(){var l=this._model,u=this.options;l.ranges={},l.ranges[u.scaleID]={min:u.value,max:u.endValue||u.value}},configure:function(){var l,u,p=this._model,_=this.options,y=this.chartInstance,C=y.chart.ctx,x=y.scales[_.scaleID];if(x&&(l=s.isValid(_.value)?x.getPixelForValue(_.value):NaN,u=s.isValid(_.endValue)?x.getPixelForValue(_.endValue):l),!isNaN(l)){var w=y.chartArea;p.clip={x1:w.left,x2:w.right,y1:w.top,y2:w.bottom},this.options.mode==d?(p.x1=w.left,p.x2=w.right,p.y1=l,p.y2=u):(p.y1=w.top,p.y2=w.bottom,p.x1=l,p.x2=u),p.line=new n(p),p.mode=_.mode,p.labelBackgroundColor=_.label.backgroundColor,p.labelFontFamily=_.label.fontFamily,p.labelFontSize=_.label.fontSize,p.labelFontStyle=_.label.fontStyle,p.labelFontColor=_.label.fontColor,p.labelXPadding=_.label.xPadding,p.labelYPadding=_.label.yPadding,p.labelCornerRadius=_.label.cornerRadius,p.labelPosition=_.label.position,p.labelXAdjust=_.label.xAdjust,p.labelYAdjust=_.label.yAdjust,p.labelEnabled=_.label.enabled,p.labelContent=_.label.content,C.font=h.fontString(p.labelFontSize,p.labelFontStyle,p.labelFontFamily);var A=C.measureText(p.labelContent).width,I=C.measureText("M").width,D=o(p,A,I,p.labelXPadding,p.labelYPadding);p.labelX=D.x-p.labelXPadding,p.labelY=D.y-p.labelYPadding,p.labelWidth=A+2*p.labelXPadding,p.labelHeight=I+2*p.labelYPadding,p.borderColor=_.borderColor,p.borderWidth=_.borderWidth,p.borderDash=_.borderDash||[],p.borderDashOffset=_.borderDashOffset||0}},inRange:function(l,u){var p=this._model;return p.line&&p.line.intersects(l,u,this.getHeight())||p.labelEnabled&&p.labelContent&&l>=p.labelX&&l<=p.labelX+p.labelWidth&&u>=p.labelY&&u<=p.labelY+p.labelHeight},getCenterPoint:function(){return{x:(this._model.x2+this._model.x1)/2,y:(this._model.y2+this._model.y1)/2}},getWidth:function(){return Math.abs(this._model.right-this._model.left)},getHeight:function(){return this._model.borderWidth||1},getArea:function(){return Math.sqrt(Math.pow(this.getWidth(),2)+Math.pow(this.getHeight(),2))},draw:function(){var l=this._view,u=this.chartInstance.chart.ctx;l.clip&&(u.save(),u.beginPath(),u.rect(l.clip.x1,l.clip.y1,l.clip.x2-l.clip.x1,l.clip.y2-l.clip.y1),u.clip(),u.lineWidth=l.borderWidth,u.strokeStyle=l.borderColor,u.setLineDash&&u.setLineDash(l.borderDash),u.lineDashOffset=l.borderDashOffset,u.beginPath(),u.moveTo(l.x1,l.y1),u.lineTo(l.x2,l.y2),u.stroke(),l.labelEnabled&&l.labelContent&&(u.beginPath(),u.rect(l.clip.x1,l.clip.y1,l.clip.x2-l.clip.x1,l.clip.y2-l.clip.y1),u.clip(),u.fillStyle=l.labelBackgroundColor,h.drawRoundedRectangle(u,l.labelX,l.labelY,l.labelWidth,l.labelHeight,l.labelCornerRadius),u.fill(),u.font=h.fontString(l.labelFontSize,l.labelFontStyle,l.labelFontFamily),u.fillStyle=l.labelFontColor,u.textAlign="center",u.textBaseline="middle",u.fillText(l.labelContent,l.labelX+l.labelWidth/2,l.labelY+l.labelHeight/2)),u.restore())}});return c}},{"../helpers.js":5}]},{},[6]);const _p=Ie`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;Ae("vaadin-context-menu-item",[Zr,_p],{moduleId:"lumo-context-menu-item"});const al=Ie`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;Ae("vaadin-list-box",al,{moduleId:"lumo-list-box"});const gp=Ie`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;Ae("vaadin-context-menu-list-box",[al,gp],{moduleId:"lumo-context-menu-list-box"});const vp=Ie`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;Ae("vaadin-context-menu-overlay",[Qs,vp],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Dc({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(a){this.info.sourceEvent=a;const i=a.composedPath();this.info.sourceEvent.__composedPath=i},touchstart(a){this._setSourceEvent(a),this.info.touchStartCoords={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};const i=a.composedPath()[0]||a.target;this._timerId=setTimeout(()=>{const e=a.changedTouches[0];a.shiftKey||(Fr&&(this._fired=!0,this.fire(i,e.clientX,e.clientY)),qo("tap"))},500)},touchmove(a){const e=this.info.touchStartCoords;(Math.abs(e.x-a.changedTouches[0].clientX)>15||Math.abs(e.y-a.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(a){this._fired&&a.preventDefault(),this._cancelTimer()},contextmenu(a){a.shiftKey||(this._setSourceEvent(a),this.fire(a.target,a.clientX,a.clientY),qo("tap"))},fire(a,i,e){const t=this.info.sourceEvent,n=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});n.detail={x:i,y:e,sourceEvent:t},a.dispatchEvent(n),n.defaultPrevented&&t&&t.preventDefault&&t.preventDefault()}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bp=a=>class extends Ks(Hs(a)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yp extends bp(Ze(Vt(Le))){static get is(){return"vaadin-context-menu-item"}static get template(){return Me`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}Ne(yp);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xp extends gu(Ze(Vt(cr(Le)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return Me`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}Ne(xp);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cp=a=>class extends nc(Os(a)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let n=e.bottom-t.height;const o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){const h=getComputedStyle(o);n=n-parseFloat(h.bottom)-parseFloat(h.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:n}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(e){let t=Gs(this.localName,e);for(;t;){if(t===this)return!0;t=t.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wp=Ie`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-context-menu-overlay",[Zn,wp],{moduleId:"vaadin-context-menu-overlay-styles"});class Sp extends Cp(Jn(Vt(Ze(Le)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return Me`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}Ne(Sp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ip{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ap=a=>class extends a{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(t=>t.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this._overlayElement,t=e.getFirstChild();if(e.parentOverlay){const n=e.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t,n){e.items=t._item.children,e.listenOn=t,e.overlayClass=n;const o=this._overlayElement,h=e._overlayElement;h.positionTarget=t,h.noHorizontalOverlap=!0,h._setParentOverlay(o),o.hasAttribute("theme")?e.setAttribute("theme",o.getAttribute("theme")):e.removeAttribute("theme");const s=h.$.content;s.style.minWidth="",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:t._item.children}}))}__createComponent(e){let t;return e.component instanceof HTMLElement?t=e.component:t=document.createElement(e.component||`${this._tagNamePrefix}-item`),t._hasVaadinItemMixin&&(t.setAttribute("role","menuitem"),t.tabIndex=-1),t.localName==="hr"?t.setAttribute("role","separator"):t.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(t,e,this._theme),t._item=e,e.text&&(t.textContent=e.text),e.className&&t.setAttribute("class",e.className),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(t,!1),t.setAttribute("aria-haspopup","true")),t}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",t=>{const{value:n}=t.detail;if(typeof n=="number"){const o=e.items[n]._item;e.selected=null,o.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:o}}))}}),e}__initOverlay(){const e=this._overlayElement;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(Hi?"click":"mouseover",t=>{this.__showSubMenu(t)}),e.addEventListener("keydown",t=>{const{key:n}=t,o=this.__isRTL,h=n==="ArrowRight",s=n==="ArrowLeft";!o&&h||o&&s||n==="Enter"||n===" "?this.__showSubMenu(t):!o&&s||o&&h||n==="Escape"?(n==="Escape"&&t.stopPropagation(),this.close(),this.listenOn.focus()):n==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",t=>{const{detail:n}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:n}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",t=>{const n=t.target,o=t.detail.value,h=n.items.indexOf(o);o.keepOpen&&h>-1?(n._overlayElement.requestContentUpdate(),n._listBox._observer.flush(),n._listBox.children[h].focus()):o.keepOpen||this.close()}),e.addEventListener("opened-changed",t=>{if(!t.detail.value){const n=this._listBox.querySelector("[expanded]");n&&this.__updateExpanded(n,!1)}}),e}__showSubMenu(e,t=e.composedPath().find(n=>n.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,t)});return}const n=this._subMenu;if(t){const{children:o}=t._item;if(n.items!==o&&n.close(),!this.opened)return;if(o&&o.length){this.__updateExpanded(t,!0);const{overlayClass:h}=this;this.__openSubMenu(n,t,h)}else n.listenOn.focus()}}__itemsRenderer(e,t,{detail:n}){this.__initMenu(e,t);const o=e.querySelector(this.constructor.is);o.closeOn=t.closeOn;const h=e.querySelector(`${this._tagNamePrefix}-list-box`);h.innerHTML="",[...n.children||t.items].forEach(s=>{const d=this.__createComponent(s);h.appendChild(d)})}_setMenuItemTheme(e,t,n){let o=e.getAttribute("theme")||n;t.theme!=null&&(o=Array.isArray(t.theme)?t.theme.join(" "):t.theme),this.__updateTheme(e,o)}__toggleMenuComponentAttribute(e,t,n){n?(e.setAttribute(t,""),e[`__has-${t}`]=!0):e[`__has-${t}`]&&(e.removeAttribute(t),e[`__has-${t}`]=!1)}__initMenu(e,t){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const n=this.__initListBox();this._listBox=n,e.appendChild(n);const o=this.__initSubMenu();this._subMenu=o,e.appendChild(o),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,t){e.setAttribute("aria-expanded",t.toString()),e.toggleAttribute("expanded",t)}__updateTheme(e,t){t?e.setAttribute("theme",t):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kp=a=>class extends Ap(a){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_touch:{type:Boolean,value:Hi},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new Ip(this._wideMediaQuery,e=>{this._wide=e}))}_createOverlay(){const e=document.createElement(`${this._tagNamePrefix}-overlay`);e.owner=this,e.addEventListener("opened-changed",t=>{this._onOverlayOpened(t)}),e.addEventListener("vaadin-overlay-open",t=>{this._onVaadinOverlayOpen(t)}),this._overlayElement=e}_onOverlayOpened(e){const t=e.detail.value;this._setOpened(t),t&&this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(e,t){e&&(e.model=t)}_overlayModelessChanged(e,t){e&&(e.modeless=t)}_overlayPhoneChanged(e,t){e&&(e.toggleAttribute("phone",t),e.withBackdrop=t)}_overlayThemeChanged(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_touchOrWideChanged(e,t){this._phone=!t&&e}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){const n="vaadin-overlay-outside-click",o=this._overlayElement;t&&this._unlisten(o,t,this._boundClose),e?(this._listen(o,e,this._boundClose),o.removeEventListener(n,this._boundPreventDefault)):o.addEventListener(n,this._boundPreventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=e}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(e,t){if(t){if(e)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),e=this.__itemsRenderer}this._overlayElement.renderer=e}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,n=>e.composedPath().indexOf(n)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(e.preventDefault(),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const o=this._overlayElement.style;o[e]=`${(parseInt(o[e])||0)+t}px`}__alignOverlayPosition(){const e=this._overlayElement;if(e.positionTarget)return;const t=e.style;["top","right","bottom","left"].forEach(l=>t.removeProperty(l)),["right-aligned","end-aligned","bottom-aligned"].forEach(l=>e.removeAttribute(l));const{xMax:n,xMin:o,yMax:h}=e.getBoundaries(),s=this.__x,d=this.__y,m=document.documentElement.clientWidth,c=document.documentElement.clientHeight;this.__isRTL?s>m/2||s>o?t.right=`${Math.max(0,m-s)}px`:(t.left=`${s}px`,this._setEndAligned(e)):s<m/2||s<n?t.left=`${s}px`:(t.right=`${Math.max(0,m-s)}px`,this._setEndAligned(e)),d<c/2||d<h?t.top=`${d}px`:(t.bottom=`${Math.max(0,c-d)}px`,e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(e.detail instanceof Object){if(e.detail[t])return e.detail[t];if(e.detail.sourceEvent)return this._getEventCoordinate(e.detail.sourceEvent,t)}else{const n=`client${t.toUpperCase()}`,o=e.changedTouches?e.changedTouches[0][n]:e[n];if(o===0){const h=e.target.getBoundingClientRect();return t==="x"?h.left:h.top+h.height}return o}}_listen(e,t,n){zr[t]?ur(e,t,n):e.addEventListener(t,n)}_unlisten(e,t,n){zr[t]?Xs(e,t,n):e.removeEventListener(t,n)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ep extends kp(Rs(cr(wi(vc(Le))))){static get template(){return Me`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),Ui(this)}_attachDom(i){const e=this.attachShadow({mode:"open"});return e.appendChild(i),e.appendChild(this._overlayElement),e}}Ne(Ep);(function(){function a(s){return window.Vaadin.Flow.tryCatchWrapper(s,"Vaadin Context Menu")}function i(s,d){try{return window.Vaadin.Flow.clients[s].getByNodeId(d)}catch(m){console.error("Could not get node %s from app %s",d,s),console.error(m)}}function e(s,d){s.$connector||(s.$connector={generateItems:a(m=>{const c=t(d,m);s.items=c})})}function t(s,d){const m=i(s,d);if(m)return Array.from(m.children).map(c=>{const l={component:c,checked:c._checked,keepOpen:c._keepOpen,className:c.className,theme:c.__theme};return c._hasVaadinItemMixin&&c._containerNodeId&&(l.children=t(s,c._containerNodeId)),c._item=l,l})}function n(s,d){s._item&&(s._item.checked=d,s._item.keepOpen&&s.toggleAttribute("menu-item-checked",d))}function o(s,d){s._item&&(s._item.keepOpen=d)}function h(s,d){s._item&&(s._item.theme=d)}window.Vaadin.Flow.contextMenuConnector={initLazy(...s){return a(e)(...s)},generateItemsTree(...s){return a(t)(...s)},setChecked(...s){return a(n)(...s)},setKeepOpen(...s){return a(o)(...s)},setTheme(...s){return a(h)(...s)}}})();(function(){function a(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function i(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:a(function(t){if(e.preventContextMenu&&e.preventContextMenu(t))return;t.preventDefault(),t.stopPropagation(),this.$contextMenuTargetConnector.openEvent=t;let n={};e.getContextMenuBeforeOpenDetail&&(n=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:n}))}),updateOpenOn:a(function(t){this.removeListener(),this.openOnEventType=t,customElements.whenDefined("vaadin-context-menu").then(a(()=>{zr[t]?ur(e,t,this.openOnHandler):e.addEventListener(t,this.openOnHandler)}))}),removeListener:a(function(){this.openOnEventType&&(zr[this.openOnEventType]?Xs(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:a(function(t){t.open(this.openEvent)}),removeConnector:a(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return a(i)(...e)}}})();Ae("vaadin-form-item",Ie`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mp extends Ze(Le){static get template(){return Me`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(i){return i.ariaTarget||i}__linkLabelToField(i){io(this._getFieldAriaTarget(i),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(i){ro(this._getFieldAriaTarget(i),"aria-labelledby",this.__labelId)}__onLabelClick(){const i=this.__fieldNode;i&&(i.focus(),i.click())}__getValidateFunction(i){return i.validate||i.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const i=this.$.labelSlot.assignedElements()[0];i&&(this.__labelNode=i,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${Vs()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const i=this.$.contentSlot.assignedElements();i.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=i.find(t=>!!this.__getValidateFunction(t));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(i){i?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const i=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",i===!1)}}Ne(Mp);Ae("vaadin-overlay",Kr,{moduleId:"lumo-vaadin-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-overlay",Zn,{moduleId:"vaadin-overlay-styles"});class ll extends Jn(Ze(Vt(Le))){static get template(){return Me`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),Ui(this)}}Ne(ll);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tp=Ie`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;Ae("vaadin-multi-select-combo-box-chip",[Pc,Tp],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dp=Ie`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;Ae("vaadin-multi-select-combo-box-item",[Zr,Zs,Dp],{moduleId:"lumo-multi-select-combo-box-item"});Ae("vaadin-multi-select-combo-box-overlay",[Kr,Jr,ea,Js,ta,Ie`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});Ae("vaadin-multi-select-combo-box-container",Ie`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const Pp=Ie`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part='label'] {
    flex-shrink: 0;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-block: calc(var(--lumo-space-xs) / 2);
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([auto-expand-vertically]) ::slotted([slot='input']) {
    min-height: calc(var(--lumo-text-field-size, var(--lumo-size-m)) - 2 * var(--lumo-space-xs));
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;Ae("vaadin-multi-select-combo-box",[Ns,Pp],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Op extends Ze(Le){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return Me`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }

        @media (forced-colors: active) {
          :host {
            outline: 1px solid;
            outline-offset: -1px;
          }
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(i){i.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}Ne(Op);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-multi-select-combo-box-container",Ie`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Tr;class Rp extends Oc{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Tr){Tr=super.template.cloneNode(!0);const i=Tr.content,e=i.querySelectorAll("slot"),t=document.createElement("div");t.setAttribute("id","wrapper"),i.insertBefore(t,e[2]),t.appendChild(e[0]),t.appendChild(e[1])}return Tr}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}Ne(Rp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fp extends ia(Ze(Vt(Le))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return Me`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}Ne(Fp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Ae("vaadin-multi-select-combo-box-overlay",Ie`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let Dr;class zp extends ra(ll){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!Dr){Dr=super.template.cloneNode(!0);const i=Dr.content.querySelector('[part~="overlay"]');i.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),i.insertBefore(e,i.firstElementChild)}return Dr}}Ne(zp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lp extends sa(Le){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return Me`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(i,e,t){return i instanceof Bt||this.owner.readonly?!1:this.owner._findIndex(i,this.owner.selectedItems,t)>-1}_updateElement(i,e){super._updateElement(i,e),i.toggleAttribute("readonly",this.owner.readonly)}}Ne(Lp);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Np extends aa(la(Ze(Le))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return Me`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1},lastFilter:{type:String,notify:!0},topGroup:{type:Array,observer:"_topGroupChanged"},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_setDropdownItems(i){if(this.readonly){this._dropdownItems=this.selectedItems;return}if(this.filter||!this.selectedItemsOnTop){this._dropdownItems=i;return}if(i&&i.length&&this.topGroup&&this.topGroup.length){const e=i.filter(t=>this._comboBox._findIndex(t,this.topGroup,this.itemIdPath)===-1);this._dropdownItems=this.topGroup.concat(e);return}this._dropdownItems=i}_topGroupChanged(i){i&&this._setDropdownItems(this.filteredItems)}_initScroller(){const i=this.getRootNode().host;this._comboBox=i,super._initScroller(i)}_onEnter(i){if(this.opened){if(i.preventDefault(),i.stopPropagation(),this.readonly)this.close();else if(this._hasValidInputValue()){const e=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(e)}return}super._onEnter(i)}_onEscape(i){if(this.readonly){i.stopPropagation(),this.opened&&this.close();return}super._onEscape(i)}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(i){i||(this._ignoreCommitValue=!0),super._setFocused(i),!i&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(i){i.stopPropagation(),!this.readonly&&(i.detail.item instanceof Bt||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:i.detail.item}})))}_shouldLoadPage(i){return this.readonly?!1:super._shouldLoadPage(i)}clearCache(){this.readonly||super.clearCache()}}Ne(Np);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bp=Ie`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
    --_chip-min-width: var(--vaadin-multi-select-combo-box-chip-min-width, 50px);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  ::slotted([slot='chip']) {
    overflow: hidden;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }

  :host([auto-expand-vertically]) #chips {
    display: contents;
  }

  :host([auto-expand-horizontally]) [class$='container'] {
    width: auto;
  }
`;Ae("vaadin-multi-select-combo-box",[qs,Bp],{moduleId:"vaadin-multi-select-combo-box-styles"});class Vp extends no(js(Ze(wi(Le)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return Me`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          selected-items-on-top="[[selectedItemsOnTop]]"
          top-group="[[_topGroup]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            auto-expand-vertically="[[autoExpandVertically]]"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoExpandHorizontally:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandHorizontallyChanged"},autoExpandVertically:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandVerticallyChanged"},autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,selectedItemsOnTop:{type:Boolean,value:!1},value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String},_topGroup:{type:Array}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)","__updateTopGroup(selectedItemsOnTop, selectedItems, opened)"]}get slotStyles(){const i=this.localName;return[...super.slotStyles,`
        ${i}[has-value] input::placeholder {
          color: transparent !important;
          forced-color-adjust: none;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new eo(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new to(this.inputElement,this._labelController)),this._tooltipController=new Xr(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new Rc(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:i=>{i.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=i}}),this.addController(this._overflowController),this.__updateChips(),Ui(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),Tn(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(i,e){super._disabledChanged(i,e),(i||e)&&this.__updateChips()}_inputElementChanged(i){super._inputElementChanged(i),i&&this.$.comboBox._setInputElement(i)}_setFocused(i){super._setFocused(i),!i&&document.hasFocus()&&(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(i,e){if(this.stateTarget){if(i==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(i,e)}}_autoExpandHorizontallyChanged(i,e){(i||e)&&this.__updateChips()}_autoExpandVerticallyChanged(i,e){(i||e)&&this.__updateChips()}_clearButtonVisibleChanged(i,e){(i||e)&&this.__updateChips()}_onFilteredItemsChanged(i){const{value:e}=i.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(i,e){(i||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(i,e){(Math.floor(i)!==i||i<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(i){const e=this.__tmpA11yPlaceholder;e!==i&&(this.__savedPlaceholder=i,e&&(this.placeholder=e))}_selectedItemsChanged(i){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(i);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox.$.overlay._updateOverlayWidth()}_getItemLabel(i){return this.$.comboBox._getItemLabel(i)}_mergeItemLabels(i){return i.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(i,e,t){if(t&&i){for(let n=0;n<e.length;n++)if(e[n]&&e[n][t]===i[t])return n;return-1}return e.indexOf(i)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(i,e,t){const n=e?"selected":"deselected",o=this.i18n.total.replace("{count}",t||0);Tn(`${i} ${this.i18n[n]} ${o}`)}__removeItem(i){const e=[...this.selectedItems];e.splice(e.indexOf(i),1),this.__updateSelection(e);const t=this._getItemLabel(i);this.__announceItem(t,!1,e.length)}__selectItem(i){const e=[...this.selectedItems],t=this._findIndex(i,e,this.itemIdPath),n=this._getItemLabel(i);let o=!1;if(t!==-1){const h=this._lastFilter;if(h&&h.toLowerCase()===n.toLowerCase()){this.__clearFilter();return}e.splice(t,1)}else e.push(i),o=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(n,o,e.length)}__updateSelection(i){this.selectedItems=i,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(i,e,t){i?t||(this._topGroup=[...e]):this._topGroup=[]}__createChip(i){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=i,e.disabled=this.disabled,e.readonly=this.readonly;const t=this._getItemLabel(i);return e.label=t,e.setAttribute("title",t),e.addEventListener("item-removed",n=>this._onItemRemoved(n)),e.addEventListener("mousedown",n=>this._preventBlur(n)),e}__getOverflowWidth(){const i=this._overflow;i.style.visibility="hidden",i.removeAttribute("hidden");const e=i.getAttribute("count");i.setAttribute("count","99");const t=getComputedStyle(i),n=i.clientWidth+parseInt(t.marginInlineStart);return i.setAttribute("count",e),i.setAttribute("hidden",""),i.style.visibility="",n}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(h=>{h.remove()});const i=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,t=parseInt(getComputedStyle(this.inputElement).flexBasis);let n=e-t;i.length>1&&(n-=this.__getOverflowWidth());const o=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const h=[];for(let m=i.length-1,c=null;m>=0;m--){const l=this.__createChip(i[m]);this.insertBefore(l,c),c=l,h.unshift(l)}const s=[],d=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&d<t){for(;h.length>1;){h.pop().remove(),s.unshift(i.pop());const c=s.length>0?t+this.__getOverflowWidth():t;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=c)break}h.length===1&&(h[0].style.maxWidth=`${Math.max(o,n)}px`)}this._overflowItems=s;return}for(let h=i.length-1,s=null;h>=0;h--){const d=this.__createChip(i[h]);if(this.insertBefore(d,s),!this.autoExpandVertically&&this.$.chips.clientWidth>n)if(s===null)d.style.maxWidth=`${Math.max(o,n)}px`;else{d.remove();break}i.pop(),s=d}this._overflowItems=i}__updateOverflowChip(i,e,t,n){if(i){const o=e.length;i.label=`${o}`,i.setAttribute("count",`${o}`),i.setAttribute("title",this._mergeItemLabels(e)),i.toggleAttribute("hidden",o===0),i.disabled=t,i.readonly=n}}_onClearButtonTouchend(i){i.preventDefault(),i.stopPropagation(),this.clear()}_onClearButtonClick(i){i.stopPropagation(),this.clear()}_onChange(i){i.stopPropagation()}_onEscape(i){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(i.stopPropagation(),this.selectedItems=[])}_onKeyDown(i){super._onKeyDown(i);const e=this._chips;if(!this.readonly&&e.length>0)switch(i.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,i);break;case"ArrowRight":this._onArrowRight(e,i);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let n;this.__isRTL?t===i.length-1?n=-1:t>-1&&(n=t+1):t===-1?n=i.length-1:t>0&&(n=t-1),n!==void 0&&(this._focusedChipIndex=n)}_onArrowRight(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let n;this.__isRTL?t===-1?n=i.length-1:t>0&&(n=t-1):t===i.length-1?n=-1:t>-1&&(n=t+1),n!==void 0&&(this._focusedChipIndex=n)}_onBackSpace(i){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=i.length-1:(this.__removeItem(i[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(i,e){if(i>-1||e>-1){const t=this._chips;if(t.forEach((n,o)=>{n.toggleAttribute("focused",o===i)}),i>-1){const n=t[i].item,o=this._getItemLabel(n);Tn(`${o} ${this.i18n.focused}`)}}}_onComboBoxChange(){const i=this.$.comboBox.selectedItem;i&&this.__selectItem(i)}_onComboBoxItemSelected(i){this.__selectItem(i.detail.item)}_onCustomValueSet(i){i.preventDefault(),i.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:i.detail,composed:!0,bubbles:!0}))}_onItemRemoved(i){this.__removeItem(i.detail.item)}_preventBlur(i){i.preventDefault()}__computeEffectiveItems(i,e,t){return i&&t?e:i}__computeEffectiveFilteredItems(i,e,t,n){return!i&&n?t:e}}Ne(Vp);const Gr=window;Gr.Vaadin=Gr.Vaadin||{};Gr.Vaadin.setLitRenderer=(a,i,e,t,n,o)=>{const h=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${n.map(d=>`
          const ${d} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${d}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(bc,Ln,t),s=(d,m,c)=>{const{item:l}=c;d.__litRenderer!==s&&(d.innerHTML="",delete d._$litPart$,d.__litRenderer=s);const u={};for(const p in l)p.startsWith(o)&&(u[p.replace(o,"")]=l[p]);h(d,{...c,item:u},l.key)};s.__rendererId=o,a[i]=s};Gr.Vaadin.unsetLitRenderer=(a,i,e)=>{var t;((t=a[i])==null?void 0:t.__rendererId)===e&&(a[i]=void 0)}});export default Hp();
