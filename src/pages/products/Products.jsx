import classes from './Products.module.css'
import { Box, Text } from '@mantine/core';

export default function Products() {
  return (
    <div>
    <Box className={classes.content}>
      <Text fz={25} fw={700}>
          Products Page
      </Text>
    </Box>
  </div>
  )
}
