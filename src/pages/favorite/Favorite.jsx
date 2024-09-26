import classes from './Favorite.module.css'
import { Box, Text } from '@mantine/core';

export default function Favorite() {
  return (
    <div>
    <Box className={classes.content}>
      <Text fz={25} fw={700}>
      favorite Page
      </Text>
    </Box>
  </div>
  )
}
