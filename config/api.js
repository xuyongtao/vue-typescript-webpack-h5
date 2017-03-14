var envConfig = require('./env');
var domainOfApi = '';

function addDomain(apis, domainOfApi) {
    if (!domainOfApi) return apis;

    var addedApis = {};
    for (var key in apis) {
        if (typeof apis[key] === 'string') {
            if (/^\/./.test(apis[key])) {
                addedApis[key] = domainOfApi + apis[key].slice(1);
            } else if (/^http:\/\/./.test(apis[key])) {
                addedApis[key] = apis[key];
            } else {
                addedApis[key] = domainOfApi + apis[key];
            }
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
    getPageInitData: '/apis/vote/init',
    motherSchool: {
        photos: '/apis/post-mother-school-photos',
    },
    xySpeechBooking: '/apis/xy-speech-booking',
    xySpeechVote: {
        getExhibitions: '/apis/vote/get/good-work-list',
        searchExhibitions: '/apis/vote/search-vote-user-list',
        vote: '/apis/vote/activity-voting',
        getRankLists: '/apis/vote/get/vote-rank-list'
    }
};

if (domainOfApi) {
    apis = addDomain(apis, domainOfApi);
}

module.exports = apis;