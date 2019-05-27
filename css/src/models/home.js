import { getStatBus } from '../services/revenueDetailService';

export default {
  namespace: 'home',
  state: {
    isAdmin: true,
    revenuneDetail: {
      all: 0,
      onlineEc: 0,
      offlineCoin: 0,
      onlineRate: 50,
      offlineRate: 50,
      offlinePutCoin: 0,
      dollNum: 0,
    }
  },
  effects: {
    *getDetail({ payload }, { call, put }) {
      const { data } = yield call(getStatBus, payload);
      let allData = data.result.list;
      try {
        let json = {
          all: allData[0].amount,
          onlineEc: Number(allData[0].wechatAmount) + Number(allData[0].alipayAmount),
          offlineCoin: allData[0].offlineOutCoinAmount,
          offlinePutCoin: allData[0].offlineInCoinDelta,
          dollNum: allData[0].dollNum
        };
        if (allData[0].amount <= 0) {
          json['onlineRate'] = 50;
          json['offlineRate'] = 50;
        } else {
          json['onlineRate'] = (Number(allData[0].wechatAmount) + Number(allData[0].alipayAmount) / allData[0].amount) * 100;
          json['offlineRate'] = (allData[0].offlineOutCoinAmount / allData[0].amount) * 100;
        }
        yield put({
          type: 'success',
          payload: json
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    success(state, action) {
      state.revenuneDetail = action.payload;
      return { ...state };
    }
  }
}