<template>
    <div id="main" class="layout">
        <router-view></router-view>
    </div>
</template>

<script>
    

    export default { 
        beforeCreate: function() {
            console.log(this.$data);       
        },   
        mounted() {

        },
        components: {

        }
    }
</script>

<style lang="less">
    @import './app.less';
    
</style>