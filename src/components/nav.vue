<template>
	<div class="container">
		<div class="left-btn" v-if="getShowLeft">
			<Icon type="ios-arrow-back" />{{getLeftName}}</div>
		<div class="title" v-if="getShowTitle">{{getNavTitle}}</div>
		<div class="rightBtn" v-if="getShowRight">{{getRightName}}</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	name: 'MyNav',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters(['getLeftName', 'getShowLeft', 'getNavTitle', 'getShowTitle', 'getRightName', 'getShowRight'])
	},

	mounted () {
        console.log('getShowLeft: ', getShowLeft)
        console.log('getLeftName: ', getLeftName)
        console.log('getNavTitle: ', getNavTitle)
        console.log('getShowTitle: ', getShowTitle)
        console.log('getRightName: ', getRightName)
        console.log('getShowRight: ', getShowRight)
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: row;
	height: 100rpx;
	background-color: black;

	div {
		border: solid 1rpx red;
	}
}
</style>
