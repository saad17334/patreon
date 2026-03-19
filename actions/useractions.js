"use server"

import Razorpay from "razorpay";
import User from "@/models/User";
import Payment from "@/models/Payment";
import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export const initiate = async (amount, to_username, paymentform) => {

    await connectDB();

    var to_user = await User.findOne({ Username: to_username });

    if (!to_user) {
        throw new Error("Recipient user not found");
    }

    let RazorpayKey = to_user.razorPayId;
    let RazorpaySecret = to_user.razorPaySecret;

    var instance = new Razorpay({
        key_id: RazorpayKey,
        key_secret: RazorpaySecret,
    });

    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options);

    await Payment.create({
        name: paymentform.name,
        to_user: to_username,
        oid: x.id,
        message: paymentform.message,
        amount: amount/100
    })
    return x;
};

export const fetchuser = async (username) => {
    await connectDB();
    let user = await User.findOne({ Username: username }).lean();

    if (!user) return null;

    return {
        ...user,
        _id: user._id.toString(),
        createdAt: user.createdAt?.toISOString(),
        updatedAt: user.updatedAt?.toISOString(),
    };
}

export const fetchpayments = async (username) => {
    await connectDB();
    let payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(4)
        .lean();

    return payments.map(p => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString(),
    }));
}

export const updateProfile = async (ndata, oldEmail) => {
    await connectDB();
    const existingUser = await User.findOne({ 
        Username: ndata.userName,
        email: { $ne: oldEmail }
    });

    if (existingUser) {
        return { error: "Username already exists" };
    }

    console.log("Updating profile with data:", ndata, "and oldEmail:", oldEmail);

    const existingEmail = await User.findOne({
    $and: [
        { email: ndata.email },
        { email: { $ne: oldEmail } }
    ]
});

    console.log("Existing email check result:", existingEmail);
    if (existingEmail) {
        return { error: "Email already exists" };
    }

    await User.updateOne({ email: oldEmail }, ndata);

    return { success: true };
};