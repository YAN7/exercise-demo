<!-- 最后更新时间：0510 181700 -->

### url:
### m3GetStatBus 获取统计信息

##### input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add(`startTime`, String.class, "开始时间", REQUIRED)
* add(`endTime`, String.class, "结束时间", REQUIRED)
* add(`dateType`, Integer.class, "日期类型（all:全部，day:按日分组，week:按周分组，month:按月分组）", REQUIRED)
    - 默认传all
* add(`groupType`, Integer.class, "组类型（all:全部，device:按设备分组，address:按场地分组，group:按分公司分组）", REQUIRED)
    - device: ,门店下营收统计要传
* add(`statType`, Integer.class, "统计类型（all:全部，online:线上，offline:线下）", REQUIRED)
* add(`addressId`, Integer.class, "场地id", NOT_REQUIRED)
* add(`orderBy`, String.class, "自定义排序，例子：order by amount desc(desc是降序，不加desc是升序)", NOT_REQUIRED);

##### output:
* deviceId,deviceName,deviceMac,deviceType,deviceMark,deviceHomemadeId(按设备统计返回这些)
* addressId,address,deviceNum(按场地统计返回这些)
* groupId,groupName,addressNum(按分公司统计返回这些)
* `wechatAmount`,线上微信营收
* `alipayAmount`,线上支付宝营收
* `onlineCoin`,线上投币数
* `onlineOrderNum`,线上订单数
* `offlineOutCoinAmount`,线下现金营收
* `offlineOutCoinOrderNum`,线下现金订单数
* `offlineInCoinDelta`,线下投币数
* `dollNum`,物料数
* `amount`,总营收
* `allOrderNum` 总支付数

----------------------------------------------------------------------------------------------

### url:
### m3GetDetailOfflineBus 获取线下明细

##### input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add("deviceId", Integer.class, "设备id", REQUIRED)
* add("deviceType", Integer.class, "设备类型", REQUIRED)
* add("coinInTimeStart", String.class, "coinInTime开始时间", REQUIRED)
* add("coinInTimeEnd", String.class, "coinInTime结束时间", REQUIRED)
* add("addressId", Integer.class, "场地id", NOT_REQUIRED)
* add("orderBy", String.class, "自定义排序，例子：order by amount desc(desc是降序，不加desc是升序)", NOT_REQUIRED);

##### output:
* coinInTime,投币时间
* amount,金额
* delta,币数
* clockNumber,码表数
* useingError，错误代码
* deviceMac,设备mac
* deviceName,设备名称
* deviceMark,设备备注
* deviceHomemadeId,设备自编号
* address,门店名称
* addressRemark,门店备注
* emporium,门店所属商场
* groupName,分公司名称

----------------------------------------------------------------------------------------------

### url:
### m3GetDetailOnlineBus 获取线上明细

#####input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add(`deviceId`, Integer.class, "设备id", NOT_REQUIRED)
* add(`payTimeStart`, String.class, "payTime开始时间", NOT_REQUIRED)
* add(`payTimeEnd`, String.class, "payTime结束时间", NOT_REQUIRED)
* add(`orderReturnTimeStart`, String.class, "orderReturnTime开始时间", NOT_REQUIRED)
* add(`orderReturnTimeEnd`, String.class, "orderReturnTime结束时间", NOT_REQUIRED)
* add(`deviceType`, Integer.class, "设备类型", NOT_REQUIRED)
* add(`orderType`, Integer.class, "1：直接支付，2.电子币", NOT_REQUIRED)
* add(`userId`, Integer.class, "用户id", NOT_REQUIRED)
* add(`addressId`, Integer.class, "场地id", NOT_REQUIRED)
* add(`transactionId8`, Integer.class, "第三方订单号后8位", NOT_REQUIRED)
* add(`orderId`, Integer.class, "订单号", NOT_REQUIRED)
* add(`orderStatus`, String.class, "suc：成功，refund：退款，NotSure：待确定", NOT_REQUIRED)
* add(`orderBy`, String.class, "自定义排序，例子：order by amount desc(desc是降序，不加desc是升序)", NOT_REQUIRED);

###### output:
* orderId,订单号
* addTime,支付时间
* orderReturnTime,设备返回信息时间
* platType,支付类型：1微信，2支付宝
* orderType,订单类型：1支付订单，2电子币订单
* amount,支付金额
* refundAmount,退款金额
* number,脉冲数量
* coinNum,投币数
* realNum,实现数
* transactionId,第三方订单号
* userId,用户id
* deviceMac,设备mac
* deviceName,设备名称
* deviceMark,设备备注
* deviceHomemadeId,设备自编号
* address,门店名称
* addressRemark,门店备注
* emporium,门店所属商场
* groupName,分公司名称

-----------------------------------------------------------------------------------------------

### url：
### m3GetDetailAllBus 线上线下营收明细（设备级别）

### input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add(`deviceId`, Integer.class, "设备id", REQUIRED)
* add(`startTime`, String.class, "startTime开始时间", REQUIRED)
* add(`endTime`, String.class, "endTime结束时间", REQUIRED)
* add(`deviceType`, Integer.class, "设备类型", NOT_REQUIRED)
* add(`addressId`, Integer.class, "场地id", NOT_REQUIRED)
* add(`regionalUser`, Integer.class, "区域负责人id", NOT_REQUIRED)
* add(`groupId`, Integer.class, "分公司id", NOT_REQUIRED)
* add(`orderBy`, String.class, "自定义排序，例子：order by amount desc(desc是降序，不加desc是升序)", NOT_REQUIRED);

##### output:
##### addTime,支付时间
* amount,交易金额
* number,脉冲数
* orderId,订单号
* transactionId,第三方订单号
* platType,支付类型：1微信，2支付宝
* orderType,订单类型：1支付订单，2电子币订单
* deviceMac,设备mac
* deviceName,设备名称
* deviceMark,设备备注
* deviceHomemadeId,设备自编号
* address,门店名称
* addressRemark,门店备注
* emporium,门店所属商场
* groupName,分公司名称

----------------------------------------------------------------------------------------------

##### url:
##### m3OnlineConsumersNumBus 统计线上消费者人数

##### input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add(`payTimeStart`, String.class, "payTime开始时间", NOT_REQUIRED)
* add(`payTimeEnd`, String.class, "payTime结束时间", NOT_REQUIRED)
* add(`orderReturnTimeStart`, String.class, "orderReturnTime开始时间", NOT_REQUIRED)
* add(`orderReturnTimeEnd`, String.class, "orderReturnTime结束时间", NOT_REQUIRED)
* add(`regionalUser`, Integer.class, "区域负责人id", NOT_REQUIRED)
* add(`groupId`, Integer.class, "分公司id", NOT_REQUIRED);

##### ouput:

```js
{
    "msg":"操作成功",
    "result":{"consumersNum":10},
    "code":"200"
}
```


---------------------------------------------------------------------------------------------------------------

### url:
### getDetailOfflineDollBus 获取物料明细

#####input:
* add(`proprietorId`, Integer.class, "运营商id", REQUIRED)
* add("deviceId", Integer.class, "设备id", REQUIRED)
* add("dollOutTimeStart", String.class, "dollOutTime开始时间", NOT_REQUIRED)
* add("dollOutTimeEnd", String.class, "dollOutTime结束时间", NOT_REQUIRED)
* add("deviceType", Integer.class, "设备类型", NOT_REQUIRED)
* add("addressId", Integer.class, "场地id", NOT_REQUIRED)
* add("regionalUser", Integer.class, "区域负责人id", NOT_REQUIRED)
* add("groupId", Integer.class, "分公司id", NOT_REQUIRED);

##### ouput:
* dollOutTime,出物料时间
* delta 个数

---------------------------------------------------------------------------------------------------------------

> output返回基本都是分页，格式如下：

```js
{
    "msg": "操作成功",
    "result": {
        "totalRow": 9,
        "pageNumber": 1,
        "firstPage": true,
        "lastPage": true,
        "totalPage": 1,
        "pageSize": 10,
        "list": [
            {
                output参数;
            }
        ]
    },
    "code": "200"
}
```



