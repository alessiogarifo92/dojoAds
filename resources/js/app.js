/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


 function init() {

 const app = new Vue({
     el: '#app',
     data: {
      message: 'Alessio funziona',
      isActive: false,
      expDays : 1,
      exp : new Date(),

     },
     mounted(){
      var vm = this
      vm.exp = new Date();
      vm.exp.setTime(vm.exp.getTime() + (vm.expDays*24*60*60*1000));
      vm.checkCount()
    },
     methods:{
       finestra(){ //method if click session open up the ads (just once because insert once in @click)
         this.isActive = !this.isActive;
       },
       chiudi(){
         this.isActive = false;
       },
       checkCount() {
     var vm = this
     var count = vm.GetCookie('count');
     if (count == null) {
       count=1;
       vm.SetCookie('count', count, vm.exp);
       // if first time in page, count 1 and activate pop-up window ads 
       this.isActive = true;
       // alert('alert')

     }
     else {
       count++;
       vm.SetCookie('count', count, vm.exp);
     }
   },
   SetCookie (name, value) {
   var vm = this
   var argv = vm.SetCookie;
   var argc = vm.SetCookie.length;
   var expires = (argc > 2) ? argv[2] : null;
   var path = (argc > 3) ? argv[3] : null;
   var domain = (argc > 4) ? argv[4] : null;
   var secure = (argc > 5) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
   ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
   ((path == null) ? "" : ("; path=" + path)) +
   ((domain == null) ? "" : ("; domain=" + domain)) +
   ((secure == true) ? "; secure" : "");
   },
   GetCookie (name) {
   var vm = this
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) {
   var j = i + alen;
   if (document.cookie.substring(i, j) == arg)
   return vm.getCookieVal (j);
   i = document.cookie.indexOf(" ", i) + 1;
     if (i == 0) break;
   }
     return null;
   },
   DeleteCookie (name) {
   var vm = this
   vm.exp = new Date();
   vm.exp.setTime (vm.exp.getTime() - 1);
   var cval = vm.GetCookie (name);
   document.cookie = name + "=" + cval + "; expires=" + vm.exp.toGMTString();
   },
   getCookieVal(offset) {
     var endstr = document.cookie.indexOf (";", offset);
     if (endstr == -1)
       endstr = document.cookie.length;
     return unescape(document.cookie.substring(offset, endstr));
   },
   amt(){
     var vm = this
     var count = vm.GetCookie('count')
     if(count == null) {
       vm.SetCookie('count','1')
       return 1
     }
     else {
       var newcount = parseInt(count) + 1;
       vm.DeleteCookie('count')
       vm.SetCookie('count',newcount,exp)
       return count
     }
   },
 }
   });
 }
 document.addEventListener("DOMContentLoaded",init);
