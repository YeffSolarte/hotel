import controller from './autocomplete.controller';
import template from './autocomplete.view.html';

function AutocompleteDirective (){
  return {
    restrict: 'E',
    template,
    replace: false,
    bindToController : true,
    scope: {
      myValue: "=myAttribute",
      isReq: "=",
      isDis : "=",
      tooltipP :  "=",
      typeaheadSelect : '&',
      onBlurInput : '&',
      idCity : "@",
      isEditable: "=",
      appendBody: "=",
      placeholder : "@",
      param : "@"
    },
    controller,
    controllerAs : 'ctrl'
  };
}


// let AutocompleteComponent = {
//   template,
//   controller,
//   scopes : {
//     myValue: "<",
//     isReq: "<",
//     isDis : "<",
//     tooltipP :  "<",
//     idCity : "<",
//     isEditable: "<",
//     placeholder : "<",
//     param : "<"
//   }
// };

// export default AutocompleteComponent;
export default AutocompleteDirective;
