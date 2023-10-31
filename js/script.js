const { createApp } = Vue;

createApp({

  data() {
    return {
      apiUrl: 'server.php',
      list: [],
      newTask: '',
    }
      
    
  },

  methods: {
    getList(){
      axios.get(this.apiUrl)
      .then(result => {
        this.list = result.data;
        console.log(this.list);
      })
    },

    addTask(){
      const data = new FormData();

      data.append('taskTitle', this.newTask)

      axios.post(this.apiUrl, data)
      .then(result => {
        this.list = result.data;
        this.newTask = '';
      })
    },

    deleteTask(index){
      const data = new FormData();
      data.append('taskIndexDelate', index);

      axios.post(this.apiUrl, data)
        .then(result => {
          this.list = result.data;
        })
    }
    
  },

  mounted() {
    this.getList()
  },


}).mount('#app')