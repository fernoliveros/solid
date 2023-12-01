import { For, Show, createResource } from "solid-js";
import "./App.css";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../service/todos-service";
import Todo from "../todos/Todo";
import AddTodo from "../todos/AddTodo";
import { TodoType } from "../todos/model";

function App() {
  const [todos, { mutate }] = createResource(getTodos);

  const onAddTodo = async (name: string) => {
    const newTodo = await addTodo(name);
    if (newTodo) mutate((todos) => [newTodo, ...todos]);
  };

  const onDelete = async (id: number) => {
    const deleted = await deleteTodo(id);
    if (deleted) {
      mutate((todos) =>
        todos.filter((todo: TodoType) => todo.student_id !== id)
      );
    }
  };

  const onUpdate = async (todo: TodoType) => {
    const updated = await updateTodo(todo);
    if (updated) {
      mutate((todos) => {
        const index = todos.findIndex(
          (it: TodoType) => it.student_id === todo.student_id
        );
        const clone = [...todos];
        clone[index] = { ...todo };
        return clone;
      });
    }
  };
  return (
    <div class="text-3xl flex flex-col items-center gap-4">
      <h1 class="text-7xl">Todos</h1>
      <AddTodo onAddTodo={onAddTodo}></AddTodo>
      <Show when={!todos.loading}>
        <div>
          <For each={todos()}>
            {(todo) => (
              <Todo
                todo={todo}
                updateTodo={onUpdate}
                onDelete={onDelete}
              ></Todo>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default App;
