import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({objects}) => {
    return (
        <div>
            {objects.map((object, index) => (
                <div key={index}>
                    <Tile object={object} />
                </div>
            ))}
        </div>
    );
};
