import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Container, Title, Text, SimpleGrid, Stack,
  Badge, Button, Divider, Tabs,
} from '@mantine/core';
import { IconPhoto, IconArrowRight } from '@tabler/icons-react';
import { PageHero } from '../components/layout/PageHero';
import { galleryItems, type GalleryItem } from '../data/gallery';
import classes from './Gallery.module.css';

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <Box className={classes.card}>
      <Box className={classes.cardImage} style={{ background: item.gradient }}>
        <Box className={classes.cardOverlay}>
          <Text className={classes.cardCaption}>{item.caption}</Text>
        </Box>
        <Badge
          className={classes.cardBadge}
          color={item.category === 'service' ? 'navy' : 'gold'}
          variant="filled"
          size="xs"
          radius="sm"
        >
          {item.category === 'service' ? 'Service' : 'Sisterhood'}
        </Badge>
      </Box>
    </Box>
  );
}

export function Gallery() {
  const [active, setActive] = useState<string>('all');

  const filtered = galleryItems.filter(
    item => active === 'all' || item.category === active
  );

  return (
    <Box>
      <PageHero
        eyebrow="Service & Sisterhood"
        title="Gallery"
        subtitle="Moments from our service events, chapter milestones, and sisterhood traditions."
      />

      <Box py="5rem">
        <Container size="xl">

          {/* Filter Tabs */}
          <Tabs value={active} onChange={v => setActive(v ?? 'all')} mb="2.5rem">
            <Tabs.List className={classes.tabList}>
              <Tabs.Tab value="all"        className={classes.tab}>All Photos</Tabs.Tab>
              <Tabs.Tab value="service"    className={classes.tab}>Service</Tabs.Tab>
              <Tabs.Tab value="sisterhood" className={classes.tab}>Sisterhood</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          {/* Grid */}
          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, lg: 4 }} spacing="md">
            {filtered.map(item => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </SimpleGrid>

          {/* Submit CTA */}
          <Stack align="center" mt="4rem" gap="sm">
            <Divider color="rgba(26,39,68,0.1)" w="100%" mb="md" />
            <IconPhoto size={40} color="#c9a84c" opacity={0.5} />
            <Title order={3} className={classes.submitTitle}>Want your photo featured?</Title>
            <Text c="dimmed" ta="center" maw={480}>
              Were you at a recent service event or chapter activity? Send us your best shots and
              we may feature them here!
            </Text>
            <Button
              component={Link}
              to="/contact"
              mt="sm"
              style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
              rightSection={<IconArrowRight size={14} />}
            >
              Submit a Photo
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
