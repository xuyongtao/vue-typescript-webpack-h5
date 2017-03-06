<template>
    <div id="main" class="layout">
        <h5-header></h5-header>
        <router-view></router-view>
        <h5-footer></h5-footer>
    </div>
</template>

<script>
    import H5Header from './components/header/index';
    import H5Footer from './components/footer/index';

    export default {    
        mounted() {

        },
        components: {
            H5Header,
            H5Footer
        }
    }
</script>

<style lang="less">
    @import './app.less';
    
</style>