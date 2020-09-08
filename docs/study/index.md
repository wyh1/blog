---
title: 排序算法
date: 2020-08-08
sidebar: 'auto'
categories:
 - 前端
tags:
 - 排序
 - 算法
publish: true
---

## 排序算法

### 冒泡排序

- 类似于冒泡泡，从第一个数开始，依次比较相邻的两个数，如果顺序不正确，就交换.

- 每一次循环，会经过交换将最大（最小）的数，慢慢的浮到数组（序列）的最顶端，故名“冒泡排序”

``` typescript
// 冒泡排序
static bubble(arrs: Array<number>): Array<number> {
    let temp: number = 0, //用于交换的变量
        flag: boolean = false // 用于优化的变量，如果一轮循环对比后没有发生交换，则说明排序完成，跳出循环不再对比
    for (let i = 0; i < arrs.length - 1; i++) {
      for (let j = 0; j < arrs.length - 1 - i; j++) { // - i 是因为就会交换一个最大的数在最后，所以不用再比较这个数，总次数就减去它
        if (arrs[j] > arrs[j + 1]) { //如果比较的是最小的，改变一下大于号为小于号
          temp = arrs[j]
          arrs[j] = arrs[j + 1]
          arrs[j + 1] = temp
          flag = true
        }
      }
      if(flag){
        flag = false
      }else {
        break
      }
    }
    return arrs
  }
```

### 选择排序

- 第一次循环，从所有数中比较选出最小（最大）的数，放在数组（序列）的起始位置

- 然后再从剩余的未排序元素中选出最小（最大）的数，放在数组（序列）的后面

- 以此类推，直到待排序元素的个数为零。

``` typescript
// 选择排序
static select(arrs: Array<number>): Array<number> {
    let min: number, //用于记录当前循环最小(最大)的变量
        index: number //用于记录数组下标的变量
    for (let i = 0; i < arrs.length - 1; i++) {
      min = arrs[i]
      index = 0
      for (let j = i + 1; j < arrs.length - 1; j++) {
        if(min > arrs[j]){
          min = arrs[j]
          index = j
        }
      }
      if (index) {
        arrs[index] = arrs[i]
        arrs[i] = min
      }
    }
    return arrs
  }
```

### 插入排序

- 类似于抓扑克牌，第一张为排好的，然后后面每抓一张牌都从右至左依次和手牌已经排好顺序的牌对比，找到相对应的位置。

``` typescript
//插入排序
static inset(arrs: Array<number>): Array<number> {
    let key:number,
        j: number
    for (let i = 1; i < arrs.length; i++) {
      key = arrs[i]
      j = i -1
      while(j >= 0 && arrs[j] >= key){
        arrs[j + 1] = arrs[j]
        j--
      }
      arrs[j + 1] = key
    }
    return arrs
  }
```

### 希尔排序

- 二分法加插入排序

``` typescript
static shell(arrs: Array<number>): Array<number> {
    let length: number = arrs.length
    for (let group = Math.floor(length / 2) ; group > 0; group = Math.floor(group / 2)) {
      for (let i = group; i < length; i++) {
        for (let j = i - group; j >= 0 && arrs[j] > arrs[j + 1]; j-= group) {
          let temp = arr[j]
          arr[j] = arr[j + group]
          arr[group + j] = temp
        }
      }
    }
    return arrs
  }
```

## JavaScript

### 防抖与节流

#### 防抖(debounce)

- 指在时间n内，函数被触发多次，但是只执行一次，执行最新的触发。也就是在时间n内，碰到新的触发，就清除之前的，重新计时。

- 以最后一个乘客为准，再等30分钟，如果30分钟内都没有人上车，就会发车。如果在期间有人上车，那么重新等30分钟。这就是防抖的过程。

- 缺点：如果事件在规定的时间间隔内被不断的触发，则调用方法会被不断的延迟。

``` javascript
//防抖debounce代码：
function debounce(fn) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout);
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, 500);
    };
}
// 处理函数
function handle() {
    console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handle));
```

#### 节流(throttle)

- 当持续触发某个事件时，会有规律的每隔时间n就执行一次函数。

- 比如公交车站等车，每经过30分钟就会发车，不管后面还有没有人都会发车。这就是节流的过程。

``` javascript
//节流throttle代码：
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
         // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
         // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => {
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, 500);
    };
}

function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```

#### 防抖与节流的区别

对新触发执行的时间点不一样

- 函数节流：是确保函数特定的时间内至多执行一次。

- 函数防抖：是函数在特定的时间内不被再调用后执行。

![防抖与节流对比.png](/image/防抖与节流对比.png)

#### 参考文献

[节流和防抖的区别，以及如何实现](https://www.jianshu.com/p/b5fcb9a04b17)

### 跨域

- js跨域是指通过js在不同的域之间进行数据传输或通信，比如用ajax向一个不同的域请求数据，或者通过js获取页面中不同域的框架中(iframe)的数据。

- 只要协议、域名、端口有任何一个不同，都被当作是不同的域。

#### 解决方法

1. 通过jsonp跨域

2. 使用跨域资源共享（CORS）来跨域
