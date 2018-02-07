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

starsFilter.$inject = ['$filter'];
function starsFilter($filter){
	return function(array, data) {
		let result  = array.filter(val => {
		  if(val.stars === 1 && data.oneStars){
		    return val;
          } else if(val.stars === 2 && data.twoStars){
			  return val;
		  } else if(val.stars === 3 && data.treeStars){
			  return val;
		  } else if(val.stars === 4 && data.fourStars){
			  return val;
		  } else if(val.stars === 5 && data.fiveStars){
			  return val;
		  } else if(data.allStars){
		    return val;
          } else if(!data.oneStars && !data.twoStars && !data.treeStars && !data.fourStars && !data.fiveStars && !data.allStars){
		    return val;
          }
		});
		return result;
		
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
  starsFilter : starsFilter,
  s4bCurrency : s4bCurrency
};
