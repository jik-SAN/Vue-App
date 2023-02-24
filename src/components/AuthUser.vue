<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p class="h3 text-success fw-bold">Welcome User</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        </div>
                        <div v-if="!isLoggedIn">
                            <p class="h3 text-danger fw-bold">Thank You</p>
                            <p class="fst-italic">Duis reprehenderit in ut sed in irure veniam aliquip in enim dolore pariatur..</p>
                        </div>
                        <div>
                            <button v-if="!isLoggedIn" @click="login" class="btn btn-success btn-sm m-1">Login</button>
                            <button v-if="isLoggedIn" @click="logout" class="btn btn-danger btn-sm m-1">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Authuser',

    data() {
        return {
            isLoggedIn: false,
        }
    },
    methods: {
        login () {
            this.isLoggedIn = true;
        },
        logout () {
            this.isLoggedIn = false;
        },

    }
}
</script>
<style scoped>
</style>