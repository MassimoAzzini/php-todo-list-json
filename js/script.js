const { createApp } = Vue;

createApp({

  data() {
    return {
      apiUrl: 'server.php',
      list: [],
      newTask: '',
      message: false
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
      if(this.list[index].isDone){
        const data = new FormData();
        data.append('taskIndexDelate', index);
  
        axios.post(this.apiUrl, data)
          .then(result => {
            this.list = result.data;
          })
      }else{
        this.message = true;
        setTimeout( () => this.message = false, 2000)
      }
    }
    
  },

  mounted() {
    this.getList()
  },


}).mount('#app')