/**
 * 订单列表
 */

const config = {
    pagesize: 20,
};

const items = [
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '银行卡到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
    { name: '2014-06-17', mon: 2341234.32, type: '微信到账' },
]

function appOrderList(data) {
    return new Promise(res => {
        setTimeout(() => {
            res({ items, current: data.currentPage })
        }, 500);
    })
}

export default {

    namespace: 'revenueManage',

    state: {
        loading: false,
        data: [],
        currentPage: 0,
    },

    effects: {
        * queryNextList(action, { call, put, select }) {
            const { currentPage, loading, data } = yield select(s => s.revenueManage);
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