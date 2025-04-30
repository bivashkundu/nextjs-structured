import { Box, Stack, styled } from '@mui/material';

export const ChatMenuCard = styled(Stack)`
  width: 350px;
  border-right: 1px solid ${({ theme }) => theme.palette.grey.A200};
  transition: all 0.4s ease;
  background-color: ${({ theme }) => theme.palette.customColors.lightPaperBg};

  @media (max-width: 1199px) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    border: none;
  }

  &.open-chatmenu {
    @media (max-width: 1199px) {
      transform: translateX(-100%);
    }
  }

  .srch-sec {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey.A200};
  }
`;

export const ChatMenuListItemRoot = styled(Stack)`
  transition: 0.3s ease-in-out;
  padding: 13px 20px;
  cursor: pointer;

  .list-left {
    width: 75%;

    .avt-right {
      width: calc(100% - 40px);
      padding-left: 10px;

      p,
      span {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        color: ${({ theme }) => theme.palette.grey[900]};
      }
    }
  }

  .time-badge {
    width: 25%;
    text-align: right;
  }
`;

export const ChatContentBox = styled(Box)`
  width: calc(100% - 350px);
  padding-bottom: 20px;

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 599px) {
    padding-bottom: 0;
  }

  .chat-con-header {
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey.A200};
    padding: 10px 20px;

    @media (max-width: 599px) {
      padding: 10px;
    }

    .chat-header-stack {
      .backto-chatmenu {
        padding: 0;
        min-height: 20px;
        min-width: 20px;
        color: ${({ theme }) => theme.palette.primary.main};

        svg {
          font-size: 16px;
        }
      }
      .chat-header-avtRight {
        width: calc(100% - 40px);
        padding-left: 10px;
        line-height: 1.1;

        @media (max-width: 599px) {
          width: calc(100% - 30px);
        }

        p {
          font-weight: 600;
        }

        span {
          font-size: 12px;
        }
      }
    }

    .chat-header-right {
      gap: 5px;

      .MuiIconButton-root {
        min-width: 40px;
        min-height: 40px;
        padding: 0;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.palette.customColors.primary500};

        @media (max-width: 599px) {
          min-width: 30px;
          min-height: 30px;
        }

        svg {
          @media (max-width: 599px) {
            font-size: 18px;
          }
        }
      }
    }
  }

  .msg-scroll {
    height: calc(100svh - 288px);

    @media (max-width: 1199px) {
      height: calc(100svh - 266px);
    }

    @media (max-width: 599px) {
      height: calc(100svh - 249px);
    }

    .msg-inner-gap {
      padding: 20px;

      @media (max-width: 599px) {
        padding: 20px 10px;
      }

      .msg-main {
        &:not(:last-child) {
          padding-bottom: 15px;
        }
      }
    }

    .scrollbar-track-y {
      @media (max-width: 599px) {
        background-color: transparent !important;
        width: 2px !important;
      }
    }
  }
`;

export const ChatMessageStack = styled(Stack)`
  gap: 10px;

  .msg-right-sec {
    width: calc(100% - 40px);

    @media (max-width: 599px) {
      width: calc(100% - 30px);
    }

    .msg-content {
      width: 100%;
      max-width: 88%;

      .msg-info {
        .text-msg {
          padding: 15px;
          border-radius: 10px;
          font-weight: 600;
          line-height: 1.2;

          @media (max-width: 599px) {
            padding: 8px;
            border-radius: 5px;
          }
        }

        .MuiIconButton-root {
          @media (max-width: 599px) {
            /* padding: 0; */
          }

          svg {
            @media (max-width: 599px) {
              font-size: 14px;
            }
          }
        }
      }

      &.receive-msg {
        .msg-info {
          .text-msg {
            background-color: ${({ theme }) => theme.palette.customColors.secondary700};
          }
        }
      }
      &.sent-msg {
        .msg-info {
          .text-msg {
            background-color: ${({ theme }) => theme.palette.primary.main};
            color: ${({ theme }) => theme.palette.common.white};
          }
        }
      }
    }
  }
`;

export const ChatBottomBox = styled(Stack)`
  width: calc(100% - 40px);
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.palette.grey.A400};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: 15px;
  border-radius: 15px;

  @media (max-width: 599px) {
    width: 100%;
    border-radius: 0;
  }

  .text-editor {
    width: 85%;

    .MuiInputBase-root {
      width: 100%;

      &::after,
      &::before {
        display: none;
      }
    }
  }

  .btn-group {
    gap: 5px;
    width: 15%;

    .MuiIconButton-root {
      min-height: 20px;
      min-width: 20px;
      padding: 0;

      svg {
        font-size: 16px;
      }
    }

    .msg-sendbtn {
      min-height: 35px;
      min-width: 35px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.palette.secondary.main};
      color: ${({ theme }) => theme.palette.common.white};
      padding: 0;

      svg {
        font-size: 16px;
      }
    }
  }
`;
