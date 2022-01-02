
// import React, { useState, useRef, useEffect, useContext } from "react"
// import NewBlog from './NewBlog';
// import NewEditBlog from "./NewEditBlog";

// function User2() {

//     const LOCAL_STORAGE_KEY = "data"
//     const initialData = [];
//     const [data, setData] = useState(initialData);
//     // const [valid, setValid] = useState(true);
//     const onAddDataHandler = (d) => {
//         setData(prevData => ([...prevData, d]))
//     }
//     useEffect(() => {
//         const retrieveData = JSON.parse((localStorage.getItem(LOCAL_STORAGE_KEY)));
//         if (retrieveData) setData(retrieveData);
//     }, [])

//     useEffect(() => {
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
//     }, [data])

//     // var validResult = data.map(i => i.formStatus ? setValid(i.formStatus) : null)
//     console.log("calling..")
//     return (
//         <div>
//             <NewBlog onAddData={onAddDataHandler} />
//         </div>
//     );
// }

// export default User2;


import React from 'react'

const User2 = (Component) => {
    return (
        class extends React.Component {
            render() {
                return (
                    <div>
                        {/* <Component /> */}
                    </div>
                )
            }
        }
    )
}

export default User2;

