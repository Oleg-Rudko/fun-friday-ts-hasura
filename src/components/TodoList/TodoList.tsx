import { useQuery, gql } from "@apollo/client";

const TodoList = () => {

  const { data } = useQuery(gql`
    query TodoList {
      todo_heading(where: { id: { _eq: 1 } }) {
        name
        category
        todos {
          name
          is_buy
        }
      }
    }
  `);

  console.log(data);

  return (
    <div>
      <p>TodoList</p>
    </div>
  );
};

export default TodoList;
