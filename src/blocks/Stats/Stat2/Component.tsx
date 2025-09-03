import { Stat2Block as Stat2BlockProps } from '@/payload-types'

export function Stat2Block({ stats, description }: Stat2BlockProps) {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats?.map((stat) => (
              <div key={stat.id} className="space-y-0.5 md:text-center">
                <div className="text-primary text-4xl font-bold">{stat.value}</div>
                <p className="text-muted-foreground">{stat.title}</p>
              </div>
            ))}
            <div className="col-span-2 border-t pt-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <p className="text-muted-foreground text-balance text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
