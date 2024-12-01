import { Input } from "@/components/ui/input";
import { BillingInfo } from "@/types/checkout";
import { useLanguage } from "@/lib/language-provider";

type PaymentInfoFormProps = {
  data?: BillingInfo;
  onChange: (field: keyof BillingInfo, value: string) => void;
};

export function PaymentInfoForm({ data, onChange }: PaymentInfoFormProps) {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold">{t('checkout.paymentInfo')}</h3>
      <div className="mt-4 grid gap-4">
        <Input
          placeholder={t('checkout.cardHolder')}
          value={data?.cardHolder || ""}
          onChange={(e) => onChange('cardHolder', e.target.value)}
          required
        />
        <Input
          placeholder={t('checkout.cardNumber')}
          value={data?.cardNumber || ""}
          onChange={(e) => onChange('cardNumber', e.target.value)}
          maxLength={16}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder={t('checkout.expiryDate')}
            value={data?.expiryDate || ""}
            onChange={(e) => onChange('expiryDate', e.target.value)}
            maxLength={5}
            required
          />
          <Input
            placeholder={t('checkout.cvv')}
            value={data?.cvv || ""}
            onChange={(e) => onChange('cvv', e.target.value)}
            maxLength={4}
            type="password"
            required
          />
        </div>
      </div>
    </div>
  );
} 