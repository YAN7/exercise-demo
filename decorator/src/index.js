// 增加防御力
const decorateArmour = (target, key, descriptor) => {
  const method = descriptor.value;
  const moreDef = 100;
  let ret;
  descriptor.value = (...args) => {
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  };
  return descriptor;
};

// 增加攻击力
const decorateLight = (target, key, descriptor) => {
  const method = descriptor.value;
  const moreAtk = 50;
  let ret;
  descriptor.value = (...args) => {
    args[1] += moreAtk;
    ret = method.apply(target, args);
    return ret;
  };
  return descriptor;
};

// 添加飞行功能
const addFly = canFly => target => {
  target.canFly = canFly;
  const extra = canFly ? ' (技能加成: 飞行)' : '';
  const method = target.prototype.toString;
  target.prototype.toString = (...args) => {
    return method.apply(target.prototype, args) + extra;
  };
  return target;
};

@addFly(true)
export default class IronMan {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }
  @decorateArmour
  @decorateLight
  init(def, atk, hp) {
    this.def = def;
    this.atk = atk;
    this.hp = hp;
  }
  toString() {
    return `防御力:${this.def} 攻击力:${this.atk} 血量: ${this.hp}`;
  }
}

const tony = new IronMan();

console.log(`当前状态 ==> ${tony}`);
