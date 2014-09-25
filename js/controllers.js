'use strict';

/* Controllers */

var mdcatControllers = angular.module('mdcatControllers', []);


mdcatControllers.controller('SiteCtrl',['$scope','Site',
  function($scope,Site){
    $scope.site = Site.get({},function(site){

      document.title = site.siteTitle;
    });
  }
]);

function convert(fullName){
  var post  = {};
  post.fullName = fullName;
  var a = fullName.split('@');
  post.title = a[0];
  post.date = a[1];
  post.time  = moment('20'+a[1],'YYYYMMDDhhmm').calendar();    
  return post;
}


mdcatControllers.controller('PostListCtrl', ['$scope', 'PostList',
    function($scope, PostList) {
      PostList.get({},function(postList){
          $scope.posts = postList.posts.map(convert);
      });
  }]);

mdcatControllers.controller('PostDetailCtrl', 
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
      $scope.post = convert($routeParams.postName);
      $http.get('posts/'+$routeParams.postName+'.md')
        .success(function(data){
          $scope.post.content = marked(data);
          setTimeout(function(){

            $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
            });
          },1000);
      });
}]);


mdcatControllers.controller('PageDetailCtrl', 
  ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
      $scope.page = {title:$routeParams.pageName};
      $http.get('pages/'+$routeParams.pageName+'.md').success(function(data){
          $scope.page.content = marked(data);
            setTimeout(function(){

            $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
            });
          },1000);
      });
}]);



