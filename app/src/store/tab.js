export default {
    state: {
        isCollapse: false,
        tableList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/home',
            }
        ] //面包屑
    },
    mutations: {
        //修改方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // console.log(val)
            if (val.name !== 'home') {
                const index = state.tableList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tableList.push(val)
                }
            }
        },
        closeTag(state, item) {
            const index = state.tableList.findIndex(val => val.name === item.name)
            state.tableList.splice(index, 1)
        }
    }

}