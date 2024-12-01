'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    toast.success(t('contact.messageSent'), {
      description: t('contact.messageSentDesc'),
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-della text-4xl font-bold text-gray-900">
          {t('contact.title')}
        </h1>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {t('contact.getInTouch')}
            </h2>
            <p className="text-gray-600">{t('contact.description')}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-[#FF8000]" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-[#FF8000]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-[#FF8000]" />
                <span>info@coffeeshop.com</span>
              </div>
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-900">
                {t('contact.businessHours')}
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{t('contact.weekdays')}: 8:00 AM - 8:00 PM</p>
                <p>{t('contact.weekends')}: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              {t('contact.sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  {t('contact.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  {t('contact.subject')}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF8000] hover:bg-[#FF8000]/90"
              >
                {t('contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 