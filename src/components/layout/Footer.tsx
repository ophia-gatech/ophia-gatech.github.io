import { Link } from 'react-router-dom';
import { Box, Container, Group, Text, Stack, SimpleGrid, Anchor, Divider, Tooltip, ActionIcon } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconBrandInstagram, IconMail, IconMapPin, IconClock, IconBrandFacebook, IconCheck } from '@tabler/icons-react';
import classes from './Footer.module.css';

const EMAIL = 'nu.president@omegaphialpha.org';

export function Footer() {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xl">

          {/* Brand */}
          <Stack gap="xs">
            <Group gap="sm">
              <Box className={classes.logoMark}>ΩΦΑ</Box>
              <Box>
                <Text className={classes.brandName}>Omega Phi Alpha</Text>
                <Text className={classes.brandSub}>Nu Chapter</Text>
              </Box>
            </Group>
            <Text size="sm" c="dimmed" mt="xs" lh={1.6}>
              Service. Sisterhood. Leadership.<br />
              Serving our campus and community since 1967.
            </Text>
            <Group gap="xs" mt="xs">
              <Anchor href="https://www.instagram.com/gt_ophia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={classes.socialLink} aria-label="Instagram"><IconBrandInstagram size={18} /></Anchor>
              <Tooltip label={clipboard.copied ? 'Copied!' : 'Copy email'} withArrow>
                <ActionIcon
                  onClick={() => clipboard.copy(EMAIL)}
                  className={classes.socialLink}
                  aria-label="Copy email address"
                  variant="transparent"
                  size="sm"
                >
                  {clipboard.copied ? <IconCheck size={18} /> : <IconMail size={18} />}
                </ActionIcon>
              </Tooltip>
              <Anchor href="https://www.facebook.com/omegaphialphagt" target="_blank" rel="noopener noreferrer" className={classes.socialLink} aria-label="Facebook"><IconBrandFacebook size={18} /></Anchor>
            </Group>
          </Stack>

          {/* Navigate */}
          <Stack gap={6}>
            <Text className={classes.colTitle}>Navigate</Text>
            {[
              { to: '/',        label: 'Home'       },
              { to: '/service', label: 'Service'    },
              { to: '/join',    label: 'Sisterhood' },
              { to: '/team',    label: 'Leadership' },
              { to: '/contact', label: 'Contact'    },
            ].map(l => (
              <Anchor key={l.to} component={Link} to={l.to} className={classes.footerLink}>{l.label}</Anchor>
            ))}
          </Stack>

          {/* Get Involved */}
          <Stack gap={6}>
            <Text className={classes.colTitle}>Get Involved</Text>
            <Anchor component={Link} to="/service" className={classes.footerLink}>Learn About Our Service</Anchor>
            <Anchor component={Link} to="/join#rush" className={classes.footerLink}>Rush &amp; Recruitment</Anchor>
            <Anchor component={Link} to="/join#why" className={classes.footerLink}>Why Join?</Anchor>
            <Anchor component={Link} to="/contact#faq" className={classes.footerLink}>FAQ</Anchor>
            <Anchor component={Link} to="/contact" className={classes.footerLink}>Partner With Us</Anchor>
          </Stack>

          {/* Contact */}
          <Stack gap={8}>
            <Text className={classes.colTitle}>Contact</Text>
            <Group gap={6} align="flex-start">
              <IconMail size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Anchor href="mailto:nu.president@omegaphialpha.org" className={classes.footerLink} size="sm">nu.president@omegaphialpha.org</Anchor>
            </Group>
            <Group gap={6} align="flex-start">
              <IconBrandInstagram size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Anchor href="https://www.instagram.com/gt_ophia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={classes.footerLink} size="sm">@gt_ophia</Anchor>
            </Group>
            <Group gap={6} align="flex-start">
              <IconBrandFacebook size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Anchor href="https://www.facebook.com/omegaphialphagt" target="_blank" rel="noopener noreferrer" className={classes.footerLink} size="sm">omegaphialphagt</Anchor>
            </Group>
            <Group gap={6} align="flex-start">
              <IconMapPin size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Text size="sm" c="dimmed">Mason 2117</Text>
            </Group>
            <Group gap={6} align="flex-start">
              <IconClock size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Text size="sm" c="dimmed">Every Tue, 7 PM</Text>
            </Group>
          </Stack>
        </SimpleGrid>

        <Divider my="xl" color="rgba(255,255,255,0.1)" />

        <Text size="xs" c="dimmed" ta="center">© 2026 Omega Phi Alpha – Nu Chapter. All rights reserved.</Text>
      </Container>
    </Box>
  );
}
