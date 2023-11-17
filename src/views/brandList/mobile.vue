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
				<div class="con-nav">{{$t(item.nav)}}</div>
				<div class="con-con">
					<div class="con-item "  v-for="(item,index) in item.con"
						:key="index">
						<div class="item-img">
							<img class="item-img" :src="require(`@/assets/image/brandList-${item.img}.png`)">
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

					// BOAT To Bowl
					{
						banner: banner1,
						title: 'brandList.brandList3',
						name: 'brandList.brandList11',
						desc: 'brandList.brandList4',
						data: [
							{
								nav: '',
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
					// catit NUNA
					{
						banner: banner2,
						title: 'brandList.brandList12',
						name: 'brandList.brandList18',
						desc: 'brandList.brandList13',
						data: [
							{
								nav: '',
								con: [
									{
										img: 'mobileCatit1',
										title: 'brandList.brandList14',
										txt: 'brandList.brandList15'
									}, {
										img: 'mobileCatit2',
										title: 'brandList.brandList16',
										txt: 'brandList.brandList17'
									}
								]
							}
						],
					},
					//Corey (North paw & ProSeries)
					{
						banner: banner3,
						title: 'brandList.brandList19',
						name: 'brandList.brandList27',
						desc: 'brandList.brandList20',
						data: [
							{
								nav: '',
								con: [
									{
										img: 'north1',
										title: 'brandList.brandList21',
										txt: 'brandList.brandList22'
									}, {
										img: 'north2',
										title: 'brandList.brandList23',
										txt: 'brandList.brandList24'
									}, {
										img: 'north3',
										title: 'brandList.brandList25',
										txt: 'brandList.brandList26'
									}
								]
							}
						],
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
								]
							},
							{
								nav: 'brandList.brandList39',
								con: [
									{
										img: 'koha5',
										title: 'brandList.brandList40',
										txt: 'brandList.brandList41'
									},
									{
										img: 'koha6',
										title: 'brandList.brandList42',
										txt: 'brandList.brandList43'
									},
									{
										img: 'koha7',
										title: 'brandList.brandList44',
										txt: 'brandList.brandList45'
									},
									{
										img: 'koha8',
										title: 'brandList.brandList46',
										txt: 'brandList.brandList47'
									},
									{
										img: 'koha9',
										title: 'brandList.brandList48',
										txt: 'brandList.brandList49'
									},
									{
										img: 'koha10',
										title: 'brandList.brandList50',
										txt: 'brandList.brandList51'
									},
								]
							},
							{
								nav: 'brandList.brandList52',
								con: [
									{
										img: 'koha11',
										title: 'brandList.brandList53',
										txt: 'brandList.brandList54'
									},
									{
										img: 'koha12',
										title: 'brandList.brandList55',
										txt: 'brandList.brandList56'
									},
									{
										img: 'koha13',
										title: 'brandList.brandList57',
										txt: 'brandList.brandList58'
									},
								]
							},
						]
					},
					// Nano SANITAS
					{
						banner: banner3,
						title: 'brandList.brandList59',
						name: 'brandList.brandList59',
						desc: 'brandList.brandList60',
						data: [
							{
								nav: '',
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
							}
						]
					},
					//NWN
					{
						banner: banner3,
						title: 'brandList.brandList79',
						name: 'brandList.brandList79',
						desc: 'brandList.brandList791',
						data: [
							{
								nav: 'brandList.brandList80',
								con: [
									{
										img: 'NWN1',
										title: 'brandList.brandList81',
										txt: 'brandList.brandList82'
									},
									{
										img: 'NWN2',
										title: 'brandList.brandList83',
										txt: 'brandList.brandList84'
									},
									{
										img: 'NWN3',
										title: 'brandList.brandList85',
										txt: 'brandList.brandList86'
									},
									{
										img: 'NWN4',
										title: 'brandList.brandList87',
										txt: 'brandList.brandList88'
									},
									{
										img: 'NWN5',
										title: 'brandList.brandList89',
										txt: 'brandList.brandList90'
									},
									{
										img: 'NWN6',
										title: 'brandList.brandList91',
										txt: 'brandList.brandList92'
									},
									{
										img: 'NWN7',
										title: 'brandList.brandList94',
										txt: 'brandList.brandList95'
									},
									{
										img: 'NWN8',
										title: 'brandList.brandList96',
										txt: 'brandList.brandList97'
									},
									{
										img: 'NWN9',
										title: 'brandList.brandList98',
										txt: 'brandList.brandList99'
									},
									{
										img: 'NWN10',
										title: 'brandList.brandList100',
										txt: 'brandList.brandList101'
									},
									{
										img: 'NWN11',
										title: 'brandList.brandList102',
										txt: 'brandList.brandList103'
									},
									{
										img: 'NWN12',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN13',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN14',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN15',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN16',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN17',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN18',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN19',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
									{
										img: 'NWN20',
										title: 'brandList.brandList104',
										txt: 'brandList.brandList105'
									},
								]
							},
							{
								nav: 'brandList.brandList107',
								con: [
									{
										img: 'NWN21',
										title: 'brandList.brandList108',
										txt: 'brandList.brandList109'
									},
									{
										img: 'NWN22',
										title: 'brandList.brandList110',
										txt: 'brandList.brandList111'
									},
									{
										img: 'NWN23',
										title: 'brandList.brandList112',
										txt: 'brandList.brandList113'
									},
									{
										img: 'NWN24',
										title: 'brandList.brandList114',
										txt: 'brandList.brandList115'
									},
									{
										img: 'NWN25',
										title: 'brandList.brandList116',
										txt: 'brandList.brandList117'
									},
									{
										img: 'NWN26',
										title: 'brandList.brandList118',
										txt: 'brandList.brandList119'
									},
									{
										img: 'NWN27',
										title: 'brandList.brandList120',
										txt: 'brandList.brandList121'
									},
									{
										img: 'NWN28',
										title: 'brandList.brandList122',
										txt: 'brandList.brandList123'
									},
									{
										img: 'NWN29',
										title: 'brandList.brandList124',
										txt: 'brandList.brandList125'
									},
								]
							},
							{
								nav: 'brandList.brandList126',
								con: [
									{
										img: 'NWN30',
										title: 'brandList.brandList127',
										txt: 'brandList.brandList128'
									},
									{
										img: 'NWN31',
										title: 'brandList.brandList129',
										txt: 'brandList.brandList130'
									},
									{
										img: 'NWN32',
										title: 'brandList.brandList131',
										txt: 'brandList.brandList132'
									},
									{
										img: 'NWN33',
										title: 'brandList.brandList133',
										txt: 'brandList.brandList134'
									},
								]
							},
						]
					},
					// Nutrience
					{
						banner: banner3,
						title: 'brandList.brandList135',
						name: 'brandList.brandList135',
						desc: 'brandList.brandList1351',
						data: [
							{
								nav: 'brandList.brandList136',
								con: [
									{
										img: 'Nutrience1',
										title: 'brandList.brandList137',
										txt: 'brandList.brandList138'
									},
									{
										img: 'Nutrience2',
										title: 'brandList.brandList139',
										txt: 'brandList.brandList140'
									},
									{
										img: 'Nutrience3',
										title: 'brandList.brandList141',
										txt: 'brandList.brandList142'
									},
									{
										img: 'Nutrience4',
										title: 'brandList.brandList143',
										txt: 'brandList.brandList144'
									},
									{
										img: 'Nutrience5',
										title: 'brandList.brandList145',
										txt: 'brandList.brandList146'
									},
									{
										img: 'Nutrience6',
										title: 'brandList.brandList147',
										txt: 'brandList.brandList148'
									},
								]
							},
						]
					},
					//RAWZ
					{
						banner: banner3,
						title: 'brandList.brandList149',
						name: 'brandList.brandList149',
						desc: 'brandList.brandList150',
						data: [
							{
								nav: 'brandList.brandList151',
								con: [
									{
										img: 'RAWZ1',
										title: 'brandList.brandList152',
										txt: 'brandList.brandList153'
									},
									{
										img: 'RAWZ2',
										title: 'brandList.brandList154',
										txt: 'brandList.brandList155'
									},
									{
										img: 'RAWZ3',
										title: 'brandList.brandList156',
										txt: 'brandList.brandList157'
									},
									{
										img: 'RAWZ4',
										title: 'brandList.brandList158',
										txt: 'brandList.brandList159'
									},
									{
										img: 'RAWZ5',
										title: 'brandList.brandList160',
										txt: 'brandList.brandList161'
									},
									{
										img: 'RAWZ6',
										title: 'brandList.brandList162',
										txt: 'brandList.brandList163'
									},
								]
							},
						]
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
								con: [
									{
										img: 'VETWATER1',
										title: 'brandList.brandList167',
										txt: 'brandList.brandList168'
									},
									{
										img: 'VETWATER2',
										title: 'brandList.brandList167',
										txt: 'brandList.brandList168'
									},
								]
							},
							{
								nav: 'brandList.brandList179',
								con: [
									{
										img: 'VETWATER3',
										title: 'brandList.brandList170',
										txt: 'brandList.brandList171'
									},
									{
										img: 'VETWATER4',
										title: 'brandList.brandList170',
										txt: 'brandList.brandList171'
									},
								]
							},
						]
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
