// export class App {
//   public message = "Hello World!";
// }

import uniqid from "uniqid";

interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

export class App {
  heading: string;
  todos: ITodo[];
  todoDescription: string;

  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = "";
  }

  addTodo(): void {
    if (this.todoDescription) {
      this.todos.push({
        id: uniqid(),
        description: this.todoDescription,
        done: false,
      });
      this.todoDescription = "";
    }
  }

  removeTodo(todo: ITodo): void {
    this.todos.filter((to) => to.id != todo.id);
  }
}
