<template>
    <div>
        <h5-header></h5-header>
        <banner></banner>
        <tab-bar 
            v-on:swith="swithTab" 
            v-bind:current-tab="currentTabIndex">
        </tab-bar>
        <search-bar />
        <exhibition-panel v-if="currentTabIndex === 0" />
        <rule-panel v-if="currentTabIndex === 1" />
        <rank-panel v-if="currentTabIndex === 2" />
        <search-panel v-if="currentTabIndex === 3" />
        <h5-footer></h5-footer>
    </div>
</template>

<script>
    import H5Header from '../components/header/index';
    import H5Footer from '../components/footer/index';
    import Banner from './components/banner/index';
    import TabBar from './components/tab-bar/index';
    import SearchBar from './components/search-bar/index';
    import ExhibitionPanel from './components/exhibition-panel/index';
    import RulePanel from './components/rule-panel/index';
    import RankPanel from './components/rank-panel/index';
    import SearchPanel from './components/search-panel/index';

    export default {
        created: function() {
            
        },
        data: function() {
            return {
                currentTabIndex: 0,
                homePage: 'http://m.qmin91.com/studio/355',   
            }
        },
        mounted: function() {
            
        },
        filters: {
            
        },
        computed: {//计算属性有缓存
            
        },
        methods: {
            swithTab: function(index) {
                this.currentTabIndex = index;
            }             
        },
        components: {
            H5Header,
            H5Footer,
            Banner,
            TabBar,
            SearchBar,
            ExhibitionPanel,
            RulePanel,
            RankPanel,
            SearchPanel
        }  
    }
</script>

<style lang="less">
    @import './index.less';
</style>