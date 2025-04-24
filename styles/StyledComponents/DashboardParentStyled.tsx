import { Box, Menu, Stack, styled } from '@mui/material';

export const DashboardWrapperBox = styled(Stack, {
  shouldForwardProp: data => data !== 'bodyGap',
})<{
  bodyGap?: boolean;
}>`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  min-height: 100svh;

  .dashboard-right-body {
    width: ${({ bodyGap }) => (bodyGap ? 'calc(100% - 316px)' : 'calc(100% - 300px)')};
    margin-left: auto;
    padding: ${({ bodyGap }) => (bodyGap ? '102px 0 0 16px' : '86px 0 0 16px')};
    transition: 0.3s ease;
    overflow: hidden;

    @media (max-width: 1199px) {
      margin-left: 0 !important;
      width: 100% !important;
      padding-top: 88px;
    }

    @media (max-width: 599px) {
      padding-top: 71px;
    }

    .main-body-scroll {
      height: ${({ bodyGap }) => (bodyGap ? 'calc(100svh - 120px)' : 'calc(100svh - 88px)')};
      padding-right: 16px;

      @media (max-width: 1199px) {
        height: calc(100svh - 88px);
      }

      @media (max-width: 599px) {
        height: calc(100svh - 71px);
      }
    }

    &.right-collapse {
      margin-left: ${({ bodyGap }) => (bodyGap ? 'auto' : '100px')};
      width: ${({ bodyGap }) => (bodyGap ? 'calc(100% - 116px)' : 'calc(100% - 100px)')};
    }
  }
`;

export const DashboardHeaderApp = styled(Stack, { shouldForwardProp: data => data !== 'bodyGap' })<{
  bodyGap?: boolean;
}>`
  position: fixed;
  right: ${({ bodyGap }) => (bodyGap ? '16px' : 0)};
  top: ${({ bodyGap }) => (bodyGap ? '16px' : 0)};
  width: ${({ bodyGap }) => (bodyGap ? 'calc(100% - 348px)' : 'calc(100% - 300px)')};
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.customColors.lightPaperBg};
  transition: 0.3s ease-in-out;
  z-index: 2;

  @media (max-width: 1199px) {
    width: 100% !important;
    top: 0;
    right: 0;
  }

  @media (max-width: 599px) {
    padding: 15px;
  }

  .header-left {
    flex-basis: 65%;
    max-width: 65%;

    .expand-menu {
      background-color: ${({ theme }) => theme.palette.primary.main};
      padding: 0;
      min-height: 40px;
      min-width: 40px;

      @media (max-width: 599px) {
        min-height: 30px;
        min-width: 30px;
      }

      svg {
        color: ${({ theme }) => theme.palette.common.white};

        @media (max-width: 599px) {
          width: 18px;
          height: 18px;
        }
      }
    }

    .header-title-box {
      width: calc(100% - 40px);
      padding-left: 10px;

      @media (max-width: 599px) {
        width: calc(100% - 30px);
        padding-left: 5px;
      }

      h1 {
        font-weight: 600;
        font-size: 23px;

        @media (max-width: 599px) {
          font-size: 18px;
        }
      }

      p {
        @media (max-width: 599px) {
          font-size: 14px;
        }
      }
    }
  }

  .header-options {
    flex-basis: 35%;
    max-width: 35%;
    gap: 5px;

    .theme-btn {
      min-width: 40px;
      min-height: 40px;
      padding: 0;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.customColors.primary500};
      color: ${({ theme }) => theme.palette.customColors.dark};

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

    .avatar_btn {
      padding: 0;
      text-transform: inherit;

      &:hover {
        background-color: transparent;
      }

      .avt-pf {
        width: calc(100% - 40px);
        padding-left: 10px;
        text-align: left;

        h6 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 107px;
        }

        p {
          color: ${({ theme }) => theme.palette.customColors.textPrimary};
        }
      }
    }
  }

  &.header-collapse {
    width: ${({ bodyGap }) => (bodyGap ? 'calc(100% - 148px)' : 'calc(100% - 100px)')};
  }
`;

export const DashboardSidebarDrawer = styled(Box, {
  shouldForwardProp: data =>
    data !== 'bodyGap' &&
    data !== 'listHeight' &&
    data !== 'logoutSecHeight' &&
    data !== 'sidebarBottomSticky',
})<{
  bodyGap?: boolean;
  listHeight: number | undefined;
  logoutSecHeight: number | undefined;
  sidebarBottomSticky?: boolean;
}>`
  width: 300px;
  position: fixed;
  left: ${({ bodyGap }) => (bodyGap ? '16px' : 0)};
  top: ${({ bodyGap }) => (bodyGap ? '16px' : 0)};
  z-index: 5;
  background-color: ${({ theme }) => theme.palette.customColors.lightPaperBg};
  transition: 0.3s ease-in-out;

  @media (max-width: 1199px) {
    left: -15px;
    transform: translateX(-100%);
    top: 0;
  }

  .logo_sec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    min-height: 84px;

    a {
      display: inline-block;
    }
  }

  .scroll-area {
    height: ${({ listHeight, logoutSecHeight, sidebarBottomSticky, bodyGap }) =>
      sidebarBottomSticky
        ? bodyGap
          ? `calc(100svh - ${listHeight}px - ${logoutSecHeight}px - 32px)`
          : `calc(100svh - ${listHeight}px - ${logoutSecHeight}px)`
        : bodyGap
          ? `calc(100svh - ${listHeight}px - 32px)`
          : `calc(100svh - ${listHeight}px)`};

    @media (max-width: 1199px) {
      height: ${({ listHeight, logoutSecHeight, sidebarBottomSticky, bodyGap }) =>
        sidebarBottomSticky
          ? bodyGap
            ? `calc(100svh - ${listHeight}px - ${logoutSecHeight}px)`
            : `calc(100svh - ${listHeight}px - ${logoutSecHeight}px)`
          : bodyGap
            ? `calc(100svh - ${listHeight}px)`
            : `calc(100svh - ${listHeight}px)`};
    }
  }

  .sidebar_menu {
    padding: 0 20px 20px;

    .single-menu {
      a,
      button {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.5;
        width: 100%;
        justify-content: flex-start;
        padding: 15px;
        border-radius: 10px;
        color: ${({ theme }) => theme.palette.customColors.textPrimary};
        display: flex;
        align-items: center;

        &:hover {
          background-color: ${({ theme }) => theme.palette.customColors.primary500};
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }

      &.active {
        a,
        button {
          background-color: ${({ theme }) => theme.palette.customColors.primary500};
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }

    li {
      display: block;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  .menu-icon {
    line-height: 0;
    margin-right: 5px;

    svg {
      font-size: 20px;
    }
  }

  .logout_block {
    padding: 20px;

    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      width: 100%;
      justify-content: flex-start;
      padding: 15px;
      border-radius: 10px;
      color: ${({ theme }) => theme.palette.customColors.textPrimary};

      .MuiButton-startIcon {
        margin-left: 0px;
        margin-right: 12px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.palette.customColors.primary500};
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  .closeSideBar {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.common.white};
    position: absolute;
    right: -15px;
    top: 15px;
    padding: 5px;

    svg {
      font-size: 14px;
    }
  }

  .MuiListItemButton-root {
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    color: ${({ theme }) => theme.palette.customColors.textPrimary};
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.palette.customColors.primary500};
      color: ${({ theme }) => theme.palette.primary.main};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .sidebar-submenu {
    overflow: hidden;
    max-height: 0;
    transition: all 0.4s ease;
    opacity: 0;
    padding-left: 40px;

    &.open {
      max-height: 500px;
      opacity: 1;
      transition: all 0.4s ease;
    }

    li {
      padding: 0;
      margin-bottom: 0 !important;

      a {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 13px;
        line-height: 1.5;
        color: ${({ theme }) => theme.palette.customColors.textPrimary};
        position: relative;
        padding: 5px 5px 5px 20px;

        &::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          border: 1px solid ${({ theme }) => theme.palette.customColors.main};
          border-radius: 50%;
          left: 0;
          top: auto;
          bottom: auto;
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};

          &::before {
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
          }
        }
      }
    }
  }

  .down-arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    line-height: 0;
  }

  &.collapsed {
    width: 100px;

    @media (max-width: 1199px) {
      width: 300px;
      transform: translateX(0);
      left: 0;
    }

    .sidebar_menu {
      padding: 0 20px 20px;

      .single-menu {
        a,
        button {
          font-size: 0;
          justify-content: center;

          @media (max-width: 1199px) {
            font-size: 14px;
            justify-content: flex-start;
          }
        }
      }
    }

    .MuiButton-startIcon {
      margin-left: 0px;
      margin-right: 12px;
      font-size: 14px;
    }

    .logout_block {
      a {
        font-size: 0;

        @media (max-width: 1199px) {
          font-size: 14px;
        }
      }
    }

    .menu-icon {
      margin-right: 0;

      @media (max-width: 1199px) {
        margin-right: 6px;
      }
    }

    .MuiListItemButton-root {
      justify-content: center;
      font-size: 0;

      @media (max-width: 1199px) {
        font-size: 14px;
        justify-content: space-between;
      }

      .down-arrow {
        svg {
          width: 0;
          height: 0;

          @media (max-width: 1199px) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;

export const AvatarMenuBar = styled(Menu)`
  .avtmenu-bar {
    box-shadow: none;
    filter: none;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.palette.grey[100]};
    background-color: ${({ theme }) => theme.palette.customColors.lightPaperBg};
  }

  ul {
    padding: 10px;

    li {
      font-weight: 600;
      font-size: 14px;
      padding: 0 10px;
      margin-bottom: 6px;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;
