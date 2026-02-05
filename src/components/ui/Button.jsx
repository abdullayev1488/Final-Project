import { IconArrowNarrowRight } from '@tabler/icons-react'

export const Button = ({ className, text = "Purchase Now" }) => {
    return (
        <button

            className={`group mt-8 cursor-pointer flex items-center gap-3 px-6 py-3 rounded-[4px] text-white text-[14px] font-semibold font-poppins transition-all duration-500 ease-in-out ${className}`}
            style={{
                background: "linear-gradient(90deg, #ff512f, #dd2476)",
            }}
        >
            {text}
            <IconArrowNarrowRight
                size={18}
                className="transition-transform duration-300 group-hover:rotate-[-45deg]"
            />
        </button>
    )
}
