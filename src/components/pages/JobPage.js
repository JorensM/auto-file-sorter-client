import { useLoaderData } from "react-router-dom";
import JobStatus from "components/jobs/JobStatus";
import JobAction from "components/jobs/JobAction";
import EvaluationsList from "components/lists/EvaluationsList";

import H1 from "components/typography/H1";
import H2 from 'components/typography/H2';

import { sample_jobs } from "sample_data"
import { JobContext, JobDispatchContext } from "context/JobContext";
import { useEffect, useReducer, useEffectEvent, useCallback, useMemo, useState } from "react";
import deepCopy from 'util/deepCopy';
import debounce from "util/debounce";
import Select from "components/input/Select";
import JobFrequencySelect from "components/input/JobFrequencySelect";
import Spacer from "components/layout/Spacer";

import { flex_row, page_style } from "style";
import FocusableTextInput from "components/input/FocusableTextInput";
import SaveStatus from "components/misc/SaveStatus";

function getJobById( job_id, all_jobs ) {
    return all_jobs.find( job => job.id == job_id );
}

export async function loader( { params } ) {
    if ( params.job_id == 'new' ) {
        return { job: job_template }
    }
    const job = getJobById( params.job_id, sample_jobs );
    return { job };
}

const job_template = {
    id: -1,
    name: "New job",
    status: 'active',
    evaluations_max_id: 0,
    evaluations: [],
    action: {
        type: 'delete',
        target: 'file123.jpg'
    }
}

export function JobPage() {

    const { job: fetched_job } = useLoaderData();

    const [ job, dispatchJob ] = useReducer( jobReducer, fetched_job );
    const [ isNewJob, setIsNewJob ] = useState( false );

    const [ frequencyInputValue, setFrequencyInputValue ] = useState(job.frequency);

    

    useEffect(() => {
        if ( fetched_job.id < 0 ) {
            setIsNewJob(true);
        }
    }, [])

    const evaluations_list_style = {
        width: '600px'
    }

    const syncJobWithServer = useMemo(() => debounce(() => {
        console.log('abc');
    }, 1000), []);

    useEffect(() => {
        syncJobWithServer();
    }, [ job ]);

    const handleStatusChange = (new_status) => {
        dispatchJob({
            type: 'update_status',
            status: new_status
        })
    }

    const handleFrequencyChange = (e) => {
        setFrequencyInputValue(e.target.value);
    }

    return (
        <JobContext.Provider value={job}>
            <JobDispatchContext.Provider value={dispatchJob}>
                <div style={ page_style }>
                    <FocusableTextInput 
                        disabled_style={{
                            fontWeight: 'bold',
                            fontSize: '24px'
                        }}
                        enabled_style={{
                            fontSize: '24px'
                        }}
                        value={job.name}
                    />
                    
                    <JobStatus job={ job } onStatusChange={handleStatusChange}/>
                    <H2>Action</H2>
                    <EvaluationsList style={evaluations_list_style} data={ job.evaluations }/>
                    {job.action && 
                        <JobAction action={ job.action }/>
                    }
                    <H2>Details</H2>
                    <div
                        style={flex_row}
                    >
                        Run every
                        <Spacer width='8px'/>
                        <JobFrequencySelect
                            value={frequencyInputValue}
                            onChange={handleFrequencyChange}
                        />
                    </div>
                    <Spacer height='16px' />
                    <SaveStatus status='saved' />
                </div>
            </JobDispatchContext.Provider>
        </JobContext.Provider>
        
    )
}


const evaulation_template = {
    relation: '&&',
    condition: {
        type: 'file_name',
        statement: '==',
        value: 'file123.jpg'
    }
}

function jobReducer(job, action) {
    switch ( action.type ) {
        case 'add_evaluation': {
            //console.log('adding evaluation');
            let new_job = deepCopy( job );
            if( !new_job.evaluations.length ){
                new_job.evaluations = [];
            }
            new_job.evaluations.push({
                id: new_job.evaluations_max_id++,
                ...evaulation_template
            })
            console.log(new_job);
            return new_job;
        }
        case 'update_evaluation': {
            let new_job = deepCopy( job );
            const index = new_job.evaluations.findIndex( evaluation => evaluation.id == action.id);
            if ( index == -1 ) {
                throw new Error ( `Could not find evaluation with ID ${action.id}` );
            }
            new_job.evaluations[index] = action.evaluation;
            console.log(new_job);
            return new_job;
        }
        case 'remove_evaluation': {
            let new_job = deepCopy( job );
            new_job.evaluations = new_job.evaluations.filter(evaluation => evaluation.id != action.id);
            return new_job;
        }
        case 'update_status': {
            let new_job = deepCopy( job );
            new_job.status = action.status;
            return new_job;
        }
        default: {
            throw new Error ( 'Unknown action in jobReducer' );
        }
    }
}