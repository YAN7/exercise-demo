import { routerRedux } from 'dva/router';
import { getStatBus, getAllDetail, getOnlineDetail, getOfflineDetail, getOnlinePayNum } from '../services/revenueDetailService';

const getDetailObj = {
  all: getAllDetail,
  online: getOnlineDetail,
  offline: getOfflineDetail,
};

export default {

  namespace: 'revenueDetail',

  state: {
    revenueDetail: [], // 营收明细
    storeDetail: {}, // 明细
    storeList: [], // 门店下的机器列表
    totalRevenue: {}, // 头部面板营收统计,
    classifyRevenue: [], // tab下分类统计
    payDetail: {}, // 支付详情
    machineDetail: {}, // 设备详情,
    onlinePayNum: 0, // 线上支付人数
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    /**
     * 请求头部面板营收详情
     */
    * getTotalRevenue({ payload }, { call, put }) {
      const { data } = yield call(getStatBus, payload);
      if (data && data.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            totalRevenue: data.result.list[0],
          }
        })
      }
    },
    /**
     * 请求分类详情
     * 线上 线下 门店 设备
     */
    * getClassifyRevenue({ payload }, { call, put }) {
      const { data } = yield call(getStatBus, payload);
      if (data && data.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            classifyRevenue: data.result.list,
          }
        })
      }
    },
    /**
     * 请求营收明细
     */
    * getRevenueDetail({ payload, queryType }, { call, put }) {
      const { data } = yield call(getDetailObj[queryType], payload);
      if (data && data.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            revenueDetail: data.result.list,
          },
        })
      }
    },
    /**
     * 跳转到门店
     */
    * gotoStore({ payload }, { call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          storeDetail: payload.item
        }
      });
      yield put(routerRedux.push({
        pathname: '/store/storeById.html',
        query: {
          type: payload.type,
        }
      }))
    },
    /**
     * 门店级别营收详情
     */
    * storeRevenue({ payload }, { call, put }) {
      const { data } = yield call(getStatBus, payload.params);
      if (data && data.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            storeList: data.result.list,
          }
        })
      }
    },
    /**
     * 获取线上支付人数
     */
    * queryOnlinePayNum({ payload }, { call, put }) {
      const { data } = yield call(getOnlinePayNum, payload);
      if (data && data.code === '200') {
        yield put({
          type: 'updateState',
          payload: {
            onlinePayNum: data.result.consumersNum,
          }
        })
      }
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },

};
