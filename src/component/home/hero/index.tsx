import React from "react";
import Link from "next/link";
import WhatsappIcon from "@/component/general/icons/whatsapp-logo.svg";
import LocationMark from "@/component/general/icons/map-pin.svg";

export default function Hero(): React.ReactNode {
  return (
    <div className="hero h-[80vh] rounded-lg mt-[-64px] shadow-md">
      <video
        autoPlay
        muted
        loop
        className="h-[80vh] w-full rounded-lg object-cover"
      >
        {/* Video source : https://www.pexels.com/video/the-strong-force-of-niagara-falls-3173312/ */}
        <source src="/media/water.mp4" type="video/mp4" />
      </video>

      <div id="hero-content" className="p-6 z-40">
        <h2 className="p-6 sm:p-4 text-4xl text-white font-semibold text-center">
          Air sumber dari segala kebaikan
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 sm:p-2 drop-shadow-lg">
          <div className="btn glass text-white drop-shadow-lg hover:bg-emerald-800">
            Pesan Sekarang
            <WhatsappIcon fill="white" className="size-6" />
          </div>
          <div className="text-white drop-shadow-lg">
            <p>atau</p>
          </div>
          <Link href="https://maps.app.goo.gl/2rivm49B5PYrSvVq6">
            <div className="btn glass text-white drop-shadow-lg hover:bg-emerald-800">
              Datang ke depot
              <LocationMark fill="white" className="size-6" />
            </div>
          </Link>
        </div>
      </div>
      <div className="hero-overlay bg-emerald-100 bg-opacity-10 rounded-lg" />
    </div>
  );
}
