import React from 'react';

const SubHead = ({children}) => {
    return (
        <>
            <div style={{padding: "1rem"}}/>
            <h2>{children}</h2>
            <hr/>
            <div style={{padding: "1rem"}}/>
        </>
    );
};

export default SubHead;