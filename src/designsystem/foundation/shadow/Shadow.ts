import {css} from "styled-components";

export enum Shadow {
    EvBlack1,
    EvBlack2,
    EvBlack3
}

interface ShadowStyle {
    y: number,
    blur: number,
}

export const ShadowStyles: { [key in Shadow]: ShadowStyle } = {
    [Shadow.EvBlack1]: {
        y: 3,
        blur: 10
    },
    [Shadow.EvBlack2]: {
        y: 4,
        blur: 12
    },
    [Shadow.EvBlack3]: {
        y: 6,
        blur: 18
    }
};

export const Shadows = (type: Shadow) => css`
    box-shadow: ${({theme}) => `0px ${ShadowStyles[type].y}px ${ShadowStyles[type].blur}px 0px rgba(0, 0, 0, 0.06)`};
`