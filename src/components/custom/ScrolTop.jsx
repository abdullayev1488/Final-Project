import { IconArrowUp } from '@tabler/icons-react'

export const ScrolTop = ({ scrollTop, showScroll }) => {
    return (
        <button
            onClick={scrollTop}
            className={`w-12 h-12 rounded-full border-2 border-[#ff512f] flex items-center justify-center text-[#ff512f] hover:bg-[#ff512f] hover:text-white transition-all duration-300 transform cursor-pointer ${showScroll ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
            <IconArrowUp size={24} />
        </button>
    )
}
