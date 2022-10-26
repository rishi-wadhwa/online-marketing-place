import products from './products';
import { useState, useEffect, useRef} from 'react';
import shuffle from './../utils/shuffle';

function useProductSection(section) {
    const StateObjects = useRef([]);
    const [value, setValue] = useState(0);
    

    useEffect(() => {
        let counter = 0;

        let newArray = shuffle([...products]);

        newArray.forEach((item) => {
            if(item.section === section.current && counter < 4){
                StateObjects.current.push(item);
                counter ++;
            }
        })

        setValue(value => value + 1);
    }, [section])



    return StateObjects.current;
}

export default useProductSection