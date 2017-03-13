const apis = {
    getWechatUser: 'http://qmin91.com/h5/get/wechat-user/by/openid',
    motherSchool: {
        photos: '/apis/post-mother-school-photos',
    },
    xySpeechBooking: '/apis/xy-speech-booking',
    xySpeechVote: {
        getExhibitions: '/apis/xy-speech-vote/get-exhibitions',
        searchExhibitions: '/apis/xy-speech-vote/search-exhibitions',
        vote: '/apis/xy-speech-vote/vote',
    }
};

module.exports = apis;
