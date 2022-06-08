import plusIcon from "@assets/plus.svg";
import { Box, Button, Image, HStack, Input, useToast, FormErrorMessage } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "@app/features/todo.slice";
import { useAppDispatch } from "@app/hooks/redux";

const CreateTodo = () => {
  const dispath = useAppDispatch();
  const toast = useToast({ position: "top-right" });
  const [error, setError] = useState("");

  const [input, setInput] = useState("");

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (input.trim().length === 0) {
      setError("Please, fill the input");
      return;
    }

    dispath(
      addTodo({
        content: input,
        createdAt: Date.now(),
        id: uuidv4(),
        finishedAt: null,
        isFinished: false,
      })
    );

    setInput("");

    toast({
      title: "Todo added !",
      status: "success",
    });
  };

  return (
    <Box as="form" onSubmit={handleAddTodo} w="100%" mt="-27px">
      <HStack spacing="8px" flex="1">
        <Input
          isInvalid={!!error}
          required
          isRequired
          value={input}
          onChange={(e) => setInput(e.target.value)}
          _placeholder={{ color: "gray.300", fontSize: "lg" }}
          inputMode="text"
          h="54px"
          bg="gray.500"
          variant="solid"
          placeholder="Adicione uma nova tarefa"
        />
        {!!error && <FormErrorMessage>{error}</FormErrorMessage>}

        <Button
          type="submit"
          onClick={handleAddTodo}
          fontWeight="bold"
          fontSize="md"
          maxW="90px"
          w="100%"
          rightIcon={<Image src={plusIcon} />}
        >
          Criar
        </Button>
      </HStack>
    </Box>
  );
};

export default CreateTodo;
