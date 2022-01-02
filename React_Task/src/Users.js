
import React, { useState, useRef, useEffect, useContext } from "react"
import FullBlogList from "./components/FullBlogList";
import NewBlog from './components/NewBlog';
import NewEditBlog from "./components/NewEditBlog";

function Users() {

    const LOCAL_STORAGE_KEY = "data"
    const initialData = [];
    const [data, setData] = useState(initialData);
    const [valid, setValid] = useState(true);
    const onAddDataHandler = (d) => {
        setData(prevData => ([...prevData, d]))
    }
    useEffect(() => {
        const retrieveData = JSON.parse((localStorage.getItem(LOCAL_STORAGE_KEY)));
        if (retrieveData) setData(retrieveData);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }, [data])

    var validResult = data.map(i => i.formStatus ? setValid(i.formStatus) : null)
    console.log("USERS")
    return (
        <div>
            <>
                <FullBlogList item={data} />
                {valid ? <NewEditBlog onAddData={onAddDataHandler} />
                    : <NewBlog onAddData={onAddDataHandler} />}
            </>
        </div>
    );
}

export default Users;
