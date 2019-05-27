export default {
  namespace: 'statistical',
  state: {
    selStore: [],
    storeAll: { name: '全部门店', value: '123' },
    items: [
      { name: '天河城百货4楼', value: 20 },
      { name: '天汇广场4楼', value: 47 },
      { name: '摩登百货3楼', value: 39 },
      { name: '天河城百货8楼', value: 20 },
      { name: '天汇广场9楼', value: 47 },
      { name: '天河城百货4楼', note: '1asd', value: 20 },
      { name: '天河城百货4楼', note: '1asd', value: 20 },
      { name: '天河城百货4楼', note: '1asd', value: 20 },
    ],
    startDate: '',
    endDate: '',
    selCompony: '',
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}