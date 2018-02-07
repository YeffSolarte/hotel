import controller from './home.controller';
import template from './home.view.html';

let HomeComponent = {
  template,
  controller,
  bindings : {
    shCtrl : '<'
  }
};

export default HomeComponent;
