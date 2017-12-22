'use strict'

const assert = require('assert')
const SMSClient = require('@alicloud/sms-sdk')
const _ = require('lodash')

function checkSMSConfig (config) {
  assert(config.accessKeyId && config.secretAccessKey,
    '[egg-sms] Must set `accessKeyId` and `secretAccessKey` in sms\'s config')
}

module.exports = app => {
  app.addSingleton('sms', (config, app) => {
    checkSMSConfig(config)
    return new SMSClient(_.pick(config, 'accessKeyId', 'secretAccessKey'))
  })

  app.createSMS = app.sms.createInstance.bind(app.sms)
}
