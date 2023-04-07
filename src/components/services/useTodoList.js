import { create } from "zustand";

export const useTodoList = create((set) => ({
  task: "",
  list: [],

  changeTask: (value) => {
    set({ task: value });
  },

  addTask: () => {
    set((store) => ({
      list: [...store.list, { task: store.task, done: false }],
      task: "",
    }));
  },

  updateTask: (index, newData) => {
    set((store) => {
      const newList = [...store.list];
      newList[index] = { ...newList[index], ...newData };
      return { list: newList };
    });
  },

  getDataFromAPI: () => {
    const options = { method: "GET" };

    fetch("https://assets.breatheco.de/apis/fake/todos/user/qmint001", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        set({ list: data });
      });
  },

  updateDataAPI: () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(useTodoListStore.getState().list),
    };

    fetch("https://assets.breatheco.de/apis/fake/todos/user/qmint001", options);
  },
}));
