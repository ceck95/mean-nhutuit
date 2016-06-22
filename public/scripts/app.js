/*jshint unused: vars */
define(['angular', 'controllers/login']/*deps*/, function (angular, LoginCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularRequireApp
   * @description
   * # angularRequireApp
   *
   * Main module of the application.
   */
  return angular
    .module('angularRequireApp', [
      'angularRequireApp.controllers.LoginCtrl',
      'ngCookies',
      'ngRoute',
      'ngAnimate',
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login',
          reloadOnSearch: false
        })
        .otherwise({
          redirectTo: '/'
        });
    })
});
