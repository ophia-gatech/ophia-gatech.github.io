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

// TODO: Add personalized bios for each exec board member (coordinate with each officer).
export const execBoard: ExecMember[] = [
  {
    id: 'president',
    name: 'Deidre Schulte',
    position: 'President',
    bio: 'Leads the chapter with vision and purpose, overseeing all operations and serving as the primary liaison to our national organization and campus administration.',
    initial: 'D',
    gradient: 'linear-gradient(135deg, #1a2744, #3a5a9b)',
  },
  {
    id: 'vp',
    name: 'Callie Brumfield',
    position: 'Vice President',
    bio: 'Supports the President in overseeing chapter operations, steps in as needed across all areas, and helps ensure the chapter runs smoothly semester to semester.',
    initial: 'C',
    gradient: 'linear-gradient(135deg, #243460, #4a6fa5)',
  },
  {
    id: 'treasurer',
    name: 'Angela Juric',
    position: 'Treasurer',
    bio: 'Manages chapter finances, annual budgeting, dues collection, and fundraising initiatives to keep Nu Chapter fully resourced for all activities.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #1a6b3a, #2d9e5a)',
  },
  {
    id: 'secretary',
    name: 'Makayla Mitchler',
    position: 'Secretary / Alumni Liaison',
    bio: 'Keeps meticulous records of chapter meetings, manages internal communications, and maintains our connection with Nu Chapter alumni.',
    initial: 'M',
    gradient: 'linear-gradient(135deg, #8b3a1a, #c45d2d)',
  },
  {
    id: 'service-director-1',
    name: 'Jenna Grot',
    position: 'Service Director',
    bio: 'Coordinates and organizes service events, community partnerships, and volunteer initiatives throughout the academic year to fulfill our service mission.',
    initial: 'J',
    gradient: 'linear-gradient(135deg, #c9a84c, #a8872e)',
  },
  {
    id: 'service-director-2',
    name: 'Lynna Kim',
    position: 'Service Director',
    bio: 'Partners in leading our service programming, connecting members with meaningful volunteer opportunities across all four areas of service.',
    initial: 'L',
    gradient: 'linear-gradient(135deg, #b8933e, #8b6920)',
  },
  {
    id: 'membership-director-1',
    name: 'Diya Nair',
    position: 'Membership Director',
    bio: 'Leads recruitment efforts, oversees new member education, and ensures every new pledge has the support they need to thrive in our chapter.',
    initial: 'D',
    gradient: 'linear-gradient(135deg, #7b2d8b, #b45dc4)',
  },
  {
    id: 'membership-director-2',
    name: 'Nem Rentz',
    position: 'Membership Director',
    bio: 'Partners in guiding prospective and new members through the recruitment and new member education process with care and enthusiasm.',
    initial: 'N',
    gradient: 'linear-gradient(135deg, #6a2a7a, #a050b0)',
  },
  {
    id: 'sisterhood-director',
    name: 'Zahra Rangoonwala',
    position: 'Sisterhood Director',
    bio: 'Plans bonding events, social activities, and traditions that strengthen the bonds between our members and build our chapter\'s unique culture.',
    initial: 'Z',
    gradient: 'linear-gradient(135deg, #3a1a6b, #6a4db5)',
  },
  {
    id: 'outreach-chair',
    name: 'Anika Tapshalkar',
    position: 'Outreach Chair',
    bio: 'Builds and maintains relationships with campus organizations, local nonprofits, and community partners to expand Nu Chapter\'s reach and impact.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #1a4a3a, #2d8a6a)',
  },
  {
    id: 'pr-chair',
    name: 'Risha Khanna',
    position: 'Public Relations Chair',
    bio: 'Manages our public presence, social media accounts, and chapter communications to share our story and grow awareness of Nu Chapter across campus.',
    initial: 'R',
    gradient: 'linear-gradient(135deg, #4a1a2a, #8b3a5a)',
  },
  {
    id: 'ado',
    name: 'Jasmine Lopez-Sandoval',
    position: 'Active District Officer',
    bio: 'Serves as Nu Chapter\'s representative to the regional district, attending district meetings and fostering connections with other Omega Phi Alpha chapters.',
    initial: 'J',
    gradient: 'linear-gradient(135deg, #1a3a4a, #2d6a8a)',
  },
];

// TODO: Update this with a real quote and message from Deidre each semester.
export const spotlight: SpotlightMember = {
  name: 'Deidre Schulte',
  role: 'President, Nu Chapter',
  quote:
    '"Nu Chapter is a place where you show up, give back, and leave knowing you made a difference — and that you have an incredible group of people behind you every step of the way."',
  bio: 'As President of Nu Chapter, Deidre is committed to building a chapter rooted in genuine service, strong sisterhood, and meaningful leadership. Her vision for this semester is to deepen the chapter\'s community partnerships, increase member engagement in all four pillars of service, and create an environment where every member feels seen and valued. She looks forward to welcoming new members who share that same passion for making an impact.',
};
