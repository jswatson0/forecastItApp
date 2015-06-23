'use strict';

/**
 * @ngdoc function
 * @name forecastItApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forecastItApp
 */
angular.module('forecastItApp')
  .controller('MainCtrl',['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
      $scope.tenDay = data.forecast.simpleforecast;
    });

  }]);
