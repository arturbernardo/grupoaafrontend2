<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          CA
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in infos"
        :key="item.id"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.ca }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

import axios from 'axios'

export default {
  name: 'List',

  data () {
    return {
      infos: null
    }
  },
  created () {
    axios.get(`https://backendgrupoa.herokuapp.com/api/student`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.infos = response.data
      }
      )
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
