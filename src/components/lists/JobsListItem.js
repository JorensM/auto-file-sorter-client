import LinkButton from "../buttons/LinkButton";
import JobStatus from "../jobs/JobStatus";
import Spacer from "../layout/Spacer";
import H2 from "../typography/H2";
import { flex_row_space_between } from '../../style';


function jobPageLink(job_id) {
    return `jobs/${job_id}`;
}

export default function JobsListItem({job}) {


    const style = {
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        borderBottom: '1px solid gray',
        padding: '8px'
    }

    

    return (
        <li style={style}>
            <H2 noMargin>{job.name}</H2>
            <Spacer height='8px'/>
            <div style={flex_row_space_between}>
                <JobStatus job={job} hideButton/>
                <LinkButton label='View' href={ `jobs/${ job.id }` }/>
            </div>
        </li>
    )
}