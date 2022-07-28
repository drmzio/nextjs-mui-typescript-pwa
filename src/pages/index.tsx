import type { NextPage } from 'next';
import { Box, Container } from '@mui/material';
import AppNavigation from '~/components/AppNavigation';
import Toolbar from '@mui/material/Toolbar';
import AppHeader from '~/components/AppHeader';

const Home: NextPage = () => {
  return (
    <Box
      sx={{ position: 'relative' }}
    >
      <AppHeader />
      <Toolbar />
      <Box
        component="main"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden'
        }}
      >
        <Container maxWidth="sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto at aut culpa deleniti deserunt ea excepturi fugiat molestiae nemo, officiis possimus quasi quia quis quo repudiandae tempore vel voluptas.</p>
        </Container>
      </Box>
      <AppNavigation />
    </Box>
  )
}

export default Home;
