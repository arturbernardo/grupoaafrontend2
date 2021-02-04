<template>
  <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>cpf</td>
            <td>ca</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="info in infos" v-bind:key="info">
            <td>{{info.id}}</td>
            <td>{{info.name}}</td>
            <td>{{info.email}}</td>
            <td>{{info.cpf}}</td>
            <td>{{info.ca}}</td>
            <td>
              <a href="/student/edit">Editar</a> |
              <a href="/student/delete">Deletar</a>

            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>

import axios from 'axios';

export default {
    name: 'List',

    data() {
        return {
            infos: null,
        }
    },
    created() {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' }};

        axios.get(`https://backendgrupoa.herokuapp.com/api/student`, config)
            .then((response) => {
            // JSON responses are automatically parsed.
            this.infos = response.data;

        }
    )
    .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>
