import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMsg from "./Components/WelcomeMsg";

import "./App.css";
import { use } from "react";
import { useState } from "react";

function App() {
  let initialtodoItems = [
    {
      name: "Learn React",
      dueDate: "4/10/2024",
    },
    {
      name: "Learn JavaScript",
      dueDate: "5/10/2024",
    },
    {
      name: "Learn HTML",
      dueDate: "6/10/2024",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const hendelNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ]);
  };

  const hendelDeleteItem = (itemName) => {
    const newTodoItem = todoItems.filter((todoItem) => {
      return todoItem.name != itemName;
    });
    setTodoItems(newTodoItem);
  };

  return (
    <div>
      <AppName />
      {todoItems.length == 0 && <WelcomeMsg />}
      <AddTodo onNewItem={hendelNewItem} />
      <TodoItems Items={todoItems} onDeleteClick={hendelDeleteItem} />
    </div>
  );
}

export default App;
