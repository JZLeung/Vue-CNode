import Vue from 'vue'

module.exports = (params) => {
    Vue.http.options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
    }

    Vue.http.options.emulateJSON = true
    Vue
        .http({
            url: params.url,
            method: params.method,
            data: params.data || {},
            params: params.params || {},
            cache: true
        })
        .then((response) => {
            let data = response.data
            params.callback(data)
        })
        .catch((response) => {
            console.log(response);
        });
}
