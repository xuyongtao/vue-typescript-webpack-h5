import * as Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: `
        <div id="main">
            <h1>h5首页</h1>
            <div>
                <router-link v-bind:to="{ name: 'index' }">首页</router-link>
                <router-link v-bind:to="{ name: 'aPath' }">内页a</router-link>
                <router-link v-bind:to="{ name: 'bPath' }">内页b</router-link>
                <router-link v-bind:to="{ name: 'test', params: { user: 'yota', id: 123 }, query: { old: 54 } }">测试内页</router-link> 
            </div>
            
            <router-view></router-view>
        </div>
    `,
})
export default class Index extends Vue {
    mounted() {

    }
}