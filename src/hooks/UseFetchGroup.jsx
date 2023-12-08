import { useState, useEffect } from 'react';
const useFetchGroup = (url,setGroups) => {

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
                     setGroups(data);
                    //  setGlobalState(1);
                     console.log(data);
                   setIsPending(false);
                   setError(null);
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
    }, [url ,setGroups]);

    return {  isPending, error };
}
 
export default useFetchGroup;