"use client";

import { useSyncExternalStore } from "react";

type Task = {
  id: number;
  text: string;
};

type TaskState = {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
};

let tasks: Task[] = [];
const listeners = new Set<() => void>();
let snapshot: TaskState;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function createSnapshot(): TaskState {
  return {
    tasks,
    addTask(text) {
      tasks = [...tasks, { id: Date.now(), text }];
      snapshot = createSnapshot();
      emit();
    },
    removeTask(id) {
      tasks = tasks.filter((task) => task.id !== id);
      snapshot = createSnapshot();
      emit();
    },
  };
}

snapshot = createSnapshot();

function getState(): TaskState {
  return snapshot;
}

function useTaskStore() {
  return useSyncExternalStore(subscribe, getState, getState);
}

export { useTaskStore };
