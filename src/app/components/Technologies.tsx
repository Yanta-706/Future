"use client";

import { siteConfig } from "../config";
import { slideInFromRight } from "../utils/motion";
import MainTechnology from "./MainTechnology";
import MotionTag from "./MotionTag";
import SectionLabel from "./SectionLabel";
import { useState } from "react";
import TechnologyItem from "./TechnologyItem";
import { Separator } from "@/components/ui/separator";

export default function Technologies() {
    enum Categories {
        MAIN = "Main",
        ALL = "All Technologies",
    }
    const [selectedCategory, setSelectedCategory] = useState(Categories.MAIN);
    const technologies = siteConfig.sections.technologies;
    const allTechnologies = [...technologies.main, ...technologies.other];

    return (
        <MotionTag
            tag="div"
            variants={slideInFromRight(1.4)}
            initial="hidden"
            animate="visible"
        >
            <section
                id="technologies"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12 lg:pl-6"
            >
                <SectionLabel label="TECHNOLOGIES" />
                {selectedCategory === Categories.MAIN ? (
                    <div className="w-full grid grid-cols-3 gap-4">
                        {technologies.main.map((technology, index) => {
                            return (
                                <MainTechnology
                                    key={index}
                                    technology={technology}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="w-full grid grid-cols-7 gap-2">
                        {allTechnologies.map((technology, index) => {
                            return (
                                <TechnologyItem
                                    key={index}
                                    technology={technology}
                                />
                            );
                        })}
                    </div>
                )}
                <div className="w-full flex justify-center items-center gap-4 mt-4 text-[10px]">
                    <button
                        className={`hover:text-white transition ${
                            selectedCategory === Categories.MAIN
                                ? "text-white"
                                : "text-slate-350"
                        }`}
                        onClick={() => setSelectedCategory(Categories.MAIN)}
                    >
                        Main Technologies
                    </button>
                    <Separator orientation="vertical" />
                    <button
                        className={`hover:text-white transition ${
                            selectedCategory === Categories.ALL
                                ? "text-white"
                                : "text-slate-350"
                        }`}
                        onClick={() => setSelectedCategory(Categories.ALL)}
                    >
                        All Technologies
                    </button>
                </div>
            </section>
        </MotionTag>
    );
}