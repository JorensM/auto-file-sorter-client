import { ReactComponent as Checkmark } from 'icons/checkmark.svg';
import { ReactComponent as Loading } from 'icons/loading.svg';
import { useEffect, useState } from 'react';
import { flex_row } from 'style';

export default function SaveStatus({status}) {

    const [dots, setDots] = useState('');

    const message_style = {
        marginBottom: '6px',
        color: 'blue'
    }

    useEffect(() => {
        let interval = setInterval(() => {
            //console.log('interval');
            //console.log(dots);
            setDots(dots => dots.length < 3 ? dots + '.' : '');
        }, 600);

        return () => {clearInterval(interval)};
    }, []);

    return(
        <div
            style={
                flex_row
            }
        >
            {status == 'saved' && 
                <Checkmark
                    height='20px'
                    width='20px'
                    stroke='blue'
                />
            }
            <span
                style={
                    message_style
                }
            >
                {status + (status == 'saving' ? dots : '')}
            </span>
        </div>
    )
}