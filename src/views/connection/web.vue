<template>
	<div class="connection">
		<div class="title">
			<span></span>
			{{$t('connection.connection1')}} <div class="txt">{{$t('connection.connection2')}}</div>
		</div>
		<div class="content">
			<div>
				<p>{{$t('connection.connection3')}}</p>
				<p>{{$t('connection.connection4')}}</p>
			</div>

			<div>
				<p>{{$t('connection.connection5')}}: enquiry.ipoint@outlook.com</p>
				<p>{{$t('connection.connection6')}}: (852)2543 8033</p>
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
	.connection {
		background: #f0f0f0fa;
		margin: auto;
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
			height: 400px;
			width: 920px;
			margin: auto;
			font-size: 16px;
			color: #000000;
			line-height: 30px;
			font-weight: 400;
			div {
				margin-top: 34px;

				&:last-child {
					font-size: 18px;
					color: #000000;
					font-weight: 500;
				}
			}
		}
	}
</style>
