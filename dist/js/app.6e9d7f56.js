(function(t){function e(e){for(var a,n,o=e[0],c=e[1],u=e[2],v=0,f=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},s=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Yaniv-Soudneko-13-06-2021/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3aa2":function(t,e,r){"use strict";r("4092")},4092:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-layout",attrs:{id:"app"}},[r("header-cmp"),r("div",{staticClass:"view"},[r("router-view")],1)],1)},s=[],n=r("7938"),o={data:function(){return{}},computed:{},created:function(){},components:{HeaderCmp:n["default"]}},c=o,u=r("2877"),l=Object(u["a"])(c,i,s,!1,null,null,null),v=l.exports,f=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("search-cmp"),r("button",{on:{click:function(e){return t.saveToFavorites()}}},[t._v("Save")]),r("button",{on:{click:function(e){return t.changeToCelsius()}}},[t._v("Change to Celsius")]),r("button",{on:{click:function(e){return t.changeToDarkMode()}}},[t._v("Mode")]),t.city?r("div",{on:{myEvent:function(e){return t.city()}}},[r("span",[t._v(t._s(t.city.LocalizedName)+","+t._s(t.city.Region.LocalizedName)+","+t._s(t.city.AdministrativeArea.CountryID))])]):t._e(),t.weathers.DailyForecasts?r("ul",{staticClass:"main-container"},t._l(t.weathers.DailyForecasts,(function(e){return r("li",{key:e.Date},[r("weather-preview",{attrs:{forecast:e,city:t.city}})],1)})),0):t._e()],1)},h=[],p=r("5530"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.doSearch()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy,expression:"filterBy"}],staticClass:"form-control rounded",attrs:{type:"search",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"},domProps:{value:t.filterBy},on:{input:function(e){e.target.composing||(t.filterBy=e.target.value)}}}),r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(e){return t.doSearch()}}},[t._v(" search ")])])])},y=[],g=r("1da1"),C=(r("96cf"),{name:"Search",data:function(){return{filterBy:""}},components:{},methods:{doSearch:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.$emit("myEvent"),e.next=4,t.$store.dispatch({type:"queryLocation",filterBy:t.filterBy});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),_=C,b=(r("6f63"),Object(u["a"])(_,m,y,!1,null,"14826898",null)),w=b.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"weather"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"card"},[r("span",{staticClass:"icon"},[r("img",{staticClass:"img-fluid",attrs:{src:"https://developer.accuweather.com/sites/default/files/"+t.weatherIcon+"-s.png"}})]),r("div",{staticClass:"title"},[r("p",[t._v(t._s(t.city.LocalizedName))])]),r("div",{staticClass:"temp"},[t._v("+"+t._s(t.fahrenToCles)),r("sup",[t._v("°")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("General")]),r("div",{staticClass:"value"},[t._v(t._s(t.forecast.Day.IconPhrase))])]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("Date")]),r("div",{staticClass:"value"},[t._v(t._s(t._f("moment")(t.forecast.EpochDate,"dddd, MMMM Do YYYY")))])]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("Night")]),r("div",{staticClass:"value"},[t._v(t._s(t.changeToCelsNight))])])])])])])])},k=[],T=(r("b680"),{props:["forecast","city"],name:"weather-preview",computed:{changeToCelsNight:function(){var t=this.$store.getters.getClesius;if(!0===t){var e=this.forecast.Night.Icon,r=(e-32)/1.8;return r.toFixed(1)}return this.forecast.Night.Icon},fahrenToCles:function(){var t=this.$store.getters.getClesius;if(!0===t){var e=this.forecast.Temperature.Minimum.Value,r=(e-32)/1.8;return r.toFixed(1)}return this.forecast.Temperature.Minimum.Value},weatherIcon:function(){var t=this.forecast.Day.Icon;return t<10?"0".concat(t):t}},methods:{}}),x=T,D=(r("b515"),Object(u["a"])(x,F,k,!1,null,"5f06882c",null)),O=D.exports,j={name:"Home",computed:{city:function(){var t=this.$store.getters.getlocation;return t},weathers:function(){return this.$store.getters.getWeather}},methods:{changeToCelsius:function(){this.$store.dispatch({type:"changeDisplayToCelsius"})},changeToDarkMode:function(){this.$store.dispatch({type:"changeToDarkMode"});var t=document.getElementById("app"),e=this.$store.getters.getDarkMode;!0===e?t.classList.add("darkMode"):t.classList.remove("darkMode")},saveToFavorites:function(){var t=Object(p["a"])({},this.$store.getters.getWeather),e=Object(p["a"])({},this.$store.getters.getlocation),r={weathers:t,city:e};this.$store.dispatch({type:"saveToFavories",favoriteCity:r})}},created:function(){this.$store.dispatch({type:"queryLocation"})},components:{SearchCmp:w,weatherPreview:O}},$=j,M=(r("ee12"),Object(u["a"])($,d,h,!1,null,null,null)),S=M.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[t.favoriteCities?r("ul",{staticClass:"favorites-container"},t._l(t.favoriteCities,(function(t){return r("favorite-preview",{key:t._id,attrs:{favoriteCity:t}})})),1):t._e()])},N=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"weather",on:{click:function(e){return t.redirect()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"card"},[r("span",{staticClass:"icon"},[r("img",{staticClass:"img-fluid",attrs:{src:"https://developer.accuweather.com/sites/default/files/"+t.weatherIcon+"-s.png"}})]),r("div",{staticClass:"title"},[r("p",[t._v(t._s(t.favoriteCity.city.LocalizedName))])]),r("div",{staticClass:"temp"},[t._v("+"+t._s(t.fahrenToCles)),r("sup",[t._v("°")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("General")]),r("div",{staticClass:"value"},[t._v(" "+t._s(t.favoriteCity.weathers.DailyForecasts[0].Day.IconPhrase)+" ")])]),t._m(0),r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("Night")]),r("div",{staticClass:"value"},[t._v(t._s(t.changeToCelsNight))])])])])])])])},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4"},[r("div",{staticClass:"header"},[t._v("Air pollution")]),r("div",{staticClass:"value"},[t._v("47")])])}],E={props:["favoriteCity"],computed:{changeToCelsNight:function(){var t=this.$store.getters.getClesius;if(!0===t){var e=this.favoriteCity.weathers.DailyForecasts[0].Night.Icon,r=(e-32)/1.8;return r.toFixed(1)}return this.favoriteCity.weathers.DailyForecasts[0].Night.Icon},weatherIcon:function(){var t=this.favoriteCity.weathers.DailyForecasts[0].Day.Icon;return t<10?"0".concat(t):t},fahrenToCles:function(){var t=this.$store.getters.getClesius;if(!0===t){var e=this.favoriteCity.weathers.DailyForecasts[0].Temperature.Minimum.Value,r=(e-32)/1.8;return r.toFixed(1)}return this.favoriteCity.weathers.DailyForecasts[0].Temperature.Minimum.Value}},methods:{redirect:function(){this.$router.push("/")},removeFavoriteCity:function(){console.log("executing removeFav"),this.$store.dispatch({type:"removeFromFavorites",_id:this.favoriteCity._id})}}},L=E,R=(r("da4d"),Object(u["a"])(L,B,P,!1,null,null,null)),W=R.exports,A={name:"Favorites",computed:{favoriteCities:function(){return this.$store.getters.getFavoriteCities}},methods:{},components:{FavoritePreview:W}},q=A,V=(r("3aa2"),Object(u["a"])(q,I,N,!1,null,"5a10dc78",null)),z=V.exports;a["a"].use(f["a"]);var H=[{path:"/",name:"Home",component:S},{path:"/Favorites",name:"Favorites",component:z}],J=new f["a"]({routes:H}),Y=J,G=r("2f62"),U=(r("4de4"),r("99af"),r("d3b7"),"tUOZ2fSWtVFdCCh9zWMZkJ1UiFPNVaci"),Z={getCity:X,getWeather:K,makeId:et};function K(t){return Q.apply(this,arguments)}function Q(){return Q=Object(g["a"])(regeneratorRuntime.mark((function t(e){var r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="http://dataservice.accuweather.com/forecasts/v1/daily/5day/",a="".concat(e,"?apikey=").concat(U),t.next=4,fetch(r+a);case 4:return i=t.sent,t.next=7,i.json();case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}function X(){return tt.apply(this,arguments)}function tt(){return tt=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,r,a,i,s,n,o,c,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"TelAviv",t.prev=1,r="http://dataservice.accuweather.com/locations/v1/cities/search",a="?apikey=".concat(U,"&q=").concat(e),t.next=6,fetch(r+a);case 6:return i=t.sent,t.next=9,i.json();case 9:return s=t.sent,t.next=12,K(s[0].Key);case 12:return n=t.sent,o=et(5),c={_id:o,weather:n,city:s[0]},t.abrupt("return",c);case 18:t.prev=18,t.t0=t["catch"](1),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[1,18]])}))),tt.apply(this,arguments)}function et(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}function rt(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null}function at(t,e){e=JSON.stringify(e),localStorage.setItem(t,e)}function it(t){localStorage.removeItem(t)}var st={load:rt,store:at,remove:it};a["a"].use(G["a"]);var nt={state:{location:"",filterBy:"",isClesius:!1,weather:{},favortiesCities:st.load("Favorite-city")||[],isDark:!1},mutations:{queryLocation:function(t,e){var r=e.location;t.location=r.city},setWeather:function(t,e){var r=e.location;t.weather=r.weather},setFilterBy:function(t,e){var r=e.filter;t.filterBy=r},removeFromFavorites:function(t,e){var r=e._id;t.favortiesCities=t.favortiesCities.filter((function(t){return r!==t._id}))},saveToFavories:function(t,e){var r=e.favCityToAdd;console.log("favCity got in mutation: ",r),t.favortiesCities.push(r)}},actions:{removeFromFavorites:function(t,e){var r=e._id;t.commit({type:"removeFromFavorites",_id:r});var a=t.getters.getFavoriteCities;st.store("Favorite-city",a)},queryLocation:function(t,e){return Object(g["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.filterBy,r.prev=1,r.next=4,Z.getCity(a);case 4:i=r.sent,t.commit({type:"queryLocation",location:i}),t.commit({type:"setWeather",location:i}),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},saveToFavories:function(t,e){var r=e.favoriteCity,a=Object(p["a"])(Object(p["a"])({},r),{},{_id:Z.makeId(5)});t.commit({type:"saveToFavories",favCityToAdd:a});var i=t.getters.getFavoriteCities;console.log("faoritesCities after update in state: "),console.log(i),st.store("Favorite-city",i)},changeDisplayToCelsius:function(t){t.state.isClesius=!t.state.isClesius},changeToDarkMode:function(t){t.state.isDark=!t.state.isDark,console.log(t.state.isDark)}},getters:{filterBy:function(t){return t.filterBy},getlocation:function(t){return t.location},getWeather:function(t){return t.weather},getFavoriteCities:function(t){return t.favortiesCities},getClesius:function(t){return t.isClesius},getDarkMode:function(t){return t.isDark}},modules:{}};a["a"].use(G["a"]);var ot=new G["a"].Store({state:{},mutations:{},actions:{},modules:{weatherStore:nt}});a["a"].config.productionTip=!1,a["a"].use(r("2ead")),new a["a"]({router:Y,store:ot,render:function(t){return t(v)}}).$mount("#app")},"626c":function(t,e,r){},"6dfb":function(t,e,r){},"6f63":function(t,e,r){"use strict";r("e7c7")},7938:function(t,e,r){"use strict";var a=r("fe3b"),i=r("9a6b"),s=(r("b0c3"),r("2877")),n=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"1bcbba6c",null);e["default"]=n.exports},"7f11":function(t,e,r){},"84b2":function(t,e,r){},"9a6b":function(t,e,r){"use strict";var a=r("bb32"),i=r.n(a);e["default"]=i.a},b0c3:function(t,e,r){"use strict";r("6dfb")},b515:function(t,e,r){"use strict";r("626c")},bb32:function(t,e){},da4d:function(t,e,r){"use strict";r("84b2")},e7c7:function(t,e,r){},ee12:function(t,e,r){"use strict";r("7f11")},fe3b:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",[t._v("Herolo Weather Task")]),r("div",[r("router-link",{staticClass:"links-to",attrs:{to:"/"}},[t._v(" Home ")]),r("router-link",{staticClass:"links-to",attrs:{to:"/favorites"}},[t._v(" Favorites ")])],1)])},i=[]}});
//# sourceMappingURL=app.6e9d7f56.js.map