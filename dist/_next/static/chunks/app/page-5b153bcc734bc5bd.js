(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1990:(e,s,t)=>{Promise.resolve().then(t.bind(t,8954))},8954:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>T});var r=t(5155),l=t(5565),i=t(7068),n=t.n(i),a=t(2115),c=t(6046),o=t(6318),h=t.n(o),d=t(8173),x=t.n(d);function j(){let[e,s]=(0,a.useState)(!1),t=e=>{e.preventDefault();let s=e.currentTarget.getAttribute("href").substring(1),t=document.getElementById(s);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};return(0,r.jsxs)("div",{className:h().navbar,children:[(0,r.jsx)(x(),{href:"/",className:h().title,children:"Creator VPN"}),(0,r.jsxs)("ul",{className:h().navLinks,children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#advantages",onClick:t,children:"О\xa0продукте"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#tariffs",onClick:t,children:"Тарифы"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#calculator",onClick:t,children:"Калькулятор прибыли"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#questions",onClick:t,children:"Q&A"})})]}),(0,r.jsx)("button",{className:h().headerTryBtn,children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})}),(0,r.jsx)("button",{className:h().burgerMenu,onClick:()=>s(!0),children:(0,r.jsx)(l.default,{src:"/burger-menu.svg",alt:"burger menu",width:42,height:42})}),(0,r.jsxs)("div",{className:"".concat(h().sideNav," ").concat(e?h().sideNavOpen:""),children:[(0,r.jsx)("button",{className:h().closeMenu,onClick:()=>s(!1),children:(0,r.jsx)(l.default,{src:"/krestik.svg",alt:"close menu",width:42,height:42})}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#advantages",onClick:e=>{s(!1),t(e)},children:"О\xa0продукте"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#tariffs",onClick:e=>{s(!1),t(e)},children:"Тарифы"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#calculator",onClick:e=>{s(!1),t(e)},children:"Калькулятор прибыли"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:e=>{s(!1),t(e)},children:"Q&A"})})]}),(0,r.jsx)("button",{className:h().tryBtn,children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})]})]})}var u=t(9299),_=t.n(u);function m(e){let{title:s,description:t}=e,[i,n]=(0,a.useState)(!1);return(0,r.jsxs)("li",{onClick:()=>{n(e=>!e)},className:"".concat(_().tariffItem," ").concat(i?_().open:""),children:[(0,r.jsx)(l.default,{src:i?"/open-arrow.svg":"/close-arrow.svg",alt:"arrow",width:24,height:24}),(0,r.jsxs)("div",{className:_().dropdownText,children:[(0,r.jsx)("h4",{children:s}),(0,r.jsx)("p",{className:_().description,children:t})]})]})}var f=t(5562);let p=e=>{let{setFollowers:s}=e,[t,l]=(0,a.useState)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.A,{defaultValue:500,disabled:!1,value:t,onChange:e=>{l(e),s(e)},min:100,max:1e4,step:100,tooltip:{open:!0}})})},g=e=>{let{setPremiumSubstraction:s=199}=e,[t,l]=(0,a.useState)(199);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.A,{defaultValue:199,value:t,onChange:e=>{l(e),s(e)},min:149,max:399,step:1,tooltip:{open:!0,formatter:e=>"".concat(e," ₽")}})})};var N=t(7776),v=t.n(N);function b(e){let{number:s,question:t,answer:i}=e,[n,c]=(0,a.useState)(!1);return(0,r.jsxs)("li",{onClick:()=>{c(e=>!e)},className:"".concat(v().question," ").concat(n?v().open:""),children:[(0,r.jsxs)("div",{className:v().visibleContent,children:[(0,r.jsx)("h2",{children:s}),(0,r.jsx)("h3",{children:t}),(0,r.jsx)(l.default,{src:n?"/blue-open-arrow.svg":"/blue-close-arrow.svg",alt:"arrow",width:44,height:44,className:v().questionArrow})]}),(0,r.jsx)("p",{children:i})]})}var C=t(4826),w=t.n(C);let k=()=>{let[e,s]=(0,a.useState)([]);return(0,a.useEffect)(()=>{let e=0,t=setInterval(()=>{(e+=5e3)<=4e4?s(s=>[e,...s].slice(0,3)):clearInterval(t)},1e3);return()=>clearInterval(t)},[]),(0,r.jsx)("ul",{className:w().profit,children:e.map((e,s)=>(0,r.jsxs)("li",{className:w().fadeIn,children:["+ ",e]},e))})},P=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f.A,{defaultValue:199,disabled:!0,min:149,max:399,tooltip:{open:!0,formatter:e=>"".concat(e," ₽")}})});var V=t(3770),B=t.n(V);function y(){let e=(0,a.useRef)(null),[s,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let s=e.current,r=()=>{t(e=>!e)};return s&&s.addEventListener("animationiteration",r),()=>{s&&s.removeEventListener("animationiteration",r)}},[]),(0,a.useEffect)(()=>{e.current&&e.current.style.setProperty("--mirror-scale",s?"scaleX(-1)":"scaleX(1)")},[s]),(0,r.jsxs)("div",{className:B().cup,children:[(0,r.jsx)(l.default,{src:"/steam.svg",alt:"steam",ref:e,width:86,height:138,className:B().steam}),(0,r.jsx)(l.default,{src:"/cup.png",alt:"cup",width:78,height:75,className:B().cupItem})]})}function T(){let[e,s]=(0,a.useState)(199),[t,i]=(0,a.useState)(500),[o,h]=(0,a.useState)(!0),[d,u]=(0,a.useState)(!1),_=(0,c.useSearchParams)(),f=(0,c.useRouter)(),N=e<=199?Math.round(t*(e-100)):Math.round(t*(e-100-(e-100)*.1)),v=e=>{e.preventDefault();let s=e.currentTarget.getAttribute("href").substring(1),t=document.getElementById(s);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};(0,a.useEffect)(()=>{u(!0)},[]),(0,a.useEffect)(()=>{if(d){let e=_.get("tariff");e&&h("premium"===e)}},[_,d]);let C=e=>{let s=new URLSearchParams(_.toString());s.set("tariff",e);let t="?".concat(s.toString(),"#calculator");f.push(t,void 0,{shallow:!0})};function w(e){let s=Array.from(document.querySelectorAll("#advantagesSlider li")),t=parseInt(e.currentTarget.id.match(/\d/)[0],10);s.forEach((e,s)=>{let r=s+1,l=4-Math.abs(t-r),i=20*Math.abs(t-r)+"px";e.style.zIndex=l,e.style.transform=t===r?"translateY(0)":"translateY(".concat(i,")")})}return((0,a.useEffect)(()=>{if(d&&("scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0),_.toString()||window.location.hash)){let e=window.location.origin+window.location.pathname;window.history.replaceState(null,"",e)}},[d]),d)?(0,r.jsxs)("div",{className:n().page,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)(j,{}),(0,r.jsxs)("div",{className:n().headerContent,children:[(0,r.jsxs)("div",{className:n().headerLeft,children:[(0,r.jsxs)("h2",{children:["Создайте VPN-бота",(0,r.jsx)("br",{}),"и\xa0зарабатывайте на\xa0трафике"]}),(0,r.jsxs)("p",{children:["Превратите свою аудиторию в\xa0источник",(0,r.jsx)("br",{}),"стабильного дохода всего за\xa01\xa0день."]}),(0,r.jsxs)("div",{className:n().btnContainer,children:[(0,r.jsx)("button",{className:n().btnTry,children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})}),(0,r.jsx)("button",{className:n().btnCalculte,children:(0,r.jsx)(x(),{href:"#calculator",children:"Рассчитать прибыль"})})]})]}),(0,r.jsxs)("div",{className:n().headerRight,children:[(0,r.jsx)(y,{}),(0,r.jsx)("div",{className:n().human,children:(0,r.jsx)(k,{})}),(0,r.jsx)(l.default,{src:"/lamp.svg",alt:"lamp",width:168,height:234,className:n().lamp})]})]})]}),(0,r.jsxs)("section",{className:n().advantages,id:"advantages",children:[(0,r.jsxs)("h2",{children:["Преимущества создания своего",(0,r.jsxs)("span",{children:[(0,r.jsx)("br",{}),"VPN-бота в\xa0Telegram"]})]}),(0,r.jsxs)("div",{className:n().advantagesContent,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Пассивный доход"}),(0,r.jsx)("h3",{children:"В\xa0наше время хороший и\xa0быстрый VPN нужен каждому. Настройте бот\xa0один раз\xa0— и\xa0получайте доход от\xa0ежемесячных подписок ваших пользователей."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Никакого кода"}),(0,r.jsxs)("h3",{children:["Создать VPN-бота, вы\xa0можете\xa0без\xa0навыков программирования.",(0,r.jsx)("br",{}),"Перейдите в\xa0@CreatorVPN_Bot и\xa0получите все\xa0преимущества нашего сервиса."]}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Лендинг под\xa0бота"}),(0,r.jsx)("li",{children:"Весь функционал бота"}),(0,r.jsx)("li",{children:"Оптимизированные сервера"}),(0,r.jsx)("li",{children:"Готовая платёжная система"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:n().advantagesTextBlock,children:[(0,r.jsx)("h2",{children:"Все\xa0преимущества Creator VPN"}),(0,r.jsx)("h3",{children:"Все\xa0продумано до\xa0мелочей, чтобы\xa0наши партнёры думали только о\xa0распространении своего VPN-бота, а\xa0обо\xa0всем остальном позаботимся\xa0мы!"}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})]}),(0,r.jsxs)("ul",{className:n().advantagesSlider,id:"advantagesSlider",children:[(0,r.jsx)("li",{id:"slide-1",onMouseEnter:w,children:(0,r.jsx)(l.default,{src:"/slider-item1.svg",alt:"vpn",width:196,height:378})}),(0,r.jsx)("li",{id:"slide-2",onMouseEnter:w,children:(0,r.jsx)(l.default,{src:"/slider-item2.svg",alt:"vpn",width:196,height:378})}),(0,r.jsx)("li",{id:"slide-3",onMouseEnter:w,children:(0,r.jsx)(l.default,{src:"/slider-item3.svg",alt:"vpn",width:196,height:378})}),(0,r.jsx)("li",{id:"slide-4",onMouseEnter:w,children:(0,r.jsx)(l.default,{src:"/slider-item4.svg",alt:"vpn",width:196,height:378})})]})]})]})]}),(0,r.jsx)("section",{className:n().aboutUs,children:(0,r.jsxs)("ul",{className:n().aboutUsContent,children:[(0,r.jsxs)("li",{className:n().aboutUsItem,children:[(0,r.jsx)(l.default,{src:"/about-us1.svg",alt:"setting",width:48,height:48}),(0,r.jsx)("h2",{children:"Лёгкая настройка"}),(0,r.jsx)("h3",{children:"Запуск всего\xa0за\xa0несколько шагов."})]}),(0,r.jsx)("li",{className:n().aboutUsLine}),(0,r.jsxs)("li",{className:n().aboutUsItem,children:[(0,r.jsx)(l.default,{src:"/about-us2.svg",alt:"profit",width:56,height:48}),(0,r.jsx)("h2",{children:"Высокая доходность"}),(0,r.jsx)("h3",{children:"100,000\xa0₽ ежемесячно с\xa01000\xa0подписчиков."})]}),(0,r.jsx)("li",{className:n().aboutUsLine}),(0,r.jsxs)("li",{className:n().aboutUsItem,children:[(0,r.jsx)(l.default,{src:"/about-us3.svg",alt:"support",width:56,height:48}),(0,r.jsx)("h2",{children:"Поддержка 24/7"}),(0,r.jsx)("h3",{children:"Поможем в\xa0случае возникновения проблем."})]})]})}),(0,r.jsxs)("section",{className:n().tariffs,id:"tariffs",children:[(0,r.jsx)("h2",{children:"Тарифы"}),(0,r.jsx)("div",{className:n().tariffBackground}),(0,r.jsxs)("ul",{className:n().tariffsContent,children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Бесплатный"}),(0,r.jsx)("h3",{children:"Для\xa0тех, кто\xa0хочет просто попробовать."}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Чем\xa0больше продаж, тем\xa0больше заработок."}),(0,r.jsx)("h3",{children:"Начальная стоимость VPN для\xa0Партнёров зависит от\xa0количества ежемесячных продаж:"}),(0,r.jsxs)("ul",{className:n().tariffsContentDropdown,children:[(0,r.jsx)(m,{title:"1–5 продаж — 199 ₽",description:"При 1–5 ежемесячных продажах, стоимость для вас 199 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 0 ₽."}),(0,r.jsx)(m,{title:"5–10 продаж — 130 ₽",description:"При 5–10 ежемесячных продажах, стоимость для вас 130 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 69 ₽."}),(0,r.jsx)(m,{title:"10–100 продаж — 120 ₽",description:"При 10–100 ежемесячных продажах, стоимость для вас 120 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 79 ₽."}),(0,r.jsx)(m,{title:"100–1000 продаж — 110 ₽",description:"При 100–1000 ежемесячных продажах, стоимость для вас 110 ₽, стоимость в вашем боте 199 ₽. Ваша прибыль с продажи каждой подписки — 89 ₽."}),(0,r.jsx)(m,{title:"1000+ продаж — 100 ₽ + бесплатный переход на платный тариф",description:"При 1000+ ежемесячных продажах, стоимость для вас 100 ₽, стоимость в вашем боте регулируется вами в диапазоне от 150 до 400 ₽, связано это с бесплатным переходом на Premium тариф. Ваша прибыль с продажи каждой подписки — от 50 до 260 ₽."})]}),(0,r.jsxs)("p",{children:["* Продажа\xa0— это\xa0любая оплата, которая прошла в\xa0вашем боте.",(0,r.jsx)("br",{}),"Стоимость VPN в\xa0Вашем боте\xa0— 199\xa0₽.",(0,r.jsx)("br",{}),"Разница между\xa0стоимостью в\xa0боте и\xa0начальной стоимостью\xa0— ваша прибыль"]})]}),(0,r.jsx)("li",{className:n().tariffsContentTry,children:(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})}),(0,r.jsxs)("li",{id:"tariff-premium",children:[(0,r.jsxs)("div",{className:n().premiumTextBlock,children:[(0,r.jsx)("h2",{children:"Премиум"}),(0,r.jsx)("p",{children:"Для\xa0тех, кто\xa0хочет самые выгодные условия здесь и\xa0сейчас."})]}),(0,r.jsxs)("div",{className:n().premiumPriceBlock,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"2990"}),(0,r.jsxs)("div",{className:n().priceText,children:[(0,r.jsx)("h4",{children:"руб."}),(0,r.jsx)("div",{}),(0,r.jsx)("h5",{children:"мес."})]})]}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Приобрести"})})]})]}),(0,r.jsx)("li",{children:(0,r.jsxs)("ul",{className:n().premiumList,children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Начальная стоимость"}),(0,r.jsx)("h3",{children:"100\xa0рублей, все\xa0что\xa0выше остаётся\xa0Вам!"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Своя стоимость"}),(0,r.jsxs)("h3",{children:["Стоимость VPN зависит только от\xa0Вас!",(0,r.jsx)("br",{}),"Привлекайте пользователей низкой стоимостью, делайте сезонные скидки, акции и т.д."]})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Пробная подписка"}),(0,r.jsx)("h3",{children:"3\xa0дня\xa0вместо 1-го."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Моментальные выплаты"}),(0,r.jsx)("h3",{children:"Пользователи с премиум подпиской в приоритете по выплатам."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Рассылки"}),(0,r.jsx)("h3",{children:"Отправляйте сообщения всем пользователям, информируйте их\xa0о\xa0скидках,\xa0продавайте рекламу, сообщайте об акциях."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Промокоды"}),(0,r.jsx)("h3",{children:"Создавайте промокоды для\xa0подписчиков, радуйте подписчиков бесплатной подпиской, 1\xa0промокод 90\xa0рублей."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Партнёрская программа"}),(0,r.jsx)("h3",{children:"Включите партнерскую программу, чтобы\xa0пользователи в\xa0вашем боте получали по 3\xa0дня\xa0к своей подписке, если приглашенные им пользователи купят подписку."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Обязательная подписка"}),(0,r.jsx)("h3",{children:"Поставьте свой канал на\xa0обязательную подписку. Пользователи получат пробную подписку только после подписки на Ваш канал."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Кастомизация лендинга"}),(0,r.jsx)("h3",{children:"Измени лендинг под\xa0себя, поменяй на\xa0нем\xa0практически любой текст или\xa0картинку."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h2",{children:"Без\xa0кнопки \xabСоздать VPN\xa0бот\xbb"}),(0,r.jsx)("h3",{children:"Будет возможность убрать кнопку \xabСоздать VPN бот\xbb из\xa0вашего VPN бота"})]})]})}),(0,r.jsxs)("div",{className:n().tariffPriceBlock,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"2990"}),(0,r.jsxs)("div",{className:n().tariffPriceText,children:[(0,r.jsx)("h4",{children:"руб."}),(0,r.jsx)("div",{}),(0,r.jsx)("h5",{children:"мес."})]})]}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Приобрести"})})]})]})]}),(0,r.jsx)("section",{className:n().calculator,id:"calculator",children:(0,r.jsxs)("div",{className:n().calculatorContainer,children:[(0,r.jsxs)("div",{className:n().calculatorTextBlock,children:[(0,r.jsx)("h2",{children:"Калькулятор прибыли"}),(0,r.jsx)("h3",{children:"Выберите тариф и\xa0расчитайте свой доход!"})]}),(0,r.jsxs)("div",{className:n().calculatorContent,children:[(0,r.jsxs)("div",{className:n().calculatorSwitch,children:[(0,r.jsx)("button",{onClick:()=>C("free"),className:o?void 0:n().active,children:"Бесплатный"}),(0,r.jsx)("button",{onClick:()=>C("premium"),className:o?n().active:void 0,children:"Премиум"})]}),o?(0,r.jsxs)("div",{className:n().calculatorPremium,children:[(0,r.jsxs)("div",{className:n().followers,children:[(0,r.jsx)("h2",{children:"Количество подписчиков"}),(0,r.jsx)(p,{setFollowers:i})]}),(0,r.jsxs)("div",{id:"substriction",className:n().substriction,children:[(0,r.jsx)("h2",{children:"Стоимость подписки"}),(0,r.jsx)(g,{setPremiumSubstraction:s})]}),e>199&&(0,r.jsx)("h2",{children:"*10% от\xa0наценки уйдёт на\xa0комиссии платежей, если\xa0стоимость подписки свыше 199\xa0₽"}),(0,r.jsx)("button",{className:n().price,children:(0,r.jsxs)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:[N,"\xa0₽ /\xa0мес."]})})]}):(0,r.jsxs)("div",{className:n().calculatorFree,children:[(0,r.jsxs)("div",{className:n().followers,children:[(0,r.jsx)("h2",{children:"Количество подписчиков"}),(0,r.jsx)(p,{setFollowers:i})]}),(0,r.jsxs)("div",{id:"substriction",className:n().substriction,children:[(0,r.jsx)("h2",{children:"Стоимость подписки"}),(0,r.jsx)(P,{})]}),(0,r.jsx)("h2",{children:"*Изменение стоимости доступно в\xa0тарифе премиум."}),(0,r.jsx)("button",{className:n().price,children:(0,r.jsxs)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:[t<=100?79*t:t>100&&t<=1e3?89*t:99*t,"\xa0₽ /\xa0мес."]})})]})]})]})}),(0,r.jsxs)("section",{className:n().questions,id:"questions",children:[(0,r.jsx)("h2",{children:"Ответы на\xa0часто задаваемые вопросы"}),(0,r.jsxs)("ul",{className:n().questionsContent,children:[(0,r.jsx)(b,{number:"01",question:"Сколько времени займёт настройка VPN-бота?",answer:"Создание VPN-бота займёт 2–3 минуты, а полная настройка от 5 до 15 минут."}),(0,r.jsx)(b,{number:"02",question:"Как я получу прибыль?",answer:"Свою прибыль вы сможете вывести через наш бот в телеграм @CreatorVPN_Bot."}),(0,r.jsx)(b,{number:"03",question:"Как быстро подписчики смогут подключиться к моему VPN?",answer:"Подключение происходит в 2 этапа. Бот попросит пользователя установить приложение, а затем скинет ссылку на подключение к Вашему VPN. Настройка разовая, после настройки пользователь сможет включать/выключать VPN через скаченное им мобильное приложение."}),(0,r.jsx)(b,{number:"04",question:"Что мои подписчики получат за эти деньги?",answer:"Купив подписку Ваш подписчик получит скоростной и надежный VPN, к которому можно подключить до 3-х устройств."}),(0,r.jsx)(b,{number:"05",question:"Это законно?",answer:"В РФ нет законов, которые запрещали бы Вам владеть VPN-сервисом, Вы даёте пользователям ссылку на чужой продукт под вашим именем, все сервера под VPN находятся у нас и денежные средства за покупку идут нам. *Партнёр обязан платить налоги со своей прибыли, как самозанятый или ИП. Неуплата налогов преследуется законом РФ."}),(0,r.jsx)(b,{number:"06",question:"Как принимать платежи?",answer:"Вам не нужно принимать платежи, мы уже все настроили за Вас. Деньги с покупок будут идти к нам на счета, а Вы сможете вывести свою прибыль через наш телеграм-бот @CreatorVPN_Bot."})]})]}),(0,r.jsx)("section",{className:n().startNow,children:(0,r.jsxs)("div",{className:n().startNowContent,children:[(0,r.jsxs)("div",{className:n().startNowTextBlock,children:[(0,r.jsx)("h2",{children:"Начните зарабатывать уже\xa0сегодня!"}),(0,r.jsx)("h3",{children:"Превратите свою аудитория в\xa0источник стабильного дохода, создайте свой VPN-бот всего за\xa05\xa0минут."}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})]}),(0,r.jsx)("div",{className:n().startNowImage,children:(0,r.jsx)(l.default,{src:"/start-now-img.svg",width:611,height:398,alt:"human"})})]})}),(0,r.jsxs)("footer",{className:n().footer,children:[(0,r.jsxs)("div",{className:n().footerInfo,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Сreator VPN"}),(0,r.jsx)("h3",{children:"Превратите свою аудиторию в\xa0источник стабильного дохода всего за\xa01\xa0день."}),(0,r.jsx)("button",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Попробовать"})})]}),(0,r.jsx)("div",{children:"\xa9 2024\xa0CreatorVpn. Все\xa0права защищены"})]}),(0,r.jsxs)("div",{className:n().footerContent,children:[(0,r.jsxs)("ul",{className:n().footerContentLeft,children:[(0,r.jsx)("li",{children:"О\xa0продукте"}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Bot",target:"_blank",children:"Создать VPN-бот"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN",target:"_blank",children:"Новостной telegram-канал"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"https://t.me/CreatorVPN_Support",target:"_blank",children:"Обратная связь"})}),(0,r.jsx)("li",{children:"Тарифы"}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#tariffs",onClick:v,children:"Бесплатный"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#tariff-premium",onClick:v,children:"Премиум"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#calculator",onClick:v,children:"Калькулятор прибыли"})})]}),(0,r.jsxs)("ul",{className:n().footerContentRight,children:[(0,r.jsx)("li",{children:"Q&A"}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Сколько времени займёт настройка VPN?"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Как\xa0я\xa0получу прибыль?"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Как\xa0быстро подписчики смогут подключиться к\xa0моему VPN?"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Что мои подписчики получат за эти деньги?"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Это\xa0законно?"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:"#questions",onClick:v,children:"Как\xa0принимать платежи?"})})]})]}),(0,r.jsx)("div",{className:n().endOfSite,children:"\xa9 2024\xa0CreatorVpn. Все\xa0права защищены"})]})]}):null}},3770:e=>{e.exports={cup:"style_cup__3TT7_","steam-rise":"style_steam-rise__P9_Xm"}},6318:e=>{e.exports={navbar:"style_navbar__lTkJ4",title:"style_title__fI44H",navLinks:"style_navLinks__FEG13",headerTryBtn:"style_headerTryBtn__WPBES",burgerMenu:"style_burgerMenu__VdwjR",sideNav:"style_sideNav__sDhOQ",closeMenu:"style_closeMenu__l1QR7",tryBtn:"style_tryBtn__Cjl1Q",sideNavOpen:"style_sideNavOpen__towiQ"}},4826:e=>{e.exports={profit:"style_profit__xq5Bk",fadeIn:"style_fadeIn__7DxBN"}},7776:e=>{e.exports={question:"style_question__rAsEd",visibleContent:"style_visibleContent__YPkU4",questionArrow:"style_questionArrow__EBVu7",open:"style_open__XNR5O"}},9299:e=>{e.exports={tariffItem:"style_tariffItem__TlXKj",dropdownText:"style_dropdownText__0bzLF",open:"style_open__N_Bp_"}},7068:e=>{e.exports={headerContent:"page_headerContent__iOVwV",headerLeft:"page_headerLeft__UJkII",btnContainer:"page_btnContainer__HHbpa",btnTry:"page_btnTry__fQxmD",btnCalculte:"page_btnCalculte__t1V7F",headerRight:"page_headerRight__AYxOc",human:"page_human__zBlFJ",advantages:"page_advantages__zx1Do",advantagesContent:"page_advantagesContent__L9GqO",advantagesTextBlock:"page_advantagesTextBlock__DNYon",advantagesSlider:"page_advantagesSlider__eXoia",aboutUs:"page_aboutUs__WIdfh",aboutUsContent:"page_aboutUsContent__3iRKJ",aboutUsLine:"page_aboutUsLine__HqSj5",aboutUsItem:"page_aboutUsItem__Wi8G4",tariffs:"page_tariffs__JxpSZ",tariffBackground:"page_tariffBackground__vC3wu",tariffsContent:"page_tariffsContent__yaeyN",tariffsContentTry:"page_tariffsContentTry__kfxVy",tariffPriceBlock:"page_tariffPriceBlock__tMYKo",tariffPriceText:"page_tariffPriceText__jgU6j",tariffsContentDropdown:"page_tariffsContentDropdown__EajCz",premiumTextBlock:"page_premiumTextBlock__ci4Fv",premiumPriceBlock:"page_premiumPriceBlock__8Md6R",priceText:"page_priceText__uyOiQ",premiumList:"page_premiumList__0UoVW",calculator:"page_calculator__yMdS7",calculatorContainer:"page_calculatorContainer__0_jM0",calculatorTextBlock:"page_calculatorTextBlock__cvNLH",calculatorContent:"page_calculatorContent__F1IN4",calculatorSwitch:"page_calculatorSwitch___kTTz",active:"page_active__tAjuN",calculatorPremium:"page_calculatorPremium__uAelI",calculatorFree:"page_calculatorFree__C7td6",followers:"page_followers__BTQdn",substriction:"page_substriction__z0mXI",price:"page_price__1GVek",questions:"page_questions__A47vG",questionsContent:"page_questionsContent__nhe10",startNow:"page_startNow__5VN_C",startNowContent:"page_startNowContent__VVp5z",startNowTextBlock:"page_startNowTextBlock___JXdX",startNowImage:"page_startNowImage__C5EjG",footer:"page_footer__wa9SD",footerInfo:"page_footerInfo__mgyqy",footerContent:"page_footerContent__ezfqV",footerContentLeft:"page_footerContentLeft__rEYSj",footerContentRight:"page_footerContentRight__7j_iD",endOfSite:"page_endOfSite__zPVN_",profit:"page_profit__QHDeS",lamp:"page_lamp__eIzu2",question:"page_question__1IpZq",visibleContent:"page_visibleContent__o7Onz",questionArrow:"page_questionArrow__U_aYh"}}},e=>{var s=s=>e(e.s=s);e.O(0,[430,399,441,517,358],()=>s(1990)),_N_E=e.O()}]);