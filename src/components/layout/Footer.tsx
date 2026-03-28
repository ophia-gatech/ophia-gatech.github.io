import { Link } from 'react-router-dom';
import { Box, Container, Group, Text, Stack, SimpleGrid, Anchor, Divider } from '@mantine/core';
import { IconBrandInstagram, IconMail, IconMapPin, IconClock, IconBrandFacebook } from '@tabler/icons-react';
import classes from './Footer.module.css';

export function Footer() {
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
              <Anchor href="mailto:nu.president@omegaphialpha.org" className={classes.socialLink} aria-label="Email"><IconMail size={18} /></Anchor>
              <Anchor href="https://www.facebook.com/omegaphialphagt" target="_blank" rel="noopener noreferrer" className={classes.socialLink} aria-label="Facebook"><IconBrandFacebook size={18} /></Anchor>
            </Group>
          </Stack>

          {/* Navigate */}
          <Stack gap={6}>
            <Text className={classes.colTitle}>Navigate</Text>
            {[
              { to: '/',        label: 'Home'            },
              { to: '/team',    label: 'Meet the Team'   },
              { to: '/join',    label: 'Become a Member' },
              { to: '/gallery', label: 'Gallery'         },
              { to: '/contact', label: 'Contact Us'      },
            ].map(l => (
              <Anchor key={l.to} component={Link} to={l.to} className={classes.footerLink}>{l.label}</Anchor>
            ))}
          </Stack>

          {/* Get Involved */}
          <Stack gap={6}>
            <Text className={classes.colTitle}>Get Involved</Text>
            {[
              { to: '/join#rush',    label: 'Rush & Recruitment' },
              { to: '/join#why',    label: 'Why Join?'           },
              { to: 'https://www.facebook.com/omegaphialphagt', label: 'Find us on Facebook' },
              { to: '/contact',     label: 'Partner With Us'     },
            ].map(l => (
              <Anchor key={l.label} component={Link} to={l.to} className={classes.footerLink}>{l.label}</Anchor>
            ))}
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
              <Text size="sm" c="dimmed">Student Union, Rm 204</Text>
            </Group>
            <Group gap={6} align="flex-start">
              <IconClock size={14} style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }} />
              <Text size="sm" c="dimmed">Every other Tue, 7 PM</Text>
            </Group>
          </Stack>
        </SimpleGrid>

        <Divider my="xl" color="rgba(255,255,255,0.1)" />

        <Group justify="space-between" wrap="wrap" gap="sm">
          <Text size="xs" c="dimmed">© 2026 Omega Phi Alpha – Nu Chapter. All rights reserved.</Text>
          <Group gap="md">
            <Anchor href="#" className={classes.bottomLink} size="xs">Privacy</Anchor>
            <Anchor href="#" className={classes.bottomLink} size="xs">Terms</Anchor>
            <Anchor component={Link} to="/contact" className={classes.bottomLink} size="xs">Accessibility</Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
