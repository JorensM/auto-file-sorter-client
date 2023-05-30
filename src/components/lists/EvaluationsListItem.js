import IconButton from "components/buttons/IconButton";
import ConditionTypeSelect from "components/input/ConditionTypeSelect";
import { useContext, useEffect, useState } from "react";
import { 
    flex_column, 
    margin_left_medium, 
    bold,
    flex_row_space_between,
    align_items_center
 } from "../../style";

 import { convertStatement, convertRelation } from "util/convert";
import ConditionStatementSelect from "components/input/ConditionStatementSelect";
import Spacer from "components/layout/Spacer";
import { condition_statement, condition_type } from "const";
import deepCopy from "util/deepCopy";
import { JobDispatchContext } from "context/JobContext";
import RelationSelect from "components/input/RelationSelect";



export default function EvaluationsListItem({ item, hideRelation, handleRemoveEvaluation }) {

    const evaluation = item;
    const { condition } = evaluation;

    const dispatchJob = useContext(JobDispatchContext);

    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [inputValues, setInputValues] = useState({
        condition_type: condition.type,
        condition_statement: condition.statement,
        condition_value: condition.value
    })

    

    const onHoverIn = () => {
        setBackgroundColor('lightgray');
    }

    const onHoverOut = () => {
        setBackgroundColor('transparent');
    }

    const handleInputChange = (e) => {
        //console.log(e);
        let new_input_values = deepCopy(inputValues);
        new_input_values[e.target.id] = e.target.value;
        console.log(new_input_values);
        setInputValues(new_input_values);
    }

    useEffect(() => {

        const {
            condition_type: type,
            condition_statement: statement,
            condition_value: value
        } = inputValues;

        const condition = {
            type,
            statement,
            value
        }

        dispatchJob({
            type: 'update_evaluation',
            id: evaluation.id,
            evaluation: {
                ...evaluation,
                condition: condition
            }
        })
    }, [ inputValues ] );

    return (
        <li 
            style={{
                ...flex_column
            }}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
        >
            {/* <span>{ evaluation.id }</span> */}
            <div 
                style={{
                    ...flex_row_space_between,
                    backgroundColor: backgroundColor
                }}
            >
                <div
                    style={align_items_center}
                >
                    <ConditionTypeSelect id='condition_type' defaultValue={condition.type} onChange={handleInputChange}/>
                    <Spacer width='8px' />
                    <ConditionStatementSelect id='condition_statement' defaultValue={condition.statement} onChange={handleInputChange}/>
                    <Spacer width='8px' />
                    <input id='condition_value' type='text' value={inputValues.condition_value} onChange={handleInputChange}/>
                </div>
                <IconButton style={margin_left_medium} icon='X' onClick={() => handleRemoveEvaluation(evaluation.id)}/>
            </div>
            
            { ! hideRelation && 
                <RelationSelect
                    style={{
                        ...margin_left_medium,
                        ...bold,
                        fontSize: '16px'
                    }}
                    defaultValue={evaluation.relation}
                />
            }
        </li>
    );
}