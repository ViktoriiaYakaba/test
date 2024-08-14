import { BsWind } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import css from './Equipment.module.css';

const Equipment = () => {
  return (
    <div className={css.container}>
          <h3 className={css.title}>Vehicle equipment</h3>
          <p className={css.text}>Filters</p>
          <ul className={css.list}>
            <li className={css.listItem}><BsWind size={32}/><p className={css.textList}>AC</p></li>
            <li className={css.listItem}><TbAutomaticGearbox size={32} /><p>Automatic</p></li>
            <li className={css.listItem}><TbToolsKitchen2 size={32}/>Kitchen</li>
            <li className={css.listItem}><PiTelevisionSimple size={32} />TV</li>
            <li className={css.listItem}><LuShowerHead size={32} />Shower/WC</li>
          </ul>
    </div>
  )
}

export default Equipment
