'use strict';

/**
 * @ngdoc function
 * @name escenicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the escenicApp
 */
angular.module('escenicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
