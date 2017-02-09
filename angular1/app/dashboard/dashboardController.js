(function () {
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        'api',
        DashboardController
    ])

    function DashboardController($http, api) {
        const vm = this
        vm.getSummary = function () {            
            $http.get(api.getBillingSummary()).then(function (response) {
                const {credit = 0, debt = 0} = response.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }

        vm.getSummary()
    }
})()