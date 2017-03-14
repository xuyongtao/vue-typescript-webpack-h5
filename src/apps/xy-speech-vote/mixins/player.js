export default {
    methods: {
        playVideo: function (video) {
            this.$emit('playVideo', video);
        },
        closePlayer: function () {
            this.$emit('closePlayer');
        }
    }
}