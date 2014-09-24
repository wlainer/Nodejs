angular
   .module('myApp')
   .service('math', math);

function math() {
    this.multiply = function(x, y) {
        return x * y;
    };
}