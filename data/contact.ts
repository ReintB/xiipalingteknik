import { Instagram, Youtube, Music } from "lucide-react"
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
  {
    name: "Spotify",
    url: "https://open.spotify.com/playlist/2wqxm2bf7AS4NpTBIO4DYn?si=ebff15eb8643440d",
    icon: React.createElement(Music, { className: "h-5 w-5" }),
  },
]