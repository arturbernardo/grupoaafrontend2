<script>

import axios from 'axios'

export default {
  name: 'Edit',

  data () {
    return {
      infos: null
    }
  },
  created () {
    axios.get(`https://backendgrupoa.herokuapp.com/api/student/` + 1)
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
