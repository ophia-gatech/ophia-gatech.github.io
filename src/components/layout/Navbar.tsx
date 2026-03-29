import { Link, NavLink } from 'react-router-dom';
import { Group, Text, Box, Burger, Drawer, Stack, Button } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import classes from './Navbar.module.css';

const links = [
  { to: '/',        label: 'Home'       },
  { to: '/gallery', label: 'Service'    },
  { to: '/join',    label: 'Sisterhood' },
  { to: '/team',    label: 'Leadership' },
  { to: '/contact', label: 'Contact'    },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();

  return (
    <>
      <Box component="nav" className={`${classes.nav} ${scroll.y > 20 ? classes.scrolled : ''}`} h="100%">
        <Group h="100%" px="xl" justify="space-between" maw={1200} mx="auto" w="100%">

          {/* Brand */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Group gap="sm">
              <Box className={classes.logoMark}>ΩΦΑ</Box>
              <Box visibleFrom="xs">
                <Text className={classes.brandTitle}>Omega Phi Alpha</Text>
                <Text className={classes.brandSub}>Nu Chapter</Text>
              </Box>
            </Group>
          </Link>

          {/* Desktop links */}
          <Group gap="xs" visibleFrom="sm">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `${classes.link} ${isActive ? classes.active : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Button component={Link} to="/join" className={classes.ctaBtn} size="sm">
              Join Us →
            </Button>
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" color="white" aria-label="Toggle navigation" />
        </Group>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        title={<Text fw={700} size="lg" style={{ fontFamily: 'Playfair Display, serif', color: '#1a2744' }}>Omega Phi Alpha</Text>}
        size="xs"
        position="right"
      >
        <Stack gap="xs">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={close}
              className={({ isActive }) => `${classes.mobileLink} ${isActive ? classes.mobileLinkActive : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Button component={Link} to="/join" onClick={close} className={classes.ctaBtn} fullWidth mt="sm">
            Join Us →
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
