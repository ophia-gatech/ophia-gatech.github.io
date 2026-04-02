import { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Group, Text, Box, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import classes from './Navbar.module.css';

const links = [
  { to: '/',        label: 'Home'       },
  { to: '/service', label: 'Service'    },
  { to: '/join',    label: 'Sisterhood' },
  { to: '/team',    label: 'Leadership' },
  { to: '/contact', label: 'Contact'    },
];

// Section-level search index — path + optional hash for in-page scrolling
const searchIndex = [
  { path: '/',            hash: '',       keywords: ['home', 'welcome', 'about', 'pillars', 'testimonials', 'omega phi alpha', 'nu chapter'] },
  { path: '/service',     hash: '',       keywords: ['service', 'volunteer', 'hours', 'service in action', 'slideshow'] },
  { path: '/service',     hash: '',       keywords: ['mental health', 'permanent project', 'awareness'] },
  { path: '/service',     hash: '',       keywords: ['strengthening families', 'president project', 'families'] },
  { path: '/join',        hash: 'why',    keywords: ['why join', 'benefits', 'sisterhood', 'leadership skills'] },
  { path: '/join',        hash: 'rush',   keywords: ['rush', 'recruitment', 'bid day', 'rose night', 'join', 'membership', 'requirements'] },
  { path: '/team',        hash: '',       keywords: ['team', 'officers', 'leadership', 'exec board', 'president', 'treasurer', 'secretary', 'board'] },
  { path: '/contact',     hash: '',       keywords: ['contact', 'email', 'message', 'location', 'meeting', 'instagram', 'facebook', 'reach out'] },
];

function NavSearch() {
  const [query, setQuery]       = useState('');
  const [expanded, setExpanded] = useState(false);
  const navigate                = useNavigate();
  const inputRef                = useRef<HTMLInputElement>(null);

  const expand = () => {
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 30);
  };

  const collapse = () => {
    if (!query) setExpanded(false);
  };

  const go = () => {
    const lower = query.toLowerCase().trim();
    if (!lower) return;
    const match = searchIndex.find(item =>
      item.keywords.some(k => k.includes(lower))
    );
    if (match) {
      navigate(match.hash ? `${match.path}#${match.hash}` : match.path);
    }
    setQuery('');
    setExpanded(false);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') go();
    if (e.key === 'Escape') { setQuery(''); setExpanded(false); }
  };

  return (
    <Box className={`${classes.searchWrap} ${expanded ? classes.searchWrapExpanded : ''}`}>
      <Box className={classes.searchIcon} onClick={expand} aria-label="Search">
        <IconSearch size={16} />
      </Box>
      <input
        ref={inputRef}
        className={`${classes.searchInput} ${expanded ? classes.searchInputExpanded : ''}`}
        placeholder="Search…"
        value={query}
        onChange={e => setQuery(e.currentTarget.value)}
        onKeyDown={handleKey}
        onBlur={collapse}
      />
    </Box>
  );
}

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

          {/* Desktop links + search */}
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
            <NavSearch />
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
        </Stack>
      </Drawer>
    </>
  );
}
