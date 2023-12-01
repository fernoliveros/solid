import { TodoType } from "../todos/model";

const env = import.meta.env;
const api = `http://${env.VITE_API_HOST}:${env.VITE_API_PORT}/students`;

console.log("🚀 ~ file: todos-service.ts:6 ~ api:", api);
export async function getTodos() {
  try {
    const response = await fetch(api);
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
    const response = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name }),
    });
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
