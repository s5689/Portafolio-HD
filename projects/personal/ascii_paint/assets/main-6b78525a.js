(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const A=["black","rgba(0, 0, 128, 1)","rgba(0, 128, 0, 1)","rgba(0, 128, 128, 1)","rgba(128, 0, 0, 1)","rgba(128, 0, 128, 1)","rgba(128, 128, 0, 1)","rgba(192, 192, 192, 1)","rgba(128, 128, 128, 1)","rgba(0, 0, 255, 1)","rgba(0, 255, 0, 1)","rgba(0, 255, 255, 1)","rgba(255, 0, 0, 1)","rgba(255, 0, 255, 1)","rgba(255, 255, 0, 1)","rgba(255, 255, 255, 1)","rgba(0, 0, 0, 0)"],r={_char:"",charCallbacks:[],get char(){return this._char},set char(e){this._char=e,Object.values(this.charCallbacks).forEach(t=>t(e))},onCharChange(e,t){this.charCallbacks[e]=t},offCharChange(e){delete this.charCallbacks[e]},_color:"",colorCallbacks:{},get color(){return this._color},set color(e){this._color=e,Object.values(this.colorCallbacks).forEach(t=>t(e))},onColorChange(e,t){this.colorCallbacks[e]=t},offColorChange(e){delete this.colorCallbacks[e]},_background:"",backgroundCallbacks:{},get background(){return this._background},set background(e){this._background=e,Object.values(this.backgroundCallbacks).forEach(t=>t(e))},onBackgroundChange(e,t){this.backgroundCallbacks[e]=t},offBackgroundCallback(e){delete this.backgroundCallbacks[e]},_layer:null,layerCallbacks:{},get layer(){return this._layer},set layer(e){Object.values(this.layerCallbacks).forEach(t=>t(e)),this._layer=e},onLayerChange(e,t){this.layerCallbacks[e]=t},offLayerCallback(e){delete this.layerCallbacks[e]},_tool:null,toolCallbacks:{},get tool(){return this._tool},set tool(e){this._tool=e,Object.values(this.toolCallbacks).forEach(t=>t(e))},onToolChange(e,t){this.toolCallbacks[e]=t},offToolChange(e){delete this.toolCallbacks[e]}},p={_prevSize:{x:0,y:0},_size:{x:0,y:0},sizeCallbacks:{},get size(){return this._size},setSize(e,t){this._prevSize=this._size,this._size={x:e,y:t},Object.values(this.sizeCallbacks).forEach(n=>n(this._size,this._prevSize))},applyChanges(){this.setSize(this._size.x,this._size.y)},onSizeChange(e,t){this.sizeCallbacks[e]=t},offSizeChange(e){delete this.sizeCallbacks[e]}},C={layerList:{},callbacks:{},getSize(){return Object.keys(this.layerList).length-1},save(e){const t=e.parentElement.id,n=document.querySelectorAll(`#${t} tr`);this.layerList[t]=[],n.forEach(l=>{const o=[];for(let a=0;a<l.children.length;a++)o.push(l.children[a]);this.layerList[t].push(o)}),Object.values(this.callbacks).forEach(l=>l(e))},remove(e){delete this.layerList[e]},onChange(e,t){this.callbacks[e]=t},offChange(e){delete this.callbacks[e]}};function d(e){return document.getElementById(e)}function z(e){return document.querySelector(e)}function T(e,t){document.querySelectorAll(e).forEach((l,o)=>{t(l,o)})}function L(e){return getComputedStyle(typeof e=="string"?d(e):e)}const X=[{name:"Todo",value:["0ØΘ°ºª∞ø  ","1¹      ¼½","2²        ","3ЭЗ³эз   ¾","4         ","56789     ","          ","          ","AÀÁÂÃÄÅĂĄÆ","aàáâãäåăąæ","ДЛ        ","дл        ","BБßЪЫЬ    ","bбвъыь    ","CĆČÇ©     ","cćčç¢     ","DĎÐ       ","dďđ       ","EÈÉÊËЁĚĘΣЄ","eèéêëёěęεє","@£€       ","F         ","fƒ        ","G         ","g         ","HН        ","hн        ","IÌÍÎÏЇІ   ","iìíîïїі   ","J         ","j         ","K         ","kк        ","LĹĽŁ      ","lĺľłı     ","M         ","mм        ","NŃŇÑИЙП∩№¶","nńňñийпⁿ  ","OÒÓÔÕÖŐ δΦ","oòóôõöőðσφ","PФÞ ₧     ","pфþр      ","Q         ","q         ","RŔŘ Я®­    ","rŕřτя     ","SЅŚŠŞ$§   ","sѕśšş     ","TТŢŤГΓ    ","tтţťг     ","UÙÚÛÜŮŰЦµ ","uùúûüůűц  ","V         ","v         ","WШЩ       ","wшщ       ","XЖх       ","xж×¤      ","YЧУЎÝ ¥   ","yчуўýÿ    ","ZŹŻŽ      ","zźżž      ","ЮΩπ       ","ю         ","          ","          ","▲↑^⌂      ","▼↓ˇ       ","►→>≥»     ","◄←<≤«     ","↕↨↔       ","¡!|‼#&    ","¿?        ","+÷±†‡     ","-¯_       ","=≡‗       ","~≈        ",'"`´‘’“”¨˘˝',":;….,˛¸   ","([{⌠/%    ",")]}⌡\\    ","☺☻♠♣♥♦♫♪  ","◘◙☼*○•∙·  ","♀♂√¬⌐∟    ","          ","          ","░▒▓█▄▌▐▀■▬","─┤├┌┐└┘┴┬┼","│╡╞╒╕╘╛╧╤╪","║╢╟╓╖╙╜╨╥╫","═╣╠╔╗╚╝╩╦╬"]},{name:"Abecedario",value:["ABCDEFGHIJ","KLMNÑOPQRS","TUVWXYZ   ","          ","abcdefghij","klmnñopqrs","tuvwxyz   "]},{name:"Letras Acentuadas",value:["ÀÁÂÃÄÅĂĄÆ ","ÈÉÊËĘĚ    ","ÌÍÎÏ      ","ÒÓÔÕŐÖ    ","ÙÚÛÜŰŮ    ","          ","àáâãäåăąæ ","èéêëęě    ","ìíîï      ","òóôõőö    ","ùúûüűů    ","          ","ÇĆČĎÐĐĹĽŁ ","ŃŇŔŘŚŠŞŢŤÝ","ŹŻŽ       ","          ","çćčďðđĺľł ","ńňŕřśšşţťý","źżž      ÿ"]},{name:"Griego - Ruso",value:["ΓΘΩΣΦ     ","αδεσφτπ   ","          ","АБВГДЕЖЗИЙ","КЛМНОПРСТУ","ФХЦЧШЩЪЫЬЭ","ЮЯЁЄЅІЇЈЎ ","          ","абвгдежзий","клмнопрсту","фхцчшщъыьэ","юяёєѕіїјў "]},{name:"Simbolos",value:["☺☻♠♣♥♦♫♪♀♂","◘◙○☼•     ","§£€¥$¢    ","¡!|‼#&¿?†‡","+-×÷%=≡~≈ ","↑↓→←↕↨↔   ","▲▼►◄      ","<>√⌂∞∟⌐   ","≤≥        "]},{name:"Bloques",value:["░▒▓█      ","▄▌▐▀■▬    ","          ","┌──┬──┬──┐","│  │  │  │","├──┼──┼──┤","│  │  │  │","└──┴──┴──┘","┌┐└┘┴┬    ","─│┤┼├     ","          ","╔══╦══╦══╗","║  ║  ║  ║","╠══╬══╬══╣","║  ║  ║  ║","╚══╩══╩══╝","╔╗╚╝╩╦    ","═║╣╬╠     ","          ","╒══╤══╤══╕","│  │  │  │","╞══╪══╪══╡","│  │  │  │","╘══╧══╧══╛","╒╕╘╛╧╤    ","═│╡╪╞     ","          ","╓──╥──╥──╖","║  ║  ║  ║","╟──╫──╫──╢","║  ║  ║  ║","╙──╨──╨──╜","╓╖╙╜╨╥    ","─║╢╫╟     "]}];function K(){Q(),D(0)}function Q(){const e=d("char-selector");X.map((t,n)=>{e.innerHTML+=`<option value="${n}">${t.name}</option>`}),e.addEventListener("change",t=>D(t.target.value))}function D(e){let t="<table><tbody>";X[e].value.forEach(n=>{t+="<tr>";const l=n.length;for(let o=0;o<l;o++)t+=`<td>${n[o]}</td>`;t+="</tr>"}),t+="</tbody></table>",d("char-picker").innerHTML=t,U()}function U(){r.onColorChange("charPicker",t=>{d("char-picker").style.color=t}),r.onBackgroundChange("charPicker",t=>{t!==A[16]?(d("char-picker").style.background="none",d("char-picker").style.backgroundColor=t):(d("char-picker").style.background='url("./assets/transparency.png")',d("char-picker").style.backgroundColor=A[0])}),r.onBackgroundChange("charPicker-Hover",t=>{const n=A.findIndex(o=>o===t);[7,8,10,11,14,15].includes(n)?d("char-picker").setAttribute("dark",""):d("char-picker").removeAttribute("dark","")});let e=null;T("#char-picker td",t=>{t.addEventListener("click",()=>{e!==null&&e.removeAttribute("selected"),t.setAttribute("selected",""),r.char=t.innerHTML,e=t})})}function F(){K()}function J(){r.onCharChange("charPreview",e=>{d("char-preview").innerHTML=e}),r.onColorChange("charPreview",e=>{d("char-preview").style.color=e}),r.onBackgroundChange("charPreview",e=>{e!==A[16]?(d("char-preview").style.background="none",d("char-preview").style.backgroundColor=e):(d("char-preview").style.background='url("./assets/transparency.png")',d("char-preview").style.backgroundColor=A[0])})}function W(){Z(),ee()}function Z(){const e=[["black","rgba(0, 0, 128, 1)","rgba(0, 128, 0, 1)","rgba(0, 128, 128, 1)","rgba(128, 0, 0, 1)","rgba(128, 0, 128, 1)","rgba(128, 128, 0, 1)","rgba(192, 192, 192, 1)"],["rgba(128, 128, 128, 1)","rgba(0, 0, 255, 1)","rgba(0, 255, 0, 1)","rgba(0, 255, 255, 1)","rgba(255, 0, 0, 1)","rgba(255, 0, 255, 1)","rgba(255, 255, 0, 1)","rgba(255, 255, 255, 1)","rgba(0 ,0 ,0 ,0)"]];let t="<table><tbody><tr>";e[0].map((n,l)=>t+=`<td pos="${l}" style="background-color: ${n}"></td>`),t+="</tr><tr>",e[1].map((n,l)=>t+=`<td pos="${8+l}" style="background-color: ${n}"></td>`),t+="</tr></tbody></table>",d("color-picker").innerHTML=t}function ee(){T("#color-picker td",e=>{e.addEventListener("click",()=>{const t=e.getAttribute("pos");r.color=A[t]}),e.addEventListener("contextmenu",t=>{const n=e.getAttribute("pos");r.background=A[n],t.preventDefault()})})}d("tool-pencil").addEventListener("click",()=>{let e={removeAttribute:()=>null},t=!1;r.tool="pencil",m.unbindAll(),m.mousedown=({target:a})=>{t=!0,o(),n(a)},m.mouseover=({target:a,preview:f})=>{t?n(a):(o(),l(f),e=f)},m.mouseup=({preview:a})=>{t=!1,a!==null&&(l(a),e=a)},m.canvas_mouseleave=()=>{o()},r.onToolChange("tool-pencil",()=>{o(),r.offToolChange("tool-pencil")});function n(a){a.innerHTML=r.char,a.style.color=r.color,a.style.background=r.background}function l(a){a.innerHTML=r.char,a.style.color=r.color,a.style.background=r.background,a.style.opacity=L(`layer-${r.layer}`).opacity}function o(){e.innerHTML="",e.removeAttribute("style")}});const $={value:0,onChange:function(){},set(e){this.value=e},increase(){this.onChange("+")},decrease(){this.value!==0&&this.onChange("-")}};d("tool-eraser").addEventListener("click",()=>{let e={id:"",removeAttribute:()=>null},t=!1,n=!1;r.tool="eraser",m.unbindAll(),m.mousedown=({target:s})=>{t=!0,l(s)},m.mouseover=({target:s,preview:i})=>{t?(a(),l(s)):(a(),o(i)),n=!0,e=i},m.mouseup=({preview:s})=>{s!==null&&o(s),t=!1},m.canvas_mouseleave=()=>{a(),n=!1},$.onChange=s=>{s==="+"&&($.set($.value+1),a(),n&&m.mouseover({preview:e})),s==="-"&&(a(),$.set($.value-1),n&&m.mouseover({preview:e}))},r.onToolChange("tool-eraser",()=>{a(),r.offToolChange("tool-eraser")});function l(s){const i=C.layerList[`layer-${r.layer}`];f(s).forEach(({x:y,y:c})=>{typeof i[c]<"u"&&typeof i[c][y]<"u"&&(i[c][y].innerHTML="",i[c][y].removeAttribute("style"))})}function o(s){const i=C.layerList["preview-layer"];f(s).forEach(({x:y,y:c})=>{typeof i[c]<"u"&&typeof i[c][y]<"u"&&(i[c][y].innerHTML="█",i[c][y].setAttribute("hover",""))})}function a(){const s=C.layerList["preview-layer"];f(e).forEach(({x:h,y})=>{typeof s[y]<"u"&&typeof s[y][h]<"u"&&(s[y][h].innerHTML="",s[y][h].removeAttribute("hover"))})}function f(s){const{x:i,y:h}=H(s),y=[];let c=$.value;if(c!==0)for(;c!==0;){for(let v=h-c;v<h+c*2;v++)for(let u=i-c;u<i+c*2;u++)y.push({x:u,y:v});c--}else y.push({x:i,y:h});return y}});d("tool-fill").addEventListener("click",()=>{let e={removeAttribute:()=>null};r.tool="fill",m.unbindAll(),m.mouseover=({preview:o})=>{l(),n(o),e=o},m.mousedown=({target:o})=>{const a=H(o).x,f=H(o).y,s={background:L(o).backgroundColor,color:L(o).color,char:o.innerHTML},i=C.layerList[`layer-${r.layer}`];let h=[];for(y()&&h.push({e:i[f][a],x:a,y:f});h.length!==0;){const u=[];h.forEach(({e:b,x:g,y:k})=>{[{x:g-1,y:k},{x:g+1,y:k},{y:k-1,x:g},{y:k+1,x:g}].forEach(_=>{const P=_.x,N=_.y;if(c(P,N)){const G=u.find(I=>I.x===P&&I.y===N),Y=i[N][P];v(Y)&&typeof G>"u"&&u.push({e:Y,x:P,y:N})}}),t(b)}),h=u}function y(){let{color:u,backgroundColor:b}=o.style,g=!1;if(u=k(u,"f"),b=k(b,"b"),u!==r.color&&(g=!0),b!==r.background&&(g=!0),o.innerHTML!==r.char&&(g=!0),g)return!0;return!1;function k(w,_){if(w.indexOf("rgb(")!==-1)return w.replace("rgb(","rgba(").replace(")",", 1)");if(w===""){if(_==="f")return r.color;if(_==="b")return r.background}return w}}function c(u,b){return u>=0&&u<p.size.x&&b>=0&&b<p.size.y}function v(u){return L(u).backgroundColor===s.background&&L(u).color===s.color&&u.innerHTML===s.char}},m.canvas_mouseleave=()=>{l()},r.onToolChange("tool-fill",()=>{l(),r.offToolChange("tool-fill")});function t(o){o.innerHTML=r.char,o.style.color=r.color,o.style.background=r.background}function n(o){o.innerHTML=r.char,o.style.color=r.color,o.style.background=r.background,o.style.opacity=L(`layer-${r.layer}`).opacity}function l(){e.innerHTML="",e.removeAttribute("style")}});const S=z(":root"),R=L(S);d("tool-zoom").addEventListener("click",()=>{r.tool="zoom",m.unbindAll(),m.click=()=>{const e=Number(R.getPropertyValue("--zoomLevel"));S.style.setProperty("--zoomLevel",e+1)},m.contextmenu=({event:e})=>{e.preventDefault();const t=Number(R.getPropertyValue("--zoomLevel"));t!==1&&S.style.setProperty("--zoomLevel",t-1)}});const j=d("canvas"),M=L("canvas");d("tool-move").addEventListener("click",()=>{let e=!1;r.tool="move",m.unbindAll(),m.mousedown=()=>{r.tool="moving",e=!0},m.global_mousemove=({event:t})=>{if(e){const n=Number(M.top.slice(0,M.top.length-2)),l=Number(M.left.slice(0,M.left.length-2)),o=t.movementX,a=t.movementY;j.style.top=`${n+a}px`,j.style.left=`${l+o}px`}},m.mouseup=()=>{r.tool="move",e=!1}});const m={global_contextmenu:function(){},global_mousedown:function(){},global_mousemove:function(){},canvas_mouseleave:function(){},mouseover:function(){},mousedown:function(){},mouseup:function(){},click:function(){},contextmenu:function(){},unbindAll(){const e=Object.entries(this);for(const[t]of e)t!=="unbindAll"&&(this[t]=function(){})}};function te(){let e={x:null,y:null},t={x:null,y:null};p.onSizeChange("tool-picker",n=>{t=n}),C.onChange("tool-picker",n=>{n.parentElement.id==="preview-layer"&&(t.x!==e.x||t.y!==e.y)&&(e=t,ne())})}let q=!1;function ne(){T("#preview-layer td",e=>{E({element:e,e:"mouseover",f:"mouseover"}),E({element:e,e:"mousedown",f:"mousedown"}),E({element:e,e:"click",f:"click"}),E({element:e,e:"contextmenu",f:"contextmenu"})}),q||(E({element:d("canvas"),e:"mouseleave",f:"canvas_mouseleave"}),E({element:document,e:"contextmenu",f:"global_contextmenu"}),E({element:document,e:"mousedown",f:"global_mousedown"}),E({element:document,e:"mousemove",f:"global_mousemove"}),E({element:document,e:"mouseup",f:"mouseup"}),r.onToolChange("tool-declaration",e=>{d("preview-layer").setAttribute("tool",e),d("tool-picker").setAttribute("tool",e)}),q=!0)}function E({element:e,e:t,f:n}){e.addEventListener(t,l=>{r.layer!==null&&m[n](oe(l))})}function oe(e){let t=null,n=null;return e.target.offsetParent!==null&&e.target.offsetParent.id==="preview-layer"&&(t=z(`.layer[n="${r.layer}"] #${e.target.id}`),n=e.target),{event:e,preview:n,target:t}}function H(e){const t=e.id,n=Number(t.slice(1,t.indexOf("-"))),l=Number(t.slice(t.indexOf("-")+1,t.length));return{x:n,y:l}}function re(){J(),W(),te()}function le(){const e=z("#set-canvas-size #x"),t=z("#set-canvas-size #y");d("set-canvas-size").addEventListener("submit",n=>{const l=Number(e.value),o=Number(t.value);p.setSize(l,o),n.preventDefault()}),p.onSizeChange("set-canvas-size",n=>{e.value=n.x,t.value=n.y})}function ae(){const e=d("transparency"),t=d("transparency-value");e.addEventListener("mousedown",n=>{d(`layer-${r.layer}`).style.opacity=n.target.value/100,t.innerHTML=`${n.target.value}%`}),e.addEventListener("mousemove",n=>{d(`layer-${r.layer}`).style.opacity=n.target.value/100,t.innerHTML=`${n.target.value}%`}),e.addEventListener("mouseup",n=>{d(`layer-${r.layer}`).style.opacity=n.target.value/100,t.innerHTML=`${n.target.value}%`}),r.onLayerChange("transparency",n=>{if(d(`layer-${n}`)!==null){const o=L(d(`layer-${n}`)).opacity*100;e.removeAttribute("disabled"),e.value=o,t.innerHTML=`${o}%`}else e.setAttribute("disabled",""),t.innerHTML="--%"}),d("add-layer").addEventListener("click",()=>{se()})}function se(){const e=p.size.x,t=p.size.y,n=document.querySelectorAll(".layer").length,l=document.createElement("table"),o=document.createElement("tbody");l.id=`layer-${n}`,l.className="layer",l.setAttribute("n",n),l.setAttribute("style",`z-index: ${n*-1};`);for(let a=0;a<t;a++){const f=document.createElement("tr");f.id=`y${a}`;for(let s=0;s<e;s++){const i=document.createElement("td");i.id=`p${s}-${a}`,i.className="pixel",f.append(i)}o.append(f)}l.append(o),d("canvas").append(l),p.applyChanges()}let B=()=>null,O=()=>null;function ie(){let e="";C.onChange("layers-options-container",n=>{if(n.parentElement.id!=="preview-layer"){const l=Number(n.parentElement.getAttribute("n")),o=C.getSize(),a=d(`layer-${l}`);l===0&&(e=""),e+=`
        <div
          n="${l}"
          class="layers-options-container-item" 
          ${r.layer===l?"selected":""}
          ${a.style.display==="none"?"hide":""}
        >
          <span>${l+1})</span>
          <div id="item-preview"></div>
          <button class="hide" n="${l}"></button>
          ${l!==0?`<button class="remove" n="${l}"></button>`:""}
        </div>

        <divider></divider>
      `,l===o-1&&(d("layers-options-container").innerHTML=e,ce())}}),r.onLayerChange("layers-options-container",n=>{const l=z(`.layers-options-container-item[n="${r.layer}"]`),o=z(`.layers-options-container-item[n="${n}"]`);l!==null&&l.removeAttribute("selected"),o!==null&&o.setAttribute("selected","")}),document.addEventListener("mousemove",n=>B(n));let t;document.addEventListener("mousedown",n=>{n.target.offsetParent!==null&&n.target.offsetParent.id==="preview-layer"&&(t=!0)}),document.addEventListener("mouseup",n=>{O(n),t&&(V(n),t=!1)})}function ce(){T(".layers-options-container-item",(e,t)=>{const n=e.children[2],l=e.children[3],o=Number(e.getAttribute("n"));V(o,e),n.addEventListener("click",()=>{ue(o,e)}),t!==0&&l.addEventListener("click",()=>{de(o),p.applyChanges()}),e.addEventListener("click",a=>{fe(o,e,a)}),ye(o,e)})}function V(e,t){const n=p.size.x,l=p.size.y;if(typeof t<"u"){const a=document.createElement("canvas");let f=n,s=l,i=0;for(;;){const h=125/(i+1),y=60/(i+1);if(h<n||y<l)break;i++}i!==0&&(a.setAttribute("width",f*i),a.setAttribute("height",s*i),a.setAttribute("scale",i),t.children[1].replaceChildren(a)),o(e)}else r.layer!==null&&o(r.layer);function o(a){const f=z(`.layers-options-container-item[n="${a}"] canvas`),s=Number(f.getAttribute("scale")),i=f.getContext("2d");i.clearRect(0,0,f.width,f.height),C.layerList[`layer-${a}`].forEach((h,y)=>{h.forEach((c,v)=>{const{color:u,backgroundColor:b}=L(c),g=c.innerHTML;let k;g!==""&&g!==" "&&u!==A[16]?k=u:k=b,i.fillStyle=k,i.fillRect(v*s,y*s,s,s)})})}}function ue(e,t){t.getAttribute("hide")===null?(d(`layer-${e}`).style.display="none",t.setAttribute("hide",""),e===r.layer&&(r.layer=null)):(d(`layer-${e}`).style.display="block",t.removeAttribute("hide"),r.layer===null&&(r.layer=e))}function de(e){let t=!1;T("table[n]",n=>{const l=Number(n.getAttribute("n"));if(t){const o=l-1;C.layerList[`layer-${o}`]=C.layerList[n.id],delete C.layerList[n.id],n.id=`layer-${o}`,n.setAttribute("n",o),n.style.zIndex=o*-1}l===e&&(C.remove(n.id),t=!0,n.remove(),l===r.layer&&(r.layer=null))}),p.applyChanges()}function fe(e,t,n){let l=!0;t.getAttribute("hide")!==null&&(l=!1),n.target.localName==="button"&&(l=!1),l&&(r.layer=e)}function ye(e,t){const n=L(t),l=y(),o=d("layers-options-container"),a=document.getElementsByTagName("divider");let f=[],s;t.addEventListener("mousedown",c=>{c.target.localName!=="button"&&(B=i,O=h,s=null)});function i(c){const u=Number(n.top.slice(0,n.top.length-2))+c.movementY;if(t.getAttribute("moving")===null){t.setAttribute("moving",""),t.setAttribute("style",`top: ${t.offsetTop}px`),o.setAttribute("moving",""),t.parentNode.insertBefore(l,t);for(let b=0;b<a.length;b++)f.push({e:a.item(b),start:b!==0?a.item(b).offsetTop:0,end:b!==a.length-1?a.item(b+1).offsetTop:99999})}u>=40&&(t.style.top=`${u}px`),f.map((b,g)=>{const k=u+115;k>=b.start&&k<b.end?(b.e.setAttribute("target",""),s=g):b.e.removeAttribute("target")})}function h(){if(t.removeAttribute("moving"),t.removeAttribute("style"),o.removeAttribute("moving"),l.remove(),f.forEach(c=>c.e.removeAttribute("target")),f=[],B=()=>null,O=()=>null,s!==null&&s!==e){const c=document.querySelectorAll("table[n]");let v=r.layer;c.forEach(u=>{const b=Number(u.getAttribute("n"));if(s-e>0){if(b>e&&b<=s){const g=b-1;u.id=`layer-${g}`,u.setAttribute("n",g),u.style.zIndex=g*-1,u.parentNode.insertBefore(u,c[b]),r.layer===b&&(v=g)}b===e&&(u.id=`layer-${s}`,u.setAttribute("n",s),u.style.zIndex=s*-1,u.parentNode.insertBefore(u,c[s+1]),r.layer===b&&(v=s))}if(s-e<0){if(b<e&&b>=s){const g=b+1;u.id=`layer-${g}`,u.setAttribute("n",g),u.style.zIndex=g*-1,u.parentNode.insertBefore(u,c[g]),r.layer===b&&(v=g)}b===e&&(u.id=`layer-${s}`,u.setAttribute("n",s),u.style.zIndex=s*-1,u.parentNode.insertBefore(u,c[s]),r.layer===b&&(v=s))}}),r.layer=v,p.applyChanges()}}function y(){const c=document.createElement("div");return c.className="layers-options-container-ghost-item",c}}function be(){ae(),ie(),d("add-layer").click()}function he(){le(),be()}function ge(){p.onSizeChange("layers-resize",(e,t)=>{T("#canvas table tbody",f=>{const s=e.x-t.x,i=e.y-t.y;let h=()=>null,y=()=>null;s>0&&(h=o),s<0&&(h=a),i>0&&(y=n),i<0&&(y=l),y(f,i),h(f,s),C.save(f)});function n(f,s){const i=f.getElementsByTagName("tr").length;for(let h=0;h<s;h++){let y=`<tr id="y${h+i}">`;for(let c=0;c<t.x;c++)y+=`<td id="p${c}-${h+i}" class="pixel"></td>`;y+="</tr>",f.innerHTML+=y}}function l(f,s){const i=f.getElementsByTagName("tr"),y=i.length+s;for(let c=0;c<s*-1;c++)i[y].remove()}function o(f,s){const i=f.getElementsByTagName("tr"),h=i[0].getElementsByTagName("td").length,y=i.length;for(let c=0;c<y;c++)for(let v=0;v<s;v++)i[c].innerHTML+=`<td id="p${v+h}-${c}" class="pixel"></td>`}function a(f,s){const i=f.getElementsByTagName("tr"),y=i[0].getElementsByTagName("td").length+s,c=i.length;for(let v=0;v<c;v++)for(let u=0;u<s*-1;u++)i[v].children[y].remove()}}),r.onLayerChange("preview-layer",e=>{e===null?d("preview-layer").setAttribute("invalid",""):d("preview-layer").removeAttribute("invalid")})}let x=null;document.addEventListener("keydown",e=>{if(!e.repeat)switch(e.key){case"+":{r.tool==="eraser"&&$.increase();break}case"-":{r.tool==="eraser"&&$.decrease();break}case" ":{x!=="move"&&x!=="moving"&&(x=r.tool,d("tool-move").click());break}}});document.addEventListener("keyup",e=>{switch(e.key){case" ":{x!==null?d(`tool-${x}`).click():(d("canvas").removeAttribute("tool"),d("tool-picker").removeAttribute("tool"),r.tool=null,m.unbindAll()),x=null;break}}});document.fonts.ready.then(()=>{F(),re(),he(),ge(),me(),document.getElementById("tool-pencil").click(),document.querySelector("#char-picker td").click()});function me(){r.char="",r.color=A[15],r.background=A[16],r.layer=0,p.setSize(80,25)}
