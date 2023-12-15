export default function UserPopover() {
  return (
    <div class="py-2 px-3 w-36 absolute right-0 bg-gray-600 flex flex-col gap-4 items-start">
      <a
        href="/manage-user"
        class="hover:underline hover:text-cyan-500 flex items-center"
      >
        Edit Nickname
      </a>
      <a
        href="/logout"
        class="hover:underline hover:text-cyan-500 flex items-center"
      >
        Log Out
      </a>
    </div>
  );
}
