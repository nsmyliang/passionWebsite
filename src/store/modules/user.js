// import router from '@/router'
import { setStorage, getStorage } from '@/utils/auth'
const state = {
    screenWidth: getStorage("screenWidth") || 0,
    navIndex: getStorage('navIndex') ? getStorage('navIndex') : 0,
    brandListIndex: getStorage('brandListIndex') ? getStorage('brandListIndex') : 0,
    partnerIndex: getStorage('partnerIndex') ? getStorage('partnerIndex') : 0,
}

const actions = {}
const mutations = {
    UPDATE_PAGE_WIDTH(state, data) {
        state.screenWidth = data;
        setStorage("screenWidth", data);
    },
    //导航栏下标
    setNavIndex(state, index) {
        state.navIndex = index
        setStorage('navIndex', index)
    },
    //品牌下标
    setBrandListIndex(state, index) {
        state.brandListIndex = index
        setStorage('brandListIndex', index)
    },
    //合作伙伴下标
    setPartnerIndex(state, index) {
        state.partnerIndex = index
        setStorage('partnerIndex', index)
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
