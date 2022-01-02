import React, { useState, useEffect } from 'react'
import Blogs from './Blogs'

const FullBlogList = (props) => {
    return (
        <div>
            <Blogs items={props.item} />
        </div>
    )
}

export default FullBlogList
