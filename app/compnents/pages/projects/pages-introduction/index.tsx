import { Link } from "@/app/compnents/link"
import { SectionTitle } from "@/app/compnents/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <SectionTitle 
                subtitle="projetos"
                title="Meus Projetos"
                className="text-center items-center [&>h3]:text-4xl"
            />

            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui sequi porro quisquam dicta. Architecto laborum labore placeat odit quibusdam!
                </p>
                <Link href="/">
                    <HiArrowNarrowLeft size={20} />
                    Voltar para home
                </Link>
            </div>
        </section>
    )
}