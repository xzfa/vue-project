<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAside />
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader/>
                </el-header>
                <CommonTag />
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>


<script>
import CommonAside from '@/components/CommonAside';
import CommonHeader from '@/components/CommonHeader';
import CommonTag from '@/components/CommonTag.vue';
export default {
    data() {
        return {};
    },
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>
<style lang="less" scoped>
.el-header{
    padding: 0;
}
</style>
