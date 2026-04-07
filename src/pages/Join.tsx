import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  Badge, Button, Group, Divider, ThemeIcon, ActionIcon, TextInput,
} from '@mantine/core';
import {
  IconUsers, IconHeart, IconStar,
  IconBrandInstagram, IconBrandFacebook,
  IconMail, IconCheck, IconArrowRight,
  IconChevronLeft, IconChevronRight, IconBell,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import { CopyEmail } from '../components/CopyEmail';
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
  { n: 1, title: 'Volunteer Event',         desc: 'Join us for a hands-on service event during rush week and experience Nu Chapter firsthand. This is your opportunity to see our values in action and connect with the women who bring them to life.' },
  { n: 2, title: 'Bid Day',                 desc: 'Receive your formal invitation to become a member of Nu Chapter. Bid Day is one of our most cherished traditions and marks the beginning of your journey into the sisterhood.' },
  { n: 3, title: 'New Member Education',    desc: 'Deepen your understanding of Omega Phi Alpha through a meaningful program rooted in our history, values, and rituals. This is where lasting friendships and lasting commitments are formed.' },
  { n: 4, title: 'Rose Night!',             desc: 'The culmination of your new member journey. Rose Night is a beautiful, time-honored ceremony in which you are officially welcomed as a full sister of Omega Phi Alpha.' },
];

const requirements = [
  'A minimum cumulative GPA of 2.0 (undergraduate) or 3.0 (graduate) at the time of pledging',
  'Current enrollment as a student at Georgia Tech',
  'Attendance at all chapter meetings, except in cases of an approved excuse',
  'Payment of chapter dues in a timely manner — financial assistance is available for those who need it',
  'A genuine passion for service, sisterhood, and scholarship',
  'Agreement to uphold the Omega Phi Alpha National Code of Conduct',
];

const joinPhotos = [
  { id: 'jp1', label: 'Pinning Ceremony',   image: '/images/sisterhood/pinning.jpg',           objectPosition: 'center' },
  { id: 'jp2', label: 'Formal',             image: '/images/sisterhood/formal.jpg',             objectPosition: 'center 65%' },
  { id: 'jp3', label: 'Sisterhood Retreat', image: '/images/sisterhood/sisterhood retreat.jpg', objectPosition: 'center' },
  { id: 'jp4', label: 'Pumpkin Patch',      image: '/images/sisterhood/Pumpkin patch.jpg',      objectPosition: 'center' },
  { id: 'jp5', label: 'Boo at the Zoo',     image: '/images/sisterhood/boo at the zoo.jpg',     objectPosition: 'center' },
  { id: 'jp6', label: 'Summit at Auburn',   image: '/images/sisterhood/summit at auburn.jpg',   objectPosition: 'center 40%' },
];

function JoinSlideshow() {
  const [index, setIndex]   = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef         = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % joinPhotos.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const go = (dir: number) => {
    setPaused(true);
    setIndex(i => (i + dir + joinPhotos.length) % joinPhotos.length);
  };

  const photo = joinPhotos[index];

  return (
    <Box className={classes.slideshowWrap}>
      <Box className={classes.slideshowCard} style={{ background: '#1a2744', overflow: 'hidden' }}>
        <img
          src={photo.image}
          alt={photo.label}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.objectPosition }}
        />
        <Box className={classes.photoOverlay}>
          <Text size="sm" fw={600} c="white" lh={1.5}>{photo.label}</Text>
        </Box>
        <ActionIcon
          className={`${classes.slideshowArrow} ${classes.slideshowArrowLeft}`}
          size={44} radius="xl"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          <IconChevronLeft size={22} />
        </ActionIcon>
        <ActionIcon
          className={`${classes.slideshowArrow} ${classes.slideshowArrowRight}`}
          size={44} radius="xl"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          <IconChevronRight size={22} />
        </ActionIcon>
      </Box>
      <Group justify="center" mt="lg" gap={8}>
        {joinPhotos.map((_, i) => (
          <Box
            key={i}
            className={`${classes.slideshowDot} ${i === index ? classes.slideshowDotActive : classes.slideshowDotInactive}`}
            onClick={() => { setPaused(true); setIndex(i); }}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Group>
      {paused && (
        <Text ta="center" size="xs" c="dimmed" mt="sm">
          Auto-play paused —{' '}
          <Text component="span" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setPaused(false)}>
            resume
          </Text>
        </Text>
      )}
    </Box>
  );
}

function NotifyForm() {
  const [email,  setEmail]  = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': import.meta.env.VITE_BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, listIds: [3], updateEnabled: true }),
      });
      // 201 = created, 204 = already subscribed — both succeed
      if (res.status === 201 || res.status === 204) {
        // Send confirmation email to the subscriber
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': import.meta.env.VITE_BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: { name: 'Omega Phi Alpha Nu Chapter', email: 'anika.taps@gmail.com' },
            to: [{ email }],
            subject: "You're on the list — Nu Chapter Rush Notifications",
            htmlContent: `
              <html><body style="font-family:sans-serif;color:#1a2744;max-width:560px;margin:auto;padding:2rem">
                <p>Hi there!</p>
                <p>You've been added to our mailing list. We'll send you a message the moment rush for the next semester opens so you don't miss a thing.</p>
                <p>In the meantime, feel free to explore <a href="https://ophia-gatech.github.io/join" style="color:#a8872e;font-weight:bold">our website</a> to learn more about what to expect during recruitment.</p>
                <p>We cannot wait to meet you!</p>
                <p>— Omega Phi Alpha Nu Chapter</p>
              </body></html>
            `,
          }),
        });
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Text c="dimmed" ta="center" size="sm">
        ✓ You're on the list! We'll reach out when Fall 2026 rush opens.
      </Text>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Group gap="sm" justify="center" wrap="nowrap">
        <TextInput
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
          required
          style={{ minWidth: 240 }}
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          loading={status === 'loading'}
          leftSection={<IconBell size={15} />}
          style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
        >
          Notify Me
        </Button>
      </Group>
      {status === 'error' && (
        <Text c="red" size="xs" ta="center" mt="xs">Something went wrong — please try again.</Text>
      )}
    </form>
  );
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
      <Box id="why" py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="2rem" gap="sm">
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
      <Box id="rush" py="3rem">
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
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Badge variant="light" color="gold" size="sm" radius="xl" mb="md">Eligibility</Badge>
              <Title order={2} className={classes.sectionTitle} mb="sm">Membership Requirements</Title>
              <Divider color="#c9a84c" maw={60} mb="md" />
              <Text c="dimmed" mb="xl" lh={1.7}>
                We welcome students of all backgrounds who meet the following criteria at the time of pledging:
              </Text>
              <Box style={{ flex: 1, display: 'grid', gridTemplateRows: `repeat(${requirements.length}, 1fr)` }}>
                {requirements.map(r => (
                  <Group key={r} gap="sm" align="center" wrap="nowrap">
                    <ThemeIcon color="gold" size={22} radius="xl" variant="light" style={{ flexShrink: 0 }}>
                      <IconCheck size={13} />
                    </ThemeIcon>
                    <Text size="sm" lh={1.6}>{r}</Text>
                  </Group>
                ))}
              </Box>
              <Paper mt="xl" p="md" radius="md" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <Text size="sm" c="dimmed">
                  <strong style={{ color: '#1a2744' }}>Not sure if you qualify?</strong>{' '}
                  Reach out to our Membership Directors at{' '}
                  <CopyEmail email="nu.membership@omegaphialpha.org" color="#a8872e" />{' '}
                  — we're happy to answer any questions before Rush Week.
                </Text>
              </Paper>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CONNECT */}
      <Box id="connect" py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="2rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Stay Connected</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">Get the latest rush updates and connect with our current members.</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <Paper className={classes.connectCard} p="xl" radius="lg" shadow="xs">
              <Stack gap="md" justify="space-between" h="100%">
                <Box className={classes.connectIcon}><IconBrandInstagram size={28} /></Box>
                <Title order={3} className={classes.featureTitle}>Follow Us on Instagram</Title>
                <Text c="dimmed" size="sm" lh={1.7} style={{ flex: 1 }}>
                  Stay up to date on rush events, chapter announcements, and sisterhood moments — our Instagram is the best place to see Nu Chapter in action.
                </Text>
                <Button
                  component="a"
                  href="https://www.instagram.com/gt_ophia"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700, width: 'fit-content' }}
                  rightSection={<IconArrowRight size={14} />}
                >
                  @gt_ophia
                </Button>
              </Stack>
            </Paper>
            <Paper className={classes.connectCard} p="xl" radius="lg" shadow="xs">
              <Stack gap="md" justify="space-between" h="100%">
                <Box className={classes.connectIcon}><IconBrandFacebook size={28} /></Box>
                <Title order={3} className={classes.featureTitle}>Find Us on Facebook</Title>
                <Text c="dimmed" size="sm" lh={1.7} style={{ flex: 1 }}>
                  Follow our Facebook page for event updates, chapter highlights, and everything happening with Nu Chapter at Georgia Tech.
                </Text>
                <Button
                  component="a"
                  href="https://www.facebook.com/omegaphialphagt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700, width: 'fit-content' }}
                  rightSection={<IconArrowRight size={14} />}
                >
                  omegaphialphagt
                </Button>
              </Stack>
            </Paper>
            <Paper className={classes.connectCard} p="xl" radius="lg" shadow="xs">
              <Stack gap="md" justify="space-between" h="100%">
                <Box className={classes.connectIcon}><IconMail size={28} /></Box>
                <Title order={3} className={classes.featureTitle}>Reach Out Directly</Title>
                <Text c="dimmed" size="sm" lh={1.7} style={{ flex: 1 }}>
                  Have questions about membership, rush, or eligibility? Our Membership Directors are happy to chat — no question is too small.
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

      {/* RECRUITMENT CLOSED NOTICE */}
      <Box py="2rem">
        <Container size="md">
          <Paper p="2rem" radius="lg" shadow="xs" ta="center" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(26,39,68,0.04))', border: '1px solid rgba(201,168,76,0.25)' }}>
            <Badge variant="light" color="gold" size="sm" radius="xl" mb="sm">Recruitment</Badge>
            <Title order={3} className={classes.sectionTitle} mb="xs">Spring 2026 Rush Has Closed</Title>
            <Text c="dimmed" maw={480} mx="auto" lh={1.8} mb="md">
              Thank you to everyone who rushed with us this semester! We'll be back in Fall 2026 — we cannot wait to see you there.
            </Text>
            <Text c="dimmed" size="sm" mb="md">Enter your email and we'll let you know the moment Fall 2026 rush opens.</Text>
            <NotifyForm />
          </Paper>
        </Container>
      </Box>

      {/* PHOTO SLIDESHOW */}
      <Box py="3rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="2rem" gap="sm">
            <Title order={2} className={classes.sectionTitle}>Life in Nu Chapter</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">A glimpse into the moments that make sisterhood worth it.</Text>
          </Stack>
          <JoinSlideshow />
        </Container>
      </Box>
    </Box>
  );
}
