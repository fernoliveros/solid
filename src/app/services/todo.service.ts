import { TodoType } from "../components/todos/model";
import { doDelete, doGet, doPost, doUpdate } from "./http.service";

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
    const response = await doDelete(`${api}/${id}`);
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
    const response = await doUpdate(api, todo);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail);
    }
    return true;
  } catch (err) {
    console.error(err);
  }
}
