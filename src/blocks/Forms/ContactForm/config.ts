import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
      name: 'emailTo',
      type: 'text',
      label: 'Email to',
      required: true,
    },
  ],
}
