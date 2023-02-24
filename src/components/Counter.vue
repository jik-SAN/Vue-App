<template>
<div class="container">
	<div class="row">
		<div class="col-md-6">
			<div class="card shadow-lg">
				<div class="card-body">
					<p class="h3 display-3">{{ this.count }}</p>
					<button class="btn btn-success m-1" @click="incr">Increment</button>
					<button class="btn btn-warning m-1" @click="decr">Decrement</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {

  name: 'Counter',

  data: function () {
  	return  {
  		count: 0,
  	};
  },

  methods: {
    incr () {
    		this.count++;
    },
    decr () {
    		this.count--;
    },

  }
}
</script>

<style scoped>
</style>