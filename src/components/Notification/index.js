import { Container, ContainerMobile } from "./style";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from "../../config/mainTheme";
import React from "react";

export default function Notification(props) {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="left">
                        {
                            props.type === 'loading' ? <ClipLoader
                                size={15}
                                color='white'
                            /> : <FontAwesomeIcon icon="check" />
                        }

                    </div>
                    <div className="right">
                        <center><h4>{props.message}</h4></center>
                        
                    </div>
                </div>


            </Container>
            <ContainerMobile>
                <div className="item">
                    {
                        props.type === 'loading' ? <ClipLoader
                        size={100}
                        color={theme.mainColor1}
                        /> : <FontAwesomeIcon icon="check" color={theme.mainColor1} size='4x'/>
                    }
                    <br></br>
                    <h3 className='message'>{props.message}</h3>
                </div>

            </ContainerMobile>
        </div>
    );
}
