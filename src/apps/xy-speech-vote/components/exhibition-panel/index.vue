<template>
    <div id="xy-speech-vote-exhibition-panel">
        <ul>
			<li v-for="exhibition in exhibitions">
                <div class="cover">{{ exhibition.cover }}</div>
                <div class="name">{{ exhibition.name }}</div>
                <div>
                    <span class="btn">为TA点赞</span>
                    <span>{{ exhibition.votes }}票</span>
                </div>
            </li> 
		</ul>   
    </div>  
</template>

<script>
    import { POST_EXHIBITIONS } from '../../../vuex/modules/xy-speech-vote/mutation-types';

    const pageSize = 10;

    export default {
        data: function() {
            return {
                exhibitions: [],
                pageData: {
                    current: 0,
                    size: pageSize,
                    total: 0,
                }       
            }
        }, 
        created: function() {
            this.$store.dispatch(POST_EXHIBITIONS);   
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>