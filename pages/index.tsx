import Wrapper from '@/layout/wrapper/Wrapper';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <Wrapper>
      <Typography variant='h1'>Recycle your tech, we’ll pay you cash.</Typography>
      <Typography variant='h2'>Recycle your tech, we’ll pay you cash.</Typography>
      <Typography variant='h3'>Recycle your tech, we’ll pay you cash.</Typography>
      <Typography variant='h4'>Recycle your tech, we’ll pay you cash.</Typography>
      <Typography variant='h5'>Recycle your tech, we’ll pay you cash.</Typography>
      <Typography variant='h6'>Recycle your tech, we’ll pay you cash.</Typography>
      <CustomButtonPrimary variant='contained' color='primary'>
        Button
      </CustomButtonPrimary>
    </Wrapper>
  );
}
