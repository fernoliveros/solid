import { createSignal } from "solid-js";

type TodoProps = {
  onAddTodo: (name: string) => void;
};

function AddTodo(props: TodoProps) {
  const [name, setName] = createSignal("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onAddTodo(name());
        setName("");
      }}
    >
      <input
        id="add-todo"
        class="mr-4"
        value={name()}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        class="cursor-pointer bg-[#3b3b3b] px-3 rounded hover:bg-slate-600"
        disabled={!name().length}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
