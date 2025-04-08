import React from 'react';

const Flag = ({ countryCode, width = 100, height = 60, className, style }) => {
    if (!countryCode) {
        console.error("Country code is required");
        return <span>🏳️</span>;
    }

    try {
        const flagSrc = new URL(
            `../assets/flags/${countryCode}.svg`,
            import.meta.url
        ).href;

        return (
            <img
                src={flagSrc}
                alt={`Flag of ${countryCode}`}
                width={width}
                height={height}
                className = {className}
                style={style}
            />
        );
    } catch (error) {
        console.error(`Flag not found for country code: ${countryCode}`, error);
        return <span>🏳️</span>;
    }
};

export default Flag;
