import { RiMenuFill } from 'react-icons/ri';
import { styled } from 'styled-components';

const MenuContainer = styled.header`
  padding: 0 1rem;
  position: relative;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span{
    font-family: 'Ubuntu', sans-serif;
    font-size: 2rem;
    color: #fff;
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
  return(
    <MenuContainer>
      <div>
        <span>Blogr</span>
        <RiMenuFill size={30} color='#fff'/>
      </div>
      <NavBar style={{display: 'none'}}>
        <details>
          <summary>Product</summary>
          <ul>
            <li>teste1</li>
            <li>teste2</li>
            <li>teste3</li>
            <li>teste4</li>
          </ul>
        </details>

        <details>
          <summary>Company</summary>
          <ul>
            <li>teste1</li>
            <li>teste2</li>
            <li>teste3</li>
            <li>teste4</li>
          </ul>
        </details>

        <details>
          <summary>Connect</summary>
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