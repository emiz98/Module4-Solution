(function () {
    angular.module('MenuApp')
        .config(RoutesConfig)

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        //set up ui states
        $stateProvider
            //Home Page
            .state('home', {
                url: '/',
                //home.template.html
                templateUrl: 'templates/home.template.html'
            })

            .state('category', {
                //category template.html
                url: '/category',
                templateUrl: 'templates/categories.template.html',
                controller: 'CategoriesController as mainList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('item', {
                //commented for using url as param value instead of url
                url: '/item/{shortName}',
                //menuitem.html
                templateUrl: 'templates/menuItem.template.html',
                controller: 'menuItemController as menuItem',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.shortName);
                    }]
                }
            });

  }

})();
