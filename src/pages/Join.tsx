import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  Badge, Button, Group, Divider, List, ThemeIcon, Table,
} from '@mantine/core';
import {
  IconUsers, IconHeart, IconStar, IconBrandSlack,
  IconMail, IconCheck, IconArrowRight,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import { recruitmentDates } from '../data/recruitment';
import classes from './Join.module.css';

const whyJoin = [
  {
    icon: <IconUsers size={28} />,
    title: 'Service',
    body: 'Make a tangible difference in your community. Our members collectively log hundreds of service hours each semester across a diverse portfolio of causes, from hunger relief to environmental action.',
  },
  {
    icon: <IconHeart size={28} />,
    title: 'Sisterhood',
    body: 'Build lifelong friendships with people who share your values. From bonding retreats to weekly chapter events, Nu Chapter offers a genuine sense of belonging from day one.',
  },
  {
    icon: <IconStar size={28} />,
    title: 'Leadership',
    body: 'Develop skills that last a career. Whether chairing a service project, running for exec board, or representing Nu Chapter at national conferences, every role builds real leadership.',
  },
];

const steps = [
  { n: 1, title: 'Volunteer Event',         desc: 'Attend a volunteering event with OPhiA during rush week. It is a great way to see our chapter in action and get a feel for what we are all about.' },
  { n: 2, title: 'Bid Day',                 desc: 'Receive your formal invitation to join Nu Chapter. Bid Day is one of our most celebrated traditions, a joyful welcome into the sisterhood.' },
  { n: 3, title: 'New Member Education',    desc: 'A structured yet enriching program that deepens your understanding of our history, values, and rituals, and bonds you with your pledge class.' },
  { n: 4, title: 'Rose Night!',             desc: 'The moment you officially become a sister. Rose Night is a cherished ceremony celebrating your journey into full membership in Omega Phi Alpha.' },
];

const requirements = [
  'Minimum cumulative GPA of 2.5 on a 4.0 scale',
  'Currently enrolled as a full-time student at an accredited college or university',
  'Commitment to completing at minimum 15 service hours per semester',
  'Attendance at the majority of chapter meetings and events (75%+)',
  'Payment of chapter dues in a timely manner (financial assistance available)',
  'Genuine passion for service, sisterhood, and scholarship',
  'Agreement to uphold the Omega Phi Alpha National Code of Conduct',
];

function StatusBadge({ status }: { status: 'upcoming' | 'tba' | 'past' }) {
  const map = {
    upcoming: { color: 'gold',  label: 'Upcoming' },
    tba:      { color: 'navy',  label: 'TBA'      },
    past:     { color: 'gray',  label: 'Past'      },
  };
  const { color, label } = map[status];
  return <Badge color={color} variant="light" size="sm" radius="xl">{label}</Badge>;
}

export function Join() {
  return (
    <Box>
      <PageHero
        eyebrow="Recruitment & Rush"
        title="Become a Member"
        subtitle="Take the first step toward a lifetime of service, friendship, and growth."
      />

      {/* WHY JOIN */}
      <Box id="why" py="5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Why Join Nu Chapter?</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={560}>
              We are more than a sorority. We are a community that challenges and champions you every step of the way.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {whyJoin.map(item => (
              <Paper key={item.title} className={classes.featureCard} p="xl" radius="lg" shadow="xs">
                <Stack gap="md">
                  <Box className={classes.featureIcon}>{item.icon}</Box>
                  <Title order={3} className={classes.featureTitle}>{item.title}</Title>
                  <Text c="dimmed" lh={1.7} size="sm">{item.body}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* RUSH + REQUIREMENTS */}
      <Box id="rush" py="5rem">
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem">

            {/* Timeline */}
            <Box>
              <Badge variant="light" color="gold" size="sm" radius="xl" mb="md">The Process</Badge>
              <Title order={2} className={classes.sectionTitle} mb="sm">Rush &amp; Recruitment</Title>
              <Divider color="#c9a84c" maw={60} mb="md" />
              <Text c="dimmed" mb="2rem" lh={1.7}>
                Our recruitment process is designed to be welcoming, transparent, and fun. We want you
                to find the right fit, and we believe Nu Chapter might just be it.
              </Text>
              <Stack gap="xl">
                {steps.map(step => (
                  <Group key={step.n} gap="lg" align="flex-start" wrap="nowrap">
                    <Box className={classes.stepNumber}>{step.n}</Box>
                    <Box>
                      <Text fw={700} mb={4} style={{ color: '#1a2744' }}>{step.title}</Text>
                      <Text c="dimmed" size="sm" lh={1.7}>{step.desc}</Text>
                    </Box>
                  </Group>
                ))}
              </Stack>
            </Box>

            {/* Requirements */}
            <Box>
              <Badge variant="light" color="gold" size="sm" radius="xl" mb="md">Eligibility</Badge>
              <Title order={2} className={classes.sectionTitle} mb="sm">Membership Requirements</Title>
              <Divider color="#c9a84c" maw={60} mb="md" />
              <Text c="dimmed" mb="xl" lh={1.7}>
                We welcome students of all backgrounds who meet the following criteria at the time of pledging:
              </Text>
              <List
                spacing="sm"
                icon={
                  <ThemeIcon color="gold" size={22} radius="xl" variant="light">
                    <IconCheck size={13} />
                  </ThemeIcon>
                }
              >
                {requirements.map(r => (
                  <List.Item key={r}>
                    <Text size="sm" lh={1.6}>{r}</Text>
                  </List.Item>
                ))}
              </List>
              <Paper mt="xl" p="md" radius="md" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Text size="sm" c="dimmed">
                  <strong style={{ color: '#1a2744' }}>Not sure if you qualify?</strong>{' '}
                  Reach out to our VP of Membership. We're happy to answer any questions before Rush Week.
                </Text>
              </Paper>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CONNECT */}
      <Box id="connect" py="5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Stay Connected</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">Get the latest rush updates and connect with our current members.</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" maw={760} mx="auto">
            <Paper className={classes.connectCard} p="xl" radius="lg" shadow="xs">
              <Stack gap="md">
                <Box className={classes.connectIcon}><IconBrandSlack size={28} /></Box>
                <Title order={3} className={classes.featureTitle}>Join our Slack</Title>
                <Text c="dimmed" size="sm" lh={1.7}>
                  Stay connected with current members and prospective rushees. Get real-time updates on
                  info sessions, rush events, and chapter announcements.
                </Text>
                {/* TODO: Replace this button with an actual Slack invite link.
                     Generate a permanent invite URL from your Slack workspace settings and add it as an href. */}
                <Button variant="outline" color="navy" w="fit-content" rightSection={<IconArrowRight size={14} />}>
                  Join Slack
                </Button>
              </Stack>
            </Paper>
            <Paper className={classes.connectCard} p="xl" radius="lg" shadow="xs">
              <Stack gap="md">
                <Box className={classes.connectIcon}><IconMail size={28} /></Box>
                <Title order={3} className={classes.featureTitle}>Reach Out Directly</Title>
                <Text c="dimmed" size="sm" lh={1.7}>
                  Have questions about membership, rush, or eligibility? Our VP of Membership is happy
                  to chat. No question is too small.
                </Text>
                <Button
                  component={Link}
                  to="/contact"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700, width: 'fit-content' }}
                  rightSection={<IconArrowRight size={14} />}
                >
                  Contact Us
                </Button>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>

      {/* RECRUITMENT DATES */}
      <Box py="5rem">
        <Container size="md">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Upcoming Recruitment Dates</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">Mark your calendar. Spaces at rush events fill up quickly!</Text>
          </Stack>
          <Table className={classes.table} striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Date</Table.Th>
                <Table.Th>Event</Table.Th>
                <Table.Th>Location</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {recruitmentDates.map(row => (
                <Table.Tr key={row.event}>
                  <Table.Td>{row.date}</Table.Td>
                  <Table.Td>{row.event}</Table.Td>
                  <Table.Td>{row.location}</Table.Td>
                  <Table.Td><StatusBadge status={row.status} /></Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          {/* TODO: Confirm the correct Instagram handle — Footer uses @gt_ophia but this says @opa.nu. Reconcile. */}
          <Text ta="center" size="sm" c="dimmed" mt="xl">
            Dates subject to change. Follow <strong>@opa.nu</strong> on Instagram or join our Slack for the latest.
          </Text>
          <Group justify="center" mt="lg">
            <Button component={Link} to="/contact" variant="outline" color="navy">
              Get Notified of Updates
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
