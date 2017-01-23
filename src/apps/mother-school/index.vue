<template>
    <div id="mother-school-game">
        <input 
            ref="input"
            type="text" 
            placeholder="你的名字" 
            v-model="user">   
        <p>你的名字为：{{ user }}</p> 
        <div>
            <span v-on:click="uploadPics">传图片</span>
            <span v-on:click="writeWish">写寄语</span>
            <span v-on:click="chooseMusic">选音乐</span>
        </div>
        <v-music-picker 
            v-on:increment="incrementTotal" 
            v-bind:musics="musics" 
            v-if="false && showMusic">
        </v-music-picker>
    </div>
</template>

<script>
    import { POST_MOTHER_SCHOOL_PHOTOS } from '../vuex/modules/mother-school/mutation-type';
    import VMusicPicker from './components/music-picker';

    export default {
        data() {
            return {
                user: '',
                musics: [{
                    name: '音乐1',
                    id: 1
                }, {
                    name: '音乐2',
                    id: 2
                }],
                count: 0,  
            }
        },
        mounted() {
            this.$store.dispatch(POST_MOTHER_SCHOOL_PHOTOS);
        },
        computed: {
            showMusic: function() {
                return this.count < 10;
            },
            name: function() {
                return this.$store.state.motherSchool.student.name;
            },
            old: function() {
                return this.$store.state.motherSchool.student.old;
            }
        },
        methods: {
            uploadPics: function() {
                console.log('uploadPics');
            },
            writeWish: function() {
                console.log('writeWish');
            },
            chooseMusic: function() {
                this.showMusic = true;
            },
            incrementTotal: function() {
                this.count += 1;
            }
        },
        components: {
            VMusicPicker
        }
    }
</script>

<style lang="less">
    @import './index.less';

    
</style>