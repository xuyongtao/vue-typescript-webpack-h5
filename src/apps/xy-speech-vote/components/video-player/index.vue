<template>
    <div id="video-player">
        <div>
            <h2>《{{ name }}》</h2>
            <span v-on:click="closePlayer" class="btn-close">关闭</span>
        </div>
        
        <video 
            controls="controls"
            webkit-playsinline="true" 
            autoplay="autoplay" 
            playsinline="playsinline" 
            v-bind:src="source" 
            preload="preload">
        </video>
        <div 
            class="btn-support"
            v-bind:class="{ voted: voted }"
            v-on:click="vote(id, index, voted)"
        >
            {{ voted ? '已点赞' : '为TA点赞' }}
        </div>
    </div> 
</template>

<script>
    import { POST_VOTE } from '../../../vuex/modules/xy-speech-vote/mutation-types';

    export default {
        data: function() {
            return {
                          
            }
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
            },
            index: {
                type: Number,
                required: true,    
            },
            voted: {
                type: Boolean,
                required: true,
            }
        },
        methods: {
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
            closePlayer: function() {
                this.$emit('closePlayer');
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>