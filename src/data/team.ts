export interface ExecMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  initial: string;
  gradient: string;
}

export interface SpotlightMember {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

export const execBoard: ExecMember[] = [
  {
    id: 'president',
    name: 'Name Placeholder',
    position: 'President',
    bio: 'Leads the chapter with vision and purpose, overseeing all operations and serving as the primary liaison to our national organization and campus administration.',
    initial: 'P',
    gradient: 'linear-gradient(135deg, #1a2744, #3a5a9b)',
  },
  {
    id: 'vp-service',
    name: 'Name Placeholder',
    position: 'VP of Service',
    bio: 'Coordinates and organizes service events, community partnerships, and volunteer initiatives throughout the academic year to fulfill our service mission.',
    initial: 'S',
    gradient: 'linear-gradient(135deg, #c9a84c, #a8872e)',
  },
  {
    id: 'vp-membership',
    name: 'Name Placeholder',
    position: 'VP of Membership',
    bio: 'Leads recruitment efforts, oversees new member education, and ensures every new pledge has the support they need to thrive in our chapter.',
    initial: 'M',
    gradient: 'linear-gradient(135deg, #243460, #4a6fa5)',
  },
  {
    id: 'vp-sisterhood',
    name: 'Name Placeholder',
    position: 'VP of Sisterhood',
    bio: "Plans bonding events, social activities, and traditions that strengthen the bonds between our members and build our chapter's unique culture.",
    initial: 'S',
    gradient: 'linear-gradient(135deg, #7b2d8b, #b45dc4)',
  },
  {
    id: 'treasurer',
    name: 'Name Placeholder',
    position: 'Treasurer',
    bio: 'Manages chapter finances, annual budgeting, dues collection, and fundraising initiatives to keep Nu Chapter fully resourced for all activities.',
    initial: 'T',
    gradient: 'linear-gradient(135deg, #1a6b3a, #2d9e5a)',
  },
  {
    id: 'secretary',
    name: 'Name Placeholder',
    position: 'Secretary',
    bio: 'Keeps meticulous records of chapter meetings, manages internal communications, and ensures all administrative obligations to national are met on time.',
    initial: 'S',
    gradient: 'linear-gradient(135deg, #8b3a1a, #c45d2d)',
  },
  {
    id: 'historian',
    name: 'Name Placeholder',
    position: 'Historian',
    bio: 'Documents chapter milestones, manages our photo archives, updates our social media presence, and preserves the rich history of Nu Chapter for future members.',
    initial: 'H',
    gradient: 'linear-gradient(135deg, #3a1a6b, #6a4db5)',
  },
];

export const spotlight: SpotlightMember = {
  name: 'Member Name',
  role: 'Active Member · Junior, Environmental Studies',
  quote:
    '"Joining Nu Chapter was the best decision I made in college. The friendships I\'ve formed and the communities we\'ve served have shaped who I am — and who I want to become."',
  bio: 'This member joined Nu Chapter during their sophomore year and has since logged over 200 individual service hours across a wide range of initiatives — from local food bank drives to campus clean-up events. They recently led a team of volunteers in a week-long literacy tutoring program that reached over 40 elementary school students. Outside of chapter activities, they are passionate about environmental advocacy and serve on the campus sustainability committee.',
};
