let inject = ['$q', '$http', 'ngAuthSettings', '$rootScope'];

class AutoCompleteService {
  constructor($q, $http, ngAuthSettings, $rootScope) {
    this.$q = $q;
    this.$http = $http;
    this.ngAuthSettings = ngAuthSettings;
    this.$rootScope = $rootScope;
    this.constants = {
      cities : '/crm/proyectos/search-city',
      projects : '/crm/oportunidades/search-proyecto',
      accounts : '/terceros/terceros/search-terceros',
      thirds : '/terceros/terceros/search-terceros',
      contacts : '/crm/proyectos/search-responsable',
      categories : '/categoria-info/search-categorias',
      items : '/item-info/search-items',
      sellers : '/crm/contactos/search-contactos?isSeller=true',
      contactsWithowAccount : '/crm/contactos/search-contactos'
    };
  }

  getAllSimple (pageSize, pageNumber, search, param) {
    return this.$q((resolve, reject) => {
      this.$http({
        method: 'GET',
        url: this.ngAuthSettings.apiServiceBaseUri + this.constants[param] + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&searchText=' + search,
        cache : false
        // data : {
        //   'pageSize' : pageSize,
        //   'pageNumber' : pageNumber,
        //   'searchText' : search
        // }
      }).then(response => {
        resolve(response.data);
      }).catch(reason => {
        reject(reason);
      });
    });
  }
}

AutoCompleteService.$inject = inject;

export default AutoCompleteService;
