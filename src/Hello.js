import React from 'react';

function Hello({ name, color, isSpecial }) {
    console.log(color);
    debugger;
    return (
        < div style = {{ color }}>
        { isSpecial && <b>*</b> }
            Hi~!{name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;