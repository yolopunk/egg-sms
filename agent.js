'use strict'

const sms = require('./lib/sms')

module.exports = agent => {
  const useAgent = agent.config.sms.useAgent
  if (useAgent) sms(agent)
}
