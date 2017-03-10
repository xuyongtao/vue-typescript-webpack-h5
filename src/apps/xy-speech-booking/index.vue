<template>
    <div>
        <h5-header></h5-header>
        <div id="xy-speech-booking">
            <div class="banner">
                <h1>希言文化语言艺术中心动物成语故事大王比赛开始选拔啦！</h1>
                <p>谁是下一个成语故事大王？</p>
            </div>        
            <div class="theme-intro" v-once>
                <p><strong>成语是中华文化的精髓</strong></p>
                <p><em>用稚嫩的童声讲述一个个生动的成语故事。</em></p>   
                <p>带领听众们穿越时空，体验祖逖闻鸡起舞时的志气有为，感受鹏程万里的豪迈景象，赞叹囊萤映雪的勤学好问，为所有人带来一场知识的盛宴！</p>
            </div>
            <booking-form :apiUrl="apiUrl"></booking-form>
        </div> 
        <h5-footer></h5-footer>
    </div>
</template>

<script>
    import H5Header from '../components/header/index';
    import H5Footer from '../components/footer/index';
    import BookingForm from './components/form';
    import * as apis from '../../../config/api'; 

    export default {
        created: function() {
            console.log('created');
        },
        data: function() {
            return {
                name: '',
                old: '',   
                mobile: '',
                work_name: '',
                work_url: '',
                apiUrl: apis.xySpeechBooking,
            }
        },
        mounted: function() {
            
        },
        filters: {
            
        },
        computed: {//计算属性有缓存
            
        },
        methods: {
                    
        },
        components: {
            BookingForm,
            H5Header,
            H5Footer
        }  
    }
</script>

<style lang="less">
    @import './index.less';

</style>