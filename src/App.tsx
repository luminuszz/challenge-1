import { Container, VStack } from "@chakra-ui/react";
import CreateTodo from "@components/CreateTodo";
import EmptyList from "@components/EmptyList";
import Header from "@components/Header";
import TodoInformation from "@components/TodoInformation";
import TodoItem from "@components/TodoItem";

import { todoSelectors } from "@app/features/todo.slice";
import { useAppSelector } from "@app/hooks/redux";

const App = () => {
  const todos = useAppSelector(todoSelectors.selectAll);

  return (
    <>
      <Header />
      <Container mx="auto" as="main" maxW="738px" w="100%">
        <CreateTodo />

        <TodoInformation />

        {/*  <EmptyList /> */}

        <VStack mt="24px" spacing="12px" mb="30px">
          {todos.length ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <EmptyList />}
        </VStack>
      </Container>
    </>
  );
};

export default App;
