
# 第二章 let和const命令

### 2.1 let命令
#### 2.1.1 具有块级作用域

1. let具有块级作用域，只在声明的代码块内有效，代码块是指`{}`包裹起来的代码块。
	* let的块级作用域特性很适合用在for循环中。

	```javascript
	let arr = [];
	for (let i = 0; i < 5; i++) {
	  arr[i] = function () {
	    console.log(i);
	  }
	}
	
	arr[2](); // 2 如果换成2，则输出5
	```
	* 这是因为用let的话，每一次循环i的值都只在该次循环中有效，所以每次都是不同的i值，用var的话就是全局只有一个i。执行完循环再打印i值，当然是5了。

2. 值得注意的是，设置循环变量的那部分是一个父作用域，而循环体内部是一个子作用域，以下的代码可以证明：

	```javascript
	for (let i = 0; i < 3; i++) {
	  let i = "abc";
	  console.log(i);
	}
	// 'abc' 'abc' 'abc'
	```
	
	* 上面的代码输出三个‘abc’，因为let不能重复声明，所以可以证明声明循环变量的作用域和循环体内部的作用域不属于同一个作用域，而循环体内部能拿到声明循环变量，所以可以证明这两者是父子作用域的关系。

#### 2.1.2 不存在变量提升

#### 2.1.3 暂时性死区
1. 在代码块内，使用let声明变量之前，该变量都是不可用的。这在语法上称为暂时性死区（TDZ）；
2. 暂时性死区的本质是只要进入当前作用域，所要使用的变量机就已经存在，但是在声明该变量之前不能获取和使用。

```javascript
if (true) {
  // 暂时性死区（tdz）开始 
  temp = 123;
  let temp;
  // 暂时性死区（tdz）结束
}
```

#### 2.1.4不允许重复声明
1. let不允许在同一个作用域内重复声明变量

#### 2.2 块级作用域
1. 块级作用域的一大作用是使得变量不能再随意变成全局变量了，以前利用立即执行函数（IIFE）来获取局部变量的做法也不再有存在的必要了。

	```javascript
	// 获取局部变量
	// ES5
	(function() {
	  var temp = '';
	})()
	// ES6
	{
	  let temp = '';
	}
	```

2. 块级作用域与函数声明
	* 块级作用域中是可以声明函数，
	* 为了兼容以前的旧代码，其行为和声明变量不一样，和var声明变量一样，存在变量提升，会将函数提升到块级作用域顶部，
	* 因此不推荐在块级作用域中声明函数；

#### 2.2.3 do表达式
1. 目前do表达式只是一个提案，它的作用是接收块级作用域的返回值；

### 2.3 const命令

#### 2.3.1 基本本质和let差不错
1. 不允许重复声明；
2. 存在暂时性死区；
3. 具有块级作用域；
4. 一旦声明，就必须赋值，不允许只声明不赋值。

#### 2.3.2 本质

1. const保证的不是变量的值不得改动，而是保证变量指向的内存地址不得改动；
	* 因为对于简单类型（string，number，boolean），它们的值就保存在指向的内存地址中，所以简单类型一旦用consr声明并赋值，就不能再改动
	* 对于复合类型的数据（主要是对象和数组），变量指向的内存地址保存的只是一个指针，const只能保证保证的是这个变量的指针不变，对于这个变量你可以随便增删数据，但是不能改变指针。
	
	```javascript
	const a = {};
	a.haha = 123; // 成功
	a.lala = 456; //成功
	a = { haha: 123 }; // 失败
	```
	* 将对象真正冻结的方法是用`Object.freeze()`;

### 2.4 顶层对象的属性

#### 2.4.1 let、const声明的变量不属于顶层对象的属性

1. var声明的全变变量同时也是顶层对象的属性。
	```javascript
	var a = 1;
	console.log(window.a); // 1
	```
2. 顶层对象在浏览器环境中指的是window对象，在node环境中指的是global对象。
3. let和const声明的变量不会自动变成顶层对象的属性。

#### 2.4.2 在不同环境中获取顶层对象
1. 在不同环境中顶层对象是不一样的；
	* 在浏览器环境中是window；
	* 在node中是global；
	* 在Web Worker中是self；
2. 在不同的环境中，this都可以指向顶层对象，但是也有特殊情况：
	* 在node模块和ES6模块中，this返回的是当前模块；
	* 对于函数中的this，如果函数不是作为对象的属性来调用，那么this执行顶层对象，但是在严格模式中，this返回undefined；
3. 在不同环境中获取顶层对象的方法：

	```javascript
	// 获取顶级对象
	//  方法1
	let globalObj = (typeof window !== 'undefined') ? window :
	  (typeof global !== 'undefined' &&
	    typeof process === 'object' &&
	    typeof require === 'function'
	  ) ? global
	    : this;
	// 方法2
	const getGlobal = () => {
	  if (typeof self !== 'undefined') { return self };
	  if (typeof window !== 'undefined') { return window };
	  if (typeof global !== 'undefined') { return global };
	  throw new Error('can\' get this');
	} 
	```

