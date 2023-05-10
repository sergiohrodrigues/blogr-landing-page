import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 5rem;
  background-color: #393a56;
  padding: 3rem 0;
  text-align: center;
  border-radius: 0 5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  span{
    font-family: 'ubuntu', sans-serif;
    font-size: 1.7rem;
    color: #fff;
  }
  div{
    label{
      color: #fff;
    }
    ul{
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li{
        color: #989c9f;
      }
    }
  }
`;

export default function Footer(){
  return(
    <FooterContainer>
      <span>Blogr</span>
      <div>
        <label>Product</label>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marktplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div>
        <label>Company</label>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div>
        <label>Connect</label>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </FooterContainer> 
  );
}