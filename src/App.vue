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
                <a v-bind:href="'/student/'+info.id" >Editar</a> |
                <a href="/student/delete">Deletar</a>

              </td>
            </tr>
          </tbody>
        </table>
</template>

<script>

import axios from 'axios';

export default {
    name: 'App',

    data() {
        return {
            infos: null,
        }
    },
    created() {
        axios.get(`http://127.0.0.1:8000/api/student/`)
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
