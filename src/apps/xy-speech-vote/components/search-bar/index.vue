<template>
    <div id="xy-speech-vote-search-bar">
        <div class="page-info">
            <span>已有 {{ votes }} 人投票</span>
            <span>已有 {{ pv }} 人访问</span>
        </div>
		<div class="bar">
			<input v-model="keyword" type="text" placeholder="请输入作品名字或编号">
			<span class="btn" v-on:click="search">搜索</span>
		</div>
    </div>  
</template>

<script>
    import { POST_SEARCH_EXHIBITIONS } from '../../../vuex/modules/xy-speech-vote/mutation-types';

    const activityId = 60;

    export default {
        data: function() {
            return {
                keyword: ''   
            }
        },
        props: {
            votes: {
                type: Number,
                required: true,
            }, 
            pv: {
                type: Number,
                required: true,
            }
        },
        methods: {
            search: function() {
                let keyword = this.keyword.trim();

                if (keyword) {
                    let _this = this;

                    _this
                        .$store
                        .dispatch(POST_SEARCH_EXHIBITIONS, { activity_id: activityId, openid: _this.$store.state.common.wechatUser.openId, keyword: keyword })
                        .then(function(data) {
                            if (data) {
                                _this.$emit('search', data.exhibitions);
                            }
                        })
                        .fail(function() {
                            alert('搜索作品失败，请重试！');
                        }); 
                }
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>