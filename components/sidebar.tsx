import NextImage from 'next/image'
import NextLink from 'next/link'
import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/layout"

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'
import { usePlaylist } from '../lib/hooks'


const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library'
    }
]

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: 'Favourite',
        icon: MdFavorite,
        route: '/favourite'
    }
]

const playlists = new Array(30).fill(1).map((_, i) => 'Playlist $(i+1)')

const Sidebar = () => {
    return (
        <Box width="100%" height='calc(100vh - 100px)' bg="black" paddingX="5px" color="gray">
            <Box paddingY="20px" height="100%">
                <Box width="120px" marginBottom="20px" paddingY="20px" >
                    <NextImage src="/tathya.svg" height={60} width={120} />
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {navMenu.map(menu => (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" marginRight="20px"></ListIcon>
                                            {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box marginY="20px">
                    <List spacing={2}>
                        {musicMenu.map(menu => (
                            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                                <LinkBox>
                                    <NextLink href={menu.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={menu.icon} color="white" marginRight="20px"></ListIcon>
                                            {menu.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider bg='gray.800' />
                <Box height="45%" overflow='auto' paddingY="20px" >
                    <List spacing={2}>
                        {playlists.map(playlist => {
                            <ListItem paddingY='20px' key={playlist} fontSize="16px">
                                <LinkBox>
                                    <NextLink href='/' passHref>
                                        <LinkOverlay color="white">{playlist}</LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        })}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar