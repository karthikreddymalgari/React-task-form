import React, { useState, useRef, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import Edit from './Edit';

const BlogDetails = (props) => {

    const removeButton = useRef(null);
    console.log("BlogDetails")
    let navigate = useNavigate();
    const [status, setStatus] = useState(true)
    const [blogname, setBlogName] = useState("Create Blog")
    const [editStatus, setEditStatus] = useState(false)
    // let { postid } = useParams()

    const deleteHandler = (i) => {
        setStatus(false)
        alert(`Blog ${i + 1} is deleted`)
    }
    const editHandler = (i) => {
        setEditStatus(true)
        setStatus(false)
        setBlogName(`Editting Blog ${i + 1}`)
    }

    console.log("BlogDetails")
    return (
        <div>
            {status ? <><Container>
                <Row>
                    <Col>
                        <hr style={{ margin: 0 }} />
                        <h3 className="createBlog" style={{ margin: 0, padding: "8px" }}>Blog Details {props.id + 1}</h3>
                        <hr style={{ margin: 0 }} />
                    </Col>
                </Row>
            </Container>
                <Container style={{ marginTop: "10px", marginBottom: "20px" }}>
                    <Row>
                        <Button variant="primary" size="sm" style={{ width: "78px", marginLeft: "7px" }} active onClick={() => { navigate("/form") }}>Back</Button>
                    </Row>
                    <Row>
                        <Col>
                            <strong style={{ fontSize: "22px" }}>{props.title}</strong>
                        </Col>
                        <Col>
                            <p style={{ fontSize: "22px" }}>{props.author}<span style={{ marginLeft: "10px" }}>{(props.date)}</span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <p style={{ textAlign: "justify", wordBreak: "break-word" }}>{props.content}</p>

                        </Col>
                        <Col style={{ alignSelf: "flex-end" }}>
                            <Button variant="primary" size="sm" style={{ width: "78px", marginLeft: "7px" }} active onClick={() => editHandler(props.id)}>EDIT</Button>
                            <Button variant="primary" size="sm" style={{ width: "78px", marginLeft: "7px" }} active onClick={() => deleteHandler(props.id)}>DELETE</Button>
                        </Col>
                    </Row>
                </Container></> : null}
            {editStatus ? <Edit elements={props} name={blogname} remove={removeButton} /> : null}
        </div>
    )
}

export default BlogDetails
