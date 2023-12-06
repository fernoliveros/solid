// import { Outlet, useNavigate } from "@SolidJS/router";
import { createEffect } from "solid-js";
import { Outlet, useNavigate } from "@solidjs/router";
import { token } from "../../services/auth.service";

export default function RouteGuard() {
  const navigate = useNavigate();

  createEffect(() => {
    if (!token()) {
      navigate("/login", { replace: true });
    }
  });

  return <Outlet />;
}
