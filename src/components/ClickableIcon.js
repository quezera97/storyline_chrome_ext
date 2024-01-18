import React from 'react';

const ClickableIcon = ({ icon, hasTooltip, tooltipText, className, style, onClick }) => {
    return (
        <div
            className={className}
            style={style}
            title={hasTooltip ? tooltipText : null}
            onClick={onClick}
        >
            {icon}
        </div>
    );
};

export default ClickableIcon;
