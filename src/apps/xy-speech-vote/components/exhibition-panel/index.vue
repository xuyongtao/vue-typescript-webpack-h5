<template>
    <div id="xy-speech-vote-exhibition-panel">
        <ul 
            v-bind:class="{ loading: loading }"
            v-on:touchmove="loadMore"
        >
			<li v-for="(exhibition, index) in exhibitions">
                <div class="cover" v-on:click="playVideo({ id: exhibition.id, name: exhibition.name, source: exhibition.source, voted: exhibition.voted, index: index })"> 
                    <img v-if="exhibition.cover" v-bind:src="exhibition.cover" v-bind:alt="exhibition.name">
                    <img v-else src="../../images/dog.jpg" v-bind:alt="exhibition.name">
                </div>
                <div class="name">{{ exhibition.id }}号-{{ exhibition.name }}</div>
                <div class="other">
                    <span 
                        class="btn" 
                        v-bind:class="{ voted: exhibition.voted }"
                        v-on:click="vote(exhibition.id, index, exhibition.voted)"
                    >       
                        {{ exhibition.voted ? '已点赞' : '为TA点赞' }}
                    </span>
                    <span>{{ exhibition.votes }}票</span>
                </div>
            </li> 
		</ul> 
        <p v-show="!loading && pageData.total > pageData.current">上拉加载更多</p>   
    </div>  
</template>

<script>
    import * as _ from 'lodash';
    import { POST_EXHIBITIONS, POST_VOTE } from '../../../vuex/modules/xy-speech-vote/mutation-types';

    const pageSize = 10;
    const activityId = 60;

    export default {
        data: function() {
            return {
                loading: false,
                pageData: {
                    current: null,
                    size: pageSize,
                    total: null,
                }      
            }
        }, 
        props: {
            exhibitions: {
                type: Array,
                required: true
            }
        },
        created: function() {
            this.loadData();    
        },
        updated: function() {
            console.log('更新数据');
        },
        methods: {
            loadData: function() {
                let _this = this;

                _this.loading = true;
                _this
                    .$store
                    .dispatch(POST_EXHIBITIONS, _.assign({}, _this.pageData, { activity_id: activityId, openid: _this.$store.state.common.wechatUser.openId }))
                    .then(function(data) {
                        if (data) {
                            _this.pageData = {
                                current: data.pageData.current,
                                size: data.pageData.pageSize,
                                total: data.pageData.total,
                            };

                            // 更新投票数和pv数
                            _this.$emit('updateData', data.data.votes, data.data.pv);
                            // 更新作品列表
                            _this.$emit('updateExhibitions', data.exhibitions);
                        }
                        _this.loading = false;                                        
                    })
                    .fail(function() {
                        _this.loading = false;
                        alert('请求数据失败，请重试！');
                    });  
            },
            loadMore: function() {
                if (!this.loading && this.pageData.current < this.pageData.total) {
                    this.loadData();
                }
            },
            vote: function(id, index, voted) {
                if (voted) {
                    alert('您已为TA点赞');
                    return;
                }

                let _this = this;

                _this
                    .$store
                    .dispatch(POST_VOTE, { activity_applicant_id: id, openid: _this.$store.state.common.wechatUser.openId })
                    .then(function() {
                        _this.$emit('updateExhibitionVoteState', index);    
                    })
                    .fail(function(err) {
                        alert(err);
                        // alert('投票失败，请重试！');
                    }); 
            },
            playVideo: function(name, video) {
                this.$emit('playVideo', name, video);
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>