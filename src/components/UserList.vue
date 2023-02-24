<template>
<div class="container mt-3">
	<div class="row">
		<div class="col">
			<p class="h3 fw-bold text-success">User List</p>
			<p class="fst-italic">Lorem, ipsum dolor sit, amet consectetur adipisicing elit. At ut reiciendis, nisi ratione dignissimos sit eligendi iure mollitia repellendus aperiam corporis tenetur consectetur ducimus, hic velit similique cumque rerum fuga.</p>
		</div>
		<div v-if="loading">
			<Spinner />
		</div>
		<div v-if="errorMessage">
			<p class="fw-bold text-danger">{{ errorMessage }}</p>
		</div>
		<div v-if="!loading && users.length > 0" class="row">
			<div class="col">
				<table class="table table-hover text-center table-striped">
					<thead class="bg-success text-white">
						<tr>
							<th>Sno</th>
							<th>Name</th>
							<th>Email</th>
							<th>Company</th>
							<th>Website</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in users" :key="user.id">
							<td>{{ user.id }}</td>
							<td>
								<router-link :to="/users/ + user.id" class="text-decoration-none text-success fw-bold">{{ user.name }}</router-link>
							</td>
							<td>{{ user.email }}</td>
							<td>{{ user.company.name }}</td>
							<td>{{ user.website }}</td>
							<td>{{ user.address.city }}</td>
						</tr>
					</tbody>


				</table>

			</div>
		</div>
	</div>
</div>

</template>

<script>
import { UserService } from '@/services/UserService.js'
import Spinner from '@/components/Spinner.vue'
export default {

  components: {Spinner},

  name: 'UserList',

  data () {
    return {
    	users: [],
    	loading: false,
    	errorMessage: null,
    };
  },

  async created () {
  	try {
  		this.loading = true;
  		let response = await UserService.getAllUsers();
  		this.loading = false;
  		this.users = response.data;
  	}
  	catch(error) {
  		this.loading = false;
  		this.errorMessage = error;
  	}
  }
};
</script>

<style scoped>
</style>