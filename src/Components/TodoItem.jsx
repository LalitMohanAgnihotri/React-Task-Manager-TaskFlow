// import styles from '../Todo'
function TodoItem({items,onDeleteClick }) {
  return (
    <div class="container text-center">
      <div class="row my-2">
        <div class="col-6 ">
          <h4>{items.name}</h4> 
        </div>
        <div class="col-3">
          <h4>{items.dueDate}</h4>
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-danger B"
          onClick={()=>onDeleteClick(items.name)}>
            Delete
          </button>
        </div>
      </div> 
    </div>
  );
}
export default TodoItem;
