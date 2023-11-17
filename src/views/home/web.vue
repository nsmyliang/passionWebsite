<template>
	<div class="home">
		<div class="banner">
			<div class="banner-item">
				<img src="@/assets/image/home-banner.png">
			</div>
		</div>

		<div class="content">
			<div class="brand">
				<div class="brand-title">
					{{$t('home.home1')}}<span>{{$t('home.home2')}}</span>
					<img src="@/assets/image/home-angle.png">
				</div>
				<div class="brand-list">
					<div class="brand-item" v-for="(item,index) in 10" :key="index" @click="toBrand()">
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
				<div class="message-item" v-for="(item,index) in 2" :key="index" @click="toMessage()">
					<div class="message-con">
						<div class="con-img"><img src="@/assets/image/home-message1.png"></div>
						<div class="con-con">
							<div class="con-time">{{$t('home.home6')}}</div>
							<div class="con-title">{{$t('home.home7')}}</div>
							<div class="con-desc">{{$t('home.home8')}}</div>
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
					<img src="@/assets/image/home-product.png">
				</div>
			</div>
		</div>

		<pcContentFooter></pcContentFooter>
	</div>

</template>

<script>
	import pcContentFooter from '@/layout/components/pcContentFooter'
	export default {
		components: {
			pcContentFooter,
		},
		data() {

			return {

			};
		},

		created() {
           
		},
		mounted() {

		},
		methods: {
			toBrand(){
				this.$router.push({ path: `/brand` })
                this.$store.commit('user/setNavIndex', 3)
			},
            toMessage(){
				this.$router.push({ path: `/message` })
                this.$store.commit('user/setNavIndex', 2)
            }
		},

	};
</script>

<style lang="scss" scoped>
	.home {
		width: 1000px;
		padding-bottom: 117px;
		margin: auto;
		.banner {
			width: 1000px;
			height: 480px;
		}
		.content {
			margin-top: 30px;
			display: flex;

			.brand {
				margin-top: 12px;
				position: relative;
				width: 227px;
				height: 256px;
				border: 1px solid rgba(230, 230, 230, 0.5);

				.brand-title {
					position: absolute;
					top: -4px;
					height: 30px;
					font-size: 15px;
					line-height: 15px;
					color: #525252;
					background: #fff;
					span {
						font-weight: 200;
					}
					img {
						width: 8px;
						height: 7px;
						margin-left: 6px;
					}
				}
				.brand-list {
					padding: 22px 25px 0;
					display: flex;
					justify-content: space-between;
					flex-flow: wrap;
					.brand-item {
                        cursor: pointer;
						margin-top: 10px;
						&:first-child {
							margin-top: 0;
						}
						&:nth-child(2) {
							margin-top: 0;
						}

                        img {
                            height: 33px;
                            width: 76px;
                        }
					}
				}
			}

			.message {
				margin-left: 16px;
				width: 415px;
				.message-title {
					display: flex;
					justify-content: space-between;
					font-size: 34px;
					font-weight: 500;

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
						width: 243px;
						background: #bebebe;

						span {
							height: 15px;
							width: 94px;
							text-align: center;
							display: block;
							background: #525252;
							cursor: pointer;
						}
					}
				}
				.message-item {
					margin-top: 17px;
					border-bottom: 1px dashed rgba(209, 209, 209, 1);
					cursor: pointer;
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
								width: 285px;
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
				margin-left: 37px;
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
</style>
