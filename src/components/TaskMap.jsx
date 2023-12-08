/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import useFetchGroup from '../hooks/UseFetchGroup';

// eslint-disable-next-line react/prop-types
const TaskMap = ({ changeGlobalState }) => {

    const [selectedGroup, setSelectedGroup] = useState(null)

    const [isPendingAdd, setIsPendingAdd] = useState(false)

    const [groups, setGroups] = useState([]);
    const { isPending, error } = useFetchGroup('http://localhost:3030/group', setGroups);

    const getSelectedGroup = () => {
        fetch('http://localhost:3030/selectedGroup', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not select the group !');
                }
                return res.json();
            })
            .then((data) => {
                setSelectedGroup((data[0] != null && data[0] != undefined) ? data[0] : null)
                console.log('The group is selected', selectedGroup);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }


    useEffect(() => {
        // This code will run when the component mounts
        console.log('Component has mounted!');

        // You can call your function here
        { !selectedGroup && getSelectedGroup() }

        // If you have a cleanup function, you can return it from the effect
        // This will be run when the component unmounts
        return () => {
            // Cleanup code (if needed)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const selectGroup = (id) => {
        if (id === null) {
            console.log('id selected group is null');
            return
        }
        let selected = groups.find((group) => group.id === id);
        let data = {
            "id": 1,
            "id_group": id,
            "title": selected.title,
        }

        //get selected group check if is null
        fetch('http://localhost:3030/selectedGroup', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            if (!res.ok) {
                throw Error('Could not select the group !');
            }
            return res.json();
        })
            .then((dataresp) => {
                setSelectedGroup((dataresp[0] != null && dataresp[0] !== undefined) ? dataresp[0] : null)

                console.log('The group is selected', selectedGroup);
                //if the date is null post
                if (selectedGroup !== null && dataresp[0] !== undefined) {
                    setSelectedGroup(data)
                    fetch('http://localhost:3030/selectedGroup/1', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw res.status;
                            }
                            return res.json();
                        })
                        .then((datarespons) => {
                            changeGlobalState();
                        })
                } else {
                    setSelectedGroup(data)
                    fetch('http://localhost:3030/selectedGroup', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw Error('Could not add the data !');
                            }
                            return res.json();
                        })
                        .then((datarespons) => {
                            changeGlobalState();
                            console.log('The group is selected', data);
                        })
                }
            })
            .catch((err) => {
                console.log(err.message);
            });




    }

    const [createdGroup, setCreatedGroup] = useState('')

    const creatNewGroup = async (e) => {
        e.preventDefault();
        // Check if title and description are not empty
        if (createdGroup.trim() === '') {
            alert('Please enter Group tasks name.');
            // AddElement();
            return;
        }
        setIsPendingAdd(true);
        setTimeout(() => {
            ///// fetching /////
            fetch('http://localhost:3030/group', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        'title': createdGroup
                    }
                ),
            })
                .then((res) => {
                    if (!res.ok) {
                        setIsPendingAdd(false);
                        throw Error('Could not add the data !');
                    }
                    setIsPendingAdd(false);
                    return res.json();
                })
                .then((data) => {
                    setGroups([...groups, data]);
                    console.log('New Group added', data);
                })
                .catch((err) => {
                    setIsPendingAdd(false);
                    console.log(err.message);
                });
        }, 0);



        setCreatedGroup('');
    }

    const deleteGroup = (id) => {

        //if is selected group and is the last group
        //if is selected group and is not the last group
        //if is not selected group and is the last group
        //if is not selected group and is not the last group

        if ((selectedGroup !== null) && (selectedGroup !== undefined) && (selectedGroup.id_group === id)) {
            //delete the selected group
            fetch('http://localhost:3030/selectedGroup/1',
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not delete the group !');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('The group is deleted', data);
                    setSelectedGroup(null);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }

        fetch('http://localhost:3030/group/' + id, {
            method: 'DELETE'
        }).then((e) => {
            if (!e.ok) {
                throw Error('error');
            }
            setGroups(groups.filter((group) => group.id !== id));
            //delete tasks of this group
            fetch('http://localhost:3030/tasks', {
                method: 'GET'
            }).then((e) => {
                if (!e.ok) {
                    throw Error('error');
                }
                return e.json();
            }
            ).then((data) => {
                console.log("this is tasks of deleted group :" + data);
                if (data.length === 0) {
                    console.log('no tasks to delete');
                    return
                }
                for (let i = 0; i < data.length; i++) {
                    let element = data[i];
                    if (element.group === id) {
                        fetch('http://localhost:3030/tasks/' + element.id, {
                            method: 'DELETE'
                        }).then((e) => {
                            if (!e.ok) {
                                throw Error('error');
                            }
                            console.log('task deleted');
                        })
                    }
                }
            })
            //change notifaication
            changeGlobalState();
            console.log('group deleted');
        }
        ).catch((e) => {
            console.log(e);
        })



    }






    return (
        <>
            <div className="map-contanter">
                <form onSubmit={creatNewGroup}>
                    <input placeholder="Create New Gruop Tasks" className="new-group" type="text" onChange={(e) => setCreatedGroup(e.target.value)} value={createdGroup} />
                    <button className='create-new-group' disabled={isPendingAdd}>+</button>
                </form>

                <div className="group-list" >
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {groups &&
                        groups.map((item, index) => (
                            <div key={index} className={(selectedGroup !== null && (selectedGroup?.id_group === item.id)) ? 'selected-group' : 'group-item'} onClick={() => selectGroup(item.id)}>
                                <h6>{item.title}</h6>
                                <button className='delete-button' onClick={(e) => { e.stopPropagation(); deleteGroup(item.id) }}>
                                    <div className="crose-icon">
                                    </div>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
}

export default TaskMap;