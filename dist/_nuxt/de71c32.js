(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{228:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("d6b05308",content,!0,{sourceMap:!1})},229:function(t,e,r){"use strict";var n=r(54),o=r.n(n).a.create({baseURL:"https://anapioficeandfire.com/api/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4});e.a={getCharacterNames:function(){return o.get("/characters")}}},230:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("c63d9ace",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("6a6aeadd",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";r.r(e);r(12),r(27),r(26);var n=r(6),o={fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nuxtjs.dev/mountains").then((function(t){return t.json()}));case 2:t.mountains=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),props:{card:{type:Object,required:!0}},data:function(){return{mountains:[]}}},c=(r(234),r(33)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.mountains,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"card"},[r("img",{attrs:{src:e.image,alt:e.title}}),t._v(" "),r("div",{staticClass:"overlay"},[t._m(0,!0),t._v(" "),r("br"),t._v(" "),r("NuxtLink",{staticClass:"name",attrs:{to:e.slug}},[t._v(t._s(t.card.name||t.card.aliases.toString()))])],1)])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"age"},[this._v("AGE\n\t\t\t\t\t"),e("span",[this._v("---")])])}],!1,null,"8c72c85e",null);e.default=component.exports},233:function(t,e,r){"use strict";r.r(e);var n=r(238),o=r.n(n),c=r(239),M=r.n(c),d=r(240),l=r.n(d),L=r(241),w=r.n(L),m=r(242),j=r.n(m),h={data:function(){return{isOpen:!1,horizontalKebab:o.a,github:M.a,dribbble:l.a,linkedin:w.a,dev:j.a}},methods:{toggleModal:function(){return this.isOpen=!this.isOpen}}},D=(r(243),r(33)),component=Object(D.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",[r("img",{staticClass:"more",attrs:{src:t.horizontalKebab,alt:"Maureen's profile picture in small rounded frame"},on:{click:function(e){return t.toggleModal()}}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"modal"},[r("p",[t._v("Hi! I'm the developer of this project.")]),t._v(" "),t._m(0),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"external-media"},[r("a",{staticClass:"media",attrs:{href:"https://github.com/maureento8888",target:"_blank",rel:"noopener noreferral"}},[r("img",{staticClass:"icon",attrs:{src:t.github,alt:"GitHub"}})]),t._v(" "),r("a",{staticClass:"media",attrs:{href:"https://dribbble.com/maureen_to",target:"_blank",rel:"noopener noreferral"}},[r("img",{staticClass:"icon",attrs:{src:t.dribbble,alt:"Dribbble"}})]),t._v(" "),r("a",{staticClass:"media",attrs:{href:"https://www.linkedin.com/in/maureento/",target:"_blank",rel:"noopener noreferral"}},[r("img",{staticClass:"icon",attrs:{src:t.linkedin,alt:"LinkedIn"}})]),t._v(" "),r("a",{staticClass:"media",attrs:{href:"https://dev.to/maureento8888",target:"_blank",rel:"noopener noreferral"}},[r("img",{staticClass:"icon",attrs:{src:t.dev,alt:"dev.to"}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("View the repo on "),e("a",{attrs:{href:"https://github.com/maureento8888",target:"_blank",rel:"noopener noreferral"}},[this._v("GitHub")]),this._v("\n\t\tor connect with me below!")])}],!1,null,"364e9726",null);e.default=component.exports},234:function(t,e,r){"use strict";r(228)},235:function(t,e,r){(e=r(76)(!1)).push([t.i,".card[data-v-8c72c85e],.overlay[data-v-8c72c85e],img[data-v-8c72c85e]{border-radius:15px}.card[data-v-8c72c85e]{position:relative;margin:1em .5em;max-width:10em}.card[data-v-8c72c85e]:hover{transform:scale(1.01);box-shadow:0 3px 12px 0 rgba(0,0,0,.2)}img[data-v-8c72c85e]{display:block;width:100%;height:12em;-o-object-fit:cover;object-fit:cover}.overlay[data-v-8c72c85e]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;padding:2.25em 1em;background:rgba(0,0,0,.55)}.age[data-v-8c72c85e],.name[data-v-8c72c85e]{color:var(--g-primary-white)}.name[data-v-8c72c85e]{text-align:right}.age[data-v-8c72c85e]{font-size:var(--g-m-body-txt)}@media screen and (max-width:280px){img[data-v-8c72c85e]{height:14em}}",""]),t.exports=e},236:function(t,e,r){"use strict";r(230)},237:function(t,e,r){(e=r(76)(!1)).push([t.i,".row[data-v-2e0dcd86]{display:flex;justify-content:center;padding-top:2em}",""]),t.exports=e},238:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9yZS1ob3Jpem9udGFsIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiPjwvY2lyY2xlPjwvc3ZnPg=="},239:function(t,e,r){t.exports=r.p+"img/icon-awesome-github.3650ca0.svg"},240:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi45ODUiIGhlaWdodD0iMjIuOTg1IiB2aWV3Qm94PSIwIDAgMjIuOTg1IDIyLjk4NSI+PHBhdGggZD0iTTEyLjA1NS41NjNBMTEuNDkyLDExLjQ5MiwwLDEsMCwyMy41NDcsMTIuMDU1LDExLjUwNSwxMS41MDUsMCwwLDAsMTIuMDU1LjU2M1ptNy42LDUuM2E5Ljc2OSw5Ljc2OSwwLDAsMSwyLjIxNyw2LjExNSwyMi45NCwyMi45NCwwLDAsMC02LjgzNS0uMzE2Yy0uMjY3LS42NTEtLjUxOC0xLjIyMy0uODYzLTEuOTI4QTEzLjA3NiwxMy4wNzYsMCwwLDAsMTkuNjUzLDUuODYyWk0xOC41NjIsNC43MjdhMTEuMDgzLDExLjA4MywwLDAsMS01LjE0NSwzLjU0NkE1Mi40LDUyLjQsMCwwLDAsOS43NTQsMi41MjYsOS43OTEsOS43OTEsMCwwLDEsMTguNTYyLDQuNzI3Wk03Ljg4MSwzLjE4NmE2Mi42MzQsNjIuNjM0LDAsMCwxLDMuNjM5LDUuNjc3LDM2LjYxNCwzNi42MTQsMCwwLDEtOS4wNzUsMS4yQTkuODUyLDkuODUyLDAsMCwxLDcuODgxLDMuMTg2Wk0yLjIzOSwxMi4wN2MwLS4xLDAtLjIuMDA1LS4zYTM2LjIxLDM2LjIxLDAsMCwwLDEwLjA4OC0xLjRjLjI4MS41NS41NDksMS4xMDguOCwxLjY2NmExNS4yLDE1LjIsMCwwLDAtOC4zNjYsNi41OTRBOS43NzcsOS43NzcsMCwwLDEsMi4yMzksMTIuMDdaTTYuMDMsMTkuODE0QTEzLjgwNywxMy44MDcsMCwwLDEsMTMuOCwxMy42NjJhNDAuOCw0MC44LDAsMCwxLDIuMDk0LDcuNDQ0LDkuOCw5LjgsMCwwLDEtOS44Ni0xLjI5MlptMTEuNTEuMzkzYTQyLjM2Nyw0Mi4zNjcsMCwwLDAtMS45MDctNywxNC40MDgsMTQuNDA4LDAsMCwxLDYuMTE0LjQyLDkuODMzLDkuODMzLDAsMCwxLTQuMjA3LDYuNTc5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNTYzIC0wLjU2MykiLz48L3N2Zz4="},241:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC40NzEiIGhlaWdodD0iMjAuNDcxIiB2aWV3Qm94PSIwIDAgMjAuNDcxIDIwLjQ3MSI+PHBhdGggZD0iTTE5LjAwOSwyLjI1SDEuNDU4QTEuNDY5LDEuNDY5LDAsMCwwLDAsMy43MjZWMjEuMjQ1YTEuNDY5LDEuNDY5LDAsMCwwLDEuNDU4LDEuNDc2SDE5LjAwOWExLjQ3MiwxLjQ3MiwwLDAsMCwxLjQ2Mi0xLjQ3NlYzLjcyNkExLjQ3MiwxLjQ3MiwwLDAsMCwxOS4wMDksMi4yNVpNNi4xODcsMTkuOEgzLjE1M1YxMC4wMjdINi4xOTJWMTkuOFpNNC42Nyw4LjY5M0ExLjc1OSwxLjc1OSwwLDEsMSw2LjQyOSw2LjkzNCwxLjc2LDEuNzYsMCwwLDEsNC42Nyw4LjY5M1pNMTcuNTYsMTkuOEgxNC41MjZWMTUuMDQ0YzAtMS4xMzMtLjAyMy0yLjU5MS0xLjU3Ni0yLjU5MS0xLjU4MSwwLTEuODIzLDEuMjM0LTEuODIzLDIuNTA5VjE5LjhIOC4wOTJWMTAuMDI3SDExdjEuMzM0aC4wNDFhMy4yLDMuMiwwLDAsMSwyLjg3NC0xLjU3NmMzLjA3MSwwLDMuNjQyLDIuMDI0LDMuNjQyLDQuNjU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMi4yNSkiLz48L3N2Zz4="},242:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS4wMDEiIGhlaWdodD0iMjEuMDAxIiB2aWV3Qm94PSIwIDAgMjEuMDAxIDIxLjAwMSI+PHBhdGggZD0iTTUuNjMxLDEwLjUxNGEuOTEuOTEsMCwwLDAtLjU0Ni0uMkg0LjI2N3Y0LjloLjgxOGEuOTEuOTEsMCwwLDAsLjU0Ni0uMi43MTUuNzE1LDAsMCwwLC4yNzMtLjYxMlYxMS4xMjZhLjcxOS43MTksMCwwLDAtLjI3My0uNjEyWk0xOC45NDMsMi4yNUgyLjA1OEEyLjA1OCwyLjA1OCwwLDAsMCwwLDQuM1YyMS4yYTIuMDU4LDIuMDU4LDAsMCwwLDIuMDU4LDIuMDUzSDE4Ljk0M0EyLjA1OCwyLjA1OCwwLDAsMCwyMSwyMS4yVjQuM0EyLjA1OCwyLjA1OCwwLDAsMCwxOC45NDMsMi4yNVpNNy4yMjgsMTQuNGEyLjE0MSwyLjE0MSwwLDAsMS0yLjI2NywyLjIxNUgyLjc4NlY4Ljg1OUg1LjAwN2EyLjE0LDIuMTQsMCwwLDEsMi4yMjEsMi4yMTZabTQuNzItNC4xNTZIOS40NXYxLjhoMS41Mjd2MS4zODZIOS40NXYxLjhoMi41djEuMzg2SDkuMDM0YS45NDcuOTQ3LDAsMCwxLS45NzEtLjkyM1Y5LjgzYS45NDguOTQ4LDAsMCwxLC45MjQtLjk3aDIuOTYyWm00Ljg1OCw1LjRjLS42MTksMS40NDEtMS43MjcsMS4xNTUtMi4yMjQsMEwxMi43NzYsOC44NjFIMTQuM0wxNS43LDE0LjE5MWwxLjM4Ni01LjMzMWgxLjUyN2wtMS44LDYuNzg4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMi4yNSkiLz48L3N2Zz4="},243:function(t,e,r){"use strict";r(231)},244:function(t,e,r){(e=r(76)(!1)).push([t.i,"button[data-v-364e9726]{position:fixed;right:2em;bottom:2em;width:3em;height:3em;z-index:1;cursor:pointer;background:var(--g-primary-white);border-radius:100px;border-style:none}.media[data-v-364e9726]{width:1.5em;height:1.5em}.icon[data-v-364e9726]{width:100%;height:auto}.more[data-v-364e9726]{width:2em;height:auto}.modal[data-v-364e9726]{display:block;position:fixed;right:0;bottom:6em;margin:0 1.5em;padding:2em 1.5em;background:var(--g-primary-white);border-radius:20px;box-shadow:0 4px 8px 0 hsla(0,0%,66.3%,.19),0 6px 20px 0 hsla(0,0%,66.3%,.19)}.external-media[data-v-364e9726]{display:flex;margin:0 auto;justify-content:space-evenly;width:75%}",""]),t.exports=e},245:function(t,e,r){var content=r(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("4f957d3f",content,!0,{sourceMap:!1})},246:function(t,e,r){var content=r(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("7c20c1bd",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("1b7833da",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r.r(e);var n=r(232),o=r(229),c={components:{Card:n.default},data:function(){return{cards:null}},computed:{},created:function(){var t=this;o.a.getCharacterNames().then((function(e){t.cards=e.data})).catch((function(t){console.log(t)}))}},M=(r(236),r(33)),component=Object(M.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"item"},this._l(this.cards,(function(t){return e("Card",{key:t.url,attrs:{card:t}})})),1),this._v(" "),e("div",{staticClass:"item"},this._l(this.cards,(function(t){return e("Card",{key:t.url,attrs:{card:t}})})),1)])}),[],!1,null,"2e0dcd86",null);e.default=component.exports;installComponents(component,{Card:r(232).default})},251:function(t,e,r){"use strict";r.r(e);var n=r(253),o=r.n(n),c={data:function(){return{isOpen:!1,options:o.a}},methods:{toggleModal:function(){return this.isOpen=!this.isOpen}}},M=(r(254),r(33)),component=Object(M.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"centered"},[r("input",{staticClass:"search",attrs:{type:"search",enterkeyhint:"go",placeholder:"e.g. Khaleesi...","aria-placeholder":"e.g. Khaleesi..."}}),t._v(" "),r("div",{staticClass:"filter"},[r("button",{on:{click:function(e){return t.toggleModal()}}},[r("img",{attrs:{src:t.options,alt:"filter by age, name/ alias, or allegiance"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"modal"},[r("p",[t._v("Age ")]),t._v(" "),r("p",[t._v("Name / Alias ")]),t._v(" "),r("p",[t._v("Allegiances ")])])])])])])}),[],!1,null,"61fb8009",null);e.default=component.exports},253:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy42MjgiIGhlaWdodD0iMTQuOTE2IiB2aWV3Qm94PSIwIDAgMTcuNjI4IDE0LjkxNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMzc1IC01LjYyNSkiPjxwYXRoIGQ9Ik0xNC4wMjQsMjUuNzY3YTEuNywxLjcsMCwwLDEsMy4xMSwwaDMuMTkxYS42OC42OCwwLDAsMSwuNjc4LjY3OGgwYS42OC42OCwwLDAsMS0uNjc4LjY3OEgxNy4xMzRhMS43LDEuNywwLDAsMS0zLjExLDBINC4wNTNhLjY4LjY4LDAsMCwxLS42NzgtLjY3OGgwYS42OC42OCwwLDAsMSwuNjc4LS42NzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC03LjU5OSkiLz48cGF0aCBkPSJNNy4yNDQsMTYuMmExLjcsMS43LDAsMCwxLDMuMTEsMGg5Ljk3MWEuNjguNjgsMCwwLDEsLjY3OC42NzhoMGEuNjguNjgsMCwwLDEtLjY3OC42NzhIMTAuMzU0YTEuNywxLjcsMCwwLDEtMy4xMSwwSDQuMDUzYS42OC42OCwwLDAsMS0uNjc4LS42NzhoMGEuNjguNjgsMCwwLDEsLjY3OC0uNjc4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMy43OTkpIi8+PHBhdGggZD0iTTE0LjAyNCw2LjY0MmExLjcsMS43LDAsMCwxLDMuMTEsMGgzLjE5MUEuNjguNjgsMCwwLDEsMjEsNy4zMmgwQS42OC42OCwwLDAsMSwyMC4zMjUsOEgxNy4xMzRhMS43LDEuNywwLDAsMS0zLjExLDBINC4wNTNhLjY4LjY4LDAsMCwxLS42NzgtLjY3OGgwYS42OC42OCwwLDAsMSwuNjc4LS42NzhaIi8+PC9nPjwvc3ZnPg=="},254:function(t,e,r){"use strict";r(245)},255:function(t,e,r){(e=r(76)(!1)).push([t.i,'body[data-v-61fb8009]{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.search[data-v-61fb8009],button[data-v-61fb8009]{border-style:none;border-radius:100px}.search[data-v-61fb8009]{padding:.25em 1.5em;width:50ch}.search[data-v-61fb8009]:focus{border-left-style:3px;border-bottom-style:var(--g-primary-black);border-right-style:3px;border-top-style:solid}button[data-v-61fb8009]{display:flex;padding:1em;margin-left:10px;background:var(--g-primary-white);border-radius:100px}img[data-v-61fb8009]{width:1.4em;height:auto}.modal p+p[data-v-61fb8009]{display:flex;flex-direction:column;justify-content:space-evenly;padding-top:1.5em}.filter[data-v-61fb8009]{display:flex;position:relative;align-items:center}.modal[data-v-61fb8009]{position:absolute;top:5em;right:-1em;padding:2em 1.5em;width:10em;z-index:2;background:var(--g-primary-white);border-radius:20px}',""]),t.exports=e},256:function(t,e,r){"use strict";r(246)},257:function(t,e,r){(e=r(76)(!1)).push([t.i,"button[data-v-e76b3f72]{margin:0 1em;padding:1em;border-radius:100px}.page-link[data-v-e76b3f72]{padding:1em auto;background:var(--g-primary-white);border-style:none;border-radius:100%;cursor:pointer}.margin[data-v-e76b3f72]{padding:2em 0;visibility:hidden}",""]),t.exports=e},258:function(t,e,r){"use strict";r(247)},259:function(t,e,r){(e=r(76)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@800&display=swap);"]),e.push([t.i,':root{--g-primary-black:#333;--g-primary-white:#fff;--g-secondary-grey:#707070;--g-border:#a0a0a0;--g-bg:#f0f0f0;--g-disabled:#bfbfbf;--g-m-header-txt:1.25em;--g-m-body-txt:0.9375em;--g-m-secondary-txt:1.375em}.cinzel-ff{font-family:"Cinzel",serif;text-align:center}.centered{display:flex;justify-content:center}header{display:block;padding-bottom:3em;font-size:.9375em;font-size:var(--g-m-body-txt);text-align:right}h1{padding-bottom:1.5em;font-size:1.25em;font-size:var(--g-m-header-txt);color:#333;color:var(--g-primary-black)}',""]),t.exports=e},265:function(t,e,r){"use strict";r.r(e);var n=r(250),o=r(251),c={methods:{goBack:function(){return this.$router.go(-1)},goForw:function(){return this.$router.go(1)}}},M=(r(256),r(33)),d=Object(M.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"centered margin"},[e("span",[e("button",{staticClass:"page-link",on:{click:this.goBack}},[this._v("U+003C")])]),this._v(" "),e("span",[this._v("page num ratio")]),this._v(" "),e("span",[e("button",{staticClass:"page-link",on:{click:this.goForw}},[this._v("U+00EC")])])])}),[],!1,null,"e76b3f72",null).exports,l=r(233),L={components:{CardList:n.default,SearchBar:o.default,Pagination:d,ProfileCard:l.default}},w=(r(258),Object(M.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[this._m(0),this._v(" "),e("h1",{staticClass:"centered cinzel-ff"},[this._v("Game of Thrones Character Reel")]),this._v(" "),e("SearchBar"),this._v(" "),e("CardList"),this._v(" "),e("ProfileCard")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[this._v("\n                Made by\n                "),e("a",{attrs:{href:"https://github.com/maureento8888",target:"_blank",rel:"noopener noreferrer"}},[this._v("Maureen T'o")])])}],!1,null,null,null));e.default=w.exports;installComponents(w,{SearchBar:r(251).default,ProfileCard:r(233).default})}}]);