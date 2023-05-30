import EvaluationsListItem from "./EvaluationsListItem";
import H3 from "../typography/H3";
import List from "./List";
import IconButton from "../buttons/IconButton";
import { useContext, useState } from "react";
import { JobDispatchContext } from "context/JobContext";

const evaulation_template = {

    relation: '&&',
    condition: {
        type: 'file_name',
        statement: '==',
        value: 'file123.jpg'
    }
}

export default function EvaluationsList({ data, editable, style}) {

    const [evaluations, setEvaluations] = useState(data);
    const dispatchJob = useContext(JobDispatchContext);


    const list_style = {
        paddingLeft: '16px',
        ...style
    }

    const handleAddEvaluation = () => {
        dispatchJob({
            type: 'add_evaluation'
        })
    }

    const handleRemoveEvaluation = ( evaluation_id ) => {
        dispatchJob({
            type: 'remove_evaluation',
            id: evaluation_id
        })
    }

    return (
        <div>
            <H3 noMargin>
                If
            </H3>
            {data &&
                <List 
                    style={list_style}
                    data={data}
                    renderItem={ ( item, index, arr ) =>
                         <EvaluationsListItem 
                            item={item} 
                            key={item.id} 
                            hideRelation={ index == arr.length - 1 }
                            handleRemoveEvaluation={ handleRemoveEvaluation }
                        />
                    }
                />
            }
            <IconButton label='Add Evaluation' icon='+' onClick={ handleAddEvaluation }/>
        </div>
        
    )
}