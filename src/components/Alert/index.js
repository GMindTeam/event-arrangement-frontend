import React, { useState, useEffect } from "react";
import { theme } from "../../config/mainTheme"
import { Container } from "./style";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Alert(props) {
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        setIsDeleting(props.deleteing);
    }, [props.deleteing])
    return (

        <Container>

            {isDeleting ?
                <div className="deleting-modal-content ">
                    <div>
                        <div className="item">
                            <center><ClipLoader
                                size={100}
                                color={theme.mainColor1}
                            /></center>
                            
                            <h3 className='title'>Đang xoá phản hồi...</h3>
                        </div>
                        
                    </div>
                </div>
                :
                <div>
                    <div className="modal-content">
                        <FontAwesomeIcon icon="exclamation-circle" size='8x' color={theme.warningColor} />
                        <h3 className='title'>{props.title}</h3>
                        <p className='description'>{props.description}</p>
                        <center>
                        <div className="row">
                            <div className="col">
                            <input type='button' value='Không' className=' btn btnNo' onClick={() => { props.handleCancel() }} />
                            </div>
                            <div className="col">
                            <input type='button' value='Có, hãy xoá nó đi!' className=' btn btnYes' onClick={() => { props.handleConfirm() }} />
                            </div>
                        </div>
                        </center>
                        
                        
                    </div>
                </div>
            }





        </Container >

    );
}
export default Alert;