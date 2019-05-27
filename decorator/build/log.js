'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/*
 * @Author: YAN7
 * @Date: 2018-04-08 10:36:34
 * @Last Modified by: YAN7
 * @Last Modified time: 2018-04-08 12:20:41
 */
/**
 * @param {*} type: 传入参数
 * @param {*} target: 修饰函数/类
 * @param {*} name: 修饰函数/类名(函数名)
 * @param {*} descriptor: 修饰函数/类的属性
 */
var log = function log(type) {
  return function (target, name, descriptor) {
    var method = descriptor.value; // 缓存被装饰的函数
    console.log('name', descriptor);
    descriptor.value = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // 改写被装饰的函数
      console.info('(' + type + ') \u6B63\u5728\u6267\u884C: ' + name + '(' + args + ') = ?');
      var ret = void 0;
      try {
        ret = method.apply(target, args);
        console.info('(' + type + ') \u6210\u529F: ' + name + '(' + args + ') => ' + ret);
      } catch (err) {
        console.error('(' + type + ') \u5931\u8D25: ' + name + '(' + args + ') => ' + err);
      }
      return ret;
    };
  };
};

var IronMan = (_dec = log('IconMan 自检阶段'), _dec2 = log('发起攻击'), _dec3 = log('机体故障'), (_class = function () {
  function IronMan() {
    _classCallCheck(this, IronMan);
  }

  _createClass(IronMan, [{
    key: 'check',
    value: function check() {
      return '检查完毕';
    }
  }, {
    key: 'attack',
    value: function attack() {
      return '击倒敌人';
    }
  }, {
    key: 'error',
    value: function error() {
      return 'Something is wrong!';
    }
  }]);

  return IronMan;
}(), (_applyDecoratedDescriptor(_class.prototype, 'check', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'check'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'attack', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'attack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'error', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'error'), _class.prototype)), _class));


var tony = new IronMan();
tony.check();
// tony.attack();
// tony.error();