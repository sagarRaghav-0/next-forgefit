'use client';
import { FitnessGoal, UserDetail } from '@/types/userDetail';
import { validation } from '@/validation/validation';
import Link from 'next/link';
import React, { useState } from 'react';

const UserDetailForm = () => {
    const [userDetail, setUserDetail] = useState<UserDetail>({
        first_name: "",
        last_name: "",
        age: 0,
        gender: "Male",
        height: 0,
        currentWeight: 0,
        goal: "Muscle Gain", // default
        targetWeight: 0,
        chest: undefined,
        waist: undefined,
        biceps_flexed: undefined,
        biceps_relexed: undefined,
        shoulder: undefined,
    });

    // const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setUserDetail((prev) => {
            let newValue: string | number = value;
            if (['age', 'gender', 'height', 'currentWeight', 'targetWeight', 'chest', 'waist', 'biceps_flexed', 'biceps_relexed', 'shoulder'].includes(name)) {
                let num = Number(value);
                if (num < 0) num = 0;
                newValue = num;
            }
            return { ...prev, [name]: newValue };
        });

    };

    const handleGoalChange = (goal: FitnessGoal) => {
        setUserDetail((prev) => ({ ...prev, goal }));
    };


    const handleSubmit = async () => {
        const { isValid, message } = validation(userDetail);
        if (!isValid) {
            alert(message);
            return;
        }
        console.log(userDetail);

    }





    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-screen">
            {/* Left Image */}
            <div className="p-8">
                <img
                    src="/images/second.webp"
                    alt="Fitness"
                    className="w-full h-full object-cover scale-x-[-1] rounded-2xl shadow-lg"
                />
            </div>

            {/* Right Form */}
            <div className="flex flex-col justify-center px-10 bg-white">
                <h1 className="text-3xl font-anton tracking-wider mb-2 text-[#222222]">
                    Get Started
                </h1>
                <p className="text-gray-500 mb-6">
                    Tell us about your goals to set up your fitness journey
                </p>

                {/* Basic Info */}
                <h2 className="font-semibold mb-2">Basic Info</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input name="first_name" type="text" placeholder="first_name" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="last_name" type="text" placeholder="last_name" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="age" type="number" placeholder="Age" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <select
                        name="gender"
                        className="border rounded-lg px-4 py-2"
                        onChange={handleChange}
                        value={userDetail.gender}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input name="height" type="number" placeholder="Height (cm)" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="currentWeight" type="number" placeholder="Current Weight (kg)" className="border rounded-lg px-4 py-2 col-span-2" onChange={handleChange} />
                </div>

                {/* Fitness Goal */}
                <h2 className="font-semibold mb-2">Fitness Goal</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {["Muscle Gain", "Fat Loss", "Endurance"].map((goal) => (
                        <button
                            key={goal}
                            type="button"
                            onClick={() => handleGoalChange(goal as FitnessGoal)}
                            className={`border-2 rounded-lg px-4 py-3 ${userDetail.goal === goal ? "border-blue-500 bg-blue-100" : "hover:border-blue-500"
                                }`}
                        >
                            {goal}
                        </button>
                    ))}
                </div>

                {/* Target Setup */}
                <h2 className="font-semibold mb-2">Target Weight</h2>
                <input name="targetWeight" type="number" placeholder="Target Weight (kg)" className="border rounded-lg px-4 py-2 mb-6 w-full" onChange={handleChange} />

                {/* Initial Measurements */}
                <h2 className="font-semibold mb-2">Initial Measurements (Optional)</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <input name="chest" type="number" placeholder="Chest" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="waist" type="number" placeholder="Waist" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="shoulder" type="number" placeholder="Shoulder" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="biceps_flexed" type="number" placeholder="Biceps Flexed" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                    <input name="biceps_relexed" type="number" placeholder="Biceps Relaxed" className="border rounded-lg px-4 py-2" onChange={handleChange} />
                </div>

                {/* Preview Card */}
                <div className="border rounded-lg p-4 mb-6 bg-gray-50 text-sm">
                    <p><strong>First Name:</strong> {userDetail.first_name || "—"}</p>
                    <p><strong>Last Name:</strong> {userDetail.last_name || "—"}</p>
                    <p><strong>Age:</strong> {userDetail.age || "—"}</p>
                    <p><strong>Gender:</strong> {userDetail.gender || "—"}</p>
                    <p><strong>Height:</strong> {userDetail.height} cm</p>
                    <p><strong>Current Weight:</strong> {userDetail.currentWeight} kg</p>
                    <p><strong>Goal:</strong> {userDetail.goal}</p>
                    <p><strong>Chest:</strong> {userDetail.chest}</p>
                    <p><strong>Waist:</strong> {userDetail.waist}</p>
                    <p><strong>Shoulder:</strong> {userDetail.shoulder}</p>
                    <p><strong>Biceps Flexed:</strong> {userDetail.biceps_flexed}</p>
                    <p><strong>Biceps Relaxed:</strong> {userDetail.biceps_relexed}</p>
                </div>

                {/* Submit */}
                <Link href="/dashboard" onClick={handleSubmit}>
                    <button className="w-full bg-[#333333] text-white py-3 rounded-lg font-semibold hover:bg-[#111111] transition">
                        Finish &amp; Go to Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserDetailForm;
