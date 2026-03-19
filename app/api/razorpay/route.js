import mongoose from "mongoose";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import User from "@/models/User";

// MongoDB connection helper
let cached = global.mongoose || { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export async function POST(request) {
    await connectDB();

    let raw = await request.text();
    let body = JSON.parse(raw);

    console.log("BODY:", body);

    let p = await Payment.findOne({ oid: body.razorpay_order_id });

    if (!p) {
        return NextResponse.json({ success: false });
    }

    var to_user = await User.findOne({ Username: p.to_user });

    if (!to_user) {
        throw new Error("Recipient user not found");
    }

    let RazorpaySecret = to_user.razorPaySecret;

    let isValid = validatePaymentVerification(
    {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id
    },
    body.razorpay_signature,
    RazorpaySecret
);

    if (isValid) {
        const updated = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );

        console.log("✅ Payment updated:", updated);

        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${updated.to_user}?paymentdone=true`
        );
    }

    return NextResponse.json({ success: false });
}