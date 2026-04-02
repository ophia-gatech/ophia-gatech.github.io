import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, Button, Group, SimpleGrid,
  Stack, Paper, Divider, Badge,
} from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { IconArrowRight, IconHeart, IconUsers, IconStar, IconQuote } from '@tabler/icons-react';
import classes from './Home.module.css';

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (entry?.isIntersecting && !hasRun.current) {
      hasRun.current = true;
      const duration = 1800;
      const start = performance.now();
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(easeOut(progress) * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [entry?.isIntersecting, target]);

  return (
    <Paper ref={ref} className={classes.statCard} p="xl" radius="md">
      <Text className={classes.statNumber}>{count.toLocaleString()}{suffix}</Text>
      <Text className={classes.statLabel} size="sm">{label}</Text>
    </Paper>
  );
}

const pillars = [
  {
    icon: <IconHeart size={28} />,
    title: 'Service',
    description:
      'We believe in the power of community action. Our members log hundreds of volunteer hours each semester, from food banks and literacy programs to environmental clean-ups and youth mentorship.',
    link: '/service',
    linkLabel: 'See Our Work',
  },
  {
    icon: <IconUsers size={28} />,
    title: 'Sisterhood',
    description:
      'More than a sorority. A family. From bid day to graduation, Nu Chapter is a community that lifts you up, challenges you to grow, and celebrates every milestone alongside you.',
    link: '/join',
    linkLabel: 'Become a Sister',
  },
  {
    icon: <IconStar size={28} />,
    title: 'Leadership',
    description:
      'We develop the leaders of tomorrow. Whether chairing a service project, running for exec board, or representing Nu Chapter at national conferences, every member has a stage.',
    link: '/team',
    linkLabel: 'Meet Our Leaders',
  },
];

// TODO: Replace placeholder names, roles, and quotes with real member testimonials
const testimonials = [
  {
    quote:
      '"Joining Nu Chapter was the best decision I made in college. The friendships, the service work, the growth. I came in looking for community and found a second family."',
    name: 'Member Name',
    role: 'Active Member · Junior',
  },
  {
    quote:
      '"We have a bunch of service projects that are all fun to do, and the people here are all super nice."',
    name: 'Andrea Kim',
    role: 'Active Member · Sophomore',
  },
  {
    quote:
      '"The leadership experience alone was worth it. Running for exec board developed skills I use every day in my internship and classes. OPA prepared me for the real world."',
    name: 'Anika Tapshalkar',
    role: 'Outreach Chair · Freshman',
  },
];

export function Home() {
  return (
    <Box>

      {/* ── HERO ── */}
      <Box className={classes.hero}>
        <Container size="lg" className={classes.heroContent}>
          <Badge variant="outline" color="gold" size="lg" radius="xl" mb="lg" className={classes.eyebrow}>
            Nu Chapter · Founded 1967
          </Badge>
          <Title className={classes.heroTitle}>
            Omega Phi Alpha
            <br />
            <span className={classes.heroHighlight}>Nu Chapter</span>
          </Title>
          <Text className={classes.heroTagline} mt="md" mb="xl">
            Service &nbsp;·&nbsp; Sisterhood &nbsp;·&nbsp; Leadership
          </Text>
          <Group gap="md" wrap="wrap">
            <Button
              component={Link}
              to="/join"
              size="lg"
              className={classes.heroCta}
              rightSection={<IconArrowRight size={18} />}
            >
              Join Us
            </Button>
            <Button
              component="a"
              href="#about"
              size="lg"
              variant="outline"
              className={classes.heroOutline}
            >
              Learn More
            </Button>
          </Group>
        </Container>
        <Box className={classes.scrollIndicator} aria-hidden="true">
          <Text size="xs" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </Text>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7l6 6 6-6" />
          </svg>
        </Box>
      </Box>

      {/* ── ABOUT ── */}
      <Box id="about" className={classes.section} style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" style={{ alignItems: 'center' }}>
            <Stack gap="md">
              <Title order={2} className={classes.sectionTitle}>
                A Legacy of Service,<br />Sisterhood &amp; Leadership
              </Title>
              <Divider color="#c9a84c" maw={60} />
              <Text c="dimmed" lh={1.8}>
                Omega Phi Alpha is a national service sorority rooted in the belief
                that meaningful change begins at the local level. Since the Nu chapter's founding, we have
                worked hand-in-hand with our campus community and beyond, logging thousands of volunteer
                hours in support of causes ranging from food security and environmental stewardship to
                literacy and youth mentorship. Our chapter is built on three pillars:{' '}
                <strong>Service</strong>, <strong>Sisterhood</strong>, and <strong>Leadership</strong>.
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
                Become a Member
              </Button>
            </Stack>
            {/* TODO: Replace this placeholder with a real chapter photo (group shot, service event, etc.)
                 Add the image to /public/images/ and render it with an <img> or Mantine <Image> component. */}
            <Paper className={classes.aboutPlaceholder} radius="lg" p="xl">
              <Stack align="center" justify="center" h="100%" gap="sm">
                <Text style={{ fontSize: '4rem', opacity: 0.3 }}>✦</Text>
                <Badge color="gold" size="lg" radius="xl">Co-Ed Service Sorority</Badge>
                <Text size="sm" c="dimmed">Since 1967</Text>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── THREE PILLARS ── */}
      <Box style={{ background: '#fff', padding: '2.5rem 0 5rem' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>What We Stand For</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center" maw={540}>
              Everything we do is rooted in three core values that have defined Omega Phi Alpha since 1967.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {pillars.map(p => (
              <Paper key={p.title} className={classes.pillarCard} p="xl" radius="lg" shadow="xs">
                <Stack gap="md">
                  <Box className={classes.pillarIcon}>{p.icon}</Box>
                  <Title order={3} className={classes.pillarTitle}>{p.title}</Title>
                  <Text c="dimmed" lh={1.7} size="sm" style={{ flex: 1 }}>{p.description}</Text>
                  <Button
                    component={Link}
                    to={p.link}
                    variant="subtle"
                    size="sm"
                    w="fit-content"
                    rightSection={<IconArrowRight size={13} />}
                    px={0}
                    style={{ color: '#a8872e' }}
                  >
                    {p.linkLabel}
                  </Button>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── MISSION ── */}
      <Box className={classes.mission}>
        <Container size="md">
          <Box className={classes.missionCard}>
            <Text className={classes.missionQuote}>
              "The purpose and goals of this sorority shall be to assemble its members in the fellowship
              of Omega Phi Alpha, to develop friendship, leadership and cooperation by promoting service
              to the university community, to the community at-large, to the members of the sorority,
              and to the nations of the world."
            </Text>
            <Text className={classes.missionSource}>— Official Mission of Omega Phi Alpha</Text>
          </Box>
        </Container>
      </Box>

      {/* ── STATS ── */}
      <Box className={classes.section} style={{ background: '#1a2744' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} style={{ color: '#fff', fontFamily: 'Playfair Display, serif' }}>
              Our Impact by the Numbers
            </Title>
            <Divider color="rgba(201,168,76,0.4)" maw={80} />
            <Text c="dimmed" ta="center">Together, we are more than a chapter. We are a movement.</Text>
          </Stack>
          {/* TODO: Verify these numbers are still accurate — confirm Nu Chapter's current member count
               and service hours from chapter records or the national organization's latest report. */}
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg">
            <StatCard target={50000} suffix=""  label="Service Hours Logged Nationally Per Year" />
            <StatCard target={30}   suffix="+" label="Active Chapters Nationwide" />
            <StatCard target={25}   suffix="+" label="Nu Chapter Active Members" />
            <StatCard target={60}   suffix="+" label="Years of Service (Founded 1967)" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── TESTIMONIALS ── */}
      <Box className={classes.section} style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="3rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Hear From Our Sisters</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">
              Real stories from the women who make Nu Chapter what it is.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {testimonials.map((t, i) => (
              <Paper key={i} className={classes.testimonialCard} p="xl" radius="lg" shadow="xs">
                <Stack gap="md" h="100%">
                  <IconQuote size={28} style={{ color: '#c9a84c', opacity: 0.7, flexShrink: 0 }} />
                  <Text className={classes.testimonialQuote} style={{ flex: 1 }}>{t.quote}</Text>
                  <Box>
                    <Text className={classes.testimonialName}>{t.name}</Text>
                    <Text size="xs" style={{ color: '#a8872e' }}>{t.role}</Text>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ── CTA STRIP ── */}
      <Box style={{ background: 'linear-gradient(90deg, #a8872e, #c9a84c, #a8872e)', padding: '2.5rem 0' }}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="xl">
            <Box>
              <Title order={3} style={{ color: '#1a2744', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif' }}>
                Ready to make a difference?
              </Title>
              {/* TODO: Update this text to reflect whether applications are actually open or closed. */}
              <Text style={{ color: 'rgba(26,39,68,0.75)' }}>
                Rush week is coming up next semester. We cannot wait to meet you!
              </Text>
            </Box>
            <Button
              component={Link}
              to="/join"
              style={{ background: '#1a2744', color: '#c9a84c', fontWeight: 700 }}
              size="md"
            >
              Apply Now →
            </Button>
          </Group>
        </Container>
      </Box>

    </Box>
  );
}
