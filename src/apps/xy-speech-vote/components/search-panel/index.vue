<template>
    <div id="xy-speech-vote-search-panel">
        <ul>
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
            exhibitions: {
                type: Array,
                required: true
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
            playVideo: function(name, video) {
                this.$emit('playVideo', name, video);
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>