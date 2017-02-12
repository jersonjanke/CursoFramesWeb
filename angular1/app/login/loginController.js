(function () {
    angular.module('primeiraApp').controller('LoginCtrl', [
        '$http',
        'api',
        '$state',
        LoginController
    ])

    function LoginController($http, api, $state) {
        const vm = this
        vm.getLoginInit = function (name, password) {
            $http.get(api.getLoginUrl()).then(function (response) {
                response.data.forEach(function (val) {
                    if(name === val.name && password === val.password){
                        console.log('Logou')
                        $state.go('billingCycles')
                    } else {
                        console.log('Não logou')
                    }
                })
            })
        }        
    }
})()