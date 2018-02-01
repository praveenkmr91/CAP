angular.module('CAP')
    .service('coinome', ['$http', function($http) {

        var urlBase = 'https://www.coinome.com/api/v1/ticker.json';

        this.fetch = function(symbol) {
            symbol = symbol || 'btc';
            var url = urlBase + symbol + '/inr';

            return $http.get(url);
        };

    }]);