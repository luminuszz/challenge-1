import { Container, VStack } from "@chakra-ui/react";
import CreateTodo from "@components/CreateTodo";
import EmptyList from "@components/EmptyList";
import Header from "@components/Header";
import TodoInformation from "@components/TodoInformation";
import TodoItem from "@components/TodoItem";

const App = () => (
  <>
    <Header />
    <Container mx="auto" as="main" maxW="738px" w="100%">
      <CreateTodo />

      <TodoInformation />

      {/*  <EmptyList /> */}

      <VStack mt="24px" spacing="12px">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </VStack>
    </Container>
  </>
);

export default App;
