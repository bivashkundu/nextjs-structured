import { IChatMenuListItemProps, IChatMessage } from '@/typescript/interface/custom.interfaces';
import assest from '../assest';

export const dummyChatData: IChatMessage[] = [
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'kemon achis',
        time: '10:15 AM',
      },
    ],
    type: 'sender',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'Hey there! How are you doing today?',
        time: '10:15 AM',
      },
      {
        text: 'Hey there! How are you doing today? Did you get a chance to look at the files I sent? Let me know if you need any help. Let me know if you need any help.Let me know if you need any help.',
        time: '10:17 AM',
      },
      {
        text: 'Let me know if you need any help.',
        time: '10:20 AM',
      },
    ],
    type: 'receiver',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'Hey there! How are you doing today?',
        time: '10:15 AM',
      },
      {
        text: 'Did you get a chance to look at the files I sent?',
        time: '10:17 AM',
      },
      {
        text: 'Let me know if you need any help.',
        time: '10:20 AM',
      },
    ],
    type: 'sender',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'Hey there! How are you doing today?',
        time: '10:15 AM',
      },
      {
        text: 'Did you get a chance to look at the files I sent?',
        time: '10:17 AM',
      },
      {
        text: 'Let me know if you need any help.',
        time: '10:20 AM',
      },
    ],
    type: 'receiver',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'Hey there! How are you doing today?',
        time: '10:15 AM',
      },
      {
        text: 'Did you get a chance to look at the files I sent?',
        time: '10:17 AM',
      },
      {
        text: 'Let me know if you need any help.',
        time: '10:20 AM',
      },
    ],
    type: 'sender',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=32',
    messages: [
      {
        text: 'Hey there! How are you doing today?',
        time: '10:15 AM',
      },
      {
        text: 'Did you get a chance to look at the files I sent?',
        time: '10:17 AM',
      },
      {
        text: 'Let me know if you need any help.',
        time: '10:20 AM',
      },
    ],
    type: 'receiver',
  },
];

export const chatListItem: IChatMenuListItemProps[] = [
  {
    avatar: assest.avatar,
    name: 'Eileen Horton',
    shortMsg: 'Wow, that was cool!',
    chatTime: '4:16PM',
    badge: 2,
  },
  {
    avatar: assest.avatar,
    name: 'Tara Fletcher',
    shortMsg: 'The strongest man in the world is blowing up a hot water bottle.',
    chatTime: '21/03/2020',
    badge: 0,
  },
];
