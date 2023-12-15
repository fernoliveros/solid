import { For, Show, createResource } from "solid-js";
import { getPets } from "../../services/pets.service";
import PetRow from "./Pet";

export default function PetList() {
  const [pets] = createResource(getPets);

  //   const onAddTodo = async (name: string) => {
  //     const newTodo = await addTodo(name);
  //     if (newTodo) mutate((todos) => [newTodo, ...todos]);
  //   };

  //   const onDelete = async (id: number) => {
  //     const deleted = await deleteTodo(id);
  //     if (deleted) {
  //       mutate((todos) => todos.filter((todo: TodoType) => todo.pet_id !== id));
  //     }
  //   };

  //   const onUpdate = async (todo: TodoType) => {
  //     const updated = await updateTodo(todo);
  //     if (updated) {
  //       mutate((todos) => {
  //         const index = todos.findIndex(
  //           (it: TodoType) => it.pet_id === todo.pet_id
  //         );
  //         const clone = [...todos];
  //         clone[index] = { ...todo };
  //         return clone;
  //       });
  //     }
  //   };
  return (
    <div class="text-3xl flex flex-col items-center gap-4">
      <h1 class="text-7xl">Pets</h1>
      <Show when={!pets.loading}>
        <div>
          <For each={pets()}>{(pet) => <PetRow pet={pet} />}</For>
        </div>
      </Show>
    </div>
  );
}
