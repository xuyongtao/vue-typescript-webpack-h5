<template>
    <div class="book-form">
        <h2>填写信息，免费预约</h2>
        <form>
            <input v-model="name" type="text" placeholder="名字">
            <input v-model="old" type="text" placeholder="年龄">
            <input v-model="mobile" type="text" placeholder="手机号码">
            <input v-model="work_name" type="text" placeholder="作品名称">
            <input v-model="work_url" type="text" placeholder="作品链接">
            
            <button type="submit" v-on:click.prevent="submit">我要参加</button>
        </form>
    </div>
</template>

<script>
    import { POST_BOOK } from '../../../vuex/modules/xy-speech-booking/store';

    export default {
        data() {
            return {
                name: '',
                old: '',   
                mobile: '',
                work_name: '',
                work_url: ''
            }
        },
        props: {
            apiUrl: {
                type: String,
                require: true
            }
        },
        methods: {
            submit: function() {
                var postData = {    
                    name: this.name,
                    old: this.old,
                    mobile: this.mobile,
                    work_name: this.work_name,
                    work_url: this.work_url
                };

                console.log(this.apiUrl);
                
                this.$store.dispatch(POST_BOOK, postData);
            }
        }    
    }
</script>