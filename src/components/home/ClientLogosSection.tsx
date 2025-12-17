import { motion } from 'framer-motion';

const clients = [
  { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1200px-Google_Ads_logo.svg.png' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png' },
  { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png' },
  { name: 'Zapier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Zapier_logo.svg/1200px-Zapier_logo.svg.png' },
  { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png' },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png' },
];

export const ClientLogosSection = () => {
  return (
    <section className="py-12 border-y border-border/30 bg-muted/30 overflow-hidden">
      <div className="container-tight">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Integrated with leading platforms
        </p>
        
        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: [0, -800] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
