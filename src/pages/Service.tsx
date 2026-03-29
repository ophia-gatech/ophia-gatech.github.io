import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  Badge, Button, Group, Divider, ThemeIcon, List,
} from '@mantine/core';
import {
  IconHeart, IconUsers, IconArrowRight, IconLeaf,
  IconBook, IconHeartHandshake, IconCheck,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import classes from './Service.module.css';

const otherWays = [
  {
    icon: <IconLeaf size={22} />,
    title: 'Environmental Stewardship',
    desc: 'Campus clean-ups, tree planting drives, and sustainability initiatives that keep our community green.',
  },
  {
    icon: <IconBook size={22} />,
    title: 'Literacy & Education',
    desc: 'Tutoring programs and literacy workshops that give students of all ages the tools to thrive.',
  },
  {
    icon: <IconUsers size={22} />,
    title: 'Hunger Relief',
    desc: 'Food bank volunteering, supply drives, and community pantry support to fight food insecurity.',
  },
  {
    icon: <IconHeartHandshake size={22} />,
    title: 'Senior Outreach',
    desc: 'Arts workshops, companionship visits, and activity programming for residents at local senior centers.',
  },
];

export function Service() {
  return (
    <Box>
      <PageHero
        eyebrow="Making a Difference"
        title="Service"
        subtitle="Service is not just what we do — it's who we are. From our chapter's founding in 1967, giving back has been at the heart of everything Nu Chapter stands for."
      />

      {/* ── SERVICE MISSION ── */}
      <Box py="5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" style={{ alignItems: 'center' }}>
            <Stack gap="md">
              <Badge variant="light" color="gold" size="sm" radius="xl">Our Commitment</Badge>
              <Title order={2} className={classes.sectionTitle}>
                Service Is Our<br />Foundation
              </Title>
              <Divider color="#c9a84c" maw={60} />
              <Text c="dimmed" lh={1.8}>
                Every semester, Nu Chapter members collectively log hundreds of volunteer hours across
                a wide range of causes — from supporting mental health awareness to strengthening
                families in our local community. We believe that meaningful change starts with showing up.
              </Text>
              <Text c="dimmed" lh={1.8}>
                Our service portfolio is organized around two anchor commitments — a <strong>Permanent
                Service Project</strong> designated at the national level, and a <strong>President's
                Project</strong> chosen each term — supplemented by ongoing chapter-driven initiatives
                throughout the year.
              </Text>
              <Button
                component={Link}
                to="/join"
                variant="outline"
                color="navy"
                size="md"
                mt="sm"
                w="fit-content"
                rightSection={<IconArrowRight size={16} />}
              >
                Serve With Us
              </Button>
            </Stack>
            <SimpleGrid cols={2} spacing="md">
              {[
                { value: '200+', label: 'Service hours per semester' },
                { value: '10+',  label: 'Partner organizations'      },
                { value: '15',   label: 'Min. hours per member'      },
                { value: '1967', label: 'Year Nu Chapter was founded' },
              ].map(s => (
                <Paper key={s.label} className={classes.miniStat} p="lg" radius="lg" shadow="xs">
                  <Text className={classes.miniStatValue}>{s.value}</Text>
                  <Text size="xs" c="dimmed" lh={1.5}>{s.label}</Text>
                </Paper>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── PERMANENT SERVICE PROJECT ── */}
      <Box py="5rem" style={{ background: '#fff' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Badge variant="filled" color="gold" size="sm" radius="xl">Permanent Service Project</Badge>
            <Title order={2} className={classes.sectionTitle} ta="center">Mental Health</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={600} lh={1.7}>
              Designated at the national level of Omega Phi Alpha, Mental Health is our chapter's
              permanent, ongoing service focus — a cause we return to every semester, every year.
            </Text>
          </Stack>

          <Paper className={classes.projectCard} p={0} radius="xl" shadow="sm">
            <Box className={classes.projectAccent} />
            <Box p="2.5rem">
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="3rem" style={{ alignItems: 'flex-start' }}>
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon size={44} radius="xl" className={classes.projectIcon}>
                      <IconHeart size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700} style={{ color: '#1a2744', fontSize: '1.1rem' }}>Why Mental Health?</Text>
                      <Text size="xs" c="dimmed">Our national permanent service project</Text>
                    </Box>
                  </Group>
                  <Text c="dimmed" lh={1.8}>
                    Mental health affects one in five college students, and the stigma surrounding it
                    remains a major barrier to seeking help. As a chapter rooted in service and
                    sisterhood, we are uniquely positioned to foster open conversations, reduce stigma,
                    and connect our community to resources.
                  </Text>
                  <Text c="dimmed" lh={1.8}>
                    Our commitment to mental health is ongoing — not a one-time event. We partner
                    with campus counseling centers, local nonprofits, and national awareness campaigns
                    to make a sustained difference.
                  </Text>
                </Stack>
                <Stack gap="md">
                  <Text fw={700} style={{ color: '#1a2744' }}>What We Do</Text>
                  <List
                    spacing="sm"
                    icon={
                      <ThemeIcon color="gold" size={20} radius="xl" variant="light">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    {[
                      'Host mental health awareness tabling events on campus',
                      'Volunteer with local crisis support organizations',
                      'Participate in national awareness campaigns (e.g., Mental Health Awareness Month)',
                      'Organize fundraisers for mental health nonprofits',
                      'Facilitate open chapter discussions to support member well-being',
                      'Distribute resources and helpline information across campus',
                    ].map(item => (
                      <List.Item key={item}>
                        <Text size="sm" lh={1.6}>{item}</Text>
                      </List.Item>
                    ))}
                  </List>
                </Stack>
              </SimpleGrid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* ── PRESIDENT'S PROJECT ── */}
      <Box py="5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Badge variant="filled" color="navy" size="sm" radius="xl">President's Project</Badge>
            <Title order={2} className={classes.sectionTitle} ta="center">Strengthening Families</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={600} lh={1.7}>
              Each term, Nu Chapter's President selects a focus project that reflects our chapter's
              current values and community needs. This semester, our President's Project is
              dedicated to strengthening families.
            </Text>
          </Stack>

          <Paper className={classes.projectCard} p={0} radius="xl" shadow="sm">
            <Box className={classes.projectAccentNavy} />
            <Box p="2.5rem">
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="3rem" style={{ alignItems: 'flex-start' }}>
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon size={44} radius="xl" className={classes.projectIconNavy}>
                      <IconUsers size={22} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700} style={{ color: '#1a2744', fontSize: '1.1rem' }}>Why Strengthening Families?</Text>
                      <Text size="xs" c="dimmed">This semester's President's Project</Text>
                    </Box>
                  </Group>
                  <Text c="dimmed" lh={1.8}>
                    Families are the foundation of every thriving community. Yet many families in our
                    area face challenges ranging from food insecurity and housing instability to a lack
                    of access to educational and social resources. This project is about showing up for
                    them — consistently and meaningfully.
                  </Text>
                  <Text c="dimmed" lh={1.8}>
                    Through partnerships with local family services organizations, shelters, and community
                    centers, our members engage directly with the families who need support most.
                  </Text>
                </Stack>
                <Stack gap="md">
                  <Text fw={700} style={{ color: '#1a2744' }}>What We Do</Text>
                  <List
                    spacing="sm"
                    icon={
                      <ThemeIcon color="navy" size={20} radius="xl" variant="light">
                        <IconCheck size={12} />
                      </ThemeIcon>
                    }
                  >
                    {[
                      'Volunteer at family shelters and transitional housing programs',
                      'Organize supply drives for essential household and baby items',
                      'Support after-school and tutoring programs for children',
                      'Partner with food banks to address family-level food insecurity',
                      'Assist with family resource fairs and community events',
                      'Fundraise for local organizations focused on family stability',
                    ].map(item => (
                      <List.Item key={item}>
                        <Text size="sm" lh={1.6}>{item}</Text>
                      </List.Item>
                    ))}
                  </List>
                </Stack>
              </SimpleGrid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* ── OTHER WAYS WE SERVE ── */}
      <Box py="5rem" style={{ background: '#fff' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>More Ways We Serve</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={540}>
              Beyond our anchor projects, Nu Chapter members give back through a rotating portfolio
              of community-driven initiatives each semester.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
            {otherWays.map(item => (
              <Paper key={item.title} className={classes.otherCard} p="xl" radius="lg" shadow="xs">
                <Stack gap="sm">
                  <ThemeIcon size={44} radius="xl" className={classes.otherIcon}>
                    {item.icon}
                  </ThemeIcon>
                  <Title order={4} className={classes.otherTitle}>{item.title}</Title>
                  <Text size="sm" c="dimmed" lh={1.6}>{item.desc}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box style={{ background: '#1a2744', padding: '3rem 0' }}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="xl">
            <Box>
              <Title order={3} style={{ color: '#fff', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif' }}>
                Ready to make a real impact?
              </Title>
              <Text c="dimmed">Join Nu Chapter and start logging service hours that matter.</Text>
            </Box>
            <Button
              component={Link}
              to="/join"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
              rightSection={<IconArrowRight size={16} />}
            >
              Get Involved
            </Button>
          </Group>
        </Container>
      </Box>

    </Box>
  );
}
