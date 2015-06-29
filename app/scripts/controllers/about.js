'use strict';

/**
 * @ngdoc function
 * @name escenicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escenicApp
 */
angular.module('escenicApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
