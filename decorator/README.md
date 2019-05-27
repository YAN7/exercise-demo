# 修饰器的理解练习

1. 修饰器可以用来修饰类或者函数.
2. 修饰器传一个参数,自带三个参数.这三个参数分别是:
  * target: 修饰类/函数本身(this),
  * key: 修饰类/函数名,
  * descriptor: 修饰类/函数的属性,一种有四个属性:
    - value
    - writable
    - enumerable
    - configurable