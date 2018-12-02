(function() {
    'use strict';

angular.module("myBrainApp", [])

.controller('myBrainController', ['$scope', 'brainFactory', ($scope, brainFactory) => {

    $scope.win = brainFactory.output;

}]);
})();