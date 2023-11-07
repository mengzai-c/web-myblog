const routes = ['https://static1.dreamzai.top/js', 'https://static2.dreamzai.top/js', 'https://blog.dreamzai.top/js'];
const jsUrl = 'mz.js';

loadFastestRoute(routes, jsUrl);

function loadFastestRoute(routes, jsUrl) {
    let fastestSpeed = Infinity; // 初始值设置为无穷大
    let fastestRoute = null;
  
    // 遍历所有路线
    for (const route of routes) {
      const startTime = Date.now(); // 记录开始时间
  
      // 发起请求获取JS文件
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${route}/${jsUrl}`, false); // 同步请求
      xhr.send();
  
      // 计算加载时间
      const endTime = Date.now();
      const loadTime = endTime - startTime;
  
      // 如果该路线加载时间更快，则更新最快速度和最快路线
      if (loadTime < fastestSpeed) {
        fastestSpeed = loadTime;
        fastestRoute = route;
      }
    }
  
    // 加载速度最快的JS文件
    const script = document.createElement('script');
    script.src = `${fastestRoute}/${jsUrl}`;
    document.head.appendChild(script);
  }
  