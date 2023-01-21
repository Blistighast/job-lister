import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Navbar from '../components/Navbar';


const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}


export default RootLayout