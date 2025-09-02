import { CTA1Block as CTA1BlockProps } from '@/payload-types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA1Block({ title, links }: CTA1BlockProps) {
  const link1 = links?.[0]
  const link2 = links?.[1]
  return (
    <section>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">
                {title}
              </h2>
            </div>
            <div className="flex justify-end gap-3">
              {link2 && (
                <Button asChild variant="outline" size="lg">
                  <Link href={link2.link.url || '#'}>{link2.link.label}</Link>
                </Button>
              )}
              {link1 && (
                <Button asChild size="lg">
                  <Link href={link1.link.url || '#'}>{link1.link.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
