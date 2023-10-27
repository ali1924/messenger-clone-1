import Image from "next/image";
import AuthForm from "./components/AuthForm";
const page = () => {
    return (
        <div className="
        min-h-full
        flex
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        md:px-8
        bg-gray-100

        ">
            <div className="sm:mx-auto sm:w-full lg:max-w-md">
                {/* Logo */}
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width="48"
                    height="48"
                    className="mx-auto w-auto"
                />
                {/* Heading */}
                <h2 className="
                  text-3xl
                  font-bold
                  text-center
                  tracking-tight
                  text-gray-900
                ">
                    Sign in your account
                </h2>
            </div>
            {/* AuthForm */}
            <AuthForm />
        </div>
    );
};

export default page;