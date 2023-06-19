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
    console.log(this.todos);
  }

  removeTodo(todo: ITodo): void {
    this.todos.filter((to) => to.id != todo.id);
  }
}
