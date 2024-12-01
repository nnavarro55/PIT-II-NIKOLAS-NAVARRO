import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AddressInfo } from "@/types/checkout";
import { useLanguage } from "@/lib/language-provider";

type DeliveryAddressFormProps = {
  addressData: AddressInfo;
  onAddressChange: (field: keyof AddressInfo, value: string | boolean) => void;
};

export function DeliveryAddressForm({
  addressData,
  onAddressChange,
}: DeliveryAddressFormProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t('checkout.deliveryAddress')}</h2>
      
      <div className="grid gap-4">
        <Input
          placeholder={t('checkout.name')}
          value={addressData.name}
          onChange={(e) => onAddressChange('name', e.target.value)}
          required
        />
        <Input
          placeholder={t('checkout.email')}
          value={addressData.email}
          onChange={(e) => onAddressChange('email', e.target.value)}
          required
        />
        <Input
          placeholder={t('checkout.phone')}
          value={addressData.phone}
          onChange={(e) => onAddressChange('phone', e.target.value)}
          required
        />
        <label htmlFor="whatsappUpdates">{t('checkout.whatsappUpdates')}</label>
        <Checkbox
          checked={addressData.whatsappUpdates}
          onCheckedChange={(value) => onAddressChange('whatsappUpdates', value)}
        >
          {t('checkout.whatsappUpdates')}
        </Checkbox>
        <Input
          placeholder={t('checkout.street')}
          value={addressData.street}
          onChange={(e) => onAddressChange('street', e.target.value)}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder={t('checkout.city')}
            value={addressData.city}
            onChange={(e) => onAddressChange('city', e.target.value)}
            required
          />
          <Input
            placeholder={t('checkout.state')}
            value={addressData.state}
            onChange={(e) => onAddressChange('state', e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder={t('checkout.zipCode')}
            value={addressData.zipCode}
            onChange={(e) => onAddressChange('zipCode', e.target.value)}
            required
          />
          <Input
            placeholder={t('checkout.country')}
            value={addressData.country}
            onChange={(e) => onAddressChange('country', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
} 