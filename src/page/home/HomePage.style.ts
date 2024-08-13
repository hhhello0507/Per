import styled from "styled-components";

const style = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        flex: 1 0 0;
        align-self: stretch;
        padding-bottom: 64px;
        height: 100vh;
    `,
    InputContainer: styled.div`
        display: flex;
        width: 540px;
        height: 48px;
        padding: 4px 12px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border-radius: 100px;
        border: 1px solid #E3E3E9;
    `,
    Input: styled.input`
        flex: 1 0 0;
        align-self: stretch;
        font-size: 18px;
        padding-left: 4px;
    `
}

export default style;