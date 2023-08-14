import { Route, Routes, Link, NavLink } from 'react-router-dom';
import './App.css';
import { Styled, styled } from 'styled-components';
import { Products } from './pages/Products';
import { Detail } from './pages/Detail';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <HeaderStyle>
        <NavStyle>
          <div>
            <Link to="/" className="link">
              iStore
            </Link>
          </div>
          <LinkContainer>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Products
            </NavLink>
            <NavLink
              to="/myCart"
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              My cart
            </NavLink>
            <NavLink
              to="/myOrders"
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              My orders
            </NavLink>
          </LinkContainer>
        </NavStyle>
      </HeaderStyle>

      <Routes>
        <Route path="/products" element={<Products></Products>} />
        <Route path="/products/:productId" element={<Detail></Detail>} />
        <Route
          path="/"
          element={
            <div>
              <img
                src="https://www.apple.com/v/environment/n/images/meta/og__bghpqp9r7ewi.png?202203080231"
                alt="i"
                style={{ width: '100%', height: '86vh' }}
              />
            </div>
          }
        ></Route>
        <Route
          path="/myCart"
          element={
            <div>
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  border: '2px solid black',
                }}
              >
                <h3>My Cart...</h3>
              </div>
              <Button></Button>
            </div>
          }
        ></Route>
        <Route
          path="/myOrders"
          element={
            <div>
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  border: '2px solid black',
                }}
              >
                <h3>My Orders...</h3>
              </div>
              <Button></Button>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

const HeaderStyle = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 13vh;
  background-color: #00c8cf;
  padding: 10px 30px;
`;
const NavStyle = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .link {
    text-decoration: none;
    color: white;
    font-size: large;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export default App;
