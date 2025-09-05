import Image, { ImageProps } from 'next/image'
import type { Media } from '@/payload-types'
import {
  hasValidMediaUrl,
  getMediaUrlWithCache,
  getMediaAlt,
  getMediaDimensions,
} from '@/utilities/mediaHelpers'
import { cn } from '@/lib/utils'

interface PayloadImageProps extends Omit<ImageProps, 'src'> {
  /** PayloadCMS 媒体对象 */
  media: Media | string | number | null | undefined
  /** 是否自动添加响应式类 */
  responsive?: boolean
  /** 自定义宽高比 */
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto'
}

/**
 * 安全的 Image 组件，自动处理 PayloadCMS 媒体对象
 */
export default function PayloadImage({
  media,
  alt,
  responsive = true,
  aspectRatio = 'auto',
  className,
  width,
  height,
  ...props
}: PayloadImageProps) {
  // 如果媒体对象无效，不渲染
  if (!hasValidMediaUrl(media)) {
    return null
  }

  // 获取安全的 URL 和 alt
  const src = getMediaUrlWithCache(media)
  const safeAlt = alt || getMediaAlt(media, '')

  // 获取媒体尺寸
  const dimensions = getMediaDimensions(media)

  // 自动设置宽高（如果未提供且媒体对象有尺寸信息）
  const imageWidth = width || dimensions?.width || 1200
  const imageHeight = height || dimensions?.height || 800

  // 构建响应式类名
  const responsiveClasses = responsive ? 'w-full h-auto' : ''

  // 宽高比类名
  const aspectRatioClasses = {
    square: 'aspect-square object-cover',
    video: 'aspect-video object-cover',
    portrait: 'aspect-[3/4] object-cover',
    landscape: 'aspect-[4/3] object-cover',
    auto: 'object-cover',
  }

  const combinedClassName = cn(
    responsiveClasses,
    aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
    aspectRatio === 'auto' && 'object-cover',
    className,
  )

  return (
    <Image
      src={src}
      alt={safeAlt}
      width={imageWidth}
      height={imageHeight}
      className={combinedClassName}
      {...props}
    />
  )
}
