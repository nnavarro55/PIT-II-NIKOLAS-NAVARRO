export type TranslationKey =
  | 'header.title'
  | 'header.cart'
  | 'header.about'
  | 'header.contact'
  | 'home.title'
  | 'home.filters.category'
  | 'home.filters.categoryAll'
  | 'home.filters.country'
  | 'home.filters.countryAll'
  | 'home.filters.priceRange'
  | 'home.filters.additionalFilters'
  | 'home.filters.inStock'
  | 'home.filters.new'
  | 'home.filters.promotion'
  | 'product.addToCart'
  | 'product.back'
  | 'product.category'
  | 'product.roastLevel'
  | 'product.weight'
  | 'product.outOfStock'
  | 'product.new'
  | 'product.sale'
  | 'product.addedToCart'
  | 'product.addedToCartDesc'
  | 'product.weight.unit'
  | 'product.price'
  | 'product.stockAmount'
  | 'cart.title'
  | 'cart.empty'
  | 'cart.emptyDesc'
  | 'cart.continueShopping'
  | 'cart.summary'
  | 'cart.total'
  | 'cart.checkout'
  | 'checkout.title'
  | 'checkout.orderSummary'
  | 'checkout.scanQRTitle'
  | 'checkout.complete'
  | 'checkout.success'
  | 'checkout.successDesc'
  | 'common.previous'
  | 'common.next'
  | 'common.morePages'
  | 'common.selectCountry'
  | 'common.min'
  | 'common.max'
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'product.roast.light'
  | 'product.roast.medium'
  | 'product.roast.mediumDark'
  | 'product.roast.dark'
  | 'home.filters.roastLevel'
  | 'home.filters.roastLevelAll'
  | 'product.details.origin'
  | 'product.details.roastLevel'
  | 'product.details.weight'
  | 'product.details.category'
  | 'product.details.stock'
  | 'product.details.inStock'
  | 'product.details.outOfStock'
  | 'home.filters.search'
  | 'home.filters.searchPlaceholder'
  | 'checkout.deliveryAddress'
  | 'checkout.billingAddress'
  | 'checkout.paymentInfo'
  | 'checkout.sameAsDelivery'
  | 'checkout.street'
  | 'checkout.city'
  | 'checkout.state'
  | 'checkout.zipCode'
  | 'checkout.country'
  | 'checkout.cardHolder'
  | 'checkout.cardNumber'
  | 'checkout.expiryDate'
  | 'checkout.cvv'
  | 'checkout.submitOrder'
  | 'checkout.paymentMethod'
  | 'checkout.selectPayment'
  | 'checkout.paymentTypes.card'
  | 'checkout.paymentTypes.pix'
  | 'checkout.paymentTypes.bankTransfer'
  | 'checkout.scanQRButton'
  | 'checkout.pixInstructions'
  | 'checkout.bankTransferDetails'
  | 'checkout.bankName'
  | 'checkout.accountHolder'
  | 'checkout.accountNumber'
  | 'checkout.routingNumber'
  | 'checkout.qrCodeTitle'
  | 'hero.title'
  | 'hero.description'
  | 'hero.shopNow'
  | 'hero.learnMore'
  | 'about.title'
  | 'about.mission.title'
  | 'about.mission.description'
  | 'about.history.title'
  | 'about.history.part1'
  | 'about.history.part2'
  | 'about.values.quality.title'
  | 'about.values.quality.description'
  | 'about.values.sustainability.title'
  | 'about.values.sustainability.description'
  | 'about.values.community.title'
  | 'about.values.community.description'
  | 'hero.viewProduct'
  | 'footer.description'
  | 'footer.quickLinks'
  | 'footer.contact'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.followUs'
  | 'footer.address'
  | 'footer.phone'
  | 'footer.rights'
  | 'contact.title'
  | 'contact.getInTouch'
  | 'contact.description'
  | 'contact.sendMessage'
  | 'contact.name'
  | 'contact.email'
  | 'contact.subject'
  | 'contact.message'
  | 'contact.send'
  | 'contact.businessHours'
  | 'contact.weekdays'
  | 'contact.weekends'
  | 'contact.messageSent'
  | 'contact.messageSentDesc'
  | 'home.filters.showAdvanced'
  | 'home.filters.hideAdvanced'
  | 'home.filters.more'
  | 'home.filters.less'
  | 'checkout.name'
  | 'checkout.email'
  | 'checkout.phone'
  | 'checkout.street'
  | 'checkout.city'
  | 'checkout.state'
  | 'checkout.zipCode'
  | 'checkout.country'
  | 'checkout.whatsappUpdates';

type TranslationsType = {
  [lang in 'en' | 'pt']: {
    [key in TranslationKey]: string;
  };
};

export const translations: TranslationsType = {
  en: {
    'header.title': 'Gourmet Coffee',
    'header.cart': 'Cart',
    'header.about': 'About Us',
    'header.contact': 'Contact',
    'home.title': 'Gourmet Coffee Selection',
    'home.filters.category': 'Category',
    'home.filters.categoryAll': 'All Categories',
    'home.filters.country': 'Country of Origin',
    'home.filters.countryAll': 'All Countries',
    'home.filters.priceRange': 'Price Range',
    'home.filters.additionalFilters': 'Additional Filters',
    'home.filters.inStock': 'In Stock',
    'home.filters.new': 'New Arrivals',
    'home.filters.promotion': 'Promotion',
    'home.filters.roastLevel': 'Roast Level',
    'home.filters.roastLevelAll': 'All Roast Levels',
    'home.filters.search': 'Search Products',
    'home.filters.searchPlaceholder': 'Search by product name...',
    'product.addToCart': 'Add to Cart',
    'product.back': 'Back',
    'product.category': 'Category',
    'product.roastLevel': 'Roast Level',
    'product.weight': 'Weight',
    'product.outOfStock': 'Out of Stock',
    'product.new': 'New',
    'product.sale': 'Sale',
    'product.addedToCart': 'Added to cart!',
    'product.addedToCartDesc': '{name} has been added to your cart.',
    'product.weight.unit': 'oz',
    'product.price': '${price}',
    'product.stockAmount': '{amount} in stock',
    'product.roast.light': 'Light',
    'product.roast.medium': 'Medium',
    'product.roast.mediumDark': 'Medium-Dark',
    'product.roast.dark': 'Dark',
    'product.details.origin': 'Origin',
    'product.details.roastLevel': 'Roast Level',
    'product.details.weight': 'Weight',
    'product.details.category': 'Category',
    'product.details.stock': 'Stock',
    'product.details.inStock': 'In Stock',
    'product.details.outOfStock': 'Out of Stock',
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add some delicious coffee to your cart!',
    'cart.continueShopping': 'Continue Shopping',
    'cart.summary': 'Order Summary',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',
    'checkout.title': 'Checkout',
    'checkout.orderSummary': 'Order Summary',
    'checkout.scanQRTitle': 'Scan QR Code to Pay',
    'checkout.complete': 'Complete Order',
    'checkout.success': 'Order completed!',
    'checkout.successDesc': 'Thank you for your purchase.',
    'checkout.deliveryAddress': 'Delivery Address',
    'checkout.billingAddress': 'Billing Address',
    'checkout.paymentInfo': 'Payment Information',
    'checkout.sameAsDelivery': 'Same as delivery address',
    'checkout.street': 'Street Address',
    'checkout.city': 'City',
    'checkout.state': 'State',
    'checkout.zipCode': 'ZIP Code',
    'checkout.country': 'Country',
    'checkout.cardHolder': 'Card Holder Name',
    'checkout.cardNumber': 'Card Number',
    'checkout.expiryDate': 'MM/YY',
    'checkout.cvv': 'CVV',
    'checkout.submitOrder': 'Complete Order',
    'checkout.paymentMethod': 'Payment Method',
    'checkout.selectPayment': 'Select payment method',
    'checkout.paymentTypes.card': 'Credit/Debit Card',
    'checkout.paymentTypes.pix': 'PIX',
    'checkout.paymentTypes.bankTransfer': 'Bank Transfer',
    'checkout.scanQRButton': 'Scan QR Code',
    'checkout.pixInstructions': 'Scan the QR code with your bank app to complete the payment',
    'checkout.bankTransferDetails': 'Bank Transfer Details',
    'checkout.bankName': 'Bank Name',
    'checkout.accountHolder': 'Account Holder',
    'checkout.accountNumber': 'Account Number',
    'checkout.routingNumber': 'Routing Number',
    'checkout.qrCodeTitle': 'Scan QR Code to Pay',
    'common.previous': 'Previous',
    'common.next': 'Next',
    'common.morePages': 'More pages',
    'common.selectCountry': 'Select country',
    'common.min': 'Min',
    'common.max': 'Max',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'hero.title': 'Discover Premium Coffee Experience',
    'hero.description': 'Explore our carefully curated selection of premium coffee beans from around the world. From light to dark roasts, find your perfect cup.',
    'hero.shopNow': 'Shop Now',
    'hero.learnMore': 'Learn More',
    'about.title': 'About Our Coffee Shop',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To provide the finest coffee experience through carefully sourced beans, expert roasting, and passionate service.',
    'about.history.title': 'Our Story',
    'about.history.part1': 'Founded in 2010, our journey began with a simple passion for exceptional coffee and a dream to share it with others.',
    'about.history.part2': 'Over the years, we have grown from a small local roastery to a beloved destination for coffee enthusiasts, while maintaining our commitment to quality and craftsmanship.',
    'about.values.quality.title': 'Quality First',
    'about.values.quality.description': 'We source only the finest coffee beans and maintain strict quality control throughout our roasting process.',
    'about.values.sustainability.title': 'Sustainability',
    'about.values.sustainability.description': 'We are committed to environmentally responsible practices and supporting sustainable farming communities.',
    'about.values.community.title': 'Community',
    'about.values.community.description': 'We believe in building lasting relationships with our customers, suppliers, and local community.',
    'hero.viewProduct': 'View Product',
    'footer.description': 'Providing premium coffee experiences since 2010. Quality beans, expert roasting, passionate service.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.followUs': 'Follow Us',
    'footer.address': '123 Coffee Street, Brew City, BC 12345',
    'footer.phone': 'Phone',
    'footer.rights': 'All rights reserved.',
    'contact.title': 'Contact Us',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'Have questions about our products or services? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.sendMessage': 'Send us a Message',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.businessHours': 'Business Hours',
    'contact.weekdays': 'Monday - Friday',
    'contact.weekends': 'Saturday - Sunday',
    'contact.messageSent': 'Message Sent',
    'contact.messageSentDesc': 'Thank you for your message. We\'ll get back to you soon!',
    'home.filters.showAdvanced': 'Show Advanced Filters',
    'home.filters.hideAdvanced': 'Hide Advanced Filters',
    'home.filters.more': 'More Filters',
    'home.filters.less': 'Less Filters',
    'checkout.name': 'Full Name',
    'checkout.email': 'Email Address',
    'checkout.phone': 'Phone Number',
    'checkout.whatsappUpdates': 'Would you like to receive delivery updates via WhatsApp?'
  },
  pt: {
    'header.title': 'Café Gourmet',
    'header.cart': 'Carrinho',
    'header.about': 'Sobre Nós',
    'header.contact': 'Contato',
    'home.title': 'Seleção de Café Gourmet',
    'home.filters.category': 'Categoria',
    'home.filters.categoryAll': 'Todas as Categorias',
    'home.filters.country': 'País de Origem',
    'home.filters.countryAll': 'Todos os Países',
    'home.filters.priceRange': 'Faixa de Preço',
    'home.filters.additionalFilters': 'Filtros Adicionais',
    'home.filters.inStock': 'Em Estoque',
    'home.filters.new': 'Novidades',
    'home.filters.promotion': 'Promoção',
    'home.filters.roastLevel': 'Nível de Torra',
    'home.filters.roastLevelAll': 'Todos os Níveis',
    'home.filters.search': 'Buscar Produtos',
    'home.filters.searchPlaceholder': 'Buscar por nome do produto...',
    'product.addToCart': 'Adc. ao Carrinho',
    'product.back': 'Voltar',
    'product.category': 'Categoria',
    'product.roastLevel': 'Nível de Torra',
    'product.weight': 'Peso',
    'product.outOfStock': 'Fora de Estoque',
    'product.new': 'Novo',
    'product.sale': 'Promoção',
    'product.addedToCart': 'Adicionado ao carrinho!',
    'product.addedToCartDesc': '{name} foi adicionado ao seu carrinho.',
    'product.weight.unit': 'oz',
    'product.price': '${price}',
    'product.stockAmount': '{amount} em estoque',
    'product.roast.light': 'Clara',
    'product.roast.medium': 'Média',
    'product.roast.mediumDark': 'Média-Escura',
    'product.roast.dark': 'Escura',
    'product.details.origin': 'Origem',
    'product.details.roastLevel': 'Nível de Torra',
    'product.details.weight': 'Peso',
    'product.details.category': 'Categoria',
    'product.details.stock': 'Estoque',
    'product.details.inStock': 'Em Estoque',
    'product.details.outOfStock': 'Fora de Estoque',
    'cart.title': 'Carrinho de Compras',
    'cart.empty': 'Seu carrinho está vazio',
    'cart.emptyDesc': 'Adicione alguns cafés deliciosos ao seu carrinho!',
    'cart.continueShopping': 'Continuar Comprando',
    'cart.summary': 'Resumo do Pedido',
    'cart.total': 'Total',
    'cart.checkout': 'Finalizar Compra',
    'checkout.title': 'Finalizar Pedido',
    'checkout.orderSummary': 'Resumo do Pedido',
    'checkout.scanQRTitle': 'Escaneie o QR Code para Pagar',
    'checkout.complete': 'Completar Pedido',
    'checkout.success': 'Pedido concluído!',
    'checkout.successDesc': 'Obrigado pela sua compra.',
    'checkout.deliveryAddress': 'Endereço de Entrega',
    'checkout.billingAddress': 'Endereço de Cobrança',
    'checkout.paymentInfo': 'Informações de Pagamento',
    'checkout.sameAsDelivery': 'Mesmo endereço de entrega',
    'checkout.street': 'Endereço',
    'checkout.city': 'Cidade',
    'checkout.state': 'Estado',
    'checkout.zipCode': 'CEP',
    'checkout.country': 'País',
    'checkout.cardHolder': 'Nome do Titular do Cartão',
    'checkout.cardNumber': 'Número do Cartão',
    'checkout.expiryDate': 'MM/AA',
    'checkout.cvv': 'CVV',
    'checkout.submitOrder': 'Finalizar Pedido',
    'checkout.paymentMethod': 'Método de Pagamento',
    'checkout.selectPayment': 'Selecione o método de pagamento',
    'checkout.paymentTypes.card': 'Cartão de Crédito/Débito',
    'checkout.paymentTypes.pix': 'PIX',
    'checkout.paymentTypes.bankTransfer': 'Transferência Bancária',
    'checkout.scanQRButton': 'Escaneie o QR Code',
    'checkout.pixInstructions': 'Escaneie o QR code com seu aplicativo bancário para concluir o pagamento',
    'checkout.bankTransferDetails': 'Dados Bancários',
    'checkout.bankName': 'Banco',
    'checkout.accountHolder': 'Titular da Conta',
    'checkout.accountNumber': 'Número da Conta',
    'checkout.routingNumber': 'Agência',
    'checkout.qrCodeTitle': 'Escaneie o QR Code para Pagar',
    'common.previous': 'Anterior',
    'common.next': 'Próximo',
    'common.morePages': 'Mais páginas',
    'common.selectCountry': 'Selecionar país',
    'common.min': 'Mín',
    'common.max': 'Máx',
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'hero.title': 'Descubra a Experiência do Café Premium',
    'hero.description': 'Explore nossa seleção cuidadosamente selecionada de grãos de café premium de todo o mundo. De torras claras a escuras, encontre sua xícara perfeita.',
    'hero.shopNow': 'Comprar Agora',
    'hero.learnMore': 'Saiba Mais',
    'about.title': 'Sobre Nossa Cafeteria',
    'about.mission.title': 'Nossa Missão',
    'about.mission.description': 'Proporcionar a melhor experiência em café através de grãos cuidadosamente selecionados, torra especializada e serviço apaixonado.',
    'about.history.title': 'Nossa História',
    'about.history.part1': 'Fundada em 2010, nossa jornada começou com uma simples paixão por café excepcional e um sonho de compartilhá-lo com outros.',
    'about.history.part2': 'Ao longo dos anos, crescemos de uma pequena torrefação local para um destino querido por entusiastas do café, mantendo nosso compromisso com qualidade e artesanato.',
    'about.values.quality.title': 'Qualidade em Primeiro Lugar',
    'about.values.quality.description': 'Selecionamos apenas os melhores grãos de café e mantemos um controle rigoroso de qualidade em todo nosso processo de torra.',
    'about.values.sustainability.title': 'Sustentabilidade',
    'about.values.sustainability.description': 'Estamos comprometidos com práticas ambientalmente responsáveis e apoio às comunidades agrícolas sustentáveis.',
    'about.values.community.title': 'Comunidade',
    'about.values.community.description': 'Acreditamos em construir relacionamentos duradouros com nossos clientes, fornecedores e comunidade local.',
    'hero.viewProduct': 'Ver Produto',
    'footer.description': 'Proporcionando experiências premium em café desde 2010. Grãos de qualidade, torra especializada, serviço apaixonado.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.followUs': 'Siga-nos',
    'footer.address': 'Rua do Café, 123, Cidade do Café, BC 12345',
    'footer.phone': 'Telefone',
    'footer.rights': 'Todos os direitos reservados.',
    'contact.title': 'Contato',
    'contact.getInTouch': 'Entre em Contato',
    'contact.description': 'Tem perguntas sobre nossos produtos ou serviços? Adoraríamos ouvir você. Envie-nos uma mensagem e responderemos o mais breve possível.',
    'contact.sendMessage': 'Envie uma Mensagem',
    'contact.name': 'Seu Nome',
    'contact.email': 'Endereço de Email',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.businessHours': 'Horário de Funcionamento',
    'contact.weekdays': 'Segunda - Sexta',
    'contact.weekends': 'Sábado - Domingo',
    'contact.messageSent': 'Mensagem Enviada',
    'contact.messageSentDesc': 'Obrigado pela sua mensagem. Retornaremos em breve!',
    'home.filters.showAdvanced': 'Mostrar Filtros Avançados',
    'home.filters.hideAdvanced': 'Esconder Filtros Avançados',
    'home.filters.more': 'Mais Filtros',
    'home.filters.less': 'Menos Filtros',
    'checkout.name': 'Nome Completo',
    'checkout.email': 'Endereço de Email',
    'checkout.phone': 'Número de Telefone',
    'checkout.whatsappUpdates': 'Gostaria de receber atualizações de entrega via WhatsApp?'
  }
}; 