import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CTA1Block } from '@/blocks/CallToAction/CTA1/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContactFormBlock } from './Forms/ContactForm/Component'
import { Team1Block } from './Team/Team1/Component'
import { Feature1Block } from './Features/Feature1/Component'
import { Testimonial1Block } from './Testimonials/Testimonial1/Component'
import { Testimonial2Block } from './Testimonials/Testimonial2/Component'
import { FAQ1Block } from './FAQ/FAQ1/Component'
import { Hero1Block } from './Hero/Hero1/Component'
import { Hero2Block } from './Hero/Hero2/Component'
import { Stat1Block } from './Stats/Stat1/Component'
import { Stat2Block } from './Stats/Stat2/Component'

const blockComponents = {
  content: ContentBlock,
  cta1: CTA1Block,
  mediaBlock: MediaBlock,
  contactForm: ContactFormBlock,
  team1: Team1Block,
  feature1: Feature1Block,
  testimonial1: Testimonial1Block,
  testimonial2: Testimonial2Block,
  faq1: FAQ1Block,
  hero1: Hero1Block,
  hero2: Hero2Block,
  stat1: Stat1Block,
  stat2: Stat2Block,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
