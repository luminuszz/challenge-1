import { HStack, Tag, Text } from "@chakra-ui/react";
import React from "react";

type CounterProps = {
  count: number | string;
  description: string;
  color: "blue" | "purple";
};

const Counter: React.FC<CounterProps> = ({ color, count, description }) => {
  const currentColor = color === "blue" ? "blue.500" : "purple.500";

  return (
    <HStack spacing="10px" alignItems="center">
      <Text lineHeight="17px" fontSize="md" fontWeight="bold" color={currentColor}>
        {description}
      </Text>
      <Tag
        ml="5px"
        textTransform="lowercase"
        borderRadius="full"
        textAlign="center"
        fontWeight="bold"
        bgColor="gray.400"
        color="gray.200"
      >
        {count}
      </Tag>
    </HStack>
  );
};

export default Counter;
