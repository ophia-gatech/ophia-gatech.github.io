import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  Badge, Button, Group, Divider, ThemeIcon, List, ActionIcon,
} from '@mantine/core';
import {
  IconHeart, IconUsers, IconArrowRight, IconSchool,
  IconWorld, IconCheck, IconChevronLeft, IconChevronRight,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import classes from './Service.module.css';

const otherWays = [
  {
    icon: <IconSchool size={22} />,
    title: 'University Community',
    desc: 'We serve the students, faculty, and staff around us through campus initiatives, resource drives, awareness events, and programs that strengthen life on campus.',
  },
  {
    icon: <IconUsers size={22} />,
    title: 'Community at Large',
    desc: 'We reach beyond campus to support our broader community through food banks, family services, neighborhood clean-ups, and local nonprofit partnerships.',
  },
  {
    icon: <IconHeart size={22} />,
    title: 'Members of the Sorority',
    desc: 'We take care of each other. Our members are supported through wellness programming, mutual encouragement, and a chapter culture where everyone can thrive.',
  },
  {
    icon: <IconWorld size={22} />,
    title: 'Nations of the World',
    desc: 'We think globally and act locally. Our members support international causes, raise awareness of global issues, and fundraise for organizations working across borders.',
  },
];

const servicePhotos = [
  { id: 'sp1', domain: 'Community at Large',      badgeColor: 'teal',   image: '/images/service/community at large.jpg'  },
  { id: 'sp2', domain: 'Community at Large',      badgeColor: 'teal',   image: '/images/service/community at large2.jpg' },
  { id: 'sp3', domain: 'Members of the Sorority', badgeColor: 'gold',   image: '/images/service/mem of sorority.jpg'     },
  { id: 'sp4', domain: 'Nations of the World',    badgeColor: 'violet', image: '/images/service/nations of the world.jpg'},
];

function ServiceSlideshow() {
  const [index, setIndex]   = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef         = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance every 3.5 s unless the user has touched the arrows
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % servicePhotos.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const go = (dir: number) => {
    setPaused(true);
    setIndex(i => (i + dir + servicePhotos.length) % servicePhotos.length);
  };

  const photo = servicePhotos[index];

  return (
    <Box className={classes.slideshowWrap}>
      {/* ── Main card ── */}
      <Box className={classes.slideshowCard} style={{ background: '#1a2744', overflow: 'hidden' }}>
        <img
          src={photo.image}
          alt={photo.domain}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Domain badge */}
        <Badge
          className={classes.photoBadge}
          color={photo.badgeColor}
          variant="filled"
          size="xs"
          radius="sm"
        >
          {photo.domain}
        </Badge>

        {/* Left arrow */}
        <ActionIcon
          className={`${classes.slideshowArrow} ${classes.slideshowArrowLeft}`}
          size={44}
          radius="xl"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          <IconChevronLeft size={22} />
        </ActionIcon>

        {/* Right arrow */}
        <ActionIcon
          className={`${classes.slideshowArrow} ${classes.slideshowArrowRight}`}
          size={44}
          radius="xl"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          <IconChevronRight size={22} />
        </ActionIcon>
      </Box>

      {/* ── Dot indicators ── */}
      <Group justify="center" mt="lg" gap={8}>
        {servicePhotos.map((_, i) => (
          <Box
            key={i}
            className={`${classes.slideshowDot} ${i === index ? classes.slideshowDotActive : classes.slideshowDotInactive}`}
            onClick={() => { setPaused(true); setIndex(i); }}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Group>

      {/* Auto-play status hint */}
      {paused && (
        <Text ta="center" size="xs" c="dimmed" mt="xs" fs="italic">
          Auto-play paused.{' '}
          <Text
            component="span"
            style={{ color: '#a8872e', cursor: 'pointer', fontWeight: 600 }}
            onClick={() => setPaused(false)}
          >
            Resume
          </Text>
        </Text>
      )}
    </Box>
  );
}

export function Service() {
  return (
    <Box>
      <PageHero
        eyebrow="Making a Difference"
        title="Service"
        subtitle="Service is not just what we do. It's who we are. We were founded in 1988, and giving back has been at the heart of everything Nu Chapter stands for ever since."
      />

      {/* ── SERVICE MISSION ── */}
      <Box py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" style={{ alignItems: 'center' }}>
            <Stack gap="md">
              <Badge variant="light" color="gold" size="sm" radius="xl">Our Commitment</Badge>
              <Title order={2} className={classes.sectionTitle}>
                Service Is Our<br />Foundation
              </Title>
              <Divider color="#c9a84c" maw={60} />
              <Text c="dimmed" lh={1.8}>
                Every semester, the members of Omega Phi Alpha's Nu Chapter collectively log hundreds of volunteer hours across
                a wide range of causes, from supporting mental health awareness to strengthening
                families in our local community. We believe that meaningful change starts with showing up.
              </Text>
              <Text c="dimmed" lh={1.8}>
                Our service reaches four areas: the <strong>university community</strong>, the{' '}
                <strong>community at large</strong>, the <strong>members of the sorority</strong>, and
                the <strong>nations of the world</strong>, ensuring our impact is felt close to home
                and far beyond it.
              </Text>
              <Button
                component={Link}
                to="/join#rush"
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
                { value: '500+', label: 'Service hours per semester'        },
                { value: '45+',  label: 'Partner organizations'             },
                { value: '20',   label: 'Min. hours per member'             },
                { value: '35+',  label: 'Members contributing to service'   },
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
      <Box py="3rem" style={{ background: '#fff' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Badge variant="filled" color="gold" size="sm" radius="xl" mb="lg">Permanent Service Project</Badge>
            <Title order={2} className={classes.sectionTitle} ta="center">Mental Health</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={600} lh={1.7}>
              Designated at the national level of Omega Phi Alpha, Mental Health is our chapter's
              permanent, ongoing service focus, one we return to every semester, every year.
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
                    Our commitment to mental health is ongoing, not a one-time event. We partner
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
      <Box py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Badge variant="filled" color="navy" size="sm" radius="xl" mb="lg">President's Project</Badge>
            <Title order={2} className={classes.sectionTitle} ta="center">Strengthening Families</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={600} lh={1.7}>
              Every two years, the national President of Omega Phi Alpha selects a focus project at the national convention, reflecting
              the organization's current values and priorities. This cycle, the President's Project is
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
                    them, consistently and meaningfully.
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
                      'Connect families with mental health and wellness resources in the community',
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

      {/* ── MORE WAYS WE SERVE ── */}
      <Box py="3rem" style={{ background: '#fff' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>More Ways We Serve</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={540}>
              Our service reaches every level, from the people right beside us to communities across the globe.
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

      {/* ── SERVICE SLIDESHOW ── */}
      <Box py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Service in Action</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={540}>
              A look at the work our members do across all four areas of service.
            </Text>
          </Stack>
          <ServiceSlideshow />
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
              <Text c="dimmed">Next semester, those service hours could be yours. Come rush with us!</Text>
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
