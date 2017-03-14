import actions from './actions';
import mutations from './mutations';

const state = {
    fetch: false,
    pageInitData: {
        pv: 0,
        votes: 0,
    }
};

export default {
    state,
    actions,
    mutations,
}