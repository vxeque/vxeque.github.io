import"./hoisted.DnFK6dK7.js";class n extends HTMLElement{constructor(){super(...arguments),this.videoId=encodeURIComponent(this.dataset.id)}static{this.preconnected=!1}connectedCallback(){this.addEventListener("pointerover",n.warmConnections,{once:!0}),this.addEventListener("click",t=>this.addIframe(t));const e=this.querySelector("a");if(e){const t=document.createElement("button");t.classList.add(...e.classList.values()),t.setAttribute("aria-label",e.getAttribute("aria-label")),e.replaceWith(t)}}static addPrefetch(e,t){const a=document.createElement("link");a.rel=e,a.href=t,document.head.append(a)}static warmConnections(){n.preconnected||(n.addPrefetch("preconnect","https://player.vimeo.com"),n.addPrefetch("preconnect","https://i.vimeocdn.com"),n.addPrefetch("preconnect","https://f.vimeocdn.com"),n.addPrefetch("preconnect","https://fresnel.vimeocdn.com"),n.preconnected=!0)}addIframe(e){if(this.classList.contains("ltv-activated"))return;e.preventDefault(),this.classList.add("ltv-activated");const t=encodeURIComponent(this.dataset.t||"0m"),a=new URLSearchParams(this.dataset.params||[]),i=document.createElement("iframe");i.width="640",i.height="360",i.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",i.allowFullscreen=!0,i.src=`https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${t}`,this.append(i)}}customElements.get("lite-vimeo")||customElements.define("lite-vimeo",n);class r extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let e=this.querySelector(".lty-playbtn");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute("playlabel")||"Play",this.dataset.title=this.getAttribute("title")||"",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`,this.upgradePosterImage()),e||(e=document.createElement("button"),e.type="button",e.classList.add("lty-playbtn"),this.append(e)),!e.textContent){const t=document.createElement("span");t.className="lyt-visually-hidden",t.textContent=this.playLabel,e.append(t)}this.addNoscriptIframe(),e.removeAttribute("href"),this.addEventListener("pointerover",r.warmConnections,{once:!0}),this.addEventListener("click",this.activate),this.needsYTApi=this.hasAttribute("js-api")||navigator.vendor.includes("Apple")||navigator.userAgent.includes("Mobi")}static addPrefetch(e,t,a){const i=document.createElement("link");i.rel=e,i.href=t,a&&(i.as=a),document.head.append(i)}static warmConnections(){r.preconnected||(r.addPrefetch("preconnect","https://www.youtube-nocookie.com"),r.addPrefetch("preconnect","https://www.google.com"),r.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),r.addPrefetch("preconnect","https://static.doubleclick.net"),r.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var a=document.createElement("script");a.src="https://www.youtube.com/iframe_api",a.async=!0,a.onload=i=>{YT.ready(e)},a.onerror=t,this.append(a)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement("div");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(a=>{let i=new YT.Player(e,{width:"100%",videoId:this.videoId,playerVars:t,events:{onReady:s=>{s.target.playVideo(),a(i)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement("noscript");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute("params")||[]);return e.append("autoplay","1"),e.append("playsinline","1"),e}async activate(){if(this.classList.contains("lyt-activated"))return;if(this.classList.add("lyt-activated"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const e=this.createBasicIframe();this.append(e),e.focus()}createBasicIframe(){const e=document.createElement("iframe");return e.width=560,e.height=315,e.title=this.playLabel,e.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority="low",t.referrerpolicy="origin",t.src=e,t.onload=a=>{a.target.naturalHeight==90&&a.target.naturalWidth==120||(this.style.backgroundImage=`url("${e}")`)}},100)}}customElements.define("lite-youtube",r);
