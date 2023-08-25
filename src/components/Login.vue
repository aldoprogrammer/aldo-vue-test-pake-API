<template>
<img src="../assets/logo.png" class="logo" alt="logo">
  <div class="login-container">
    <h1>Aldo Test Vue JS Coding</h1>
    <form @submit="login" class="login-form">
      <input type="text" v-model="email" placeholder="Masukkan Email" class="input-field">
      <input type="password" v-model="password" placeholder="Masukkan Kata Sandi" class="input-field">
      <button type="submit" v-on:click="login" class="login-button">Login</button>
      <p>
        <router-link to="/">Daftar Akun</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'LoginForm',
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
      if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
        this.$router.push({name:"MasterPage"})
      }
      console.warn(result)
    // this.$router.push({ name: "MasterPage" });
  },
  },
  mounted() 
  {
    let user = localStorage.getItem("user-info");
    if(user){
      this.$router.push({name:"MasterPage"})
    }
  }
};
</script>
<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

.input-field {
  width: 90%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

img {
  margin-bottom: -180px;
  height: 200px;
  margin-top: -45px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  margin-top: 5px;
  color: red;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
