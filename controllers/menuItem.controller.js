(function () {
  'use restrict';

  angular.module('data')
  .controller("menuItemController", MenuItemController);

  MenuItemController.$inject = ['items'];
  function MenuItemController(items) {
    var menuItem = this;
    menuItem.itemList = items.menu_items;
  };
})();
