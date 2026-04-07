import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Paper, Stack,
  TextInput, Textarea, Select, Button, Alert, Group, Divider, Anchor, Accordion,
} from '@mantine/core';
import {
  IconMail, IconBrandInstagram, IconBrandFacebook,
  IconCheck, IconArrowRight, IconQuestionMark,
} from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import { CopyEmail } from '../components/CopyEmail';
import classes from './Contact.module.css';

const faqs = [
  {
    q: 'What is Omega Phi Alpha?',
    a: 'Omega Phi Alpha is a national co-ed service sorority dedicated to service, sisterhood, and scholarship. Nu Chapter is the Georgia Tech chapter, founded to bring students together around a shared commitment to making a meaningful difference in their communities.',
  },
  {
    q: 'Who can join Nu Chapter?',
    a: 'Any currently enrolled Georgia Tech student who meets our eligibility requirements can rush — undergraduate students with a minimum 2.0 GPA and graduate students with a minimum 3.0 GPA. We welcome students of all majors, backgrounds, and identities.',
  },
  {
    q: 'When does recruitment happen?',
    a: 'Nu Chapter recruits each semester. Rush week typically takes place at the beginning of the fall and spring semesters. Spring 2026 recruitment has closed, but we will be back in Fall 2026. Sign up on our Sisterhood page to be notified when it opens.',
  },
  {
    q: 'How many service hours are required each semester?',
    a: 'Active members are expected to complete a minimum of 20 service hours per semester across Omega Phi Alpha\'s four areas of service: University Community, Community at Large, Members of the Sorority, and Nations of the World.',
  },
  {
    q: 'Are dues required, and is financial assistance available?',
    a: 'Yes, chapter dues are required each semester to support chapter programming, national dues, and events. We understand that finances can be a barrier, and financial assistance is available — please reach out to our vice president confidentially if you need support.',
  },
  {
    q: 'What does the new member process look like?',
    a: 'New members must attend a service event during rush week to receive a bid. After Bid Day, new members go through a New Member Education program that covers the history, values, and traditions of Omega Phi Alpha. The process concludes with Rose Night, a ceremony in which new members are officially welcomed as full sisters of the chapter.',
  },
  {
    q: 'How is Omega Phi Alpha different from a panhellenic sorority?',
    a: 'Omega Phi Alpha is a service sorority, meaning our primary focus is community impact rather than social programming. While we do hold sisterhood events and build close friendships, every member joins with a commitment to service as the foundation of their membership.',
  },
  {
    q: 'What does a typical chapter meeting look like?',
    a: 'Chapter meetings are held every week. They typically cover upcoming service events, chapter announcements, committee updates, and sisterhood business. Meetings are a great way to stay connected with the chapter and know what\'s coming up each week.',
  },
  {
    q: 'What kinds of organizations does Nu Chapter partner with?',
    a: 'We partner with a wide range of local nonprofits, campus organizations, and community groups — from food banks and literacy programs to environmental initiatives and youth mentorship organizations. Our Outreach Chair is always working to bring in new partnerships each semester.',
  },
  {
    q: 'Do I need prior volunteer experience to join?',
    a: 'Not at all! We welcome students at any stage of their service journey. What matters most is a genuine passion for giving back and a willingness to show up. We will help you find opportunities that fit your schedule, interests, and goals.',
  },
];

export function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchParams]        = useSearchParams();

  // Pre-fill subject from URL param (e.g. /contact?subject=partnerships) and scroll to form
  useEffect(() => {
    const s = searchParams.get('subject');
    if (s) {
      setSubject(s);
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [searchParams]);

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

      <Box py="3rem">
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="3rem">

            {/* FORM */}
            <Paper id="contact-form" p="2rem" radius="lg" shadow="xs" style={{ border: '1px solid rgba(26,39,68,0.08)' }}>
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
            <Stack gap="xl" justify="flex-start">
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
                  icon: <IconMail size={20} />,
                  label: 'Email',
                  content: <CopyEmail email="nu.president@omegaphialpha.org" className={classes.infoLink} />,
                },
                {
                  icon: <IconBrandInstagram size={20} />,
                  label: 'Instagram',
                  content: <Anchor href="https://www.instagram.com/gt_ophia" target="_blank" rel="noopener noreferrer" className={classes.infoLink}>@gt_ophia</Anchor>,
                },
                {
                  icon: <IconBrandFacebook size={20} />,
                  label: 'Facebook',
                  content: <Anchor href="https://www.facebook.com/omegaphialphagt" target="_blank" rel="noopener noreferrer" className={classes.infoLink}>omegaphialphagt</Anchor>,
                },
              ].map(item => (
                <Paper key={item.label} p="lg" radius="md" className={classes.infoCard}>
                  <Group gap="md" align="center" wrap="nowrap">
                    <Box className={classes.infoIcon}>{item.icon}</Box>
                    <Box>
                      <Text size="xs" fw={700} tt="uppercase" style={{ color: '#a8872e', letterSpacing: '0.08em' }} mb={4}>
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

      {/* FAQ */}
      <Box id="faq" py="2.5rem" style={{ background: '#f8f9fc' }}>
        <Container size="xl">
          <Stack align="center" mb="1.5rem" gap="sm">
            <Box className={classes.faqIconWrap}>
              <IconQuestionMark size={24} />
            </Box>
            <Title order={2} className={classes.infoTitle}>Frequently Asked Questions</Title>
            <Divider color="#c9a84c" maw={80} />
            <Text c="dimmed" ta="center">
              Can't find what you're looking for? Send us a message above and we'll get back to you.
            </Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
            {(() => {
              const mid = Math.ceil(faqs.length / 2);
              const cols = [faqs.slice(0, mid), faqs.slice(mid)];
              const offsets = [0, mid];
              return cols.map((col, ci) => (
                <Accordion
                  key={ci}
                  variant="separated"
                  radius="lg"
                  value={openFaq}
                  onChange={setOpenFaq}
                  classNames={{ item: classes.faqItem, control: classes.faqControl, label: classes.faqLabel }}
                >
                  {col.map((faq, i) => (
                    <Accordion.Item key={i} value={String(offsets[ci] + i)}>
                      <Accordion.Control>{faq.q}</Accordion.Control>
                      <Accordion.Panel>
                        <Text size="sm" c="dimmed" lh={1.8}>{faq.a}</Text>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              ));
            })()}
          </SimpleGrid>
        </Container>
      </Box>

      {/* BOTTOM CTA */}
      <Box style={{ background: '#1a2744', padding: '2.5rem 0' }}>
        <Container size="xl">
          <Group justify="space-between" wrap="wrap" gap="xl">
            <Box>
              <Title order={3} style={{ color: '#fff', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
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
