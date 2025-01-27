"use client";
import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { auth_schema } from "@/schema/auth";
import { Field, Submit } from "@/components/forms";
import Link from "next/link";
import auth from "@/services/auth";
import { UserContext } from "@/context/UserContext";

const Page = () => {
    const { login, user } = useContext(UserContext);
    
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            const response = await auth.register(values)
            if(response?.data.success) {
                login(response?.data?.result);
            }
        } catch (error) {
            console.log("error: ", error);
        } finally {
            setLoading(false);
        }
    }

    if(user) return;

    return (
        <div className="login h-full w-full flex items-center justify-center">
            <div className="form w-[95%] md:w-[420px] bg-[#eeeeee] p-[24px] rounded-[8px]">
                <h2 className="text-[22px] mb-4 font-[500]"> Register </h2>

                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={auth_schema}
                    onSubmit={(values)=> handleSubmit(values)}
                >
                    {()=> (
                        <>
                            <Field 
                                name="username"
                                type="username"
                                label="Username"
                                placeholder="example: jdoe"
                                disbaled={loading}
                            />

                            <Field 
                                name="password"
                                type="password"
                                label="Password"
                                disbaled={loading}
                            />

                            <Submit 
                                title="Register"
                                loading={loading}
                            />
                        </>
                    )}
                </Formik>

                <p className="text-sm text-center mb-2"> Already have an account ? <Link href="/login" className="text-primary"> Login </Link></p>
            </div>
        </div>
    )
}

export default Page;