angular.module('CAP')
    .service('exchanges', ['$http', 'zebpay' function($http) {

        var urlBase = 'https://www.coinome.com/api/v1/ticker.json';

        this.fetch = function(symbol) {
            symbol = symbol || 'btc';
            var url = urlBase + symbol + '/inr';

            return $http.get(url);
        };

    }]);