export const MapSection = () => {
    return (
        <section className=" container mx-auto rounded-[20px] mt-30 w-full h-[600px] overflow-hidden transition-all duration-700">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3330013321956!2d49.87115011182593!3d40.379311671326555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8eb16591ed%3A0x5e96fe8cd273469d!2sCodeart%20Training%20Center!5e0!3m2!1sru!2saz!4v1770509132465!5m2!1sru!2saz"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}
