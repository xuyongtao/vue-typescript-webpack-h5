<template>
    <div id="xy-speech-booking">
        <div class="banner">
            <h1>希言文化语言艺术中心动物成语故事大王比赛开始选拔啦！</h1>
            <p>谁是下一个成语故事大王？</p>
        </div>        
        <div class="theme-intro">
            <p><strong>成语是中华文化的精髓</strong></p>
            <p><em>用稚嫩的童声讲述一个个生动的成语故事。</em></p>   
            <p>带领听众们穿越时空，体验祖逖闻鸡起舞时的志气有为，感受鹏程万里的豪迈景象，赞叹囊萤映雪的勤学好问，为所有人带来一场知识的盛宴！</p>
        </div>
        <booking-form :apiUrl="apiUrl" />
    </div> 
</template>

<script>
    import BookingForm from './components/form';
    import * as apis from '../../../config/api';

    export default {
        created() {
            
        },
        data() {
            return {
                name: '',
                old: '',   
                mobile: '',
                work_name: '',
                work_url: ''
            }
        },
        computed: {
            apiUrl() {
                return apis.xySpeechBooking;
            }
        },
        methods: {
            
        },
        components: {
            BookingForm
        }  
    }
</script>

<style lang="less">
    @import './index.less';

</style>