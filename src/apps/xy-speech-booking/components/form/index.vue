<template>
    <div id="xy-book-form">
        <h2>填写信息，免费预约</h2>
        <form>
            <div><input v-model.trim="name" type="text" placeholder="名字"></div>
            <div><input ref="ageInput" :value="age" @input="correctAge($event.target.value)" type="text" placeholder="年龄"></div>
            <div><input v-model.trim="mobile" type="text" placeholder="手机号码"></div>
            <div><input v-model.trim="work_name" type="text" placeholder="作品名称"></div>
            <div><input v-model.trim="work_url" type="text" placeholder="作品链接"></div>
            
            <div><button :class="{ 'disable': !allgood }" type="submit" v-on:click.prevent="submit">我要参加</button></div>
        </form>
    </div>
</template>

<script>
    import * as _ from 'lodash';
    import { POST_BOOK } from '../../../vuex/modules/xy-speech-booking/store';

    export default {
        data: function() {
            return {
                name: '',
                age: '',   
                mobile: '',
                work_name: '',
                work_url: '',
            }
        },
        props: {
            apiUrl: {
                // type: String,
                // require: true,
                validator: function(str) {
                    return /^\/api*/.test(str);
                }
            },
        },
        watch: {
            mobile: function(newMobile) {
                this.checkMobile(newMobile);
            }
        },
        computed: {
            allgood: function() {
                return this.name && this.age && this.mobile && this.work_name && this.work_url;
            }
        },
        methods: {
            checkMobile: _.debounce(function(mobile) {
                console.log(mobile);
            }, 500),
            submit: function() {
                var postData = {    
                    name: this.name,
                    age: this.age,
                    mobile: this.mobile,
                    work_name: this.work_name,
                    work_url: this.work_url
                };

                console.log(postData);

                this.$store.dispatch(POST_BOOK, postData);
            },
            correctAge: function(value) {
                var correctedAge;

                if (!parseInt(value)) {
                    correctedAge = '';
                } else {
                    if (value > 100 || value < 0) {
                        correctedAge = '';
                    } else {
                        correctedAge = value;
                    }
                }

                this.$refs.ageInput.value = correctedAge;
                // this.$emit('input', correctedAge);
            }
        }    
    }
</script>

<style lang="less">
    @import './index.less';

</style>