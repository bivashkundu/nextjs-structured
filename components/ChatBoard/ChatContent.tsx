import { dummyChatData } from '@/json/mock/demo.mock';
import { ChatContentBox } from '@/styles/StyledComponents/ChatBoardStyled';
import { IChatContentProps } from '@/typescript/interface/custom.interfaces';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import {
  Avatar,
  Box,
  Grid2,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import ChatBottom from './ChatBottom';
import ChatMessage from './ChatMessage';

const ChatContent = ({ selectedChat, onToggleChatMenu, className }: IChatContentProps) => {
  const { avatar, name } = selectedChat;
  const theme = useTheme();
  const isTabScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ChatContentBox className={className}>
      <Box className='chat-con-header'>
        <Grid2 container spacing={1}>
          <Grid2 size={{ xs: 4 }}>
            <Stack direction='row' alignItems='center' className='chat-header-stack'>
              {isTabScreen && (
                <IconButton onClick={onToggleChatMenu} className='backto-chatmenu' disableRipple>
                  <ArrowBackIosIcon />
                </IconButton>
              )}
              <Avatar src={avatar} alt='' sx={{ width: 40, height: 40 }} />
              <Box className='chat-header-avtRight'>
                <Typography variant='body1'>{name}</Typography>
                <Typography variant='caption'>Active now</Typography>
              </Box>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <Stack
              direction='row'
              alignItems='center'
              flexWrap='wrap'
              justifyContent='flex-end'
              className='chat-header-right'
            >
              <IconButton>
                <VideocamIcon />
              </IconButton>
              <IconButton>
                <LocalPhoneIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
      <SmoothScroll className='msg-scroll'>
        <Box className='msg-inner-gap'>
          {dummyChatData.map((chats, index) => (
            <ChatMessage {...chats} key={index} />
          ))}
        </Box>
      </SmoothScroll>
      <ChatBottom />
    </ChatContentBox>
  );
};

export default ChatContent;
