import type { Media } from '@/payload-types'
import { getMediaUrl as formatMediaUrl } from './getMediaUrl'

/**
 * 安全地检查媒体对象是否有有效的 URL
 * @param media - PayloadCMS 媒体对象
 * @returns 如果媒体对象有有效 URL 则返回 true
 */
export function hasValidMediaUrl(
  media: Media | string | number | null | undefined,
): media is Media {
  return !!(media && typeof media === 'object' && media.url)
}

/**
 * 安全地获取媒体 URL（整合了格式化功能）
 * @param media - PayloadCMS 媒体对象
 * @param cacheTag - 可选的缓存标签
 * @returns 格式化后的媒体 URL 或空字符串
 */
export function getMediaUrl(
  media: Media | string | number | null | undefined,
  cacheTag?: string | null,
): string {
  if (hasValidMediaUrl(media)) {
    // 使用原有的 formatMediaUrl 来处理 URL 格式化和缓存标签
    return formatMediaUrl(media.url, cacheTag)
  }
  return ''
}

/**
 * 安全地获取媒体 alt 文本
 * @param media - PayloadCMS 媒体对象
 * @param fallback - 备用 alt 文本
 * @returns alt 文本
 */
export function getMediaAlt(
  media: Media | string | number | null | undefined,
  fallback = '',
): string {
  if (hasValidMediaUrl(media)) {
    return media.alt || fallback
  }
  return fallback
}

/**
 * 安全地获取媒体尺寸
 * @param media - PayloadCMS 媒体对象
 * @returns 包含 width 和 height 的对象，如果不可用则为 undefined
 */
export function getMediaDimensions(
  media: Media | string | number | null | undefined,
): { width: number; height: number } | undefined {
  if (hasValidMediaUrl(media) && media.width && media.height) {
    return {
      width: media.width,
      height: media.height,
    }
  }
  return undefined
}

/**
 * 获取完整的媒体 URL（包含缓存标签）
 * 这个函数特别适用于 PayloadCMS 媒体对象，会自动使用 updatedAt 作为缓存标签
 * @param media - PayloadCMS 媒体对象
 * @returns 包含缓存标签的完整 URL
 */
export function getMediaUrlWithCache(media: Media | string | number | null | undefined): string {
  if (hasValidMediaUrl(media)) {
    const cacheTag = media.updatedAt || undefined
    return formatMediaUrl(media.url, cacheTag)
  }
  return ''
}
