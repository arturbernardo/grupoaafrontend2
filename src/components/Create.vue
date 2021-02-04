<!--<template>-->
<!--&lt;!&ndash;  {{infos}}&ndash;&gt;-->
<!--</template>-->

<script>

import axios from 'axios';

export default {
    name: 'Create',

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
