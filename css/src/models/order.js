/**
 * 订单列表
 */

const config = {
  pagesize: 20,
};

const items = [
  { name: 'afsdf1', type: 1, time: '17:56:02' },
  { name: 'afsdf2', type: 2, time: '17:56:02' },
  { name: 'afsdf3', type: 2, time: '17:56:02' },
  { name: 'afsdf4', type: 1, time: '17:56:02' },
  { name: 'afsdf5', type: 2, time: '17:56:02' },
  { name: 'afsdf6', type: 1, time: '17:56:02' },
  { name: 'afsdf7', type: 1, time: '17:56:02' },
  { name: 'afsdf8', type: 1, time: '17:56:02' },
  { name: 'afsdf9', type: 1, time: '17:56:02' },
  { name: 'afsdf0', type: 1, time: '17:56:02' },
]

function appOrderList(data) {
  return new Promise(res => {
    setTimeout(() => {
      res({ items, current: data.currentPage })
    }, 500);
  })
}

export default {

  namespace: 'orderList',

  state: {
    loading: false,
    data: [],
    currentPage: 0,
  },

  effects: {
    * queryNextList(action, { call, put, select }) {
      const { currentPage, loading, data } = yield select(s => s.orderList);
      if (loading) return;
      yield put({ type: 'set', payload: { loading: true } });
      try {
        const res = yield call(appOrderList, {
          currentPage: currentPage + 1,
          ...config,
        });
        yield put({
          type: 'set',
          payload: {
            loading: false,
            currentPage: res.current,
            data: data.concat(res.items)
          }
        });
      } catch (error) {
        yield put({ type: 'set', payload: { loading: true } });
      }
    },
  },

  reducers: {
    set(state, action) {
      return { ...state, ...action.payload };
    },
  },

};