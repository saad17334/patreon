"use client"
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser } from "@/actions/useractions";
import { updateProfile } from "@/actions/useractions";
import toast from 'react-hot-toast';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        userName: "",
        profilePic: "",
        coverPic: "",
        razorPayId: "",
        razorPaySecret: ""
    });

    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        // redirect if not logged in
        if (status === "unauthenticated") {
            router.push("/login");
            return;
        }

        // fetch user data only if authenticated
        const getData = async () => {
            if (!session?.user?.name) return; // session not ready
            setLoadingUser(true);
            const u = await fetchuser(session.user.name);
            if (u) {
                setForm({
                    name: u.name || "",
                    email: u.email || "",
                    userName: u.Username || "",
                    profilePic: u.profilePic || "",
                    coverPic: u.coverPic || "",
                    razorPayId: u.razorPayId || "",
                    razorPaySecret: u.razorPaySecret || ""
                });
            }
            setLoadingUser(false);
        };

        if (status === "authenticated") getData();
    }, [status, session, router]);

    if (status === "loading" || loadingUser) {
        return <div className="text-white text-center mt-20">Loading...</div>;
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!session?.user) {
            alert("User session not loaded yet!");
            router.push("/login");
            return;
        }

        const res = await updateProfile(form, session.user.email);
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success("Profile Updated Successfully");
        }
    };

    return (
        <div>
            <form
                className="flex flex-col gap-4 mt-20 mx-auto justify-center items-center"
                onSubmit={handleSubmit}
            >
                <h1 className="text-white text-2xl font-bold">
                    Welcome to your Dashboard
                </h1>

                <input
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.userName}
                    onChange={handleChange}
                    name="userName"
                    type="text"
                    placeholder="UserName"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.profilePic}
                    onChange={handleChange}
                    name="profilePic"
                    type="text"
                    placeholder="Profile Picture URL"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.coverPic}
                    onChange={handleChange}
                    name="coverPic"
                    type="text"
                    placeholder="Cover Picture URL"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.razorPayId}
                    onChange={handleChange}
                    name="razorPayId"
                    type="text"
                    placeholder="Razorpay ID"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />
                <input
                    value={form.razorPaySecret}
                    onChange={handleChange}
                    name="razorPaySecret"
                    type="text"
                    placeholder="Razorpay Secret"
                    className="p-2 rounded-lg bg-gray-800 text-white w-[300px]"
                />

                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-full text-sm px-4 py-2.5 text-center">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Dashboard;