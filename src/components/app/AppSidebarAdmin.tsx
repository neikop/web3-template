import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { JSX } from "react"
import { MdHome, MdRunCircle, MdViewAgenda } from "react-icons/md"
import { Link, useLocation } from "react-router"
import { privateRoute } from "routes"

type MenuItemProps = {
  icon?: JSX.Element
  name?: string
  path: string
}

const MenuItem = ({ icon, name, path }: MenuItemProps) => {
  const location = useLocation()

  const isHome = path === "/"
  const isContain = location.pathname.startsWith(path)
  const isSelected = isHome ? location.pathname === path : isContain

  return (
    <Box>
      <Link to={path}>
        <HStack
          minH={12}
          px={4}
          py={2}
          rounded={8}
          {...(isSelected && { backgroundColor: "purple.100" })}
          _hover={{ backgroundColor: "purple.100" }}
        >
          <Center>{icon}</Center>
          <Text>{name}</Text>
        </HStack>
      </Link>
    </Box>
  )
}

const MenuItems = () => (
  <>
    <MenuItem {...privateRoute.home} icon={<MdHome size={20} />} />
    <MenuItem {...privateRoute.swap} icon={<MdRunCircle size={20} />} />
    <MenuItem {...privateRoute.guide} icon={<MdViewAgenda size={20} />} />
  </>
)

const AppSidebarAdmin = () => {
  return (
    <Stack borderWidth={1} gridArea="sidebar" m={2} py={2} rounded={16} shadow="inner">
      <Center gridArea="logo" p={2}>
        <Link to={privateRoute.home.path}>
          <Image src="/assets/react.svg" />
        </Link>
      </Center>
      <Stack overflow="auto" px={4}>
        <MenuItems />
      </Stack>
    </Stack>
  )
}

export default AppSidebarAdmin
