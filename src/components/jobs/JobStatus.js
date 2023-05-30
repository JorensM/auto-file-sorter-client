import { fit_content, flex_row_space_between } from "../../style";
import Spacer from "../layout/Spacer";

export default function JobStatus( { hideButton, hideDot, hideText, job, onStatusChange }) {

    const job_status_color = job.status == 'active' ? 'green' : job.status == 'inactive' ? 'orange' : job.status == 'error' ? 'red' : 'black';

    const text_style = {
        color: job_status_color,
        marginBottom: '4px',
        fontSize: '14px'
    }

    const dot_style = {
        height: '14px',
        width: '14px',
        backgroundColor: job_status_color,
        borderRadius: '100px'
    }

    let dotElement = null;

    let textElement = null;

    if( ! hideDot ) {
        dotElement = (
            <div style={dot_style}>

            </div>
        )
    }

    if( ! hideText ) {
        textElement = (
            <span style={text_style}>
                { job.status }
            </span>
        )
    }

    return (
        <div style={{...flex_row_space_between, ...fit_content}}>
            {dotElement}
            { ! hideText && ! hideDot ? <Spacer width='8px'/> : null }
            {textElement}
            <Spacer width='8px' />
            { ! hideButton && 
                <button
                    onClick={() => onStatusChange(job.status == 'inactive' ? 'active' : 'inactive')}
                >
                    {job.status == 'active' ? 'Deactivate' : job.status == 'inactive' ? 'Activate' : 'error'}
                </button>
            }
        </div>
    );
}