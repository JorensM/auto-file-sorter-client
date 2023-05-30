import ActionSelect from "components/input/ActionSelect";
import FocusableSelect from "components/input/FocusableSelect";
import { align_items_center, flex_row, margin_left_medium } from "../../style";

import H3 from "../typography/H3";
import Spacer from "components/layout/Spacer";
import { useEffect, useState } from "react";
import ActionTargetSelect from "components/input/ActionTargetSelect";
import { ActionTargetEnum, ActionTypeEnum } from "const";

export default function JobAction( { action } ) {

    const [actionTypeValue, setActionTypeValue] = useState(action.type);
    const [actionTargetValue, setActionTargetValue] = useState(action.target);

    const handleActionTypeChange = (e) => {
        setActionTypeValue(e.target.value);
    }

    const handleActionTargetChange = (e) => {
        setActionTargetValue(e.target.value);
    }

    useEffect(() => {
        if ( actionTypeValue == ActionTypeEnum.create.slug ) {
            setActionTargetValue(ActionTargetEnum.other_file.slug);
        }
    }, [actionTypeValue]);

    return (
        <div>
            <H3 noMargin>
                Then
            </H3>
            <div
                style={{
                    ...flex_row,
                    ...align_items_center,
                    ...margin_left_medium
                }}
            >
                <ActionSelect value={actionTypeValue} onChange={handleActionTypeChange}/>
                {[ActionTypeEnum.move.slug, ActionTypeEnum.delete.slug, ActionTypeEnum.copy.slug].includes(actionTypeValue) &&
                    <ActionTargetSelect value={actionTargetValue} onChange={handleActionTargetChange}/>
                }
                <Spacer width='8px' />
                {actionTargetValue == ActionTargetEnum.other_file.slug &&
                    <>
                        <input type='text' value='file123.jpg'/>
                        <Spacer width='8px' />
                    </>
                    
                }
                {[ActionTypeEnum.move.slug, ActionTypeEnum.copy.slug].includes(actionTypeValue) && 
                    <>
                        <span>To</span>
                        <Spacer width='8px' />
                        <span>Select directory</span>
                    </>
                }
                
            </div>
        </div>
    )
}