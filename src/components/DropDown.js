import { Link } from 'react-router-dom';
import styles from '../styles/DropDown.module.css';

function DropDown({payload}) {


    return (
      <div className={styles.Drop_Down_Container}>
        {
              
          payload.map((element) => {

            if(element.function){
              return(
              <div onClick={element.function} key={element.id} className={styles.link} > 
                <div className={styles.Drop_Down_Button} >{element.name}</div>
              </div>
              )
            }
            else{
            return (
              <Link to={element.href} key={element.id} className={styles.link} > 
                <div className={styles.Drop_Down_Button} >{element.name}</div>
              </Link>
          )
        }

        })
              
        }
      </div>
    )

}



export default DropDown