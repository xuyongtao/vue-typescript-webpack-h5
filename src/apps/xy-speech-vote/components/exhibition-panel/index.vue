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
    export default {
        data: function() {
            return {
                exhibitions: [{
                    id: 1,
                    name: '作品名字1',
                    votes: 12,
                    cover: '',
                    video: '',
                }, {
                    id: 2,
                    name: '作品名字2',
                    votes: 12,
                    cover: '',
                    video: '',
                }, {
                    id: 3,
                    name: '作品名字3',
                    votes: 12,
                    cover: '',
                    video: '',
                }]       
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>