/**
 * Mascot Registry
 *
 * Change the default export to swap the mascot site-wide.
 * All components import `ActiveMascot` from this file.
 */

import MascotClassic from "./MascotClassic";
import MascotTipHat from "./MascotTipHat";
import MascotSeal from "./MascotSeal";
import MascotFullBody from "./MascotFullBody";
import MascotCigar from "./MascotCigar";
import MascotProfile from "./MascotProfile";

// 🎯 ACTIVE MASCOT — change this one line to swap the mascot everywhere
export const ActiveMascot = MascotSeal;

// Named exports for slot-specific use
export const NavMascot = MascotClassic;       // small, clean — nav logo
export const HeroMascot = MascotSeal;         // center seal — hero
export const FooterMascot = MascotClassic;    // small footer mark
export const CertMascot = MascotSeal;         // official docs, PDFs
export const ResultsMascot = MascotCigar;     // case results, testimonials
export const CurrencyMascot = MascotProfile;  // currency-themed pages

// All variants (for preview/testing)
export {
  MascotClassic,
  MascotTipHat,
  MascotSeal,
  MascotFullBody,
  MascotCigar,
  MascotProfile,
};
