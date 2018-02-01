(function() {

    var app = angular.module('CAP', ['onsen']);

    app.run(function($rootScope, config) {
        $rootScope.CONFIG = config;

        ons.ready(function() {
            console.log("Onsen UI is ready!");
            ons.disableIconAutoPrefix();

            ons.setDefaultDeviceBackButtonListener(function(evt) {
                ons.notification.confirm('Do you want to close the app?') // Ask for confirmation
                    .then(function(index) {
                        if (index === 1) { // OK button
                            navigator.app.exitApp(); // Close the app
                        }
                    });
            })

        });
    });
})()