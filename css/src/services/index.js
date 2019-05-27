/** 构造函数 */
import request from '../utils/request';
import configs from '../utils/config';

/**
 * 传入{key:url}结构的对象，构造一个service，替代原本的大量重复代码
 * 会改变传入的json路径对象，给里面每一项添加前缀
 * @param {Object} paths
 * @returns {Object}
 */
export default function makeApi(paths) {
  const obj = {};
  for (const k in paths) {
    // paths[k] = `${configs.APIV1}${paths[k]}`;
    obj[k] = (data) => {
      let form = new URLSearchParams();
      for (let i in data) {
        form.append(i, data[i]);
      };
      // if (process.env.NODE_ENV !== 'production') {
      form.append('$openId', 'oGkk8wJBN-Vk64ntC3hYRnUJ7Lic');
      // }
      let params = {
        method: 'POST',
        body: form,
        url: paths[k],
      };
      return request(params);
    }
  }
  return obj;
}
