import { FAQ1Block as FAQ1BlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ1Block({ title, description, faqs }: FAQ1BlockProps) {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div>
          <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
          <p className="text-muted-foreground mt-4 text-balance text-lg">{description}</p>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1"
          >
            {faqs?.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id || index.toString()}
                className="border-dotted"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
