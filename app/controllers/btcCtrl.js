angular.module('CAP')
    .controller('btcCtrl', ['$scope', 'config', 'zebpay', function($scope, config, zebpay) {
        var vm = $scope;

        vm.load = function($done) {
            
            // refreshData()
            //     .then($done);
        };

    }]);