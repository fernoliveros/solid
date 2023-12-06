import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { login, token } from "../../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  if (token()) {
    navigate("/already-logged-in", { replace: true });
  }

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    await login({ email: email(), password: password() });
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1 class="text-3xl">Welcome to Fernagachi!</h1>
      <form onSubmit={onSubmit} class="flex flex-col items-center gap-5 mt-5">
        <div class="flex flex-col items-start">
          <label>Email</label>
          <input
            id="email"
            required
            class="px-2 py-1 w-[15rem]"
            value={email()}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="flex flex-col items-start">
          <label>Password</label>
          <input
            id="pword"
            required
            class="px-2 py-1 w-[15rem]"
            type="password"
            value={password()}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class="py-1 px-3 cursor-pointer bg-[#3b3b3b] px-3 rounded hover:bg-slate-600 w-[15rem] mt-2">
          Login
        </button>
        <div class="flex justify-between  w-[15rem]">
          <A href="/signup" class="hover:underline hover:text-cyan-500">
            Sign up
          </A>
          <A
            href="/forgot-password"
            class="hover:underline hover:text-cyan-500"
          >
            Forgot Password
          </A>
        </div>
      </form>
    </div>
  );
}
