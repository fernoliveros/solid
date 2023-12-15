import { For, Show, createResource } from "solid-js";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/todo.service";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { TodoType } from "./model";

export default function Todos() {
  const [todos, { mutate }] = createResource(getTodos);

  const onAddTodo = async (name: string) => {
    const newTodo = await addTodo(name);
    if (newTodo) mutate((todos) => [newTodo, ...todos]);
  };

  const onDelete = async (id: number) => {
    const deleted = await deleteTodo(id);
    if (deleted) {
      mutate((todos) => todos.filter((todo: TodoType) => todo.pet_id !== id));
    }
  };

  const onUpdate = async (todo: TodoType) => {
    const updated = await updateTodo(todo);
    if (updated) {
      mutate((todos) => {
        const index = todos.findIndex(
          (it: TodoType) => it.pet_id === todo.pet_id
        );
        const clone = [...todos];
        clone[index] = { ...todo };
        return clone;
      });
    }
  };
  return (
    <div class="text-3xl flex flex-col items-center gap-4">
      <h1 class="text-7xl">Pets</h1>
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
