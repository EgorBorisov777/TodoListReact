import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoActions.module.css'
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button>
        <RiRefreshLine title="Reset Todos" onClick={resetTodos} />
      </Button>
      <Button>
        <RiDeleteBin2Line
          title="Clear completed todos"
          onClick={deleteCompletedTodos}
          disabled={!completedTodosExist}
        />
      </Button>
    </div>
  )
}

export default TodosActions
