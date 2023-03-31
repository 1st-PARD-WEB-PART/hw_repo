import { Outlet } from 'react-router-dom';
import Button from '../components/GeneralButton.js';
import DangerButton from '../components/DangerButton.js';

const Layout = () => {
  return (
    <div>
      <Button>Login</Button>
      <DangerButton>Logout</DangerButton>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;