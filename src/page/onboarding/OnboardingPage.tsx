import S from './OnboardingPage.style';
import C from '../../component/Title.style';
import {useNavigate} from "react-router-dom";

const siteData: { image: any, name: string }[] = [
    {
        image: 'image/site/Github.png',
        name: 'Github'
    },
    {
        image: 'image/site/Tistory.png',
        name: 'Tistory'
    },
    {
        image: 'image/site/Velog.png',
        name: 'Velog'
    },
    {
        image: 'image/site/Medium.png',
        name: 'Medium'
    },
    {
        image: 'image/site/Youtube.png',
        name: 'Youtube'
    }
]

export default function OnboardingPage() {
    const navigate = useNavigate();
    return (
        <S.Root>
            <S.Container>
                <S.Headline>
                    <C.Title>Elegant AI skill search engine</C.Title>
                    <S.Description>Enter skill easy you want to learn!</S.Description>
                </S.Headline>
                <S.SkillContainer>
                    <S.SkillCell>Spring</S.SkillCell>
                    <S.SkillCell>SwiftUI</S.SkillCell>
                    <S.SkillCell>React</S.SkillCell>
                    <S.SkillCell>Rust</S.SkillCell>
                    <S.SkillCell>Unity Engine</S.SkillCell>
                    <S.SkillContainerMask deg={90} style={{left: 0}}/>
                    <S.SkillContainerMask deg={270} style={{right: 0}}/>
                </S.SkillContainer>
            </S.Container>
            <S.Container>
                <C.Title>One click, get it all</C.Title>
                <S.SiteContainer>
                    {siteData.map(site => (
                        <S.SiteCell>
                            <img src={site.image} alt={site.name} width={54} height={54}/>
                            <S.SiteName>{site.name}</S.SiteName>
                        </S.SiteCell>
                    ))}
                </S.SiteContainer>
            </S.Container>
            <S.Container>
                <S.Headline>
                    <C.Title>Stop doing boring searches</C.Title>
                    <S.Description>AI generates related content super fast</S.Description>
                </S.Headline>
                <S.TreeContainer>
                    <S.Node>React</S.Node>
                    {line1}
                    <S.Node>AI</S.Node>
                    <S.TreeRow gap={0}>
                        {line2}
                        {line1}
                        {line3}
                    </S.TreeRow>
                    <S.TreeRow>
                        <S.Node>React Hooks</S.Node>
                        <S.Node>React Component</S.Node>
                        <S.Node>React Virtual DOM</S.Node>
                    </S.TreeRow>
                    <S.TreeRow
                        style={{
                            marginRight: '380px'
                        }}
                        gap={0}
                    >
                        {line4}
                        {line5}
                    </S.TreeRow>
                    <S.TreeRow
                        style={{
                            marginRight: '380px'
                        }}
                    >
                        <S.Node>useState</S.Node>
                        <S.Node>useEffect</S.Node>
                    </S.TreeRow>
                </S.TreeContainer>
            </S.Container>
            <S.Container>
                <C.Title>Let's Go!</C.Title>
                <S.StartButton onClick={() => {
                    navigate("/");
                }}>Start</S.StartButton>
            </S.Container>
        </S.Root>
    );
};

const line1 = <svg xmlns="http://www.w3.org/2000/svg" width="2" height="33" viewBox="0 0 2 33" fill="none">
    <path d="M1 32.2297C1 9.37259 1 26.3297 1 0.729736" stroke="url(#paint0_linear_24_262)" stroke-width="2"/>
    <defs>
        <linearGradient id="paint0_linear_24_262" x1="0.5" y1="0.729736" x2="0.5" y2="32.2297"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0.41" stop-color="#E3E3E9"/>
            <stop offset="1" stop-color="#BDBDC1"/>
        </linearGradient>
    </defs>
</svg>;

const line2 = <svg xmlns="http://www.w3.org/2000/svg" width="156" height="32" viewBox="0 0 156 32" fill="none">
    <path d="M1 32C1 9.14286 155 25.6 155 0" stroke="url(#paint0_linear_24_253)" stroke-width="2"/>
    <defs>
        <linearGradient id="paint0_linear_24_253" x1="78" y1="0" x2="78" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0.41" stop-color="#E3E3E9"/>
            <stop offset="1" stop-color="#BDBDC1"/>
        </linearGradient>
    </defs>
</svg>;

const line3 = <svg xmlns="http://www.w3.org/2000/svg" width="162" height="32" viewBox="0 0 162 32" fill="none">
    <path d="M161 32C161 9.14286 0.999996 25.6 0.999996 0" stroke="url(#paint0_linear_24_255)" stroke-width="2"/>
    <defs>
        <linearGradient id="paint0_linear_24_255" x1="81" y1="0" x2="81" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0.41" stop-color="#E3E3E9"/>
            <stop offset="1" stop-color="#BDBDC1"/>
        </linearGradient>
    </defs>
</svg>;

const line4 = <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
    <path d="M1 32C1 9.14286 60 25.6 60 0" stroke="url(#paint0_linear_24_256)" stroke-width="2"/>
    <defs>
        <linearGradient id="paint0_linear_24_256" x1="30.5" y1="0" x2="30.5" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0.41" stop-color="#E3E3E9"/>
            <stop offset="1" stop-color="#BDBDC1"/>
        </linearGradient>
    </defs>
</svg>;

const line5 = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 60 32" fill="none">
    <path d="M59 32C59 9.14286 1 25.6 1 0" stroke="url(#paint0_linear_24_257)" stroke-width="2"/>
    <defs>
        <linearGradient id="paint0_linear_24_257" x1="30" y1="0" x2="30" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0.41" stop-color="#E3E3E9"/>
            <stop offset="1" stop-color="#BDBDC1"/>
        </linearGradient>
    </defs>
</svg>;

