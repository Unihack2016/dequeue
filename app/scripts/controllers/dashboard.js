'use strict';


angular.module('dequeApp')
.controller('DashboardCtrl', function ($http) {

    // TODO: Integrate into the add request button
    $('queueRequest').onclick( function() {
        // TODO: Get the unique URL generated from a firebase push, item ID. {restaurant} and {insertItemIDhere}
        $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBUNUyh_GhchatLF_Zrh3KPipxkmCaJSv0',
            {"longUrl": 'https://deque.firebaseapp.com/{restaurant}/{insertItemIDhere}'}).then(
            function successCallback(response) {
                console.log(response);
                // TODO: Use these URLs to change the actual view
                console.log(response.data.id);
                console.log(response.data.id + ".qr");
            },
            function errorCallback(response) {
                // drop
                console.log("Error shortening URL with HTTP POST");
                console.log(response);
            });
    })

});


