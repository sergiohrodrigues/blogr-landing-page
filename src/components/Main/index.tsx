import { styled } from 'styled-components';
import imagem1 from './imagem1.svg';
import imagem1desktop from './imagem1-desktop.svg';
import imagem2 from './imagem2.svg';
import imagem2desktop from './imagem2-desktop.svg';
import imagem3 from './imagem3.svg';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const MainContainer = styled.main`
  margin-top: 4rem;
  text-align: center;
  h3{
    font-size: 1.5rem;
    padding: 0 1.3rem;
    font-weight: 600;
    text-align: center;
    color: #3f586e;
    @media screen and (min-width: 834px){
      font-size: 2.5rem;
    }
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
  .imagemDupla{
    position: absolute;
  }
`;

const Section1 = styled.section`
  .imagem1{
    display: block;
  }
  .imagem1-1{
    display: none;
  }
  @media screen and (min-width: 768px){
    .imagem1{
      width: 80%;
      margin: 2rem auto;
    }
  }
  @media screen and (min-width: 1024px){
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 3rem;
    text-align: left;
    position: relative;
    div{
      padding: 0 4rem;
    }
    h3{
      font-size: 1.7rem;
      text-align: left;
    }
    .imagem1{
      display: none;
    }
    .imagem1-1{
      display: block;
      width: 50%;
    }
  }
`;

const Section2 = styled.section`
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
  @media screen and (min-width: 768px){
    display: flex;
    margin-top: 8rem;
    padding: 6rem 0;
    .divImagem{
      top: -25%;
      margin-left: 3%;
      width: auto;
      img{
        width: 60%;
      }
  }
    div{
      height: auto;
      margin-left: 45%;
      display: flex;
      flex-direction: column;
      align-items: start;

      h3{
        margin: 0;
      }
      p{
        padding-right: 10rem;
        text-align: left;
        margin-top: 2rem;
      }
    }
}
  @media screen and (min-width: 1024px){
    .divImagem{
      top: -50%;
      margin-left: 3%;
      width: auto;
      img{
        width: 100%;
      }
  }
}
`;

const Section3 = styled.section`
  .imagem3desktop{
    display: none;
  }
  @media screen and (min-width: 1024px){
    display: flex;
    align-items: center;
    margin-top: 10rem;
    .imagem3desktop{
      display: block;
      margin-left: -19%;
    }
    .imagem3{
      display: none;
    }

    section{
      display: flex;
      flex-direction: column;
      gap: 4rem;
      div{
        text-align: left;
        h3{
          margin: 0 0 1rem 0;
          text-align: left;
        }
        p{
          padding-right: 10rem;
        }
      }
    }
  }
`;

export default function Main(){
  // const carouselRef = useRef(null);

  // const { scrollX } = useScroll({
  //   container: carouselRef
  // });
  
  // return (
  //   <div ref={carouselRef}>
  //     {children}
  //   </div>
  // )

  return(
  // <div ref={carouselRef}>

    <MainContainer>
      <h3>Designed for the future</h3>

      <Section1>
        <img src={imagem1} className='imagem1' alt="desktop" />
        <img
          src={imagem1desktop} 
          className='imagem1-1' 
          alt="desktop" 
        />
        <section>
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select . You can choose either a full-height screenshot or a cropped one based on how long the page is. sdfs very long, it might be best to crop it.</p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped.</p>
          </div>
        </section>
      </Section1>

      <Section2>
        <div className='divImagem'>
          <img src={imagem2} alt="2 smartphones" />
        </div>
        <div>
          <h3>State of the Art Infrastructure</h3>
          <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped one.</p>
        </div>
      </Section2>

      <Section3>
        <img src={imagem3} className='imagem3' alt="laptop" />
        <img
          src={imagem2desktop} 
          className='imagem3desktop' 
          alt="laptop" 
        />
        <section>
          <div>
            <h3>Free, open, simple</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You can choose either a full-height screenshot or a cropped.</p>
          </div>
          <div>
            <h3>Powerful tooling</h3>
            <p>Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select. You.</p>
          </div>
        </section>
      </Section3>
    </MainContainer>
    // </div>
  );
}