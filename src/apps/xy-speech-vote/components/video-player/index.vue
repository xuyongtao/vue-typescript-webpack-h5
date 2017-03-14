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
    import voteMixin from '../../mixins/vote';
    import playerMixin from '../../mixins/player';

    export default {
        mixins: [voteMixin, playerMixin],
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
    }
</script>

<style lang="less">
    @import './index.less';

</style>