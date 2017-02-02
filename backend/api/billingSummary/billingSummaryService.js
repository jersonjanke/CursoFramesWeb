const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

//Mais uma função middleware
function getSummary(req, res) {
    BillingCycle.aggregate({
        $projct: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        }, {
            $projct: { _id: 0, credit: 1, debt: 1 }
        }, function (error, result) {
            if (error) {
                res.status(500).json({ erros: [error] })
            } else {
                res.json(_.defaults(result[0], { credit: 0, debt: 0 }))
            }
        })
}