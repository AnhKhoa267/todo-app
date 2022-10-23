import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [datecreated, setDateCreated] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === "taskName") {
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name) 
        setDescription(taskObj.Description)
        setDateCreated(taskObj.DateCreated)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['DateCreated'] = datecreated
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
            <form>
            <div className="form-group">
                <label>Task Name</label>
                <input type="text" className= "form-control" value = {taskName} onChange = {handleChange} name ="taskName"/>
            </div>
            <div className="form-group">
                <label>Date Created</label>
                <input type="text" className= "form-control" value = {datecreated} onChange = {handleChange} name ="datecreated"/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea rows="5" className= "form-control" value= {description} onChange = {handleChange} name ="description"></textarea>
            </div>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
};

export default EditTask;