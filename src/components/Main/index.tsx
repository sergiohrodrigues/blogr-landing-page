import { styled } from 'styled-components';
import imagem1 from './imagem1.svg';
import imagem2 from './imagem2.svg';
import imagem3 from './imagem3.svg';

const MainContainer = styled.main`
margin-top: 4rem;
text-align: center;
  h3{
    font-size: 1.5rem;
    padding: 0 1.3rem;
    font-weight: 600;
    text-align: center;
    color: #3f586e;
  }
  p{
    padding: 0 1.5rem;
    margin: 1rem 0 2rem 0;
    color: #989c9f;
  }
  img{
    width: 100%;
    text-align: center;
    margin: 2rem 0;
  }
  section:nth-child(3){
    margin-top: 15rem;
    background-color: #393a56;
    border-radius: 0 5rem 0 5rem;
    padding: 10rem 0 3rem 0;
    position: relative;
    .divImagem{
      width: 300px;
      position: absolute;
      top: -50%;
      left: 0;
    }
    h3{
      color: #fff;
    }
  }
  .imagemDupla{
    position: absolute;
  }
`;

export default function Main(){
  return(
    <MainContainer>
      <h3>Designed for the future</h3>
      <section>
        <div>
          <img src={imagem1} alt="desktop" />
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select . You can choose either a full-height screenshot or a cropped one based on how long the page is. sdfs very long, it might be best to crop it.</p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className='divImagem'>
            <img src={imagem2} alt="2 smartphones" />
          </div>
          <div>
            <h3>State of the Art Infrastructure</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped one.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <img src={imagem3} alt="laptop" />
          <div>
            <h3>Free, open, simple</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped.</p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You.</p>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}