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

// Section-level search index — path + optional hash + optional subject pre-fill for contact
const searchIndex = [
  { path: '/',        hash: '',      subject: '',              keywords: ['home', 'welcome', 'about', 'pillars', 'testimonials', 'omega phi alpha', 'nu chapter', 'who are you', 'what is ophia'] },
  { path: '/service', hash: '',      subject: '',              keywords: ['service', 'volunteer', 'hours', 'serve', 'volunteering', 'service project', 'giving back', 'community service'] },
  { path: '/service', hash: '',      subject: '',              keywords: ['mental health', 'awareness', 'counseling', 'wellness', 'well being'] },
  { path: '/service', hash: '',      subject: '',              keywords: ['families', 'strengthening families', 'family', 'president project'] },
  { path: '/join',    hash: 'why',   subject: '',              keywords: ['why join', 'benefits', 'reason', 'why should i', 'what do i get'] },
  { path: '/join',    hash: 'rush',  subject: '',              keywords: ['join', 'rush', 'recruit', 'recruitment', 'pledge', 'bid day', 'rose night', 'become a member', 'how do i join', 'sign up', 'membership', 'requirements', 'new member'] },
  { path: '/team',    hash: '',      subject: '',              keywords: ['team', 'officers', 'leadership', 'exec', 'board', 'president', 'treasurer', 'secretary', 'who leads', 'who runs', 'members'] },
  { path: '/contact', hash: '',      subject: '',              keywords: ['contact', 'email', 'location', 'meeting', 'instagram', 'facebook', 'reach out', 'get in touch', 'find you'] },
  { path: '/contact', hash: '',      subject: 'partnerships',  keywords: ['partner', 'partnership', 'collaborate', 'work together', 'organization', 'sponsor', 'nonprofit'] },
  { path: '/contact', hash: '',      subject: 'recruitment',   keywords: ['question about joining', 'rush question', 'rush info', 'joining question'] },
  { path: '/contact', hash: '',      subject: 'service',       keywords: ['service opportunity', 'volunteer opportunity', 'service question'] },
  { path: '/contact', hash: '',      subject: 'general',       keywords: ['question', 'ask', 'inquiry', 'info', 'information', 'help', 'hello', 'hi'] },
];

// Strip common question/filler phrases before matching
function normalise(q: string) {
  return q
    .toLowerCase()
    .replace(/^(how do i|how to|how can i|what is|what are|where is|where can i|when is|can i|do you have|tell me about|i want to|i need to|show me|what about|i have a)\s+/i, '')
    .replace(/[?!.,]+$/, '')
    .trim();
}

function NavSearch() {
  const [query, setQuery]       = useState('');
  const [expanded, setExpanded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate                = useNavigate();
  const inputRef                = useRef<HTMLInputElement>(null);

  const expand = () => {
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 30);
  };

  const collapse = () => {
    if (!query) { setExpanded(false); setNotFound(false); }
  };

  const go = () => {
    const raw   = query.trim();
    if (!raw) return;
    const lower = normalise(raw);
    const words = lower.split(/\s+/).filter(w => w.length > 2);
    const match = searchIndex.find(item =>
      item.keywords.some(k =>
        k.includes(lower) ||
        lower.includes(k) ||
        words.some(w => k.includes(w) || w.includes(k))
      )
    );
    if (match) {
      let dest = match.hash ? `${match.path}#${match.hash}` : match.path;
      if (match.subject) dest = `${match.path}?subject=${match.subject}`;
      navigate(dest);
      setQuery('');
      setExpanded(false);
      setNotFound(false);
    } else {
      setNotFound(true);
      setTimeout(() => setNotFound(false), 1500);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') go();
    if (e.key === 'Escape') { setQuery(''); setExpanded(false); setNotFound(false); }
  };

  return (
    <Box className={`${classes.searchWrap} ${expanded ? classes.searchWrapExpanded : ''}`}>
      <Box className={classes.searchIcon} onClick={expand} aria-label="Search">
        <IconSearch size={16} />
      </Box>
      <input
        ref={inputRef}
        className={`${classes.searchInput} ${expanded ? classes.searchInputExpanded : ''} ${notFound ? classes.searchInputNotFound : ''}`}
        placeholder={notFound ? 'Not found…' : 'Search…'}
        value={query}
        onChange={e => { setQuery(e.currentTarget.value); setNotFound(false); }}
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
