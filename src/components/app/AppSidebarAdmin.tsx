import { Box, Button, Center, Drawer, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { JSX, useState } from "react"
import { MdHome, MdMenu, MdRunCircle, MdViewAgenda } from "react-icons/md"
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <Stack
        borderWidth={1}
        display={{ base: "none", xl: "flex" }}
        gridArea="sidebar"
        m={2}
        py={2}
        rounded={16}
        shadow="inner"
      >
        <Center p={2}>
          <Link to={privateRoute.home.path}>
            <Image src="/assets/react.svg" />
          </Link>
        </Center>
        <Stack overflow="auto" px={4}>
          <MenuItems />
        </Stack>
      </Stack>

      <Drawer.Root onOpenChange={(event) => setOpen(event.open)} open={open} placement="start">
        <Drawer.Backdrop />
        <Drawer.Trigger asChild>
          <Button display={{ base: "inline-flex", xl: "none" }} m={2}>
            <MdMenu />
          </Button>
        </Drawer.Trigger>
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Body>
              <Stack>
                <Center p={2}>
                  <Link to={privateRoute.home.path}>
                    <Image src="/assets/react.svg" />
                  </Link>
                </Center>
                <Stack>
                  <MenuItems />
                </Stack>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  )
}

export default AppSidebarAdmin
