import { TodoType } from "../components/todos/model";
import { doGet, doPost } from "./http.service";

const env = import.meta.env;
const api = `http://${env.VITE_API_HOST}:${env.VITE_API_PORT}/pets`;

export async function getTodos() {
  try {
    const response = await doGet(api);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function addTodo(first_name: string) {
  try {
    const response = await doPost(api, { first_name });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return data[0];
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodo(id: number) {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return true;
  } catch (err) {
    console.error(err);
  }
}

export async function updateTodo(todo: TodoType) {
  try {
    const response = await fetch(api, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return true;
  } catch (err) {
    console.error(err);
  }
}
