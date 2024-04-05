import { type ClassValue, clsx } from "clsx";
// import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  value: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "EUR", notation = "compact" } = options;

  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

/* export function constructMetadata({
  title = 'digiprops by delavina',
  description = "beautifully designed digital props for filmmaking.",
  image = "/thumbnail.jpg",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@delavinmedia",
    },
    icons,
    // metadataBase: new URL(""),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
} */
