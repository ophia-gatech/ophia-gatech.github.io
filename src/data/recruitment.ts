export interface RecruitmentDate {
  date: string;
  event: string;
  location: string;
  status: 'upcoming' | 'tba' | 'past';
}

export const recruitmentDates: RecruitmentDate[] = [
  { date: 'September 8, 2026',           event: 'Fall Info Session #1',   location: 'Student Union, Rm 204',       status: 'upcoming' },
  { date: 'September 15, 2026',          event: 'Fall Info Session #2',   location: 'Library Commons, 3rd Floor',  status: 'upcoming' },
  { date: 'September 22–26, 2026',       event: 'Rush Week Events',       location: 'Various Campus Locations',    status: 'upcoming' },
  { date: 'September 28, 2026',          event: 'Bid Day Celebration',    location: 'Campus Quad',                 status: 'tba'      },
  { date: 'October 2026 – April 2027',   event: 'New Member Education',   location: 'Chapter Meetings',            status: 'tba'      },
];
