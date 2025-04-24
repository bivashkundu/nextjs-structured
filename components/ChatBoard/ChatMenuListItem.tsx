import { ChatMenuListItemRoot } from '@/styles/StyledComponents/ChatBoardStyled';
import { IChatMenuListItemProps } from '@/typescript/interface/custom.interfaces';
import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';

const ChatMenuListItem: React.FC<IChatMenuListItemProps> = ({
  avatar,
  name,
  shortMsg,
  chatTime,
  badge,
  selected = false,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <ChatMenuListItemRoot
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      className={selected ? 'selected' : ''}
      onClick={onClick}
    >
      <Stack direction='row' alignItems='center' className='list-left'>
        <Avatar src={avatar} alt={name} sx={{ width: 40, height: 40 }} />
        <Box className='avt-right'>
          <Typography variant='body1' fontWeight={600}>
            {name}
          </Typography>
          <Typography variant='caption'>{shortMsg}</Typography>
        </Box>
      </Stack>
      <Box className='time-badge' lineHeight={1.2}>
        <Typography
          variant='caption'
          display={'block'}
          color={`${theme.palette.grey[900]}`}
          fontWeight={600}
          fontSize={'12px'}
        >
          {chatTime}
        </Typography>
        {badge !== 0 && (
          <Typography
            variant='overline'
            display={'inline-block'}
            lineHeight={1.1}
            fontWeight={500}
            sx={{
              background: `${theme.palette.primary.main}`,
              minWidth: '20px',
              minHeight: '20px',
              textAlign: 'center',
              borderRadius: '50%',
              padding: '3px',
            }}
          >
            {badge}
          </Typography>
        )}
      </Box>
    </ChatMenuListItemRoot>
  );
};

export default ChatMenuListItem;
