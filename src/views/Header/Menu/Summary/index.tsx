import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { styled } from 'styled-components';

const SummaryContainer = styled.summary`
  color: #000;
  .icon{
    color: #ff866f;
  }
  @media screen and (min-width: 834px){
    color: #fff;
    &:hover{
      cursor: pointer;
      text-decoration: underline #fff;
    }
    .icon{
      color: #fff;
    }
  }
`;

interface Props {
  item: string
}

export default function Summary({item} : Props){
  const [menuOpcoes, setMenuOpcoes] = useState(false);
  return(
    <SummaryContainer onClick={() => setMenuOpcoes(!menuOpcoes)}>
      {item} {menuOpcoes 
        ? <IoIosArrowUp className='icon' onClick={() => setMenuOpcoes(!menuOpcoes)}/>
        : <IoIosArrowDown className='icon' onClick={() => setMenuOpcoes(!menuOpcoes)}/>
      }
    </SummaryContainer>
  );
}