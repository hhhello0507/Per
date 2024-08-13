import styled from "styled-components";
import {Font, Fonts} from "../designsystem/foundation/Fonts";

const style = {
    Title: styled.div`
        align-self: stretch;

        color: #000;
        text-align: center;

        ${Fonts[Font.Display1B]};
    `,
}

export default style;