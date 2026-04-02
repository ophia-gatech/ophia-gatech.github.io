import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  Badge, Button, Group, Divider,
} from '@mantine/core';
import { IconStar, IconArrowRight } from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import { execBoard, spotlight } from '../data/team';
import classes from './Team.module.css';

export function Team() {
  return (
    <Box>
      <PageHero
        eyebrow="Nu Chapter Leadership"
        title="Meet the Team"
        subtitle="The dedicated individuals who lead Nu Chapter with passion, purpose, and service."
      />

      {/* EXEC BOARD */}
      <Box py="5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Executive Board</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={600}>
              Our executive board members are elected each year to guide Nu Chapter's programs, events, and vision.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }} spacing="lg">
            {execBoard.map(member => (
              <Paper key={member.id} className={classes.execCard} p="xl" radius="lg" shadow="xs">
                <Stack align="center" gap="sm">
                  <Box className={classes.avatar} style={{ background: member.gradient }}>
                    {member.initial}
                  </Box>
                  <Title order={4} ta="center" className={classes.memberName}>{member.name}</Title>
                  <Badge color="gold" variant="light" size="sm" radius="xl">{member.position}</Badge>
                  <Text size="sm" c="dimmed" ta="center" lh={1.6}>{member.bio}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* MEMBER SPOTLIGHT */}
      <Box py="5rem">
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Member Spotlight</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">
              Each month we celebrate a member who embodies the spirit of service, sisterhood, and scholarship.
            </Text>
          </Stack>

          <Paper className={classes.spotlightCard} radius="lg" shadow="md" style={{ overflow: 'hidden' }}>
            <Group align="stretch" wrap="nowrap" gap={0} className={classes.spotlightInner}>
              {/* TODO: Replace the placeholder icon with a real headshot of the spotlight member.
                   Add the image to /public/images/ and render it with object-fit: cover to fill this panel. */}
              <Box className={classes.spotlightImage}>
                <Text style={{ fontSize: '5rem', color: 'rgba(201,168,76,0.25)' }}>✦</Text>
              </Box>
              <Box p="3rem" style={{ flex: 1 }}>
                <Badge
                  leftSection={<IconStar size={11} />}
                  color="gold"
                  variant="light"
                  size="md"
                  radius="xl"
                  mb="md"
                >
                  Member of the Month
                </Badge>
                <Title order={2} className={classes.spotlightName}>{spotlight.name}</Title>
                <Text size="sm" c="dimmed" mb="md">{spotlight.role}</Text>
                <Box className={classes.spotlightQuote} mb="md">
                  <Text style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {spotlight.quote}
                  </Text>
                </Box>
                <Text c="dimmed" lh={1.8}>{spotlight.bio}</Text>
              </Box>
            </Group>
          </Paper>

          <Text ta="center" size="sm" c="dimmed" mt="xl" fs="italic">
            ★ Updated monthly · Know someone who deserves a spotlight?{' '}
            <Text component={Link} to="/contact" style={{ color: '#a8872e', fontWeight: 700, textDecoration: 'none' }}>
              Nominate a member →
            </Text>
          </Text>
        </Container>
      </Box>

      {/* CTA */}
      <Box style={{ background: '#1a2744', padding: '3rem 0' }}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="xl">
            <Box>
              <Title order={3} style={{ color: '#fff', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif' }}>
                Want to be part of something meaningful?
              </Title>
              <Text c="dimmed">Your seat at the table is waiting. Rush with us next semester!</Text>
            </Box>
            <Button
              component={Link}
              to="/join"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
              rightSection={<IconArrowRight size={16} />}
            >
              Apply to Join
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
