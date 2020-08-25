<template>
	<div class="container">
		<myNav></myNav>
	</div>
</template>

<script>
// @ is an alias to /src
import myNav from '@/components/nav.vue'
import { mapMutations } from 'vuex'

export default {
	name: 'Home',
	components: {
		myNav
	},
	methods: {
		...mapMutations(['setNav'])
	},
	mounted () {
		this.setNav({
			showTitle: true,
			navTitle: '标题',
			leftName: '后退',
			showLeftBtn: true,
			showRightBtn: true,
			rightName: '测试'
		})
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
	background-color: #cccccc;
	height: 100vh;
}
</style>
