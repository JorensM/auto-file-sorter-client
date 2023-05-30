

//Components
import IconButton from "components/buttons/IconButton";
import LinkButton from "components/buttons/LinkButton";
import JobsList from "components/lists/JobsList"
import H1 from "components/typography/H1"
import Spacer from "components/layout/Spacer";

//Constants
import { sample_jobs } from "sample_data";


const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const jobs_list_style = {
    border: '1px solid gray',
    padding: '8px',
    width: '240px',
}

export default function HomePage() {
    return (
        <div style={style}>
            <H1>My Jobs</H1>
            <JobsList
                style={jobs_list_style}
                jobs={sample_jobs}
            />
            <Spacer height='16px' />
            <LinkButton label='add job' href='jobs/new' />
            
        </div>
    )
}