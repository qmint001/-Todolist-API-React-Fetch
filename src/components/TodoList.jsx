import { useTodoList } from "./services/useTodoList";

export function TodoList() {
  const todo = useTodoList();

  return (
    <div className="">
      <input
        value={todo.task}
        type={"text"}
        onChange={(e) => {
          console.log("Updating task:", e.target.value);
          todo && todo.changeTask && todo.changeTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            todo && todo.addTask && todo.addTask();
          }
        }}
      />
      <ul>
        {todo.list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={item.task}>
              {item.task}
              <button
                onClick={() => {
                  const aux = [...todo.list];
                  aux[index].done = true;
                  todo.setList(aux);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
