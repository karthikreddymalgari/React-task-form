import React, { useState } from 'react'
import Edit from './Edit';
import Form from './Form';


const NewBlog = (props) => {

    const saveDataHandler = (enterednewData) => {
        const Data = {
            ...enterednewData,
            key: Date.now()
        }

        // props.onAddData(Data);
    };
    console.log("NEWBLOG")
    return (
        <div>
            <Form
                onSaveData={saveDataHandler} />
        </div>
    )
}

export default NewBlog
