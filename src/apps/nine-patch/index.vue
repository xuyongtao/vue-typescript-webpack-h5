<template>
    <div id="nine-patch">
        九宫格活动{{ count }}
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: mapActions({
            increment: 'INCREMENT_ACTION'
        }),
        computed: {
            count() {
                // this.increment();

                return this.$store.state.count;
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';
</style>