import {NextRequest, NextResponse} from "next/server";
import OpenAI from 'openai';
import config from "@/config/config";

const client = new OpenAI({
    apiKey: config.openaiApiKey
});

export async function GET(
    req: NextRequest
): Promise<NextResponse> {

    const q = req.nextUrl.searchParams.get('q') as string;

    try {
        const response = await client.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: '너는 한국어로 학습 목차를 만들어 주는 인공지능이야. 제목과 내용을 "\n"을 기준으로 구분해줘'
                },
                {
                    role: 'user',
                    content: '미적분'
                },
                {
                    role: 'assistant',
                    content: '서론\n' +
                        '미적분학의 개요와 역사, 기본 개념 및 용어 소개\n' +
                        '\n' +
                        '함수와 그래프\n' +
                        '함수의 정의와 주요 함수들, 그래프의 그리기 및 해석 방법\n' +
                        '\n' +
                        '극한과 연속성\n' +
                        '극한의 정의와 계산법, 함수의 연속성 및 관련 성질\n' +
                        '\n' +
                        '미분\n' +
                        '미분의 정의와 기본 규칙, 미분의 응용과 실용적 문제 풀이\n' +
                        '\n' +
                        '적분\n' +
                        '적분의 정의와 기본 규칙, 정적분과 부정적분, 적분의 응용\n' +
                        '\n' +
                        '적분과 미분의 응용\n' +
                        '미적분학의 응용 사례, 곡선의 길이, 면적, 부피 계산\n' +
                        '\n' +
                        '급수와 수열\n' +
                        '수열의 개념, 급수의 정의와 수렴성, 주요 급수의 수렴 판별법\n' +
                        '\n' +
                        '다변수 함수의 미적분\n' +
                        '다변수 함수의 미분과 적분, 편도함수와 중적분, 다중적분의 응용\n' +
                        '\n' +
                        '벡터 미적분학\n' +
                        '벡터 함수의 미적분, 선적분과 면적적분, 그린의 정리, 스톡스 정리, 발랑의 정리\n' +
                        '\n' +
                        '부록\n' +
                        '미적분학의 주요 공리와 정리, 참고 문헌과 추가 자료'
                },
                {
                    role: 'user',
                    content: q
                }
            ],
            model: 'gpt-3.5-turbo',
            stream: true
        });

        const stream = new ReadableStream({
            start(controller) {
                (async () => {
                    try {
                        for await (const chunk of response) {
                            const content = chunk.choices[0]?.delta?.content || '';
                            controller.enqueue(content);
                        }
                        controller.close();
                    } catch (error) {
                        controller.error(error);
                    }
                })();
            }
        });

        return new NextResponse(stream, {
            headers: { 'Content-Type': 'text/plane' }
        });
    } catch (e) {
        console.error('Error', e);
        return new NextResponse('Failed to fetch completion', {
            status: 500,
        });
    }
}
