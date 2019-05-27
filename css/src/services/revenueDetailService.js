import makeApi from './index';

const paths = {
    getAllDetail: 'http://doll3.allpaycloud.cn/management_new/m/statcenter/m3GetDetailAllBus',
    getOnlineDetail: 'http://doll3.allpaycloud.cn/management_new/m/statcenter/m3GetDetailOnlineBus',
    getOfflineDetail: '/http://doll3.allpaycloud.cn/management_new/mstatcenter/m3GetDetailOfflineBus',
    getStatBus: 'http://doll3.allpaycloud.cn/management_new/m/statcenter/m3GetStatBus',
    getOnlinePayNum: 'http://doll3.allpaycloud.cn/management_new/m/statcenter/m3OnlineConsumersNumBus',  // 线上支付人数
}

const queryObj = makeApi(paths);

const {
    getAllDetail,
    getOnlineDetail,
    getOfflineDetail,
    getStatBus,
    getOnlinePayNum,
} = queryObj;

export {
    getAllDetail,
    getOnlineDetail,
    getOfflineDetail,
    getStatBus,
    getOnlinePayNum,
}
