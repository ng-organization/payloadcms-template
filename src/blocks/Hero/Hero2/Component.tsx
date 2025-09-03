import { Button } from '@/components/ui/button'
import { Hero2Block as Hero2BlockProps } from '@/payload-types'
import Image from '@/components/PayloadImage'
import Link from 'next/link'

export function Hero2Block({ title, description, image, links }: Hero2BlockProps) {
  const link1 = links?.[0]
  const link2 = links?.[1]
  return (
    <main>
      <section className="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]">
        <div className="py-20 md:py-36">
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <div>
              <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
                {description}
              </p>

              <div className="flex items-center justify-center gap-3">
                {link1 && (
                  <Button asChild size="lg">
                    <Link href={link1.link.url || '#'}>
                      <span className="text-nowrap">{link1.link.label}</span>
                    </Link>
                  </Button>
                )}
                {link2 && (
                  <Button asChild size="lg" variant="outline">
                    <Link href={link2.link.url || '#'}>
                      <span className="text-nowrap">{link2.link.label}</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="mt-12 md:mt-16">
                <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                  <Image media={image} alt="app screen" width="2880" height="1842" priority/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
