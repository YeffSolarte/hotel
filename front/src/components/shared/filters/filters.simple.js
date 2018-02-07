function capitalize(){
  return function(input, all) {
    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g,
      function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
  }
}

function ngEnter(){
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
}

s4bCurrency.$inject = ['$filter'];
function s4bCurrency($filter){
  return function(input, currency, decimals) {
    let decimal = decimals || 2;

    if(currency === undefined) { currency = ''; }
    else if(currency !== '') {
      currency = currency + ' ';
    }
    input = parseFloat(input);
    input = input.toFixed(input % 1 === 0 ? 0 : decimal);
    return currency + ' ' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  };
}

function fileSize() {
  let units = [
    'bytes',
    'KB',
    'MB',
    'GB',
    'TB',
    'PB'
  ];
  return function( bytes, precision ) {
    if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {
      return '?';
    }
    
    let unit = 0;
    
    while ( bytes >= 1024 ) {
      bytes /= 1024;
      unit ++;
    }
    
    return bytes.toFixed( + precision ) + ' ' + units[ unit ];
  };
}


export default {
  capitalize : capitalize,
  fileSize : fileSize,
  ngEnter : ngEnter,
  s4bCurrency : s4bCurrency
};
