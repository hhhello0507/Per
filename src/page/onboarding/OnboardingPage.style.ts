import styled from "styled-components";
import {Font, Fonts} from "../../designsystem/foundation/Fonts";
import {Shadow, Shadows} from "../../designsystem/foundation/shadow/Shadow";

const style = {
    Root: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    Container: styled.div`
        display: flex;
        padding: 72px 16px 32px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        align-self: stretch;
    `,
    Headline: styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
    `,
    Title: styled.div`
        align-self: stretch;

        color: #000;
        text-align: center;

        ${Fonts[Font.Display1B]};
    `,
    Description: styled.div`
        align-self: stretch;

        color: var(--Neutral-50);
        text-align: center;

        ${Fonts[Font.Headline2M]};
    `,
    SkillContainer: styled.div`
        display: flex;
        position: relative;
        align-items: flex-start;
        align-content: flex-start;
        gap: 8px;
    `,
    SkillCell: styled.div`
        display: flex;
        padding: 8px 10px;
        justify-content: center;
        align-items: center;

        border-radius: 12px;
        background: rgba(255, 133, 41, 0.20);

        color: var(--P50);

        /* Body/Medium */
        ${Fonts[Font.BodyM]};
    `,
    SkillContainerMask: styled.div<{
        deg: number
    }>`
        width: 80px;
        height: 37px;

        position: absolute;

        background: linear-gradient(${({deg}) => deg}deg, #FFF -6.25%, rgba(255, 255, 255, 0.00) 100%);
    `,
    SiteContainer: styled.div`
        display: flex;
        padding: 0 16px;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 33px;
        align-self: stretch;
        flex-wrap: wrap;
    `,
    SiteCell: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
    `,
    SiteName: styled.div`
        color: var(--Neutral-50);

        ${Fonts[Font.BodyM]};
    `,
    TreeContainer: styled.div`
        display: flex;
        width: 522px;
        flex-direction: column;
        align-items: center;
    `,
    TreeRow: styled.div<{
        gap?: number
    }>`
        display: flex;
        gap: ${({gap}) => gap ?? 16}px;
    `,
    Node: styled.div`
        display: inline-flex;
        padding: 12px 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        border-radius: 12px;
        background: white;

        ${Shadows(Shadow.EvBlack3)};
        color: #666674;
        
        ${Fonts[Font.BodyM]};
    `,
    StartButton: styled.button`
        display: flex;
        width: 138px;
        padding: 16px 48px 16px 49px;
        justify-content: center;
        align-items: center;

        border-radius: 98px;
        background: var(--P50);

        color: #FFF;
        text-align: center;
        
        ${Fonts[Font.Headline2M]};
        box-shadow: 0 6px 15px 0 rgba(255, 132, 42, 0.2);
        
        &:hover {
            box-shadow: 0 8px 15px 0 rgba(255, 132, 42, 0.6);
        }
        
        transition: 0.3s box-shadow;
    `
};

export default style;