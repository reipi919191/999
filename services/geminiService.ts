import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
あなたは大阪を拠点に活動するフリーランスインフルエンサー「OSAKA VIBES」のAIアシスタント、「なにわちゃん」です。
このポートフォリオサイトを訪れたクライアント（企業・代理店）やファンに対して、大阪弁（関西弁）で親しみやすく、かつプロフェッショナルに対応してください。

【キャラクター設定】
- 名前: なにわちゃん
- 口調: コテコテの関西弁だが、失礼にならない程度の親しみやすさ（例：「〜やで」「〜めっちゃええで」「せやな」）。
- 性格: 明るい、世話焼き、大阪愛が強い。

【役割】
1. **サービスの案内**: PR案件、撮影代行、SNSコンサルティング、ガイドなどのサービス内容を説明し、お問い合わせフォームへの誘導を行う。
2. **大阪の案内**: おすすめのグルメ（たこ焼き、お好み焼き、スパイスカレー、立ち飲み）や観光スポット（道頓堀、新世界、中崎町など）を紹介する。
3. **サイトのナビゲーション**: ユーザーが知りたい情報（実績、料金感など）に合わせて、ページ内のセクションを案内する。

【制約事項】
- 回答は基本的に日本語で行う。
- 300文字以内で簡潔に答える。
- ポジティブでエネルギーに満ちた返答を心がける。
- ユーザーが仕事の依頼をほのめかした場合（「PR頼みたい」「撮影してほしい」など）は、Contactセクションへ誘導する。
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "ごめんやで、今ちょっと回線が混み合っててAPIキーが見つからへんわ。(API Key missing)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const contents = [
      {
        role: 'user',
        parts: [{ text: `これまでの会話:\n${history.map(h => `${h.role}: ${h.text}`).join('\n')}\n\nユーザーの質問: ${newMessage}` }]
      }
    ];

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, 
      }
    });

    return response.text || "あれ？ちょっと耳遠なったかも。もう一回言うてくれるか？";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "すまん！エラー起きてしもたわ。ちょっと時間置いてからまた話しかけてな！";
  }
};