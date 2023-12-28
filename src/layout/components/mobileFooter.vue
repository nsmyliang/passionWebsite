<template>
	<!-- 底部 -->
	<div class="footer">
		<div class="footer-txt">
			<div class="footer-item" v-for="(item,index) in footerList" @click="navBtn(index)" :key="index">
				{{ $t(item)}}
			</div>
		</div>
		<div class="footer-brand">@2023 Passion Pet Nutrition Limited. All Rights Reserved</div>
	</div>
</template>

<script>
	import { myMixin } from '@/utils/mixins'
	export default {
		mixins: [myMixin],
		name: "HomeFoot",
		components: {},
		props: {
		},
		data() {
			return {
				footerList: [
					'head.head0',
					'head.head1',
					'head.head2',
					'head.head3',
					'head.head4',
					'head.head5',
					'head.head6',
				],
			};
		},
		watch: {},
		computed: {
		},
		created() { },
		onShow() {

		},
		mounted() {

		},
		destroyed() { },
		methods: {

		}

	};
</script>

<style lang="scss" scoped>
	.footer {
		padding: 36px 17px 24px 17px;
		text-align: center;
		font-weight: 400;
		font-size: 16px;
		color: #fff;
		background: #066eb7;
	}
	.footer-txt {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		.footer-item {
			width: 150px;
			text-align: center;
			margin-top: 48px;

			&:first-child,
			&:nth-child(2) {
				margin-top: 0;
			}
		}
	}

	.footer-brand {
		margin-top: 52px;
		font-size: 14px;
	}
</style>
