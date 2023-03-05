import { errors } from './enums'
import axios, { defaultConfig } from './axios'


class ApiClient {

    get(url, config) {
        return this.apiClientBaseRequest(url, defaultConfig, "get");
    }

    post(url, config) {
        return this.apiClientBaseRequest(url, config, "post");
    }

    patch(url, config) {
        return this.apiClientBaseRequest(url, config, "patch");
    }

    delete(url, config) {
        return this.apiClientBaseRequest(url, config, "delete");
    }


    apiClientBaseRequest = (url, config = defaultConfig, method) => {

        let subject = new Subject

        axios({
            ...defaultConfig,
            method: method,
            url: url,
            ...config,
        }).then(response => {
            console.log(response.data)
        }).catch(err => {
            if(err.response)
                this.errorhandler(err.response.status, err.response.data, subject)
        }).finally(() => {

        })

        this.subHandher(Object.assign(defaultConfig, config), subject)

        return subject

    };

    subHandher = (config, subject) => {

        subject.subscribe(res => {
                this.showNotifyMessage(config, res.detail)
                this.showConsoleMessage(config, res)

            }, err => {
                this.showNotifyMessage(config, err)
                this.showConsoleMessage(config, err)
            }
            , () => console.log('done')
        )

    }

    errorhandler = (errorCode, errResponse, subject) => {

        if (errorCode == errors.NOT_FOUND) {
            console.log(errResponse)
        }
        if (errorCode == errors.ERROR) {
            console.log(errResponse)
        }
        else {
            console.log(errResponse)
        }
    }


    showNotifyMessage = (config, response) => {
        if (config.notifyMessage) {
            alert(JSON.stringify(response))

        }
    }

    showConsoleMessage = (config, response) => {
        if (config.consoleMessage) {
            console.log(response)
        }
    }

}

///400 bad request
// export const badRequestHandler = (errData) => {
//     return new Observable(subscribe => {
//
//         if (errData.detail) {
//             subscribe.next(errData.detail)
//         }
//
//         else {
//             for (const [key, value] of Object.entries(errData)) {
//                 if (value instanceof Array) {
//                     value.map(errString => {
//                         let errArray = [key, errString]
//                         subscribe.next(errArray)
//                     })
//                 }
//             }
//         }
//
//     })
// }


export const apiClient = new ApiClient();