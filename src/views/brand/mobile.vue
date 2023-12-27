<template>
	<div class="brand">
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide single-swiper" v-for="(item, index) of slideList"
						:key="'SingleSwiper' + index">
						<img :src="item.imgUrl" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="title">
			<div></div>
			{{$t('brand.brand2')}}
		</div>

		<div class="con">
			<div class="con-item" v-for="(item,index) in brandList" :key="index" @click="brandClick(item.index)">
				<img class="item-img" :src="require(`@/assets/image/${item.imgUrl}.png`)">
				<div class="item-txt">{{item.txt}}</div>
			</div>
		</div>
	</div>

</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.css'
	const banner0 = require('@/assets/image/brandList-banner0.png')
	const banner1 = require('@/assets/image/brandList-banner1.png')
	const banner2 = require('@/assets/image/brandList-banner2.png')
	const banner3 = require('@/assets/image/brandList-banner3.png')
	export default {

		data() {
			return {
				brandList: [
					{
						imgUrl: 'brand-logo1',
						txt: 'Nutrience',
                        index:0,
					},
					{
						imgUrl: 'brand-logo2',
						txt: 'Northwest Naturals',
                        index:1,
					},
					{
						imgUrl: 'brand-logo3',
						txt: 'RAWZ',
                        index:2,
					},
					{
						imgUrl: 'brand-logo4',
						txt: 'NANO SANITAS',
                        index:3,
					},
					{
						imgUrl: 'brand-logo5',
						txt: 'North paw',
                        index:4,
					},
					{
						imgUrl: 'brand-logo7',
						txt: 'catit',
                        index:5,
					},
					{
						imgUrl: 'brand-logo8',
						txt: 'VET WATER',
                        index:6,
					},
					{
						imgUrl: 'brand-logo9',
						txt: 'KOHA',
                        index:7,
					},
					{
						imgUrl: 'brand-logo10',
						txt: 'BOAT TO BOWL',
                        index:8,
					},
				],
				currentSwiper: null,

				slideList: [
					{ imgUrl: banner0 },
					{
						imgUrl: banner1
					},
					{
						imgUrl: banner2
					},
					{
						imgUrl: banner3
					},
				]
			};
		},

		mounted() {
			this.$nextTick(() => {
				this.initSwiper()
			})
		},
		methods: {
			brandClick(index) {
				this.$router.push({ path: `/brandList` })
				this.$store.commit('user/setBrandListIndex', index)
				this.$store.commit('user/setNavIndex', 3)
				return
			},
			//初始化swiper
			initSwiper() {
				// eslint-disable-next-line
				let vueComponent = this //获取vue组件实例
				this.currentSwiper = new Swiper('.swiper-container', {
					noSwiping: true,
                    noSwipingClass: '.swiper-container',
					loop: true, // 循环模式选项
					autoHeight: 'true', //开启自适应高度,容器高度由slide高度决定
					transitionDuration: 3000,
					speed: 2500,

					autoplay: {
						delay: 3000,
                        disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}, 
                    effect: 'fade',
					fadeEffect: {
						crossFade: true,
					},
				})
			},

			//销毁swiper
			destroySwiperHot() {
				try {
					this.currentSwiper.destroy(true, false)
				} catch (e) {
					console.log(e)
				}
			},

			//更新swiper
			updateSwiper() {
				this.$nextTick(() => {
					this.initSwiper()
				})
			}
		},
		beforeDestroy() {
			this.destroySwiperHot()
		}

	};
</script>
<style lang="scss" scoped>
	.brand {
        padding-bottom: 30px;
		overflow-x: hidden;
		// background: #f0f0f0;
		.banner {
            max-height: 104px;
			width: 100%;
            text-align: center;
            img {
                 max-height: 104px;
            }
		}
		.title {
			margin: 20px 24px 0;
			display: flex;
			align-items: center;
			font-size: 24px;
			line-height: 48px;
			font-weight: 600;
			color: #525252;

			div {
				width: 11px;
				height: 34px;
				display: block;
				margin-right: 9px;
				background: #bebebe;
			}
			span {
				font-weight: 200;
			}
		}
		.con {
            padding: 0 24px;
			display: flex;
			flex-wrap: wrap;
			.con-item {
				margin-top: 30px;
				margin-right: 11px;
				text-align: center;

				&:nth-child(2n) {
					margin-right: 0;
				}

				.item-img {
					width: 158px;
					height: 96px;
				}
				.item-txt {
                    width: 152px;
					font-size: 16px;
					color: #066eb7;
					font-weight: 600;
				}
			}
		}
	}

	::v-deep .swiper-pagination-bullets {
		bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	} 
	::v-deep .swiper-pagination-bullet {
		background: #fff;
		opacity: 1;
		width: 4px;
		height: 4px;
		margin: 0 8px;
	}
	::v-deep .swiper-pagination-bullet-active {
		width: 6px;
		height: 6px;
		border: 2px solid rgba(255, 255, 255, 1);
		background: transparent;
	}
</style>
