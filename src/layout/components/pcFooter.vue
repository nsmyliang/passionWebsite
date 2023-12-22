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
		height: 251px;
		padding: 53px 0 104px 0;
		text-align: center;
		font-weight: 400;
		color: #fff;
		background: #066eb7;
	}
	.footer-txt {
		display: flex;
		align-items: center;
		justify-content: center;
		.footer-item {
			margin-right: 57px;
			cursor: pointer;
		}
	}

	.footer-brand {
		margin-top: 52px;
	}
</style>
