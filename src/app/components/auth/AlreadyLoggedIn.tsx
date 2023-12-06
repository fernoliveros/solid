import { A } from "@solidjs/router";

export default function AlreadyLoggedIn() {
  return (
    <div>
      <h1 class="text-3xl">You're already logged in!</h1>
      <div class="flex justify-center mt-4">
        <div class="flex justify-between w-[15rem]">
          <A href="/" class="hover:underline hover:text-cyan-500">
            Go Back
          </A>
          <A href="/logout" class="hover:underline hover:text-cyan-500">
            Logout
          </A>
        </div>
      </div>
    </div>
  );
}
