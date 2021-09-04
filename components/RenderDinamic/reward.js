import React, { useState, useEffect } from 'react';

export default function Reward({ rewards, actualizarRewards}){
    const{ 
        id,
        name,
        description,
        points_needed
    } = rewards

    return (
        <>
        <tr id={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{points_needed}</td>
        </tr>
        </>
    )
}