import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import TodosApp from '../components/todosApp.component';
import * as todoActionCreators from '../actions/todo.actions'

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    fireRef: state.get('fireRef'),
    loading: state.get('loadingTodos'),
  };
}

function mapDispatchToProps(dispatch) {
  // const remoteActions {onAdd: _addTodo} = todoActionCreators;

  const remoteActions = {
    onAdd: todoActionCreators.remoteAddTodo,
    onInit: todoActionCreators.getTodos
  };

  return {
    remoteActions: bindActionCreators(remoteActions, dispatch),
    todoActions: bindActionCreators(todoActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);