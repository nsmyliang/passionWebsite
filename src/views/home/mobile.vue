<template>
	<div class="home">
		<div class="banner">
			<div class="swiper-container" id="swiper1">
				<div class="swiper-wrapper">
					<div class="swiper-slide single-swiper" v-for="(item, index) of 3" :key="index">
						<div class="banner-item">
							<img :src="require(`@/assets/image/home-banner${index}.png`)">
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>

		<div class="content">
			<div class="brand">
				<div class="brand-title">
					{{$t('home.home1')}}<span>{{$t('home.home2')}}</span>
					<img src="@/assets/image/home-angle.png">
				</div>
				<div class="brand-list">
					<div class="brand-item" v-for="(item,index) in 10" :key="index" @click="toBrand(index)">
						<img :src="require(`@/assets/image/home-brand${index+1}.png`)">
					</div>
				</div>
			</div>

			<div class="message">
				<div class="message-title">
					<div class="title-left">
						<div></div>
						{{$t('home.home3')}}<span>{{$t('home.home4')}}</span>
					</div>
					<div class="title-right">
						<span>{{$t('home.home5')}}</span>
					</div>
				</div>
				<div class="message-item" v-for="(item,index) in list" :key="index" @click="toMessage()">
					<div class="message-con">
						<div class="con-img"><img :src="require(`@/assets/image/message-banner${index}.png`)"></div>
						<div class="con-con">
							<div class="con-time">{{$t(item.time)}}</div>
							<div class="con-title">{{$t(item.title)}}</div>
							<div class="con-desc">{{$t(item.desc)}}</div>
						</div>
					</div>
					<div class="con-btn">
						{{$t('home.home9')}}
					</div>
				</div>
			</div>

			<div class="product">
				<div class="product-title">
					{{$t('home.home10')}}<span>{{$t('home.home11')}}</span>
				</div>
				<div class="product-name">{{$t('home.home12')}}</div>
				<div class="product-img">
					<div class="swiper-container" id="swiper2">
						<div class="swiper-wrapper">
							<div class="swiper-slide single-swiper" v-for="(item, index) of 3" :key="index">
								<div class="banner-item">
									<img :src="require(`@/assets/image/home-product${index}.png`)">
								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
			</div>
		</div>

		<mobileContentFooter></mobileContentFooter>
	</div>

</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.css'
	import mobileContentFooter from '@/layout/components/mobileContentFooter'
	export default {
		components: {
			mobileContentFooter,
		},
		data() {

			return {
				productIndex: 0,
				list: [
					{
						time: 'message.message4',
						title: 'message.message11',
						desc: 'message.message12'
					},
					{
						time: 'message.message4',
						title: 'message.message13',
						desc: 'message.message14'
					}
				]
			};
		},

		created() {

		},
		mounted() {
			this.$nextTick(() => {
				this.initSwiper()
				this.initSwiper1()
			})
		},
		methods: {
			//初始化swiper
			initSwiper() {
				// eslint-disable-next-line
				let vueComponent = this //获取vue组件实例
				this.currentSwiper = new Swiper('#swiper1', {
					// noSwiping: true,
					// noSwipingClass: '.swiper-container',
					loop: true, // 循环模式选项
					autoHeight: 'true', //开启自适应高度,容器高度由slide高度决定
					transitionDuration: 3000,
					speed: 2500,

					autoplay: {
						delay: 6000,
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

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						hideOnClick: true,
					},
				})
			},
			initSwiper1() {
				// eslint-disable-next-line
				let vueComponent = this //获取vue组件实例
				this.currentSwiper = new Swiper('#swiper2', {
					// noSwiping: true,
					// noSwipingClass: '.swiper-container',
					loop: true, // 循环模式选项
					autoHeight: 'true', //开启自适应高度,容器高度由slide高度决定
					transitionDuration: 3000,
					speed: 2500,

					autoplay: {
						delay: 6000,
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

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						hideOnClick: true,
					},
				})
			},
			toBrand(index) {
				this.$router.push({ path: `/brandList` })
				if (index < 5) {
					this.$store.commit('user/setBrandListIndex', index)
				} else {
					this.$store.commit('user/setBrandListIndex', index - 1)
				}
				this.$store.commit('user/setNavIndex', 3)
			},
			toMessage() {
				this.$router.push({ path: `/message` })
				this.$store.commit('user/setNavIndex', 2)
			}
		},

	};
</script>

<style lang="scss" scoped>
	.home {
		padding: 0 15px;

		.banner {
			text-align: center;
			img {
				width: 100%;
			}
		}
		.content {
			margin-top: 30px;
			.brand {
				margin-top: 21px;
				.brand-title {
					font-size: 22px;
					color: #525252;
					line-height: 23.41px;
					font-weight: 600;
					span {
						font-weight: 200;
					}
					img {
						width: 12px;
						height: 10px;
						margin-left: 16px;
					}
				}
				.brand-list {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					.brand-item {
						margin-top: 20px;
						img {
							width: 150px;
						}
					}
				}
			}

			.message {
				margin-top: 31px;
				.message-title {
					display: flex;
					justify-content: space-between;
					font-size: 26px;
					font-weight: 600;

					.title-left {
						display: flex;
						align-items: center;
						font-size: 26px;
						line-height: 37px;
						font-weight: 600;
						color: #525252;
						div {
							width: 10px;
							height: 23px;
							display: block;
							margin-right: 9px;
							background: #bebebe;
						}
						span {
							font-weight: 200;
						}
					}
					.title-right {
						margin-top: 17px;
						height: 15px;
						font-size: 11px;
						color: #ffffff;
						font-weight: 400;
						width: 180px;
						background: #bebebe;

						span {
							height: 15px;
							width: 94px;
							text-align: center;
							display: block;
							background: #525252;
						}
					}
				}
				.message-item {
					margin-top: 17px;
					border-bottom: 1px dashed rgba(209, 209, 209, 1);

					.message-con {
						display: flex;
						align-items: center;

						.con-img {
							height: 80px;
							width: 105px;
							display: flex;
							align-items: center;
							img {
								max-width: 90px;
								max-height: 80px;
								margin: auto;
							}
						}

						.con-con {
							.con-time {
								font-size: 12px;
								color: #000000;
								letter-spacing: 0;
								font-weight: 400;
							}
							.con-title {
								margin-top: 5px;
								font-size: 14px;
								color: #000000;
								letter-spacing: 0;
								line-height: 18px;
								font-weight: 500;
							}
							.con-desc {
								margin-top: 5px;
								width: 207px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;

								font-size: 12px;
								color: #333333;
								letter-spacing: 0;
								line-height: 18px;
								font-weight: 500;
							}
						}
					}
					.con-btn {
						text-align: right;
						font-size: 10px;
						color: #333333;
						letter-spacing: 0;
						line-height: 18px;
						font-weight: 400;
					}
				}
			}

			.product {
				margin-top: 30px;
				.product-title {
					font-size: 20px;
					color: #525252;
					font-weight: 600;
					span {
						font-weight: 200;
					}
				}
				.product-name {
					margin-top: 4px;
					height: 15px;
					width: 63px;
					font-size: 11px;
					color: #ffffff;
					text-align: center;
					font-weight: 400;
					background: #525252;
				}
				.product-img {
					margin-top: 8px;
					width: 192px;
					height: 210px;
				}
			}
		}
	}
	::v-deep .swiper-pagination-bullets {
		bottom: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	::v-deep .swiper-pagination-bullet {
		background: #d8d8d8;
		opacity: 1;
		width: 7px;
		height: 7px;
		margin: 0 8px;
	}
	::v-deep .swiper-pagination-bullet-active {
		width: 7px;
		height: 7px;

		background: #fff;
	}
</style>
