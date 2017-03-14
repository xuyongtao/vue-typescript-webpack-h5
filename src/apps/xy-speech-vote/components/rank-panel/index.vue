<template>
    <div id="xy-speech-vote-rank-panel">
        <h2>排行榜</h2>
        <div class="content">
            <ul v-bind:class="{ loading: loading }" >
                <li v-for="(rank, index) in ranks">
                    <a href="javascript:;" class="name">{{ rank.name }}</a>
                    <span class="total">{{ rank.votes }}票</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { POST_RANKS } from '../../../vuex/modules/xy-speech-vote/mutation-types';


    export default {
        data: function() {
            return {
                loading: false
            }
        },
        props: {
            ranks: {
                type: Array,
                required: true
            }
        },
        created: function() {
            this.loadData();
        },
        updated: function(){

        },
        methods: {
            loadData: function(){
                let _this = this;
                _this.$store
                    .dispatch(POST_RANKS, { activity_id: activityId, openid: _this.$store.state.common.wechatUser.openId })
                    .then(function(data) {
                        if (data) {
                            _this.$emit('loadRank', data.ranks)
                        }
                        _this.loading = false;
                    })
                    .fail(function() {
                        _this.loading = false;
                        alert('加载数据失败，请重试');
                    })
            }
        },
    }
</script>

<style lang="less">
    @import './index.less';

</style>