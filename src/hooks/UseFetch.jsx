import { useEffect, useState } from "react";
/**
 * useFetch 
 * ---------
 * 
 * is hook take url of selected group 
 * 
 * and update the selected gruop and tasks of that group 
 * 
 * @param globalState - is to update tasks when the global state is changed
 * 
 */
const useFetch = (url,setTasks ,setSelectedGroup,globalState) => {

    // const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    // console.log(res);
                    return res.json();
                })
                .then(data => {
                   console.log(data);
                   setSelectedGroup(data[0]);
                 if(data[0])
                   {fetch('http://localhost:3030/tasks?group='+data[0].id_group)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('could not fetch the data for that resource');
                        }
                        // console.log(res);
                        return res.json();
                    }).then(data => {
                        setTasks(data);
                        setIsPending(false);
                        setError(null);
                    })}else{
                        setSelectedGroup(null);
                        setTasks([]);
                        setIsPending(false);
                        setError(null);
                    }
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                        // console.log(err.message)
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 0);

        return () => abortCont.abort();
    }, [url,setTasks ,setSelectedGroup ,globalState]);

    return {  isPending, error };
}

export default useFetch
