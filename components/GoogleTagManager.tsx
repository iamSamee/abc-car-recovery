import Script from "next/script";
import { ADS_CALL_CONVERSION, GA4_ID, GTM_ID } from "@/lib/analytics";
import { PHONE_DISPLAY } from "@/lib/content";

/**
 * GTM + GA4 loader — goes in <head> via the root layout.
 *
 * GTM plus the Google tags it pulls in is 300+ KB of JavaScript, which on
 * slow phones delays the hero image (LCP) and blocks the main thread. So it
 * loads on the visitor's first interaction, or 3.5s after page load, whichever
 * is first. Events pushed to dataLayer before then (e.g. a fast call tap) are
 * queued and processed when GTM arrives.
 *
 * For visitors from our ads, Google supplies a forwarding number through the
 * callback below. Google's default swap only changes visible text, but most of
 * our call buttons show no number and link to +44…, so we swap every tel: link
 * and displayed number ourselves, including ones rendered later (menus, forms).
 *
 * Consent Mode v2 defaults are set first: denied until the visitor accepts
 * (see lib/consent.ts). While denied, Google tags send cookieless pings.
 */
const LOAD_DELAY_MS = 3500;

export function GoogleTagManager() {
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,l,i){
w[l]=w[l]||[];w.gtag=w.gtag||function(){w[l].push(arguments)};
var a=false,m=false;try{var c=localStorage.getItem('abc_cookie_consent');
if(c==='granted'){a=m=true}else if(c&&c!=='denied'){var p=JSON.parse(c);a=!!p.analytics;m=!!p.marketing}}catch(e){}
var ag=a?'granted':'denied',mg=m?'granted':'denied';
w.gtag('consent','default',{ad_storage:mg,ad_user_data:mg,ad_personalization:mg,analytics_storage:ag,wait_for_update:500});
w.gtag('set','ads_data_redaction',!m);w.gtag('set','url_passthrough',true);
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
function swap(shown,dial){
function run(){
d.querySelectorAll('a[href^="tel:"]').forEach(function(a){if(a.getAttribute('href')!=='tel:'+dial)a.setAttribute('href','tel:'+dial)});
var t=d.createTreeWalker(d.body,NodeFilter.SHOW_TEXT),n;
while(n=t.nextNode()){var p=n.parentNode.nodeName;
if(p!=='SCRIPT'&&p!=='STYLE'&&p!=='NOSCRIPT'&&n.nodeValue.indexOf('${PHONE_DISPLAY}')>-1)n.nodeValue=n.nodeValue.split('${PHONE_DISPLAY}').join(shown)}}
run();new MutationObserver(run).observe(d.body,{childList:true,subtree:true,characterData:true});}
var done=false,evs=['pointerdown','touchstart','scroll','keydown'];
function load(){if(done)return;done=true;
evs.forEach(function(e){w.removeEventListener(e,load,{passive:true,capture:true})});
var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;
d.head.appendChild(j);
w.gtag('js',new Date());w.gtag('config','${GA4_ID}');
w.gtag('config','${ADS_CALL_CONVERSION}',{phone_conversion_number:'${PHONE_DISPLAY}',phone_conversion_callback:swap});
var k=d.createElement('script');k.async=true;k.src='https://www.googletagmanager.com/gtag/js?id=${GA4_ID}';
d.head.appendChild(k);}
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
