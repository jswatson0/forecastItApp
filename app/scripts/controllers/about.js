'use strict';

/**
 * @ngdoc function
 * @name forecastItApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the forecastItApp
 */
angular.module('forecastItApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
