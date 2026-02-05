import { IconX } from '@tabler/icons-react'
export const FuturedModal = ({ setIsModalOpen }) => {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/80 transition-all duration-300"
            onClick={() => setIsModalOpen(false)}
        >
            <div
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 z-[110] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
                >
                    <IconX size={24} />
                </button>

                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/eECNpQ67JRo?si=89SNZCVojf8AU5dd&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
