<template>
	<div class="partner">
		<div class="title">{{$t('partner.partner1')}}</div>
		<div class="con">
			<div class="con-item" v-for="(item,index) in brandList" :key="index" @click="brandClick(item.index)">
				<img class="item-img" :src="require(`@/assets/image/partner/${item.imgUrl}.png`)">
				<!-- <div class="item-txt">{{item.txt}}</div> -->
			</div>
		</div>
	</div>

</template>

<script>

	export default {

		data() {
			return {
				brandList: [
					{
						imgUrl: 'logo1',
						txt: 'Nutrience',
                        index:0,
					},
					{
						imgUrl: 'logo2',
						txt: 'Northwest Naturals',
                        index:1,
					},
					{
						imgUrl: 'logo3',
						txt: 'RAWZ',
                        index:2,
					},
					{
						imgUrl: 'logo4',
						txt: 'NANO SANITAS',
                        index:3,
					},
					{
						imgUrl: 'logo5',
						txt: 'North paw',
                        index:4,
					},
					{
						imgUrl: 'logo7',
						txt: 'catit',
                        index:5,
					},
					{
						imgUrl: 'logo8',
						txt: 'VET WATER',
                        index:6,
					},
					{
						imgUrl: 'logo9',
						txt: 'KOHA',
                        index:7,
					},
					{
						imgUrl: 'logo10',
						txt: 'BOAT TO BOWL',
                        index:8,
					},
				],
			};
		},

		created() {

		},
		mounted() {

		},
		methods: {
			brandClick(index) {
				this.$router.push({ path: `/brandList` })
				this.$store.commit('user/setBrandListIndex', index)
				this.$store.commit('user/setNavIndex', 3)
				return
			},
		}
	};
</script>

<style lang="scss" scoped>
	.partner {
        padding-bottom: 61px;
		background: #fff;

		.title {
			padding-top: 50px;
			font-size: 38px;
			color: #525252;
			text-align: center;
			font-weight: 500;
		}
		.margin{
			margin-top:40px;
		}
		.con {
			width: 1000px;
			margin: auto;
			display: flex;
			flex-wrap: wrap;
			.con-item {
				margin-top: 60px;
                width: 333px;
				text-align: center;
                cursor: pointer;


				.item-img {
					width: 204px;
					height: 88px;
				}
				.item-txt {
					font-size: 22px;
					color: #066eb7;
					font-weight: 600;
				}
			}
		}
	}
</style>
