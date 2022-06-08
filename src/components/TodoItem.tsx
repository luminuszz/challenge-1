import checkIcon from "@assets/check.svg";
import trashIcon from "@assets/trash.svg";
import { Box, Flex, HStack, Image, Text, useBoolean, useToast } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FC, useEffect, useMemo } from "react";

import { removeTodo, Todo, toggleTodo } from "@app/features/todo.slice";
import { useAppDispatch } from "@app/hooks/redux";

type CheckBoxProps = {
  onClick: () => void;
  isChecked: boolean;
};

const CustomCheckbox: FC<CheckBoxProps> = ({ isChecked, onClick }) => (
  <Box cursor="pointer" onClick={onClick}>
    <input type="checkbox" checked={isChecked} hidden />
    <Flex
      alignItems="center"
      justifyContent="center"
      boxSize="20px"
      borderRadius="full"
      w="20px"
      h="20px"
      border={isChecked ? "" : "2px solid"}
      borderColor={isChecked ? "" : "blue.500"}
      bg={isChecked ? "purple.700" : "transparent"}
      _hover={{
        bgColor: isChecked ? "purple.500" : "blue.700",
        opacity: isChecked ? 1 : 0.8,
      }}
    >
      {isChecked && <Image src={checkIcon} alt="check" />}
    </Flex>
  </Box>
);

type TodoProps = {
  todo: Todo;
};

const TodoItem: FC<TodoProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useBoolean(todo.isFinished);
  const dispatch = useAppDispatch();
  const toast = useToast({ position: "top-right" });

  const distance = useMemo(
    () =>
      formatDistance(todo.createdAt, new Date(), {
        locale: ptBR,
      }),
    [todo.createdAt]
  );

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));

    toast({
      title: "Removed !",
      status: "success",
    });
  };

  useEffect(() => {
    dispatch(toggleTodo(todo.id));
  }, [dispatch, isChecked, todo.id]);

  return (
    <Box
      minH="72px"
      bgColor="gray.500"
      p="16px"
      border="1px solid"
      borderColor="gray.400"
      borderRadius="8px"
      w="100%"
    >
      <HStack
        w="100%"
        spacing="12px"
        alignItems="flex-start"
        justifyContent="space-between"
        title={distance}
      >
        <Flex>
          <CustomCheckbox onClick={setIsChecked.toggle} isChecked={isChecked} />
          <Text
            ml="16px"
            textAlign="left"
            textDecor={isChecked ? "line-through" : "none"}
            onClick={setIsChecked.toggle}
            cursor="pointer"
            color={isChecked ? "gray.300" : "gray.100"}
            fontSize="md"
          >
            {todo.content}
          </Text>
        </Flex>

        <Image boxSize="30px" src={trashIcon} cursor="pointer" onClick={handleRemoveTodo} />
      </HStack>
    </Box>
  );
};

export default TodoItem;
