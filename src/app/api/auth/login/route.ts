// import {NextRequest} from "next/server";
//
// export async function POST(
//     req: NextRequest
// ) {
//     const {idToken} = req.body;
//
//     const verifiedToken = await verifyIdToken(idToken);
//     const payload = verifiedToken.getPayload();
//     const {email} = payload;
//     const existUser = await AuthRepository.existByEmail(email);
//     if (!existUser) {
//         await AuthRepository.register(email);
//     }
//
//     const refreshToken = generateToken({
//         email: email,
//     }, JwtToken.REFRESH_TOKEN);
//
//     const accessToken = generateToken({
//         email: email,
//     }, JwtToken.ACCESS_TOKEN);
//
// }