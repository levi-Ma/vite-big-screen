## 需要处理的细节

- 图表组件初始化时的 loading
- flv.js 不能使用，等 issues
  解决方案: 因为 flv.js 用了 node 内置的 events。可以手动安装 yarn add events 或者使用 CDN 的方式引入 flv.js。

## 资源

- Vue3.0 中引入地图（谷歌+高德+腾讯+百度）
  https://segmentfault.com/a/1190000038878728
