import React from 'react'
import { inject, observer } from 'mobx-react'
import Table from 'antd/lib/table'

import InfiniteTable from '../../../components/InfiniteTable'
import AppletTemplate from '../../../stores/mobx/domain/eam/AppletTemplate'
import { TabType } from '../../../stores/mobx/domain/eam/AppletTab'
import AppletValue from '../../../stores/mobx/domain/eam/AppletValue'
import Cell, { getCellMinWidth } from './Cell'

const { Column, ColumnGroup } = Table
const cell = (record, id) => {
    const value = record.get(id)
    return <Cell value={value} isEditable={false} />
}

@inject('MediaStore', 'ThemeStore', 'RouterStore')
@observer
class AppletTableList extends React.Component {

    // 点击行
    onRowClick = (record) => {
        const { codeByCursor, itfsByCursor } = AppletTemplate
        const { push } = this.props.RouterStore
        const { itemOfId } = itfsByCursor || ''
        const id = record.get(itemOfId)
        if (id) {
            push(`/applets/${codeByCursor}/${id.raw}`)
        }
    }
    render() {
        const { style } = this.props;
        const { tabsByCursor, itfsByCursor } = AppletTemplate
        const { billsByCursor, pager } = AppletValue

        const { itemOfId } = itfsByCursor || ''

        const data = billsByCursor || []
        if (!tabsByCursor) return null
        let columnsLength = 0
        const tabLength = tabsByCursor.filter(tab => tab.type !== TabType.TABLE).length || 0
        let columns = tabsByCursor.filter(tab => tab.type !== TabType.TABLE).map((tab, index) => {
            const subColumns = tab.cardItems.map((item, itemIndex) => {
                const test = {
                    key: item.id,
                    dataIndex: item.id,
                    title: item.name,
                    width: getCellMinWidth(item.style), // 最后一列不设宽度以适应弹性布局
                    render: (text, record) => cell(record, item.id),
                }
                if (itemIndex === tab.cardItems.length - 1 && index === tabLength - 1) {
                    Reflect.deleteProperty(test, 'width')
                }
                return test
            })
            columnsLength += subColumns.length
            return (
                // <ColumnGroup
                //     key={tab.name}
                //     title={tab.name}
                // >
                //     {subColumns}
                // </ColumnGroup>
                {
                    key: tab.name,
                    title: tab.name,
                    children: subColumns,
                }
            )
        })
        // columns = [
        //     <Column
        //         key="index"
        //         dataIndex="index"
        //         title="序号"
        //         render={(text, record, index) => index + 1}
        //         width={40}
        //         fixed="left"
        //     />,
        //     ...columns,
        // ]
        columns = [
            {
                dataIndex: 'index',
                title: '序号',
                width: 39,
                fixed: 'left',
                render: (text, record, index) => index + 1,
            },
            ...columns,
        ]
        return (
            <InfiniteTable
                style={style}
                rowKey={itemOfId}
                // isMulitHeader
                hasLoadBtn
                dataSource={data}
                columns={columns}
                loading={pager.isFetching}
                scrollWidth={columnsLength * 100 + 100}
                scrollHeight={500}
                onRowClick={this.onRowClick}
                loadMore={AppletValue.fetchBills}
            />
        )
    }
}

export default AppletTableList
