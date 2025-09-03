import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'
import { Testimonial2Block as Testimonial2BlockProps } from '@/payload-types'

export function Testimonial2Block({ testimonial, author, avatar }: Testimonial2BlockProps) {
  return (
    <section>
      <div className="bg-muted py-24">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <div className="max-w-xl">
            <Quote className="fill-background stroke-background mx-auto size-8 drop-shadow-sm" />
            <blockquote className="mt-6">
              <p className="text-foreground text-xl">{testimonial}</p>
              <footer className="mt-6 flex flex-col items-center justify-center">
                <Avatar className="ring-foreground/10 size-12 border border-transparent shadow ring-1">
                  <AvatarImage
                    src={typeof avatar === 'object' ? avatar?.url! : undefined}
                    alt={author}
                  />
                  <AvatarFallback>{author.charAt(0)}</AvatarFallback>
                </Avatar>
                <cite className="text-foreground mt-2 text-lg font-medium">{author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
