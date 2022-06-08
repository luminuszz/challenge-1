import clipboardIcon from "@assets/clipboard.svg";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

const EmptyList = () => (
  <Box py="64px" h="244px" borderRadius="8px" mt="24px" w="100%" borderTop="1px solid" borderTopColor="gray.400">
    <VStack spacing="16px" alignItems="center">
      <Image src={clipboardIcon} alt="Empty list" boxSize="56px" />

      <VStack>
        <Heading color="gray.300" fontSize="lg">
          Você ainda não tem tarefas cadastradas{" "}
        </Heading>

        <Text color="gray.300" fontSize="lg">
          Crie tarefas e organize seus itens a fazer
        </Text>
      </VStack>
    </VStack>
  </Box>
);

export default EmptyList;
