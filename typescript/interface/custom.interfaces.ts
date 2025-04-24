export interface IMessageContent {
  text: string;
  time: string;
}

export interface IChatMessage {
  avatar: string;
  messages: IMessageContent[];
  type: 'sender' | 'receiver';
}

export interface IChatContentProps {
  selectedChat: IChatMenuListItemProps;
  onToggleChatMenu?: () => void;
  className?: string;
}

export interface IChatMenuListItemProps {
  avatar: string;
  name: string;
  shortMsg: string;
  chatTime: string;
  badge?: number;
  selected?: boolean;
  onClick?: () => void;
}

export interface IChatMenuProps {
  onSelectChat: (user: IChatMenuListItemProps) => void;
  selectedChatName: string;
  className?: string;
}
