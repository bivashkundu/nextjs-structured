import { Paper, styled } from '@mui/material';

export const MessageStackRoot = styled(Paper)`
  margin-top: 15px;
  background-color: ${({ theme }) => theme.palette.customColors.lightPaperBg};
  position: relative;

  .chat-list-scroll {
    height: calc(100svh - 186px);
    /* If you don't use bodyGap, then apply a separate CSS for the height here. */
  }

  .chta-list-root {
    li {
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.palette.grey.A200};
      }
    }
  }
`;
