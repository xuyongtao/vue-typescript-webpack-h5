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
    import voteMixin from '../../mixins/vote';
    import playerMixin from '../../mixins/player';

    export default {
        mixins: [voteMixin, playerMixin],
        data: function() {
            return {

            }
        },
        props: {
            exhibitions: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';

</style>