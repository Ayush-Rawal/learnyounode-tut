const http = require("http")
const bl = require('bl')

function getData (url) {
    return new Promise(function (resolve, reject) {
        http.get(url, (response) => {
            response.setEncoding('utf-8')
            response.pipe(bl((err, data) => {
                if (err) {
                    reject(console.error(err))
                }
                data = data.toString()
                resolve(data)
            }))
        })
    })
}

async function juggle () {
    let [res1, res2, res3] = await Promise.all([getData(process.argv[2]), getData(process.argv[3]), getData(process.argv[4])])
    console.log(res1)
    console.log(res2)
    console.log(res3)
}

juggle()
