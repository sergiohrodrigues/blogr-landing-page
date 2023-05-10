import { styled } from 'styled-components';
import Menu from './Menu';

const HeaderContainer = styled.section`
  padding: 2rem 0 6rem 0;
  background-image: url('/images/fundo-menu-mobile.svg');
  background-color: #ff866f;
  border-radius: 0 0 0 5rem;
  background-size: auto;
  background-repeat: no-repeat;
  section{
    margin-top: 4rem;
    h1{
      font-weight: 600;
      font-size: 1.8rem;
      text-align: center;
      line-height: 2.2rem;
      padding: 0 1.8rem;
      color: #fff;
    }
    p{
      margin-top: 0.5rem;
      text-align: center;
      padding: 0 1rem;
      color: lightgray;
    }
    div{
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      button{
        font-family: 'ubuntu';
        font-weight: 700;
        padding: 0.8rem 1.5rem;
        border: none;
        background: transparent;
        border-radius: 1.5rem;
      }
      button:nth-child(1){
        background-color: #fff;
        color: orange;
      }
      button:nth-child(2){
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Menu />
      <section>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online branc</p>
        <div>
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </section>
    </HeaderContainer>
  );
}