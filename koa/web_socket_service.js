const path = require('path')
const fileUtils = require('./utils/file_utils')
const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 9998
})

module.exports.listen = () => {
  wss.on('connection', client => {
    // console.log('有客户端连接成功');

    client.on('message', async msg => {
      // console.log('客户端发送数据给服务端了：', msg);

      let payload = JSON.parse(msg)
      const action = payload.action
      if (action === 'getData') {
        // trend seller map rank hot stock
        let filePath = `./data/${payload.chartName}.json`
        filePath = path.join(__dirname, filePath)
      
        const result = await fileUtils.getFileJsonData(filePath)
        
        payload.data = result
        
        client.send(JSON.stringify(payload))
      } else {

        wss.clients.forEach(client => {
          client.send(msg)
        })
      }

      // client.send('hello 我是后端')
    })
  })

}

