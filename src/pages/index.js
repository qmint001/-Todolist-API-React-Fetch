import { TodoList } from "@/components/TodoList";
import { Footer } from "@/components/Footer";
import { PersonContext } from "@/components/PersonContext";
import { Welcome } from "@/components/Welcome";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("John Doe");
  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <TodoList />
    </div>
  );
}
