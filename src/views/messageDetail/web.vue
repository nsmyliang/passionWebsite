<template>
	<div class="messageDetail">
		<div class="title">
			<div class="title-txt">{{$t('message.message3')}}</div>
			<div class="title-search">
				<img src="@/assets/image/message-search.png">
			</div>
		</div>

		<div class="con">
			<div class="con-head">
				<div class="head-info">
					<div class="info-photo"><img src="@/assets/image/message-photo.png"></div>
					<div class="info-txt">
						Passion <img src="@/assets/image/message-write.png">
					</div>
					<div class="info-txt">{{$t('message.message4')}} · 1{{$t('message.message5')}}</div>
				</div>
				<div class="head-img"> <img src="@/assets/image/message-dot.png"></div>
			</div>
			<div class="con-title">
				{{$t(pageDate.title)}}
			</div>
			<div class="con-desc">
				{{$t(pageDate.txt)}}
			</div>
			<div class="con-banner">
				<img class="item-img" :src="require(`@/assets/image/message-banner${idx}.png`)">
			</div>
			<div class="con-share">
				<div v-for="(item,index) in 4" :key="index">
					<img class="item-img" :src="require(`@/assets/image/messageDetail-share${index + 1}.png`)">
				</div>
			</div>
			<div class="con-bottom">
				<div class="bottom-txt">
					<span>17{{$t('message.message8')}}</span>
					<span>0{{$t('message.message9')}}</span>
				</div>

				<div class="bottom-img">
					<img src="@/assets/image/message-praise.png">
				</div>
			</div>

		</div>

		<!-- <div class="footer">
			<div class="footer-head">
				<div>{{$t('message.messageDetail1')}}</div>
				<div>{{$t('message.messageDetail2')}}</div>
			</div>
			<div class="footer-con">
				<div class="footer-item">
					<div class="con-title">
						{{$t('message.messageDetail3')}}
					</div>
					<div class="con-desc">
						{{$t('message.messageDetail4')}}
					</div>
					<div class="con-bottom">
						<div class="bottom-txt">
							<div><img src="@/assets/image/messageDetail-look.png">17</div>
							<div><img src="@/assets/image/messageDetail-message.png">0</div>
						</div>

						<div class="bottom-img">
							<img src="@/assets/image/message-praise.png">
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>

</template>

<script>

	export default {
		props: {
			idx: {
				type: String,
				default: '',
			},
		},
		data() {

			return {
				list: [
					{
						title: 'message.message11',
						txt: 'message.message12'
					},
					{
						title: 'message.message13',
						txt: 'message.message14'
					},
					{
						title: 'message.message15',
						txt: 'message.message16'
					},
					{
						title: 'message.message17',
						txt: 'message.message18'
					},
				],
				pageDate: ''
			};
		},

		created() {
			this.pageDate = this.list[this.idx]
		},
		mounted() {

		},

	};
</script>

<style lang="scss" scoped>
	.messageDetail {
		width: 972px;
		margin: auto;
        margin-bottom: 54px;
		padding: 26px 20px;
		background: #f0f0f0;

		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title-txt {
				font-size: 16px;
				color: #353535;
			}
			.title-search {
				cursor: pointer;
				margin-right: 18px;
				img {
					height: 14px;
					width: 14px;
				}
			}
		}

		.con {
			margin-top: 54px;
			padding: 58px 61px;
			border: 1px solid rgba(202, 202, 202, 1);
			.con-head {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.head-info {
					display: flex;
					align-items: center;
					font-size: 12px;
					color: #353535;
					font-weight: 400;
					.info-photo {
						width: 32px;
						height: 32px;
						margin-right: 9px;
					}
					.info-txt {
						margin-right: 16px;
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

			.con-title {
				margin-top: 55px;
				font-size: 28px;
				color: #353535;
				font-weight: 400;
			}

			.con-desc {
				margin-top: 42px;
				font-size: 16px;
				color: #353535;
				font-weight: 400;
			}

			.con-banner {
				margin-top: 20px;
				img {
					width: 740px;
					height: 400px;
					display: block;
				}
			}

			.con-share {
				margin-top: 90px;
				display: flex;
				align-items: center;
				padding: 20px 0;
				border-top: 1px solid rgba(202, 202, 202, 1);
				border-bottom: 1px solid rgba(202, 202, 202, 1);
				div {
					margin-right: 30px;
				}
				img {
					width: 18px;
					height: 18px;
				}
			}
			.con-bottom {
				margin-top: 20px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 12px;
				color: #353535;
				font-weight: 400;
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

		.footer {
			padding: 30px 0 25px;
			.footer-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 16px;
				color: #353535;
				font-weight: 400;
				div:last-child {
					font-size: 14px;
				}
			}

			.footer-con {
				width: 290px;
				margin-top: 24px;
				padding: 25px;
				border: 1px solid rgba(202, 202, 202, 1);
				.footer-item {
					.con-title {
						font-size: 18px;
						color: #353535;
						line-height: 27px;
						font-weight: 400;
					}
					.con-desc {
						margin-top: 17px;
						font-size: 16px;
						color: #353535;
						line-height: 24px;
						font-weight: 400;
					}
					.con-bottom {
						margin-top: 70px;
						padding-top: 16px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 12px;
						border-top: 1px solid rgba(202, 202, 202, 1);
						.bottom-txt {
							display: flex;
							align-items: center;
							div {
								display: flex;
								align-items: center;
								margin-right: 16px;
								img {
									width: 20px;
									height: 14px;
									margin-right: 6px;
								}
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
</style>
