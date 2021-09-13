import React from 'react'
// import library fortawesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


export default function loading() {
    return (
        <div className="containerLoad">
            <FontAwesomeIcon icon={faSpinner} className="loading" spin style={{width:'180px', height: '180px'}}/>
        </div>
    )
}