import { Instagram, Youtube } from "lucide-react"
import React from "react"

export const contactInfo = {
  email: "xiipalingtekniks@gmail.com",
  phone: "0822 9721 0964",
  address: "Jl. Bengawan No.6, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114",
}

export const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/xiipalingteknik/?hl=id",
    icon: React.createElement(Instagram, { className: "h-5 w-5" }),
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@xiipalingteknik",
    icon: React.createElement(Youtube, { className: "h-5 w-5" }),
  },
]