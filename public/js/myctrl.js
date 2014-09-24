angular
   .module('myApp')
   .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['math', 'Server'];

function UserCtrl(math, Server) {
    this.user = {};
    this.user.details = {
        "username": "Todd Motto",
        "id":"89101112"
    };

    this.greeting = "This is a test from reverse filer";
    this.result = "";
    this.multiply = function(x, y) {
        this.result = math.multiply(x,y);
    };

    this.numbers = [10, 25, 35, 45, 60, 80, 100];
    this.lowerBound = 42;

    this.greaterThanNum = function(item) {
        return item> this.lowerBound;
    };

    this.response = Server.get('http://localhost:3000/users');
}