import { Stat1Block as Stat1BlockProps } from '@/payload-types'

import { Card } from '@/components/ui/card'

export function Stat1Block({ stats }: Stat1BlockProps) {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Card className="grid gap-0.5 divide-y *:py-8 *:text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats?.map((stat) => (
            <div key={stat.id}>
              <div className="text-foreground space-y-1 text-4xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
