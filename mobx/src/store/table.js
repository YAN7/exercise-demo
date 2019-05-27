import { action, observable, computed } from 'mobx';
class Table {
  @observable count = 1
  @observable selectedRowKeys = []
  @observable loading = observable.map({
    page: true
  })
  @observable data = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      id: Math.random(),
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      id: Math.random(),
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      id: Math.random(),
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ]
  @computed get hehe() {
    return this.count + 10
  }
  @computed get haha() {
    return this.count + 123;
  }

  @action selectedRowKeysChange = (selectedRowKeys) => this.selectedRowKeys = selectedRowKeys
  @action addCount = () => this.count = this.count + 1;
  @action addData = () => {
    this.data = [...this.data, {id: Math.random(), name: 'haah', age: '111', address: 'yan'}]
  }



}

const table = new Table();


export default table;