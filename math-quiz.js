const quiz_list = [
    {
        q_num: 1,
        q_body: "2 + 2",
        q_ansewr: 4,
        q_point: 1,
    },
    {
        q_num: 2,
        q_body: "6 x 4",
        q_ansewr: 24,
        q_point: 3,
    },
    {
        q_num: 3,
        q_body: "3 x 3 x 9",
        q_ansewr: 81,
        q_point: 8,
    },
    {
        q_num: 4,
        q_body: "21 + 30 - 1",
        q_ansewr: 50,
        q_point: 5,
    },
    {
        q_num: 5,
        q_body: "36 % 6",
        q_ansewr: 6,
        q_point: 3,
    },
]

let score = 0

quiz_list.forEach((quiz) => {
    const userPrompt = prompt(`
        \t Quiz Number : ${quiz.q_num}\n
        \t What is result of : ${quiz.q_body} ?\n
        \t Quiz Point : ${quiz.q_point}
        `)
    
    if (userPrompt == quiz.q_ansewr) {
        score += quiz.q_point
        alert(`Great! 😍 \n Your score is now : ${score}`)
    } else {
        alert(`Wrong! 😔 \n Your score is now : ${score}`)
    }
})

alert(`~~~~~~~~~~~~~~~~~~~ \n FINSIH \n ~~~~~~~~~~~~~~~~~~~ \n\t Your finall sccore is : ${score}`)