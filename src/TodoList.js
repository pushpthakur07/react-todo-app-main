const TodoList = ({ list, remove, editTodo, editedTodo, cancelEdit, editIndex, setEditedTodo, updateTodo, }) => {

  return (
    <ul>
      {list.map((todo, index) => (
        <li key={index}>
          {index === editIndex ? (
          
            <div className="edit-popup">
            <div className="edit-popup_inr">
              <input
                type="text"
                placeholder="...Update Task"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
              <button onClick={() => updateTodo()}>Update</button>
              <button onClick={() => cancelEdit()}>Cancel</button>
              </div></div>
            
          ) : (
            <div className="rgt_btn">
              <div className="task_nm">
                {todo}
              </div>
              <div className="btn">
                <button onClick={() => editTodo(index)}>
                <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button onClick={() => remove(todo)}>
                    <svg enable-background="new 0 0 48 48" height="24px" version="1.1" viewBox="0 0 48 48" width="24px">
                      <g id="Expanded"><g><g><path d="M41,48H7V7h34V48z M9,46h30V9H9V46z"/></g><g><path d="M35,9H13V1h22V9z M15,7h18V3H15V7z"/></g>
                      <g><path d="M16,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C17,40.553,16.553,41,16,41z"/></g>
                      <g><path d="M24,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C25,40.553,24.553,41,24,41z"/></g>
                      <g><path d="M32,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C33,40.553,32.553,41,32,41z"/></g>
                      <g><rect height="2" width="48" y="7"/></g></g></g></svg>
                    </button>
                </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


