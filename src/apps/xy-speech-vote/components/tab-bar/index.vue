<template>
    <div id="xy-speech-vote-tab-bar">
        <ul>
			<li 
                v-bind:class="{ active: index === currentTab }" 
                v-for="(tab, index) in tabs"
                v-on:click="swith(index)"
            >
                {{ tab }}
            </li>
		</ul>   
    </div>  
</template>

<script>
    export default {
        data: function() {
            return {
                tabs: ['最新作品', '投票规则', '人气排行'],    
            }
        },
        props: {
            'current-tab': {
                type: Number,
                required: true,
                default: 0,
            }    
        },
        methods: {
            swith: function(index) {
                this.$emit('swith', index);
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>