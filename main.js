const PayTrio = require('./pay-trio.js');

let apiUrl = 'central.pay-trio.com'
let appSecret //  your application secret
let shopId    //  your shop id

PayTrio.init(apiUrl, appSecret, shopId)

/**
 * Request Examples
 */

/**
 * withdraw
 */
// PayTrio
//     .withdrawAction({
//         payway: 'card_privat_uah',
//         amount: 80,
//         amount_type: 'shop_amount',
//         purse_currency: '980',
//         account: '5168********8385',
//         payment_id: Math.rand() * 100000
//     })

/**
 * check account
 */
// PayTrio
//     .checkAccountAction({
//          payway: 'card_privat_uah',
//          amount: 80,
//          account: '5168********8385'
//     })
//     .then((response) => {
//         console.log(response);
//     })

/**
 * preWithdraw
 */
// PayTrio
//     .preWithdrawAction({
//         payway: 'card_uah',
//         purse_currency: 980,
//         amount_type: 'shop_amount',
//         amount: 80
//     })
//     .then((response) => {
//         console.log(response);
//     })

/**
 * invoice
 */
// PayTrio
//     .invoiceAction({
//         shop_invoice_id: '<account.id>:<package.id>:' + Math.random(),
//         payway: 'card_uah',
//         currency: 980,
//         amount: 10
//     })
//     .then((response) => {
//         console.log(response);
//     });


/**
 * preInvoice
 */
// PayTrio
//     .preInvoiceAction({
//         payway: 'card_uah',
//         currency: 980,
//         amount: 5
//     })
//     .then((response) => {
//         console.log(response);
//     });
