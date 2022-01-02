import React, { useState, useEffect } from 'react'
import BlogDetails from './BlogDetails'



const Blogs = (props) => {

    console.log("Blog")
    return (
        < div >
            {
                props.items.map(
                    (item, index) => (
                        <BlogDetails
                            key={index}
                            id={item.id ? item.id : index}
                            title={item.title}
                            content={item.content}
                            author={item.author}
                            date={item.date}
                        />
                    )
                )
            }
        </div >
    )
}

export default Blogs
