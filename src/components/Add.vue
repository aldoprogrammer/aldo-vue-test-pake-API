<template>
  <div>
    <Header/>
    <h1>Master Page to Add Data</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Nama Resto" />
      <input type="text" v-model="contact" placeholder="masukkan kontak" />
      <input type="text" v-model="address" placeholder="Alamat" />
      <button v-on:click="tambahResto" class="btn">Tambah Resto</button>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: "AddPage",
    // mounted() {
    //     let user = localStorage.getItem("user-info");
    //     if (!user) {
    //         this.$router.push({ name: "SignUp" });
    //     }
    // },
    components: { Header },
    methods: {
    async tambahResto() 
    {
       let result = await axios.post("http://localhost:3000/restaurants",{
       name:this.name,
       contact:this.contact,
       address:this.address
      })
      console.warn(result);
      if(result.status==201)
      {
        alert("Data berhasil ditambah")
        this.$router.push({name:"MasterPage"})
      }
    }

  }
};
</script>

<style scoped>

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
</style>
