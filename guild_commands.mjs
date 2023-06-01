export default {
    ping: async (body) => ({
        statusCode: 200,
        type: 4,
        data: { content: "Pong!" },
    }),
    user: async (body) => ({
        statusCode: 200,
        type: 4,
        data: { content: "Your name is " + body.member.user.username },
    }),
    register: [
        {
            name: "ping",
            type: "1",
            description: "퐁을 해줍니다."
        },
        {
            name: "user",
            type: "1",
            description: "유저 정보를 보여줍니다."
        }
    ]
}