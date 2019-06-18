/* eslint-disable */
function loadJS(url) {
    let xmlHttp = null
    if (window.ActiveXObject) { // IE
        // IE6以及以后版本中可以使用
        xmlHttp = new ActiveXObject('Msxml2.XMLHTTP')
    } else if (window.XMLHttpRequest) { // Firefox，Opera 8.0+，Safari，Chrome
        xmlHttp = new XMLHttpRequest()
    }
    // 采用同步加载
    xmlHttp.open('GET', url, false)
    // 发送同步请求，如果浏览器为Chrome或Opera，必须发布后才能运行，不然会报错
    xmlHttp.send(null)
    // 4代表数据发送完毕
    if (xmlHttp.readyState === 4) {
        // 0为访问的本地，200到300代表访问服务器成功，304代表没做修改访问的是缓存
        if ((xmlHttp.status >= 200 && xmlHttp.status < 300)
            || xmlHttp.status === 0
            || xmlHttp.status === 304) {
            // const myHead = document.getElementsByTagName('HEAD').item(0)
            // const myScript = document.createElement('script')
            // myScript.language = 'javascript'
            // myScript.type = 'text/javascript'
            // try {
            //     // IE8以及以下不支持这种方式，需要通过text属性来设置
            //     myScript.appendChild(document.createTextNode(xmlHttp.responseText))
            // } catch (ex) {
            //     myScript.text = xmlHttp.responseText
            // }
            // myHead.appendChild(myScript)
            // return new Promise(res => res(xmlHttp.responseText))

            return new Promise(res => res(eval(`(function (exports, require, module, __filename, __dirname) { console.log(123, exports) ${xmlHttp.responseText}})()`)))
            // return import(xmlHttp.responseText)
        }

        return false
    }

    return false
}

console.log('exports', exports)

