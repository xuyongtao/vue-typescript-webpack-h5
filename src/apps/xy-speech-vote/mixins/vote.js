import { POST_VOTE } from '../../vuex/modules/xy-speech-vote/mutation-types';

export default {
    methods: {
        vote: function (id, index, voted) {
            if (voted) {
                alert('您已为TA点赞');
                return;
            }

            let _this = this;

            _this
                .$store
                .dispatch(POST_VOTE, { activity_applicant_id: id, openid: _this.$store.state.common.wechatUser.openId })
                .then(function () {
                    _this.$emit('updateExhibitionVoteState', index);
                })
                .fail(function (err) {
                    alert(err);
                    // alert('投票失败，请重试！');
                });
        }
    }
}