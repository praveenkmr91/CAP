angular.module('CAP')
    .controller('splitterCtrl', ['$scope', 'config', function($scope, config) {
        var vm = $scope;

        vm.load = function(page) {
            page = config.VIEWS_FOLDER + page;
            vm.splitter.content.load(page).then(function() {
                vm.splitter.left.close();
            });
        };

        vm.toggle = function() {
            vm.splitter.left.toggle();
        };
    }]);