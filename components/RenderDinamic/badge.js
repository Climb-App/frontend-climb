import React, { useState, useEffect } from 'react';

export default function Badge( badges, actualizarBadges){
    const{ 
        id,
        name,
        description,
        points_needed_max,
        points_needed_min
    } = badges

    return (
        <>
        <tr id={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{points_needed_max} - {points_needed_min}</td>
        </tr>
        </>
    )
}