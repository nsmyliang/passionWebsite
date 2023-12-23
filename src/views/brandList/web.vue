<template>
	<div class="brand">
		<div class="banner">
			<div class="banner-item">
				<img :src="pageData.banner">
			</div>
		</div>
		<div class="title">
			<div></div>
			{{$t('brandList.brandList1')}} {{$t(pageData.title)}}
		</div>
		<div class="desc">
			{{$t(pageData.desc)}}
		</div>

		<div class="title">
			<div></div>
			{{$t(pageData.name)}} {{$t('brandList.brandList2')}}
		</div>
		<div class="con">
			<div class="con-list" v-for="(item,idx) in pageData.data" :key="idx">
				<!-- <div class="con-nav">{{$t(item.nav)}}</div> -->
				<div class="con-nav"><img :src="item.logo?require(`@/assets/image/brandList/${item.logo}.png`):''">
				</div>
				<div class="con-con">
					<!-- <div class="con-item " :class="brandListIndex==1?'active':''" v-for="(item,index) in item.con" :key="index"> -->
					<div class="con-item " v-for="(item,index) in item.con" :key="index">
						<div class="item-img">
							<img class="item-img" :src="require(`@/assets/image/brandList/${item.img}.png`)">
						</div>

						<div class="item-txt">
							<div class="item-title">
								{{$t(item.title)}}
							</div>
							<div class="item-desc">
								{{$t(item.txt)}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	const banner1 = require('@/assets/image/brandList-banner1.png')
	const banner2 = require('@/assets/image/brandList-banner2.png')
	const banner3 = require('@/assets/image/brandList-banner3.png')
	// const boat1 = require('@/assets/image/brandList-boat1.png')
	// const boat2 = require('@/assets/image/brandList-boat2.png')
	// const boat3 = require('@/assets/image/brandList-boat3.png')
	// const catit1 = require('@/assets/image/brandList-catit1.png')
	// const catit2 = require('@/assets/image/brandList-catit2.png')
	// const north1 = require('@/assets/image/brandList-north1.png')
	// const north2 = require('@/assets/image/brandList-north2.png')
	// const north3 = require('@/assets/image/brandList-north3.png')
	export default {

		data() {
			return {
				brandList: [
					// Nutrience
					{
						banner: banner3,
						title: 'brandList.nutrienceName',
						name: 'brandList.nutrienceName',
						desc: 'brandList.nutrienceDesc',
						data: [
							{
								nav: '',
								logo: 'nutrience-logo',
								con: [
									{
										img: 'Nutrience1',
										title: 'brandList.nutrience1',
										txt: 'brandList.nutrience2'
									},
									{
										img: 'Nutrience2',
										title: 'brandList.nutrience3',
										txt: 'brandList.nutrience4'
									},
									{
										img: 'Nutrience3',
										title: 'brandList.nutrience5',
										txt: 'brandList.nutrience6'
									},
									{
										img: 'Nutrience4',
										title: 'brandList.nutrience7',
										txt: 'brandList.nutrience8'
									},
									{
										img: 'Nutrience5',
										title: 'brandList.nutrience9',
										txt: 'brandList.nutrience10'
									},
									{
										img: 'Nutrience6',
										title: 'brandList.nutrience11',
										txt: 'brandList.nutrience12'
									},
									{
										img: 'Nutrience7',
										title: 'brandList.nutrience13',
										txt: 'brandList.nutrience14'
									},
									{
										img: 'Nutrience8',
										title: 'brandList.nutrience15',
										txt: 'brandList.nutrience16'
									},
									{
										img: 'Nutrience9',
										title: 'brandList.nutrience17',
										txt: 'brandList.nutrience18'
									},
									{
										img: 'Nutrience10',
										title: 'brandList.nutrience19',
										txt: 'brandList.nutrience20'
									},
									{
										img: 'Nutrience11',
										title: 'brandList.nutrience21',
										txt: 'brandList.nutrience22'
									},
									{
										img: 'Nutrience12',
										title: 'brandList.nutrience23',
										txt: 'brandList.nutrience24'
									},
									{
										img: 'Nutrience13',
										title: 'brandList.nutrience25',
										txt: 'brandList.nutrience26'
									},
									{
										img: 'Nutrience14',
										title: 'brandList.nutrience27',
										txt: 'brandList.nutrience28'
									},
									{
										img: 'Nutrience15',
										title: 'brandList.nutrience29',
										txt: 'brandList.nutrience30'
									},
									{
										img: 'Nutrience16',
										title: 'brandList.nutrience31',
										txt: 'brandList.nutrience32'
									},
								]
							},
						]
					},

					//Northwest Naturals
					{
						banner: banner3,
						title: 'brandList.NorthwestNaturalsName',
						name: 'brandList.NorthwestNaturalsName',
						desc: 'brandList.NorthwestNaturalsDesc',
						data: [
							{
								nav: '',
								logo: 'north-logo',
								con: [
									{
										img: 'north1',
										title: 'brandList.NorthwestNaturals1',
										txt: 'brandList.NorthwestNaturals2'
									}, {
										img: 'north2',
										title: 'brandList.NorthwestNaturals3',
										txt: 'brandList.NorthwestNaturals4'
									},
									{
										img: 'north3',
										title: 'brandList.NorthwestNaturals5',
										txt: 'brandList.NorthwestNaturals6'
									},
									{
										img: 'north4',
										title: 'brandList.NorthwestNaturals7',
										txt: 'brandList.NorthwestNaturals8'
									},
									{
										img: 'north5',
										title: 'brandList.NorthwestNaturals9',
										txt: 'brandList.NorthwestNaturals10'
									},
									{
										img: 'north6',
										title: 'brandList.NorthwestNaturals11',
										txt: 'brandList.NorthwestNaturals12'
									},
									{
										img: 'north7',
										title: 'brandList.NorthwestNaturals13',
										txt: 'brandList.NorthwestNatural14'
									}, {
										img: 'north8',
										title: 'brandList.NorthwestNaturals15',
										txt: 'brandList.NorthwestNaturals16'
									},
									{
										img: 'north9',
										title: 'brandList.NorthwestNaturals17',
										txt: 'brandList.NorthwestNaturals18'
									},
									{
										img: 'north10',
										title: 'brandList.NorthwestNaturals19',
										txt: 'brandList.NorthwestNaturals20'
									},
									{
										img: 'north11',
										title: 'brandList.NorthwestNaturals21',
										txt: 'brandList.NorthwestNaturals22'
									},
									{
										img: 'north12',
										title: 'brandList.NorthwestNaturals23',
										txt: 'brandList.NorthwestNaturals24'
									},
									{
										img: 'north13',
										title: 'brandList.NorthwestNaturals25',
										txt: 'brandList.NorthwestNaturals26'
									}, {
										img: 'north14',
										title: 'brandList.NorthwestNaturals27',
										txt: 'brandList.NorthwestNaturals28'
									},
									{
										img: 'north15',
										title: 'brandList.NorthwestNaturals29',
										txt: 'brandList.NorthwestNaturals30'
									},
									{
										img: 'north16',
										title: 'brandList.NorthwestNaturals31',
										txt: 'brandList.NorthwestNaturals32'
									},
									{
										img: 'north17',
										title: 'brandList.NorthwestNaturals33',
										txt: 'brandList.NorthwestNaturals34'
									},
									{
										img: 'north18',
										title: 'brandList.NorthwestNaturals35',
										txt: 'brandList.NorthwestNaturals36'
									},
									{
										img: 'north19',
										title: 'brandList.NorthwestNaturals37',
										txt: 'brandList.NorthwestNaturals38'
									}, {
										img: 'north20',
										title: 'brandList.NorthwestNaturals39',
										txt: 'brandList.NorthwestNaturals40'
									},
									{
										img: 'north21',
										title: 'brandList.NorthwestNaturals41',
										txt: 'brandList.NorthwestNaturals42'
									},
									{
										img: 'north22',
										title: 'brandList.NorthwestNaturals43',
										txt: 'brandList.NorthwestNaturals44'
									},
									{
										img: 'north23',
										title: 'brandList.NorthwestNaturals45',
										txt: 'brandList.NorthwestNaturals46'
									},
									{
										img: 'north24',
										title: 'brandList.NorthwestNaturals47',
										txt: 'brandList.NorthwestNaturals48'
									},
									{
										img: 'north25',
										title: 'brandList.NorthwestNaturals49',
										txt: 'brandList.NorthwestNaturals50'
									}
								]
							}
						],
					},
					//RAWZ
					{
						banner: banner3,
						title: 'brandList.rawzName',
						name: 'brandList.rawzName',
						desc: 'brandList.rawzDesc',
						logo: '',
						data: [
							{
								nav: '',
								logo: 'rawz-logo',
								con: [
									{
										img: 'rawz1',
										title: 'brandList.rawz1',
										txt: 'brandList.rawz2'
									},
									{
										img: 'rawz2',
										title: 'brandList.rawz3',
										txt: 'brandList.rawz4'
									},
									{
										img: 'rawz3',
										title: 'brandList.rawz5',
										txt: 'brandList.rawz6'
									},
									{
										img: 'rawz4',
										title: 'brandList.rawz7',
										txt: 'brandList.rawz8'
									},
									{
										img: 'rawz5',
										title: 'brandList.rawz9',
										txt: 'brandList.rawz10'
									},
									{
										img: 'rawz6',
										title: 'brandList.rawz11',
										txt: 'brandList.rawz12'
									},
									{
										img: 'rawz7',
										title: 'brandList.rawz13',
										txt: 'brandList.rawz14'
									},
									{
										img: 'rawz8',
										title: 'brandList.rawz15',
										txt: 'brandList.rawz16'
									},
									{
										img: 'rawz9',
										title: 'brandList.rawz17',
										txt: 'brandList.rawz18'
									},
									{
										img: 'rawz10',
										title: 'brandList.rawz19',
										txt: 'brandList.rawz20'
									},
									{
										img: 'rawz11',
										title: 'brandList.rawz21',
										txt: 'brandList.rawz22'
									},
									{
										img: 'rawz12',
										title: 'brandList.rawz23',
										txt: 'brandList.rawz24'
									},
									{
										img: 'rawz13',
										title: 'brandList.rawz25',
										txt: 'brandList.rawz26'
									},
									{
										img: 'rawz14',
										title: 'brandList.rawz27',
										txt: 'brandList.rawz28'
									},
									{
										img: 'rawz15',
										title: 'brandList.rawz29',
										txt: 'brandList.rawz30'
									},
									{
										img: 'rawz16',
										title: 'brandList.rawz31',
										txt: 'brandList.rawz32'
									},
									{
										img: 'rawz17',
										title: 'brandList.rawz33',
										txt: 'brandList.rawz34'
									},
									{
										img: 'rawz18',
										title: 'brandList.rawz35',
										txt: 'brandList.rawz36'
									},
									{
										img: 'rawz19',
										title: 'brandList.rawz37',
										txt: 'brandList.rawz38'
									},
								]
							},
						]
					},

					// NANO SANITAS
					{
						banner: banner3,
						title: 'brandList.NanoSanitasName',
						name: 'brandList.NanoSanitasName',
						desc: 'brandList.NanoSanitasDesc',
						logo: 'NanoSANITAS-logo',
						data: [
							{
								nav: '',
								logo: 'NanoSANITAS-logo',
								con: [
									{
										img: 'NanoSANITAS1',
										title: 'brandList.NanoSanitas1',
										txt: 'brandList.NanoSanitas2'
									}, {
										img: 'NanoSANITAS2',
										title: 'brandList.NanoSanitas3',
										txt: 'brandList.NanoSanitas4'
									}, {
										img: 'NanoSANITAS3',
										title: 'brandList.NanoSanitas5',
										txt: 'brandList.NanoSanitas6'
									}, {
										img: 'NanoSANITAS4',
										title: 'brandList.NanoSanitas7',
										txt: 'brandList.NanoSanitas8'
									}, {
										img: 'NanoSANITAS5',
										title: 'brandList.NanoSanitas9',
										txt: 'brandList.NanoSanitas10'
									}, {
										img: 'NanoSANITAS6',
										title: 'brandList.NanoSanitas11',
										txt: 'brandList.NanoSanitas12'
									},
									{
										img: 'NanoSANITAS7',
										title: 'brandList.NanoSanitas13',
										txt: 'brandList.NanoSanitas14'
									}, {
										img: 'NanoSANITAS8',
										title: 'brandList.NanoSanitas15',
										txt: 'brandList.NanoSanitas16'
									},
								]
							},
						]
					},
					//Corey North paw 
					{
						banner: banner3,
						title: 'brandList.northPawsName',
						name: 'brandList.northPawsName',
						desc: 'brandList.northPawsDesc',
						data: [
							{
								nav: '',
								logo: 'NorthPaw-logo1',
								con: [
									{
										img: 'NorthPaw1',
										title: 'brandList.northPaws1',
										txt: 'brandList.northPaws2'
									},
									{
										img: 'NorthPaw2',
										title: 'brandList.northPaws3',
										txt: 'brandList.northPaws4'
									},
									{
										img: 'NorthPaw3',
										title: 'brandList.northPaws5',
										txt: 'brandList.northPaws6'
									},
									{
										img: 'NorthPaw4',
										title: 'brandList.northPaws7',
										txt: 'brandList.northPaws8'
									},
									{
										img: 'NorthPaw5',
										title: 'brandList.northPaws9',
										txt: 'brandList.northPaws10'
									},
									{
										img: 'NorthPaw6',
										title: 'brandList.northPaws11',
										txt: 'brandList.northPaws12'
									},
									{
										img: 'NorthPaw7',
										title: 'brandList.northPaws13',
										txt: 'brandList.northPaws14'
									},
								]
							},
							{
								nav: 'brandList.brandList80',
								logo: 'NorthPaw-logo2',
								con: [
									{
										img: 'NorthPaw8',
										title: 'brandList.proSeries1',
										txt: 'brandList.proSeries2'
									},
									{
										img: 'NorthPaw9',
										title: 'brandList.proSeries3',
										txt: 'brandList.proSeries4'
									},
									{
										img: 'NorthPaw10',
										title: 'brandList.proSeries5',
										txt: 'brandList.proSeries6'
									},
									{
										img: 'NorthPaw11',
										title: 'brandList.proSeries7',
										txt: 'brandList.proSeries8'
									},
									{
										img: 'NorthPaw12',
										title: 'brandList.proSeries9',
										txt: 'brandList.proSeries10'
									},

								]
							},
						]
					},
					// catit NUNA
					{
						banner: banner2,
						title: 'brandList.catitName',
						name: 'brandList.catitName',
						desc: 'brandList.catitDesc',
						data: [
							{
								nav: '',
								logo: 'catit-logo',
								con: [
									{
										img: 'catit1',
										title: 'brandList.catit1',
										txt: 'brandList.catit2'
									}, {
										img: 'catit2',
										title: 'brandList.catit3',
										txt: 'brandList.catit4'
									}
								]
							}
						],
					},
					//VETWATER
					{
						banner: banner3,
						title: 'brandList.vetwaterName',
						name: 'brandList.vetwaterName',
						desc: 'brandList.vetwaterDesc',
						data: [
							{
								nav: '',
								logo: 'VETWATER-logo1',
								con: [
									{
										img: 'vetCatWater1',
										title: 'brandList.vetCatWater1',
										txt: 'brandList.vetCatWater2'
									},
									{
										img: 'vetCatWater2',
										title: 'brandList.vetCatWater3',
										txt: 'brandList.vetCatWater4'
									},
								]
							},
							{
								nav: '',
								logo: 'VETWATER-logo2',
								con: [
									{
										img: 'vetDogWater1',
										title: 'brandList.vetDogWater1',
										txt: 'brandList.vetDogWater2'
									},
									{
										img: 'vetDogWater2',
										title: 'brandList.vetDogWater3',
										txt: 'brandList.vetDogWater4'
									},
								]
							},
						]
					},
					// KOHA
					{
						banner: banner3,
						title: 'brandList.kohaName',
						name: 'brandList.kohaName',
						desc: 'brandList.kohaDesc',
						data: [
							{
								nav: '',
								logo: 'koha-logo',
								con: [
									{
										img: 'koha1',
										title: 'brandList.koha1',
										txt: 'brandList.koha2'
									},
									{
										img: 'koha1',
										title: 'brandList.koha3',
										txt: 'brandList.koha4'
									},
									{
										img: 'koha2',
										title: 'brandList.koha5',
										txt: 'brandList.koha6'
									},
									{
										img: 'koha3',
										title: 'brandList.koha7',
										txt: 'brandList.koha8'
									},
									{
										img: 'koha4',
										title: 'brandList.koha9',
										txt: 'brandList.koha10'
									},
									{
										img: 'koha5',
										title: 'brandList.koha11',
										txt: 'brandList.koha12'
									},
									{
										img: 'koha6',
										title: 'brandList.koha13',
										txt: 'brandList.koha14'
									},
									{
										img: 'koha7',
										title: 'brandList.koha15',
										txt: 'brandList.koha16'
									},
									{
										img: 'koha8',
										title: 'brandList.koha17',
										txt: 'brandList.koha18'
									},
									{
										img: 'koha9',
										title: 'brandList.koha19',
										txt: 'brandList.koha20'
									},
									{
										img: 'koha10',
										title: 'brandList.koha21',
										txt: 'brandList.koha22'
									},
									{
										img: 'koha11',
										title: 'brandList.koha23',
										txt: 'brandList.koha24'
									},
									{
										img: 'koha12',
										title: 'brandList.koha25',
										txt: 'brandList.koha26'
									},
								]
							},
						]
					},
					// BOAT To Bowl
					{
						banner: banner1,
						title: 'brandList.BoatToBowlName',
						name: 'brandList.BoatToBowlName',
						desc: 'brandList.BoatToBowlDesc',
						data: [
							{
								nav: '',
								logo: 'boat-logo',
								con: [
									{
										img: 'boat1',
										title: 'brandList.BoatToBow1',
										txt: 'brandList.BoatToBow2'
									}, {
										img: 'boat2',
										title: 'brandList.BoatToBow3',
										txt: 'brandList.BoatToBow4'
									}, {
										img: 'boat3',
										title: 'brandList.BoatToBow5',
										txt: 'brandList.BoatToBow6'
									}
								]
							}
						],
					},

				],
			};
		},
		computed: {
			brandListIndex() {
				let brandListIndex = this.$store.state.user.brandListIndex;
				return brandListIndex
			},
			pageData() {
				let brandListIndex = this.$store.state.user.brandListIndex;
				let pageData = this.brandList[brandListIndex]
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
	.brand {
		overflow-x: hidden;
		padding-bottom: 270px;
		background: #f0f0f0;
		.banner {
			width: 100%;
		}
		.title {
			width: 1000px;
			margin: auto;
			margin-top: 75px;
			display: flex;
			align-items: center;
			font-size: 34px;
			line-height: 48px;
			font-weight: 600;
			color: #525252;

			&:first-child {
				margin-top: 50px;
			}

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
		.desc {
			width: 940px;
			margin: auto;
			margin-top: 30px;
			font-size: 16px;
			color: #606060;
			font-weight: 400;
		}
		.con {
			width: 940px;

			margin: auto;
			.con-list {
			}
			.con-nav {
				margin-top: 30px;
				font-size: 30px;
				color: #525252;
				font-weight: 600;
			}
			.con-con {
				display: flex;
				// justify-content: space-between;
				// align-items: center;
				flex-wrap: wrap;
			}
			.con-item {
				margin-top: 20px;
				margin-right: 20px;
				width: 297px;
				border-radius: 5px;
				background: #ffffff;

				&:nth-child(3n) {
					margin-right: 0px;
				}

				.item-img {
					border-radius: 5px;
					text-align: center;
					img {
						width: 100%;
					}
				}
				.item-txt {
					padding: 23px 16px;

					.item-title {
						font-size: 16px;
						color: #353535;
						font-weight: 400;
					}

					.item-desc {
						margin-top: 10px;
						font-size: 14px;
						color: #606060;
						font-weight: 400;
					}
				}
			}

			.active {
				width: 456px;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
</style>
