import { ImageMedia } from '@/components/Media/ImageMedia'
import { Feature1Block as Feature1BlockProps } from '@/payload-types'

export function Feature1Block({ title, description, features }: Feature1BlockProps) {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">{description}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
            {features?.map((feature, index) => (
              <div className="space-y-4" key={index}>
                <div className="aspect-video overflow-hidden bg-muted-foreground/15 rounded-xl">
                  <ImageMedia resource={feature.image} alt={feature.title} />
                </div>
                <div className="sm:max-w-sm">
                  <h3 className="text-foreground text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground my-4 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
