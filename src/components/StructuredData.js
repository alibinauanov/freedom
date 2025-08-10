import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Freedom POS",
    "description": "Платежный терминал в вашем смартфоне. Принимайте безналичные платежи по картам через приложение Freedom POS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Android, iOS",
    "publisher": {
      "@type": "Organization",
      "name": "Freedom Bank",
      "url": "https://freedom.kz"
    },
    "offers": {
      "@type": "Offer",
      "price": "1.2",
      "priceCurrency": "KZT",
      "description": "Комиссия 1,2% по всем картам"
    },
    "featureList": [
      "Безналичные платежи",
      "NFC платежи",
      "Мобильный эквайринг",
      "Низкая комиссия 1,2%",
      "Безопасные транзакции"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;