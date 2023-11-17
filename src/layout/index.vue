<template>
	<div id="layout">
	<KeepAlive>
        <component :is="head"></component>
    </KeepAlive>
		<!-- 内容区域 -->
		<main class="container">
			<router-view />
		</main>
		<!-- 底部 -->
	<KeepAlive>
        <component :is="footer"></component>
    </KeepAlive>
	</div>
</template>

<script>
	import pcHead from './components/pcHead'
	import pcFooter from './components/pcFooter'
	import mobileHead from './components/mobileHead'
	import mobileFooter from './components/mobileFooter'

	export default {
		name: 'Layout',
		components: {
			pcHead,
			pcFooter,
			mobileHead,
			mobileFooter
		},
		computed: {
			numWidth() {
				let num = this.$store.state.user.screenWidth // 大于 800 展示pc 小于展示 mobile
				return num > 800 ? true : false
			},
			head() {
				let num = this.$store.state.user.screenWidth // 大于 800 展示pc 小于展示 mobile
				return num > 800 ? pcHead : mobileHead
			},
			footer() {
				let num = this.$store.state.user.screenWidth // 大于 800 展示pc 小于展示 mobile
				return num > 800 ? pcFooter : mobileFooter
			}
		},
		watch: {

		}
	}
</script>
<style lang="scss">
	#layout {
		height: 100%;
	}
	// header {
	//   position: sticky;
	//   right: 0;
	//   top: 0;
	//   left: 0;
	//   z-index: 999;
	//   background: #fff;
	// }
	.serves {
		position: fixed;
		bottom: 100px;
		right: 8px;
		z-index: 99;
		cursor: pointer;
		.lottery {
			margin-bottom: 30px;
		}
	}
	.no-scroll {
		height: 100vh;
		overflow: hidden;
	}
</style>
