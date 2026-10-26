export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const siteConfig = {
  name: "GlowStudio",
  whatsappPhone: "59164877818",
  whatsappLink: "https://wa.link/e1hv7s",
  instagramUrl:
    "https://www.instagram.com/glowstudiocochabamba?cplk=MTB4OGpiZm1ueXJ5aQ==",
  tiktokUrl:
    "https://www.tiktok.com/@glow.studio.cocha?_r=1&_t=ZS-9ArylqahDyn",
} as const;
