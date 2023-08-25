<template>
  <div>
    <Header />
    <h1>Haii {{ name }}, Selamat datang di Master Page</h1>
  </div>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Resto</th>
      <th>KONTAK</th>
      <th>ALAMAT</th>
      <th>Pilihan</th>
    </tr>
    <tr v-for="(item, index) in restaurants" :key="item.id">
      <td>{{ index + 1  }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="hapusResto(item.id)">Hapus Resto</button>
      </td>

    </tr>
  </table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: "MasterPage",
  data() {
    return {
      name: '',
      restaurants: [],
    }
  },
  components: { Header },
  async mounted() {
    this.loadData();
  },
  methods: {
    async hapusResto(id) {
      let result = await axios.delete("http://localhost:3000/restaurants/"+id);
      console.log(result)
      if (result.status == 200) {
        alert("Data berhasil dihapus")
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      console.warn(result);
      this.restaurants = result.data;
    }
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

table td,
table th {
  width: 150px;
  height: 70px;
}
</style>
