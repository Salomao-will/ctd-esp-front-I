import { Outlet } from 'react-router-dom';
import './style.sass';

export const MainLayout = () => {
  return (
    <>
      <header>
        <h1>Title</h1>

        <div className="signUp">
          <p>Salomão Santos</p>
          <button>Sair</button>
        </div>
      </header>
      <Outlet />
    </>
  )
}
