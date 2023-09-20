import { HorizontalDivider } from "@/app/compnents/divider/horizontal"
import { SectionTitle } from "@/app/compnents/section-title"
import { ProjectCard } from "./project-card"
import { Link } from "@/app/compnents/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="destaques" title="Projetos em destaque" />
            <HorizontalDivider className="mb-16" />

            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16" />
                <ProjectCard />
                <HorizontalDivider className="my-16" />

                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        ver todos
                        <HiArrowNarrowRight/>
                    </Link>
                </p>
            </div>
        </section>
    )
}