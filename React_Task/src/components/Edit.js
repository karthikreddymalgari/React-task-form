import React, { useState, useRef } from 'react'
import '../App.css';
import { Button, Container, Row, Col, FloatingLabel, FormControl } from 'react-bootstrap';
import './Form.css';
import FullBlogList from './FullBlogList';

const Edit = (props) => {
    const removeButton = useRef(null)
    const initialData = [];
    const [data, setData] = useState(initialData);
    const [title, setTitle] = useState(props.elements.title)
    const [content, setContent] = useState(props.elements.content)
    const [author, setAuthor] = useState(props.elements.author)
    const [date, setDate] = useState(props.elements.date)
    const [id, setId] = useState(props.elements.id)
    const [status, setStatus] = useState(true)
    const [formstatus, setFormStatus] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault();

        const Data = {
            title: title,
            content: content,
            author: author,
            date: date,
            id: id,
            formstatus: formstatus,
        }

        setData(prevData => ([...prevData, Data]))
        setTitle("")
        setContent("")
        setAuthor("")
        setDate("")
        setStatus(false)
        removeButton.current.style.display = "none"
    };

    const blogsHandler = () => {
        setStatus(false)
    }

    console.log("EDIT")
    return (
        <>
            {status ? <Container>
                <Row>
                    <Col>
                        <hr style={{ margin: 0 }} />
                        <h3 className="createBlog" style={{ margin: 0, padding: "8px" }}>{props.name}</h3>
                        <hr style={{ margin: 0 }} />
                    </Col>
                </Row>
                <Row>
                    <form className="row g-3" onSubmit={submitHandler}>
                        <div className="col-auto">
                            <input type="text" className="form-control" id="title" placeholder="Title" value={title} style={{ borderRadius: 0 }} onChange={(e) => setTitle(e.target.value)} autoComplete='off' />
                        </div>
                        <div className="row-auto">
                            <FormControl
                                as="textarea"
                                placeholder="Content"
                                style={{ height: '200px', resize: "none" }}
                                value={content} onChange={(e) => setContent(e.target.value)} autoComplete='off'
                            />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" id="author" placeholder="Author" value={author} style={{ borderRadius: 0 }} onChange={(e) => setAuthor(e.target.value)} autoComplete='off' />
                        </div>
                        <div className="col-auto">
                            <input type="Date" className="form-control" id="date" placeholder="Date" value={date} style={{ borderRadius: 0 }} onChange={(e) => setDate(e.target.value)} autoComplete='off' />
                        </div>
                        <Button type="submit" variant="primary" size="sm" style={{ width: "115px", marginLeft: "7px" }} active>Update Blog</Button>
                        <div style={{ display: "flex" }}>

                            <Button variant="primary" size="sm" style={{ width: "105px", marginBottom: "10px", display: props.remove ? "none" : null }} onClick={blogsHandler} ref={removeButton} active>See Blogs List</Button>
                        </div>
                    </form>
                </Row>
            </Container> :
                <FullBlogList item={data} />}
        </>
    )
}

export default Edit
