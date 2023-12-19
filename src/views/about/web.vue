<template>
	<div class="about">
		<div class="banner">
			<img src="@/assets/image/about-banner.png">
		</div>
		<div class="con">
			<div class="con-title">
				<div></div>
				{{$t('about.about1')}}<span>{{$t('about.about2')}}</span>
				<div class="title-border"></div>
			</div>
			<div class="con-list">

				<div class="list-item">
					<!-- <div class="item-title">{{$t('about.about3')}}</div> -->
					<div class="item-txt">
						<p>{{$t('about.about4')}}</p>
						<p>{{$t('about.about5')}}</p>
						<p>{{$t('about.about6')}}</p>
						<p>{{$t('about.about7')}}</p>
						<p>{{$t('about.about8')}}</p>
						<p>{{$t('about.about9')}}</p>
					</div>
					<!-- <div class="item-desc">
						{{$t('about.about5')}}
					</div> -->
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

	};
</script>

<style lang="scss" scoped>
	.about {
		width: 1000px;
		margin: auto;
		padding-bottom: 100px;
		.banner {
			padding-top: 16px;
			text-align: center;
			img {
				width: 1000px;
				height: 585px;
			}
		}
		.con {
			width: 1000px;
			margin: auto;
			margin-top: 38px;
			padding-bottom: 30px;

			.con-title {
				position: relative;
				display: flex;
				align-items: center;
				font-size: 26px;
				color: #525252;
				line-height: 37px;
				font-weight: 600;

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
				.title-border {
					position: absolute;
					left: 131px;
					bottom: 5px;
					height: 1px;
					width: 552px;
					background: rgba(209, 209, 209, 1);
				}
			}

			.con-list {
				p {
					margin-left: 20px;
					text-indent: 40px;
					margin-top: 19px;
					color: #353535;
				}
				margin-top: 19px;
				.list-item {
					margin-bottom: 30px;
					.item-title {
						width: 107px;
						height: 15px;
						font-size: 15px;
						color: #ffffff;
						text-align: center;
						background: #525252;
					}
					.item-txt {
						margin-top: 10px;
						font-size: 14px;
						color: #353535;
						letter-spacing: 0;
						font-weight: 400;
					}
					.item-desc {
						margin-top: 30px;
						font-size: 16px;
						font-style: italic;
						color: #7b7b7b;
					}
				}
			}
		}
	}
</style>
