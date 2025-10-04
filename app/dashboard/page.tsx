import React from 'react'

const Dashboard = () => {
    return (
        <div className='min-h-screen bg-gray-50 px-6 lg:px-8 py-6'>
            {/* Welcome */}

            <div className='bg-[#f9f9f9] p-6 rounded-2xl shadow-sm flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-semibold'>Good Morning, Sagar 👋</h1>
                <div className='flex items-center gap-4 text-gray-500 text-sm'>
                    <p>🔥 5-day streak</p>
                    <p>Next badge at 7 days</p>
                </div>
            </div>

            {/* Main Grid */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Left Column */}

                <div className='lg:col-span-2 space-y-6'>
                    {/* Goal */}
                    <div className='bg-[#f9f9f9] p-6 rounded-2xl shadow-sm'>
                        <h2 className='text-lg font-semibold'>Goal</h2>
                        <p className='text-gray-600'>Muscle</p>
                        <div className='flex justify-between mt-2 text-sm text-gray-700'>
                            <span>Current Weight: <strong>70 kg</strong> </span>
                            <span>Target Weight: <strong>75 kg</strong> </span>
                        </div>

                        <div className='w-full bg-gray-200 h-3 rounded-full mt-3'>
                            <div className='bg-green-500 h-3 rounded-full w-[70%]'></div>
                        </div>
                    </div>






                </div>

            </div>



        </div>
    )
}

export default Dashboard
