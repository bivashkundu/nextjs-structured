import { chatListItem } from '@/json/mock/demo.mock';
import { ChatMenuCard } from '@/styles/StyledComponents/ChatBoardStyled';
import { IChatMenuProps } from '@/typescript/interface/custom.interfaces';
import InputFieldCommon from '@/ui/CommonInput/CommonInput';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, List, ListItem } from '@mui/material';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import ChatMenuListItem from './ChatMenuListItem';

const ChatMenu = ({ onSelectChat, selectedChatName, className }: IChatMenuProps) => {
  return (
    <ChatMenuCard className={className}>
      <InputFieldCommon
        placeholder='Search...'
        endAdornment={
          <IconButton disableRipple>
            <SearchIcon />
          </IconButton>
        }
        className='srch-sec'
      />
      <SmoothScroll className='chat-list-scroll'>
        <List disablePadding className='chta-list-root'>
          {chatListItem.map((chat, index) => (
            <ListItem disablePadding key={index} sx={{ display: 'block' }}>
              <ChatMenuListItem
                {...chat}
                selected={selectedChatName === chat.name}
                onClick={() => onSelectChat(chat)}
              />
            </ListItem>
          ))}
        </List>
      </SmoothScroll>
    </ChatMenuCard>
  );
};

export default ChatMenu;
