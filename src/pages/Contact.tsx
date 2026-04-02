import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  TextInput, Textarea, Select, Button, Alert, Group, Divider, Anchor,
} from '@mantine/core';
import {
  IconMail, IconBrandInstagram, IconBrandFacebook, IconMapPin, IconClock,
  IconCheck, IconArrowRight,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import classes from './Contact.module.css';

export function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Web3Forms integration — get a free access key at https://web3forms.com
  const WEB3FORMS_KEY = '83e0ef36-8ef0-4052-9a87-9af93815b2cc';

  const subjectLabels: Record<string, string> = {
    general:      'General Question',
    recruitment:  'Recruitment',
    service:      'Service Opportunities',
    partnerships: 'Partnerships',
    photo:        'Photo Submission',
    other:        'Other',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;
    setLoading(true);
    const subjectLabel = subjectLabels[subject] ?? subject;
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject: `Nu Chapter Website — ${subjectLabel}`,
          message: `Topic: ${subjectLabel}\n\n${message}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setName(''); setEmail(''); setSubject(null); setMessage('');
      } else {
        throw new Error(data.message);
      }
    } catch {
      alert('Something went wrong. Please try emailing us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Contact Us"
        subtitle="Whether you have a question about membership, a partnership idea, or just want to say hello, our inbox is open."
      />

      <Box py="5rem">
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem">

            {/* FORM */}
            <Paper p="2rem" radius="lg" shadow="xs" style={{ border: '1px solid rgba(26,39,68,0.08)' }}>
              <Title order={2} className={classes.formTitle} mb={4}>Send Us a Message</Title>
              <Text size="sm" c="dimmed" mb="xl">We typically respond within 1–2 business days.</Text>

              {success && (
                <Alert
                  icon={<IconCheck size={16} />}
                  color="green"
                  title="Message sent!"
                  mb="lg"
                  withCloseButton
                  onClose={() => setSuccess(false)}
                >
                  Thank you for reaching out. We'll be in touch within 1–2 business days.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Stack gap="md">
                  <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
                    <TextInput
                      label="Full Name"
                      placeholder="Jane Smith"
                      required
                      value={name}
                      onChange={e => setName(e.currentTarget.value)}
                      classNames={{ input: classes.input, label: classes.label }}
                    />
                    <TextInput
                      label="Email Address"
                      placeholder="jane@university.edu"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.currentTarget.value)}
                      classNames={{ input: classes.input, label: classes.label }}
                    />
                  </SimpleGrid>
                  <Select
                    label="Subject"
                    placeholder="Select a topic…"
                    required
                    value={subject}
                    onChange={setSubject}
                    data={[
                      { value: 'general',      label: 'General Question'      },
                      { value: 'recruitment',  label: 'Recruitment'            },
                      { value: 'service',      label: 'Service Opportunities'  },
                      { value: 'partnerships', label: 'Partnerships'           },
                      { value: 'photo',        label: 'Photo Submission'       },
                      { value: 'other',        label: 'Other'                  },
                    ]}
                    classNames={{ input: classes.input, label: classes.label }}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us what's on your mind…"
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.currentTarget.value)}
                    classNames={{ input: classes.input, label: classes.label }}
                  />
                  <Button
                    type="submit"
                    loading={loading}
                    fullWidth
                    size="md"
                    className={classes.submitBtn}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>

            {/* INFO */}
            <Stack gap="lg" justify="flex-start">
              <Box>
                <Title order={2} className={classes.infoTitle} mb={4}>Get in Touch</Title>
                <Divider color="#c9a84c" maw={60} mb="md" />
                <Text c="dimmed" lh={1.7}>
                  Have a question? Want to volunteer with us, partner on a project, or explore membership?
                  Here's how to reach us directly.
                </Text>
              </Box>

              {[
                {
                  // TODO: Confirm real contact email — Footer uses nu.president@omegaphialpha.org but this says nu.president@omegaphialpha.org. Reconcile.
                  icon: <IconMail size={20} />,
                  label: 'Email',
                  content: <Anchor href="mailto:nu.president@omegaphialpha.org" className={classes.infoLink}>nu.president@omegaphialpha.org</Anchor>,
                },
                {
                  // TODO: Confirm correct Instagram handle (@gt_ophia vs @gt_ophia) and add the real profile URL.
                  icon: <IconBrandInstagram size={20} />,
                  label: 'Instagram',
                  content: <Anchor href="https://www.instagram.com/gt_ophia" target="_blank" rel="noopener noreferrer" className={classes.infoLink}>@gt_ophia</Anchor>,
                },
                {
                  icon: <IconBrandFacebook size={20} />,
                  label: 'Facebook',
                  content: <Anchor href="https://www.facebook.com/omegaphialphagt" target="_blank" rel="noopener noreferrer" className={classes.infoLink}>omegaphialphagt</Anchor>,
                },
                {
                  icon: <IconMapPin size={20} />,
                  label: 'Meeting Location',
                  content: <Text size="sm">Mason 2117</Text>,
                },
                {
                  icon: <IconClock size={20} />,
                  label: 'Chapter Meetings',
                  content: <Text size="sm">Every Tuesday, 7:00 PM</Text>,
                },
              ].map(item => (
                <Paper key={item.label} p="md" radius="md" className={classes.infoCard}>
                  <Group gap="md" align="flex-start" wrap="nowrap">
                    <Box className={classes.infoIcon}>{item.icon}</Box>
                    <Box>
                      <Text size="xs" fw={700} tt="uppercase" style={{ color: '#a8872e', letterSpacing: '0.08em' }} mb={2}>
                        {item.label}
                      </Text>
                      {item.content}
                    </Box>
                  </Group>
                </Paper>
              ))}
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* BOTTOM CTA */}
      <Box style={{ background: '#f8f9fc', borderTop: '1px solid rgba(26,39,68,0.08)', padding: '2.5rem 0' }}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="xl">
            <Box>
              <Title order={3} style={{ color: '#1a2744', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
                Looking to join instead?
              </Title>
              <Text c="dimmed" size="sm">
                Visit our membership page to learn about rush, requirements, and upcoming dates.
              </Text>
            </Box>
            <Button
              component={Link}
              to="/join"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
              rightSection={<IconArrowRight size={14} />}
            >
              Become a Member
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
