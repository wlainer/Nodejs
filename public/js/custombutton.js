angular
   .module('myApp', [])
   .directive('customButton', customButton);

function customButton() {
    return {
        restrict: 'AC',
        replace: true,
        transclude: true,
        template: '<a href="" class="myawesomebutton" ng-transclude>' +
                    '<i class="icon-on-sign"></i>' +
                    '</a>',
        link: function(scope, element, attrs) {

        }
    };
}