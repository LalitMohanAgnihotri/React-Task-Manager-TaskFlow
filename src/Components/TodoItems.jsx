import TodoItem from "./TodoItem";
function TodoItems({Items ,onDeleteClick}) {
  return (
    <div class="container text-center">
      {Items.map((item, index) => (
        <TodoItem key={index} items={item} onDeleteClick={onDeleteClick }/>

      ))}
    </div>
  );

}

export default TodoItems;
