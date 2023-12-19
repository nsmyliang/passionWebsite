<template>
	<!-- 头部 -->
	<div class="head">
		<div class="head-log" @click="toHome()">
			<img src="@/assets/image/logo.png">
		</div>
		<div class="head-nav">
			<div class="head-item" :class="index==navIndex?'active':''" v-for="(item,index) in navList"
				@click="navBtn(index)" :key="index">

				{{index!=3?$t(item):''}}
				<div class="head-brand" v-if="index==3" @mouseenter="brandShow=true" @mouseleave="brandShow=false">
					{{$t('head.head3')}}
					<div class="select left" v-if="brandShow">
						<div class="option-item width" v-for="(item,idx) in brandList" :key="idx"
							@click.stop="brandClick(idx)">
							{{ $t(item)}}
						</div>
					</div>
				</div>
				<!-- <div class="head-partner" v-if="index==4" @mouseenter="partnerShow=true"
					@mouseleave="partnerShow=false">
					{{$t('head.head4')}}
					<div class="select" v-if="partnerShow">
						<div class="option-item " v-for="(item,idx) in partnerList" :key="idx"
							@click.stop="partnerClick(idx)">
							{{$t(item)}}
						</div>
					</div>
				</div> -->
			</div>
			<div class="border">|</div>
			<img class="lang" src="@/assets/image/lang.png" @click="langClick()">
			<div class="search">
				<input type="text" :placeholder="$t('head.head94')" v-model="inpValue">
				<div class="search-img"><img src="@/assets/image/home-search.png" @click="search()"></div>
			</div>
		</div>
	</div>
</template>

<script>
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
				this.inpValue = ''
			}
		}

	};
</script>

<style lang="scss" scoped>
	// pc @media screen and (min-width: 800px)
	//mobile @media screen and (max-width: 800px)
	.head {
		font-size: 16px;
		color: #606060;
		background: #f0f0f0;
	}
	.head-log {
		padding: 18px 0 18px;
		text-align: center;
		border-bottom: 1px solid #909090;
		cursor: pointer;
		img {
			width: 407px;
			height: 74px;
		}
	}
	.head-nav {
		box-sizing: border-box;

		display: flex;
		align-items: center;
		justify-content: center;

		.head-item {
			color: #979797;
			height: 57px;
			line-height: 56px;
			min-width: 64px;
			padding: 0 15px;
			cursor: pointer;
			&:nth-child(4){
				padding: 0;
			}
			.head-brand,
			.head-partner {
				position: relative;
				// width: 64px;
				padding: 0 15px;
			}
			.select {
				position: absolute;
				left: 2px;
				top: 56px;
				z-index: 2;
				padding: 5px 12px;

				background: #f0f0f0;
				box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
				.option-item {
					width: 64px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 16px;
					font-weight: 400;
					line-height: 22px;
                    padding-bottom: 9px;
					color: #606060;
                    &:last-child {
                         padding-bottom: 0px;
                    }
				}

				.width {
					width: 160px;
				}
				.option-item:hover {
					color: #066eb7;
				}
			}
			.left {
				left: -30px;
			}
		}
		.active {
			color: #066eb7;
			font-weight: 600;
		}
		.border {
			margin: 0 30px 0 15px;
		}
		.lang {
			// padding: 14px 0 22px;
			width: 24px;
			height: 20px;
			vertical-align: middle;
			cursor: pointer;
		}
		.search {
			position: relative;
			margin-left: 30px;
			display: flex;
			align-content: center;
			input {
				width: 116px;
				height: 22px;
				padding-left: 8px;
				z-index: 1;
				background: transparent;
				font-size: 14px;
				border: 1px solid rgba(151, 151, 151, 1);
				border-radius: 2px;
			}
			input::input-placeholder {
				color: #606060;
				font-weight: 400;
			}

			.search-img {
				margin-left: 2px;
				height: 22px;
				width: 22px;
				text-align: center;
				background: #606060;
				border-radius: 2px;
				cursor: pointer;
				img {
					width: 12px;
					height: 12px;
				}
			}
		}
	}
</style>
