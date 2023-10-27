'use client';
import clsx from "clsx";
import { IconType } from "react-icons";
interface AuthSocialButtonProps {
    icon?: IconType,
    onClick: () => void,
    title?:string,
};
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
    title,
}) => {
    return (
        <button 
        
        type="button"
        onClick={onClick}
        className={clsx(`
        inline-flex
        w-full
        justify-center
        rounded-md
        px-4
        py-3
        shadow-sm
        text-gray-500
        ring-1
        ring-inset
        ring-gray-300
        hover:bg-gray-50
        focus:outline-offset-0
        `
        
        )}
        
        >
            <Icon/>
        </button>
    );
};
export default AuthSocialButton;