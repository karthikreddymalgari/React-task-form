import React, { useState } from 'react'
import '../App.css';
import { Button, Container, Row, Col, FormControl } from 'react-bootstrap';
import './Form.css';
import FullBlogList from './FullBlogList';

const Form = (props) => {

    const initialData = [];
    const [data, setData] = useState(initialData);

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState(true)
    const [formstatus, setFormStatus] = useState()

    const submitHandler = (event) => {
        event.preventDefault();

        if (title == "" || content == "" || author == "" || date == "") {
            alert("All fields are mandatory..")
        }
        else {
            const Data = {
                title: title,
                content: content,
                author: author,
                date: date,
                formstatus: formstatus
            }

            // props.onSaveData(Data);

            setData(prevData => ([...prevData, Data]))
            setTitle("")
            setContent("")
            setAuthor("")
            setDate("")

        }
    };

    const blogsHandler = () => {
        setStatus(false)
        setFormStatus(!formstatus)
    }

    console.log("FORM")
    return (
        <>
            {status ? <Container>
                <Row>
                    <Col>
                        <hr style={{ margin: 0 }} />
                        <h3 className="createBlog" style={{ margin: 0, padding: "8px" }}>{props.name ? props.name : "Create Blog"}</h3>
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
                        <Button type="submit" variant="primary" size="sm" style={{ width: "78px", marginLeft: "7px" }} active>Save Post</Button>
                        <div style={{ display: "flex" }}>

                            <Button variant="primary" size="sm" style={{ width: "105px" }} onClick={blogsHandler} active>See Blogs List</Button>
                        </div>
                    </form>
                </Row>
            </Container> :
                <FullBlogList item={data} />}
        </>
    )
}

export default Form
