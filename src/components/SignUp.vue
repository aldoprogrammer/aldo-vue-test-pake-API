<template>
  <div>
   <h1>Daftar sini ges</h1>
  </div>
  <div class="register">
    <input type="text" v-model="name" placeholder="masukkan nama" />
    <input type="text" v-model="email" placeholder="masukkan email" />
    <input type="password" v-model="password" placeholder="masukkan password" />
    <button v-on:click="signUp" class="btn">Daftar</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data() {
    return {
      name:"",
      email:"",
      password:""
    }
  },
  methods: {
    async signUp() 
    {
       let result = await axios.post("http://localhost:3000/users",{
       email:this.email,
       password:this.password,
       name:this.name
      })

      console.warn(result);
      if(result.status==201)
      {
        localStorage.setItem("user-info", JSON.stringify(result.data))
        this.$router.push({name:"MasterPage"})
      }
    }
  },
  mounted() 
  {
    let user = localStorage.getItem("user-info");
    if(user){
      this.$router.push({name:"MasterPage"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.register {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

.register input {
  margin: 5px;
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: #0056b3;
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
