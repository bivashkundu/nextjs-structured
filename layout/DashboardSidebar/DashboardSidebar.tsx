import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import assest from '@/json/assest';
import { DashboardSidebarDrawer } from '@/styles/StyledComponents/DashboardParentStyled';
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface ISidebarProps {
  isSidebarExpanded?: boolean;
  bodyGap?: boolean;
  sidebarBottomSticky?: boolean;
  closeSidebarClick?: () => void;
}

interface INavSubItem {
  name: string;
  route: string;
}

const commonpath = '/dashboard';
const navItems: {
  name: string;
  route?: string;
  icon: React.ReactNode;
  submenu?: INavSubItem[];
}[] = [
  {
    name: 'Dashboard',
    route: `${commonpath}`,
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 01',
    icon: <DashboardIcon />,
    submenu: [
      { name: 'Report 01', route: '/dashboard/report01' },
      { name: 'Report 02', route: '/dashboard/report02' },
      { name: 'Report 02', route: '/dashboard/report02' },
      { name: 'Report 02', route: '/dashboard/report02' },
    ],
  },
  {
    name: 'Dashboard 02',
    route: '#url',
    icon: <DashboardIcon />,
    submenu: [
      { name: 'Report 01', route: '/dashboard/report01' },
      { name: 'Report 02', route: '/dashboard/report02' },
      { name: 'Report 02', route: '/dashboard/report02' },
    ],
  },
  {
    name: 'Message',
    route: `${commonpath}/message`,
    icon: <MarkunreadIcon />,
  },
  {
    name: 'Dashboard 04',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 05',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 06',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 07',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 08',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 09',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 10',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 11',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 12',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 13',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 14',
    route: '#url',
    icon: <DashboardIcon />,
  },
  {
    name: 'Dashboard 15',
    route: '#url',
    icon: <DashboardIcon />,
  },
];

export default function DashboardSidebar({
  isSidebarExpanded,
  bodyGap,
  sidebarBottomSticky,
  closeSidebarClick,
}: ISidebarProps) {
  const router = useRouter();
  const logoRef = useRef<HTMLDivElement>(null);
  const LogoutRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [getLogoSecHeight, setGetLogoSecHeight] = useState<number>(0);
  const [getLogoutSecheight, setGetLogoutSecheight] = useState<number>(0);
  const theme = useTheme();
  const tabScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [openMenus, setOpenMenus] = useState<string | null>(null);

  useEffect(() => {
    const logoHeight = logoRef.current?.clientHeight || 0;
    const logoutHeight = LogoutRef.current?.clientHeight || 0;
    setGetLogoSecHeight(logoHeight);
    setGetLogoutSecheight(logoutHeight);
  }, [isSidebarExpanded, sidebarBottomSticky]);

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => (prev === name ? null : name));
  };

  return (
    <DashboardSidebarDrawer
      ref={sidebarRef}
      logoutSecHeight={getLogoutSecheight}
      listHeight={getLogoSecHeight}
      sidebarBottomSticky={sidebarBottomSticky}
      className={isSidebarExpanded ? 'expanded' : 'collapsed'}
      bodyGap={bodyGap}
    >
      {tabScreen && (
        <IconButton className='closeSideBar' onClick={closeSidebarClick}>
          <Close />
        </IconButton>
      )}
      <Box className='logo_sec' ref={logoRef}>
        <Link href={`${commonpath}/dashboard`}>
          {isSidebarExpanded || tabScreen ? (
            <Image src={assest?.logo_img} alt='logo' width={38} height={38} />
          ) : (
            <Image src={assest?.logo_img} alt='logo' width={38} height={38} />
          )}
        </Link>
      </Box>
      <SmoothScroll className='scroll-area'>
        <List disablePadding className='sidebar_menu'>
          {navItems.map((item, index) => {
            const isActive = router.pathname === item.route;
            if (item.submenu) {
              const isOpen = openMenus === item.name;
              return (
                <>
                  <ListItem disablePadding key={index}>
                    <ListItemButton onClick={() => toggleMenu(item.name)} disableRipple>
                      <Stack direction='row' alignItems='center'>
                        <i className='menu-icon'>{item.icon}</i>
                        <span>{item.name}</span>
                      </Stack>
                      <span className='down-arrow'>{isOpen ? <ExpandLess /> : <ExpandMore />}</span>
                    </ListItemButton>
                    <List className={`sidebar-submenu ${isOpen ? 'open' : ''}`} disablePadding>
                      {item.submenu.map((sub, subIdx) => {
                        const isSubActive = router.pathname === sub.route;
                        return (
                          <ListItem
                            disablePadding
                            key={subIdx}
                            className={isSubActive ? 'active' : ''}
                            sx={{ pl: 4 }}
                          >
                            <Link href={sub.route}>{sub.name}</Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </ListItem>
                </>
              );
            }
            return (
              <>
                {item.route ? (
                  <ListItem
                    disablePadding
                    key={index}
                    className={`${isActive ? 'active' : ''} single-menu`}
                  >
                    <Link href={item.route}>
                      <i className='menu-icon'>{item?.icon}</i>
                      <span>{item?.name}</span>
                    </Link>
                  </ListItem>
                ) : null}
              </>
            );
          })}
        </List>
      </SmoothScroll>
      {sidebarBottomSticky && (
        <Box className='logout_block' ref={LogoutRef}>
          <Button href={`${commonpath}/dashboard`} startIcon={<LoginIcon />}>
            {'Logout'}
          </Button>
        </Box>
      )}
    </DashboardSidebarDrawer>
  );
}
