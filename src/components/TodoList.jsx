import { useTodoList } from "./services/useTodoList";

export function TodoList() {
  const todo = useTodoList();

  return (
    <div className="">
      <input
        value={todo.task}
        type={"text"}
        onChange={(e) => {
          todo.changeTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            todo.addTask();
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
                  const aux = [...list];
                  aux[index].done = true;
                  setList(aux);
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
