import{r as y,b as S,o as n,d as g,w as x,e as p,f as c,u as $,i as k,t as L,s as B,v as C,j as d,q as P,h as m,c as u,x as D,F as V,k as b,l as H,a as N}from"./index-66d46d8f.js";const T={alt:"",class:"search__img"},U={class:"search__name"},j={__name:"SearchItem",props:["item"],setup(t){return(a,r)=>{const e=y("router-link"),s=S("lazy");return n(),g(e,{to:`/${t.item.media_type}/${t.item.id}`,class:"search__item"},{default:x(()=>[p(c("img",T,null,512),[[s,$(k)+t.item.poster_path]]),c("h3",U,L(t.item.title||t.item.name),1)]),_:1},8,["to"])}}},q=B("search",{state:()=>({searchList:[],search:"",totalPages:1}),actions:{async getSearch(t=1){try{const r=await(await fetch(`https://api.themoviedb.org/3/search/multi?query=${this.search}&include_adult=false&language=ru&page=${t}`,C)).json();this.totalPages=r.total_pages;let e=r.results.filter(s=>s.media_type=="movie"||s.media_type=="tv");t>1?this.searchList.push(...e):this.searchList=e}catch(a){console.log(a)}}}}),z={class:"search container"},E={class:"search__wrapper"},F={key:0,class:"loading"},A=c("div",{class:"loading__spiner"},null,-1),I=[A],M={__name:"SearchContent",setup(t){let a=null;function r(o,l){clearTimeout(a),a=setTimeout(()=>{o()},l)}const e=q(),s=d({get:()=>e.search,set:o=>{e.search=o,r(e.getSearch,500)}}),v=d(()=>e.searchList);P(()=>{e.search="",e.searchList=[]});const h=m(1),i=m(!1),f=d(()=>e.totalPages);async function w(){!i.value&&h.value<f.value&&(i.value=!0,h.value++,await e.getSearch(h.value),i.value=!1)}return window.addEventListener("scroll",()=>{window.scrollY+window.innerHeight>=document.body.clientHeight-footer.clientHeight&&w()}),(o,l)=>(n(),u("section",z,[p(c("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>s.value=_),type:"text",class:"search__input",placeholder:"Найти фильм, сериал..."},null,512),[[D,s.value]]),c("div",E,[(n(!0),u(V,null,b(v.value,(_,G)=>(n(),g(j,{item:_},null,8,["item"]))),256))]),i.value?(n(),u("div",F,I)):H("",!0)]))}},Y={class:"main"},K={__name:"Search",setup(t){return(a,r)=>(n(),u("main",Y,[N(M)]))}};export{K as default};
