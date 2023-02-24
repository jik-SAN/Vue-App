<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-lg rounded">
                    <div class="card-header bg-success text-center text-white">
                        Register Here
                    </div>
                    <div class="card-body bg-light">
                        <form @submit.prevent="register">
                            <div class="mb-2">
                            <input type="text" v-model="user.name" placeholder="Name" class="form-control">
                            </div>
                            <div class="mb-2">
                            <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                            </div>
                            <div class="mb-2">
                            <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                            </div>
                            <div class="mb-2">
                            <input type="submit" class="btn btn-success" value="Register">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Register',

    data() {
        return {
        	user: {
        		name: '',
        		email: '',
        		password: '',
        	}
        }
    },
    methods: {
      register () {
        console.log(this.user);
      }
    }
}
</script>
<style scoped>
</style>