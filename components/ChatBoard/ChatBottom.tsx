import { ChatBottomBox } from '@/styles/StyledComponents/ChatBoardStyled';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, IconButton, Input, Stack, useMediaQuery, useTheme } from '@mui/material';

const ChatBottom = () => {
  const theme = useTheme();
  const isTabScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <ChatBottomBox direction='row' alignItems='center'>
      <Box className='text-editor'>
        <Input placeholder='Type something here...' />
      </Box>
      <Stack direction='row' alignItems='center' justifyContent='flex-end' className='btn-group'>
        {isTabScreen ? null : (
          <>
            <IconButton disableRipple>
              <EmojiEmotionsIcon />
            </IconButton>
            <IconButton disableRipple>
              <CameraAltIcon />
            </IconButton>
            <IconButton disableRipple>
              <AttachFileIcon />
            </IconButton>
          </>
        )}
        {isTabScreen && (
          <IconButton disableRipple>
            <AddIcon />
          </IconButton>
        )}
        <Button disableRipple className='msg-sendbtn'>
          <SendIcon />
        </Button>
      </Stack>
    </ChatBottomBox>
  );
};

export default ChatBottom;
