<template>
    <div>
        <h5-header></h5-header>
        <banner></banner>
        <tab-bar 
            v-on:swith="swithTab" 
            v-bind:current-tab="currentTabIndex">
        </tab-bar>
        <search-bar
            v-bind:votes="votes"
            v-bind:pv="pv"
            v-on:search="search"
        ></search-bar>
        <exhibition-panel 
            v-if="currentTabIndex === 0" 
            v-bind:exhibitions="exhibitions"
            v-on:updateData="updateData"
            v-on:updateExhibitions="updateExhibitions" 
            v-on:playVideo="playVideo"    
            v-on:updateExhibitionVoteState="updatePlayingExhibitionVoteState"    
        />
        <rule-panel v-if="currentTabIndex === 1" />
        <rank-panel v-if="currentTabIndex === 2" />
        <search-panel 
            v-if="currentTabIndex === 3" 
            v-bind:exhibitions="searchExhibitions"
            v-on:playVideo="playVideo"    
            v-on:updateExhibitionVoteState="updatePlayingExhibitionVoteState"  
        />
        <video-player 
            v-if="video.showed"
            v-bind:source="video.source"
            v-bind:name="video.name"
            v-bind:id="video.id"
            v-bind:index="video.index"
            v-bind:voted="video.voted"
            v-on:updateExhibitionVoteState="updatePlayingExhibitionVoteStateBySearch"
            v-on:closePlayer="closePlayer"
        />
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
    import VideoPlayer from './components/video-player/index';

    export default {
        created: function() {
            
        },
        data: function() {
            return {
                video: {
                    showed: false,
                    id: 0,
                    source: '',
                    name: '',
                    index: 0,
                    voted: false
                },
                votes: 0,
                pv: 0,
                currentTabIndex: 0,
                homePage: 'http://m.qmin91.com/studio/355',
                searchExhibitions: [],  
                exhibitions: [], 
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
            },
            updateData: function(votes, pv) {
                this.votes = votes;
                this.pv = pv;
            },
            search: function(exhibitions) {
                this.searchExhibitions = exhibitions;
                this.currentTabIndex = 3;
            },
            playVideo: function(video) {
                this.video = {
                    showed: true,
                    source: video.source,
                    name: video.name,  
                    id: video.id,
                    index: video.index,
                    voted: video.voted   
                }
            },
            updatePlayingExhibitionVoteState: function(index) {
                this.video.voted = true;
                this.exhibitions[index].voted = true; 
                this.exhibitions[index].votes = this.exhibitions[index].votes + 1; 
            },
            updatePlayingExhibitionVoteStateBySearch: function(index) {
                this.video.voted = true;
                this.searchExhibitions[index].voted = true; 
                this.searchExhibitions[index].votes = this.searchExhibitions[index].votes + 1; 
            },
            closePlayer: function() {
                this.video.showed = false;       
            },
            updateExhibitions: function(exhibitions) {
                this.exhibitions = this.exhibitions.concat(exhibitions);
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
            SearchPanel,
            VideoPlayer
        }  
    }
</script>

<style lang="less">
    @import './index.less';
</style>