import React, { PureComponent } from "react";
import { getTodoList } from "../../services/todoList";
import Loader from "../loaders";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }
  getTodos = () => {
    getTodoList()
      .then((res) => {
        this.setState({ data: res });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  componentDidMount() {
    this.getTodos();
  }
  render() {
    const { data, isLoading } = this.state;
    const showList = !isLoading && data.length !== 0;
    return (
      <div className="todo-list">
        <h1>To do list</h1>
        {showList && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
export default TodoList;
