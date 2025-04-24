import ChatContent from '@/components/ChatBoard/ChatContent';
import ChatMenu from '@/components/ChatBoard/ChatMenu';
import { chatListItem } from '@/json/mock/demo.mock';
import DashboardWrapper from '@/layout/DashboardWrapper/DashboardWrapper';
import { MessageStackRoot } from '@/styles/StyledComponents/MessageStyled';
import { IChatMenuListItemProps } from '@/typescript/interface/custom.interfaces';
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

export default function Message() {
  const [selectedChat, setSelectedChat] = useState<IChatMenuListItemProps>(chatListItem[0]!);
  const [openChatMenu, setOpenChatMenu] = useState(false);
  const theme = useTheme();
  const isTabScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleSelectChat = (chat: IChatMenuListItemProps) => {
    setSelectedChat(chat);
    if (isTabScreen) {
      setOpenChatMenu(true);
    }
  };

  const handleToggleChat = () => {
    setOpenChatMenu(!openChatMenu);
  };

  return (
    <DashboardWrapper headerTitle='Message' headerSubtitle='Lorem ipsum dummy text' bodyGap>
      <MessageStackRoot elevation={0} sx={{ display: 'flex' }}>
        <ChatMenu
          onSelectChat={handleSelectChat}
          selectedChatName={selectedChat?.name}
          className={openChatMenu ? 'open-chatmenu' : 'close-chatmenu'}
        />
        <ChatContent
          selectedChat={selectedChat}
          onToggleChatMenu={handleToggleChat}
          className={openChatMenu ? 'open-chatcontent' : 'close-chatcontent'}
        />
      </MessageStackRoot>
    </DashboardWrapper>
  );
}
