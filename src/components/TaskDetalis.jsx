import React from 'react'
import { useHistory, useParams } from 'react-router-dom';

import './TaskDetalis.css';

import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack()
    };


    return (  
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}> Voltar </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.TaskDetails} </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem eligendi harum nesciunt numquam reprehenderit 
                    dolorem tenetur nihil laboriosam. Adipisci porro rerum quasi officia, quaerat sit laboriosam! Doloribus, necessitatibus alias!
                </p>
            </div>
        </>
    );
}
 
export default TaskDetails;