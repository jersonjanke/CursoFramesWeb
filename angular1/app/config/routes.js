angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('login', {
            url: "/login",
            templateUrl: "login/login.html"
        }).state('billingCycles', {
            url: "/billingCycles?page",
            templateUrl: "billingCycle/tabs.html"
        }).state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        })

        $urlRouterProvider.otherwise('/login')
    }
])