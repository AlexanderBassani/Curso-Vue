import Vue from 'vue'
export default new Vue({
    methods: {
        sendUserInfo(user) {
            this.$emit('UserInfo', user)
        },
        whenUserSelect(callback) {
            this.$on('UserInfo', callback)
        }
    }
})