export interface ExecMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  initial: string;
  gradient: string;
  image?: string;
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
    name: 'Callie Brumfield',
    position: 'President',
    bio: 'Leads the chapter with vision and purpose, overseeing all operations and serving as the primary liaison to our national organization and campus administration.',
    initial: 'C',
    gradient: 'linear-gradient(135deg, #1a2744, #3a5a9b)',
    image: '/images/people/callie_portrait.jpeg',
  },
  {
    id: 'vp',
    name: 'Trinity Smith',
    position: 'Vice President',
    bio: 'Supports the President in overseeing chapter operations, steps in as needed across all areas, and helps ensure the chapter runs smoothly semester to semester.',
    initial: 'T',
    gradient: 'linear-gradient(135deg, #243460, #4a6fa5)',
    image: '/images/people/trinity_portrait.jpeg',
  },
  {
    id: 'secretary',
    name: 'Risha Khanna',
    position: 'Secretary',
    bio: 'Keeps meticulous records of chapter meetings, manages internal communications, and maintains our connection with Nu Chapter alumni.',
    initial: 'R',
    gradient: 'linear-gradient(135deg, #8b3a1a, #c45d2d)',
    image: '/images/people/Risha_portrait.jpeg',
  },
  {
    id: 'treasurer',
    name: 'Denisha Parsons',
    position: 'Treasurer',
    bio: 'Manages chapter finances, annual budgeting, dues collection, and fundraising initiatives to keep Nu Chapter fully resourced for all activities.',
    initial: 'D',
    gradient: 'linear-gradient(135deg, #1a6b3a, #2d9e5a)',
  },
  {
    id: 'service-director-1',
    name: 'Jenna Grot',
    position: 'Service Director',
    bio: 'Coordinates and organizes service events, community partnerships, and volunteer initiatives throughout the academic year to fulfill our service mission.',
    initial: 'J',
    gradient: 'linear-gradient(135deg, #c9a84c, #a8872e)',
    image: '/images/people/jenna_portrait.jpeg',
  },
  {
    id: 'service-director-2',
    name: 'Leyla Brown',
    position: 'Service Director',
    bio: 'Partners in leading our service programming, connecting members with meaningful volunteer opportunities across all four areas of service.',
    initial: 'L',
    gradient: 'linear-gradient(135deg, #b8933e, #8b6920)',
    image: '/images/people/leyla_portrait.JPEG',
  },
  {
    id: 'membership-director-1',
    name: 'Anika Tapshalkar',
    position: 'Membership Director',
    bio: 'Leads recruitment efforts, oversees new member education, and ensures every new pledge has the support they need to thrive in our chapter.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #7b2d8b, #b45dc4)',
    image: '/images/people/anika_portrait.jpeg',
  },
  {
    id: 'membership-director-2',
    name: 'Andrea Kim',
    position: 'Membership Director',
    bio: 'Partners in guiding prospective and new members through the recruitment and new member education process with care and enthusiasm.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #6a2a7a, #a050b0)',
    image: '/images/people/andrea_portrait.JPEG',
  },
  {
    id: 'sisterhood-director',
    name: 'Alanys Camacho',
    position: 'Sisterhood Director',
    bio: 'Plans bonding events, social activities, and traditions that strengthen the bonds between our members and build our chapter\'s unique culture.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #3a1a6b, #6a4db5)',
    image: '/images/people/alanys_portrait.JPEG',
  },
  {
    id: 'outreach-chair',
    name: 'Anika Tapshalkar',
    position: 'Outreach Chair',
    bio: 'Builds and maintains relationships with campus organizations, local nonprofits, and community partners to expand Nu Chapter\'s reach and impact.',
    initial: 'A',
    gradient: 'linear-gradient(135deg, #1a4a3a, #2d8a6a)',
    image: '/images/people/anika_portrait.jpeg',
  },
  {
    id: 'pr-chair',
    name: 'Risha Khanna',
    position: 'Public Relations Chair',
    bio: 'Manages our public presence, social media accounts, and chapter communications to share our story and grow awareness of Nu Chapter across campus.',
    initial: 'R',
    gradient: 'linear-gradient(135deg, #4a1a2a, #8b3a5a)',
    image: '/images/people/Risha_portrait.jpeg',
  },
  {
    id: 'ado',
    name: 'Jasmine Lopez-Sandoval',
    position: 'Active District Officer',
    bio: 'Serves as Nu Chapter\'s representative to the regional district, attending district meetings and fostering connections with other Omega Phi Alpha chapters.',
    initial: 'J',
    gradient: 'linear-gradient(135deg, #1a3a4a, #2d6a8a)',
    image: '/images/people/jasmine_portrait.jpeg',
  },
];

// TODO: Update this with a real quote and message from Deidre each semester.
export const spotlight: SpotlightMember = {
  name: 'Callie Brumfield',
  role: 'President, Nu Chapter',
  quote:
    '"Nu Chapter is a place where you show up, give back, and leave knowing you made a difference — and that you have an incredible group of people behind you every step of the way."',
  bio: 'As President of Nu Chapter, Callie is committed to building a chapter rooted in genuine service, strong sisterhood, and meaningful leadership. Her vision for this semester is to deepen the chapter\'s community partnerships, increase member engagement in all four pillars of service, and create an environment where every member feels seen and valued. She looks forward to welcoming new members who share that same passion for making an impact.',
};
