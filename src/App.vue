<template>
	<div id="app" :class="[langEn]">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		computed: {
			// 根据语言 th 泰文  en 英文 zh 中文 添加样式
			langEn() {
				return this.$i18n.locale
			}
		},
		created() {
			let screenWidth = document.body.clientWidth
			this.$store.commit('user/UPDATE_PAGE_WIDTH', screenWidth)
            window.addEventListener('resize', () => {
                screenWidth = document.documentElement.clientWidth;
                this.$store.commit('user/UPDATE_PAGE_WIDTH', screenWidth)
            });
            
		},
		beforeCreate() {
			if (this.isMobile()) {
				document.getElementsByTagName('body')[0].className = 'mobile-body'
			}
		},
		methods: {}
	}
</script>
<style lang="scss">
	/** 泰文字体 */
	@font-face {
		font-family: PromptMedium;
		src: url('@/assets/font/Prompt-Medium.ttf');
	}
	/** 英文字体 */
	@font-face {
		font-family: RobotoRegular;
		src: url('@/assets/font/Roboto-Regular-14.ttf');
	}
	.th {
		font-family: PromptMedium;
	}
	.en {
		// font-family: RobotoRegular;
	}

	// 移动端的页面修改element的样式
	.mobile-body {
		.el-message,
		.el-message-box {
			width: 365px !important;
			.el-message-box__message {
				word-break: break-word;
			}
		}
		#app {
			width: 100vw;
		}
	}

	// 自定义加载动画
	.global-loading {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.el-loading-spinner {
		//   background: url('@/assets/image/loading.gif') center no-repeat;@/api/user
		background-size: cover;
		height: 130px;
		width: 170px !important;
	}
	.el-loading-spinner .circular {
		/*隐藏 之前  element-ui  默认的 loading 动画*/
		display: none;
	}
</style>