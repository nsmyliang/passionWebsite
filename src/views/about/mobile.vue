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
				<p>Passion Pet Group was established in 2012. We are specialized in marketing famous and popular pet
					food
					brands from the United States and Canada to mainland China, Hong Kong and Macau. With our
					professional
					experiences, we have successfully established a comprehensive sales network in the pet food
					industry.
					As the business continues to develop, Passion Pet Group has established three wholly owned
					subsidiaries:
					Passion Pet Nutrition Limited, iPoint Trading Limited & NuPet Trading Limited.</p>
				<p>Passion Pet Nutrition Limited’s main brands include Hagen Nutrience, RAWZ, and Northwest Naturals.
					Nutrience is a Hagen family-owned brand. Hagen was established in 1955 and insists on producing only
					the
					finest pet foods. RAWZ was established in 2015 by the Scott family and is rated five-star on the Dog
					Food Advisor website. Northwest Naturals uses 6000 bars High Pressure Processing Technology (HPP) to
					produce fresh, sterile, highly nutritious freeze-dried pet foods.</p>
				<p>Point Trading Limited’s main brands include Caran4, Earthborn Holistic, Venture, Propac Ultimates,
					Sportmix Wholesomes and Tucker’s. Caran4 is a high-end pet food brand from Canada, it uses quick
					baked
					air-dried method to produce raw diet grade pet foods. Earthborn Holistic is an all-life stages
					multi-functional pet nutrition brand. Venture is a high-end sub-brand of Earthborn Holistic, which
					provides excellent and unique animal proteins for dogs. Propac Ultimates produces 100% natural,
					hormone-free pet foods; Sportmix Wholesomes provides balanced nutrition to pets that helps to
					strengthen
					their physique; Tucker's is a family-owned handmade pet food brand.</p>
				<p>NuPet Trading Limited's main brands includes Nulo and Steve’s Real Food. Nulo is famous for their
					high
					in animal-based protein, low in carbs and use low-glycemic ingredients, they also have a patented
					probiotic to aid with digestion that survives the cooking process, shelf life and is viable in your
					pet’s digestive tract. Steve’s Real Food is a pioneer in raw pet food manufacturing. They were the
					first
					commercial raw brand on the market in 1998.</p>

				<p>With the help of the founder's rich knowledge, experience and forward-thinking, Passion Pet Group
					rapidly developed in the field of pet foods and pet health products in the past few years.
					Furthermore,
					we have a team of passionate employees who are motivated and enthusiastic in marketing high-quality
					products and establishing top-level pet service experience to our distributors. Our direct sales
					team is
					rooted in Hong Kong, and our sales covers Hong Kong, Macau and Mainland China.</p>

				<p>Our strategic partners are distributed in major cities of China. Our China team efficiently
					distributes
					pet products, caring services and core values to Chinese pet lovers and to meet the needs of pets in
					every corner of China.</p>
				<!-- <div class="list-item">
					<div class="item-title">{{$t('about.about3')}}</div>
					<div class="item-txt">
						{{$t('about.about4')}}
					</div>
					<div class="item-desc">
						{{$t('about.about5')}}
					</div>
				</div>
				<div class="list-item">
					<div class="item-title">{{$t('about.about3')}}</div>
					<div class="item-txt">
						<p>{{$t('about.about6')}}</p>
						<p>{{$t('about.about7')}}</p>
					</div>
				</div> -->
			</div>
		</div>
		<pcContentfooter></pcContentfooter>
	</div>

</template>

<script>
	import pcContentfooter from '@/layout/components/pcContentfooter'
	export default {
		components: {
			pcContentfooter,
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
			padding-bottom: 78px;

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
				// margin-top: 19px;
				// .list-item {
				// 	margin-bottom: 30px;
				// 	.item-title {
				// 		width: 107px;
				// 		height: 15px;
				// 		font-size: 11px;
				// 		color: #ffffff;
				// 		text-align: center;
				// 		background: #525252;
				// 	}
				// 	.item-txt {
				// 		margin-top: 10px;
				// 		font-size: 10px;
				// 		color: #353535;
				// 		letter-spacing: 0;
				// 		font-weight: 400;
				// 	}
				// 	.item-desc {
				// 		margin-top: 30px;
				// 		font-size: 16px;
				// 		font-style: italic;
				// 		color: #7b7b7b;
				// 	}
				// }
			}
		}
	}
</style>
