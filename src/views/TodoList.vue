<template>
  <div>
    <h1>Todoリスト</h1>
    <!-- form要素作成 -->
    <!-- @submit.preventを追加 -->
    <form @submit.prevent="addTodo()">
      <input v-model="todo">
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <!-- クリックイベントを追加 -->
        <button @click="removeTodo(index)">完了</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  // data_puropaty
  data(){
    return{
      todo: '',
      // todosプロパティ追加
      todos: [],
    }
  },
  // methodsプロパティ
  methods: {
    addTodo(){
      this.todos.push(this.todo); 
      this.todo = "";
    },
    // 削除メソッド
    removeTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>