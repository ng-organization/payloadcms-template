'use client'

import type { ContactFormBlock as ContactFormBlockProps } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const ContactFormBlock: React.FC<ContactFormBlockProps> = ({ emailTo }) => {
  const t = useTranslations('contact-form')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data)
    console.log('Email will be sent to:', emailTo)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form after successful submission
    reset()
    alert(t('success-message'))
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                {t('name')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder={t('name-placeholder')}
                {...register('name', {
                  required: t('validation.name-required'),
                  minLength: {
                    value: 2,
                    message: t('validation.name-min-length'),
                  },
                })}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {t('email')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t('email-placeholder')}
                {...register('email', {
                  required: t('validation.email-required'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('validation.email-invalid'),
                  },
                })}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {t('message')} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder={t('message-placeholder')}
              rows={6}
              {...register('message', {
                required: t('validation.message-required'),
                minLength: {
                  value: 10,
                  message: t('validation.message-min-length'),
                },
              })}
              className={errors.message ? 'border-destructive' : ''}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>

          <div className="flex justify-end">
            <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[120px]">
              {isSubmitting ? t('sending') : t('send-message')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
