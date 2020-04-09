import { Container } from "./style";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

export default function Notification(props) {
    return (
        <Container>
            <div className="row">
                <div className="left">
                    {
                        props.type==='loading' ? <ClipLoader
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
    );
}
