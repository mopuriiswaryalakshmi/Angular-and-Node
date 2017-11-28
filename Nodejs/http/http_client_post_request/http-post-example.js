const https = require('https')
const url = 'https://gist.github.com/mopuriiswaryalakshmi/c70cc45845e5f456f68c89c81ca58473'
https.get(url, (response) => {
    let rawData = '';
    response.on('data', (chunk) => {
        rawData += chunk 
    })
    response.on('end', () => {
        try{
            const parsedData = JSON.parse(rawData)
            console.log(parsedData)
        }catch (e) {
            console.error(e.message)
        }
    })
}).on('error', (error) => {
    console.error('Got error: ${error.message}')
})