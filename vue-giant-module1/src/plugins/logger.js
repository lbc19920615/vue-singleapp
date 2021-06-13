import VueLogger from 'vuejs-logger'
export function bootstrapLoggerPlugin(Vue, isProduction) {
  const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
  }
  Vue.use(VueLogger, options)
}
