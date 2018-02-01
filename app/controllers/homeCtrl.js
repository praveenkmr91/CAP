angular.module('CAP')
    .controller('homeCtrl', ['$scope', 'config', 'zebpay', function($scope, config, zebpay) {
        var vm = $scope;
        vm.exchangesData = {};

        vm.presetActiveTab = function(num) {
            num = num || 0;
            tabbar.setActiveTab(num);
        }




        vm.getContent = function(e) {
            var symbol = e.detail.tabItem.id;
            vm._fetchFromExchange(symbol);
        }


        vm._fetchFromExchange = function(symbol, exchangeName) {
            exchangeName = exchangeName || 'all';
            symbol = symbol || 'btc';

            zebpay.fetch(symbol).then(function(response) {
                var data = response.data;
                vm.exchangesData['ZEBPAY'] = data;
            }).catch(function(data) {
                console.log('error');
            });
        }

        vm._fetchFromExchange();

        vm.toggle = function() {
            vm.splitter.left.toggle();
        };



    }]);