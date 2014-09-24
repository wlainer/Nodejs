angular
   .module('myApp')
   .filter('Reverse', Reverse);

function Reverse() {
    return function(input, uppercase) {
        var out = '';
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
}