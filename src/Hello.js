import React from 'react';

function Hello({ name, color }) {
    console.log(color);
    debugger;
    return <div style={{ color }}>Hi~!{name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;