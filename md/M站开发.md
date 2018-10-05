### M站开发

>是适用于在手机浏览器上浏览的互联网WEB网站 mobile移动端

1. 移动端布局
  >[移动端高清、多屏适配方案](https://www.cnblogs.com/cench/p/5314044.html)
  >[参考文献](https://www.cnblogs.com/jide/p/7051006.html)

  retina （视网膜高清屏） dpr 2 3 --- 1

  移动端设计图尺寸   2倍/3倍   一像素边框   响应式图片。。。

  viewport:  
  >[参考文献](https://www.cnblogs.com/2050/p/3877280.html)
  >移动设备上的viewport就是设备的屏幕上能用来显示我们的网页的那一块区域  不局限于浏览器可视区域的大小

  ppk把移动设备上的viewport分为layout viewport  、 visual viewport 和 ideal viewport  三类，其中的ideal 

  viewport是最适合移动设备的viewport，ideal viewport的宽度等于移动设备的屏幕宽度

  ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。

  devicePixelRatio属性：
  >设备物理像素和设备独立像素的比例  独立像素相当于css中的ps 在移动端中1px要代表更多的东西 不然会太小看不清

  meta：
  >利用meta标签来控制viewport 

   移动设备默认的viewport是layout viewport，也就是那个比屏幕要宽的viewport，但在进行移动设备网站的开发时，我们需要的是ideal viewport。

  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  ```
  visual viewport宽度 = ideal viewport宽度  / 当前缩放值
  当前缩放值 = ideal viewport宽度  / visual viewport宽度

2. 移动端事件

3.  gulp    gulp-webpack   .... 

4. 插件

  swiper，better-scroll  ... 
>[better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/installation.html)