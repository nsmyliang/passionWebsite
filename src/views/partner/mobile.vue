<template>
	<div class="partner">
		<div class="title">{{$t('partner.partner1')}}</div>
		<div class="con">
			<div class="con-item" v-for="(item,index) in partnerList" :key="index">
				<img class="item-img" :src="require(`@/assets/image/${item.imgUrl}.png`)">
				<div class="item-txt">{{$t(item.txt)}}</div>
			</div>
		</div>
	</div>

</template>

<script>

	export default {

		data() {
			return {
				partnerList: [
					{
						imgUrl: 'partner-banner1',
						txt: 'partner.partner2'
					},
					{
						imgUrl: 'partner-banner2',
						txt: 'partner.partner3'
					},
					{
						imgUrl: 'partner-banner3',
						txt: 'partner.partner4'
					},
				]
			};
		},

		created() {

		},
		mounted() {

		},

	};
</script>

<style lang="scss" scoped>
	.partner {
        padding-bottom: 61px;
		background: #f0f0f0;

		.title {
			padding: 20px 0 30px;
			font-size: 38px;
			color: #525252;
			text-align: center;
			font-weight: 500;
		}

		.con {
			text-align: center;
			.con-item {
				margin-bottom: 20px;
                &:last-child{

                    margin-bottom:0;
                }
				.item-img {
					width: 327px;
					height: 214px;
				}
				.item-txt {
					margin: auto;
					width: 140px;
					height: 42px;
					line-height: 42px;
					margin-top: 20px;
					font-size: 20px;
					color: #f0f0f0;
					background: #066eb7;
					box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
				}
			}
		}
	}
</style>
