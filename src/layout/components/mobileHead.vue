<template>
	<!-- 头部 -->
	<div class="head" :class="navIndex==0?'bg':''">
		<div class="head-log" @click="toHome()">
			<img class="logo" src="@/assets/image/logo.png">
			<img class="dow" src="@/assets/image/mobile/dow.png" @click.stop="mask=true">
		</div>
		<div class="mask" v-if="mask" @touchmove.stop.prevent>
			<div class="head-close">
				<img src="@/assets/image/mobile/close.png" @click="mask=false">
			</div>
			<div class="head-search">
				<img class="lang" src="@/assets/image/lang.png" @click="langClick()">
				<div class="search">
					<input type="text" :placeholder="$t('head.head94')" v-model="inpValue">
					<div class="search-img"><img src="@/assets/image/home-search.png" @click="search()"></div>
				</div>
			</div>
			<div class="head-nav">
				<div class="head-item" :class="index==navIndex?'active':''" v-for="(item,index) in navList"
					@click="navBtn(index)" :key="index">
                    <span v-if="index ==3||index ==4">+</span>
					{{ $t(item)}}
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	// const dow = require('@/assets/image/mobile/dow.png')
	import { myMixin } from '@/utils/mixins'
	export default {
		mixins: [myMixin],
		name: "HomeHead",
		components: {},
		props: {},
		data() {
			return {
				navList: [
					'head.head0',
					'head.head1',
					'head.head2',
					'head.head3',
					'head.head4',
					'head.head5',
					'head.head6',
				],
				brandList: [
					'head.head7',
					'head.head8',
					'head.head9',
					'head.head10',
					'head.head11',
					'head.head12',
					'head.head13',
					'head.head14',
					'head.head15',
				],
				partnerList: ['head.head90', 'head.head91', 'head.head92'],
				brandShow: false,
				partnerShow: false,
				inpValue: "",
				mask: false
			};
		},
		computed: {
			navIndex() {
				return this.$store.state.user.navIndex;
			},
		},
		methods: {
			// 语言切换
			langClick() {
				let language = localStorage.getItem('language');

				if (language) {
					if (language == 'zh') {
						localStorage.setItem('language', 'en');
						this.$i18n.locale = 'en'
					} else {
						localStorage.setItem('language', 'zh')
						this.$i18n.locale = 'zh'
					}

				} else {
					localStorage.setItem('language', 'zh')
					this.$i18n.locale = 'zh'
				}
			},
			brandClick(index) {
				this.$router.push({ path: `/brandList` })
				this.$store.commit('user/setBrandListIndex', index)
				this.$store.commit('user/setNavIndex', 3)
				return
			},

			partnerClick(index) {
				this.$router.push({ path: `/partnerList` })
				this.$store.commit('user/setPartnerIndex', index)
				this.$store.commit('user/setNavIndex', 4)
			},

			toHome() {
				this.$router.push({ path: `/` })
				this.$store.commit('user/setNavIndex', 0)
			},

			search() {
				let inpValue = this.inpValue;

				if (["BOAT To Bowl ", "BOAT", "To", "Bowl"].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 0)
				}
				if (["catit NUNA", "catit", "NUNA",].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 1)
				}
				if (["Corey (North paw & ProSeries)", "Corey", "North paw", "North", "paw", "ProSeries"].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 2)
				}
				if (["KOHA",].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 3)
				}
				if (["Nano SANITAS", "Nano", "SANITAS",].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 4)
				}
				if (["NWN",].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 5)
				}
				if (["Nutrience"].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 6)
				}
				if (["RAWZ"].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 7)
				}
				if (["VETWATER (CATWATER & DOGWATER)", "VETWATER", "CATWATER", "DOGWATER"].includes(inpValue)) {
					this.$router.push({ path: `/brandList` })
					this.$store.commit('user/setBrandListIndex', 8)
				}
				this.$store.commit('user/setNavIndex', 3);
				this.inpValue = '';
                this.mask=false
			}
		}

	};
</script>

<style lang="scss" scoped>
	//pc @media screen and (min-width: 800px)
	//mobile @media screen and (max-width: 800px)
	.head {
		padding: 22px 16px 49px 16px;
		font-size: 16px;
		color: #606060;
		background: #f0f0f0;
	}
	.bg {
		background: #fff;
	}
	.head-log {
		// 
		display: flex;
		align-items: center;
		justify-content: space-between;
		.logo {
			width: 260px;
			height: 47px;
		}
		.dow {
			width: 23px;
			height: 21px;
		}
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100%;
		z-index: 99;
		background: #c0c0c0;
	}
	.head-close {
		padding: 40px 20px 24px;
		// 
		text-align: right;
		img {
			width: 16px;
			height: 16px;
		}
	}
	.head-nav {
		.head-item {
			color: #333333;
			height: 57px;
			line-height: 56px;
			min-width: 64px;
			padding: 0 15px;
			text-align: center;
			// 

            span {
                margin-right: 20px;
            }
		}
		.active {
			color: #066eb7;
			font-weight: 600;
		}
        
	}
    .head-search {
        display: flex;
        align-items: center;
        justify-content: center;
    }
	.lang {
		// padding: 14px 0 22px;
		width: 24px;
		height: 20px;
		vertical-align: middle;
		
	}
	.search {
		position: relative;
		margin-left: 16px;
		display: flex;
		align-content: center;
		input {
			width: 244px;
			height: 36px;
			padding-left: 8px;
			z-index: 1;
			background: transparent;
			font-size: 14px;
			border: 1px solid rgba(151, 151, 151, 1);
			border-radius: 5px;
		}
		input::input-placeholder {
			color: #606060;
			font-weight: 400;
		}

		.search-img {
			margin-left: 6px;
			height: 36px;
            line-height: 36px;
			width: 45px;
			text-align: center;
			background: #606060;
			border-radius: 5px;
			
			img {
				width: 12px;
				height: 12px;
			}
		}
	}
</style>
