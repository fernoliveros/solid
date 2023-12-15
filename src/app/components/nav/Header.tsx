import { createSignal } from "solid-js";
import { token, userMeta } from "../../services/auth.service";
import UserPopover from "./UserPopover";

export default function Header() {
  const [showPopover, setShowPopover] = createSignal(false);
  return (
    <div class="p-4 bg-gray-700 flex justify-between">
      <a href="/" class="hover:underline hover:text-cyan-500">
        <i class="fas fa-home text-2xl hover:text-cyan-100"></i>
      </a>
      {token() ? (
        <div class="flex gap-6">
          <div class="text-2xl font-bold">{userMeta.nickname}</div>
          <button class="relative" onClick={() => setShowPopover(true)}>
            <i class="fas fa-user text-2xl hover:text-cyan-100"></i>
            {showPopover() && <UserPopover />}
          </button>
        </div>
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
