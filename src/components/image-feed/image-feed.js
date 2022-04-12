import styles from "./image-feed.module.css";
import { useSelector, useDispatch } from "react-redux";


export function ImageFeed({id}) {


    const items = useSelector((store) => store.items.data);
const data = items.find(data => data._id === id)

// console.log(data.image_mobile)

    return (
      
         <div className={styles.item} >
             { data && (<img className={styles.image} src={`${data.image}`} alt="" />)}
        
      </div>
      
    )
}