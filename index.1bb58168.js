const e={searchForm:document.querySelector(".search-form"),buttonSearch:document.querySelector(".js-search"),buttonShowMore:document.querySelector(".show-more"),resultList:document.querySelector(".search-box"),spiner:document.querySelector(".js-spiner"),lable:document.querySelector(".lable")};e.searchForm.addEventListener("submit",(function(s){s.preventDefault(),e.buttonShowMore.classList.remove("is-hidden"),e.lable.textContent="Loading...",e.spiner.classList.remove("is-hidden"),t.searchQuery=s.currentTarget.elements.query.value,t.resetPage(),t.fetchArticls().then((t=>{e.resultList.innerHTML="",r(t),e.spiner.classList.add("is-hidden"),e.lable.textContent="Show more"}))})),e.buttonShowMore.addEventListener("click",(function(){e.lable.textContent="Loading...",e.spiner.classList.remove("is-hidden"),t.updatePage(),t.fetchArticls().then((t=>{r(t),e.spiner.classList.add("is-hidden"),e.lable.textContent="Show more"}))}));const t=new class{fetchArticls(){const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}&sortBy=relevancy&language=en`;return fetch(e,{headers:{Authorization:"062bf34c983c4314afff4d4a61abca42"}}).then((e=>e.json())).then((e=>e.articles))}updatePage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1,this.articles=[]}};function r(t){e.resultList.insertAdjacentHTML("beforeend",t.map((({url:e,urlToImage:t,author:r,description:s})=>`<li>\n    <article>\n     <a href="${e}" target="_blank">\n        <img src="${t}" alt="" />\n        <h2 class="title"></h2>\n        <p>Posted by: ${r}</p>\n       <p>${s}</p>     </a>\n</article>\n  </li>`)).join(""))}
//# sourceMappingURL=index.1bb58168.js.map
