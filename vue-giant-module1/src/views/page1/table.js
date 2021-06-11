export const TableDataMixin = {
  data() {
    return {
      basicColumn: [
        {label: '日期', prop: 'date', sortable: true},
        {label: '姓名', prop: 'name'},
        {label: '省份', prop: 'province'},
        {label: '市区', prop: 'city'},
        {label: '地址', prop: 'address', width: 300},
        {label: '邮编', prop: 'zip'},
        {
          label: 'v-model',
          render: (h, scope) => {
            return h('input', {
              on: {
                input(event) {
                  scope.row.name = event.target.value
                }
              },
              domProps: {
                value: scope.row.name
              },
              style: {
                width: '100%',
                minHeight: '30px',
                color: 'red',
                border: '1px solid #ddd'
              }
            })
          }
        }
      ],

      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '赵四',
          province: '东北',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          children: [
            {
              id: 11,
              date: '2000-05-02',
              name: '我是嵌套',
              province: '南极',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            },
            {
              id: 12,
              date: '1999-05-02',
              name: '我是嵌套000',
              province: '美国',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }
          ]
        },
        {
          id: 3,
          date: '2016-05-04',
          name: '张三疯',
          province: '武当山',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          id: 4,
          date: '2016-05-044',
          name: '李连杰',
          province: '新加坡',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 T',
          zip: 200333
        }
      ]
    }
  }
}
