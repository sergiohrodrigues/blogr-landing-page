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
  @media screen and (min-width: 834px){
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 4rem;
    .menu{
      display: none;
    }
    #menuu{
      display: flex;
    }
  }
`;

const NavBar = styled.nav<{display : string}>`
  width: 90%;
  margin: 2rem auto 0 auto;
  background-color: #fff;
  position: absolute;
  text-align: center;
  padding: 2rem 0;
  display: ${props => props.display};
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-shadow: 0 5px 20px black;

  @media screen and (min-width: 834px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    position: static;
    margin: 0;
    padding: 0;
    gap: 0.5rem;
  }

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
      @media screen and (min-width: 834px){
        gap: 0;
      }
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
      @media screen and (min-width: 834px){
        position: absolute;
        width: 20%;
        align-items: flex-start;
      }
      li{
        font-weight: 600;
        list-style: none;
        width: 90%;
        color: #705862;
        @media screen and (min-width: 834px){
          margin-left: 2rem;
          text-align: left;
          &:hover{
            cursor: pointer;
            color: #000;
          }
        }
      }
    }
  }
  .traco{
    width: 90%;
    height: 1px;
    background-color: gray;
    margin: -1rem 0;
    @media screen and (min-width: 834px){
      display: none;
    }
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
      @media screen and (min-width: 834px){
        color: #fff;
        &:hover{
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    button:nth-child(2){
      padding: 0.5rem 2rem;
      border-radius: 2rem;
      color: #fff;
      background-image: linear-gradient(to right, #ff866f, red);
      @media screen and (min-width: 834px){
        background-image: none;
        background-color: #fff;
        color: #ff866f;
        &:hover{
          background-color: #ec5a3d;
          color: #fff;
          text-decoration: none;
        }
      }
    }
    @media screen and (min-width: 834px){
      flex-direction: row;
    }
}
`;

export default function Menu(){
  const [menuOpen, setMenuOpen] = useState(true);

  return(
    <MenuContainer>
      <div>
        <img src={logo} alt="logo Blogr" />
        {menuOpen ? <RiMenuFill size={30} className='menu' color='#fff' onClick={() => setMenuOpen(!menuOpen)}/> : <GrClose size={30} className='menu' color='#fff' onClick={() => setMenuOpen(!menuOpen)}/>}
      </div>
      <NavBar 
        display={menuOpen ? 'none' : 'flex'}
      >
        <div>
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
        </div>

        <div className='traco'></div>

        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>

      </NavBar>
    </MenuContainer>
  );
}