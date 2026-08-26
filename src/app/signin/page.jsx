"use client"

import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(data, error)
        if (error) {
            toast.error(error.message)
            return
        }
        toast.success("Sign In Successful!!")

    }
    const handeGoogleSignin = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        })
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("Signin Successfull!!")
        console.log(data, error)


    }
    return (
        <div className='flex justify-center items-center'>
            <Card className='py-5'>
                <h1 className='font-bold text-2xl flex justify-center items-center'>Sign In</h1>
                <Form className="flex w-96 flex-col gap-4 space-y-3" onSubmit={onSubmit}>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter Valid Email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button
                            type="submit">
                            <Check
                            />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
                <div className='space-y-2'>
                    <h1 className='font-semibold text-2xl text-center'>or</h1>
                    <Button onClick={handeGoogleSignin} variant='outline' className='w-full'><FaGoogle /> Signin With Google</Button>
                </div>


            </Card>

        </div >
    );
};

export default SignInPage;