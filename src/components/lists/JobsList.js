import { list_no_style } from "../../style";

import JobsListItem from "./JobsListItem";




export default function JobsList(props) {

    const style = {
        ...list_no_style,
        ...props.style
    }

    return(
        <ul style={style}>
            {props.jobs.map(job => {
                return <JobsListItem key={job.id} job={job} />
            })}
        </ul>
    )
}