var envConfig = require('./env');
var domainOfApi = '';

function addDomain(apis, domainOfApi) {
    if (!domainOfApi) return apis;

    var addedApis = {};
    for (var key in apis) {
        if (typeof apis[key] === 'string') {
            addedApis[key] = domainOfApi + apis[key];
        } else if (typeof apis[key] === 'object') {
            addedApis[key] = addDomain(apis[key], domainOfApi);
        }
    }

    return addedApis;
}

if (process.env.NODE_ENV === envConfig.build.env.NODE_ENV && domain.api) {
    domainOfApi = domain.api;
}

var apis = {
    getWechatUser: 'http://qmin91.com/h5/get/wechat-user/by/openid',
    motherSchool: {
        photos: '/apis/post-mother-school-photos',
    },
    xySpeechBooking: '/apis/xy-speech-booking',
    xySpeechVote: {
        getExhibitions: '/apis/xy-speech-vote/get-exhibitions',
        searchExhibitions: '/apis/xy-speech-vote/search-exhibitions',
        vote: '/apis/xy-speech-vote/vote',
        getRankLists: '/apis/xy-speech-vote/get-rank-lists'
    }
};

if (domainOfApi) {
    apis = addDomain(apis, domainOfApi);
}

module.exports = apis;