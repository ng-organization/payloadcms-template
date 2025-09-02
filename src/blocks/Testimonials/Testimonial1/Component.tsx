import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Testimonial1Block as Testimonial1BlockProps } from '@/payload-types'

export function Testimonial1Block({ title, description, testimonials }: Testimonial1BlockProps) {
  return (
    <section>
      <div className="bg-muted py-24">
        <div className="@container mx-auto w-full max-w-5xl px-6">
          <div className="mb-12">
            <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
            <p className="text-muted-foreground my-4 text-balance text-lg">{description}</p>
          </div>
          <div className="@lg:grid-cols-2 @3xl:grid-cols-3 grid gap-6">
            {testimonials?.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-background ring-foreground/10 rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1">
                  <p className="text-foreground">{testimonial.testimonial}</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                    <AvatarImage
                      src={
                        typeof testimonial.avatar !== 'number'
                          ? testimonial.avatar?.url
                            ? testimonial.avatar?.url
                            : undefined
                          : undefined
                      }
                      alt={testimonial.author}
                    />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-foreground text-sm font-medium">{testimonial.author}</div>
                  <span aria-hidden className="bg-foreground/25 size-1 rounded-full"></span>
                  <span className="text-muted-foreground text-sm">{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
