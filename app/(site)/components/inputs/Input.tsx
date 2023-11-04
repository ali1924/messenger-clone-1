import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from 'react-hook-form'
import { BiSolidShow, BiSolidHide } from 'react-icons/bi';
import { type } from 'os';

interface InputProps {
    label: string,
    id: string,
    type?: string,
    required: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean,
}
type ShowPassword = boolean;
const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
}) => {

    const [showPassword, setShowPassword] = useState<ShowPassword>(false);
    const toggleShowPassword = useCallback(
        () => {
            if (showPassword) {
                setShowPassword(false);
            } else {
                setShowPassword(true);
            }
        },
        [showPassword],
    )

    return (
        <div>
            {/* lablel */}
            <label
                htmlFor={id}
                className="
                block
                text-sm
                font-medium
                text-gray-900
                leading-3
                ">
                {label}
            </label>
            {/* input */}
            <div className="
             mt-2
             relative
            ">
                <input
                    id={id}
                    type={`${type === 'password' ?
                        (showPassword ? "text" : "password") :
                        type
                        }`}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required: required })}
                    className={clsx(`
                    form-input
                    block
                    w-full
                    rounded-md
                    border-0
                    py-1.5
                    text-gray-900
                    shadow-sm
                    ring-2
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-300
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-sky-600
                    sm:text-sm
                    sm:leading-6`,
                        errors[id] && `focus:ring-rose-500`,
                        disabled && `opacity-50 cursor-default`,
                        type === 'password' && 
                         `                    
                        pr-12
                        lg:pr-10
                        sm:pr-10
                        md:pr-10`
                    )}
                />

                {
                    type === 'password' && <div className='
                    absolute 
                    right-0
                    top-0
                    w-6
                    mr-4
                    sm:mr-2.5
                    lg:mr-2
                    md:mr-2
                    my-1.5
                    flex
                    justify-center
                    '>
                        <span
                            onClick={toggleShowPassword}
                        >
                            {showPassword ?
                                <BiSolidHide className="w-6 h-6" /> :
                                <BiSolidShow className="w-6 h-6" />
                            }
                        </span>
                    </div>
                }

            </div>
        </div>
    );
};

export default Input;