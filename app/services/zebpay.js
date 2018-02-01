angular.module('CAP')
    .service('zebpay', ['$http', function($http) {

        var urlBase = 'https://www.zebapi.com/api/v1/market/ticker/';

        this.fetch = function(symbol) {
            symbol = symbol || 'btc';
            var url = urlBase + symbol + '/inr';

            return $http.get(url);
        };

    }]);