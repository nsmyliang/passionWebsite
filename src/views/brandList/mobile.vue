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
						title: 'brandList.brandList135',
						name: 'brandList.brandList135',
						desc: 'brandList.brandList1351',
						data: [
							{
								nav: 'brandList.brandList136',
								logo: 'nutrience-logo',
								con: [
									{
										img: 'Nutrience1',
										title: 'nutrience.nutrience1',
										txt: 'nutrience.nutrience2'
									},
									{
										img: 'Nutrience2',
										title: 'nutrience.nutrience3',
										txt: 'nutrience.nutrience4'
									},
									{
										img: 'Nutrience3',
										title: 'nutrience.nutrience5',
										txt: 'nutrience.nutrience6'
									},
									{
										img: 'Nutrience4',
										title: 'nutrience.nutrience7',
										txt: 'nutrience.nutrience8'
									},
									{
										img: 'Nutrience5',
										title: 'nutrience.nutrience9',
										txt: 'nutrience.nutrience10'
									},
									{
										img: 'Nutrience6',
										title: 'nutrience.nutrience11',
										txt: 'nutrience.nutrience12'
									},
									{
										img: 'Nutrience7',
										title: 'nutrience.nutrience13',
										txt: 'nutrience.nutrience14'
									},
									{
										img: 'Nutrience8',
										title: 'nutrience.nutrience15',
										txt: 'nutrience.nutrience16'
									},
									{
										img: 'Nutrience9',
										title: 'nutrience.nutrience17',
										txt: 'nutrience.nutrience18'
									},
									{
										img: 'Nutrience10',
										title: 'nutrience.nutrience19',
										txt: 'nutrience.nutrience20'
									},
									{
										img: 'Nutrience11',
										title: 'nutrience.nutrience21',
										txt: 'nutrience.nutrience22'
									},
									{
										img: 'Nutrience12',
										title: 'nutrience.nutrience23',
										txt: 'nutrience.nutrience24'
									},
									{
										img: 'Nutrience13',
										title: 'nutrience.nutrience25',
										txt: 'nutrience.nutrience26'
									},
									{
										img: 'Nutrience14',
										title: 'nutrience.nutrience27',
										txt: 'nutrience.nutrience28'
									},
									{
										img: 'Nutrience15',
										title: 'nutrience.nutrience29',
										txt: 'nutrience.nutrience30'
									},
									{
										img: 'Nutrience16',
										title: 'nutrience.nutrience31',
										txt: 'nutrience.nutrience32'
									},
								]
							},
						]
					},

					//Northwest Naturals
					{
						banner: banner3,
						title: 'brandList.brandList19',
						name: 'brandList.brandList27',
						desc: 'brandList.brandList20',
						data: [
							{
								nav: '',
								logo: 'north-logo',
								con: [
									{
										img: 'north1',
										title: 'north.north1',
										txt: 'north.north2'
									}, {
										img: 'north2',
										title: 'north.north3',
										txt: 'north.north4'
									},
									{
										img: 'north3',
										title: 'north.north5',
										txt: 'north.north6'
									},
									{
										img: 'north4',
										title: 'north.north7',
										txt: 'north.north8'
									},
									{
										img: 'north5',
										title: 'north.north9',
										txt: 'north.north10'
									},
									{
										img: 'north6',
										title: 'north.north11',
										txt: 'north.north12'
									},
									{
										img: 'north7',
										title: 'north.north1',
										txt: 'north.north2'
									}, {
										img: 'north8',
										title: 'north.north3',
										txt: 'north.north4'
									},
									{
										img: 'north9',
										title: 'north.north5',
										txt: 'north.north6'
									},
									{
										img: 'north10',
										title: 'north.north7',
										txt: 'north.north8'
									},
									{
										img: 'north11',
										title: 'north.north9',
										txt: 'north.north10'
									},
									{
										img: 'north12',
										title: 'north.north11',
										txt: 'north.north12'
									},
									{
										img: 'north13',
										title: 'north.north1',
										txt: 'north.north2'
									}, {
										img: 'north14',
										title: 'north.north3',
										txt: 'north.north4'
									},
									{
										img: 'north15',
										title: 'north.north5',
										txt: 'north.north6'
									},
									{
										img: 'north16',
										title: 'north.north7',
										txt: 'north.north8'
									},
									{
										img: 'north17',
										title: 'north.north9',
										txt: 'north.north10'
									},
									{
										img: 'north18',
										title: 'north.north11',
										txt: 'north.north12'
									},
									{
										img: 'north19',
										title: 'north.north1',
										txt: 'north.north2'
									}, {
										img: 'north20',
										title: 'north.north3',
										txt: 'north.north4'
									},
									{
										img: 'north21',
										title: 'north.north5',
										txt: 'north.north6'
									},
									{
										img: 'north22',
										title: 'north.north7',
										txt: 'north.north8'
									},
									{
										img: 'north23',
										title: 'north.north9',
										txt: 'north.north10'
									},
									{
										img: 'north24',
										title: 'north.north11',
										txt: 'north.north12'
									},
									{
										img: 'north25',
										title: 'north.north1',
										txt: 'north.north2'
									}
								]
							}
						],
					},
					//RAWZ
					{
						banner: banner3,
						title: 'brandList.brandList149',
						name: 'brandList.brandList149',
						desc: 'brandList.brandList150',
						logo: '',
						data: [
							{
								nav: 'brandList.brandList151',
								logo: '',
								con: [
									{
										img: 'rawz1',
										title: 'brandList.brandList152',
										txt: 'brandList.brandList153'
									},
									{
										img: 'rawz2',
										title: 'brandList.brandList154',
										txt: 'brandList.brandList155'
									},
									{
										img: 'rawz3',
										title: 'brandList.brandList156',
										txt: 'brandList.brandList157'
									},
									{
										img: 'rawz4',
										title: 'brandList.brandList158',
										txt: 'brandList.brandList159'
									},
									{
										img: 'rawz5',
										title: 'brandList.brandList160',
										txt: 'brandList.brandList161'
									},
									{
										img: 'rawz6',
										title: 'brandList.brandList162',
										txt: 'brandList.brandList163'
									},
									{
										img: 'rawz7',
										title: 'brandList.brandList152',
										txt: 'brandList.brandList153'
									},
									{
										img: 'rawz8',
										title: 'brandList.brandList154',
										txt: 'brandList.brandList155'
									},
									{
										img: 'rawz9',
										title: 'brandList.brandList156',
										txt: 'brandList.brandList157'
									},
									{
										img: 'rawz10',
										title: 'brandList.brandList158',
										txt: 'brandList.brandList159'
									},
									{
										img: 'rawz11',
										title: 'brandList.brandList160',
										txt: 'brandList.brandList161'
									},
									{
										img: 'rawz12',
										title: 'brandList.brandList162',
										txt: 'brandList.brandList163'
									},
									{
										img: 'rawz13',
										title: 'brandList.brandList152',
										txt: 'brandList.brandList153'
									},
									{
										img: 'rawz14',
										title: 'brandList.brandList154',
										txt: 'brandList.brandList155'
									},
									{
										img: 'rawz15',
										title: 'brandList.brandList156',
										txt: 'brandList.brandList157'
									},
									{
										img: 'rawz16',
										title: 'brandList.brandList158',
										txt: 'brandList.brandList159'
									},
									{
										img: 'rawz17',
										title: 'brandList.brandList160',
										txt: 'brandList.brandList161'
									},
									{
										img: 'rawz18',
										title: 'brandList.brandList162',
										txt: 'brandList.brandList163'
									},
									{
										img: 'rawz19',
										title: 'brandList.brandList162',
										txt: 'brandList.brandList163'
									},
								]
							},
						]
					},

					// NANO SANITAS
					{
						banner: banner3,
						title: 'brandList.brandList59',
						name: 'brandList.brandList59',
						desc: 'brandList.brandList60',
						logo: 'NanoSANITAS-logo',
						data: [
							{
								nav: '',
								logo: 'NanoSANITAS-logo',
								con: [
									{
										img: 'NanoSANITAS1',
										title: 'brandList.brandList61',
										txt: 'brandList.brandList62'
									}, {
										img: 'NanoSANITAS2',
										title: 'brandList.brandList63',
										txt: 'brandList.brandList64'
									}, {
										img: 'NanoSANITAS3',
										title: 'brandList.brandList65',
										txt: 'brandList.brandList66'
									}, {
										img: 'NanoSANITAS4',
										title: 'brandList.brandList67',
										txt: 'brandList.brandList68'
									}, {
										img: 'NanoSANITAS5',
										title: 'brandList.brandList69',
										txt: 'brandList.brandList70'
									}, {
										img: 'NanoSANITAS6',
										title: 'brandList.brandList71',
										txt: 'brandList.brandList72'
									},
									{
										img: 'NanoSANITAS7',
										title: 'brandList.brandList73',
										txt: 'brandList.brandList74'
									}, {
										img: 'NanoSANITAS8',
										title: 'brandList.brandList75',
										txt: 'brandList.brandList76'
									}, {
										img: 'NanoSANITAS9',
										title: 'brandList.brandList77',
										txt: 'brandList.brandList78'
									},
								]
							},
						]
					},
					//North paw
					{
						banner: banner3,
						title: 'brandList.brandList79',
						name: 'brandList.brandList79',
						desc: 'brandList.brandList791',
						data: [
							{
								nav: 'brandList.brandList80',
								logo: 'NorthPaw-logo1',
								con: [
									{
										img: 'NorthPaw1',
										title: 'brandList.brandList81',
										txt: 'brandList.brandList82'
									},
									{
										img: 'NorthPaw2',
										title: 'brandList.brandList83',
										txt: 'brandList.brandList84'
									},
									{
										img: 'NorthPaw3',
										title: 'brandList.brandList85',
										txt: 'brandList.brandList86'
									},
									{
										img: 'NorthPaw4',
										title: 'brandList.brandList87',
										txt: 'brandList.brandList88'
									},
									{
										img: 'NorthPaw5',
										title: 'brandList.brandList89',
										txt: 'brandList.brandList90'
									},
									{
										img: 'NorthPaw6',
										title: 'brandList.brandList91',
										txt: 'brandList.brandList92'
									},
									{
										img: 'NorthPaw7',
										title: 'brandList.brandList94',
										txt: 'brandList.brandList95'
									},
								]
							},
							{
								nav: 'brandList.brandList80',
								logo: 'NorthPaw-logo2',
								con: [
									{
										img: 'NorthPaw8',
										title: 'brandList.brandList96',
										txt: 'brandList.brandList97'
									},
									{
										img: 'NorthPaw9',
										title: 'brandList.brandList98',
										txt: 'brandList.brandList99'
									},
									{
										img: 'NorthPaw10',
										title: 'brandList.brandList100',
										txt: 'brandList.brandList101'
									},
									{
										img: 'NorthPaw11',
										title: 'brandList.brandList102',
										txt: 'brandList.brandList103'
									},
									{
										img: 'NorthPaw12',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},

								]
							},
						]
					},
					// catit NUNA
					{
						banner: banner2,
						title: 'brandList.brandList12',
						name: 'brandList.brandList18',
						desc: 'brandList.brandList13',
						data: [
							{
								nav: '',
								logo: 'catit-logo',
								con: [
									{
										img: 'catit1',
										title: 'brandList.brandList14',
										txt: 'brandList.brandList15'
									}, {
										img: 'catit2',
										title: 'brandList.brandList16',
										txt: 'brandList.brandList17'
									}
								]
							}
						],
					},
					//VETWATER
					{
						banner: banner3,
						title: 'brandList.brandList164',
						name: 'brandList.brandList164',
						desc: 'brandList.brandList165',
						data: [
							{
								nav: 'brandList.brandList166',
								logo: 'VETWATER-logo1',
								con: [
									{
										img: 'VETWATER1',
										title: 'brandList.brandList167',
										txt: 'brandList.brandList168'
									},

								]
							},
							{
								nav: 'brandList.brandList179',
								logo: 'VETWATER-logo2',
								con: [
									{
										img: 'VETWATER2',
										title: 'brandList.brandList167',
										txt: 'brandList.brandList168'
									},
									{
										img: 'VETWATER3',
										title: 'brandList.brandList170',
										txt: 'brandList.brandList171'
									},
								]
							},
						]
					},
					// KOHA
					{
						banner: banner3,
						title: 'brandList.brandList28',
						name: 'brandList.brandList28',
						desc: 'brandList.brandList30',
						data: [
							{
								nav: 'brandList.brandList29',
								logo: 'koha-logo',
								con: [
									{
										img: 'koha1',
										title: 'brandList.brandList31',
										txt: 'brandList.brandList32'
									},
									{
										img: 'koha2',
										title: 'brandList.brandList33',
										txt: 'brandList.brandList34'
									},
									{
										img: 'koha3',
										title: 'brandList.brandList35',
										txt: 'brandList.brandList36'
									},
									{
										img: 'koha4',
										title: 'brandList.brandList37',
										txt: 'brandList.brandList38'
									},
									{
										img: 'koha5',
										title: 'brandList.brandList31',
										txt: 'brandList.brandList32'
									},
									{
										img: 'koha6',
										title: 'brandList.brandList33',
										txt: 'brandList.brandList34'
									},
									{
										img: 'koha7',
										title: 'brandList.brandList35',
										txt: 'brandList.brandList36'
									},
									{
										img: 'koha8',
										title: 'brandList.brandList37',
										txt: 'brandList.brandList38'
									},
									{
										img: 'koha9',
										title: 'brandList.brandList31',
										txt: 'brandList.brandList32'
									},
									{
										img: 'koha10',
										title: 'brandList.brandList33',
										txt: 'brandList.brandList34'
									},
									{
										img: 'koha11',
										title: 'brandList.brandList35',
										txt: 'brandList.brandList36'
									},
									{
										img: 'koha12',
										title: 'brandList.brandList37',
										txt: 'brandList.brandList38'
									},
								]
							},
						]
					},
					// BOAT To Bowl
					{
						banner: banner1,
						title: 'brandList.brandList3',
						name: 'brandList.brandList11',
						desc: 'brandList.brandList4',
						data: [
							{
								nav: '',
								logo: 'catit-logo',
								con: [
									{
										img: 'boat1',
										title: 'brandList.brandList5',
										txt: 'brandList.brandList6'
									}, {
										img: 'boat2',
										title: 'brandList.brandList7',
										txt: 'brandList.brandList8'
									}, {
										img: 'boat3',
										title: 'brandList.brandList9',
										txt: 'brandList.brandList10'
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
		padding-bottom: 30px;
		background: #f0f0f0;
		.banner {
			width: 100%;
			text-align: center;
			img {
				max-height: 104px;
			}
		}
		.title {
			margin: 20px 24px 0;
			display: flex;
			align-items: center;
			font-size: 24px;
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
		.desc {
			margin: 20px 45px 0;
			font-size: 16px;
			color: #606060;
			font-weight: 400;
		}
		.con {
			margin: 0 24px;
			.con-nav {
				margin-top: 20px;
				font-size: 16px;
				color: #525252;
				font-weight: 600;
			}
			.con-con {
				display: flex;
				flex-wrap: wrap;
                justify-content: space-between;
			}
			.con-item {
				margin-top: 20px;
				margin-right: 10px;
				width: 158px;
				border-radius: 5px;
				background: #ffffff;

				&:nth-child(2n) {
					margin-right: 0px;
				}

				.item-img {
					border-radius: 5px;
					text-align: center;
					img {
						width: 158px;
						height: 190px;
					}
				}
				.item-txt {
					padding: 23px 16px;

					.item-title {
						font-size: 12px;
						color: #353535;
						font-weight: 400;
					}

					.item-desc {
						margin-top: 10px;
						font-size: 10px;
						color: #606060;
						font-weight: 400;
					}
				}
			}
		}
	}
</style>
