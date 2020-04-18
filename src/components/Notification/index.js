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
                        <h4>{props.message}</h4>
                    </div>
                </div>


            </Container>
            <ContainerMobile>
                <div className="item">
                    {
                        props.type === 'loading' ? <ClipLoader
                            size={40}
                            color='white'
                        /> : <FontAwesomeIcon icon="check" color='white' />
                    }
                    <br></br>
                    <h4 className='message'>{props.message}</h4>
                </div>

            </ContainerMobile>
        </div>
    );
}