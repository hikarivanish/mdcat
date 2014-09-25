'use strict';

/* Services */

var mdcatServices = angular.module('mdcatServices', ['ngResource']);

mdcatServices.factory('Site',['$resource',
	function($resource){
		return $resource('site.json',{},{

		});
	}
]);

mdcatServices.factory('PostList', [
	'$resource',
  	function($resource){
    	return $resource('posts.json');
  	}
]);


