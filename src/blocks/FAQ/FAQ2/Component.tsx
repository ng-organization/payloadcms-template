'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ2Block as FAQ2BlockProps } from '@/payload-types'

export function FAQ2Block({ title, description, faqs }: FAQ2BlockProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">{description}</p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqs?.map((item, index) => (
                <AccordionItem key={item.id} value={item.id || index.toString()}>
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
      </div>
    </section>
  )
}
