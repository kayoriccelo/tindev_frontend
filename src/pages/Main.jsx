import React from 'react';

export default function Main({ match }) {
    return (
        <div>{match.params.id}</div>
    )
}