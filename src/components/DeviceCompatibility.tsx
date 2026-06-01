import React from 'react';

const DEVICES = [
  { id: 'android', name: 'Android', logoUrl: '/images/device_logos/Android.png' },
  { id: 'androidtv', name: 'Android TV', logoUrl: '/images/device_logos/Android_TV.png' },
  { id: 'apple', name: 'Apple', logoUrl: '/images/device_logos/Apple.png' },
  { id: 'chrome', name: 'Google Chrome', logoUrl: '/images/device_logos/Chrome.png' },
  { id: 'firetv', name: 'Amazon Fire TV', logoUrl: '/images/device_logos/Fire_TV.png' },
  { id: 'formuler', name: 'Formuler', logoUrl: '/images/device_logos/Formuler.png' },
  { id: 'hisense', name: 'Hisense', logoUrl: '/images/device_logos/Hisense.svg' },
  { id: 'huawei', name: 'Huawei', logoUrl: '/images/device_logos/Huawei.png' },
  { id: 'lg', name: 'LG', logoUrl: '/images/device_logos/LG.png' },
  { id: 'lenovo', name: 'Lenovo', logoUrl: '/images/device_logos/Lenovo.png' },
  { id: 'microsoft', name: 'Microsoft', logoUrl: '/images/device_logos/Microsoft.svg' },
  { id: 'nvidia', name: 'NVIDIA Shield', logoUrl: '/images/device_logos/NVIDIA.svg' },
  { id: 'philips', name: 'Philips', logoUrl: '/images/device_logos/Philips.png' },
  { id: 'playstation', name: 'PlayStation', logoUrl: '/images/device_logos/PlayStation.png' },
  { id: 'roku', name: 'Roku', logoUrl: '/images/device_logos/Roku.png' },
  { id: 'samsung', name: 'Samsung', logoUrl: '/images/device_logos/Samsung.png' },
  { id: 'sharp', name: 'Sharp', logoUrl: '/images/device_logos/Sharp.png' },
  { id: 'sony', name: 'Sony', logoUrl: '/images/device_logos/Sony.png' },
  { id: 'tcl', name: 'TCL', logoUrl: '/images/device_logos/TCL.png' },
  { id: 'toshiba', name: 'Toshiba', logoUrl: '/images/device_logos/Toshiba.png' },
  { id: 'vizio', name: 'Vizio', logoUrl: '/images/device_logos/Vizio.png' },
  { id: 'x96', name: 'X96 Box', logoUrl: '/images/device_logos/X96.png' },
  { id: 'xbox', name: 'Xbox', logoUrl: '/images/device_logos/Xbox.png' },
  { id: 'xiaomi', name: 'Xiaomi', logoUrl: '/images/device_logos/Xiaomi.png' },
];

interface DeviceCompatibilityProps {
  onPricingClick: () => void;
}

export default function DeviceCompatibility({ onPricingClick }: DeviceCompatibilityProps) {
  return (
    <section id="devices-section" className="py-16 bg-slate-900 relative overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 text-center">

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Compatibel met al uw apparaten
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Wij streven er naar om ondersteuning te bieden voor al uw favoriete apparaten. Geniet van naadloze toegang op elk apparaat.
          </p>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" id="devices-grid">
          {DEVICES.map((device) => (
            <div
              key={device.id}
              id={`device-card-${device.id}`}
              className="bg-slate-800 rounded-2xl p-4 border border-white/8 shadow-xl shadow-black/20 flex flex-col items-center justify-center h-24 hover:scale-[1.05] hover:border-white/15 transition-all cursor-default"
            >
              <img
                src={device.logoUrl}
                alt={device.name}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="pt-6">
          <button
            id="devices-pricing-cta-btn"
            onClick={onPricingClick}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-semibold rounded-2xl shadow-lg shadow-sky-500/15 transition-all text-xs sm:text-sm tracking-widest cursor-pointer uppercase transform hover:scale-102 active:scale-98"
          >
            BEKIJK ONZE ABONNEMENTEN
          </button>
        </div>

      </div>
    </section>
  );
}
