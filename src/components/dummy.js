import React, {useContext, useEffect, useState} from "react";
import {StoreServiceContext} from "./store-service-context/store-service-context";



const Dummy = () => {
    const [article, setArticle] = useState({});
    const [id, setId] = useState(0);


    const value = useContext(StoreServiceContext);

    useEffect()
    useEffect(() => {setArticle(value.getServiceListItem(0))}, [id, value]);

    return(
        <div>
            {id}
            <input type='text' onChange={() => on}/>
            <button onClick={}>+</button>
        </div>

    )
};

export default Dummy