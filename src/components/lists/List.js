import React from "react";

import { list_no_style } from "../../style";

export default function List({ data, renderItem, style }) {
    return (
        <ul style={{...list_no_style, ...style}}>
            {data.map( (item, index, arr) => renderItem( item, index, arr ) ) }
        </ul>
    )
}