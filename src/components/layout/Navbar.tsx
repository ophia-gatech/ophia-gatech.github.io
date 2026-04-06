import { useState, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
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
  { path: '/',        hash: '',         subject: '', highlight: '', keywords: ['home', 'welcome', 'about', 'pillars', 'testimonials', 'omega phi alpha', 'nu chapter', 'who are you', 'what is ophia'] },
  { path: '/service', hash: '',         subject: '', highlight: '', keywords: ['service', 'volunteer', 'hours', 'serve', 'volunteering', 'service project', 'giving back', 'community service'] },
  { path: '/service', hash: '',         subject: '', highlight: '', keywords: ['mental health', 'awareness', 'counseling', 'wellness', 'well being'] },
  { path: '/service', hash: '',         subject: '', highlight: '', keywords: ['families', 'strengthening families', 'family', 'president project'] },
  { path: '/join',    hash: 'why',      subject: '', highlight: '', keywords: ['why join', 'why should i join', 'why should i', 'benefits of joining', 'reasons to join', 'what do i get', 'what are the benefits', 'is it worth it'] },
  { path: '/join',    hash: 'rush',     subject: '', highlight: '', keywords: ['how do i join', 'how to join', 'join', 'rush', 'recruit', 'recruitment', 'pledge', 'bid day', 'rose night', 'become a member', 'sign up', 'membership', 'requirements', 'new member'] },
  { path: '/join',    hash: 'connect',  subject: '', highlight: '', keywords: ['stay connected', 'how do i stay connected', 'slack', 'reach out directly', 'connect', 'keep in touch'] },
  { path: '/team',    hash: '', subject: '', highlight: '',                      keywords: ['team', 'officers', 'leadership', 'exec', 'board', 'who leads', 'who runs', 'members'] },
  { path: '/team',    hash: '', subject: '', highlight: 'president',             keywords: ['president', 'deidre', 'deidre schulte'] },
  { path: '/team',    hash: '', subject: '', highlight: 'vp',                    keywords: ['vice president', 'vp', 'callie', 'callie brumfield'] },
  { path: '/team',    hash: '', subject: '', highlight: 'treasurer',             keywords: ['treasurer', 'angela', 'angela juric'] },
  { path: '/team',    hash: '', subject: '', highlight: 'secretary',             keywords: ['secretary', 'alumni liaison', 'makayla', 'makayla mitchler'] },
  { path: '/team',    hash: '', subject: '', highlight: 'service-director-1',    keywords: ['service director', 'jenna', 'jenna grot'] },
  { path: '/team',    hash: '', subject: '', highlight: 'service-director-2',    keywords: ['lynna', 'lynna kim'] },
  { path: '/team',    hash: '', subject: '', highlight: 'membership-director-1', keywords: ['membership director', 'diya', 'diya nair'] },
  { path: '/team',    hash: '', subject: '', highlight: 'membership-director-2', keywords: ['nem', 'nem rentz'] },
  { path: '/team',    hash: '', subject: '', highlight: 'sisterhood-director',   keywords: ['sisterhood director', 'zahra', 'zahra rangoonwala'] },
  { path: '/team',    hash: '', subject: '', highlight: 'outreach-chair',        keywords: ['outreach chair', 'outreach', 'anika', 'anika tapshalkar'] },
  { path: '/team',    hash: '', subject: '', highlight: 'pr-chair',              keywords: ['public relations', 'pr chair', 'risha', 'risha khanna'] },
  { path: '/team',    hash: '', subject: '', highlight: 'ado',                   keywords: ['district officer', 'active district', 'jasmine', 'jasmine lopez'] },
  { path: '/contact', hash: '',         subject: '', highlight: '', keywords: ['contact', 'email', 'location', 'meeting', 'instagram', 'facebook', 'reach out', 'get in touch', 'find you'] },
  { path: '/contact', hash: '',         subject: 'partnerships', highlight: '', keywords: ['partner', 'partnership', 'how do i partner', 'collaborate', 'work together', 'organization', 'sponsor', 'nonprofit', 'want to partner', 'looking to partner', 'interested in partnering'] },
  { path: '/contact', hash: '',         subject: 'recruitment', highlight: '', keywords: ['question about joining', 'rush question', 'rush info', 'joining question'] },
  { path: '/contact', hash: '',         subject: 'service', highlight: '', keywords: ['service opportunity', 'volunteer opportunity', 'service question'] },
  { path: '/contact', hash: '',         subject: 'general', highlight: '', keywords: ['general question', 'question', 'ask', 'inquiry', 'info', 'information', 'help', 'hello', 'hi'] },
];

// Strip common question/filler phrases before matching
function normalise(q: string) {
  return q
    .toLowerCase()
    .replace(/^(how do i|how to|how can i|what is|what are|where is|where can i|when is|can i|do you have|tell me about|i want to|i need to|show me|what about|i have a)\s+/i, '')
    .replace(/[?!.,]+$/, '')
    .trim();
}

// Score an entry: higher = better match
function scoreEntry(item: typeof searchIndex[0], words: string[], lower: string) {
  let total = 0;
  for (const k of item.keywords) {
    if (k === lower)            { total += 10; continue; } // exact match
    if (lower.includes(k))      { total += 4;  continue; } // full keyword inside query
    if (k.includes(lower))      { total += 4;  continue; } // full query inside keyword
    for (const w of words) {
      if (w.length > 2 && (k === w || k.includes(w) || w.includes(k))) total += 1;
    }
  }
  return total;
}

function NavSearch() {
  const [query, setQuery]       = useState('');
  const [expanded, setExpanded] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate                = useNavigate();
  const location                = useLocation();
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
    const scored = searchIndex
      .map(item => ({ item, score: scoreEntry(item, words, lower) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score);
    const match = scored.length > 0 ? scored[0].item : null;
    if (match) {
      let dest = match.hash ? `${match.path}#${match.hash}` : match.path;
      if (match.subject)    dest = `${match.path}?subject=${match.subject}`;
      if (match.highlight)  dest = `${match.path}?highlight=${match.highlight}`;

      // If already on the same page, ScrollToTop won't fire — handle scrolling directly
      if (location.pathname === match.path) {
        if (match.hash) {
          setTimeout(() => {
            document.getElementById(match.hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

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
