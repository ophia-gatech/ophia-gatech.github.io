import { Box, Container, Text, Title, Divider } from '@mantine/core';
import classes from './PageHero.module.css';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <Box className={classes.hero}>
      <Container size="md" className={classes.content}>
        {eyebrow && <Text className={classes.eyebrow}>{eyebrow}</Text>}
        <Title order={1} className={classes.title}>{title}</Title>
        <Divider my="lg" color="rgba(201,168,76,0.5)" maw={80} mx="auto" />
        {subtitle && <Text className={classes.subtitle}>{subtitle}</Text>}
      </Container>
    </Box>
  );
}
