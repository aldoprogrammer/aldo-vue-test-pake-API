<template>
  <div>
    <Header/>
    <h1>Master Page to Update Data</h1>
    <div class="register">
      <input type="text" v-model="restaurants.name" placeholder="Nama Resto" />
      <input type="text" v-model="restaurants.contact" placeholder="masukkan kontak" />
      <input type="text" v-model="restaurants.address" placeholder="Alamat" />
      <button v-on:click="updateResto" class="btn">Update Resto</button>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: "UpdatePage",
    components: { Header },
    data(){
      return {
        restaurants: {
          name:"",
          address:"",
          contact:""
        }
      }
    },
    methods:{
    async updateResto(){
  const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
    name: this.restaurants.name,
    contact: this.restaurants.contact,
    address: this.restaurants.address
      })
      console.warn(result);
      if(result.status==200)
      {
        alert("Data berhasil diubah")
        this.$router.push({name:"MasterPage"})
      }
    }
  }
    ,
    async mounted() {
      let user = localStorage.getItem('user-info');
      if(!user) {
        this.$router.push({name:"SignUp"})
      }
      const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
      console.log(result)
      this.restaurants=result.data
    }
};
</script>

<style scoped>

div {
  position: relative;
}
.back-button {
  position: absolute;
  top: -50px;
  right: 10px;
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #0056b3;
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
