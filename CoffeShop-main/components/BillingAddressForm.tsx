import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AddressInfo } from "@/types/checkout";
import { useLanguage } from "@/lib/language-provider";

type BillingAddressFormProps = {
  data: AddressInfo & { sameAsDelivery: boolean };
  deliveryData: AddressInfo;
  onChange: (field: keyof AddressInfo, value: string) => void;
  onSameAsDeliveryChange: (checked: boolean) => void;
};

export function BillingAddressForm({
  data,
  deliveryData,
  onChange,
  onSameAsDeliveryChange,
}: BillingAddressFormProps) {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t('checkout.billingAddress')}</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sameAsDelivery"
            checked={data.sameAsDelivery}
            onCheckedChange={(checked) => onSameAsDeliveryChange(checked as boolean)}
          />
          <label htmlFor="sameAsDelivery" className="text-sm">
            {t('checkout.sameAsDelivery')}
          </label>
        </div>
      </div>

      {!data.sameAsDelivery && (
        <div className="mt-4 grid gap-4">
          <Input
            placeholder={t('checkout.street')}
            value={data.street}
            onChange={(e) => onChange('street', e.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder={t('checkout.city')}
              value={data.city}
              onChange={(e) => onChange('city', e.target.value)}
              required
            />
            <Input
              placeholder={t('checkout.state')}
              value={data.state}
              onChange={(e) => onChange('state', e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder={t('checkout.zipCode')}
              value={data.zipCode}
              onChange={(e) => onChange('zipCode', e.target.value)}
              required
            />
            <Input
              placeholder={t('checkout.country')}
              value={data.country}
              onChange={(e) => onChange('country', e.target.value)}
              required
            />
          </div>
        </div>
      )}
    </div>
  );
} 