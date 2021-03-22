import React,{useState} from 'react';

const Hotels = ({item}) => {

    const[isShow, setIsShow] = useState(false)

    return (
        <div>
            <h3>{item.name}</h3>
            <button onClick={() => setIsShow(!isShow)}>{isShow ? 'Show less' : 'Show more'}</button>
            {isShow && 
            <div>
             <p>{item.city}</p>
             <p>{item.stars}</p>
            </div>}
        </div>
   
    )
}

export default Hotels