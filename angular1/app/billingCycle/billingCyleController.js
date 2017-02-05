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

        vm.create = function (response) {
            console.log(vm.billingCycle)

            $http.post(url, vm.billingCycle)
                .then(function (response) {
                    msgs.addSuccess('Salvo com sucesso!')
                }, function (response) {
                    console.log(response.data)
                    msgs.addError(response.data.errors)
                })

        }
    }
})()