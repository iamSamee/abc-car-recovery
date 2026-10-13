import Script from "next/script";
import { GTM_ID } from "@/lib/analytics";

/**
 * GTM loader — goes in <head> via the root layout.
 *
 * GTM plus the Google Ads tag it pulls in is ~300 KB of JavaScript, which on
 * slow phones delays the hero image (LCP) and blocks the main thread. So it
 * loads on the visitor's first interaction, or 3.5s after page load, whichever
 * is first. Events pushed to dataLayer before then (e.g. a fast call tap) are
 * queued and processed when GTM arrives.
 */
const LOAD_DELAY_MS = 3500;

export function GoogleTagManager() {
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,l,i){
w[l]=w[l]||[];w.gtag=w.gtag||function(){w[l].push(arguments)};
var c=null;try{c=localStorage.getItem('abc_cookie_consent')}catch(e){}
var g=c==='granted'?'granted':'denied';
w.gtag('consent','default',{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g,wait_for_update:500});
w.gtag('set','ads_data_redaction',g==='denied');w.gtag('set','url_passthrough',true);
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var done=false,evs=['pointerdown','touchstart','scroll','keydown'];
function load(){if(done)return;done=true;
evs.forEach(function(e){w.removeEventListener(e,load,{passive:true,capture:true})});
var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;
d.head.appendChild(j);}
evs.forEach(function(e){w.addEventListener(e,load,{passive:true,capture:true})});
function later(){setTimeout(load,${LOAD_DELAY_MS})}
if(d.readyState==='complete')later();else w.addEventListener('load',later);
})(window,document,'dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** GTM fallback for visitors without JavaScript — first thing in <body>. */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
