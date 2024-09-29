import {
  GetDialogsPayload,
  GetDialogsResponse,
  GetMessagesPayload,
  GetMessagesResponse,
} from './types';
import user1img from '@/assets/img/user1.png';
import user2img from '@/assets/img/user2.png';
import { MessageItem } from '@/models/messenger';

const dialog1: MessageItem[] = [
  {
    id: '1',
    text: 'Hey John, have you heard about Andrew, the web developer?',
    date: 1714032000000, // 25.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '2',
    text: "No, I haven't. What's special about him?",
    date: 1714035600000, // 25.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '3',
    text: "Well, I just saw his portfolio and I'm impressed. His projects are cutting-edge.",
    date: 1714039200000, // 25.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '4',
    text: "That's interesting. What kind of projects has he worked on?",
    date: 1714042800000, // 25.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '5',
    text: "He's built several e-commerce platforms with amazing UI/UX. The performance metrics are off the charts.",
    date: 1714046400000, // 25.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '6',
    text: 'Impressive. What tech stack does he use?',
    date: 1714132800000, // 26.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '7',
    text: "He's proficient in React, Node.js, and GraphQL. Also has experience with Next.js and TypeScript.",
    date: 1714136400000, // 26.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '8',
    text: "That's a solid stack. How about his soft skills?",
    date: 1714140000000, // 26.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '9',
    text: "From what I've heard, he's a great communicator and team player. Always meets deadlines too.",
    date: 1714143600000, // 26.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '10',
    text: 'Sounds like he could be a great addition to our team. Any downsides?',
    date: 1714147200000, // 26.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '11',
    text: "Not that I can see. He's even contributed to open-source projects in his spare time.",
    date: 1714233600000, // 27.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '12',
    text: "That's a big plus. How about his experience with Agile methodologies?",
    date: 1714237200000, // 27.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '13',
    text: "He's worked in Scrum teams for the past 3 years. Familiar with sprint planning, daily stand-ups, the works.",
    date: 1714240800000, // 27.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '14',
    text: 'Excellent. What about his problem-solving skills?',
    date: 1714244400000, // 27.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '15',
    text: "I've heard he's great at troubleshooting complex issues. Always comes up with innovative solutions.",
    date: 1714248000000, // 27.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '16',
    text: 'Sounds promising. How about his approach to code quality and testing?',
    date: 1714251600000, // 27.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '17',
    text: "He's a strong advocate for clean code and TDD. Writes unit tests for all his code.",
    date: 1714255200000, // 27.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '18',
    text: "That's crucial. Any experience with CI/CD pipelines?",
    date: 1714338000000, // 28.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '19',
    text: "Yes, he's worked with Jenkins and GitHub Actions. Knows how to set up automated deployments.",
    date: 1714341600000, // 28.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '20',
    text: "Impressive. I think we should definitely consider hiring Andrew. Let's set up an interview.",
    date: 1714345200000, // 28.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '21',
    text: "Agreed. His skills and experience seem perfect for our team. I'll contact HR to arrange it.",
    date: 1714348800000, // 28.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '22',
    text: "Great! Let me know when it's scheduled. I'd like to be part of the interview panel.",
    date: 1714352400000, // 28.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '23',
    text: 'Will do.',
    date: 1714356000000, // 28.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '24',
    text: 'I have a feeling Andrew could really help take our web development to the next level.',
    date: 1714356000000, // 28.04.2024
    userId: 'ronald_richards',
    userImg: user1img.src,
  },
  {
    id: '25',
    text: "I agree. Let's hope the interview goes well. ",
    date: 1714359600000, // 28.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '26',
    text: 'Thanks for bringing him to our attention!',
    date: 1714359610000, // 28.04.2024
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
].reverse();

const dialog2: MessageItem[] = [
  {
    id: '1',
    text: 'Hey Devon, have you used Remix in any of your recent projects?',
    date: 1714032000000, // 25.04.2024 10:00:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '2',
    text: "Yes, I've been experimenting with it lately. Why do you ask?",
    date: 1714032060000, // 25.04.2024 10:01:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '3',
    text: "I'm trying to decide between Remix and Next.js for our new project. What's your take?",
    date: 1714032090000, // 25.04.2024 10:01:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '4',
    text: "Both are great, but they have different approaches. What's the project about?",
    date: 1714032120000, // 25.04.2024 10:02:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '5',
    text: "It's a dynamic e-commerce site with lots of user interactions and real-time updates.",
    date: 1714032150000, // 25.04.2024 10:02:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '6',
    text: "Interesting. Both could work, but let's break it down. First, how familiar are you with each framework?",
    date: 1714032180000, // 25.04.2024 10:03:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '7',
    text: "I've used Next.js before, but Remix is new to me. That's why I'm asking for your insight.",
    date: 1714032210000, // 25.04.2024 10:03:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '8',
    text: "Okay, got it. Let's start with routing. Next.js uses file-based routing, while Remix uses a centralized route config.",
    date: 1714032240000, // 25.04.2024 10:04:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '9',
    text: 'How does that impact development?',
    date: 1714032270000, // 25.04.2024 10:04:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '10',
    text: "Next.js's approach is more intuitive for beginners, but Remix's config gives you more control over nested routes.",
    date: 1714032300000, // 25.04.2024 10:05:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '11',
    text: 'Interesting. What about data fetching?',
    date: 1714032330000, // 25.04.2024 10:05:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '12',
    text: "That's where Remix shines. It has a built-in data loading system that's deeply integrated with routing.",
    date: 1714032360000, // 25.04.2024 10:06:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '13',
    text: 'How does that compare to Next.js?',
    date: 1714032390000, // 25.04.2024 10:06:30
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '14',
    text: "Next.js offers more flexibility with getServerSideProps, getStaticProps, etc. But Remix's approach can lead to cleaner code.",
    date: 1714032420000, // 25.04.2024 10:07:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '15',
    text: 'What about performance? Our e-commerce site needs to be fast.',
    date: 1714036020000, // 25.04.2024 11:07:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '16',
    text: 'Both are great for performance. Next.js has excellent static site generation, while Remix focuses on dynamic content.',
    date: 1714036080000, // 25.04.2024 11:08:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '17',
    text: 'Our site will have a mix of static and dynamic content. Which would you recommend?',
    date: 1714036140000, // 25.04.2024 11:09:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '18',
    text: 'For a mix, Next.js might have an edge. Its hybrid approach allows for both static and server-rendered pages.',
    date: 1714036200000, // 25.04.2024 11:10:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '19',
    text: 'That sounds good. How about the learning curve? Our team is more familiar with Next.js.',
    date: 1714036260000, // 25.04.2024 11:11:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '20',
    text: 'If your team knows Next.js, sticking with it might be more productive. Remix has some unique concepts to learn.',
    date: 1714036320000, // 25.04.2024 11:12:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '21',
    text: 'That makes sense. Any other major differences we should consider?',
    date: 1714036380000, // 25.04.2024 11:13:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '22',
    text: 'Remix has better built-in support for forms and mutations. Next.js relies more on client-side JS for these.',
    date: 1714036440000, // 25.04.2024 11:14:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '23',
    text: 'Hmm, that could be useful for our e-commerce forms. But overall, it sounds like Next.js might be the way to go?',
    date: 1714036500000, // 25.04.2024 11:15:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '24',
    text: "For your specific case, yes. Next.js's familiarity and hybrid rendering make it a solid choice for your e-commerce site.",
    date: 1714036560000, // 25.04.2024 11:16:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
  {
    id: '25',
    text: "Thanks, Devon! This discussion has been really helpful. I think we'll go with Next.js for this project.",
    date: 1714036620000, // 25.04.2024 11:17:00
    userId: 'john_doe',
    userImg: 'https://example.com/john.jpg',
  },
  {
    id: '26',
    text: 'Glad I could help! Let me know if you need any more advice as you get started.',
    date: 1714036680000, // 25.04.2024 11:18:00
    userId: 'devon_lane',
    userImg: user2img.src,
  },
].reverse();

export const messengerApi = {
  getMessages: ({ id }: GetMessagesPayload) => {
    return new Promise<GetMessagesResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          messages: id === '1' ? dialog1 : dialog2,
          interlocutorInfo:
            id === '1'
              ? {
                  id: 'ronald_richards',
                  name: 'Ronald Richards',
                  userImg: user1img.src,
                }
              : {
                  id: 'devon_lane',
                  name: 'Devon Lane',
                  userImg: user2img.src,
                },
        });
      }, 1000);
    });
  },
  getDialogs: ({ sort_type }: GetDialogsPayload) => {
    return new Promise<GetDialogsResponse>((resolve) => {
      setTimeout(() => {
        resolve({
          dialogs: [
            {
              id: '1',
              name: 'Ronald Richards',
              lastMessage:
                'Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any questions, please feel free to contact me.',
              userImg: user1img.src,
              lastMessageDate: 1714251600000,
            },
            {
              id: '2',
              name: 'Devon Lane',
              lastMessage: 'I’ll Get back to you as soon as possbile.',
              userImg: user2img.src,
              lastMessageDate: 1714251600010,
            },
          ].sort((a, b) =>
            sort_type === 'date'
              ? b.lastMessageDate - a.lastMessageDate
              : Math.random() > 0.5
              ? 1
              : 0
          ),
        });
      }, 1000);
    });
  },
};
