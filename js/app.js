'use strict';

/* App Module */

var mdcatApp = angular.module('mdcatApp', [
  'ngRoute',
  // 'mdcatAnimations',
  'ngSanitize',
  'mdcatControllers',
  // 'mdcatFilters',
  'mdcatServices'
]);

mdcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/posts', {
        templateUrl: 'partials/post-list.html',
        controller: 'PostListCtrl'
      }).
      when('/post/:postName', {
        templateUrl: 'partials/post-detail.html',
        controller: 'PostDetailCtrl'
      }).
      when('/page/:pageName',{
        templateUrl: 'partials/page-detail.html',
        controller: 'PageDetailCtrl'
      }).
      otherwise({
        redirectTo: '/posts'
      });
  }]);
