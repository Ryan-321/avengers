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
    menu: "#menu",
    fixedElements: '#header',
    sectionsColor: ['#000', 'whitesmoke', 'whitesmoke','whitesmoke','whitesmoke' ],
    scrollingSpeed: 1000,
    lockAnchors: true,
    css3: true,
    anchors: ['firstSection', 'campusNews', 'academics', 'professors', 'athletics','apply'],
    verticalCentered: true,
    slidesNavigation: true,
    controlArrows: true

  };

};


})();
