import angular from 'angular';

let whenScrolledModule = angular.module('shared.components.whenScrolled',[])
  .directive('whenScrolled', whenScrolled);

function whenScrolled(){
  return function(scope, elm, attr) {
    let raw = elm[0];

    elm.bind('scroll', function() {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attr.whenScrolled);
      }
    });
  };
}

whenScrolled.$inject = [];
export default whenScrolledModule;
