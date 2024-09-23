import classes from './About.module.css'
import { Box, Text } from '@mantine/core';

export default function About() {
  return (
    <div>
    <Box className={classes.content}>
      <Text fz={25} fw={700}>
          About Page
      </Text>
    </Box>
  </div>
  )
}
