import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { createUser, token } from "../../services/auth.service";
import { useNavigate } from "@solidjs/router";

export type CreateUserForm = {
  nickname: string;
  email: string;
  password: string;
  pwordConfirm: string;
};

export default function Signup() {
  const navigate = useNavigate();
  const [fields, setFields] = createStore<CreateUserForm>({
    nickname: "",
    email: "",
    password: "",
    pwordConfirm: "",
  });
  let psConfirmRef: HTMLInputElement | undefined = undefined;

  if (token()) {
    navigate("/already-logged-in", { replace: true });
  }

  createEffect(() => {
    const pwordEquality = fields.password === fields.pwordConfirm;
    if (!psConfirmRef) return;
    psConfirmRef.setCustomValidity(
      pwordEquality ? "" : "Passwords do not match"
    );
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    await createUser(fields);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1 class="text-3xl">Sign Up</h1>
      <form onSubmit={onSubmit} class="flex flex-col items-center gap-5 mt-5">
        <div class="flex flex-col items-start">
          <label for="nickname">Nickname</label>
          <input
            id="nickname"
            required
            class="px-2 py-1 w-[15rem]"
            onInput={(e) => setFields("nickname", e.target.value)}
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="email">Email</label>
          <input
            id="email"
            // type="email"
            required
            class="px-2 py-1 w-[15rem]"
            onInput={(e) => setFields("email", e.target.value)}
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="pword">Password</label>
          <input
            id="pword"
            type="password"
            required
            class="px-2 py-1 w-[15rem]"
            onInput={(e) => setFields("password", e.target.value)}
          />
        </div>
        <div class="flex flex-col items-start">
          <label for="pword-confirm">Confirm Password</label>
          <input
            ref={psConfirmRef}
            id="pword-confirm"
            type="password"
            required
            class="px-2 py-1 w-[15rem]"
            onInput={(e) => setFields("pwordConfirm", e.target.value)}
          />
        </div>
        <button class="py-1 px-3 cursor-pointer bg-[#3b3b3b] px-3 rounded hover:bg-slate-600 w-[15rem] mt-2">
          Create
        </button>
      </form>
    </div>
  );
}
