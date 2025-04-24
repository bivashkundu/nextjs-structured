import { ChatMessageStack } from '@/styles/StyledComponents/ChatBoardStyled';
import { IChatMessage } from '@/typescript/interface/custom.interfaces';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';

const ChatMessage: React.FC<IChatMessage> = ({ avatar, messages, type }) => {
  return (
    <ChatMessageStack
      direction={type === 'receiver' ? 'row' : 'row-reverse'}
      alignItems='flex-start'
    >
      <Avatar src={avatar} alt='User avatar' sx={{ width: 40, height: 40 }} />
      <Stack
        alignItems={type === 'receiver' ? 'flex-start' : 'flex-end'}
        gap={'15px'}
        className='msg-right-sec'
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            className={`${type === 'receiver' ? 'receive-msg' : type === 'sender' ? 'sent-msg' : undefined} msg-content`}
          >
            <Typography
              variant='caption'
              sx={{ display: 'block' }}
              textAlign={type === 'receiver' ? 'left' : 'right'}
              className='msg-time'
              fontSize={'12px'}
              fontWeight={600}
            >
              {msg.time}
            </Typography>
            <Stack
              direction={type === 'receiver' ? 'row' : 'row-reverse'}
              alignItems='flex-start'
              className='msg-info'
            >
              <Typography variant='body1' className='text-msg'>
                {msg.text}
              </Typography>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Box>
        ))}
      </Stack>
    </ChatMessageStack>
  );
};

export default ChatMessage;
