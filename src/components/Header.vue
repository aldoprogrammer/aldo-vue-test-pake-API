<template>
    <div class="nav">
        <router-link to="/admin">Home</router-link>
        <router-link to="/add">Add Restautant</router-link>
        <router-link to="/update">Update</router-link>
        <a v-on:click="logout" href="#" >Logout</a>
    </div>
</template>
<script>
    export default {
        name: 'HeaderNav',
        methods: {
            logout(e) {
                e.preventDefault();
                localStorage.clear();
                this.$router.push({name:"LoginForm"})
            }
        }
    }
</script>
<style>
.nav {
    width: 100%;
    background-color: black;
    color: white;
    padding: 17px;
    border-radius: 10px rounded;
    margin-top: -60px;
    margin-left: -20px;
}

.nav a {
    margin: 0 8px;
    padding: 13px;
    background-color: azure;
}

</style>