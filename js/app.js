"use strict";

(function(){

  angular
  .module('app', [
    'fullPage.js',
    'ui.router'
  ])
  .config([
    '$stateProvider',
    routerFunction
  ]);

  function routerFunction($stateProvider){
    $stateProvider
    .state('main',{
      url: '',
      templateUrl: 'view/index.html',
      controller: 'mainController',
      controllerAs: 'vm'
    })
  }

})();
