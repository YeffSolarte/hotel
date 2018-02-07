let inject  = ['AutoCompleteService'];

class AutoCompleteController {
  constructor (AutoCompleteService) {
    this.AutoCompleteService = AutoCompleteService;
    this.listCity = [];
    this.contCity = 1;
    this.maxPage = 2;
    this.listCity2 = [];
    this.editable = this.isEditable ? this.isEditable : false;
    this.requirement = this.param;
    this.intitializeSearch = false;
  }

  getCityList(){
    if(this.intitializeSearch) return;
    this.intitializeSearch = true;
    if(this.requirement !== this.param){
      this.contCity = 1;
      this.listCity2 = [];
      this.maxPage = 2;
      this.requirement = this.param;
    }
    if(this.contCity <= this.maxPage){
      this.AutoCompleteService.getAllSimple(25,this.contCity,'', this.param).then(response => {
        this.maxPage = response.totalPage;
        for (let x = 0; x < response.items.length; x++){
          this.listCity2.push(response.items[x]);
        }
        this.contCity++;
        this.intitializeSearch = false;
      });
    } else {
      this.intitializeSearch = false;
    }
  }

  getCitySearch(val) {
    return this.AutoCompleteService.getAllSimple(25,1,val, this.param)
      .then(response => {
        this.listCity = response.items;
        return this.listCity;
      });
  }

  onSelect ($item) {
    this.myValue = $item;
    this.typeaheadSelect({item : $item});
  }
}

AutoCompleteController.$inject = inject;

export default AutoCompleteController;
