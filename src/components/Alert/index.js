import React, { useState, useEffect } from "react";
import { theme } from "../../config/mainTheme"
import ResponseTable from "../../components/ResponseTable";
import { Container } from "./style";
import Button from '../../components/Button';
import Title from '../../components/Title';
import { ClipLoader } from "react-spinners";
import { Form, Field, Formik } from "formik";
import * as Yup from 'yup'
import { createResponse, editResponse } from "../../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Alert(props) {
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        setIsDeleting(props.deleteing);
    }, [props.deleteing])
    return (

        <Container>
            <div class="modal-content">
                {isDeleting ?
                    <div>
                        <ClipLoader
                            size={100}
                            color={theme.mainColor1}
                        />
                        <h3 className='title'>Đang xoá response...</h3>
                    </div>
                    :
                    <div>
                        <FontAwesomeIcon icon="exclamation-circle" size='8x' color={theme.warningColor} />
                        <h3 className='title'>{props.title}</h3>
                        <p className='description'>{props.description}</p>
                        <input type='button' value='Không' className=' btn btnNo' onClick={() => { props.handleCancel() }} />
                        <input type='button' value='Có, hãy xoá nó đi!' className=' btn btnYes' onClick={() => { props.handleConfirm() }} />
                    </div>
                }




            </div>
        </Container >

    );
}
export default Alert;