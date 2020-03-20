import React, { useEffect } from "react";
import { CopyLinkStyle } from "./style";

function copyCodeToClipboard(){
    const el = this.textArea
    el.select()
    document.execCommand("copy")
}
function CopyLink(props) {

    return <CopyLinkStyle>
        <div className="copy-link-container" >
            <div className="copy-link">
                <span className="copy-link-icon">Event Link</span>
                <div className="copy-link-inner">
                    <div>
                        <textarea
                            ref={(textarea) => props.link = textarea}
                            value="Example copy for the textarea."
                        />
                    </div>
                    <div>
                        <button onClick={copyCodeToClipboard}>
                            Copy to Clipboard
          </button>
                    </div>
                </div>
            </div>
        </div >
    </CopyLinkStyle>;
}
export default CopyLink;
