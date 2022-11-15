export default {
    state:{
        isCollapse: false
    },
    mutations:{
        //修改方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }

}