import { clearToken } from "../../services/auth.service";

export default function Logout() {
  clearToken();

  return <h1 class="text-3xl">You've been logged out!</h1>;
}
