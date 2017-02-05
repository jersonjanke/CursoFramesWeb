(function () {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        '$location',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, $location, msgs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function (response) {
                console.log(response.data)
                vm.billingCycle = {}
                vm.billingCycles = response.data
            })
        }

        vm.create = function (response) {
            $http.post(url, vm.billingCycle)
                .then(function (response) {
                    vm.refresh()
                    msgs.addSuccess('Salvo com sucesso!')
                }, function (response) {
                    msgs.addError(response.data.errors)
                })
        }
        vm.refresh()
    }
})()