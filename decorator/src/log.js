/*
 * @Author: YAN7
 * @Date: 2018-04-08 10:36:34
 * @Last Modified by: YAN7
 * @Last Modified time: 2018-04-08 12:21:02
 */
/**
 * @param {*} type: 传入参数
 * @param {*} target: 修饰函数/类
 * @param {*} name: 修饰函数/类名(函数名)
 * @param {*} descriptor: 修饰函数/类的属性
 */
const log = type => (target, name, descriptor) => {
  const method = descriptor.value; // 缓存被装饰的函数
  console.log('name', descriptor);
  descriptor.value = (...args) => {  // 改写被装饰的函数
    console.info(`(${type}) 正在执行: ${name}(${args}) = ?`);
    let ret;
    try {
      ret = method.apply(target, args);
      console.info(`(${type}) 成功: ${name}(${args}) => ${ret}`);
    } catch (err) {
      console.error(`(${type}) 失败: ${name}(${args}) => ${err}`);
    }
    return ret;
  };
};

class IronMan {
  @log('IconMan 自检阶段')
  check() {
    return '检查完毕';
  }
  @log('发起攻击')
  attack() {
    return '击倒敌人';
  }
  @log('机体故障')
  error() {
    return 'Something is wrong!';
  }
}

const tony = new IronMan();
tony.check();
// tony.attack();
// tony.error();

