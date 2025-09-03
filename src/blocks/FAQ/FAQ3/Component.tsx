'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ3Block as FAQ3BlockProps } from '@/payload-types'

export function FAQ3Block({ title, faqs }: FAQ3BlockProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="space-y-12">
          <h2 className="text-foreground text-center text-4xl font-semibold">{title}</h2>

          <Accordion type="single" collapsible className="-mx-2 sm:mx-0">
            {faqs?.map((item, index) => (
              <div className="group" key={item.id || index.toString()}>
                <AccordionItem
                  value={item.id || index.toString()}
                  className="data-[state=open]:bg-muted peer rounded-xl border-none px-5 py-1 data-[state=open]:border-none md:px-7"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-5 -mb-px group-last:hidden peer-data-[state=open]:opacity-0 md:mx-7" />
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
