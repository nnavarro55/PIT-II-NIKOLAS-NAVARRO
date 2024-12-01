export type AddressInfo = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  name: string;
  email: string;
  phone: string;
  whatsappUpdates: boolean;
};

export type BillingInfo = {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export type PaymentType = 'card' | 'pix' | 'bankTransfer';

export type CheckoutInfo = {
  delivery: AddressInfo;
  billing: AddressInfo & {
    sameAsDelivery: boolean;
  };
  payment: {
    type: PaymentType;
    cardInfo?: BillingInfo;
  };
}; 