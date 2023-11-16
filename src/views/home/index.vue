<template>
    <KeepAlive>
        <component :is="pages"></component>
    </KeepAlive>
</template>

<script>
	import mobile from './mobile.vue';
	import pc from './web.vue';
	export default {
		components: {},
		data() {
			return {

			};
		},
		computed: {
			numWidth() {
				let num = this.$store.state.user.screenWidth // 大于 800 展示pc 小于展示 mobile
				return num > 800 ? true : false
			},
			pages() {
				let num = this.$store.state.user.screenWidth // 大于 800 展示pc 小于展示 mobile
				return num > 800 ? pc : mobile
			}
		},

		methods: {},
	};
</script>

<style lang="scss" scoped></style>
