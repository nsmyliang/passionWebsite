<template>
	<div class="faq">
		<div class="title">
			<span></span>
			{{$t('faqs.faqs1')}} <div class="txt">{{$t('faqs.faqs2')}}</div>
		</div>
		<div class="content">
			<div class="txt-item">
				<div>Q：{{$t('faqs.faqs3')}}</div>
				<div>A：<a href='./#/partner'>{{$t('faqs.faqs4')}}</a></div>
			</div>
			<div class="txt-item">
				<div>Q：{{$t('faqs.faqs5')}}</div>
				<div>A：{{$t('faqs.faqs6')}}</div>
			</div>
			<div class="txt-item">
				<div>Q：{{$t('faqs.faqs7')}}</div>
				<div>A：{{$t('faqs.faqs8')}}</div>
			</div>
		</div>
	</div>

</template>

<script>

	export default {

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
	.faq {
		margin: auto;
		padding-bottom: 182px;
		background: url('@/assets/image/FAQBg.png');
		.title {
			width: 960px;
			margin: auto;
			padding-top: 43px;
			display: flex;
			align-items: center;
			font-size: 34px;
			font-weight: 600;
			line-height: 48px;
			color: #525252;

			span {
				width: 11px;
				height: 34px;
				display: block;
				margin-right: 9px;
				background: #bebebe;
			}

			.txt {
				font-weight: 200;
			}
		}

		.content {
			width: 900px;
			margin: auto;
			font-size: 18px;
			color: #f0f0f0;
			line-height: 30px;
			font-weight: 400;
			.txt-item {
				margin-top: 110px;
				padding: 43px 26px;
				height: 197px;
				width: 900px;
				background: rgba(#000000, 0.3);
				a{
					color:#fff;
				}
				&:first-child {
					margin-top: 70px;
				}

				div {
					&:first-child {
						margin-bottom: 30px;
					}
				}
			}
		}
	}
</style>
