import { token } from "../../services/auth.service";

export default function Header() {
  return (
    <div class="p-4 bg-gray-700 flex justify-between">
      <a href="/" class="hover:underline hover:text-cyan-500">
        <i class="fas fa-home text-2xl hover:text-cyan-100"></i>
      </a>
      {token() ? (
        <a href="/logout" class="hover:underline hover:text-cyan-500">
          Logout
        </a>
      ) : (
        <a
          href="/login"
          class="hover:underline hover:text-cyan-500 flex items-center"
        >
          Login
        </a>
      )}
    </div>
  );
}
