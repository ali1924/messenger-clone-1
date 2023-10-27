"use client"


import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "./inputs/Input";
import Button from "../components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub ,BsGoogle} from 'react-icons/bs';
type Variant = 'Login' | 'Register';
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('Login');
    const [isLoading, setIsLoading] = useState(false);
    // toggle variant
    // const toggleVariant = useCallBack(() => {
    //     if (variant === 'Login') {
    //         setVariant('Register');
    //     } else {
    //         setVariant('Login');
    //     }
    // }, [variant]);


    // useForm
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    // onsubmit
    const onsubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        setIsLoading(true);

        // register (axios register)
        if (variant === 'Register') {
            // axios register
        }

        // login (NextAuth Login)
        if (variant === 'Login') {
            // NextAuth Login
        }
    }

    // socialAction
    const socialAction = (action: string) => {
        setIsLoading(true);
        // Social Login
    }
    return (
        <div className="
         mt-8
         sm:mx-auto
         sm:w-full
         sm:max-w-md
        ">
            <div className="
            px-4
            py-8
            bg-white
            shadow
            sm:rounded-lg
            sm:px-10
            ">
                <form
                    className="space-y-8"
                    onSubmit={handleSubmit(onsubmit)}
                >

                    {/* input */}
                    {
                        variant === 'Register' && <Input
                            id="name"
                            label="Name"
                            register={register}
                            errors={errors}
                        />
                    }
                    {/* Email input */}
                    <Input
                        id="email"
                        label="Email"
                        register={register}
                        errors={errors}
                    />
                    {/* Password Input */}
                    <Input
                        id="password"
                        label="Password"
                        register={register}
                        errors={errors}
                    />

                    {/* submit Button */}
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isLoading}
                        >
                            {variant === 'Login' ? 'Login' : 'Register'}
                        </Button>
                    </div>
                </form>

                {/* Social login */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="
                        absolute
                        inset-0
                        flex
                        item-center
                        ">
                            {/* border top */}
                            <div className="w-full border-t border-gray-300"></div>
                        </div>

                        {/*  */}
                        <div className="
                        relative
                        flex
                        justify-center
                        text-sm
                        ">
                            <span className="
                            bg-white
                            px-2
                            text-gray-500
                            ">Or Continue with</span>
                        </div>
                    </div>

                    {/* Social button */}
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;