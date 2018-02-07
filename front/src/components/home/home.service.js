class HomeService {
	constructor ($q, $http, ngAuthSettings) {
		this.ngAuthSettings = ngAuthSettings;
		this.$q = $q;
		this.$http = $http;
	}
	
	getHotels(){
		return this.$q((resolve, reject) => {
			this.$http({
				method: 'GET',
				url: this.ngAuthSettings.apiServiceBaseUri + '/hotels',
				cache : false
			}).then(function (response) {
				resolve(response.data);
			}, function (reason) {
				reject(reason);
			});
		});
	}
}

HomeService.$inject = ['$q','$http', 'ngAuthSettings'];

export default HomeService;
