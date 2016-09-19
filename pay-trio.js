/**
 * PayTrio REST API Node.js class
 * by binarnik25
 */

'use strict'

const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

class PayTrio {
    static init(endpoint, secret, id) {
        this.endpoint = endpoint
        this.secret = secret
        this.id = id
    }

    /**
     * Build sign by PayTrio rules
     */
    static sign(params) {
        let keys = []

        for (let key in params) {
            params.hasOwnProperty(key) ? keys.push(key) : ''
        }

        let values = keys.sort().map(key => params[key])
        let data = values.join(':') + this.secret

        return crypto.createHash('md5').update(data).digest('hex')
    }

    /**
     * Getting params to request
     */
    static params(options) {
        options['shop_id'] = this.id;
        options['sign'] = this.sign(options);

        return options;
    }

    /**
     * Form and send request to API service
     */
    static request(path, method, data) {
        let options = {
            path: '/' + path,
            port: 443,
            hostname: this.endpoint,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return new Promise((resolve, reject) => {
            let request = https.request(options, (response) => {
                let responseData = ''
                response.on('data', (chunk) => {
                    responseData += chunk
                })

                response.on('end', () => resolve(JSON.parse(responseData)))
                response.on('error', reject)
            })

            request.write(JSON.stringify(data))
            request.end()
        })
    }

    static preInvoiceAction(options) {
        return this.request('pre_invoice', 'POST', this.params(options));
    }

    static invoiceAction(options) {
        return this.request('invoice', 'POST', this.params(options))
    }

    static preWithdrawAction(options) {
        return this.request('pre_withdraw', 'POST', this.params(options))
    }

    static checkAccountAction(options) {
        return this.request('check_account', 'POST', this.params(options))
    }

    static withdrawAction(options) {
        return this.request('withdraw', 'POST', this.params(options))
    }

}

module.exports = PayTrio
