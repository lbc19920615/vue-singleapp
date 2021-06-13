export const remoteOptionsDemo1Mixin = {
  methods: {
    myRequestMethod() {
      return new Promise(resolve => {
        const options = [
          {
            id: '111',
            name: '1111'
          }
        ]
        setTimeout(() => {
          resolve(options)
        }, 1000)
      })
    }
  }
}
