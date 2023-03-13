import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import apiRequest from './hook/apiRequest';
import Image from './img/background.jpg';


export default function Rate (){
    const dispatch = useDispatch() 
    const feedback =  useSelector(state => state.feedback);
    const [value, setValue] = useState("")

    const {data} = useQuery("todo",()=>   apiRequest('GET', "todo"))  

    function addFeedback(e){
        e.preventDefault();
        const newValue = value

        dispatch({type : "addFeedback", data:newValue})
        setValue("")
    }
    return(
       
        <div  className='maintodo'>
            <h1> To Do List</h1>
            <div>
                {
                    (data || []).map((item) => {
                        if(item.id<6) return (
                            <div className='task-div' key={item.id}>
                                <input className='check-input' type="checkbox"/>
                                <span >{item.todo}</span>
                            </div>   
                        ); else return ''
                    })
                }
            </div>

            <div className='addcomment'>
                <input className='check-input' type="checkbox"/>
                <div className='feedbackDiv'>{feedback}</div>  
            </div>
           
            <form onSubmit={addFeedback}>
                <input
                type="text"
                value = {value} 
                onChange={e => setValue(e.target.value)}
                />
            </form>
             
        </div>
       
    )
}
