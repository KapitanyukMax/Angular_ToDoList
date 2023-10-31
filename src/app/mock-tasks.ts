import { ITask } from "./task";

export const TASKS: ITask[] = [
  { title: "Hit the gym", status: "unfinished", priority: false, deadline: new Date(2023, 3, 1) },
  { title: "Pay bills", status: "finished", priority: true },
  { title: "Meet John", status: "unfinished", priority: false },
  { title: "Buy eggs", status: "unfinished", priority: true, deadline: new Date(2023, 2, 29) },
  { title: "Read a book", status: "finished", priority: false },
  { title: "Organize office", status: "unfinished", priority: false },
  { title: "Eat dinner", status: "unfinished", priority: false },
  { title: "Buy apples", status: "unfinished", priority: true, deadline: new Date(2023, 2, 5) },
  { title: "Meet George", status: "unfinished", priority: true },
  { title: "Feed the cat", status: "unfinished", priority: false },
  { title: "Write a letter", status: "finished", priority: true },
  { title: "Run 1 km", status: "unfinished", priority: false, deadline: new Date(2022, 0, 15) }
];