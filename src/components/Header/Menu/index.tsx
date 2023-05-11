import { RiMenuFill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { styled } from 'styled-components';
import logo from '../logo.svg';
import { useState } from 'react';
import Summary from './Summary';

const MenuContainer = styled.header`
  padding: 0 1rem;
  position: relative;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBar = styled.nav`
  width: 90%;
  margin: 2rem auto 0 auto;
  background-color: #fff;
  position: absolute;
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-shadow: 0 5px 20px black;
  details{
    width: 90%;
    margin: 0 auto;
    summary{
      list-style: none;
      display: inline;
      font-size: 1.3rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    summary:active{
      color: #705862;
    }
    ul{
      margin: 1rem 0;
      background-color: #f1f5f9;
      border-radius: 0.5rem;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      li{
        font-weight: 600;
        list-style: none;
        width: 90%;
        color: #705862;
      }
    }
  }
  .traco{
    width: 90%;
    height: 1px;
    background-color: gray;
    margin: -1rem 0;
  }
  div{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    button{
      font-family: 'ubuntu', sans-serif;
      font-weight: 500;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
    }
    button:nth-child(2){
      padding: 0.5rem 2rem;
      border-radius: 2rem;
      color: #fff;
      background-image: linear-gradient(to right, #ff866f, red);
    }
  }
`;

export default function Menu(){
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <MenuContainer>
      <div>
        <img src={logo} alt="logo Blogr" />
        {menuOpen ? <GrClose size={30} color='#fff' onClick={() => setMenuOpen(!menuOpen)}/> : <RiMenuFill size={30} color='#fff' onClick={() => setMenuOpen(!menuOpen)}/>}
      </div>
      <NavBar style={menuOpen ? {display:'flex'} : {display:'none'}}>
        <details>
          <Summary item='Product' />
          <ul>
            <li>teste1</li>
            <li>teste2</li>
            <li>teste3</li>
            <li>teste4</li>
          </ul>
        </details>

        <details>
          <Summary item='Company'/>
          <ul>
            <li>teste1</li>
            <li>teste2</li>
            <li>teste3</li>
            <li>teste4</li>
          </ul>
        </details>

        <details>
          <Summary item='Connect'/>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </details>

        <div className='traco'></div>

        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>

      </NavBar>
    </MenuContainer>
  );
}