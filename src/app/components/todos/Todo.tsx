import { createSignal } from "solid-js";
import { TodoType } from "./model";

type TodoProps = {
  todo: TodoType;
  updateTodo: (todo: TodoType) => void;
  onDelete: (id: number) => void;
};

export default function Todo(props: TodoProps) {
  const todo = props.todo;
  const [edit, setEdit] = createSignal(false);
  const [newName, setNewName] = createSignal(todo.first_name);
  const updateName = (e: SubmitEvent) => {
    e.preventDefault();
    props.updateTodo({ ...todo, ...{ first_name: newName() } });
    setNewName("");
  };
  const toggleComplete = () => {
    props.updateTodo({ ...todo, ...{ done: !todo.done } });
  };

  return (
    <div class="flex grow justify-between w-[28rem]">
      <div class="flex items-center">
        <input
          id={todo.pet_id.toString()}
          checked={todo.done}
          type="checkbox"
          class={"mr-3 w-5 h-5 cursor-pointer"}
          onChange={toggleComplete}
        />
        {edit() ? (
          <div>
            <form onSubmit={updateName}>
              <input
                id={`${todo.pet_id.toString()}-edit`}
                type="text"
                value={newName()}
                onChange={(e) => setNewName(e.target.value)}
              ></input>
            </form>
          </div>
        ) : (
          <label class={`${todo.done ? "line-through" : ""} mr-10`}>
            {todo.first_name}
          </label>
        )}
      </div>
      <div>
        <button class="cursor-pointer mr-4" onClick={() => setEdit(true)}>
          <i class="fas fa-pencil text-2xl hover:text-cyan-100"></i>
        </button>
        <button
          class="cursor-pointer"
          onClick={() => props.onDelete(todo.pet_id)}
        >
          <i class="fas fa-trash text-2xl hover:text-cyan-100"></i>
        </button>
      </div>
    </div>
  );
}
