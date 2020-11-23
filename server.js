const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const history = require('connect-history-api-fallback')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig)

app.use(history())
app.use(devMiddleware(compiler))
app.use(
  hotMiddleware(compiler, {
    log: false,
    path: '/__what',
    heartbeat: 10000,
  }),
)
console.log(chalk.cyan('Starting the development server...\n'))
app.listen(9531)
