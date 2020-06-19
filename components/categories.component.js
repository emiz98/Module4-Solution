(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categoryList', {
    templateUrl: 'templates/menu.template.html',
    bindings: {
      items: '<',
    }
  });
})();
