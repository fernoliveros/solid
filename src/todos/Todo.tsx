import { TodoType } from "./model";

type TodoProps = {
  todo: TodoType;
  toggleComplete: (todo: TodoType) => void;
  onDelete: (id: number) => void;
};

function Todo(props: TodoProps) {
  const todo = props.todo;

  return (
    <div class="flex grow justify-between w-[24rem]">
      <div>
        <input
          id={todo.student_id.toString()}
          checked={todo.done}
          type="checkbox"
          class={"mr-3 w-5 h-5 cursor-pointer"}
          onChange={() => props.toggleComplete(todo)}
        />
        <label class={`${todo.done ? "line-through" : ""} mr-10`}>
          {todo.first_name}
        </label>
      </div>
      <button
        class="cursor-pointer"
        onClick={() => props.onDelete(todo.student_id)}
      >
        <i class="fas fa-trash text-2xl hover:text-cyan-100"></i>
      </button>
    </div>
  );
}

export default Todo;
