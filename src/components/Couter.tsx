import { Badge, HStack, Text } from "@chakra-ui/react";
import React from "react";

type CounterProps = {
  count: number | string;
  description: string;
  color: "blue" | "purple";
};

const Counter: React.FC<CounterProps> = ({ color, count, description }) => {
  const currentColor = color === "blue" ? "blue.500" : "purple.500";

  return (
    <HStack spacing="8px">
      <Text lineHeight="17px" fontSize="md" fontWeight="bold" color={currentColor}>
        {description}
      </Text>
      <Badge borderRadius="full" textAlign="center" h="19px" fontWeight="bold" bgColor="gray.400" color="gray.200">
        {count}
      </Badge>
    </HStack>
  );
};

export default Counter;
