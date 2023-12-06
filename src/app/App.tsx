import "./App.css";
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import RouteGuard from "./components/auth/RouteGuard";
import AlreadyLoggedIn from "./components/auth/AlreadyLoggedIn";
import Header from "./components/nav/Header";

const Login = lazy(() => import("./components/auth/Login"));
const Logout = lazy(() => import("./components/auth/Logout"));
const Signup = lazy(() => import("./components/auth/Signup"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const Todos = lazy(() => import("./components/todos/Todos"));

export default function App() {
  return (
    <div>
      <Header />
      <div class="p-8">
        <Router>
          <Routes>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/already-logged-in" component={AlreadyLoggedIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/" component={RouteGuard}>
              <Route path="/" component={Todos} />
            </Route>
            <Route
              path="*"
              element={<h1 class="text-3xl">Where you going?</h1>}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
