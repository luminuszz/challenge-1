import checkIcon from "@assets/check.svg";
import trashIcon from "@assets/trash.svg";
import { Box, Flex, HStack, Image, Text, useBoolean } from "@chakra-ui/react";
import { FC } from "react";

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
      bg={isChecked ? "purple.500" : ""}
    >
      {isChecked && <Image src={checkIcon} alt="check" />}
    </Flex>
  </Box>
);

const TodoItem = () => {
  const [isChecked, setIsChecked] = useBoolean(false);

  return (
    <Box h="72px" bgColor="gray.500" p="16px" border="1px solid" borderColor="gray.400" borderRadius="8px">
      <HStack spacing="12px" alignItems="flex-start">
        <CustomCheckbox onClick={setIsChecked.toggle} isChecked={isChecked} />
        <Text
          textDecor={isChecked ? "line-through" : "none"}
          onClick={setIsChecked.toggle}
          cursor="pointer"
          color={isChecked ? "gray.300" : "gray.100"}
          fontSize="md"
        >
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </Text>

        <Image boxSize="30px" src={trashIcon} />
      </HStack>
    </Box>
  );
};

export default TodoItem;
