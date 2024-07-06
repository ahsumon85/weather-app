import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '16eea967f40b795885e03d1b843c76d03f427cbf792af3f9649142dcb4bb57b0') {
    pending.push(import('./chunks/chunk-d89f42a9cd882313578209a4011dd90529132a6a1e740dfbe6048f187303ec62.js'));
  }
  if (key === '2f5c4f7e85a45259fffd6df69720b9d8cb6db71793649c9ef94c8a9981aac3cd') {
    pending.push(import('./chunks/chunk-6eb80c543c879d1f3ac5f0b817dc8a26a675df2ac2a9916b17c0f94fd72133b6.js'));
  }
  if (key === 'f96aa403844d0bfebe3a191b0414f471af5fa664c91957a2b8d8ffa69f0b74ad') {
    pending.push(import('./chunks/chunk-d7daa9648542f740f9341ce042b8dc8e43ad892dc311b1e7ac43fc96d64a2095.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}