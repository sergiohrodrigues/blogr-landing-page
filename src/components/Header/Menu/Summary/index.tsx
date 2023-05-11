import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface Props {
  item: string
}

export default function Summary({item} : Props){
  const [menuOpcoes, setMenuOpcoes] = useState(false);
  return(
    <summary onClick={() => setMenuOpcoes(!menuOpcoes)}>
      {item} {menuOpcoes 
        ? <IoIosArrowUp color='#ff866f' onClick={() => setMenuOpcoes(!menuOpcoes)}/>
        : <IoIosArrowDown color='#ff866f' onClick={() => setMenuOpcoes(!menuOpcoes)}/>
      }
    </summary>
  );
}