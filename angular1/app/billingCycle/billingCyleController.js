(function () {
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        '$location',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, $location, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function (response) {
                vm.billingCycle = {}
                vm.billingCycles = response.data
                tabs.show(vm, { tabList: true, tabCreate: true })
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

        vm.showTabUpdate = function (billingCycle) {
            console.log(billingCycle)
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = function (billingCycle) {
            console.log(billingCycle)
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabDelete: true })
        }


        vm.refresh()
    }
})()