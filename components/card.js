import React from 'react'

export default function Card({ client, clientComment, projectName, star }) {
    return (
        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            {client}
            <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {clientComment}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {projectName}
                </p>
            </div>
            <div class="p-6 pt-0">
                {star}
            </div>
        </div>
    )
}
