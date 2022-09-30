import { Box } from '@chakra-ui/layout'
import Sidebar from './sidebar'

const PlayerLayout = ({ children }) => {
    return (
        <Box width="200vh" height="100vh">
            <Box position="absolute" top="0" width="250px">
                <Sidebar></Sidebar>
            </Box>
            <Box marginLeft="250px" >
                {children}
            </Box>
            <Box position="absolute" left="0" bottom="0">
                ahsovhoavoagouvgogaiuvsig
            </Box>
        </Box>
    )
}

export default PlayerLayout