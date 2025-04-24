import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import { DashboardWrapperBox } from '@/styles/StyledComponents/DashboardParentStyled';
import { Box, StackProps } from '@mui/material';
import { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

interface IdashBoardProps extends StackProps {
  headerTitle?: string;
  headerSubtitle?: string;
  bodyGap?: boolean;
}

export default function DashboardWrapper({
  headerTitle,
  headerSubtitle,
  bodyGap,
  ...prop
}: IdashBoardProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(prev => !prev);
  };

  return (
    <DashboardWrapperBox bodyGap={bodyGap} {...prop}>
      <DashboardSidebar
        isSidebarExpanded={isSidebarExpanded}
        bodyGap
        sidebarBottomSticky
        closeSidebarClick={handleToggleSidebar}
      />
      <DashboardHeader
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        onToggleSidebar={handleToggleSidebar}
        className={isSidebarExpanded ? 'header-expand' : 'header-collapse'}
        sidebarExpandCollapsed
        bodyGap
        switchTheme
      />
      <Box
        className={`${isSidebarExpanded ? 'right-expand' : 'right-collapse'} dashboard-right-body`}
      >
        <SmoothScroll className='main-body-scroll'>{prop?.children}</SmoothScroll>
      </Box>
    </DashboardWrapperBox>
  );
}
