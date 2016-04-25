"use strict";


(function(){
  angular
  .module("app")
  .controller('mainController',[
    mainControllerFunction
  ]);



function mainControllerFunction(){

  var _this = this;

  _this.mainOptions = {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000
  };

};


})();
