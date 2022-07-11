# http

## 状态码分类

- 1xx服务器收到请求
- 2xx请求成功，如200
- 3xx重定向，如302
- 4xx客户端错误，如404
- 5xx服务端错误，如500

## http常见状态码

- 200成功
- 301永久重定向
- 302临时重定向
- 304资源未被修改
- 404资源未找到
- 403没有权限
- 500服务器错误
- 504网关超时

## 传统的methods

- get获取数据
- post提交数据

## 现在methods

- get获取数据
- post新建数据
- patch/put更新数据
- delete删除数据

## Restful API

- 一种新的API设计方法
- 传统的API设计：把每个url当作一个功能
- Restful 传统的API设计：把每个url当作一个唯一的资源

## http headers

- Accept浏览器可接收的数据格式
- Accept-Encoding浏览器可接收的压缩算法,如gzip
- Accept-Languange浏览器可接收的语言，如zh-CN
- Connection:keep-alive一次TCP连接重复使用
- Cookie
- Host请求域名
- Use-Agent(UA)浏览器信息
- Content-type发送数据的格式，如application/json

## Response headers

- Content-type返回数据格式，如application/json
- Content-length返回数据的大小，多少字节
- Content-Encoding返回数据的压缩算法，如gzip
- set-Cookie
- Cache-Control 控制强制缓存的逻辑
- 最大缓存时间Cache-Control:max-age=518400（单位：秒）
- no-cache不用强制缓存，由服务端处理
- no-store客户端和服务端不用强制缓存
- private只允许用户缓存
- public允许中间代理
- last-Modified 资源最后修改时间
- Etag 资源唯一标识(字符串，和人类指纹一样，是唯一的)
- last-Modified-Since 再次请求last-Modified的值
- If-None-Match 再次请求Etag的只

## 自定义header

- headers:{'X-Requested-With':XXX}

## http和https区别

- http是明文传输，敏感信息容易被劫持
- https=http + 加密，劫持了无法理解