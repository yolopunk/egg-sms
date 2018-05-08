# egg-sms

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sms.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sms
[travis-image]: https://img.shields.io/travis/yolopunk/egg-sms.svg?style=flat-square
[travis-url]: https://travis-ci.org/yolopunk/egg-sms
[codecov-image]: https://img.shields.io/codecov/c/github/yolopunk/egg-sms.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yolopunk/egg-sms?branch=master
[david-image]: https://img.shields.io/david/yolopunk/egg-sms.svg?style=flat-square
[david-url]: https://david-dm.org/yolopunk/egg-sms
[snyk-image]: https://snyk.io/test/npm/egg-sms/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sms
[download-image]: https://img.shields.io/npm/dm/egg-sms.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sms

<!--
Description here.
-->

## Install

```bash
$ npm i egg-sms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sms = {
  enable: true,
  package: 'egg-sms'
}
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sms = {
  client: {
    accessKeyId: 'your access key',
    secretAccessKey: 'your access secret'
  }
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## API
detail on ali doc [here](https://help.aliyun.com/document_detail/57458.html)
* sms.sendSMS(params)
* sms.queryDetail(params)
* sms.receiveMsg(params)

## Example
You can acquire sms instance on `app` or `ctx`
```js
  // {app_root}/app/controller/sms.js
  ...
  async send () {
    await this.ctx.sms.sendSMS({
      PhoneNumbers: '1500000000',
      SignName: '云通信产品',
      TemplateCode: 'SMS_000000',
      TemplateParam: '{"code":"12345"}'
    })
  }
  ...
```

## Questions & Suggestions

Please open an issue [here](https://github.com/yolopunk/egg-sms/issues).

## License

[MIT](LICENSE)
