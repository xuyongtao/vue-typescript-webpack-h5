<template>
    <div id="xy-speech-vote-banner">
        <a v-bind:href="homePage" target="_blank">
            <img src="./banner.jpg" alt="谁是你心目中的成语故事大王？！希言“动物成语故事大王”比赛开启投票模式啦！">
        </a>
        <h1>希言“动物成语故事大王”比赛开启投票模式啦！</h1>
        <p>谁是你心目中的成语故事大王？</p> 
    </div>  
</template>

<script>
    export default {
        data: function() {
            return {
                homePage: 'http://m.qmin91.com/studio/355',   
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>