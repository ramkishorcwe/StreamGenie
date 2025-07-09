import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase"; // 👈 update this path to your firebase config

const ForgottenPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage({ type: "success", text: "Reset link sent to your email." });
        } catch (error) {
            setMessage({ type: "error", text: error.message });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Forgot Password</h2>
                <p className="text-sm text-gray-500 mb-4 text-center">
                    Enter your registered email to receive a reset link.
                </p>

                {message.text && (
                    <div
                        className={`mb-4 px-4 py-2 rounded text-sm ${
                            message.type === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="/login" className="text-blue-600 hover:underline text-sm">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgottenPassword;
