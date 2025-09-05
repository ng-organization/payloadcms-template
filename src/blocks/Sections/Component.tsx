import RichText from '@/components/RichText'
import { SectionsBlock as SectionsBlockProps } from '@/payload-types'
import Image from '@/components/PayloadImage'
import { getMediaAlt } from '@/utilities/mediaHelpers'

type SectionsBlockPropsWithoutBlockType = Omit<SectionsBlockProps, 'blockType'>

const blockComponents = {
  contentWithImage12Grid: ContentWithImage12Grid,
  contentWithImage23Grid: ContentWithImage23Grid,
  contentWithImage32Grid: ContentWithImage32Grid,
  contentWithImageVerticalSplit: ContentWithImageVerticalSplit,
}

export const SectionsBlock: React.FC<SectionsBlockProps> = (props) => {
  const { types, content, image } = props

  if (types && types in blockComponents) {
    const Block = blockComponents[types]
    return <Block content={content} image={image} />
  }

  return null
}

export function ContentWithImage12Grid({ content, image }: SectionsBlockPropsWithoutBlockType) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-prose md:max-w-none">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>

          <div className="overflow-hidden">
            <Image
              media={image}
              className="rounded w-full h-auto max-w-full"
              alt={getMediaAlt(image)}
              aspectRatio="landscape"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContentWithImage23Grid({ content, image }: SectionsBlockPropsWithoutBlockType) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-1">
            <div className="max-w-prose md:max-w-none">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>

          <div className="md:col-span-3 overflow-hidden">
            <Image
              media={image}
              className="rounded w-full h-auto max-w-full"
              alt={getMediaAlt(image)}
              aspectRatio="landscape"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContentWithImage32Grid({ content, image }: SectionsBlockPropsWithoutBlockType) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-3 overflow-hidden">
            <Image
              media={image}
              className="rounded w-full h-auto max-w-full"
              alt={getMediaAlt(image)}
              aspectRatio="landscape"
            />
          </div>

          <div className="md:col-span-1">
            <div className="max-w-prose md:max-w-none">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContentWithImageVerticalSplit({
  content,
  image,
}: SectionsBlockPropsWithoutBlockType) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="max-w-prose">
            <RichText data={content} enableGutter={false} />
          </div>

          <div className="overflow-hidden">
            <Image
              media={image}
              className="rounded w-full h-auto max-w-full"
              alt={getMediaAlt(image)}
              aspectRatio="video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
