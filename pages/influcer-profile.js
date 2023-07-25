import Card from '../components/card'
import FAQ from '../components/faq'

const previousAds = [
    { client: "Burak 1", projectName: "Proje 1", clientComment: "Super Fast", star: 5, },
    { client: "Burak 2", projectName: "Proje 2", clientComment: "Fast", star: 5, },
    { client: "Burak 3", projectName: "Proje 3", clientComment: "Super", star: 5, },
    { client: "Burak 4", projectName: "Proje 4", clientComment: "Wonderful!", star: 5, },
]

const recommends = [
    { client: "Burak 1", projectName: "Proje 1", clientComment: "Super Fast", star: 5, },
    { client: "Burak 2", projectName: "Proje 2", clientComment: "Fast", star: 5, },
    { client: "Burak 3", projectName: "Proje 3", clientComment: "Super", star: 5, },
    { client: "Burak 4", projectName: "Proje 4", clientComment: "Wonderful!", star: 5, },
]

export default function InflucerProfile() {
    return (
        <>
            <div className="min-h-full">
                <main className="py-10">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        className="h-32 w-32 rounded-full"
                                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                        alt=""
                                    />
                                    <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900">Influcer Name</h1>
                                <p className="text-xl mt-4 font-medium text-gray-500">
                                    Influcer details
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                            {/* Description list*/}
                            <section aria-labelledby="applicant-information-title">
                                <div className="bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                                            Previous Made Ads
                                        </h2>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6 flex items-center space-x-3">
                                        {previousAds.map((previousAds) =>
                                            <Card
                                                key={previousAds.projectName}
                                                clientComment={previousAds.clientComment}
                                                projectName={previousAds.projectName}
                                                star={previousAds.star}
                                            />)}
                                    </div>

                                </div>
                            </section>


                            {/* Recommends */}
                            <section aria-labelledby="notes-title">
                                <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                                    <div className="divide-y divide-gray-200">
                                        <div className="px-4 py-5 sm:px-6">
                                            <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                                                Recommends
                                            </h2>
                                        </div>
                                        <div className="px-4 py-6 sm:px-6 flex items-center space-x-3">
                                            {recommends.map((previousAds) =>
                                                <Card
                                                    key={previousAds.projectName}
                                                    clientComment={previousAds.clientComment}
                                                    projectName={previousAds.projectName}
                                                    star={previousAds.star}
                                                />)}
                                        </div>
                                    </div>

                                </div>
                            </section>

                        </div>

                        <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                                <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                                    Make an Offer
                                </h2>

                                {/* Activity Feed */}
                                <div className="mt-6 flow-root">
                                    <div className='flex flex-col space-y-4'>
                                        <div className="relative flex items-start justify-between">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <div className="ml-3 text-sm">
                                                    <span id="comments-description" className="text-gray-500">
                                                        Only YouTube Video
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <span id="comments-description" className="text-gray-500">
                                                    10000$
                                                </span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start justify-between">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <div className="ml-3 text-sm">
                                                    <span id="comments-description" className="text-gray-500">
                                                        Instagram Post
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <span id="comments-description" className="text-gray-500">
                                                    5000$
                                                </span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start justify-between">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <div className="ml-3 text-sm">
                                                    <span id="comments-description" className="text-gray-500">
                                                        Instagram Story
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <span id="comments-description" className="text-gray-500">
                                                    1000$
                                                </span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start justify-between">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="comments"
                                                    aria-describedby="comments-description"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <div className="ml-3 text-sm">
                                                    <span id="comments-description" className="text-gray-500">
                                                        Instagram Post + Story
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <span id="comments-description" className="text-gray-500">
                                                    5500$
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-row items-center justify-between">
                                    <div className='font-medium'>Total: 3000$</div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Make an Offer
                                    </button>
                                </div>
                            </div>
                        </section>

                    </div>
                    <FAQ />

                </main>
            </div>
        </>
    )
}
