import { Box, Flex } from "@chakra-ui/react";
import Counter from "@components/Couter";
import React from "react";

import { todoSelectors } from "@app/features/todo.slice";
import { useAppSelector } from "@app/hooks/redux";

const TodoInformation = () => {
  const allTodosCount = useAppSelector(todoSelectors.selectTotal);

  const finishedTodos = useAppSelector(todoSelectors.selectAll).filter((todo) => todo.isFinished).length;

  return (
    <Box w="100%" mt="64px">
      <Flex flex="1" alignItems="stretch" justifyContent="space-between">
        <Counter color="blue" count={allTodosCount} description="Tarefas criadas" />
        <Counter
          color="purple"
          count={`${finishedTodos} de ${allTodosCount}`}
          description="Concluídas"
        />
      </Flex>
    </Box>
  );
};

export default TodoInformation;
