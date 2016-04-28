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
    sectionsColor: ['#000', '#1a1a1a', '#333333','#4d4d4d','#666666','#808080' ],
    scrollingSpeed: 1000,
    lockAnchors: true,
    css3: true,
    anchors: ['firstSection', 'campusNews', 'academics', 'professors', 'athletics','apply'],
    verticalCentered: true,
    slidesNavigation: true,
    controlArrows: true,
    afterLoad: function(anchorLink, index){
    var loadedSection = $(this);
    //using anchorLink
    if(anchorLink == 'campusNews'){
        $(".campusNews").css("display", "block").addClass("animated fadeInUpBig");
    };
    if(anchorLink == 'academics'){
        $(".academics").css("display", "block").addClass("animated fadeInRight");
    };
    if(anchorLink == 'professors'){
      $(".professors").css("display", "block").addClass("animated fadeInLeft");
    };
    if(anchorLink == 'athletics'){
      $("[data-anchor='slide1']").addClass("animated jello");
    };
  },
  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            var loadedSlide = $(this);

            //first slide of the second section
            if(anchorLink == 'athletics' && slideIndex == 0 | 1 | 2 | 3 ){
              loadedSlide.addClass("animated tada")
            }
        },
        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
    var leavingSlide = $(this);

    //leaving the first slide of the 2nd Section to the right
    if(index == 5 && slideIndex == 0 | 1 | 2 | 3 && direction == 'right'){
      var slide = slideIndex + 1;
        $("[data-anchor='slide"+slide+"']").addClass("animated tada")
<<<<<<< HEAD
    }
}
=======
      }
    }
>>>>>>> master
  };

};


})();
