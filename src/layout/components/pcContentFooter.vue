<template>
	<!-- 内容底部 -->
	<div class="footer">
		<!-- <img src="@/assets/image/home-footer.png">
        <div class="footer-txt">
            Copyright © 2023 MAXIPRO (ASIA) LIMITED. All Rights Reserve
        </div> -->
		<div class="footer-share">
			<img :src="require(`@/assets/image/home-share${index+1}.png`)" v-for="(item,index) in 1" :key="index"
				@click="btn()">
		</div>
	</div>
</template>

<script>
	export default {

		name: "contentFoot",
		components: {},
		props: {
		},
		data() {
			let i18n_lang = this.$t("head");
			return {
				i18n_lang: i18n_lang,
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
			btn() {
				window.open("https://www.facebook.com/passionpetgroup", '_blank')
			}
		}

	};
</script>

<style lang="scss" scoped>
	@media screen and (min-width: 800px) {
		.footer {
			position: relative;
			width: 1000px;
			// margin-top: 16px;
			text-align: center;
			img {
				width: 556px;
				height: 30px;
				text-align: center;
				margin: auto;
			}
			.footer-txt {
				margin-top: 12px;
				font-size: 12px;
				color: #000000;
				letter-spacing: 0;
				text-align: center;
				font-weight: 600;
			}

			.footer-share {
				position: absolute;
				left: 0;
				top: 13px;
				img {
					height: 30px;
					width: 30px;
					cursor: pointer;
				}
			}
		}
	}
</style>
