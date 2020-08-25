export default {
    state: {
        nav: {
            leftName: '左按钮',
            showLeftBtn: true,
            navTitle: '标题',
            showTitle: true,
            rightName: '右按钮',
            showRightBtn: true
        }

    },
    mutations: {
        setNav (state, data) {
            console.log('jinru ')
            state.nav.leftName = data.leftName | ''
            state.nav.showLeftBtn = data.showLeftBtn | false
            state.nav.navTitle = data.navTitle | ''
            state.nav.showTitle = data.showTitle | false
            state.nav.rightName = data.rightName | ''
            state.nav.showRightBtn = data.showRightBtn | false
        }
    },
    actions: {
    },
    getters: {
        getLeftName (state) {
            return state.leftName
        },
        getShowLeft (state) {
            return state.showLeftBtn
        },
        getNavTitle (state) {
            return state.navTitle
        },
        getShowTitle (state) {
            return state.showTitle
        },
        getRightName (state) {
            return state.rightName
        },
        getShowRight (state) {
            return state.showRightBtn
        }
    }
}
