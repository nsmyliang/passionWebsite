<template>
	<!-- 内容底部 -->
    <div class="footer">
        <img class="footer-icon" src="@/assets/image/mobile/home-footer.png">
        <div class="footer-share" >
            <img :src="require(`@/assets/image/home-share${index+1}.png`)" v-for="(item,index) in 2" :key="index">
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

		}

	};
</script>

<style lang="scss" scoped>

		.footer {
			margin-top: 30px;
			text-align: center;
			.footer-icon {
				width: 291px;
				height: 69px;
			}

			.footer-share {
                margin-top: 10px;
                text-align: left;
                img {
                    height: 30px;
                    width: 30px;
                    cursor: pointer;
                }
			}
		}
</style>
