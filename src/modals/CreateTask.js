import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [datecreated, setDateCreated] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if (name === "taskName") {
            setTaskName(value)
        }if (name === "description"){
            setDescription(value) 
        }else {
            setDateCreated(value)
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["DateCreated"] = datecreated
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <Button className='btn-primary' onClick={handleSave}>Create</Button>{' '}
            <Button className='btn-danger' onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;