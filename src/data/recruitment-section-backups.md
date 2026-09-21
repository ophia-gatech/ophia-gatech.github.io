# Recruitment Section Backups

Paste one of these blocks into the `{/* RECRUITMENT CLOSED NOTICE */}` section in `src/pages/Join.tsx` each semester.

---

## Fall 2026 — Rush Closed

```tsx
{/* RECRUITMENT CLOSED NOTICE */}
<Box py="2rem">
  <Container size="md">
    <Paper p="2rem" radius="lg" shadow="xs" ta="center" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(26,39,68,0.04))', border: '1px solid rgba(201,168,76,0.25)' }}>
      <Badge variant="light" color="gold" size="sm" radius="xl" mb="sm">Recruitment</Badge>
      <Title order={3} className={classes.sectionTitle} mb="xs">Fall 2026 Rush Has Closed</Title>
      <Text c="dimmed" maw={480} mx="auto" lh={1.8} mb="md">
        Thank you to everyone who rushed with us this semester! We'll be back in Spring 2027 — we cannot wait to see you there.
      </Text>
      <Text c="dimmed" size="sm" mb="md">Enter your email and we'll let you know the moment Spring 2027 rush opens.</Text>
      <NotifyForm />
    </Paper>
  </Container>
</Box>
```

---

## Spring 2027 — Rush Open (template)

```tsx
{/* RECRUITMENT OPEN NOTICE */}
<Box py="2rem">
  <Container size="md">
    <Paper p="2rem" radius="lg" shadow="xs" ta="center" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(26,39,68,0.04))', border: '1px solid rgba(201,168,76,0.25)' }}>
      <Badge variant="light" color="gold" size="sm" radius="xl" mb="sm">Recruitment</Badge>
      <Title order={3} className={classes.sectionTitle} mb="xs">Fall 2026 Rush is Now Open!</Title>
      <Text c="dimmed" maw={480} mx="auto" lh={1.8} mb="md">
        Rush week is here! Join us for a volunteer event and see what Nu Chapter is all about. We cannot wait to meet you.
      </Text>
      <Button
        component={Link}
        to="/join#rush"
        style={{ background: 'linear-gradient(135deg,#c9a84c,#a8872e)', color: '#1a2744', fontWeight: 700 }}
        rightSection={<IconArrowRight size={14} />}
      >
        Learn About Rush
      </Button>
    </Paper>
  </Container>
</Box>
```
