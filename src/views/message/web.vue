<template>
	<div class="message">
		<div class="title">
			<div></div>
			{{$t('message.message1')}}<span>{{$t('message.message2')}}</span>
		</div>

		<div class="con">
			<div class="con-title">
				<div class="title-txt">{{$t('message.message3')}}</div>
				<div class="title-search">
					<img src="@/assets/image/message-search.png">
				</div>
			</div>

			<div class="con-list">
				<div class="list-item" v-for="(item,index) in 2 " :key="index">
					<div class="list-left">
						<img src="@/assets/image/message-banner.png">
					</div>

					<div class="list-right" @click="toMessageDetail()">
						<div class="right-head">
							<div class="head-info">
								<img src="@/assets/image/message-photo.png">
								<div class="info-txt">
									<div>Passion <img src="@/assets/image/message-write.png"></div>
									<div>{{$t('message.message4')}} · 1{{$t('message.message5')}}</div>
								</div>
							</div>

							<div class="head-img"> <img src="@/assets/image/message-dot.png"></div>
						</div>
						<div class="right-title">
							{{$t('message.message6')}}
						</div>
						<div class="right-desc">
							{{$t('message.message7')}}
						</div>
						<div class="right-bottom">
							<div class="bottom-txt">
								<span>17{{$t('message.message8')}}</span>
								<span>0{{$t('message.message9')}}</span>
							</div>

							<div class="bottom-img">
								<img src="@/assets/image/message-praise.png">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	export default {

		data() {

			return {

			};
		},

		created() {

		},
		mounted() {

		},
		methods: {
			toMessageDetail() {
				this.$router.push({ path: `/messageDetail` })
				this.$store.commit('user/setNavIndex', 2)
			}
		}

	};
</script>

<style lang="scss" scoped>
	.message {
		padding-top: 31px;
		padding-bottom: 276px;

		background: #fafafa;
		.title {
			width: 980px;
			margin: auto;
			display: flex;
			align-items: center;
			font-size: 34px;
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
			width: 972px;
			margin: auto;
			margin-top: 23px;
			padding: 28px 20px;
			background: #f0f0f0;
			.con-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.title-txt {
					font-size: 16px;
					color: #353535;
				}
				.title-search {
					cursor: pointer;
					img {
						height: 14px;
						width: 14px;
					}
				}
			}

			.con-list {
				.list-item {
					margin-top: 30px;
					display: flex;
					&:first-child {
						margin-top: 50px;
					}
					&:nth-child(2n-1) {
						.list-right {
							border-left: none;
						}
					}
					&:nth-child(2n) {
						flex-direction: row-reverse;
						.list-right {
							border-right: none;
						}
					}
					.list-left {
						img {
							width: 448px;
							height: 338px;
							display: block;
						}
					}
					.list-right {
                        cursor: pointer;
						width: 484px;
						padding: 25px 37px;
						font-weight: 400;
						color: #353535;
						border: 1px solid rgba(202, 202, 202, 1);

						.right-head {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.head-info {
								display: flex;
								align-items: center;
								.info-photo {
									width: 32px;
									height: 32px;
								}
								.info-txt {
									margin-left: 9px;
									font-size: 12px;
									cursor: pointer;
									img {
										width: 9px;
										height: 15px;
									}
								}
							}

							.head-img {
								cursor: pointer;
								img {
									width: 3px;
									height: 13px;
								}
							}
						}

						.right-title {
							margin-top: 10px;
							font-size: 28px;
							color: #353535;
							font-weight: 400;
						}
						.right-desc {
							height: 157px;
							margin-top: 10px;
							font-size: 16px;
							color: #353535;
							font-weight: 400;
							border-bottom: 1px solid rgba(202, 202, 202, 1);
						}
						.right-bottom {
							margin-top: 15px;
							display: flex;
							align-items: center;
							justify-content: space-between;
							.bottom-txt {
								span {
									margin-right: 30px;
								}
							}
							.bottom-img {
								img {
									width: 16px;
									height: 13px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
