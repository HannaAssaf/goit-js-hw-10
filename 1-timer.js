import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as p}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.disabled=!0;let i=null,d=null;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{weekdays:{shorthand:["Mo","Tu","We","Th","Fr","Sa","Su"],longhand:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},onClose(e){console.log(e[0]);const t=e[0];if(t<=new Date){p.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"#FFFFFF",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:"https://github.com/HannaAssaf/goit-js-hw-10/blob/main/src/img/bi_x-octagon.svg?short_path=e7f5a2a"}),o.disabled=!0;return}else i=t,o.disabled=!1}};f(s,S);function r(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:y}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));const g=document.querySelector("[data-days]"),F=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");function a(e){return String(e).padStart(2,"0")}function u({days:e,hours:t,minutes:n,seconds:c}){g.textContent=a(e),F.textContent=a(t),b.textContent=a(n),C.textContent=a(c)}function T(){o.disabled=!0,s.disabled=!0,d=setInterval(()=>{const t=i-new Date;if(t<=0){clearInterval(d),u({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1;return}const n=r(t);u(n)},1e3)}o.addEventListener("click",T);
//# sourceMappingURL=1-timer.js.map
