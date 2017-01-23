<template>
    <div id="music-picker">
        <ul 
            class="music-list" 
            v-bind:style="{ 
                width: ((recordSize + recordM*2) * recordCount) + sizeUnit,
                marginLeft: listML + 'px',
                marginTop: listMT + 'px', 
            }"
            ref="list"
            v-on:touchstart="dragStart"
            v-on:touchmove="drag"
            v-on:touchend="dragEnd"
            >
            <li 
                v-for="i in recordCount" 
                v-bind:style="{
                    width: recordSize + sizeUnit,
                    height: recordSize * 1.5 + sizeUnit,
                    marginRight: recordM + sizeUnit,
                    marginLeft: recordM + sizeUnit
                }"
                >
                <i>{{ i }}</i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recordCount: 10,
                recordSize: 8, 
                recordM: 0.2,
                sizeUnit: 'rem',
                touchData: {
                    preDistanceX: 0,
                    distanceX: 0
                },
                listMT: 0,
                minListML: 0,
                recordW: 0, 
                wrapperW: 0, 
                firstML: 0,//第一个item中心对居中时，对应的margin-left
            }
        },
        props: {
            musics: {
                type: Array,
                require: true
            },
        },
        computed: {
            listML: function() {
                var x = this.touchData.preDistanceX + this.touchData.distanceX;

                if (x > 0) {
                    return 0;
                } else if (x < this.minListML) {
                    return this.minListML;
                }
                return x;
            },
        },
        mounted() {
            this.listMT = (this.$refs.list.parentNode.clientHeight- this.$refs.list.clientHeight)/2;
            this.minListML = - (this.$refs.list.clientWidth - this.$refs.list.parentNode.clientWidth);
            this.recordW = this.$refs.list.clientWidth / this.recordCount;
            this.wrapperW = this.$refs.list.parentNode.clientWidth;

            this.firstML = (this.wrapperW - this.recordW) / 2;
            console.log(this.$refs.list.clientWidth / this.recordCount);
        },
        methods: {
            dragStart: function(event) {
                this.touchData.posX = event.touches[0].pageX;
            },
            drag: function(event) {
                var distanceX = event.touches[0].pageX - this.touchData.posX;

                this.touchData.distanceX = distanceX;
            },
            dragEnd: function() {
                this.touchData.preDistanceX += this.touchData.distanceX;
                this.touchData.distanceX = 0;

                var d = this.touchData.preDistanceX - (this.firstML - this.recordW / 2);
                var index = 0;
                if (d > 0) {
                    index = 0;
                } else {
                    if (Math.abs(d) % this.recordW === 0) {
                        index = Math.ceil(Math.abs(d) / this.recordW) + 1;
                    } else {
                        index = Math.ceil(Math.abs(d) / this.recordW);
                    }  
                }
                
                this.touchData.preDistanceX = this.firstML - this.recordW * index;
            }
        }
    }    
</script>

<style lang="less">
    @import './music-picker';
</style>