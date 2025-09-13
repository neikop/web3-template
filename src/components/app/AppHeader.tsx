import { Box, Center, Flex } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const AppHeader = () => {
  return (
    <Flex alignItems="stretch" gap={4} gridArea="header" justifyContent="space-between" px={4}>
      <Box />
      <Center smDown={{ bottom: 0, h: 16, left: 0, position: "fixed", right: 0, shadow: "sm" }}>
        <ConnectButton />
      </Center>
    </Flex>
  )
}

export default AppHeader
