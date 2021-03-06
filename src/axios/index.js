import JSONP from 'jsonp'
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JSONP(options.url, {
        param: 'callback'
      }, function (error, response) {
          if(response.status === 'success'){
            resolve(response)
          }else {
            reject(response.message)
          }
      })
    })
  }
}