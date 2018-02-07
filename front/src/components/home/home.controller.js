let inject = [
    '$scope',
    'SharedService',
    '$state',
    '$rootScope',
    '$timeout',
    'HomeService',
    'ngAuthSettings'
];

class HomeController{
    constructor ($scope, SharedService, $state, $rootScope, $timeout, HomeService, ngAuthSettings) {
        this.$state = $state;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.SharedService = SharedService;
        this.HomeService = HomeService;
        this.ngAuthSettings= ngAuthSettings;
        this.filters = {
            stars : {
	            allStars : true
            },
            textSearch : {}
        };
        this.hotels = [];
    }
    
    $onInit(){
        this.HomeService.getHotels().then(response => {
           this.hotels = response.hotels;
        });
    }


}

HomeController.$inject = inject;

export default HomeController;

