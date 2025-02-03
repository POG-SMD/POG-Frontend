import { mainLayoutContext } from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Acordion";
import { mockMaterial } from "./mock";
import { cn } from "@/libs";

// interface CardProps {
//   id: string;
//   title: string;
//   description: string;
//   subCard?: {
//     title: string;
//     description: string;
//     link: string;
//   };
// }

export const Material = () => {
  const { setHead } = useOutletContext<mainLayoutContext>();

  useEffect(() => {
    setHead({ title: "Vizualize os materiais e avisos" });
  }, []);

  return (
    <Accordion
      className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 sm:gap-10 gap-4 px-2 sm:px-10 mb-10"
      type="single"
      collapsible
    >
      {mockMaterial.map((material) => (
        <AccordionItem
          className={cn(
            "w-full bg-secondary min-h-[308.5px] rounded-lg border-2 border-primary h-fit overflow-hidden"
          )}
          value={material.id}
        >
          <h4 className="px-2 text-2xl my-4 text-center font-bold">
            {material.title}
          </h4>
          <h5 className="px-2 text-xl font-semibold">Descrição do projeto:</h5>
          <p
            className={cn("px-2 text-lg my-3 max-h-28 overflow-auto", {
              "max-h-40": !material.subCard,
            })}
          >
            {material.description}
          </p>
          {material.subCard && (
            <>
              <AccordionTrigger className="flex justify-center mt-5 bg-gray-200 "></AccordionTrigger>
              <AccordionContent className="bg-gray-200 p-6 pt-0 flex flex-col gap-3 max-h-64 xl:max-h-96 overflow-y-auto">
                {material.subCard.map((card) => (
                  <article className="bg-secondary p-2 border border-primary rounded-lg">
                    <div className="flex flex-wrap justify-between items-center mb-8">
                      <h4 className="px-2 text-xl font-bold">
                        {card.title}
                      </h4>
                      <a href={card.link} className="text-lg" target="_blank" rel="noopener">
                        {card.link}
                      </a>
                    </div>
                    <p
                      className={cn("px-2 my-3 max-h-28 overflow-auto")}
                    >
                      {card.descripition}
                    </p>
                  </article>
                ))}
              </AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
