import { TodoType } from "../todos/model";

export default function PetRow(props: { pet: TodoType }) {
  const pet = props.pet;
  return (
    <div class="text-3xl flex flex-col items-center gap-4">
      <h1 class="text-7xl">{pet.first_name}</h1>
    </div>
  );
}
