import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as S}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;let i=null,c=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{weekdays:{shorthand:["Mo","Tu","We","Th","Fr","Sa","Su"],longhand:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},onClose(e){console.log(e[0]);const t=e[0];if(t<=new Date){S.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"#FFFFFF",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:"../img/bi_x-octagon.svg"}),o.disabled=!0;return}else i=t,o.disabled=!1}};f(s,p);function a(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:y,seconds:h}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));const F=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");function r(e){return String(e).padStart(2,"0")}function u({days:e,hours:t,minutes:n,seconds:d}){F.textContent=r(e),g.textContent=r(t),C.textContent=r(n),b.textContent=r(d)}function T(){o.disabled=!0,s.disabled=!0,c=setInterval(()=>{const t=i-new Date;if(t<=0){clearInterval(c),u({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1;return}const n=a(t);u(n)},1e3)}o.addEventListener("click",T);
//# sourceMappingURL=1-timer.js.map
