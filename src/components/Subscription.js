import React,{useState} from 'react';

const Subscription = ({item}) => {

    const [email, setEmail] = useState('')
    const [isSucces, setIsSucces]= useState(false)
   

    


    const emailVal = (str) => {
        return str.includes('@') && str.includes('.')
      }

     
       
   
    return (
        <div>
            {/* <button disabled={!emailVal(email)} >{`Request more info about ${item.name}`}</button> */}
            <input type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            />
               {isSucces && 
            <h2>Subscribed</h2>}
        </div>
    )
}

export default Subscription



  