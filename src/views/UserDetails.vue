<template>
		<div class="container mt-3">
			<div class="row">
				<div class="col">
	<div v-if="loading">
			<Spinner />
		</div>
		<div v-if="errorMessage">
			<p class="fw-bold text-danger">{{ errorMessage }}</p>
		</div>
		<div v-if="!loading && Object.keys(user).length > 0" class="row">
			<div class="col">
					<pre>{{ user }}</pre>
				</div>
			</div>
				</div>
			</div>
<div class="row">
	<div class="col">
		<router-link to="/users" class="btn btn-success ms-3">Back</router-link>
	</div>
</div>
		</div>
</template>
<script>
	import { UserService } from '@/services/UserService.js';
	import Spinner from '@/components/Spinner.vue';


	export default {
		 components: {Spinner},

		data() {
			return {
				user: {},
				loading: false,
				errorMessage: null,
			};
		},

		name: 'UserDetails',
		async created() {
			let userId = this.$route.params.userId;
			try {
				this.loading = true;
				let response = await UserService.getUser(userId);
				this.loading = false;
				this.user = response.data;
			} catch (error) {
				this.loading = false;
				this.errorMessage = error;
			}
		}
	}
</script>
<style scoped>
</style>