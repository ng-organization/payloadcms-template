import Image, { ImageProps } from 'next/image'
import type { Media } from '@/payload-types'
import { hasValidMediaUrl, getMediaUrlWithCache, getMediaAlt } from '@/utilities/mediaHelpers'

interface PayloadImageProps extends Omit<ImageProps, 'src'> {
  /** PayloadCMS 媒体对象 */
  media: Media | string | number | null | undefined
}

/**
 * 安全的 Image 组件，自动处理 PayloadCMS 媒体对象
 */
export default function PayloadImage({ media, alt, ...props }: PayloadImageProps) {
  // 如果媒体对象无效，不渲染
  if (!hasValidMediaUrl(media)) {
    return null
  }

  // 获取安全的 URL 和 alt
  const src = getMediaUrlWithCache(media)
  const safeAlt = alt || getMediaAlt(media, '')

  return <Image src={src} alt={safeAlt} {...props} />
}
