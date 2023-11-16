<template>
	<div class="partner">
		<div class="title">{{$t('partner.partner1')}}</div>
		<div class="con">
			<div class="con-item">
				<img class="item-img" :src="pageData.imgUrl">
				<div class="item-txt">{{$t(pageData.txt)}}</div>
			</div>
		</div>
	</div>

</template>

<script>
	const banner1 = require('@/assets/image/partner-banner1.png')
	const banner2 = require('@/assets/image/partner-banner2.png')
	const banner3 = require('@/assets/image/partner-banner3.png')
	export default {

		data() {
			return {
				partnerList: [
					{
						imgUrl: banner1,
						txt: 'partner.partner2'
					},
					{
						imgUrl: banner2,
						txt: 'partner.partner3'
					},
					{
						imgUrl: banner3,
						txt: 'partner.partner4'
					},
				]
			};
		},
		computed: {
			pageData() {
				let partnerIndex = this.$store.state.user.partnerIndex;
				let pageData = this.partnerList[partnerIndex]
				return pageData
			},
		},
		created() {

		},
		mounted() {

		},

	};
</script>

<style lang="scss" scoped>
	.partner {
		padding-bottom: 200px;
		background: #f0f0f0;

		.title {
			padding: 34px 0 16px;
			font-size: 38px;
			color: #525252;
			text-align: center;
			font-weight: 500;
		}

		.con {
			width: 800px;
			margin: auto;
			text-align: center;
			.con-item {
				margin-bottom: 223px;
				&:last-child {
					margin-bottom: 0;
				}
				.item-img {
					width: 594px;
					height: 389px;
				}
				.item-txt {
					margin: auto;
					width: 140px;
					height: 42px;
					line-height: 42px;
					margin-top: 28px;
					font-size: 20px;
					color: #f0f0f0;
					background: #066eb7;
					box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
				}
			}
		}
	}
</style>
