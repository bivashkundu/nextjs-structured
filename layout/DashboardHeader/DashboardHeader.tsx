import assest from '@/json/assest';
import { ThemeModeContext } from '@/mui-theme/MuiThemeProvider';
import { AvatarMenuBar, DashboardHeaderApp } from '@/styles/StyledComponents/DashboardParentStyled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useContext, useState } from 'react';

interface IheaderProps {
  headerTitle?: string;
  headerSubtitle?: string;
  sidebarExpandCollapsed?: boolean;
  onToggleSidebar?: () => void;
  className?: string;
  bodyGap?: boolean;
  switchTheme?: boolean;
}

export default function DashboardHeader({
  headerTitle,
  headerSubtitle,
  sidebarExpandCollapsed,
  onToggleSidebar,
  className,
  bodyGap,
  switchTheme,
}: IheaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuWidth, setMenuWidth] = useState<number>(0);
  const { mode, toggleMode } = useContext(ThemeModeContext);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    setAnchorEl(target);
    setMenuWidth(target.clientWidth);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DashboardHeaderApp
      direction='row'
      alignItems='center'
      flexWrap='wrap'
      className={className}
      bodyGap={bodyGap}
    >
      <Stack direction='row' alignItems='center' className='header-left'>
        {(sidebarExpandCollapsed || isMobileView) && (
          <IconButton className='expand-menu' onClick={onToggleSidebar} disableRipple>
            <MenuIcon />
          </IconButton>
        )}
        <Box className='header-title-box'>
          <Typography variant='h1'>{headerTitle}</Typography>
          <Typography variant='body1'>{headerSubtitle}</Typography>
        </Box>
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='flex-end'
        className='header-options'
      >
        {switchTheme && (
          <IconButton onClick={toggleMode} className='theme-btn'>
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        )}
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className='avatar_btn'
          disableRipple
          sx={{ minWidth: 'auto' }}
        >
          <Avatar
            src={assest.avatar}
            sx={{ width: { sm: 40, xs: 30 }, height: { sm: 40, xs: 30 } }}
          />
          <Box className='avt-pf' sx={{ display: { sm: 'block', xs: 'none' } }}>
            <Typography variant='h6' fontSize={'14px'}>
              Pollich Swift
            </Typography>
            <Typography variant='body1' fontSize={'12px'}>
              Sales
            </Typography>
          </Box>
        </Button>

        <AvatarMenuBar
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            '& .MuiPaper-root': {
              width: `${menuWidth}px`,
              '@media (max-width: 1199px)': {
                width: 'auto',
              },
            },
          }}
          slotProps={{ paper: { className: 'avtmenu-bar' } }}
        >
          <MenuItem onClick={handleClose}>My Profile </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </AvatarMenuBar>
      </Stack>
    </DashboardHeaderApp>
  );
}
