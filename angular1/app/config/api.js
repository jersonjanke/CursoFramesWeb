(function () {
    angular.module('primeiraApp').factory('api', [ApiServer])

    function ApiServer() {

        //const url = 'http://ec2-52-67-125-206.sa-east-1.compute.amazonaws.com:8080/api/'
        const url = 'http://localhost:8080/api/'

        /**
         * Retorna os ciclos de pagamento
         */
        function getBillingCycles() {
            return url + 'billingCycles'
        }

        /**
         * Retorna dados do dashboard crédito, débito e total
         */
        function getBillingSummary() {
            return url + 'billingSummary'
        }

        function getLoginUrl() {
            return url + 'login'
        }

        return { getBillingCycles, getBillingSummary, getLoginUrl }
    }
})()