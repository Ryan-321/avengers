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
    // menu: '#menu',
    fixedElements: '#header',
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#000'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000,
    lockAnchors: true,
    css3: true,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'lastSection']

  };

};


})();
