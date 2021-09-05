import React from 'react'

const Blog = () => {
    return (
        <div className='font-serif '>

            <div className='headingSection text-center my-8 py-2'>
                <h1 className='text-2xl font-bold'>The Interview process at Tech Giant Companies</h1>
                <span>Jul 5 / 2021</span>
            </div>

            <div className='w-4/5 text-left mx-auto'>
                <p className='text-base font-medium py-2'>
                    Among the very top tech companies (and many other companies). Algorithmic and coding problems vary. The biggest part of the interview process. Think of these as problem-solving questions. The interviewer tries to assess your ability to solve problems you have never seen before.
                    Mostly, you can only get one question in an interview. Thirty to Forty-five minutes is not more time, And it is difficult to solve so many different questions in that time frame.
                    You should try your best to speak out loud and explain your thought process throughout the issue. The interviewer can sometimes jump on the next question to your aid; Let them do it. This is normal and does not really mean that you are doing bad.
                    At the end of the interview, the interviewer will get a good feel for the approach you have taken. A single-digit score can be assigned to your performance, but this is not really a quantitative assessment. No data says, how many points you get for different things. It does not work that way.
                    Instead, your interviewer will usually evaluate your performance based on the following:
                </p>

                <p className='text-base font-medium py-2'>
                    <span className='font-semibold'>Analytical Skills:</span> Do you need a lot of help solving a problem?
                    How correct is your solution?
                    How long did it take you to come to a solution?
                    If you had to design/architect a new solution, did you design the problem nicely and think through the transactions of different decisions?

                </p>
                <p className='text-base font-medium py-2'>
                    <span className='font-semibold'>   Coding Skills:</span>
                    Were you able to successfully translate your algorithm into the correct code? This is obvious
                    And tidy? Have you thought about possible errors? Did you use a good style?

                </p>
            </div>

        </div>
    )
}

export default Blog
